import * as zod from "zod"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import LayoutStepForm from "../../layout"
import Input from "../Input/Input"
import { TitleDescription } from "../TitleDescription"

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
  const { handleSubmit, control } = useForm<PersonalInfoData>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      name: "",
      emailAddress: "",
      phoneNumber: "",
    },
  })

  function handleNextStep() {
    console.log("Next step")
  }

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
            className="mt-10 flex flex-col gap-4"
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

            <button className="bg-marineBlue py-2 px-4 hover:bg-purplistBlue transition-all duration-300 text-white rounded-lg max-w-max self-end mt-10">
              Next Step
            </button>
          </form>
        </div>
      </LayoutStepForm>
    </div>
  )
}
