'use client'
import AddPost from '@/widgets/ui/AddPost'
import Posts from '@/widgets/ui/Posts'
import { useState } from 'react'
import { useUserStateStore } from './store'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
       <AddPost />
      <Posts />
    </main>
  )
}
