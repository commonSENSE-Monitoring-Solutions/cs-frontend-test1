import { useState } from 'react';

// Custom hook to manage modal state
const useModal = (): [boolean, () => void] => {
  // State variable to track whether the modal is currently showing or not
  const [isShowing, setIsShowing] = useState(false);

  // Function to toggle the modal state between showing and hiding
  function toggle() {
    setIsShowing(!isShowing);
  }

  // Return the state variable and the toggle function as part of the hook's public interface
  return [
    isShowing,
    toggle
  ];
}

export default useModal;