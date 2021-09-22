import React from "react";
import "twin.macro";
import { MdWork } from "react-icons/md";

function Experience() {
  return (
    <div tw="px-5 w-full flex flex-col items-center justify-center">
      <h1 tw="text-3xl mx-4 font-bold flex items-center">
        <span tw="mr-4">
          <MdWork value={{ className: 'inline-block' }} />
        </span>
        <span>Experience</span>
      </h1>
      <hr tw="my-3" />
      <div tw="w-full flex flex-col my-2">
        <label for="company" tw="text-sm">Organization or Company</label>
        <input type="text" tw="p-2 rounded-md w-full border-2" id="company" name="company" />
      </div>
      <div tw="w-full flex flex-col my-2">
        <label for="position" tw="text-sm">Position</label>
        <input type="text" tw="p-2 rounded-md w-full border-2" id="position" name="position" />
      </div>
      <div tw="w-full my-2">
        <div tw="w-full flex flex-col">
          <label for="startYear" tw="text-sm">Start Date</label>
          <input type="date" tw="p-2 rounded-md w-full border-2" id="startYear" name="startYear" />
        </div>
        <div tw="flex items-center my-4">
          <input
            type="checkbox"
            id="isCurrentJob"
            name="isCurrentJob"
            tw="p-2 rounded-md mr-2 border-2"
            value="isCurrentJob"
          />
          <label for="isCurrentJob" tw="text-sm">Are you currently working here?</label>
        </div>
        <div tw="w-full flex flex-col">
          <label for="endYear" tw="text-sm">End Date</label>
          <input type="date" tw="p-2 rounded-md w-full border-2" id="endYear" name="endYear" />
        </div>
      </div>
      <div tw="w-full flex flex-col my-2">
        <label for="description" tw="text-sm">Description</label>
        <input type="text" tw="p-2 rounded-md w-full border-2" id="description" name="description" />
      </div>
    </div>
  );
}

export default Experience;
