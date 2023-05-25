import { useContext } from "react"
import { FormContext, FormContextType } from "../../context"

interface RadioInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  disabled?: boolean
  className?: string
  icon?: string
  title: string
  subtitle: string
  radioValue: string
}

export const Radio: React.FC<RadioInputProps> = ({
  disabled = false,
  className,
  name,
  icon,
  title,
  subtitle,
  checked,
  value,
  radioValue,
  ...props
}) => {
  const isChecked = title.toLowerCase() == radioValue.toLowerCase()
  const { formData } = useContext(FormContext) as FormContextType
  return (
    <label
      className={`flex flex-row md:flex-col flex-1 gap-2 p-4 mt-3 transition-all duration-300 border cursor-pointer h-44 rounded-xl hover:border-purplistBlue hover:bg-alabaster ${
        isChecked
          ? "bg-alabaster border-purplistBlue"
          : "bg-none border-lightGray"
      }`}
    >
      <img src={icon} alt="" className="w-10 h-10" />
      <input
        value={value}
        checked={checked}
        disabled={disabled}
        type="radio"
        id={name}
        name={name}
        className={`${className} appearance-none`}
        {...props}
      />
      <div className="mt-auto">
        <h1 className="font-bold text-marineBlue">{title}</h1>
        <h3 className="text-sm font-medium text-coolGray">{subtitle}</h3>
        {formData.plan.type === "Yearly" ? (
          <p className="font-light text-marineBlue">2 months free</p>
        ) : null}
      </div>
    </label>
  )
}
