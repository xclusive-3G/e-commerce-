import React from 'react';
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div  className="bg-white dark:bg-gray-950 dark:text-white w-10/12 max-w-lg rounded-lg shadow-lg p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white  hover:text-gray-800 dark:hover:text-white"
        >
          <IoClose size={30} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
