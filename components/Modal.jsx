'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  const onHide = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="flex flex-col p-3 gap-3 border border-teal-600 rounded-md shadow-md shadow-teal-700 w-[65%] dark:bg-body bg-white font-[Sora] dark:text-white text-dark"
    >
      <button
        onClick={onHide}
        className="flex justify-end px-3 py-1 ml-auto text-white bg-red-500 rounded cursor-pointer w-fit"
      >
        Close
      </button>
      {children}
    </dialog>,
    document.getElementById('modal-root-content')
  );
};

export default Modal;
