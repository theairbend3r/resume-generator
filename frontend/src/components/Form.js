import "twin.macro";
import { Wizard, Steps, Step } from "react-albus";
import BasicDetails from "./BasicDetails";
import SocialLinks from "./SocialLinks";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Achievements from "./Achievements";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./Navigation";

const Form = () => {
  return (
    <BrowserRouter>
      <div className="w-600" tw="bg-gray-200 min-h-full py-5 flex flex-col items-center justify-center">
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
  );
};

export default Form;
