import React, { useEffect } from "react";
import "twin.macro";
import { MdWork } from "react-icons/md";

function Experience({ state, setState }) {
  const handleSubmit = (e) => {
    setState({
      ...state,
      experience: {
        ...state.experience,
        [e.target.name]: e.target.value,
      },
    });
  };

  useEffect(() => {
    // re render
  }, [state]);

  return (
    <div tw="px-5 w-full flex flex-col items-center justify-center">
      <h1 tw="text-3xl mx-4 font-bold flex items-center">
        <span tw="mr-4">
          <MdWork value={{ className: "inline-block" }} />
        </span>
        <span>Experience</span>
      </h1>
      <hr tw="my-3" />
      <div tw="w-full flex flex-col my-2">
        <label for="organization" tw="text-sm">
          Organization or Company
        </label>
        <input
          type="text"
          tw="p-2 rounded-md w-full border-2"
          id="organization"
          name="organization"
          onChange={(e) => handleSubmit(e)}
        />
      </div>
      <div tw="w-full flex flex-col my-2">
        <label for="position" tw="text-sm">
          Position
        </label>
        <input
          type="text"
          tw="p-2 rounded-md w-full border-2"
          id="position"
          name="position"
          onChange={(e) => handleSubmit(e)}
        />
      </div>
      <div tw="w-full my-2">
        <div tw="w-full flex my-2 flex-col">
          <label for="to" tw="text-sm">
            Start Date
          </label>
          <input
            type="date"
            tw="p-2 rounded-md w-full border-2"
            id="to"
            name="to"
            onChange={(e) => handleSubmit(e)}
          />
        </div>
        <div tw="w-full flex my-2 flex-col">
          <label for="from" tw="text-sm">
            End Date
          </label>
          <input
            type="date"
            tw="p-2 rounded-md w-full border-2"
            id="from"
            name="from"
            onChange={(e) => handleSubmit(e)}
          />
        </div>
      </div>
      <div tw="w-full flex flex-col my-2">
        <label for="description" tw="text-sm">
          Description
        </label>
        <input
          type="text"
          tw="p-2 rounded-md w-full border-2"
          id="description"
          name="description"
          onChange={(e) => handleSubmit(e)}
        />
      </div>
    </div>
  );
}

export default Experience;
