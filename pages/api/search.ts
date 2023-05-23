import { PineconeClient } from "@pinecone-database/pinecone";
import { AttributeInfo } from "langchain/schema/query_constructor";
import { OpenAIEmbeddings } from "langchain/embeddings";
import {
  SelfQueryRetriever,
  BasicTranslator,
} from "langchain/retrievers/self_query";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { OpenAI } from "langchain/llms/openai";
import { NextApiRequest, NextApiResponse } from "next";

//export const config = {
//  runtime: "edge"
// };

type Data = {};
const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    // Query 
    const query = req.body.query;

    const attributeInfo: AttributeInfo[] = [
      {
        name: "author",
        description: "The author of the excerpt",
        type: "string",
      },
      {
        name: "page_number",
        description: "The page number of the excerpt",
        type: "number",
      },
      {
        name: "chapter_number",
        description: "The chapter number of the excerpt",
        type: "number",
      },
      {
        name: "chapter_name",
        description: "The chapter name of the excerpt",
        type: "string",
      },
      {
        name: "block_number",
        description: "The numerical order of the excerpt",
        type: "number",
      },
    ];

    // Vector DB 
      const pinecone = new PineconeClient();
      await pinecone.init({
        environment: "us-west4-gcp", 
        apiKey: process.env.PINECONE_API_KEY ?? "",
      });
      // console.log(pinecone)

      const index = pinecone.Index("impromptu");

      // const embeddings = new OpenAIEmbeddings();
      const llm = new OpenAI();
      const documentContents = "Excerpts from the book Impromptu, jointly authored by Reid Hoffman, GPT-3, and GPT 4."

      const vectorStore = await PineconeStore.fromExistingIndex(
          new OpenAIEmbeddings(), {pineconeIndex: index},
        );

      // const vectorStore = await PineconeStore.fromDocuments(docs, embeddings, {
      //   pineconeIndex: index,
      // });

      const selfQueryRetriever = await SelfQueryRetriever.fromLLM({
        llm,
        vectorStore,
        documentContents,
        attributeInfo,
        /**
         * We need to create a basic translator that translates the queries into a
         * filter format that the vector store can understand. We provide a basic translator
         * translator here (which works for Chroma and Pinecone), but you can create
         * your own translator by extending BaseTranslator abstract class. Note that the
         * vector store needs to support filtering on the metadata attributes you want to
         * query on.
         */
        structuredQueryTranslator: new BasicTranslator(),
      });


      // const vectorStore = await PineconeStore.fromExistingIndex(
      //   new OpenAIEmbeddings(), {pineconeIndex: index},
      // );

      // Return chunks to display as references 
      // const results = await vectorStore.similaritySearch(query, 5);

      const results = await selfQueryRetriever.getRelevantDocuments(query)
      
      // console.log('results: ', results)
      res.status(200).send(results); 
    }

export default handler;