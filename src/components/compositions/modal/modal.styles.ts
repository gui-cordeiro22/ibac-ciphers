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
    background-color: red;
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
