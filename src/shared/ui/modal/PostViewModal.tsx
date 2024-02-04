import React from 'react';
import { usePostModal } from '@/app/store';
import Modal from '.';
import Button from '../button';

export default function PostViewModal() {
  const { postData, closePostModal } = usePostModal();
  const handleAddPostComment = () => {
    console.log('asd');
  };
  return (
    <Modal isVisible={!!postData}>
      <div className="h-full w-full flex items-center flex-col justify-between">
        <div className="w-full flex items-center justify-end">
          <button
            className="p-2 hover:text-purple-600 transition-colors"
            onClick={closePostModal}
          >
            X
          </button>
        </div>

        <p>{postData?.title}</p>
        <p>{postData?.body}</p>

        <Button onClick={handleAddPostComment}>
          Добавить комментарий
        </Button>
      </div>
    </Modal>
  );
}
