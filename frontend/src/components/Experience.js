import React, { useState } from "react"
import "twin.macro"
import { MdWork } from "react-icons/md"
import FormTitle from "./general/FormTitle"
import FormContainer from "./general/FormContainer"
import { TextField, DateField } from "./general/FormFields"

const Experience = () => {
  const [isCurrentJob, setIsCurrentJob] = useState(false)

  return (
    <FormContainer>
      <FormTitle>
        <span tw="mr-4">
          <MdWork value={{ className: "inline-block" }} />
        </span>
        <span>Experience</span>
      </FormTitle>

      <TextField section="experience" field="Company" />
      <TextField section="experience" field="Position" />
      <DateField section="experience" field="Start Year" />
      <div tw="flex flex-row w-full items-start my-4">
        <input
          type="checkbox"
          id="isCurrentJob"
          name="isCurrentJob"
          tw="p-2 rounded-md mr-2 border-2"
          value="isCurrentJob"
          onClick={() => setIsCurrentJob(!isCurrentJob)}
        />
        <label for="isCurrentJob" tw="text-sm">
          Are you currently working here?
        </label>
      </div>
      {!isCurrentJob && <DateField section="experience" field="End Year" />}

      <TextField section="experience" field="Description" />
    </FormContainer>
  )
}

export default Experience
