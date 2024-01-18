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
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

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
        <Overlay>
          <ModalContainer>
            <Header>
              {title && <div>{title}</div>}
              <CloseButton data-testid="close-button" onClick={closeModal}>&times;</CloseButton>
            </Header>
            <Content>{content}</Content>
            {buttons && <ButtonContainer>{buttons}</ButtonContainer>}
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};

export default Modal;