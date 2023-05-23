import { useContext, useState } from "react"
import LayoutStepForm from "../../../layout"
import { TitleDescription } from "../../TitleDescription"
import { FormContext, FormContextType } from "../../../context"
import { CircleNotch } from "phosphor-react"
import { PlanInformations } from "../../PlanFinishInformations"
import { OnsInformations } from "../../OnsFinishInformations"
import { TotalInformations } from "../../TotalFinishInformations"

export const FinishingUp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { nextStep, prevStep, formData, step } = useContext(
    FormContext
  ) as FormContextType

  function handleFinishUp() {
    // TODO: Create function
  }

  if (step === 4)
    return (
      <div className="flex h-[600px] items-center justify-center w-[900px] bg-white p-4 rounded-xl">
        <LayoutStepForm>
          <form
            onSubmit={handleFinishUp}
            className="flex flex-col w-full pr-16 h-5/6"
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
        </LayoutStepForm>
      </div>
    )
  else return null
}
