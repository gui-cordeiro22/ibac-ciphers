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
    flex-direction: row;
    align-items: center;
    width: 100%;
    max-width: 1440px;
    padding: 8px;

    @media (min-width: 768px) {
        padding: 8px 32px;
    }
`;

export const InputElementWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    gap: 8px;
    border-radius: 8px;
    padding: 12px;
    width: 100%;

    @media (min-width: 768px) {
        width: 280px;
    }
`;

export const InputElement = styled.input`
    background-color: transparent;
    width: 100%;
`;

export const IconElement = styled.img`
    width: 18px;
`;
