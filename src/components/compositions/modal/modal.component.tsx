// Dependencies
import { type FunctionComponent } from "react";

// Styles
import { Container, ContentWrapper, FormCompositionWrapper, Title } from "./modal.styles";

// Components
import { ConditionallyRender } from "../../../utils/conditionally-render";

// Types
import type { ModalProps } from "./modal.types";

export const Modal: FunctionComponent<ModalProps> = ({ title, description, isOpened, formElementComposition }) => {
    return (
        <ConditionallyRender
            shouldRender={!!isOpened}
            content={
                <Container>
                    <ContentWrapper>
                        <Title>{title}</Title>

                        <ConditionallyRender shouldRender={!!description} content={description} />

                        <FormCompositionWrapper>{formElementComposition}</FormCompositionWrapper>
                    </ContentWrapper>
                </Container>
            }
        />
    );
};
