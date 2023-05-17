// https://tailwindflex.com/rafferty/minimal-tag-cloud-design-with-heading-text

import React, { FC, MouseEvent } from 'react';

interface TagCloudProps {
  tags: string[];
  onTagClick: (tag: string) => void;
}

const TagCloud: FC<TagCloudProps> = ({ tags, onTagClick }) => (
  <div className="tag-cloud bg-gray-300">
      <h2 className="flex flex-row flex-nowrap items-center mt-4">
        <span className="flex-grow block border-t border-black"></span>
        <span className="flex-none block mx-4 px-4 py-2.5 text-md rounded leading-none font-medium bg-black text-white">
        Explore Topics</span>
        <span className="flex-grow block border-t border-black"></span>
    </h2>
    <div className="tag-cloud flex justify-center flex-wrap gap-2 p-4 max-w-lg mx-auto my-1">
    {tags.map((tag, index) => (     
        <button 
          className="tag uppercase font-semibold px-2 py-1 rounded bg-gray-200 text-gray-700 text-xs hover:bg-gray-300 transition duration-200 ease-in-out"
          key={index} 
          onClick={(event: MouseEvent<HTMLButtonElement>) => onTagClick(tag)}>
          {tag}
        </button>
    ))}
    </div>
  </div>
);

export default TagCloud;