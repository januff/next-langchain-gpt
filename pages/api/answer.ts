import { OpenAIStream } from "@/utils";

export const config = {
  runtime: "edge"
};

const handler = async (req: Request): Promise<Response> => {

  const openKey = process.env.OPENAI_API_KEY ?? "";

  try {
    const { prompt } = (await req.json()) as {
      prompt: string;
    };

    // console.log('answer prompt', prompt)

    const stream = await OpenAIStream(prompt, openKey);

    return new Response(stream);
  } catch (error) {
    console.error(error);
    return new Response("Error", { status: 500 });
  }
};

export default handler;