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

export const ContentPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px;
    width: 100%;
    max-width: 1440px;

    @media (min-width: 768px) {
        padding: 8px 32px;
    }
`;
