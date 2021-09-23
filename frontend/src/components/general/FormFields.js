import "twin.macro"

export const TextField = ({ field }) => {
  return (
    <div tw="flex flex-col w-full  my-2">
      <label
        tw="text-sm md:text-base xl:text-lg"
        for={field.replace(/\s+/g, "").toLowerCase()}
      >
        {field}
      </label>
      <input
        type="text"
        tw="p-2 rounded-md w-full border-2"
        id={field.replace(/\s+/g, "").toLowerCase()} // Remove space and convert to lowercase
        name={field.replace(/\s+/g, "").toLowerCase()} // Remove space and convert to lowercase
      />
    </div>
  )
}

export const DateField = ({ field }) => {
  return (
    <div tw="w-full flex my-2 flex-col">
      <label
        tw="text-sm md:text-base xl:text-lg"
        for={field.replace(/\s+/g, "").toLowerCase()}
      >
        {field}
      </label>
      <input
        type="date"
        tw="p-2 rounded-md w-full border-2"
        id={field.replace(/\s+/g, "").toLowerCase()} // Remove space and convert to lowercase
        name={field.replace(/\s+/g, "").toLowerCase()} // Remove space and convert to lowercase
      />
    </div>
  )
}
