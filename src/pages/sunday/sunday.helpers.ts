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
