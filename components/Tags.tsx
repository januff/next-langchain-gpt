import { FC } from "react";

export const Tags: FC = () => {
  return (

<div>
    <h2 className="flex flex-row flex-nowrap items-center mt-4">
        <span className="flex-grow block border-t border-black"></span>
        <span className="flex-none block mx-4 px-4 py-2.5 text-md rounded leading-none font-medium bg-black text-white">
        Explore Topics
    </span>
        <span className="flex-grow block border-t border-black"></span>
    </h2>

    <div className="tag-cloud flex justify-center flex-wrap gap-2 p-4 max-w-sm mx-auto my-4">
        <button className="tag px-2 py-1 rounded bg-gray-200 text-gray-700 text-sm hover:bg-gray-300 transition duration-200 ease-in-out">Clickbait</button>
        <button className="tag px-2 py-1 rounded bg-gray-200 text-gray-700 text-sm hover:bg-gray-300 transition duration-200 ease-in-out">Frankfurt School</button>
        <button className="tag px-2 py-1 rounded bg-gray-200 text-gray-700 text-sm hover:bg-gray-300 transition duration-200 ease-in-out">Gettysburg Address</button>
        <button className="tag px-2 py-1 rounded bg-gray-200 text-gray-700 text-sm hover:bg-gray-300 transition duration-200 ease-in-out">Great War</button>
        <button className="tag px-2 py-1 rounded bg-gray-200 text-gray-700 text-sm hover:bg-gray-300 transition duration-200 ease-in-out">Midjourney</button>
        <button className="tag px-2 py-1 rounded bg-gray-200 text-gray-700 text-sm hover:bg-gray-300 transition duration-200 ease-in-out">MrBeast</button>
        <button className="tag px-2 py-1 rounded bg-gray-200 text-gray-700 text-sm hover:bg-gray-300 transition duration-200 ease-in-out">Impossible Interviews</button>
        <button className="tag px-2 py-1 rounded bg-gray-200 text-gray-700 text-sm hover:bg-gray-300 transition duration-200 ease-in-out">National Press Club</button>
        <button className="tag px-2 py-1 rounded bg-gray-200 text-gray-700 text-sm hover:bg-gray-300 transition duration-200 ease-in-out">Steven Mintz</button>
        <button className="tag px-2 py-1 rounded bg-gray-200 text-gray-700 text-sm hover:bg-gray-300 transition duration-200 ease-in-out">Polaroid Instamatics</button>
        <button className="tag px-2 py-1 rounded bg-gray-200 text-gray-700 text-sm hover:bg-gray-300 transition duration-200 ease-in-out">Jīngāng Jīng</button>
        <button className="tag px-2 py-1 rounded bg-gray-200 text-gray-700 text-sm hover:bg-gray-300 transition duration-200 ease-in-out">New Jim Crow</button>
        <button className="tag px-2 py-1 rounded bg-gray-200 text-gray-700 text-sm hover:bg-gray-300 transition duration-200 ease-in-out">Petrarchan</button>
        <button className="tag px-2 py-1 rounded bg-gray-200 text-gray-700 text-sm hover:bg-gray-300 transition duration-200 ease-in-out">Socrates</button>
        <button className="tag px-2 py-1 rounded bg-gray-200 text-gray-700 text-sm hover:bg-gray-300 transition duration-200 ease-in-out">Spanish Flu</button>
    </div>
</div>
  );
};
