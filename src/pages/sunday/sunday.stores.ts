// Dependencies
import { useCallback } from "react";
import { useImmer } from "use-immer";
import axios from "axios";

// Services
import { restAPI } from "../../services/api";

// Types
import type { CiphersState, CiphersActions, CiphersStore } from "./sunday.types";
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

    const fetchCiphers: CiphersActions["fetchCiphers"] = useCallback(async () => {
        try {
            setState((draft: CiphersState) => {
                draft.ciphers.isLoading = true;
            });

            const response = await restAPI.get<any>(`/cifras`);

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
        },
    };
};
