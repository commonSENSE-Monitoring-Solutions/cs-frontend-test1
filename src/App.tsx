import Modal from './components/Modal';
import useModal from './hooks/useModal';
import { useEffect, useState } from 'react';
import { StyledButton } from './components/UI/StyledButton';

function App() {
  // Custom hooks to manage the state of each modal
  const [displayFirstModal, toggleFirstModal] = useModal();
  const [displaySecondModal, toggleSecondModal] = useModal();
  
  // State to manage animation intro
  const [animateIntro, setAnimateIntro] = useState(false);

  useEffect(() => {
    // Set animateIntro to true after a delay to trigger the intro animation
    const timeout = setTimeout(() => {
      setAnimateIntro(true);
    }, 200);

    // Clear the timeout on component unmount to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  // Array of JSX buttons for the modals
  const buttonsArray = [
    (<button key="1" className="bg-transparent bg-white font-semibold text-[#519DB8] py-2 px-4 border border-[#519DB8] hover:text-white hover:bg-[#3C5B74] hover:border-transparent rounded transition-all w-full sm:w-[40%]">Button 1</button>), 
    (<button key="2" className="bg-[#519DB8] hover:bg-[#3C5B74] text-white font-bold py-2 px-4 border rounded transition-all w-full md:w-[40%]">Button 2</button>)
  ];

  return (
    <>
      {/* Main content container */}
      <div className={`font-primary absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[85%] md:w-[50%] lg:w-[40%] ${displayFirstModal || displaySecondModal ? 'filter blur-sm' : ''}`}>
        <div className='flex flex-col gap-10 items-center justify-center'>
          <div className={`relative ${animateIntro ? 'animate-fade-scale-in opacity-1' : 'opacity-0'}`}>
              <div>
                  <img src="me.jpeg" alt="Adrian Portrait" width="192"
                      height="192" 
                      className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                  />
              </div>                
              <span 
                  className='text-4xl absolute bottom-[-4px] right-[-4px] wave'
              >
                  👋
              </span>
        </div>
        {/* Intro text */}
        <div className={`text-2xl italic text-center ${animateIntro ? 'animate-left-to-right opacity-1' : 'opacity-0' }`}>
          Trigger modals using below <span className='underline decoration-sky-500'>buttons</span>!
        </div>
        {/* Buttons to open modals */}
        <div className='w-full flex flex-wrap gap-5 justify-around'>
        <StyledButton onClick={toggleFirstModal} animateintro={animateIntro ? 'true' : 'false'}>
          Open Modal
        </StyledButton>

        <StyledButton onClick={toggleSecondModal} animateintro={animateIntro ? 'true' : 'false'}>
          Another Modal
        </StyledButton>
        </div>
      </div>
      </div>

      {/* Modal components */}
      <Modal
        title="Modal 1"
        buttons={[buttonsArray]}
        onClose={toggleFirstModal}
        isOpen={displayFirstModal}
      >
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, omnis atque ratione magnam officia mollitia ducimus, hic, ullam quas in ab delectus reiciendis natus!</p>  
      </Modal>

      <Modal
        title="Modal 2"
        buttons={[buttonsArray]}
        onClose={toggleSecondModal}
        isOpen={displaySecondModal}
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ut adipisci nemo facilis quo autem deserunt modi at! Error necessitatibus dolores, rerum eaque cupiditate itaque inventore quibusdam.</p>
      </Modal>
    </>
  );
};

export default App;
