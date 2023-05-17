import * as zod from "zod"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import LayoutStepForm from "../../layout"
import Input from "../Input/Input"
import { TitleDescription } from "../TitleDescription"
import { useContext, useEffect, useState } from "react"
import { FormContext, FormContextType } from "../../context"
import { CircleNotch } from "phosphor-react"

const personalInfoSchema = zod.object({
  name: zod
    .string({
      invalid_type_error: "Just letters",
    })
    .nonempty({ message: "This field is required" }),
  emailAddress: zod
    .string({ invalid_type_error: "Just letters" })
    .nonempty({ message: "This field is required" })
    .email({ message: "Invalid email" }),
  phoneNumber: zod
    .string({ invalid_type_error: "Just letters" })
    .nonempty({ message: "This field is required" })
    .regex(/^(\+1)?\s?\d{3}\s?\d{3}\s?\d{3}$/, {
      message: "Invalid phone number",
    }),
})

type PersonalInfoData = zod.infer<typeof personalInfoSchema>

export const PersonalInfo = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { nextStep, step, setFormData, formData } = useContext(
    FormContext
  ) as FormContextType

  const { handleSubmit, control } = useForm<PersonalInfoData>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      name: "",
      emailAddress: "",
      phoneNumber: "",
    },
  })

  function handleNextStep(data: PersonalInfoData) {
    setIsLoading(true)
    setFormData({ ...formData, ...data })

    setTimeout(() => {
      setIsLoading(false)
      nextStep()
    }, 1000)
  }

  useEffect(() => {
    console.log(formData)
  }, [formData])

  if (step === 1)
    return (
      <div className="flex h-[600px] items-center justify-center w-[900px] bg-white p-4 rounded-xl">
        <LayoutStepForm>
          <div className="flex flex-col w-full pr-16 ">
            <TitleDescription
              title="Personal Info"
              description="Please provide your name, email address, and phone number."
            />
            <form
              onSubmit={handleSubmit(handleNextStep)}
              className="flex flex-col gap-4 mt-10"
            >
              <Controller
                control={control}
                name="name"
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { error },
                }) => (
                  <Input
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    label="Name"
                    placeholder="your name"
                    error={error?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="emailAddress"
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { error },
                }) => (
                  <Input
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    label="Email Address"
                    placeholder="email@example.com"
                    error={error?.message}
                  />
                )}
              />
              <Controller
                rules={{ required: true }}
                control={control}
                name="phoneNumber"
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { error },
                }) => (
                  <Input
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    label="Phone Number"
                    placeholder="e.g. +1 234 567 890"
                    error={error?.message}
                  />
                )}
              />

              <button
                disabled={isLoading}
                className={`self-end px-4 py-2 mt-10 text-white transition-all duration-300 rounded-lg bg-marineBlue hover:bg-purplistBlue w-40 h-10 flex justify-center items-center`}
              >
                {isLoading ? (
                  <CircleNotch size={16} className={`animate-spin`} />
                ) : (
                  "Next Step"
                )}
              </button>
            </form>
          </div>
        </LayoutStepForm>
      </div>
    )
  else return null
}
