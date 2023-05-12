import { Answer } from "@/components/Answer/Answer";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ImpromptuChunk } from "@/types";
import { IconSearch } from "@tabler/icons-react";
import Head from "next/head";
import endent from "endent";
import Image from "next/image";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { fetchEventSource } from '@microsoft/fetch-event-source';

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);

  const envTest = process.env.NEXT_PUBLIC_OPENAI_API_KEY ?? process.env.OPENAI_API_KEY ?? "";

  const [query, setQuery] = useState<string>("");
  const [chunks, setChunks] = useState<ImpromptuChunk[]>([]);
  const [answer, setAnswer] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);  

  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [mode, setMode] = useState<"search" | "chat">("chat");
  const [matchCount, setMatchCount] = useState<number>(5);
  const [apiKey, setApiKey] = useState<string>(envTest);

  const handleSearch = async () => {
    if (!apiKey) {
      alert("Please enter an API key.");
      return;
    }
    if (!query) {
      alert("Please enter a query.");
      return;
    }

    setAnswer("");
    setChunks([]);
    setLoading(true);

    const searchResponse = await fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query, apiKey, matches: matchCount })
    });

    if (!searchResponse.ok) {
      setLoading(false);
      throw new Error(searchResponse.statusText);
    }

    const results: ImpromptuChunk[] = await searchResponse.json();
    setChunks(results);
    setLoading(false);
    inputRef.current?.focus();
    return results;
  };

  // Handle answer 
  const handleAnswer = async () => {

    if (!apiKey) {
      alert("Please enter an API key.");
      return;
    }
    if (!query) {
      alert("Please enter a query.");
      return;
    }
    
    setAnswer("");
    setChunks([]);
    setLoading(true);
    
    // Similarity search for relevant chunks 
    const search_results = await fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query, apiKey, matches: matchCount })
     });

     if (!search_results.ok) {
      setLoading(false);
      throw new Error(search_results.statusText);
    }
    const results: ImpromptuChunk[] = await search_results.json();
    setChunks(results);
    // console.log('chunks set:', chunks)

    const prompt = endent`
    You are a helpful assistant that accurately answers queries using the full text of Reid Hoffman's book Impromptu. Use the text provided to form your answer, but avoid copying word-for-word from the posts. Try to use your own words when possible. Make your answer 6 sentences or less. Be accurate, helpful, concise, and clear. Use the following passages to provide an answer to the query: "${query}"

    ${results?.map((d: any) => d.pageContent).join("\n\n")}
    `;

    // console.log(prompt)

    const answerResponse = await fetch("/api/answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt, apiKey })
    });

    // console.log(answerResponse)

    if (!answerResponse.ok) {
      setLoading(false);
      throw new Error(answerResponse.statusText);
    }

    const data = answerResponse.body;

    if (!data) {
      return;
    }

    setLoading(false);

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setAnswer((prev) => prev + chunkValue);
    }

    inputRef.current?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (mode === "search") {
        handleAnswer();
      } else {
        handleAnswer();
      }
    }
  };

  const handleSave = () => {
    if (apiKey.length !== 51) {
      alert("Please enter a valid API key.");
      return;
    }

    localStorage.setItem("PG_KEY", apiKey);
    localStorage.setItem("PG_MATCH_COUNT", matchCount.toString());
    localStorage.setItem("PG_MODE", mode);

    setShowSettings(false);
    inputRef.current?.focus();
  };

  const handleClear = () => {
    localStorage.removeItem("PG_KEY");
    localStorage.removeItem("PG_MATCH_COUNT");
    localStorage.removeItem("PG_MODE");

    setApiKey("");
    setMatchCount(5);
    setMode("search");
  };

  useEffect(() => {
    const PG_KEY = localStorage.getItem("PG_KEY");
    const PG_MATCH_COUNT = localStorage.getItem("PG_MATCH_COUNT");
    const PG_MODE = localStorage.getItem("PG_MODE");

    if (PG_KEY) {
      setApiKey(PG_KEY);
    }

    if (PG_MATCH_COUNT) {
      setMatchCount(parseInt(PG_MATCH_COUNT));
    }

    if (PG_MODE) {
      setMode(PG_MODE as "search" | "chat");
    }

    inputRef.current?.focus();
  }, []);


  // Render page
  return (
    <>
      <Head>
        <title>Impromptu GPT</title>
        <meta
          name="description"
          content={`AI-powered search and chat for the Impromptu book. `}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.jpeg"
        />
      </Head>

      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex-1 overflow-auto">
          <div className="mx-auto flex h-full w-full max-w-[750px] flex-col items-center px-3 pt-4 sm:pt-8">
            <button
              className="mt-4 flex cursor-pointer items-center space-x-2 rounded-full border border-zinc-600 px-3 py-1 text-sm hover:opacity-50 hidden"
              onClick={() => setShowSettings(!showSettings)}
            >
              {showSettings ? "Hide" : "Show"} Settings
            </button>

            {showSettings && (
              <div className="w-[340px] sm:w-[400px]">
                
                {/* <div>
                  <div>Mode</div>
                  <select
                    className="max-w-[400px] block w-full cursor-pointer rounded-md border border-gray-300 p-2 text-black shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                    value={mode}
                    onChange={(e) => setMode(e.target.value as "search" | "chat")}
                  >
                    <option value="search">Search</option>
                    <option value="chat">Chat</option>
                  </select>
                </div> */}

                {/* <div className="mt-2">
                  <div>Passage Count</div>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={matchCount}
                    onChange={(e) => setMatchCount(Number(e.target.value))}
                    className="max-w-[400px] block w-full rounded-md border border-gray-300 p-2 text-black shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                  />
                </div> */}

                <div className="mt-2">
                  <div>OpenAI API Key</div>
                  <input
                    type="password"
                    placeholder="OpenAI API Key"
                    className="max-w-[400px] block w-full rounded-md border border-gray-300 p-2 text-black shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                    value={apiKey}
                    onChange={(e) => {
                      setApiKey(e.target.value);

                      if (e.target.value.length !== 51) {
                        setShowSettings(true);
                      }
                    }}
                  />
                </div>

                <div className="mt-4 flex space-x-2 justify-center">
                  <div
                    className="flex cursor-pointer items-center space-x-2 rounded-full bg-green-500 px-3 py-1 text-sm text-white hover:bg-green-600"
                    onClick={handleSave}
                  >
                    Save
                  </div>

                  <div
                    className="flex cursor-pointer items-center space-x-2 rounded-full bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
                    onClick={handleClear}
                  >
                    Clear
                  </div>
                </div>
              </div>
            )}

            {apiKey.length === 51 ? (
              <div className="relative w-full mt-2">
                <IconSearch className="absolute top-3 w-10 left-1 h-6 rounded-full opacity-50 sm:left-3 sm:top-4 sm:h-8" />

                <input
                  ref={inputRef}
                  className="h-12 w-full rounded-full border border-zinc-600 pr-12 pl-11 focus:border-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-800 sm:h-16 sm:py-2 sm:pr-16 sm:pl-16 sm:text-lg"
                  type="text"
                  placeholder="What does the book say about hallucinations?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                />

              </div>
            ) : (
              <div className="text-center font-bold text-3xl mt-7">
                Please enter your
                <a
                  className="mx-2 underline hover:opacity-50"
                  href="https://openai.com/product"
                >
                  OpenAI API key
                </a>
                in settings.
              </div>
            )}

            {loading ? (
              <div className="mt-6 w-full">
                {mode === "chat" && (
                  <>
                    <div className="font-bold text-2xl">Answer</div>
                    <div className="animate-pulse mt-2">
                      <div className="h-4 bg-gray-300 rounded"></div>
                      <div className="h-4 bg-gray-300 rounded mt-2"></div>
                      <div className="h-4 bg-gray-300 rounded mt-2"></div>
                      <div className="h-4 bg-gray-300 rounded mt-2"></div>
                      <div className="h-4 bg-gray-300 rounded mt-2"></div>
                    </div>
                  </>
                )}

                <div className="font-bold text-2xl mt-6">Passages</div>
                <div className="animate-pulse mt-2">
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded mt-2"></div>
                  <div className="h-4 bg-gray-300 rounded mt-2"></div>
                  <div className="h-4 bg-gray-300 rounded mt-2"></div>
                  <div className="h-4 bg-gray-300 rounded mt-2"></div>
                </div>
              </div>
            ) : answer ? (
              <div className="mt-6">
                <div className="font-bold text-2xl mb-2">Answer</div>
                <Answer text={answer} />

                <div className="mt-6 mb-16">
                  <div className="font-bold text-2xl">Passages</div>

                  {chunks.map((chunk, index) => (
                    <div key={index}>
                      <div className="mt-4 border border-zinc-600 rounded-lg p-4">
                        <div className="flex justify-between">
                          <div className="flex items-center">
                            <div className="font-bold text-xl">{chunk.metadata.chapter_display}</div>
                          </div>
                        </div>
                        <div className="mt-4 whitespace-pre-wrap">{chunk.pageContent}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : chunks.length > 0 ? (
              <div className="mt-6 pb-16">
                <div className="font-bold text-2xl">Passages</div>
                {chunks.map((chunk, index) => (
                  <div key={index}>
                    <div className="mt-4 border border-zinc-600 rounded-lg p-4">
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="font-bold text-xl">{chunk.metadata.chapter_display}</div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">{chunk.pageContent}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-6 text-center text-lg">{`AI-powered search and chat for the Impromptu ebook.`}</div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}


