import React from 'react';

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextArea(props: Props) {
  return <textarea className="rounded-3xl w-full h-full p-3 resize-none focus-visible:outline-none" {...props} />;
}
