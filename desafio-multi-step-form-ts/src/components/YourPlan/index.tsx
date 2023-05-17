import React, { useContext } from "react"
import LayoutStepForm from "../../layout"
import { TitleDescription } from "../TitleDescription"
import { FormContext, FormContextType } from "../../context"

const YourPlan = () => {
  const { nextStep, prevStep, step } = useContext(
    FormContext
  ) as FormContextType

  if (step == 2)
    return (
      <div className="flex h-[600px] items-center justify-center w-[900px] bg-white p-4 rounded-xl">
        <LayoutStepForm>
          <div className="flex flex-col w-full pr-16 ">
            <TitleDescription
              title="Select Your Plan"
              description="You have the option of monthly or yearly billing."
            />
            <div className="mt-4">
              <div>
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </LayoutStepForm>
      </div>
    )
  else return null
}

export default YourPlan
