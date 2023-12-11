import CloseIcon from "@mui/icons-material/Close";
export const CloseButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className="h-10 w-10" onClick={onClick} type="button">
      <CloseIcon />
    </button>
  );
};

export const BlueButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="h-10 px-6 py-2 bg-blue-500 rounded-md shadow-sm text-white"
    >
      {label}
    </button>
  );
};
