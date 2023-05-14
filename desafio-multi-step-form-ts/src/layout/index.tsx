import React from "react"

interface LayoutStepFormProps {
  children: React.ReactNode
}

const LayoutStepForm = ({ children }: LayoutStepFormProps) => {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}
      className="h-full items-center w-full gap-10"
    >
      <div className="bg-aside bg-cover w-72 h-full bg-no-repeat rounded-xl p-8">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center jusitfy-center gap-4">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-lightBlue">
              <p className="font-bold text-marineBlue">1</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lightBlue text-xs">STEP 1</h3>
              <h2 className="text-white font-semibold">YOUR INFO</h2>
            </div>
          </li>
          <li className="flex items-center jusitfy-center gap-4">
            <div className="flex items-center justify-center h-8 w-8 rounded-full border border-white ">
              <p className="font-bold text-white">2</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lightBlue text-xs">STEP 2</h3>
              <h2 className="text-white font-semibold">SELECT PLAN</h2>
            </div>
          </li>
          <li className="flex items-center jusitfy-center gap-4">
            <div className="flex items-center justify-center h-8 w-8 rounded-full border border-white ">
              <p className="font-bold text-white">3</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lightBlue text-xs">STEP 3</h3>
              <h2 className="text-white font-semibold">ADD-ONS</h2>
            </div>
          </li>
          <li className="flex items-center jusitfy-center gap-4">
            <div className="flex items-center justify-center h-8 w-8 rounded-full border border-white ">
              <p className="font-bold text-white">4</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lightBlue text-xs">STEP 4</h3>
              <h2 className="text-white font-semibold">SUMMARY</h2>
            </div>
          </li>
        </ul>
      </div>
      {children}
    </div>
  )
}

export default LayoutStepForm
