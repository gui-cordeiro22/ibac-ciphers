export type ButtonVariants = "default" | "link";

export type ButtonData = {
    label: string;
    isActive: boolean;
    isCommingSoon: boolean;
    variant: ButtonVariants;
};

export type ButtonAction = {
    handleClick: () => void;
};

export type ButtonProps = ButtonData & ButtonAction;
