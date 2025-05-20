// Types
import type { ReactNode } from "react";

export type ModalContentData = {
    content: string;
};

export type ModalContentElements = {
    actionElements: ReactNode;
};

export type ModalContentProps = ModalContentData & ModalContentElements;
