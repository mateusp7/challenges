import ThanksIcon from "../../../assets/icon-thank-you.svg"

export const Thanks = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-8 bg-white rounded-lg md:p-0 md:pr-16 animationToRight">
      <img src={ThanksIcon} alt="All Correct" className="w-20 h-w-20" />
      <h1 className="mt-8 text-3xl font-bold text-marineBlue">Thank You</h1>
      <p className="mt-4 font-light text-center text-coolGray">
        Thanks for confirming your subscription! We hope you have fun using our
        plataform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  )
}
