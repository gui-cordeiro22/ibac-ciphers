// Dependencies
import type { ReactNode } from "react";

export type MainMenuData = {
    title: string;
    description?: string;
    imageSource: string;
};

export type MainMenuElements = {
    buttonsCompositions: ReactNode;
};

export type MainMenuProps = MainMenuData & MainMenuElements;
