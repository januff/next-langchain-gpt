import { PineconeStore } from "langchain/vectorstores";
import { OpenAIEmbeddings } from "langchain/embeddings";
import { PineconeClient } from "@pinecone-database/pinecone";
import { NextApiRequest, NextApiResponse } from "next";

//export const config = {
//  runtime: "edge"
// };

type Data = {};
const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    // Query 
    const query = req.body.query;
    const apiKey = req.body.apiKey;
    process.env.OPENAI_API_KEY = apiKey;
    const pineKey = process.env.PINECONE_API_KEY ?? ""
    // console.log(pineKey)

    // Vector DB 
      const pinecone = new PineconeClient();
      await pinecone.init({
        environment: "us-west4-gcp", 
        apiKey: process.env.PINECONE_API_KEY ?? "",
      });
      // console.log(pinecone)
      const index = pinecone.Index("impromptu");
      const vectorStore = await PineconeStore.fromExistingIndex(
        new OpenAIEmbeddings(), {pineconeIndex: index},
      );
      // Return chunks to display as references 
      const results = await vectorStore.similaritySearch(query, 5);
      res.status(200).send(results); 
    }

export default handler;