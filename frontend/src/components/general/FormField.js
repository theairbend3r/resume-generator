import "twin.macro"

const FormField = ({ field }) => {
  return (
    <div tw="w-full flex flex-col my-2">
      <label tw="text-sm" for="name">
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

export default FormField
