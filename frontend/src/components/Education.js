import React, { useState } from "react"
import "twin.macro"
import { MdSchool } from "react-icons/md"
import FormTitle from "./general/FormTitle"
import FormContainer from "./general/FormContainer"
import { TextField, DateField } from "./general/FormFields"

function Education() {
  const [isCurrentEdu, setIsCurrentEdu] = useState(false)

  return (
    <FormContainer>
      <FormTitle>
        <span tw="mr-2">
          <MdSchool value={{ className: "inline-block" }} />
        </span>
        <span>Education</span>
      </FormTitle>
      <TextField section="education" field="University" />
      <TextField section="education" field="Degree" />
      <TextField section="education" field="Major" />
      <DateField section="education" field="Start Date" />
      <TextField section="education" field="GPA" />
      <div tw="flex flex-row w-full items-center justify-center my-4">
        <input
          type="checkbox"
          id="isCurrentJob"
          name="isCurrentJob"
          tw="p-2 rounded-md mr-2 border-2"
          value="isCurrentJob"
          onClick={() => setIsCurrentEdu(!isCurrentEdu)}
        />
        <label
          for="isCurrentJob"
          tw="text-gray-400 text-sm md:text-base xl:text-lg"
        >
          Are you currently studying?
        </label>
      </div>
      {!isCurrentEdu && <DateField section="education" field="End Date" />}
    </FormContainer>
  )
}

export default Education
