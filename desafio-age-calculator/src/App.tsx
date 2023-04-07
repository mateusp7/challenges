import Input from "./components/Input"
import Arrow from "./assets/images/icon-arrow.svg"
import * as yup from "yup"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"

export type DateValues = {
  day: number
  month: number
  year: number
}

function App() {
  const [years, setYears] = useState<string | number>("--")
  const [months, setMonths] = useState<string | number>("--")
  const [days, setDays] = useState<string | number>("--")
  const schema = yup
    .object()
    .shape({
      day: yup.string().required("This field is required"),
      month: yup.string().required("This field is required"),
      year: yup.string().required("This field is required"),
    })
    .required()

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
    const date = new Date(formData.year, formData.month - 1, formData.day)
    const today = new Date()
    const result = diffDates(date, today)
    setYears(result.years)
    setMonths(result.months)
    setDays(result.days)
  }
  return (
    <div className="flex items-center justify-center h-screen max-w-2xl m-auto ">
      <form
        onSubmit={handleSubmit(handleSubmitDate)}
        className="w-full bg-white pl-9 pr-28 py-10 rounded-br-[80px] rounded-lg flex flex-col gap-10 relative"
      >
        <div className="flex items-center gap-4 pb-10 border-b border-lightGrey">
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
          className="absolute p-3 rounded-full top-[7.5rem] right-28 bg-purple cursor-pointer hover:bg-offBlack duration-150 ease-linear transition-all"
        >
          <img src={Arrow} alt="Arrow" />
        </button>
        <section className="flex flex-col gap-4 text-6xl italic font-bold">
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
