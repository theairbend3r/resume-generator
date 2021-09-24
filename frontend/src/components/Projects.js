import React from "react"
import "twin.macro"
import { BsHammer } from "react-icons/bs"
import FormTitle from "./general/FormTitle"
import FormContainer from "./general/FormContainer"
import { TextField } from "./general/FormFields"

const Projects = () => {
  return (
    <FormContainer>
      <FormTitle>
        <span tw="mr-4">
          <BsHammer value={{ className: "inline-block" }} />
        </span>
        <span>Projects</span>
      </FormTitle>
      <TextField section="projects" field="Title" />
      <TextField section="projects" field="Description" />
      <TextField section="projects" field="Link" />
    </FormContainer>
  )
}

export default Projects
