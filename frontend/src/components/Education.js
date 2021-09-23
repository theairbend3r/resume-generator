import React from "react"
import "twin.macro"
import { MdSchool } from "react-icons/md"
import FormTitle from "./general/FormTitle"
import { TextField, DateField } from "./general/FormFields"
import FormContainer from "./general/FormContainer"

function Education() {
  return (
    <FormContainer>
      <FormTitle>
        <span tw="mr-4">
          <MdSchool value={{ className: "inline-block" }} />
        </span>
        <span>Education</span>
      </FormTitle>
      <TextField field="University" />
      <TextField field="Degree" />
      <TextField field="Discipline" />
      <DateField field="StartYear" />
      <DateField field="EndYear" />
      <TextField field="Marks" />
    </FormContainer>
  )
}

export default Education
