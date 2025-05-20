// Dependencies
import type { ReactNode } from "react";

export type ModalData = {
    title: string;
    description?: string;
    isOpened: boolean;
};

export type ModalElement = {
    formElementComposition: ReactNode;
};

export type ModalProps = ModalData & ModalElement;
