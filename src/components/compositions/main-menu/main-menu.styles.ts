// Dependencies
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100dvh;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px;
    gap: 20px;
    border: 1px solid #000080;
    border-radius: 8px;
`;

export const Title = styled.h1`
    font-size: 42px;
`;

export const Description = styled.h4`
    font-size: 18px;
`;

export const ChurchLogo = styled.img`
    align-self: flex-start;
`;
