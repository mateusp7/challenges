import { useContext } from "react"
import { FormContext, FormContextType } from "../../context"

export interface StepProps {
  step: number
  title: string
  subTitle: string
}

export const StepItem = ({ step, subTitle, title }: StepProps) => {
  const { step: currentStep, backToSpecificStep } = useContext(
    FormContext
  ) as FormContextType
  const sameStep = step === currentStep
  return (
    <li className="flex items-center gap-4 jusitfy-center">
      <div
        onClick={() => backToSpecificStep(step)}
        className={`flex items-center justify-center w-8 h-8 rounded-full border border-lightBlue transition-all duration-300 ease-linear cursor-pointer hover:bg-lightBlue  ${
          sameStep && "bg-lightBlue "
        }`}
      >
        <p
          className={`font-bold hover:text-marineBlue ${
            sameStep ? "text-marineBlue" : "text-white"
          }`}
        >
          {step}
        </p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-xs uppercase text-lightBlue">{title}</h3>
        <h2 className="font-semibold text-white uppercase">{subTitle}</h2>
      </div>
    </li>
  )
}
