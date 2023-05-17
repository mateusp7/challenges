import { PersonalInfo } from "./components/PersonalInfo"
import YourPlan from "./components/YourPlan"

function App() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-[#d6d9e6]">
      <PersonalInfo />
      <YourPlan />
    </div>
  )
}

export default App
