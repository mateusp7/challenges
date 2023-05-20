import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"

import { useContext, useState } from "react"
import LayoutStepForm from "../../../layout"
import { TitleDescription } from "../../TitleDescription"
import { FormContext, FormContextType } from "../../../context"
import Arcade from "../../../assets/icon-arcade.svg"
import Advanced from "../../../assets/icon-advanced.svg"
import Pro from "../../../assets/icon-pro.svg"
import { Radio } from "../../Radio/Radio"
import { CircleNotch } from "phosphor-react"
import { Toggle } from "../../Toggle"

const radioSchema = zod.object({
  plan: zod.string().nonempty(),
})

export type RadioData = zod.infer<typeof radioSchema>

const YourPlan = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { nextStep, prevStep, step, setFormData, formData } = useContext(
    FormContext
  ) as FormContextType

  const { control, handleSubmit, watch, setValue } = useForm<RadioData>({
    resolver: zodResolver(radioSchema),
    defaultValues: {
      plan: "",
    },
  })

  const radioValue = watch("plan")

  function changeOption(selectedPlan: string) {
    setValue("plan", selectedPlan)
  }

  function handleSelectPlan(data: RadioData) {
    console.log(formData)
    setIsLoading(true)
    setFormData({ ...formData, ...data })

    setTimeout(() => {
      setIsLoading(false)
      nextStep()
    }, 1000)
  }

  if (step == 2)
    return (
      <div className="flex h-[600px] items-center justify-center w-[900px] bg-white p-4 rounded-xl">
        <LayoutStepForm>
          <form
            onSubmit={handleSubmit(handleSelectPlan)}
            className="flex flex-col w-full pr-16 h-5/6"
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
                      onChange={() => changeOption("Arcade")}
                      checked={radioValue === "Arcade"}
                      icon={Arcade}
                      title="Arcade"
                      subtitle={`$${
                        formData.type === "Monthly" ? "9/mo" : "90/yr"
                      }`}
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
                      onChange={() => changeOption("Advanced")}
                      checked={radioValue === "Advanced"}
                      icon={Advanced}
                      title="Advanced"
                      subtitle={`$${
                        formData.type === "Monthly" ? "12/mo" : "120/yr"
                      }`}
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
                      onChange={() => changeOption("Pro")}
                      checked={radioValue === "Pro"}
                      icon={Pro}
                      title="Pro"
                      subtitle={`$${
                        formData.type === "Monthly" ? "15/mo" : "150/yr"
                      }`}
                      radioValue={radioValue}
                    />
                  )}
                />
              </main>
              <section className="flex items-center justify-center w-full py-3 mt-4 rounded-sm bg-alabaster">
                <div className="flex items-center gap-3">
                  <p className="font-medium text-marineBlue">Monthly</p>
                  <Toggle />
                  <p className="font-medium text-marineBlue">Yearly</p>
                </div>
              </section>
            </div>
            <div className="flex items-center justify-between pb-10 mt-auto">
              <button
                type="button"
                onClick={prevStep}
                className="mt-10 text-marineBlue"
              >
                Go Back
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className={`self-end px-4 py-2 mt-10 text-white transition-all duration-300 rounded-lg bg-marineBlue hover:bg-purplistBlue w-40 h-10 flex justify-center items-center`}
              >
                {isLoading ? (
                  <CircleNotch size={16} className={`animate-spin`} />
                ) : (
                  "Next Step"
                )}
              </button>
            </div>
          </form>
        </LayoutStepForm>
      </div>
    )
  else return null
}

export default YourPlan
