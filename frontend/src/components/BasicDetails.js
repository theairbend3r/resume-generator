import React from "react";
import "twin.macro";
import { AiOutlineForm } from "react-icons/ai";

function BasicDetails() {
  return (
    <div tw="px-5 w-full flex flex-col items-center justify-center">
      <h1 tw="text-3xl mx-4 font-bold flex items-center">
        <span tw="mr-4">
          <AiOutlineForm value={{ className: 'inline-block' }} />
        </span>
        <span>Basic Details</span>
      </h1>
      <hr tw="my-3" />
      <div tw="w-full flex flex-col my-2">
        <label tw="text-sm" for="name">
          Name
        </label>
        <input
          type="text"
          tw="p-2 rounded-md w-full border-2"
          id="name"
          name="name"
        />
      </div>
      <div tw="w-full flex flex-col my-2">
        <label tw="text-sm" for="email">
          Email
        </label>
        <input
          type="email"
          tw="p-2 rounded-md w-full border-2"
          id="email"
          name="email"
        />
      </div>
      <div tw="w-full flex flex-col my-2">
        <label tw="text-sm" for="phone">
          Phone no.
        </label>
        <input
          type="tel"
          id="phone"
          tw="p-2 rounded-md w-full border-2"
          name="phone"
          placeholder="123-456-789"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
        />
      </div>
    </div>
  );
}

export default BasicDetails;
