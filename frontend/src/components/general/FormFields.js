import "twin.macro"
import React, { useContext } from "react"

import { FormContext } from "../../FormContext"

export const TextField = ({ section, field }) => {
  const [formData, setFormData] = useContext(FormContext)
  const _field = field.replace(/\s+/g, "").toLowerCase() // Remove space and convert to lowercase

  const handleInputChange = event => {
    const formDataUpdated = { ...formData }
    formDataUpdated[section][_field] = event.target.value
    setFormData(formDataUpdated)
  }

  console.log(formData)

  return (
    <div tw="flex flex-col w-full  my-2">
      <label tw="text-sm md:text-base xl:text-lg" for={`${section}_${_field}`}>
        {field}
      </label>
      <input
        type="text"
        tw="p-2 rounded-md w-full border-2"
        value={formData[section][_field]}
        onChange={handleInputChange}
        id={`${section}_${_field}`}
        name={`${section}_${_field}`}
      />
    </div>
  )
}

export const DateField = ({ section, field }) => {
  const [formData, setFormData] = useContext(FormContext)

  const _field = field.replace(/\s+/g, "").toLowerCase() // Remove space and convert to lowercase

  const handleInputChange = event => {
    const formDataUpdated = { ...formData }
    formDataUpdated[section][_field] = event.target.value
    setFormData(formDataUpdated)
  }

  console.log(formData)
  return (
    <div tw="w-full flex my-2 flex-col">
      <label tw="text-sm md:text-base xl:text-lg" for={`${section}_${_field}`}>
        {field}
      </label>
      <input
        type="date"
        tw="p-2 rounded-md w-full border-2"
        value={formData[section][_field]}
        onChange={handleInputChange}
        id={`${section}_${_field}`}
        name={`${section}_${_field}`}
      />
    </div>
  )
}
