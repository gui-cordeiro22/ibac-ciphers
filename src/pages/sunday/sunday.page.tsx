// Dependencies
import { Fragment, useEffect, useState, type FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Components
import { DefaultLayout } from "../../layouts/default-layout";
import { CiphersList } from "../../components/compositions/ciphers-list";
import { Input } from "../../components/elements/input";
import { LoaderComponent } from "../../components/elements/loader";
import { Button } from "../../components/elements/button";
import { Modal } from "../../components/compositions/modal";
import { RegisterForm } from "../../components/compositions/register-form";

// Schema
import { registerFormSchema } from "../../components/compositions/register-form/register-form.schema";

// Assets
import magnifyingGlassIcon from "../../assets/lupa.png";

// Types
import type { RegisterFormResponseData } from "./sunday.types";

// Stores
import { useCiphersStore } from "./sunday.stores";

export const SundayPage: FunctionComponent = () => {
    const { register, handleSubmit, formState, reset } = useForm<RegisterFormResponseData>({
        resolver: zodResolver(registerFormSchema),
        mode: "onChange",
        defaultValues: {
            name: "",
            tone: "",
        },
    });
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

    const handleCreateCipher = async (data: any) => {
        const hasSended = await createCiphers(data);

        if (hasSended) {
            reset();

            setIsModalOpened(false);

            fetchCiphers();
        }
    };

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
                        handleClose={() => setIsModalOpened(false)}
                        formElementComposition={
                            <RegisterForm
                                handleSubmitForm={handleSubmit(handleCreateCipher)}
                                nameInputLabel="Nome"
                                nameInputComposition={
                                    <Input
                                        {...register("name")}
                                        type="text"
                                        placeholder="Nome da música"
                                        {...(formState.errors.name?.message && {
                                            errorMessage: `${formState.errors.name.message}`,
                                        })}
                                    />
                                }
                                toneInputLabel="Tom"
                                toneInputComposition={
                                    <Input
                                        {...register("tone")}
                                        type="text"
                                        placeholder="Informe o tom da música"
                                        {...(formState.errors.tone?.message && {
                                            errorMessage: `${formState.errors.tone?.message}`,
                                        })}
                                    />
                                }
                            />
                        }
                    />
                </Fragment>
            }
        />
    );
};
