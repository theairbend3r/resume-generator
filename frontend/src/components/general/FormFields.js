import "twin.macro"

export const TextField = ({ field }) => {
  return (
    <div tw="flex flex-col w-full  my-2">
      <label tw="text-sm" for={field.toLowerCase()}>
        {field}
      </label>
      <input
        type="text"
        tw="p-2 rounded-md w-full border-2"
        id={field.toLowerCase()}
        name={field.toLowerCase()}
      />
    </div>
  )
}

export const DateField = ({ field }) => {
  return (
    <div tw="w-full flex my-2 flex-col">
      <label tw="text-sm" for={field.toLowerCase()}>
        {field}
      </label>
      <input
        type="date"
        tw="p-2 rounded-md w-full border-2"
        id={field.toLowerCase()}
        name={field.toLowerCase()}
      />
    </div>
  )
}
