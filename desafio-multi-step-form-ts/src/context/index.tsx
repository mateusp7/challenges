import { createContext, useEffect, useState } from "react"

interface FormData {
  name: string
  emailAddress: string
  phoneNumber: string
  plan: string
  type: "Monthly" | "Yearly"
  onlineService: boolean
  largeStorage: boolean
  customizableProfile: boolean
  // adicione aqui as outras informações do seu formulário
}

export type FormContextType = {
  step: number
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  nextStep: () => void
  prevStep: () => void
}

export const FormContext = createContext<FormContextType | null>(null)

interface Props {
  children: React.ReactNode
}

export const FormProvider: React.FC<Props> = ({ children }) => {
  const [step, setStep] = useState(1)
  // TODO: Save data in localStorage
  const [formData, setFormData] = useState<FormData>({
    name: "",
    emailAddress: "",
    phoneNumber: "",
    plan: "",
    type: "Monthly",
    customizableProfile: false,
    largeStorage: false,
    onlineService: false,
    // inicialize aqui as outras informações do seu formulário
  })

  useEffect(() => {
    const storedStep = localStorage.getItem("currentStep")
    if (storedStep) {
      setStep(parseInt(storedStep))
    } else {
      localStorage.setItem("currentStep", "1")
    }
  }, [])

  const nextStep = () => {
    if (step < 5) {
      setStep((oldStep) => {
        const nextStepValue = oldStep + 1
        localStorage.setItem("currentStep", nextStepValue.toString())
        return nextStepValue
      })
    }
  }
  const prevStep = () => {
    if (step > 0) {
      setStep((oldStep) => {
        const previousStepValue = oldStep - 1
        localStorage.setItem("currentStep", previousStepValue.toString())
        return previousStepValue
      })
    }
  }
  return (
    <FormContext.Provider
      value={{ step, formData, setFormData, nextStep, prevStep }}
    >
      {children}
    </FormContext.Provider>
  )
}
