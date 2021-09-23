import tw from "twin.macro"
import React from "react"
import { AiOutlineForm } from "react-icons/ai"
import FormTitle from "./general/FormTitle"
import FormField from "./general/FormField"
import FormContainer from "./general/FormContainer"

const BasicDetails = () => {
  return (
    <FormContainer>
      <FormTitle>
        <span tw="mr-4">
          <AiOutlineForm value={{ className: "inline-block" }} />
        </span>
        <h1>Basic Details</h1>
      </FormTitle>
      <FormField field="Name" />
      <FormField field="Email" />
      <FormField field="Phone" />
    </FormContainer>
  )
}

export default BasicDetails
