import { useContext, useEffect } from "react"
import { PersonalInfo } from "./components/Steps/PersonalInfo"
import YourPlan from "./components/Steps/YourPlan"
import { FormContext, FormContextType } from "./context"
import { Addons } from "./components/Steps/Addons"

function App() {
  const { formData } = useContext(FormContext) as FormContextType

  useEffect(() => {
    console.log(formData)
  }, [formData])

  return (
    <div className="h-screen w-full flex justify-center items-center bg-[#d6d9e6]">
      <PersonalInfo />
      <YourPlan />
      <Addons />
    </div>
  )
}

export default App
