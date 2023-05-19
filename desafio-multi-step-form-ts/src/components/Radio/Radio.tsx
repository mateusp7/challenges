import { useEffect } from "react"

interface CheckboxInputProps
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

export const Radio: React.FC<CheckboxInputProps> = ({
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

  console.log("title: " + title.toLowerCase())
  console.log("radioValue: " + radioValue.toLowerCase())
  console.log(isChecked)

  return (
    <label
      className={`flex flex-col flex-1 gap-2 p-4 mt-3 transition-all duration-300 border cursor-pointer h-44 rounded-xl  hover:border-purplistBlue hover:bg-alabaster ${
        isChecked
          ? "bg-alabaster border-purplistBlue"
          : "bg-none border-alabaster"
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
      </div>
    </label>
  )
}
