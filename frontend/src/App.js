import "twin.macro"
import Form from "./components/Form"
import { FormProvider } from "./FormContext"

const App = () => {
  return (
    <div tw="flex flex-col items-center justify-start w-full min-h-screen bg-gray-900 p-4 sm:p-6 md:p-6 xl:p-10">
      <h1 tw="text-gray-100 font-bold text-2xl md:text-4xl xl:text-5xl mb-12 md:mb-20 xl:mb-28">
        Resume Generator
      </h1>
      <FormProvider>
        <Form />
      </FormProvider>
    </div>
  )
}

export default App
