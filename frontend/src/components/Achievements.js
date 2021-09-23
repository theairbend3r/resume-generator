import React from "react";
import "twin.macro";
import { AiFillTrophy } from "react-icons/ai";

function Achievements() {
  return (
    <div tw="px-5 w-full flex flex-col items-center justify-center">
      <h1 tw="text-3xl mx-4 font-bold flex items-center">
        <span tw="mr-4">
          <AiFillTrophy value={{ className: 'inline-block' }} />
        </span>
        <span>Achievements</span>
      </h1>
      <hr tw="my-3" />
      <div tw="w-full flex flex-col my-2">
        <label tw="text-sm" for="achievementDesc">Description</label>
        <input
          type="text"
          tw="p-2 rounded-md w-full border-2"
          id="achievementDesc"
          name="achievementDesc"
        />
      </div>
    </div>
  );
}

export default Achievements;
