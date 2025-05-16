// Dependencies
import { type FunctionComponent } from "react";

// Styles
import { Container, Label } from "./button.styles";

// Types
import type { ButtonProps } from "./button.types";

export const Button: FunctionComponent<ButtonProps> = ({ label, handleClick, variant, isActive, isCommingSoon }) => {
    return (
        <Container {...(!isCommingSoon && { onClick: handleClick })} variant={variant} isActive={isActive} isCommingSoon={isCommingSoon}>
            <Label>{!!isCommingSoon ? "Em breve..." : label}</Label>
        </Container>
    );
};
