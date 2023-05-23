import { addOns } from "../context"

export const getSum = (data: addOns[]) => {
  const result = data.reduce((a, b) => {
    return a + b.finalPrice
  }, 0)

  return result
}
