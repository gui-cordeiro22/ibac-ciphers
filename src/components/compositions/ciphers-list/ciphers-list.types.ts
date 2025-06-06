// Dependencies
import type { ReactNode } from "react";

export type CiphersListData = {
    musicName: string;
    musicTone: string;
};

export type CipherListProps = CiphersListData;

export type CipherListWrapperElement = {
    ciphersListComposition: ReactNode;
};

export type CipherListWrapperProps = CipherListWrapperElement;
