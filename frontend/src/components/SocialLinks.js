import React from "react"
import "twin.macro"
import { AiOutlineLink } from "react-icons/ai"
import FormTitle from "./general/FormTitle"
import FormField from "./general/FormField"
import FormContainer from "./general/FormContainer"

function SocialLinks() {
  return (
    <FormContainer>
      <FormTitle>
        <span tw="mr-4">
          <AiOutlineLink value={{ className: "inline-block" }} />
        </span>
        <span>Links</span>
      </FormTitle>
      <FormField field="Github" />
      <FormField field="LinkedIn" />
    </FormContainer>
  )
}

export default SocialLinks
