import Image from "../../assets/icon-check.svg"

interface CheckboxInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string
  title: string
  subtitle: string
  valueOdds: string
}

const Checkbox = ({
  className,
  title,
  subtitle,
  value,
  checked,
  name,
  valueOdds,
  ...props
}: CheckboxInputProps) => {
  return (
    <label
      htmlFor={name}
      className={`cursor-pointer flex flex-row items-center justify-between w-full p-4 border flex1 rounded-xl border-lightGray ${
        checked ? "border-purplistBlue bg-alabaster" : ""
      } hover:border-purplistBlue hover:bg-alabaster`}
    >
      <div className="flex flex-row items-center gap-6">
        <input
          type="checkbox"
          value={value}
          checked={checked}
          id={name}
          name={name}
          className={`${className} appearance-none w-5 h-5 rounded-md border border-coolGray checked:bg-purplistBlue checked:bg-checked checked:bg-no-repeat checked:bg-contain flex items-center justify-center`}
          {...props}
        />
        <div className="flex flex-col">
          <h3 className="font-bold text-marineBlue">{title}</h3>
          <p className="text-sm text-coolGray">{subtitle}</p>
        </div>
      </div>
      <span className="font-normal text-purplistBlue">{valueOdds}</span>
    </label>
  )
}

export default Checkbox
