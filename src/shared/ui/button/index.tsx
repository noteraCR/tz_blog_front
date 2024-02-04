'use client';

import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, disabled, ...props }: Props) {
  // understand how to make disabled: tailwind work
  const disabledButtonStyles = disabled ? 'opacity-10 cursor-pointer' : '';
  const buttonOutline = disabled ? '' : 'bg-gradient-to-r from-indigo-500 to-purple-500';
  const buttonInnerWrapper = disabled ? '' : 'hover:bg-transparent transition duration-200';

  return (
    <button {...props} className={`p-[3px] relative ${disabledButtonStyles}`}>
      <div className={`absolute inset-0 ${buttonOutline} rounded-lg`} />
      <div className={`px-8 py-2 bg-black rounded-[6px] relative group text-white ${buttonInnerWrapper}`}>
        {children}
      </div>
    </button>
  );
}
