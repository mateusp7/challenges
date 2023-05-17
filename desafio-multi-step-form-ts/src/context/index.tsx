import { createContext, useState } from "react"

interface FormData {
  name: string
  emailAddress: string
  phoneNumber: string
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
  const [formData, setFormData] = useState<FormData>({
    name: "",
    emailAddress: "",
    phoneNumber: "",
    // inicialize aqui as outras informações do seu formulário
  })

  const nextStep = () => {
    if (step < 4) setStep(step + 1)
  }
  const prevStep = () => {
    if (step > 0) setStep(step - 1)
  }
  return (
    <FormContext.Provider
      value={{ step, formData, setFormData, nextStep, prevStep }}
    >
      {children}
    </FormContext.Provider>
  )
}
