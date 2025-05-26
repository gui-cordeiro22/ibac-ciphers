// Dependencies
import type { InputHTMLAttributes, ReactNode } from "react";

export type InputData = Partial<InputHTMLAttributes<HTMLInputElement>> & {
    placeholder: string;
    icon?: string;
};

export type InputElement = {
    buttonElement?: ReactNode;
};

export type InputAction = {
    handleChange?: (event: any) => void;
};

export type InputProps = InputData & InputElement & InputAction;
