import React from 'react'
type Props = { value: string; placeholder: string }

export default function TextArea({ value, placeholder }: Props) {
    return <textarea value={value} placeholder={placeholder} className='rounded-3xl w-full h-full p-3 resize-none'/>
}
