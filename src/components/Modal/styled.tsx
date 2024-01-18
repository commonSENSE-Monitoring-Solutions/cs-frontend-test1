import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  max-width: 600px;
  width: 100%;
  position: relative;
`;

export const Header = styled.div`
  padding: 20px;
  background: #3498db;
  color: #fff;
  border-bottom: 1px solid #2980b9;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.button`
  background: none;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const Content = styled.div`
  padding: 20px;
`;

export const ButtonContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-end;

  button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin-left: 10px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 1rem;

    &:hover {
      background-color: #2980b9;
    }
  }
`;