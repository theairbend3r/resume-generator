import React from "react"
import "twin.macro"
import { MdSchool } from "react-icons/md"
import FormTitle from "./general/FormTitle"
import FormContainer from "./general/FormContainer"
import { TextField, DateField } from "./general/FormFields"

function Education() {
  return (
    <FormContainer>
      <FormTitle>
        <span tw="mr-4">
          <MdSchool value={{ className: "inline-block" }} />
        </span>
        <span>Education</span>
      </FormTitle>
      <TextField section="education" field="University" />
      <TextField section="education" field="Degree" />
      <TextField section="education" field="Discipline" />
      <DateField section="education" field="Start Year" />
      <DateField section="education" field="End Year" />
      <TextField section="education" field="Marks" />
    </FormContainer>
  )
}

export default Education
