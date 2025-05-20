// Dependencies
import type { FunctionComponent } from "react";

// Styles
import { Loader, LoaderElement, LoaderLabel } from "./loader.styles";

export const LoaderComponent: FunctionComponent = () => {
    return (
        <Loader>
            <LoaderElement />

            <LoaderLabel>Preparando lista de cifras</LoaderLabel>

            <LoaderLabel>Isso pode levar alguns minutos...</LoaderLabel>
        </Loader>
    );
};
