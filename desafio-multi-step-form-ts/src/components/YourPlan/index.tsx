import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"

import React, { useContext, useEffect, useState } from "react"
import LayoutStepForm from "../../layout"
import { TitleDescription } from "../TitleDescription"
import { FormContext, FormContextType } from "../../context"
import Arcade from "../../assets/icon-arcade.svg"
import Advanced from "../../assets/icon-advanced.svg"
import Pro from "../../assets/icon-pro.svg"
import { Radio } from "../Radio/Radio"

const radioSchema = zod.object({
  plan: zod.string().nonempty({ message: "" }),
})

export type RadioData = zod.infer<typeof radioSchema>

const YourPlan = () => {
  const { nextStep, prevStep, step } = useContext(
    FormContext
  ) as FormContextType

  const { control, handleSubmit, watch, setValue } = useForm<RadioData>({
    resolver: zodResolver(radioSchema),
    defaultValues: {
      plan: "",
    },
  })

  const radioValue = watch("plan")

  function handleSelectPlan(data: RadioData) {
    console.log(data)
  }

  function changeOption(selectedPlan: string) {
    setValue("plan", selectedPlan)
  }

  useEffect(() => {
    console.log(radioValue)
  }, [radioValue])

  if (step == 2)
    return (
      <div className="flex h-[600px] items-center justify-center w-[900px] bg-white p-4 rounded-xl">
        <LayoutStepForm>
          <form
            onSubmit={handleSubmit(handleSelectPlan)}
            className="flex flex-col w-full pr-16 "
          >
            <TitleDescription
              title="Select Your Plan"
              description="You have the option of monthly or yearly billing."
            />
            <div className="mt-6">
              <main className="flex flex-row justify-between gap-4">
                <Controller
                  control={control}
                  name="plan"
                  render={({ field: { onBlur } }) => (
                    <Radio
                      onBlur={onBlur}
                      onClick={() => changeOption("Arcade")}
                      checked={radioValue === "Arcade"}
                      icon={Arcade}
                      title="Arcade"
                      subtitle="$9/mo"
                      radioValue={radioValue}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="plan"
                  render={({ field: { onBlur } }) => (
                    <Radio
                      onBlur={onBlur}
                      onClick={() => changeOption("Advanced")}
                      checked={radioValue === "Advanced"}
                      icon={Advanced}
                      title="Advanced"
                      subtitle="$12/mo"
                      radioValue={radioValue}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="plan"
                  render={({ field: { onBlur } }) => (
                    <Radio
                      onBlur={onBlur}
                      onClick={() => changeOption("Pro")}
                      checked={radioValue === "Pro"}
                      icon={Pro}
                      title="Pro"
                      subtitle="$15/mo"
                      radioValue={radioValue}
                    />
                  )}
                />
              </main>
            </div>
            <button>Next Step</button>
          </form>
        </LayoutStepForm>
      </div>
    )
  else return null
}

export default YourPlan
