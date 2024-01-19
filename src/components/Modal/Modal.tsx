import React, { useEffect, useState } from 'react';
import { Overlay, ModalContainer, Header, CloseButton, Content, ButtonContainer } from './styled';

interface ModalProps {
  isOpen: boolean;
  title?: string;
  content?: React.ReactNode;
  buttons?: React.ReactNode[];
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, content, buttons, onClose }) => {
  // State to manage the modal open/close state
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  // Effect to update the modal state when the 'isOpen' prop changes
  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <>
      {isModalOpen && (
        <Overlay className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50">
          <ModalContainer className="max-w-xl w-full bg-white rounded-lg shadow-md overflow-hidden relative">
            <Header className="p-5 bg-blue-500 text-white border-b-1 border-blue-700 text-xl flex justify-between items-center">
              {title && <div>{title}</div>}
              <CloseButton className="bg-transparent text-white border-none cursor-pointer text-3xl hover:underline" data-testid="close-button" onClick={closeModal}>&times;</CloseButton>
            </Header>
            <Content className="p-5 text-sky-500">{content}</Content>
            {buttons && (
        <ButtonContainer className="p-5 flex justify-end">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="bg-blue-500 border-none px-4 py-2 ml-4 cursor-pointer rounded-md text-base hover:bg-blue-700 transition-all duration-300">
              {button}
            </button>
          ))}
        </ButtonContainer>
      )}
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};

export default Modal;