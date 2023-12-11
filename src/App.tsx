import { useState } from "react";
import "./App.css";
import { BlueButton, Dialog, Modal } from "./components";

function App() {
  const [modal, setModal] = useState<boolean>(true);

  const handleModal = () => setModal(true);
  const handleConfirmDelete = () => {
    console.log("delete item");
    setModal(false);
  };
  const handleCancel = () => {
    console.log("cancelled");
    setModal(false);
  };

  return (
    <>
      <div className="App min-h-screen min-w-full bg-red-400 flex items-center justify-center">
        <BlueButton label="Open Modal" onClick={handleModal} />
      </div>
      <Modal open={modal} setOpen={setModal}>
        <Dialog
          title="Confirm Delete"
          closeModal={() => setModal(false)}
          buttons={[
            { label: "Delete", onClick: handleConfirmDelete },
            { label: "Cancel", onClick: handleCancel },
          ]}
        >
          <span>This will be deleted permanently.</span>
        </Dialog>
      </Modal>
    </>
  );
}

export default App;
