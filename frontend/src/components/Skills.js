import React from "react"
import "twin.macro"
import { FaBookOpen } from "react-icons/fa"
import FormTitle from "./general/FormTitle"
import { TextField } from "./general/FormFields"
import FormContainer from "./general/FormContainer"

function Skills() {
  return (
    <FormContainer>
      <FormTitle>
        <span tw="mr-4">
          <FaBookOpen value={{ className: "inline-block" }} />
        </span>
        <span>Skills</span>
      </FormTitle>
      <TextField section="skills" field="Skills" />
    </FormContainer>
  )
}

export default Skills
