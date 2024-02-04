import React from 'react'
type Props = React.InputHTMLAttributes<HTMLInputElement>

export default function Input(props: Props) {
  return (
    <input
      className="rounded-md px-3 w-full focus-visible:outline-none"
      {...props}
    />
  )
}
