import React, { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import StyledBackdrop from './UI/StyledBackdrop';

interface ModalProps {
  title: string;
  buttons: React.ReactNode[];
  onClose: () => void;
  isOpen: boolean;
  children?: React.ReactNode; 
}

const ModalContainer = styled.div<{isopen?: string;}>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

// Modal component definition
const Modal: FC<ModalProps> = ({ title, buttons, onClose, isOpen, children }) => {

  // Effect to handle modal-related behavior on mount and unmount
  useEffect(() => {
    // Disable scrolling on the background when the modal is open
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    // Event listener for the 'Escape' key to close the modal
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    // Add event listener on mount
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup: Remove event listener and re-enable scrolling on unmount
    return (): void => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Portal element to render modals outside the main app DOM hierarchy
  const portalElement = document.getElementById('overlays')!;

  return (
    <>
      {/* Render backdrop and modal if isOpen is true */}
      {isOpen && (
        <>
          {/* Use portal to render the backdrop outside the main app DOM hierarchy */}
          {ReactDOM.createPortal(<StyledBackdrop  />, portalElement)}

          {/* Use portal to render the modal outside the main app DOM hierarchy */}
          {ReactDOM.createPortal(
            <ModalContainer id="modal" className={`font-secondary w-[75%] sm:w-[65%] md:w-[50%] lg:w-[40%] `} isopen={isOpen ? 'true' : 'false'}>
              {/* Close button with SVG icon */}
              <CloseButton onClick={onClose} className='cursor-pointer transform transition-all hover:scale-125'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </CloseButton>

              {/* Modal title */}
              <div className="text-center uppercase text-xl font-bold border-b border-gray-200 pb-1 mb-5">
                <h2>{title}</h2>
              </div>

              {/* Modal content */}
              <div className='description text-md my-5'>
                {children}
              </div>

              {/* Modal buttons */}
              <div className='w-full flex flex-wrap gap-5 justify-around text-md mt-7'>
                {buttons}
              </div>
            </ModalContainer>, 
          portalElement)}
        </>
      )}
    </>
  );
};

export default Modal;
