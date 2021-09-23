import React from "react"
import "twin.macro"
import { MdWork } from "react-icons/md"
import FormTitle from "./general/FormTitle"
import FormContainer from "./general/FormContainer"
import { TextField, DateField } from "./general/FormFields"

function Experience() {
  return (
    <FormContainer>
      <FormTitle>
        <span tw="mr-4">
          <MdWork value={{ className: "inline-block" }} />
        </span>
        <span>Experience</span>
      </FormTitle>

      <TextField field="Company" />
      <TextField field="Position" />
      <DateField field="StartYear" />
      <div tw="flex flex-row w-full items-start my-4">
        <input
          type="checkbox"
          id="isCurrentJob"
          name="isCurrentJob"
          tw="p-2 rounded-md mr-2 border-2"
          value="isCurrentJob"
        />
        <label for="isCurrentJob" tw="text-sm">
          Are you currently working here?
        </label>
      </div>
      <DateField field="EndYear" />

      <TextField field="Description" />
    </FormContainer>
  )
}

export default Experience
