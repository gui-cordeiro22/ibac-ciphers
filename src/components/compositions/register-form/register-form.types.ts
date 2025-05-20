// Dependencies
import type { ReactNode } from "react";

export type RegisterFormElements = {
    nameInputComposition: ReactNode;
    toneInputComposition: ReactNode;
};

export type RegisterFormAction = {
    handleSubmit: () => void;
};

export type RegisterFormProps = RegisterFormElements & RegisterFormAction;
