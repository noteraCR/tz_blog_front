import ChildrenProp from '@/shared/types/ChildrenProp';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ModalProps = ChildrenProp & {
  isVisible: boolean
};

const defaultModalAnimation = {
  transition: { duration: 0.2, delay: 0.1, ease: 'easeInOut' },
  initial: { opacity: 0, scale: 0.9, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Modal({ children, isVisible }: ModalProps) {
  useEffect(() => {
    if (isVisible) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed w-screen h-screen top-0 left-0 justify-center items-center flex z-30">
          <motion.div className="bg-gray-100 flex flex-col justify-center items-center gap-3 px-10 pt-2 pb-8 rounded-3xl w-4/5 h-4/5" {...defaultModalAnimation}>
            {children}
          </motion.div>
          <motion.div
            {...defaultModalAnimation}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 0.5 }}
            className="absolute w-full h-full bg-gray-900 opacity-50 z-[-1]"
          />
        </div>
      )}
    </AnimatePresence>
  );
}
