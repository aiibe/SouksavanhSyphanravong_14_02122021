import { ReactElement } from "react";

export type ModalPropType = {
  isOpen: boolean;
  close: () => void;
  children: ReactElement;
};
