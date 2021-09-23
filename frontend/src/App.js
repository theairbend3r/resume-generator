import "twin.macro"
import Form from "./components/Form"

const App = () => {
  return (
    <div tw="py-5 flex flex-col items-center justify-start w-full min-h-screen">
      <h1 tw="text-3xl mb-10 font-bold"> Resume Generator </h1>
      <Form />
    </div>
  )
}

export default App
