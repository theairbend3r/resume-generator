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
import Submit from "./Submit";
import { useState } from "react";
const Form = () => {
  const [state, setState] = useState({});

  return (
    <BrowserRouter>
      <div
        className="w-600"
        tw="bg-gray-200 min-h-full py-5 flex flex-col items-center justify-center"
      >
        <Route
          render={({ history }) => (
            <Wizard history={history}>
              <Steps>
                <Step id="basic-details">
                  <BasicDetails state={state} setState={setState} />
                </Step>
                <Step id="links">
                  <SocialLinks state={state} setState={setState} />
                </Step>
                <Step id="education">
                  <Education state={state} setState={setState} />
                </Step>
                <Step id="skills">
                  <Skills state={state} setState={setState} />
                </Step>
                <Step id="experience">
                  <Experience state={state} setState={setState} />
                </Step>
                <Step id="projects">
                  <Projects state={state} setState={setState} />
                </Step>
                <Step id="achievements">
                  <Achievements state={state} setState={setState} />
                </Step>
                <Step id="submit">
                  <Submit state={state} setState={setState} />
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
