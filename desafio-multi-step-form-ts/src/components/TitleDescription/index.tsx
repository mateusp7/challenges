interface TitleAndSubtitleProps {
  title: string
  description: string
}

export const TitleDescription = ({
  title,
  description,
}: TitleAndSubtitleProps) => {
  return (
    <div>
      <h1 className="text-3xl text-marineBlue font-bold">{title}</h1>
      <p className="text-base text-coolGray mt-2">{description}</p>
    </div>
  )
}
