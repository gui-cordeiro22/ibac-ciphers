// Dependencies
import type { FunctionComponent } from "react";

// Styles
import { Container, ContentWrapper, CopyrightLabel } from "./footer.styles";

// Types
import type { FooterProps } from "./footer.types";

export const Footer: FunctionComponent<FooterProps> = ({ copyrightLabel }) => {
    return (
        <Container>
            <ContentWrapper>
                <CopyrightLabel>{copyrightLabel}</CopyrightLabel>
            </ContentWrapper>
        </Container>
    );
};
