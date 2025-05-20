// Dependencies
import type { ReactNode } from "react";

export type RegisterFormData = {
    nameInputLabel: string;
    toneInputLabel: string;
};

export type RegisterFormElements = {
    nameInputComposition: ReactNode;
    toneInputComposition: ReactNode;
};

export type RegisterFormAction = {
    handleSubmit: () => void;
};

export type RegisterFormProps = RegisterFormData & RegisterFormElements & RegisterFormAction;
