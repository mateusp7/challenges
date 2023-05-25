import React from "react"
import { StepItem, StepProps } from "../components/Step"

interface LayoutStepFormProps {
  children: React.ReactNode
}

const steps: StepProps[] = [
  {
    step: 1,
    title: "Step 1",
    subTitle: "Your info",
  },
  {
    step: 2,
    title: "Step 2",
    subTitle: "Select Plan",
  },
  {
    step: 3,
    title: "Step 3",
    subTitle: "Add-ons",
  },
  {
    step: 4,
    title: "Step 4",
    subTitle: "Summary",
  },
]

const LayoutStepForm = ({ children }: LayoutStepFormProps) => {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 flex justify-center w-full h-48 bg-no-repeat bg-cover bg-bgMobile md:hidden">
        <ul className="z-50 flex flex-row gap-4 mt-6 mb-auto">
          {steps &&
            steps.map((step) => (
              <StepItem
                key={step.step}
                step={step.step}
                subTitle={step.subTitle}
                title={step.title}
              />
            ))}
        </ul>
      </div>
      <div className="relative flex flex-col items-center w-full h-full gap-10 md:grid md:grid-cols-gridAuto1fr">
        <div className="hidden w-full h-full p-8 bg-no-repeat bg-cover bg-aside md:w-72 rounded-xl md:flex">
          <ul className="flex flex-row gap-4 md:flex-col">
            {steps &&
              steps.map((step) => (
                <StepItem
                  key={step.step}
                  step={step.step}
                  subTitle={step.subTitle}
                  title={step.title}
                />
              ))}
          </ul>
        </div>
        <div className="pt-20 md:z-30 md:mt-0">{children}</div>
      </div>
    </>
  )
}

export default LayoutStepForm
