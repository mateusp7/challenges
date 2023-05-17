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
    <div
      style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}
      className="items-center w-full h-full gap-10"
    >
      <div className="h-full p-8 bg-no-repeat bg-cover bg-aside w-72 rounded-xl">
        <ul className="flex flex-col gap-4">
          {steps &&
            steps.map((step) => (
              <StepItem
                step={step.step}
                subTitle={step.subTitle}
                title={step.title}
              />
            ))}
        </ul>
      </div>
      {children}
    </div>
  )
}

export default LayoutStepForm
