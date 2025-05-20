// Dependencies
import { Fragment, useEffect, useState, type FunctionComponent } from "react";

// Components
import { DefaultLayout } from "../../layouts/default-layout";
import { CiphersList } from "../../components/compositions/ciphers-list";
import { Input } from "../../components/elements/input";
import { LoaderComponent } from "../../components/elements/loader";
import { Button } from "../../components/elements/button";

// Assets
import magnifyingGlassIcon from "../../assets/lupa.png";

// Stores
import { useCiphersStore } from "./sunday.stores";

export const SundayPage: FunctionComponent = () => {
    const [filterValue, setFilterValue] = useState("");

    const { actions, state } = useCiphersStore();

    const { ciphers } = state;

    const { fetchCiphers, clearState } = actions;

    useEffect(() => {
        return clearState;
    }, [clearState]);

    useEffect(() => {
        fetchCiphers();
    }, []);

    if (!ciphers?.data) {
        return <LoaderComponent />;
    }

    return (
        <DefaultLayout
            contentPage={
                <Fragment>
                    <Input
                        placeholder="Pesquisar..."
                        icon={magnifyingGlassIcon}
                        handleChange={(e: any) => setFilterValue(e.target.value)}
                        buttonElement={
                            <Button
                                label="+ Adicionar cifra"
                                variant="link"
                                isActive={false}
                                isCommingSoon={false}
                                handleClick={() => console.log("Adicionar cifra")}
                            />
                        }
                    />
                    {!!ciphers?.data &&
                        (ciphers?.data ?? [])
                            .filter((cipher: any) => cipher.name.toLowerCase().includes(filterValue.toLowerCase()))
                            .sort((a: any, b: any) => (a.name > b.name ? 1 : -1))
                            .map((cipher: any) => (
                                <CiphersList key={`cipher-list-item-${cipher._id}`} musicName={cipher.name} musicTone={cipher.tone} />
                            ))}
                </Fragment>
            }
        />
    );
};
