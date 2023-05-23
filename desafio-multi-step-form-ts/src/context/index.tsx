import { createContext, useEffect, useState } from "react"

type Plan = {
  planName: string
  type: "Monthly" | "Yearly"
  priceDescription: string | number
  finalPrice: string | number
}

export type addOns = {
  nameOns: string
  priceDescription: string
  finalPrice: number
}

interface FormData {
  name: string
  emailAddress: string
  phoneNumber: string
  plan: Plan
  addOns: addOns[]
}

export type FormContextType = {
  step: number
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  nextStep: () => void
  prevStep: () => void
  backToThirdStep: () => void
  backToSpecificStep: (step: number) => void
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
    plan: {
      planName: "",
      type: "Monthly",
      priceDescription: "",
      finalPrice: 0,
    },
    addOns: [],
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

  const backToThirdStep = () => {
    setStep(() => {
      const toThirdStep = 2
      localStorage.setItem("currentStep", toThirdStep.toString())
      return toThirdStep
    })
  }

  const backToSpecificStep = (step: number) => {
    setStep(() => {
      localStorage.setItem("currentStep", step.toString())
      return step
    })
  }

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
      value={{
        step,
        formData,
        setFormData,
        nextStep,
        prevStep,
        backToThirdStep,
        backToSpecificStep,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
