// Dependencies
import { type FunctionComponent } from "react";

// Types
import type { ModalProps } from "./modal.types";
import { ConditionallyRender } from "../../../utils/conditionally-render";
import { Container, ContentWrapper, FormCompositionWrapper, Title } from "./modal.styles";

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
