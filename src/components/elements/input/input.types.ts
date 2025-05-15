export type InputData = {
    placeholder: string;
    icon?: string;
};

export type InputAction = {
    handleChange: (event: any) => void;
};

export type InputProps = InputData & InputAction;
