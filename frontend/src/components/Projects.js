import React, { useEffect } from "react";
import "twin.macro";
import { BsHammer } from "react-icons/bs";

function Projects({ state, setState }) {
  const handleSubmit = (e) => {
    setState({
      ...state,
      projects: {
        ...state.projects,
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
          <BsHammer value={{ className: "inline-block" }} />
        </span>
        <span>Projects</span>
      </h1>
      <hr tw="my-3" />
      <div tw="w-full flex flex-col my-2">
        <label for="title" tw="text-sm">
          Title
        </label>
        <input
          type="text"
          tw="p-2 rounded-md w-full border-2"
          id="title"
          name="title"
          onChange={(e) => handleSubmit(e)}
        />
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
      <div tw="w-full flex flex-col my-2">
        <label for="link" tw="text-sm">
          Link
        </label>
        <input
          type="url"
          tw="p-2 rounded-md w-full border-2"
          id="link"
          name="link"
          onChange={(e) => handleSubmit(e)}
        />
      </div>
    </div>
  );
}

export default Projects;
