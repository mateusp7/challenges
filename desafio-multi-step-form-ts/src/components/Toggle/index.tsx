import { useContext, useState } from "react"
import { FormContext, FormContextType } from "../../context"

export const Toggle = () => {
  const { setFormData, formData } = useContext(FormContext) as FormContextType
  const [currentToggleValue, setCurrentToggleValue] = useState(1)

  function handleChangeToggle() {
    if (currentToggleValue === 1) {
      setCurrentToggleValue(2)
      setFormData({ ...formData, type: "Yearly" })
    } else {
      setCurrentToggleValue(1)
      setFormData({ ...formData, type: "Monthly" })
    }
  }

  return (
    <button
      onClick={handleChangeToggle}
      type="button"
      className={`relative flex items-center px-5 py-3 rounded-full cursor-pointer bg-marineBlue before:h-4 before:w-4 before:rounded-full before:bg-white before:inline-block before:absolute before:transition-all before:duration-300 before:ease-in-out ${
        formData.type === "Monthly" ? "before:left-1" : "before:left-5"
      }`}
    ></button>
  )
}
