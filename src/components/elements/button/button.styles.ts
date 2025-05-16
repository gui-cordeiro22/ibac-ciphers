// Dependencies
import styled, { css } from "styled-components";

// Types
import type { ButtonVariants } from "./button.types";

type ContainerStyleProps = {
    variant: ButtonVariants;
    isActive: boolean;
    isCommingSoon: boolean;
};

export const Container = styled.button<ContainerStyleProps>`
    background-color: inherit;
    padding: 8px;

    ${({ variant, isCommingSoon }) =>
        variant === "default" &&
        !isCommingSoon &&
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

    ${({ variant, isCommingSoon }) =>
        variant === "default" &&
        !!isCommingSoon &&
        css`
            border-color: transparent;
            cursor: not-allowed;
            background-color: #ced0dd;
            color: #4d4d63;
            width: 200px;
            border-radius: 200px;
        `}

    ${({ variant, isCommingSoon }) =>
        variant === "link" &&
        !isCommingSoon &&
        css`
            color: #000080;
        `}

    ${({ variant, isCommingSoon }) =>
        variant === "link" &&
        !!isCommingSoon &&
        css`
            cursor: not-allowed;
            color: #4d4d63;
            background-color: #ced0dd;
            border-radius: 8px;
        `}

    ${({ isActive }) =>
        !!isActive &&
        css`
            border-color: transparent;
            border-radius: 8px;
            background-color: #000080;
            color: #fff;
        `}
`;

export const Label = styled.p`
    font-size: 14px;
    font-weight: bold;
`;
