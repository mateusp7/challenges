import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { useContext, useState } from "react"
import { FormContext, FormContextType, addOns } from "../../../context"
import LayoutStepForm from "../../../layout"
import { TitleDescription } from "../../TitleDescription"
import { Controller } from "react-hook-form"
import { CircleNotch } from "phosphor-react"
import Checkbox from "../../Checkbox"

const addonsSchema = zod.object({
  onlineService: zod.boolean().default(false),
  largeStorage: zod.boolean().default(false),
  customizableProfile: zod.boolean().default(false),
})

export type AddonsData = zod.infer<typeof addonsSchema>

export const Addons = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { step, prevStep, nextStep, setFormData, formData } = useContext(
    FormContext
  ) as FormContextType

  const { control, handleSubmit } = useForm<AddonsData>({
    resolver: zodResolver(addonsSchema),
    defaultValues: {
      onlineService: false,
      largeStorage: false,
      customizableProfile: false,
    },
  })

  function getValue(data: AddonsData) {
    const addOns: addOns[] = []
    if (data.onlineService) {
      const onlineServiceAddOn = {
        nameOns: "Online Service",
        priceDescription:
          formData.plan.type === "Monthly" ? "+$1/mo" : "+$10/yr",
        finalPrice: formData.plan.type === "Monthly" ? 1 : 10,
      }
      addOns.push(onlineServiceAddOn)
    }

    if (data.largeStorage) {
      const largeStorageAddOn = {
        nameOns: "Larger Storage",
        priceDescription:
          formData.plan.type === "Monthly" ? "+$2/mo" : "+$20/yr",
        finalPrice: formData.plan.type === "Monthly" ? 2 : 20,
      }
      addOns.push(largeStorageAddOn)
    }

    if (data.customizableProfile) {
      const customizableProfileAddOn = {
        nameOns: "Customizable Profile",
        priceDescription:
          formData.plan.type === "Monthly" ? "+$2/mo" : "+$20/yr",
        finalPrice: formData.plan.type === "Monthly" ? 2 : 20,
      }
      addOns.push(customizableProfileAddOn)
    }
    return addOns
  }

  function handleSelectOns(data: AddonsData) {
    const resultAddOns = getValue(data)
    setIsLoading(true)
    setFormData({ ...formData, addOns: resultAddOns })

    setTimeout(() => {
      setIsLoading(false)
      nextStep()
    }, 1000)
  }

  if (step === 3)
    return (
      <div className="flex h-[600px] items-center justify-center w-[900px] bg-white p-4 rounded-xl">
        <LayoutStepForm>
          <form
            onSubmit={handleSubmit(handleSelectOns)}
            className="flex flex-col w-full pr-16 h-5/6 animationToRight"
          >
            <TitleDescription
              title="Pick add-ons"
              description="Add-ons help enhance your gaming experience"
            />
            <div className="mt-6">
              <main className="flex flex-col justify-between gap-4">
                <Controller
                  control={control}
                  name="onlineService"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Checkbox
                      onBlur={onBlur}
                      onChange={onChange}
                      title="Online Service"
                      subtitle="Access to multiplayer games"
                      valueOdds={
                        formData.plan.type === "Monthly" ? "+$1/mo" : "+$10/yr"
                      }
                      checked={value.valueOf()}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="largeStorage"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Checkbox
                      onBlur={onBlur}
                      onChange={onChange}
                      title="Larger storage"
                      subtitle="Extra 1TB of cloud save"
                      valueOdds={
                        formData.plan.type === "Monthly" ? "+$2/mo" : "+$20/yr"
                      }
                      checked={value.valueOf()}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="customizableProfile"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Checkbox
                      onBlur={onBlur}
                      onChange={onChange}
                      title="Customizable Profile"
                      subtitle="Custom theme on your profile"
                      valueOdds={
                        formData.plan.type === "Monthly" ? "+$2/mo" : "+$20/yr"
                      }
                      checked={value.valueOf()}
                    />
                  )}
                />
              </main>
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
