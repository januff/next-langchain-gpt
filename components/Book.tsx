import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import { FC } from "react";
import cover from "../public/cover-impromptu.jpg";

export const Book: FC = () => {
  return (
    <div className="flex h-[300px] items-center justify-center">
      <div className="flex flex-col text-left ml-2 max-w-[250px] tracking-tight">
          <h1 className="text-4xl font-black tracking-tight">Impromptu</h1>
          <h2 className="text-sm font-bold tracking-tight mt-2">Amplifying Our Humanity Through AI</h2>
          <span className="my-1 mt-2 text-xs font-semibold">A new book by Reid Hoffman, with GPT-4.</span>
          <span className="my-1 text-xs font-semibold">In the past, you had to read books. Now, you can simply ask them questions. Try it out!</span>
          <span className="my-1 text-xs font-semibold">If you like what you see, you can download a free PDF of the complete book <a className="font-bold text-yellow-500" download href="https://www.impromptubook.com/wp-content/uploads/2023/03/impromptu-rh.pdf">here</a>.</span>
          <span className="my-1 text-xs font-semibold">You can also buy Impromptu on <a className="text-yellow-500 font-bold" target="_blank" href="https://www.amazon.com/dp/B0BYG9V1RN?ref_=cm_sw_r_cp_ud_dp_5ZXGSWX6VC02XH7Z15B1">Amazon</a>.</span>
      </div>

      <div className="font-bold text-lg flex items-center">
          <Image
            className="ml-1"
            src={cover}
            alt="Impromptu by Reid Hoffman & GPT"
            height={290}
          />
      </div>

    </div>
  );
};
