import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label?: string
  isPassword?: boolean
  error?: string
}

const Input: React.FC<InputProps> = ({
  className,
  label,
  name,
  placeholder,
  isPassword,
  error,
  ...props
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-marineBlue text-sm font-light" htmlFor={name}>
          {label}
        </label>
        {error && (
          <span className="text-strawberryRed text-sm font-bold">{error}</span>
        )}
      </div>
      <input
        id={name}
        type={isPassword ? "password" : "text"}
        name={name}
        placeholder={placeholder}
        className={`${className} w-full outline-none border rounded-lg py-2 px-3 focus:border-purplistBlue ${
          error ? "border-strawberryRed" : "border-lightGray"
        }`}
        {...props}
      />
    </div>
  )
}

export default Input
