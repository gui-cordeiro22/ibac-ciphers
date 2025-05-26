// Dependencies
import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 8px 0px;
    gap: 2px;
`;

export const ButtonSubmit = styled.button`
    background-color: inherit;
    align-self: center;
    transition: all 0.2s ease-in-out;
    color: #000080;
    border: 1px solid #000080;
    padding: 8px;
    border-radius: 200px;

    &:hover {
        border-color: transparent;
        background-color: #000080;
        color: #fff;
    }
`;
