// Dependencies
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: transparent;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 1440px;
    padding: 8px;

    @media (min-width: 768px) {
        padding: 8px 32px;
    }
`;

export const CiphersWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 8px;
    gap: 8px;
`;

export const CipherData = styled.p`
    font-size: 18px;
    white-space: nowrap;
`;

export const Separator = styled.div`
    content: " ";
    border-left: 1px solid #000;
`;
