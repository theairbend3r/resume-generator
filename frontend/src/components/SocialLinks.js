import React from "react";
import "twin.macro";
import { AiOutlineLink } from "react-icons/ai";

function SocialLinks() {
  return (
    <div tw="px-5 w-full flex flex-col items-center justify-center">
      <h1 tw="text-3xl mx-4 font-bold flex items-center">
        <span tw="mr-4">
          <AiOutlineLink value={{ className: 'inline-block' }} />
        </span>
        <span>Links</span>
      </h1>
      <hr tw="my-3" />
      <div tw="w-full flex flex-col my-2">
        <label for="github" tw="text-sm">Github URL</label>
        <input type="url" tw="p-2 rounded-md w-full border-2" id="github" name="github" />
      </div>
      <div tw="w-full flex flex-col my-2">
        <label for="linkedin" tw="text-sm">LinkedIn URL</label>
        <input type="url" tw="p-2 rounded-md w-full border-2" id="linkedin" name="linkedin" />
      </div>
    </div>
  );
}

export default SocialLinks;
