import "twin.macro";
import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

export const TextField = ({ section, field }) => {
  const [formData, setFormData] = useContext(FormContext);
  const _field = field.replace(/\s+/g, "").toLowerCase(); // Remove space and convert to lowercase

  const handleInputChange = (event) => {
    const formDataUpdated = { ...formData };
    formDataUpdated[section][_field] = event.target.value;
    setFormData(formDataUpdated);
  };

  console.log(formData);

  return (
    <div tw="flex flex-col w-full my-2">
      <label
        tw="text-gray-100 text-sm md:text-base xl:text-lg my-2 md:my-4"
        for={`${section}_${_field}`}
      >
        {field}
      </label>
      <input
        type="text"
        tw="bg-gray-900 w-full rounded-lg p-2 focus:ring-2 focus:ring-gray-700"
        value={formData[section][_field]}
        onChange={handleInputChange}
        id={`${section}_${_field}`}
        name={`${section}_${_field}`}
      />
    </div>
  );
};

export const DateField = ({ section, field }) => {
  const [formData, setFormData] = useContext(FormContext);

  const _field = field.replace(/\s+/g, "").toLowerCase(); // Remove space and convert to lowercase

  const handleInputChange = (event) => {
    const formDataUpdated = { ...formData };
    formDataUpdated[section][_field] = event.target.value;
    setFormData(formDataUpdated);
  };

  console.log(formData);
  return (
    <div tw="flex flex-col w-full my-2">
      <label
        tw="text-gray-100 text-sm md:text-base xl:text-lg my-2 md:my-4"
        for={`${section}_${_field}`}
      >
        {field}
      </label>
      <input
        type="date"
        tw="bg-gray-900 w-full rounded-lg p-2"
        value={formData[section][_field]}
        onChange={handleInputChange}
        id={`${section}_${_field}`}
        name={`${section}_${_field}`}
      />
    </div>
  );
};
