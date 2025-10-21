// Dependencies
import { useContext } from "react";

// Stores
import { MeContext } from "../stores/me/me.stores";

export const useMeStores = () => {
    const context = useContext(MeContext);
    if (!context) {
        throw new Error("Contexto não encontrado...");
    }
    return context;
};
