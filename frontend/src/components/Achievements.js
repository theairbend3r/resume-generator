import React, { useEffect } from "react";
import "twin.macro";
import { AiFillTrophy } from "react-icons/ai";

function Achievements({ state, setState }) {
  const handleSubmit = (e) => {
    setState({
      ...state,
      achievement: {
        ...state.achievement,
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
          <AiFillTrophy value={{ className: "inline-block" }} />
        </span>
        <span>Achievements</span>
      </h1>
      <hr tw="my-3" />
      <div tw="w-full flex flex-col my-2">
        <label tw="text-sm" for="description">
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

export default Achievements;
