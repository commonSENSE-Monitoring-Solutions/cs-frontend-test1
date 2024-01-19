import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import { MainContainer, OpenButton } from './components/Modal/styled';



 const App: React.FC = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const openModal1 = () => setModal1Open(true);
  const closeModal1 = () => setModal1Open(false);

  const openModal2 = () => setModal2Open(true);
  const closeModal2 = () => setModal2Open(false);

  return (
    <MainContainer className='p-5'>
      <OpenButton className="px-5 py-2.5 bg-blue-500 text-white border-none cursor-pointer text-base rounded-md hover:bg-blue-700 mr-10" onClick={openModal1}>Open Modal 1</OpenButton>
      <OpenButton className="px-5 py-2.5 bg-blue-500 text-white border-none cursor-pointer text-base rounded-md hover:bg-blue-700 mr-10" onClick={openModal2}>Open Modal 2</OpenButton>


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