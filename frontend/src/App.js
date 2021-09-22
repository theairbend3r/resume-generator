import "twin.macro"

const App = () => {
  return (
    <div tw="flex flex-col min-h-screen w-full items-center justify-start p-2 md:p-6 xl:p-10">
      <h1 tw="text-xl md:text-2xl xl:text-3xl">resume generator</h1>
      <form tw="flex flex-col">
        <div tw="flex flex-col items-center mb-2">
          <label tw="flex flex-col my-2 ">
            Name
            <input tw="border" type="text" />
          </label>
          <label tw="flex flex-col my-2">
            Email
            <input tw="border" type="text" />
          </label>
          <label tw="flex flex-col my-2">
            Work Experience
            <input tw="border" type="text" />
          </label>
          <label tw="flex flex-col my-2">
            Projects
            <input tw="border" type="text" />
          </label>
          <button tw="border rounded p-2 my-4" type="submit">
            generate resume
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
