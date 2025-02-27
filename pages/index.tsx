import { Answer } from "@/components/Answer/Answer";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AnswerTip } from "@/components/AnswerTip";
import TagCloud from '../components/TagCloud';
import { Book } from '@/components/Book';
import { ImpromptuChunk } from "@/types";
import { IconSearch } from "@tabler/icons-react";
import Head from "next/head";
import endent from "endent";
import Image from "next/image";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { fetchEventSource } from '@microsoft/fetch-event-source';
import { ExcerptTip } from "@/components/ExcerptTip";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [tags] = useState<string[]>(['The Bliss Copy','Criminal Justice', 'Education Statistics', 'Social Media',
  'Theodore Adorno', 'The Gettysburg Address', 'The Great War', 'Olduvai Gorge', 'Stable Diffusion', 'MrBeast', 'Impossible Interviews', 'Steven Mintz', 'Gong\'an', 'The New Jim Crow', 'Petrarchan Sonnets', 'Zoological Nomenclature']); 

  const [ready, setReady] = useState<boolean>(true);

  const handleTagClick = (tag: string): void => {
    if (loading) {
      alert("Hold on still loading.");
      return;
    }
    // setAnswer("");
    const newQuery:string = `What does Impromptu say about ${tag}?`; 
    setQuery(newQuery);
    inputRef.current?.focus();
    // setExecuteAnswer(true); 
  };


  const envTest = process.env.NEXT_PUBLIC_OPENAI_API_KEY ?? process.env.OPENAI_API_KEY ?? "";

  const [query, setQuery] = useState<string>("");
  const [chunks, setChunks] = useState<ImpromptuChunk[]>([]);
  const [answer, setAnswer] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);  

  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [mode, setMode] = useState<"search" | "chat">("search");
  const [matchCount, setMatchCount] = useState<number>(5);

  // Handle answer 
  const handleAnswer = async () => {
    if (!query) {
      alert("Please enter a query.");
      return;
    }
    if (!ready) {
      alert("Hold on, not ready.");
      return;
    }

    setAnswer("");
    setChunks([]);
    setLoading(true);
    setReady(false);
    
    // Similarity search for relevant chunks 
    const search_results = await fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query })
     });

    //  console.log('new Retrievals', search_results);

     if (!search_results.ok) {
      setLoading(false);
      throw new Error(search_results.statusText);
    }

    const results: ImpromptuChunk[] = await search_results.json();
    setChunks(results);
    // console.log('chunks set:', chunks)

    const prompt = endent`
    You are a helpful assistant that accurately answers queries using excerpt from the full text of Reid Hoffman's book Impromptu. Use the text provided to form your answer, but avoid copying word-for-word from the posts. Try to use your own words when possible. Make your answer 6 sentences or less. Be accurate, helpful, concise, and clear. Use the excerpts that follow to provide an answer to the query: "${query}"

    Excerpts:
    ${results?.map((d: any) => d.pageContent).join("\n\n")}
    `;

    // console.log(prompt)

    const answerResponse = await fetch("/api/answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
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

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    setLoading(false);

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setAnswer((prev) => prev + chunkValue);
    }
    // setExecuteAnswer(false); 
    setReady(true);

    inputRef.current?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (mode === "search") {
        handleAnswer();
      } else {
        return;
      }
    }
  };

  const handleSave = () => {
    localStorage.setItem("PG_MATCH_COUNT", matchCount.toString());
    localStorage.setItem("PG_MODE", mode);

    setShowSettings(false);
    inputRef.current?.focus();
  };

  const handleClear = () => {
    localStorage.removeItem("PG_KEY");
    localStorage.removeItem("PG_MATCH_COUNT");
    localStorage.removeItem("PG_MODE");

    setMatchCount(5);
    setMode("search");
  };

  // useEffect(() => {
  //   if (query !== '') {
  //     handleAnswer();
  //   }
  // }, [query]);

  // useEffect(() => {
  //   const PG_KEY = localStorage.getItem("PG_KEY");
  //   const PG_MATCH_COUNT = localStorage.getItem("PG_MATCH_COUNT");
  //   const PG_MODE = localStorage.getItem("PG_MODE");

  //   if (PG_MATCH_COUNT) {
  //     setMatchCount(parseInt(PG_MATCH_COUNT));
  //   }

  //   if (PG_MODE) {
  //     setMode(PG_MODE as "search" | "chat");
  //   }

  //   inputRef.current?.focus();
  // }, []);


  // Render page
  return (
    <>
      <Head>
        <title>Impromptu GPT</title>
        <meta
          name="description"
          content={`AI-powered search and chat for Reid Hoffman's book, Impromptu. `}
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
          <div className="mx-auto flex h-full w-full max-w-[750px] flex-col items-center px-5 mt-3">

            <Book />
            
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

                {/* <div className="mt-2">
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
                </div> */}

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

              <div className="relative w-full mt-3">
                <IconSearch className="absolute top-3 w-10 left-1 h-6 rounded-full opacity-50 sm:left-3 sm:top-4 sm:h-8" />
                <input
                  ref={inputRef}
                  className="h-12 w-full rounded-full border 
                  text-base
                  border-zinc-600 pr-12 pl-10 focus:border-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-800 sm:h-16 sm:py-2 sm:pr-16 sm:pl-16"
                  type="text"
                  placeholder="What does Impromptu say about hallucinations?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>

            {loading ? (
              <div className="mt-5 w-full">
                {mode === "chat" && (
                  <>
                    <div className="font-bold text-xl">Answer</div>
                    <div className="animate-pulse mt-2">
                      <div className="h-4 bg-gray-100"></div>
                      <div className="h-4 bg-gray-100  mt-2"></div>
                      <div className="h-4 bg-gray-100  mt-2"></div>
                      <div className="h-4 bg-gray-100  mt-2"></div>
                      <div className="h-4 bg-gray-100  mt-2"></div>
                    </div>
                  </>
                )}

                <div className="font-bold text-xl mt-4">Excerpts</div>
                <div className="animate-pulse mt-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded mt-2"></div>
                  <div className="h-4 bg-gray-200 rounded mt-2"></div>
                  <div className="h-4 bg-gray-200 rounded mt-2"></div>
                  <div className="h-4 bg-gray-200 rounded mt-2"></div>
                </div>
              </div>
            ) : answer ? (
              <div className="mt-5">
                <div className="font-bold text-xl mb-4">
                  Answer
                  {/* <AnswerTip /> */}
                </div>
                
                <Answer text={answer} />

                <div className="mt-4 mb-6">
                  <div className="font-bold text-xl">
                    Excerpts
                    {/* <ExcerptTip /> */}
                  </div>

                  {chunks.map((chunk, index) => (
                    <div key={index}>
                      <div className="mt-4 border-2 border-dashed border-zinc-600 bg-gray-200 rounded-lg p-4">
                        <div className="flex justify-between">
                          <div className="flex items-center">
                            <div className="font-bold text-base">{chunk.metadata.chapter_display}</div>
                          </div>
                        </div>
                        <div className="mt-4 whitespace-pre-wrap text-sm">{chunk.pageContent}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : chunks.length > 0 ? (
              <div className="mt-6 pb-6">
                <div className="font-bold text-xl">Excerpts</div>
                {chunks.map((chunk, index) => (
                  <div key={index}>
                    <div className="mt-4 border-2 border-dashed bg-gray-200 border-zinc-600 rounded-lg p-4">
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="font-bold text-base">{chunk.metadata.chapter_display}</div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">{chunk.pageContent}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-4 pb-6 text-center text-xs">AI-powered search for <a target="_blank" href="https://www.impromptubook.com/"><i>Impromptu: Amplifying Our Humanity Through AI</i></a></div>
            )}
          </div>
        </div>

        <TagCloud 
          tags={tags} 
          onTagClick={handleTagClick} />
        <Footer />
      </div>
    </>
  );
}


