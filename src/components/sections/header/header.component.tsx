// Dependencies
import type { FunctionComponent } from "react";

// Styles
import { BrandLogo, Container, ContentWrapper, NavLinkCompositionsWrapper } from "./header.styles";

// Types
import type { HeaderProps } from "./header.types";

export const Header: FunctionComponent<HeaderProps> = ({ imageSource, navLinkCompositions }) => {
    return (
        <Container>
            <ContentWrapper>
                <a href="/">
                    <BrandLogo src={imageSource} />
                </a>

                <NavLinkCompositionsWrapper>{navLinkCompositions}</NavLinkCompositionsWrapper>
            </ContentWrapper>
        </Container>
    );
};
