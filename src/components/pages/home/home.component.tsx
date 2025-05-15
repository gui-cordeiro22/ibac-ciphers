// Dependencies
import { Fragment, type FunctionComponent } from "react";

// Types
import type { HomeProps } from "./home.types";

export const Home: FunctionComponent<HomeProps> = ({ menuCompositions }) => {
    return <Fragment>{menuCompositions}</Fragment>;
};
