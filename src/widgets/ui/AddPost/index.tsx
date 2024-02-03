'use client'
import Button from '@/shared/ui/button'
import Input from '@/shared/ui/input'
import React, { ChangeEvent, useState } from 'react'

type Props = {}

export default function AddPost({}: Props) {
  const [postTitle, setPostTitle] = useState('')
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.target.value)
  }
  const handleAddPost = () => {}
  return (
    <>
      <div className="bg-emerald-100 flex justify-between items-center gap-3 px-10 py-8 rounded-3xl mb-16" style={{width: "80%"}}>
        <Input
          placeholder="напишите ваш пост"
          value={postTitle}
          onChange={handleInput}
        />
        <Button onClick={handleAddPost} value="добавить" />
      </div>
    </>
  )
}
