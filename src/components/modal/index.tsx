import { ReactNode, SetStateAction, useEffect, useRef } from "react";
import ReactDom from "react-dom";
import { useOnClickOutside } from "../../hooks";

type ModalPropsType = {
  children: ReactNode;
  open: boolean;
  setOpen?: React.Dispatch<SetStateAction<boolean>>;
};

export default function Modal({ children, open, setOpen }: ModalPropsType) {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const body = document.body;
    body.style.overflow = open ? "hidden" : "auto";
  }, [open]);
  useOnClickOutside(modalRef, () => (setOpen ? setOpen!(false) : null));
  if (!open) return null;

  return ReactDom.createPortal(
    <div
      className={`fixed top-0 left-0 h-full w-full flex items-center justify-center bg-black bg-opacity-80 z-50`}
    >
      <div className="relative" ref={modalRef}>
        {children}
      </div>
    </div>,
    document.getElementById("portal")!
  );
}
