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
`;

export const CiphersWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 10px 0;
`;

export const CipherData = styled.p`
    font-size: 18px;
`;

export const CipherListWrapperContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 32px;

    > div {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;
