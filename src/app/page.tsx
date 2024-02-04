'use client'
import AddPost from '@/widgets/ui/AddPost'
import Posts from '@/widgets/ui/Posts'
import PostViewModal from '@/shared/ui/modal/PostViewModal'
import { useUserDataStore } from './store'
import { useEffect } from 'react'

export default function Home() {
  const { createUser, userId } = useUserDataStore()
  
  useEffect(() => {
    if (!userId) createUser()
    console.log(localStorage.getItem("userId"))
    console.log(userId)
  }, [userId])

  return (
    <>
      <PostViewModal />
      <AddPost />
      <Posts />
    </>
  )
}
