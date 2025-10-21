export type navigationLinks = {
    label: string;
    navigationSource: string;
}[];

export type MeState = {
    navbarNavigationLinks: navigationLinks;
};

export type MeActions = {
    handleNavigate: () => void;
};

export type MeStores = {
    state: MeState;
    action: MeActions;
};
