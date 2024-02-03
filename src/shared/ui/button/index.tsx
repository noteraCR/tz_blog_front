'use client'
import { useUserStateStore } from '@/app/store'
import React from 'react'
interface Props {
  children: React.ReactNode
  onClick: () => void
}

export default function Button({ children, onClick }: Props) {

  return (
    <button onClick={onClick} className="p-[3px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        {children}
      </div>
    </button>
  )
}
