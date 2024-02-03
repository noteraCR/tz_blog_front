import React, { ChangeEvent } from 'react'
import './input.css'
interface Props {
  placeholder: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ placeholder, value, onChange }: Props) {
  return <input className='rounded-md px-3 ' placeholder={placeholder} value={value} onChange={onChange}></input>
}
