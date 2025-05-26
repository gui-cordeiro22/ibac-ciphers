import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    height: 100dvh;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(218, 218, 218);
    border: 1px solid #000080;
    border-radius: 8px;
    width: 400px;
    padding: 8px;

    @media (min-width: 768px) {
        padding: 8px 32px;
    }
`;

export const Title = styled.h3`
    font-weight: bold;
`;

export const FormCompositionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
