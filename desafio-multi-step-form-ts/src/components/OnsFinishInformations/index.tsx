interface OnsInformationsProps {
  name: string
  priceDescription: string
}

export const OnsInformations = ({
  name,
  priceDescription,
}: OnsInformationsProps) => {
  return (
    <ul className="flex flex-col w-full gap-3 pt-4">
      <li className="flex flex-row items-center justify-between">
        <p className="text-sm font-medium text-coolGray">{name}</p>
        <span className="text-sm font-bold text-coolGray">
          {priceDescription}
        </span>
      </li>
    </ul>
  )
}
