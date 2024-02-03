'use client'
import React from 'react'
import './button.css'
interface Props {
  value: string
  onClick: () => void
}

export default function Button({ value, onClick }: Props) {
  return (
    <input
      type="button"
      className="text-gray-50 rounded-md bg-purple-600 px-3 py-2 cursor-pointer"
      onClick={onClick}
      value={value}
    />
  )
}
