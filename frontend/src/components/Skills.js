import React from "react";
import "twin.macro";
import { FaBookOpen } from "react-icons/fa";

function Skills() {
  return (
    <div tw="px-5 w-full flex flex-col items-center justify-center">
      <h1 tw="text-3xl mx-4 font-bold flex items-center">
        <span tw="mr-4">
          <FaBookOpen value={{ className: 'inline-block' }} />
        </span>
        <span>Skills</span>
      </h1>
      <hr tw="my-3" />
      <div tw="w-full flex flex-col my-2">
        <label for="skills" tw="text-sm">Skill</label>
        <input type="text" tw="p-2 rounded-md w-full border-2" id="skills" name="skills" />
      </div>
    </div>
  );
}

export default Skills;
