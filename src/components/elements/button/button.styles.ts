// Dependencies
import styled, { css } from "styled-components";

// Types
import type { ButtonVariants } from "./button.types";

type ContainerStyleProps = {
    variant: ButtonVariants;
};

export const Container = styled.button<ContainerStyleProps>`
    background-color: inherit;
    padding: 8px;

    ${({ variant }) =>
        variant === "default" &&
        css`
            color: #000080;
            border: 1px solid #000080;
            width: 200px;
            border-radius: 200px;
            transition: all 0.2s ease-in-out;

            &:hover {
                border-color: transparent;
                background-color: #000080;
                color: #fff;
            }
        `}

    ${({ variant }) =>
        variant === "link" &&
        css`
            color: #000080;
        `}
`;

type LabelStyleProps = {
    isActive: boolean;
};

export const Label = styled.p<LabelStyleProps>`
    font-size: 14px;
    font-weight: bold;

    ${({ isActive }) =>
        !!isActive &&
        css`
            text-decoration: underline;
        `}
`;
