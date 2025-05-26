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
    justify-content: center;
    align-items: center;
    background-color: rgb(218, 218, 218);
    border: 1px solid #000080;
    box-shadow: 12px 5px 38px 0px #000;
    border-radius: 8px;
    height: 300px;
    width: 300px;
    padding: 8px;

    @media (min-width: 768px) {
        padding: 8px 32px;
        width: 400px;
    }
`;

export const CloseButton = styled.small`
    cursor: pointer;
    align-self: flex-end;
`;

export const Title = styled.h3`
    font-weight: bold;
    text-align: center;
    width: 100%;
`;

export const FormCompositionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
