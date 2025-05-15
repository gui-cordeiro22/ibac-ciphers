// Dependencies
import type { FunctionComponent } from "react";

// Styles
import { CipherData, CiphersWrapper, Container, ContentWrapper, Separator } from "./ciphers-list.styles";

// Types
import type { CipherListProps } from "./ciphers-list.types";

export const CiphersList: FunctionComponent<CipherListProps> = ({ musicName, musicTone }) => {
    return (
        <Container>
            <ContentWrapper>
                <CiphersWrapper>
                    <CipherData>፠ {musicName}</CipherData>

                    <Separator />

                    <CipherData>Tom: {musicTone}</CipherData>
                </CiphersWrapper>
            </ContentWrapper>
        </Container>
    );
};
