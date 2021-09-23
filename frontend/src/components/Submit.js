import React from "react";
import "twin.macro";
import axios from "axios";

function Submit({ state, setState }) {

  const submitHandler = async () => {
    const data = state;
    try {
      const response = await axios.post('http://localhost:5000/create-resume', data);
      console.log(response);
    } catch(err) {
      console.log({err});
    }
  }

  return (
    <div tw="px-5 w-full flex flex-col items-center justify-center">
        <h1 tw="text-3xl mx-4 font-bold flex items-center">
        <span>Submit</span>
      </h1>
      <button onClick={submitHandler} tw="bg-indigo-900 text-white w-full my-5 p-5">
          Generate PDF
      </button>
    </div>
  );
}

export default Submit;