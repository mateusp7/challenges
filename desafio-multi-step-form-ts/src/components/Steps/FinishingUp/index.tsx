import { useContext, useState } from "react"
import LayoutStepForm from "../../../layout"
import { TitleDescription } from "../../TitleDescription"
import { FormContext, FormContextType } from "../../../context"
import { CircleNotch } from "phosphor-react"
import { PlanInformations } from "../../PlanFinishInformations"
import { OnsInformations } from "../../OnsFinishInformations"
import { TotalInformations } from "../../TotalFinishInformations"
import { Thanks } from "../Thanks"

export const FinishingUp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isThanksComponent, setIsThanksComponent] = useState(false)
  const { prevStep, formData, step } = useContext(
    FormContext
  ) as FormContextType

  function handleFinishUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setIsThanksComponent(true)
    }, 1000)
  }

  if (step === 4)
    return (
      <div className="flex h-full md:h-[600px] items-center justify-center w-[900px] md:bg-white p-4 md:rounded-xl bg-magnolia">
        <LayoutStepForm>
          {isThanksComponent ? (
            <Thanks />
          ) : (
            <form
              onSubmit={handleFinishUp}
              className="flex flex-col w-full p-8 bg-white rounded-lg md:p-0 md:pr-16 animationToRight"
            >
              <TitleDescription
                title="Finishing up"
                description="Double-check everything looks OK before confirming"
              />
              <div className="mt-6">
                <main className="flex flex-col justify-between gap-4">
                  <div className="p-4 rounded-md bg-alabaster">
                    <PlanInformations />
                    <hr className="w-full" />
                    {formData.addOns.map((add) => (
                      <OnsInformations
                        key={add.nameOns}
                        name={add.nameOns}
                        priceDescription={add.priceDescription.toString()}
                      />
                    ))}
                  </div>
                  <TotalInformations />
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
          )}
        </LayoutStepForm>
      </div>
    )
  else return null
}
