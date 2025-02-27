import React, { FC } from 'react';

export const AnswerTip: FC = () => {
  return (
    <div className="group relative cursor-pointer inline-block">
        <svg className="w-5 h-5 ml-2 text-gray-900 hover:text-yellow-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
        </svg>
        <span className="sr-only">Show information</span>
        <div className="absolute invisible bottom-7 group-hover:visible w-40 bg-black text-black px-4 mb-3 py-2 text-xs rounded-md">  
          <p className="bg-black leading-2 text-yellow-500 pt-2 pb-2">
          GPT-4 taps into Pinecone's data to formulate an answer rooted in <i>Impromptu’s</i> content.
          </p>
          <svg className="absolute z-10  bottom-[-10px] " width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10L0 0L16 1.41326e-06L8 10Z" fill="black"/>
          </svg>
        </div>
    </div>
  );
};