import React from "react";
import "twin.macro";
import { MdSchool } from "react-icons/md";

function Education() {
  return (
    <div tw="w-full px-5 flex flex-col items-center justify-center">
      <h1 tw="text-3xl mx-4 font-bold flex items-center">
        <span tw="mr-4">
          <MdSchool value={{ className: 'inline-block' }} />
        </span>
        <span>Education</span>
      </h1>
      <hr tw="my-3" />
      <div tw="w-full flex flex-col my-2">
        <label for="university" tw="text-sm">
          University or College
        </label>
        <input
          type="text"
          tw="p-2 rounded-md w-full border-2"
          id="university"
          name="university"
        />
      </div>
      <div tw="w-full flex flex-col my-2">
        <label for="degree" tw="text-sm">
          Degree
        </label>
        <input
          type="text"
          tw="p-2 rounded-md w-full border-2"
          id="degree"
          name="degree"
        />
      </div>
      <div tw="w-full flex flex-col my-2">
        <label for="discipline" tw="text-sm">
          Discipline
        </label>
        <input
          type="text"
          tw="p-2 rounded-md w-full border-2"
          id="discipline"
          name="discipline"
        />
      </div>
      <div tw="w-full flex my-2 flex-col">
        <label for="startYear" tw="text-sm">
          Start Year
        </label>
        <input
          type="date"
          tw="p-2 rounded-md w-full border-2"
          id="startYear"
          name="startYear"
        />
      </div>
      <div tw="w-full flex my-2 flex-col">
        <label for="endYear" tw="text-sm">
          End Year
        </label>
        <input
          type="date"
          tw="p-2 rounded-md w-full border-2"
          id="endYear"
          name="endYear"
        />
      </div>
      <div tw="w-full flex flex-col my-2">
        <label for="marks" tw="text-sm">
          Percentage (Convert CGPA to %)
        </label>
        <input
          type="text"
          tw="p-2 rounded-md w-full border-2"
          id="marks"
          name="marks"
        />
      </div>
    </div>
  );
}

export default Education;
