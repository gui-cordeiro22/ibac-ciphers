// Dependencies
import type { FunctionComponent } from "react";

// Styles
import { Container } from "./register-form.styles";

// Types
import type { RegisterFormProps } from "./register-form.types";

export const RegisterForm: FunctionComponent<RegisterFormProps> = ({ nameInputComposition, toneInputComposition, handleSubmit }) => {
    return (
        <Container onSubmit={handleSubmit}>
            {nameInputComposition}

            {toneInputComposition}

            <button type="submit">+ Adicionar cifra</button>
        </Container>
    );
};
