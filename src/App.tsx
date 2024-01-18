import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import styled from 'styled-components';

const MainContainer = styled.div`
  padding: 20px;
`;

const OpenButton = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 4px;
  margin-right: 10px;

  &:hover {
    background-color: #2980b9;
  }
`;

const App: React.FC = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const openModal1 = () => setModal1Open(true);
  const closeModal1 = () => setModal1Open(false);

  const openModal2 = () => setModal2Open(true);
  const closeModal2 = () => setModal2Open(false);

  return (
    <MainContainer>
      <OpenButton onClick={openModal1}>Open Modal 1</OpenButton>
      <OpenButton onClick={openModal2}>Open Modal 2</OpenButton>

      <Modal
        isOpen={modal1Open}
        title="Modal 1 Title"
        content={<p>Modal 1 Content</p>}
        buttons={[<button key="1">Button 1</button>, <button key="2">Button 2</button>]}
        onClose={closeModal1}
      />

      <Modal
        isOpen={modal2Open}
        title="Modal 2 Title"
        content={<p>Modal 2 Content</p>}
        buttons={[
          <button key="1">Button 1</button>,
          <button key="2">Button 2</button>,
          <button key="3">Button 3</button>,
        ]}
        onClose={closeModal2}
      />
    </MainContainer>
  );
};

export default App;