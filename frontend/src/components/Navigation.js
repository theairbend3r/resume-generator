import React from "react";
import { WithWizard } from "react-albus";
import "twin.macro";

const Navigation = () => (
  <WithWizard
    render={({ next, previous, step, steps }) => (
      <div tw="w-full flex items-center my-5 justify-center">
        {steps.indexOf(step) > 0 && (
          <button
            tw="bg-gray-400 mx-5 w-full rounded-sm px-5 py-3"
            onClick={previous}
          >
            Back
          </button>
        )}
        {steps.indexOf(step) < steps.length - 1 && (
          <button
            tw="bg-gray-900 text-white mx-5 w-full rounded-sm px-5 py-3"
            onClick={next}
          >
            Next
          </button>
        )}
      </div>
    )}
  />
);

export default Navigation;
