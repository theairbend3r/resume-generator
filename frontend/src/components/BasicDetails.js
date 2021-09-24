import "twin.macro"
import React from "react"
import { AiOutlineForm } from "react-icons/ai"
import FormTitle from "./general/FormTitle"
import { TextField } from "./general/FormFields"
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
      <TextField section="basic" field="Name" />
      <TextField section="basic" field="Email" />
      <TextField section="basic" field="Phone" />
    </FormContainer>
  )
}

export default BasicDetails
