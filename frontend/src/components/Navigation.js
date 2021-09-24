import React from "react"
import { WithWizard } from "react-albus"
import "twin.macro"

const Navigation = () => (
  <WithWizard
    render={({ next, previous, step, steps }) => (
      <div tw="flex flex-row w-full items-center justify-around my-6 md:my-8 xl:my-10">
        {steps.indexOf(step) > 0 && (
          <button
            tw="w-full border border-purple-700 bg-gray-900 text-gray-100 rounded-lg px-2 py-3 md:px-4 md:py-5 mr-10 md:mr-16 xl:mr-20 text-sm md:text-base xl:text-lg"
            onClick={previous}
          >
            Back
          </button>
        )}
        {steps.indexOf(step) < steps.length - 1 && (
          <button
            tw="bg-purple-800 w-full text-white rounded-lg px-2 py-3 md:px-4 md:py-5 text-sm md:text-base xl:text-lg"
            onClick={next}
          >
            Next
          </button>
        )}
        {/* ADD A SUBMIT BUTTON */}
        {/* The following does not seem to work */}

        {steps.indexOf(step) === steps.length && (
          <button tw="bg-blue-900 w-full text-white rounded px-2 py-3">
            Submit
          </button>
        )}
      </div>
    )}
  />
)

export default Navigation
