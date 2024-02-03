'use client'
import { useUserStateStore } from '@/app/store'
import Button from '@/shared/ui/button'
import Input from '@/shared/ui/input'
import Modal from '@/shared/ui/modal'
import TextArea from '@/shared/ui/textArea'
import React, { ChangeEvent, useState, useCallback } from 'react'

type Props = {}

export default function AddPost({}: Props) {
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const { isAddPostModalOpen, closeAddPostModal } = useUserStateStore()
  const handleInput = useCallback(
    () => (e: ChangeEvent<HTMLInputElement>) => {
      setPostTitle(e.target.value)
    },
    []
  )
  const handleAddPost = () => {}

  return (
    <Modal isVisible={isAddPostModalOpen} onModalClose={closeAddPostModal}>
      <button
        className="w-full flex items-center justify-end hover:text-purple-600 transition-colors"
        onClick={closeAddPostModal}
      >
        X
      </button>
      <Input placeholder="заголовок" value={postTitle} onChange={handleInput} />
      <TextArea placeholder="текст поста" value={postBody} />

      <Button onClick={handleAddPost}>Добавить</Button>
    </Modal>
  )
}
