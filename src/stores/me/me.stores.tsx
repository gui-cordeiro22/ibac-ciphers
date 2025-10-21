// Dependencies
import { createContext, useReducer, type PropsWithChildren } from "react";

// Types
import type { MeActions, MeProps, MeState } from "./me.stores.types";

export const MeContext = createContext<MeProps | null>(null);

export const MeReducer = (state: MeState, _action: MeActions): MeState => {
    return state;
};

const initialState: MeState = {
    navbarNavigationLinks: [
        { label: "Home", navigationSource: "/" },
        { label: "Domingo", navigationSource: "/domingo" },
        { label: "Quinta", navigationSource: "/quinta" },
    ],
};

export const MeProvider = ({ children }: PropsWithChildren) => {
    const [state, _dispatch] = useReducer(MeReducer, initialState);

    const value = {
        state,
        action: {
            handleNavigate: () => {
                console.log("Navigating...");
            },
        },
    };

    return <MeContext.Provider value={value}>{children}</MeContext.Provider>;
};
