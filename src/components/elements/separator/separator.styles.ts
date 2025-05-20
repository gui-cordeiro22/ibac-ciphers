// Dependencies
import styled, { css } from "styled-components";

type ContainerStyleProps = {
    height: number;
    color: string;
};

export const Container = styled.div<ContainerStyleProps>`
    width: 100%;
    flex-shrink: 0;

    ${({ height }) =>
        !!height &&
        css`
            height: ${height}px;
        `}

    ${({ color }) =>
        !!color &&
        css`
            background-color: ${color};
        `}
`;
