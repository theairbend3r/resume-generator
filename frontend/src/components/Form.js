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
      <div tw="flex flex-col items-center justify-center bg-white rounded w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 p-2 md:p-4 xl:p-6">
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
    </BrowserRouter>
  )
}

export default Form
