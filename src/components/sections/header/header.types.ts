// Dependencies
import type { ReactNode } from "react";

export type HeaderData = {
    imageSource: string;
};

export type HeaderElement = {
    navLinkCompositions: ReactNode;
};

export type HeaderProps = HeaderData & HeaderElement;
