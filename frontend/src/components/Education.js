import React, { useEffect } from "react";
import "twin.macro";
import { MdSchool } from "react-icons/md";

function Education({ state, setState }) {
  const handleSubmit = (e) => {
    setState({
      ...state,
      education: {
        ...state.education,
        [e.target.name]: e.target.value,
      },
    });
  };
  useEffect(() => {
    // re render
  }, [state]);
  return (
    <div tw="w-full px-5 flex flex-col items-center justify-center">
      <h1 tw="text-3xl mx-4 font-bold flex items-center">
        <span tw="mr-4">
          <MdSchool value={{ className: "inline-block" }} />
        </span>
        <span>Education</span>
      </h1>
      <hr tw="my-3" />
      <div tw="w-full flex flex-col my-2">
        <label for="college_or_uni" tw="text-sm">
          University or College
        </label>
        <input
          type="text"
          tw="p-2 rounded-md w-full border-2"
          id="college_or_uni"
          onChange={(e) => handleSubmit(e)}
          name="college_or_uni"
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
          onChange={(e) => handleSubmit(e)}
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
          onChange={(e) => handleSubmit(e)}
          name="discipline"
        />
      </div>
      <div tw="w-full flex my-2 flex-col">
        <label for="to" tw="text-sm">
          Start Year
        </label>
        <input
          type="date"
          tw="p-2 rounded-md w-full border-2"
          id="to"
          onChange={(e) => handleSubmit(e)}
          name="to"
        />
      </div>
      <div tw="w-full flex my-2 flex-col">
        <label for="from" tw="text-sm">
          End Year
        </label>
        <input
          type="date"
          tw="p-2 rounded-md w-full border-2"
          id="from"
          onChange={(e) => handleSubmit(e)}
          name="from"
        />
      </div>
      <div tw="w-full flex flex-col my-2">
        <label for="marks_perc_gpa" tw="text-sm">
          Percentage (Convert CGPA to %)
        </label>
        <input
          type="text"
          tw="p-2 rounded-md w-full border-2"
          id="marks_perc_gpa"
          onChange={(e) => handleSubmit(e)}
          name="marks_perc_gpa"
        />
      </div>
    </div>
  );
}

export default Education;
