import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import { FC } from "react";
import king from "../public/impromptu.jpeg";

export const Navbar: FC = () => {
  return (
    <div className="flex h-[60px] border-b border-gray-300 py-2 px-3 items-center justify-between">
      <div className="font-bold text-lg flex items-center">
          <Image
            className="hidden sm:flex"
            src={king}
            alt="Impromptu by Reid Hoffman & GPT"
            height={40}
          />
          <div className="ml-3">Impromptu GPT</div>
      </div>
      <div>
        <a
          className="flex items-center hover:opacity-50"
          href="https://www.impromptubook.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="hidden sm:flex">impromptubook.com</div>

          <IconExternalLink
            className="ml-1"
            size={20}
          />
        </a>
      </div>
    </div>
  );
};
