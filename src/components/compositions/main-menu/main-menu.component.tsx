// Dependencies
import type { FunctionComponent } from "react";

// Styles
import { ChurchLogo, Container, ContentWrapper, Description, Title } from "./main-menu.styles";

// Types
import type { MainMenuProps } from "./main-menu.types";

export const MainMenu: FunctionComponent<MainMenuProps> = ({ title, description, imageSource, buttonsCompositions }) => {
    return (
        <Container>
            <ContentWrapper>
                <ChurchLogo src={imageSource} />

                <Title>{title}</Title>

                <Description>{description}</Description>

                {buttonsCompositions}
            </ContentWrapper>
        </Container>
    );
};
