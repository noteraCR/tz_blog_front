'use client'
import AddPost from '@/widgets/ui/AddPost'
import Posts from '@/widgets/ui/Posts'
import { useState } from 'react'
import { useUserStateStore } from './store'

export default function Home() {
  return (
    <>
      <AddPost />
      <Posts />
    </>
  )
}
