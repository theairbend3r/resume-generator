import React from "react"
import "twin.macro"
import { AiFillTrophy } from "react-icons/ai"
import FormTitle from "./general/FormTitle"
import FormContainer from "./general/FormContainer"
import { TextField } from "./general/FormFields"

function Achievements() {
  return (
    <FormContainer>
      <FormTitle>
        <span tw="mr-2">
          <AiFillTrophy value={{ className: "inline-block" }} />
        </span>
        <span>Achievements</span>
      </FormTitle>
      <TextField section="achievements" field="Description" />
    </FormContainer>
  )
}

export default Achievements
