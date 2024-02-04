import React from 'react'
import { Post } from '@/models/Post'
type Props = { post: Post }

export default function Card({ post: { title, body, id } }: Props) {
  return (
    <div className="w-full bg-gray-100 mb-4 rounded-md p-4">
        <p>{id}</p>
      <h3 className="mb-2 font-bold text-xl">{title}</h3>
      <p>{body}</p>
    </div>
  )
}
