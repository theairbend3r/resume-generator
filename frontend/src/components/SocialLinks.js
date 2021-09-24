import React from "react"
import "twin.macro"
import { AiOutlineLink } from "react-icons/ai"
import FormTitle from "./general/FormTitle"
import { TextField } from "./general/FormFields"
import FormContainer from "./general/FormContainer"

function SocialLinks() {
  return (
    <FormContainer>
      <FormTitle>
        <span tw="mr-2">
          <AiOutlineLink value={{ className: "inline-block" }} />
        </span>
        <span>Links</span>
      </FormTitle>
      <TextField section="social" field="Github" />
      <TextField section="social" field="LinkedIn" />
    </FormContainer>
  )
}

export default SocialLinks
