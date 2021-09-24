import React, { useState, createContext } from "react"

export const FormContext = createContext()

export const FormProvider = props => {
  const [formData, setFormData] = useState({
    basic: {
      name: "",
      email: "",
      phone: "",
    },
    social: {
      github: "",
      linkedin: "",
    },
    education: [
      {
        university: "",
        degree: "",
        major: "",
        startDate: "",
        endDate: "Present",
        gpa: "",
      },
    ],
    skills: [],
    experience: [
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "Present",
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
        description: ""
      }
    ],
  })

  return (
    <FormContext.Provider value={[formData, setFormData]}>
      {props.children}
    </FormContext.Provider>
  )
}
