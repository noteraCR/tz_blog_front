import ChildrenProp from '@/shared/types/ChildrenProp'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type ModalProps = ChildrenProp & {
  isVisible: boolean
  onModalClose: () => void
}

const defaultModalAnimation = {
  transition: { duration: 0.2, delay: 0.1, ease: 'easeInOut' },
  initial: { opacity: 0, scale: 0.9, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
}

export default function Modal({ children, isVisible, onModalClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="absolute bg-gray-100 flex flex-col justify-center items-center gap-3 px-10 py-8 rounded-3xl w-4/5 h-screen-80"
          {...defaultModalAnimation}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
