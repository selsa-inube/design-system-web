import { useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import { IAction, IEntry, ITitle } from "../types";

interface DisplayEntryProps {
  portalId: string;
  entry: IEntry;
  actions: IAction[];
  title: string;
  titleLabels: ITitle[];
  infoTitle?: string;
  actionsTitle?: string;
}

const DisplayEntry = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <MdOpenInNew onClick={handleToggleModal} />
    </>
  );
};

export { DisplayEntry };
export type { DisplayEntryProps };
