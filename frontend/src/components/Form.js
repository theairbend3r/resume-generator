import "twin.macro"
import { Wizard, Steps, Step } from "react-albus"
import BasicDetails from "./BasicDetails"
import SocialLinks from "./SocialLinks"
import Education from "./Education"
import Skills from "./Skills"
import Experience from "./Experience"
import Projects from "./Projects"
import Achievements from "./Achievements"
import { BrowserRouter, Route } from "react-router-dom"
import Navigation from "./Navigation"

const Form = () => {
  return (
    <BrowserRouter>
      <div
        className="group"
        tw="relative flex flex-col items-center justify-center rounded-lg bg-gray-800 text-gray-100 w-5/6 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5"
      >
        <div tw="absolute inset-0 rounded-lg blur bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-300"></div>
        <div tw="relative bg-gray-800 rounded-xl text-gray-100 w-full py-4 px-6 md:py-6 md:px-8 xl:py-8 xl:px-10">
          <Route
            render={({ history }) => (
              <Wizard history={history}>
                <Steps>
                  <Step id="basic-details">
                    <BasicDetails />
                  </Step>
                  <Step id="links">
                    <SocialLinks />
                  </Step>
                  <Step id="education">
                    <Education />
                  </Step>
                  <Step id="skills">
                    <Skills />
                  </Step>
                  <Step id="experience">
                    <Experience />
                  </Step>
                  <Step id="projects">
                    <Projects />
                  </Step>
                  <Step id="achievements">
                    <Achievements />
                  </Step>
                </Steps>
                <Navigation />
              </Wizard>
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Form
