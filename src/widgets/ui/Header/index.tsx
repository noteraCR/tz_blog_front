'use client'
import Button from '@/shared/ui/button'
import React from 'react'

type Props = {}

export default function Header({}: Props) {
  const handleLogin = () => {}
  const handleWritePost = () =>{
    
  }
  return (
    <header
      className="fixed top-0 left-0 w-full flex flex-row-reverse items-center"
      style={{ padding: '20px 100px', zIndex: 99 }}
    >
        <nav>

        <Button onClick={handleWritePost} value="Написать"></Button>
        <Button onClick={handleLogin} value="Login"></Button>
        </nav>
    </header>
  )
}
