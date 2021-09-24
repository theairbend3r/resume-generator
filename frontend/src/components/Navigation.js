import React, { useContext } from "react";
import { WithWizard } from "react-albus";
import "twin.macro";
import { FormContext } from "../FormContext";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Navigation = () => {
  const [formData] = useContext(FormContext)

  const submit = () => {
    axios
      .post("http://localhost:5000/create-resume", formData)
      .then(function (response) {
        console.log(response);
        toast.success('Data saved successfully. Your resume would be downloaded shortly!', {
          position: "top-right",
          autoClose: 3000
          });
      })
      .catch(function (error) {
        console.log(error);
        toast.error('Oops! Something went wrong.', {
          position: "top-right",
          autoClose: 3000
          });
      });
  }

  return (
    <WithWizard
      render={({ next, previous, step, steps }) => (
        <div tw="flex flex-row w-full items-center justify-around my-6 md:my-8 xl:my-10">
          {steps.indexOf(step) > 0 && (
            <div tw="w-full bg-gradient-to-r from-pink-800 to-purple-800 p-0.5 hover:from-pink-700 hover:to-purple-700 rounded-lg mr-10 md:mr-16 xl:mr-20">
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
              tw="bg-gradient-to-r from-pink-800 to-purple-800 hover:from-pink-700 hover:to-purple-700 w-full text-white rounded-lg px-2 py-3 md:px-4 md:py-5 text-sm md:text-base xl:text-lg"
              onClick={next}
            >
              Next
            </button>
          )}

          {steps.indexOf(step) === steps.length - 1 && (
            <button tw="bg-gradient-to-r from-pink-800 to-purple-800 hover:from-pink-700 hover:to-purple-700 w-full text-white rounded-lg px-2 py-3 md:px-4 md:py-5 text-sm md:text-base xl:text-lg" onClick={submit}>
              Submit
            </button>
          )}
        </div>
      )}
    />
  );
};

export default Navigation;
