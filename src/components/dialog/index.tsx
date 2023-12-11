import { ReactNode } from "react";
import { BlueButton, CloseButton } from "../buttons";

type Button = {
  label: string;
  onClick: () => void;
};

type DialogType = {
  title: string;
  children: ReactNode;
  buttons: Button[];
  closeModal: () => void;
};

/**
 *
 * @param title - custom title for dialog,
 * @param children - custom content
 * @param buttons - array of buttons
 * @param closeModal - function to close the modal
 * */

function Dialog({ title, children, buttons, closeModal }: DialogType) {
  return (
    <div className="relative p-6 shadow-sm rounded-md bg-white flex flex-col gap-6">
      <div className="h-fit w-fit absolute top-0 right-0">
        <CloseButton onClick={closeModal} />
      </div>
      <span className="text-xl font-semibold">{title}</span>
      {children}
      <div className="flex gap-4 mx-auto">
        {buttons.map((btn, i) => (
          <BlueButton onClick={btn.onClick} label={btn.label} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Dialog;
