import React, { ChangeEvent } from 'react'
interface Props {
  placeholder: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ placeholder, value, onChange }: Props) {
  return (
    <input
      className="rounded-md px-3 w-full"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}
