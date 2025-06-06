// Dependencies
import type { ReactNode } from "react";

export type ActionElementsData = {
    ciphersCounter: string;
};

export type ActionElementsElements = {
    inputCompositions: ReactNode;
    buttonCompositions: ReactNode;
};

export type ActionElementsProps = ActionElementsData & ActionElementsElements;
