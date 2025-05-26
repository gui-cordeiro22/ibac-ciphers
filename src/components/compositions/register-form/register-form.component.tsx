// Dependencies
import type { FunctionComponent } from "react";

// Styles
import { ButtonSubmit, Container, InputWrapper } from "./register-form.styles";

// Types
import type { RegisterFormProps } from "./register-form.types";

export const RegisterForm: FunctionComponent<RegisterFormProps> = ({
    nameInputLabel,
    nameInputComposition,
    toneInputLabel,
    toneInputComposition,
    handleSubmit,
}) => {
    return (
        <Container onSubmit={handleSubmit}>
            <InputWrapper>
                {nameInputLabel}
                {nameInputComposition}
            </InputWrapper>

            <InputWrapper>
                {toneInputLabel}
                {toneInputComposition}
            </InputWrapper>

            <ButtonSubmit type="submit">+ Adicionar cifra</ButtonSubmit>
        </Container>
    );
};
