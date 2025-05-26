// Dependencies
import type { FunctionComponent } from "react";

// Components
import { ConditionallyRender } from "../../../utils/conditionally-render";

//Styles
import { Container, ContentWrapper, IconElement, InputElement, InputElementWrapper } from "./input.styles";

// Types
import type { InputProps } from "./input.types";

export const Input: FunctionComponent<InputProps> = ({ placeholder, icon, buttonElement, handleChange, ...defaultProps }) => {
    return (
        <Container>
            <ContentWrapper>
                <InputElementWrapper>
                    <InputElement type="text" placeholder={placeholder} onChange={handleChange} {...defaultProps} />

                    <IconElement src={icon} />
                </InputElementWrapper>

                <ConditionallyRender shouldRender={!!buttonElement} content={buttonElement} />
            </ContentWrapper>
        </Container>
    );
};
