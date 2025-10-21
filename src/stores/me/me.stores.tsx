// Dependencies
import { createContext, useReducer, type PropsWithChildren } from "react";

// Types
import type { MeActions, MeStores, MeState } from "./me.stores.types";

export const MeContext = createContext<MeStores>({} as MeStores);

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
