import React from "react";
import "twin.macro";
import { BsHammer } from "react-icons/bs";

function Projects() {
  return (
    <div tw="px-5 w-full flex flex-col items-center justify-center">
      <h1 tw="text-3xl mx-4 font-bold flex items-center">
        <span tw="mr-4">
          <BsHammer value={{ className: 'inline-block' }} />
        </span>
        <span>Projects</span>
      </h1>
      <hr tw="my-3" />
      <div tw="w-full flex flex-col my-2">
        <label for="projectTitle" tw="text-sm">Title</label>
        <input
          type="text"
          tw="p-2 rounded-md w-full border-2"
          id="projectTitle"
          name="projectTitle"
        />
      </div>
      <div tw="w-full flex flex-col my-2">
        <label for="projectDesc" tw="text-sm">Description</label>
        <input type="text" tw="p-2 rounded-md w-full border-2" id="projectDesc" name="projectDesc" />
      </div>
      <div tw="w-full flex flex-col my-2">
        <label for="projectLink" tw="text-sm">Link</label>
        <input type="url" tw="p-2 rounded-md w-full border-2" id="projectLink" name="projectLink" />
      </div>
    </div>
  );
}

export default Projects;
