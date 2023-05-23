import { useContext } from "react"
import { FormContext, FormContextType } from "../../context"
import { getSum } from "../../utils/getSumOptions"

export const TotalInformations = () => {
  const { formData } = useContext(FormContext) as FormContextType

  return (
    <div className="flex flex-row items-center justify-between p-4">
      <h1 className="text-coolGray">{`Total per ${formData.plan.type}`}</h1>
      <span className="text-xl font-bold text-purplistBlue">
        {`+$${getSum(formData.addOns) + Number(formData.plan.finalPrice)}${
          formData.plan.type === "Monthly" ? "/mo" : "/yr"
        }`}
      </span>
    </div>
  )
}
