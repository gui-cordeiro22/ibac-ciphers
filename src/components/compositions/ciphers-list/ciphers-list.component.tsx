// Dependencies
import type { FunctionComponent } from "react";

// Styles
import { CipherData, CipherListWrapperContainer, CiphersWrapper, Container, ContentWrapper } from "./ciphers-list.styles";

// Types
import type { CipherListProps, CipherListWrapperProps } from "./ciphers-list.types";

export const CiphersList: FunctionComponent<CipherListProps> = ({ musicName, musicTone }) => {
    return (
        <Container>
            <ContentWrapper>
                <CiphersWrapper>
                    <CipherData>
                        ፠ {musicName} | Tom: {musicTone}
                    </CipherData>
                </CiphersWrapper>
            </ContentWrapper>
        </Container>
    );
};

export const CipherListWrapper: FunctionComponent<CipherListWrapperProps> = ({ ciphersListComposition }) => {
    return <CipherListWrapperContainer>{ciphersListComposition}</CipherListWrapperContainer>;
};
