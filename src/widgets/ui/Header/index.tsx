'use client'
import { useUserStateStore } from '@/app/store'
import Button from '@/shared/ui/button'
import React, { useCallback } from 'react'

export default function Header() {
  const { openAddPostModal } = useUserStateStore()
  const handleLogin = () => {}

  return (
    <header className="fixed top-0 left-0 w-full flex justify-end items-center gap-3 p-10 z-10">
      <Button onClick={openAddPostModal}>Написать</Button>
      <Button onClick={handleLogin}>Login</Button>
    </header>
  )
}
