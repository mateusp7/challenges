import { PersonalInfo } from "./components/Steps/PersonalInfo"
import YourPlan from "./components/Steps/YourPlan"
import { Addons } from "./components/Steps/Addons"
import { FinishingUp } from "./components/Steps/FinishingUp"
import "./global.css"

function App() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-[#d6d9e6]">
      <PersonalInfo />
      <YourPlan />
      <Addons />
      <FinishingUp />
    </div>
  )
}

export default App
