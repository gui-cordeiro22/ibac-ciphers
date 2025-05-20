// Dependencies
import type { FunctionComponent } from "react";
// Components
import { Separator } from "../separator";

// Types
import type { ModalContentProps } from "./modal-content.types";

// Styles
import { ActionElementsWrapper, Container } from "./modal-content.styles";

export const ModalContent: FunctionComponent<ModalContentProps> = ({ content, actionElements }) => {
    return (
        <Container>
            {content}

            <Separator color="#CED0DD" />

            <ActionElementsWrapper>{actionElements}</ActionElementsWrapper>
        </Container>
    );
};
