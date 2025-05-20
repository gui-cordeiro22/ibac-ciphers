// Dependencies
import type { FunctionComponent } from "react";

// Styles
import { Container } from "./separator.styles";

// Types
import type { SeparatorProps } from "./separator.types";

export const Separator: FunctionComponent<SeparatorProps> = ({ height = 1, color }) => {
    return <Container color={color} height={height} />;
};
