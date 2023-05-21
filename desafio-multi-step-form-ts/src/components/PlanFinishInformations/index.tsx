import { useContext } from "react"
import { FormContext, FormContextType } from "../../context"

export const PlanInformations = () => {
  const { formData, backToThirdStep } = useContext(
    FormContext
  ) as FormContextType
  return (
    <div className="flex items-center justify-between pb-4">
      <div className="flex flex-col items-start">
        <h1 className="font-bold text-marineBlue">
          {formData.plan.planName} {`(${formData.plan.type})`}
        </h1>
        <button
          onClick={backToThirdStep}
          className="underline text-purplistBlue"
        >
          Change
        </button>
      </div>
      <span className="text-base font-bold text-marineBlue">
        {formData.plan.priceDescription}
      </span>
    </div>
  )
}
