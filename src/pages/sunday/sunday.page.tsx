// Dependencies
import { Fragment, useEffect, useState, type FunctionComponent } from "react";

// Components
import { DefaultLayout } from "../../layouts/default-layout";
import { CiphersList } from "../../components/compositions/ciphers-list";
import { Input } from "../../components/elements/input";
import { LoaderComponent } from "../../components/elements/loader";
import { Button } from "../../components/elements/button";
import { Modal } from "../../components/compositions/modal";
import { RegisterForm } from "../../components/compositions/register-form";

// Assets
import magnifyingGlassIcon from "../../assets/lupa.png";

// Stores
import { useCiphersStore } from "./sunday.stores";

export const SundayPage: FunctionComponent = () => {
    const [filterValue, setFilterValue] = useState("");

    const [isModalOpened, setIsModalOpened] = useState(false);

    const { actions, state } = useCiphersStore();

    const { ciphers } = state;

    const { fetchCiphers, createCiphers, clearState } = actions;

    useEffect(() => {
        return clearState;
    }, [clearState]);

    useEffect(() => {
        fetchCiphers();
    }, []);

    if (!ciphers?.data) {
        return <LoaderComponent />;
    }

    const ciphersResponse = ciphers?.data;

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
                                handleClick={() => setIsModalOpened(!isModalOpened)}
                            />
                        }
                    />
                    {!!ciphersResponse &&
                        (ciphersResponse ?? [])
                            .filter((cipher: any) => cipher.name.toLowerCase().includes(filterValue.toLowerCase()))
                            .sort((a: any, b: any) => (a.name > b.name ? 1 : -1))
                            .map((cipher: any) => (
                                <CiphersList key={`cipher-list-item-${cipher._id}`} musicName={cipher.name} musicTone={cipher.tone} />
                            ))}

                    <Modal
                        title="Adicionar nova cifra"
                        isOpened={isModalOpened}
                        formElementComposition={
                            <RegisterForm
                                handleSubmit={() => console.log("Submit do form")}
                                nameInputComposition={<Input placeholder="Nome da música" />}
                                toneInputComposition={<Input placeholder="Informe o tom da música" />}
                            />
                        }
                    />
                </Fragment>
            }
        />
    );
};
