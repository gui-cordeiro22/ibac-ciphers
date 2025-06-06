// Dependencies
import type { FunctionComponent } from "react";

//Styles
import { Container, ContentWrapper, IconElement, InputElement, InputElementWrapper } from "./input.styles";

// Types
import type { InputProps } from "./input.types";

export const Input: FunctionComponent<InputProps> = ({ placeholder, icon, handleChange, ...defaultProps }) => {
    return (
        <Container>
            <ContentWrapper>
                <InputElementWrapper>
                    <InputElement type="text" placeholder={placeholder} onChange={handleChange} {...defaultProps} />

                    <IconElement src={icon} />
                </InputElementWrapper>
            </ContentWrapper>
        </Container>
    );
};
