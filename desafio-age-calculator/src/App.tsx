import Input from "./components/Input"
import Arrow from "./assets/images/icon-arrow.svg"
import * as yup from "yup"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { DateValues } from "./types/Date"

const IS_NUMBER_REGEX = /^\d+$/

function App() {
  const [years, setYears] = useState<string | number>("--")
  const [months, setMonths] = useState<string | number>("--")
  const [days, setDays] = useState<string | number>("--")
  const schema = yup
    .object()
    .shape({
      day: yup
        .string()
        .required("This field is required")
        .test("valid-day", "Must be a valid day", (value, context) => {
          const { month, year } = context.parent
          const isValidDay = isValidDate({ day: value, month, year })
          const validNumber = isNumber(value)
          const day = parseInt(value, 10)
          if (day > 31) return false
          if (day < 1) return false
          if (!validNumber) return false
          if (!isValidDay) return false
          else return true
        }),
      month: yup
        .string()
        .required("This field is required")
        .test("valid-month", "Must be a valid month", (value) => {
          const month = parseInt(value, 10)
          const isValidNumber = isNumber(value)
          if (month > 12) return false
          if (month < 1) return false
          if (!isValidNumber) return false
          else return true
        }),
      year: yup
        .string()
        .required("This field is required")
        .test("valid-year", "Must be a valid year", (value) => {
          const currentYear = new Date().getFullYear()
          const year = parseInt(value, 10)
          const isValidNumber = isNumber(value)
          if (year > currentYear) return false
          if (!isValidNumber) return false
          else return true
        }),
    })
    .required()

  const isNumber = (value: string) => {
    const regexNumber = IS_NUMBER_REGEX.test(value.toString())
    return regexNumber
  }

  const isValidDate = ({ day, month, year }: DateValues) => {
    const maxDay = new Date(Number(year), Number(month), 0).getDate()
    if (Number(day) > maxDay) {
      return false
    }
    const now = new Date()
    const date = new Date(Number(year), Number(month) - 1, Number(day))
    if (date > now) {
      return false
    }
    return true
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DateValues>({
    resolver: yupResolver(schema),
  })

  function diffDates(
    date1: Date,
    date2: Date
  ): { years: number; months: number; days: number } {
    const diff = new Date(date2.getTime() - date1.getTime())
    const years = diff.getUTCFullYear() - 1970
    const months = diff.getUTCMonth()
    const days = diff.getUTCDate() - 1

    return { years, months, days }
  }

  const handleSubmitDate: SubmitHandler<DateValues> = (formData) => {
    const date = new Date(
      Number(formData.year),
      Number(formData.month) - 1,
      Number(formData.day)
    )
    const today = new Date()
    const result = diffDates(date, today)
    setYears(result.years)
    setMonths(result.months)
    setDays(result.days)
  }
  return (
    <div className="flex items-center justify-center h-screen max-w-lg p-4 m-auto lg:max-w-2xl">
      <form
        onSubmit={handleSubmit(handleSubmitDate)}
        className="w-full bg-white px-6 lg:pl-9 lg:pr-28 py-10 rounded-br-[80px] rounded-lg flex flex-col gap-14 lg:gap-10 relative"
      >
        <div className="flex items-center gap-4 pb-10 border-b lg:gap-8 border-lightGrey">
          <Input
            errors={errors && errors.day?.message}
            {...register("day")}
            label="DAY"
            placeholder="DD"
          />
          <Input
            errors={errors && errors.month?.message}
            {...register("month")}
            label="MONTH"
            placeholder="MM"
          />
          <Input
            errors={errors && errors.year?.message}
            {...register("year")}
            label="YEAR"
            placeholder="YYYY"
          />
        </div>
        <button
          type="submit"
          className="absolute p-2 transition-all duration-150 ease-linear rounded-full cursor-pointer lg:p-3 right-6 top-32 lg:right-28 bg-purple hover:bg-offBlack max-w-max"
        >
          <img src={Arrow} alt="Arrow" />
        </button>
        <section className="flex flex-col gap-4 text-4xl italic font-bold lg:text-6xl">
          <h1>
            <span className="text-purple">{years}</span> years
          </h1>
          <h1>
            <span className="text-purple">{months}</span> months
          </h1>
          <h1>
            <span className="text-purple">{days}</span> days
          </h1>
        </section>
      </form>
    </div>
  )
}

export default App
