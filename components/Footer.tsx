import { IconBrandGithub, IconBrandTwitter } from "@tabler/icons-react";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="flex h-[50px] border-t bg-gray-200 py-2 px-8 items-center sm:justify-between justify-center">
      <div className="hidden sm:flex"></div>

      <div className="hidden sm:flex italic text-sm">
        <code
          className="text-yellow-500"> 
          <a
            href="https://github.com/januff/"
            target="_blank"
            rel="noreferrer">
            Joey Anuff&nbsp;
          </a>
        </code>
        (from repos by 
          <code className="ml-1 text-yellow-500"> 
            <a
              className="hover:opacity-50 ml-1"
              href="https://github.com/PineappleExpress808/lex-gpt"
              target="_blank"
              rel="noreferrer"
            >
            Lance Martin
            </a> 
          </code>
        &nbsp;and
          <code className="ml-1 text-yellow-500">
            <a
              className="hover:opacity-50 ml-1"
              href="https://github.com/mckaywrigley/chatbot-ui"
              target="_blank"
              rel="noreferrer"
            >
              Mckay Wrigley
            </a>
          </code>
        )
      </div>

      <div className="flex space-x-4">
        <a
          className="flex items-center hover:opacity-50"
          href="https://twitter.com/JoeyAnuff"
          target="_blank"
          rel="noreferrer"
        >
          <IconBrandTwitter size={24} />
        </a>

        <a
          className="flex items-center hover:opacity-50"
          href="https://github.com/januff/"
          target="_blank"
          rel="noreferrer"
        >
          <IconBrandGithub size={24} />
        </a>
      </div>
    </div>
  );
};
