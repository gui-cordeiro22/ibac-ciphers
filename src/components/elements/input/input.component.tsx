import type { FunctionComponent } from "react";
import type { InputProps } from "./input.types";
import { Container, ContentWrapper, IconElement, InputElement, InputElementWrapper } from "./input.styles";

export const Input: FunctionComponent<InputProps> = ({ placeholder, icon, handleChange }) => {
    return (
        <Container>
            <ContentWrapper>
                <InputElementWrapper>
                    <InputElement type="text" placeholder={placeholder} onChange={handleChange} />

                    <IconElement src={icon} />
                </InputElementWrapper>
            </ContentWrapper>
        </Container>
    );
};
