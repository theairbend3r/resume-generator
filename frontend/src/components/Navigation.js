import React from "react"
import { WithWizard } from "react-albus"
import "twin.macro"

const Navigation = () => (
  <WithWizard
    render={({ next, previous, step, steps }) => (
      <div tw="flex flex-row w-full items-center justify-around my-6 md:my-8 xl:my-10">
        {steps.indexOf(step) > 0 && (
          <div tw="w-full bg-gradient-to-r from-pink-800 to-purple-800 p-0.5 rounded-lg mr-10 md:mr-16 xl:mr-20">
            <button
              tw="bg-gray-900 text-gray-100 w-full rounded-lg text-sm md:text-base xl:text-lg px-2 py-3 md:px-4 md:py-5"
              onClick={previous}
            >
              Back
            </button>
          </div>
        )}
        {steps.indexOf(step) < steps.length - 1 && (
          <button
            tw="bg-gradient-to-r from-pink-800 to-purple-800 w-full text-white rounded-lg px-2 py-3 md:px-4 md:py-5 text-sm md:text-base xl:text-lg"
            onClick={next}
          >
            Next
          </button>
        )}

        {steps.indexOf(step) === steps.length - 1 && (
          <button tw="bg-gradient-to-r from-pink-800 to-purple-800 w-full text-white rounded-lg px-2 py-3 md:px-4 md:py-5 text-sm md:text-base xl:text-lg">
            Submit
          </button>
        )}
      </div>
    )}
  />
)

export default Navigation
