'use client'
import { useUserStateStore } from '@/app/store'
import Button from '@/shared/ui/button'
import Input from '@/shared/ui/input'
import Modal from '@/shared/ui/modal'
import TextArea from '@/shared/ui/textArea'
import React, { ChangeEvent, useState, useCallback, useMemo } from 'react'

type Props = {}

export default function AddPost({}: Props) {
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const { isAddPostModalOpen, closeAddPostModal } = useUserStateStore()
  const handleTitleInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.target.value)
  }, [])
  const handleBodyInput = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostBody(e.target.value)
  }, [])
  const disabled = useMemo(
    () => !(postTitle.length && postBody.length),
    [postBody.length > 0, postTitle.length > 0]
  )

  const handleAddPost = () => {}

  const handleCloseAddPostModal = () => {
    document.body.style.overflow = 'auto'
    closeAddPostModal()
  }

  return (
    <Modal isVisible={isAddPostModalOpen}>
      <>
        <div className='w-full flex items-center justify-end'>
          <button
            className="p-2 hover:text-purple-600 transition-colors"
            onClick={handleCloseAddPostModal}
          >
            X
          </button>
        </div>
        <Input
          placeholder="заголовок"
          value={postTitle}
          onChange={handleTitleInput}
          maxLength={140}
        />
        <TextArea
          placeholder="текст поста"
          value={postBody}
          onChange={handleBodyInput}
        />

        <Button onClick={handleAddPost} disabled={disabled}>
          Добавить
        </Button>
      </>
    </Modal>
  )
}
