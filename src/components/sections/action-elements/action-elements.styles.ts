// Dependencies
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    max-width: 1440px;
    gap: 8px;
`;

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

export const CiphersCounter = styled.p`
    font-weight: bold;
    font-size: 12px;
    color: #000080;

    @media (min-width: 768px) {
        font-size: 14px;
    }
`;
