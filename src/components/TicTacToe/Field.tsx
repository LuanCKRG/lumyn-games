import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Field: React.FC<ButtonProps> = ({...props}) => {
  return (
    <button {...props} className="bg-zinc-500
    h-16
    w-16

    border-2
    border-black
    rounded-lg

    hover:disabled:before:content-none
    hover:before:content-['X']
    hover:font-thin
    text-lg
    "
    />
  )
}