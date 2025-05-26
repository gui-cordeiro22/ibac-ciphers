// Dependencies
import type { FunctionComponent } from "react";

// Styles
import { CipherData, CiphersWrapper, Container, ContentWrapper } from "./ciphers-list.styles";

// Types
import type { CipherListProps } from "./ciphers-list.types";

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
