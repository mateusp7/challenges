import LayoutStepForm from "../../layout"
import Input from "../Input/Input"
import { TitleDescription } from "../TitleDescription"

export const PersonalInfo = () => {
  return (
    <div className="flex h-[600px] items-center justify-center w-[900px] bg-white p-4 rounded-xl">
      <LayoutStepForm>
        <div className="flex flex-col w-full pr-16 ">
          <TitleDescription
            title="Personal Info"
            description="Please provide your name, email address, and phone number."
          />
          <form className="mt-10 flex flex-col gap-4">
            <Input label="Name" required placeholder="your name" />
            <Input
              label="Email Address"
              required
              placeholder="email@example.com"
            />
            <Input
              label="Phone Number"
              required
              placeholder="e.g. +1 234 567 890"
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
