import "twin.macro"
import Form from "./components/Form"
import { FormProvider } from "./FormContext"

const App = () => {
  return (
    <div tw="flex flex-col items-center justify-start w-full min-h-screen bg-gradient-to-b from-green-400 to-blue-500 p-2 md:p-6 xl:p-8">
      <h1 tw=" text-gray-100 font-bold text-2xl md:text-5xl xl:text-6xl mb-12 md:mb-20 xl:mb-28">
        Resume Generator
      </h1>
      <FormProvider>
        <Form />
      </FormProvider>
    </div>
  )
}

export default App
