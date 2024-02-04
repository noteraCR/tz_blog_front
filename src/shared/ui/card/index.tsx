import React, { useOptimistic } from 'react';
import { Post } from '@/models/Post';
import Link from 'next/link';
import { usePostModal } from '@/app/store';
import Modal from '../modal';

type Props = { post?: Post };

export default function Card({ post }: Props) {
  const { openPostModal } = usePostModal();
  if (!post) return null;

  const { title, body, id } = post;

  const openModal = () => {
    openPostModal({ ...post });
  };
  return (
    <div
      className="w-full bg-gray-100 hover:bg-gray-200 cursor-pointer mb-4 rounded-md p-4"
      onClick={openModal}
    >
      <p>{id}</p>

      <h3 className="mb-2 font-bold text-xl">{title}</h3>
      <p
        className="text-ellipsis overflow-hidden"
        style={{
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 1,
          display: '-webkit-box',
        }}
      >
        {body}
      </p>
    </div>
  );
}
