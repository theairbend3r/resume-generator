import React from "react"
import { WithWizard } from "react-albus"
import "twin.macro"

const Navigation = () => (
  <WithWizard
    render={({ next, previous, step, steps }) => (
      <div tw="flex flex-row w-full items-center justify-around my-6 md:my-8 xl:my-10">
        {steps.indexOf(step) > 0 && (
          <button
            tw="bg-white border w-full border-blue-900 text-blue-900 rounded px-2 py-3 mr-2 md:mr-4 xl:mr-6"
            onClick={previous}
          >
            Back
          </button>
        )}
        {steps.indexOf(step) < steps.length - 1 && (
          <button
            tw="bg-blue-900 w-full text-white rounded px-2 py-3"
            onClick={next}
          >
            Next
          </button>
        )}
        {/* ADD A SUBMIT BUTTON */}
        {/* The following does not seem to work */}

        {/* {steps.indexOf(step) === steps.length && (
          <button tw="bg-blue-900 w-full text-white rounded px-2 py-3">
            Submit
          </button>
        )} */}
      </div>
    )}
  />
)

export default Navigation
