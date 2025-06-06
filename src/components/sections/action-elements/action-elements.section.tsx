// Dependencies
import type { FunctionComponent } from "react";

// Styles
import { CiphersCounter, Container, ContentWrapper, InputsWrapper } from "./action-elements.styles";

// Types
import type { ActionElementsProps } from "./action-elements.types";

export const ActionElements: FunctionComponent<ActionElementsProps> = ({ inputCompositions, buttonCompositions, ciphersCounter }) => {
    return (
        <Container>
            <ContentWrapper>
                <InputsWrapper>
                    {inputCompositions}

                    {buttonCompositions}
                </InputsWrapper>

                <CiphersCounter>{ciphersCounter}</CiphersCounter>
            </ContentWrapper>
        </Container>
    );
};
