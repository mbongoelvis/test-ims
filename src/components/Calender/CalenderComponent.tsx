import { CalenderUI } from "./CalenderUI";

export const CalenderComponent = ({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
  }) => {
  return (
    <div
      className={`w-full flex justify-end min-h-screen bg-[#5a5a5a99] pl-1 top-0 left-0 z-[100] fixed ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <CalenderUI closeMenu={onClose} />
    </div>
  );
};
