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
    justify-content: space-between;
    width: 100%;
    max-width: 1440px;
    padding: 8px;

    @media (min-width: 768px) {
        padding: 8px 32px;
    }
`;

export const BrandLogo = styled.img`
    width: 110px;

    @media (min-width: 768px) {
        width: 126px;
    }
`;

export const NavLinkCompositionsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;
