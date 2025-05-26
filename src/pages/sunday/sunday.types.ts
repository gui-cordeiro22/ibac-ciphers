export type CiphersCiphersData = {
    _id?: number;
    name: string;
    tone: string;
}[];

export type RegisterFormResponseData = {
    _id?: number;
    name: string;
    tone: string;
};

export type CiphersData<T> = {
    data?: T;
    isLoading: boolean;
};

export type CiphersState = {
    ciphers: CiphersData<CiphersCiphersData[]>;
};

export type CiphersActions = {
    clearState: () => void;
    fetchCiphers: (data?: CiphersCiphersData[]) => Promise<boolean>;
    createCiphers: (data: CiphersCiphersData) => Promise<boolean>;
};

export type CiphersStore = {
    state: CiphersState;
    actions: CiphersActions;
};
