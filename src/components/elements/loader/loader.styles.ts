// Dependencies
import styled from "styled-components";

export const Loader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fbfbf8;
    width: 100%;
    height: 100dvh;
    gap: 8px;
`;

export const LoaderElement = styled.div`
    animation: is-rotating 0.5s ease-in-out infinite;
    border: 6px solid #e5e5e5;
    border-top-color: #000080;
    border-radius: 50%;
    height: 50px;
    width: 50px;

    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
    }
`;

export const LoaderLabel = styled.small`
    color: #000080;
    font-weight: bold;
`;
