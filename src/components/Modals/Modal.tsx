import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {FaPlus} from 'react-icons/fa'

// interface prop for the modal
interface ModalProps { 
  heading: string;
  subHeading: string;
  buttonName: string;
  children: React.ReactNode;
  icon?: boolean;
  btnName: string;
  buttonIcon?: boolean;
  triggerBgColor?: string; // optional prop for trigger button background
}


// ************** How to us this modal component **************

// Pass in the Heading, subHeading, buttonName, children, icon, btnName and buttonIcon props.
// Example usage:
// <Modal icon={false} buttonIcon={false} btnName='Add Users' heading='Share this link' subHeading='Anyone with this link can view the document.' buttonName='Copy Link' >
        // <p>Pass your component here</p>
// </Modal>

// ****** now u will need to replace the <p></p> with your component or content you want to show in the modal. ******

export const Modal = ({
  heading,
  btnName,
  subHeading,
  icon,
  buttonIcon,
  children,
  buttonName,
  triggerBgColor,
}: ModalProps) => {
  // Use the provided triggerBgColor or fallback to default
  const triggerButtonClass = `${triggerBgColor || 'bg-[#5B66FF] hover:opacity-75 hover:bg-[#5B66FF]'} text-white cursor-pointer p-2`;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={triggerButtonClass}>
          {buttonIcon && <FaPlus />}
          {btnName}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{heading}</DialogTitle>
          <DialogDescription>{subHeading}</DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter className="sm:justify-end">
          {/* close button */}
          <DialogClose asChild>
            <Button
              type="button"
              className="!border border-primary-50 cursor-pointer !bg-secondary text-black"
            >
              Cancel
            </Button>
          </DialogClose>
          {/* action button */}

          <Button
            type="button"
            className="bg-[#5B66FF] hover:opacity-75 hover:bg-[#5B66FF] text-white cursor-pointer"
          >
            {icon && <FaPlus />}
            {buttonName}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
