// Dependencies
import type { FunctionComponent } from "react";

// Styles
import { Container, Label } from "./button.styles";

// Types
import type { ButtonProps } from "./button.types";

export const Button: FunctionComponent<ButtonProps> = ({ label, handleClick, variant, isActive }) => {
    return (
        <Container onClick={handleClick} variant={variant} isActive={isActive}>
            <Label>{label}</Label>
        </Container>
    );
};
