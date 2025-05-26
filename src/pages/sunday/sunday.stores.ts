// Dependencies
import { useCallback } from "react";
import { useImmer } from "use-immer";
import axios from "axios";

// Services
import { restAPI } from "../../services/api";

// Types
import type { CiphersState, CiphersActions, CiphersStore, CiphersCiphersData } from "./sunday.types";

// Helpers
import { ciphersBuilder } from "./sunday.helpers";

const defaultState = {
    ciphers: {
        data: undefined,
        isLoading: true,
    },
};

export const useCiphersStore = (): CiphersStore => {
    const [state, setState] = useImmer<CiphersState>(defaultState);

    const clearState: CiphersActions["clearState"] = useCallback(() => {
        setState(defaultState);
    }, [setState]);

    const createCiphers: CiphersActions["createCiphers"] = useCallback(async (cipher: CiphersCiphersData) => {
        try {
            setState((draft: CiphersState) => {
                draft.ciphers = {
                    ...draft.ciphers,
                    isLoading: true,
                };
            });

            await restAPI.post("/cifras/criar", cipher);

            setState((draft: CiphersState) => {
                draft.ciphers = {
                    ...draft.ciphers,
                    isLoading: false,
                };
            });

            console.log("Cifra criada com sucesso!");

            return true;
        } catch (error) {
            console.error(error);

            setState((draft: CiphersState) => {
                draft.ciphers = {
                    ...draft.ciphers,
                    isLoading: false,
                };
            });

            return false;
        }
    }, []);

    const fetchCiphers: CiphersActions["fetchCiphers"] = useCallback(async () => {
        try {
            setState((draft: CiphersState) => {
                draft.ciphers.isLoading = true;
            });

            const response = await restAPI.get(`/cifras`);

            const formattedCiphers = ciphersBuilder(response);

            setState((draft: CiphersState) => {
                draft.ciphers.data = formattedCiphers;
            });

            return true;
        } catch (error) {
            if (axios.isCancel(error)) {
                return false;
            }

            setState((draft: CiphersState) => {
                draft.ciphers.isLoading = false;
            });
            return false;
        }
    }, [setState]);
    return {
        state,
        actions: {
            clearState,
            fetchCiphers,
            createCiphers,
        },
    };
};
