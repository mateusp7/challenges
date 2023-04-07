import { InputHTMLAttributes, Ref, forwardRef } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  placeholder: string
}

interface InputPropsWithRef extends InputProps {
  ref?: Ref<HTMLInputElement>
  errors: string | undefined
}

const Input = forwardRef(
  (props: InputPropsWithRef, ref: Ref<HTMLInputElement>) => {
    const { name, label, placeholder, errors, ...rest } = props

    return (
      <div className="relative">
        <label
          className="block mb-2 text-xs tracking-widest text-smokeyGrey"
          htmlFor={name}
        >
          {label}
        </label>
        <input
          {...rest}
          className="w-32 px-3 py-2 text-lg border rounded outline-none border-lightGrey bg-none text-offBlack"
          type="text"
          name={name}
          id={name}
          placeholder={placeholder}
          ref={ref}
        />
        {errors ? (
          <span className="block text-[10px] italic tracking-widest text-lightRed absolute -bottom-5">
            {errors}
          </span>
        ) : (
          ""
        )}
      </div>
    )
  }
)

export default Input