import React, { useState, createContext } from "react"

export const FormContext = createContext()

export const FormProvider = props => {
  const [formData, setFormData] = useState({
    basic: [
      {
        name: "",
        email: "",
        phone: "",
      },
    ],
    social: [
      {
        github: "",
        linkedin: "",
      },
    ],
    education: [
      {
        university: "",
        degree: "",
        major: "",
        startdate: "",
        enddate: "",
        gpa: "",
      },
    ],
    skills: [
      {
        skills: "",
      },
    ],
    experience: [
      {
        company: "",
        position: "",
        startdate: "",
        enddate: "",
        description: "",
      },
    ],
    projects: [
      {
        title: "",
        description: "",
        link: "",
      },
    ],
    achievements: [
      {
        achievements: "",
      },
    ],
  })

  return (
    <FormContext.Provider value={[formData, setFormData]}>
      {props.children}
    </FormContext.Provider>
  )
}
