// Types
import type { AxiosResponse } from "axios";
import type { CiphersCiphersData } from "./sunday.types";

export const ciphersBuilder = (ciphersResponse: AxiosResponse<any>): CiphersCiphersData[] => {
    return ciphersResponse.data.map((item: any) => {
        const { _id, name, tone } = item;

        return {
            _id,
            name: name,
            tone: tone,
        };
    });
};

export const formatCounterMessage = (ciphersLength: number) => {
    return ciphersLength > 0 ? `Mostrando: ${ciphersLength} cifras encontradas` : "Nenhuma resultado encontrado";
};
