// Dependencies
import { Fragment, useEffect, useState, type FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

// Components
import { DefaultLayout } from "../../layouts/default-layout";
import { CipherListWrapper, CiphersList } from "../../components/compositions/ciphers-list";
import { Input } from "../../components/elements/input";
import { LoaderComponent } from "../../components/elements/loader";
import { Button } from "../../components/elements/button";
import { Modal } from "../../components/compositions/modal";
import { RegisterForm } from "../../components/compositions/register-form";
import { ActionElements } from "../../components/sections/action-elements";

// Schema
import { registerFormSchema } from "../../components/compositions/register-form/register-form.schema";

// Assets
import magnifyingGlassIcon from "../../assets/lupa.png";

// Types
import type { RegisterFormResponseData } from "./sunday.types";

// Stores
import { useCiphersStore } from "./sunday.stores";

// Utils
import { buildLayoutColumns, cipherAlreadyExists, formatCounterMessage } from "./sunday.helpers";
import { useWindowDimensions } from "../../hooks/window-dimensions";
import { ternary } from "../../utils/ternary";

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

    const [isLoading, setIsLoading] = useState(false);

    const [isModalOpened, setIsModalOpened] = useState(false);

    const width = useWindowDimensions().width;

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
        const alreadyExists = cipherAlreadyExists(ciphers, data);

        if (alreadyExists) {
            reset();
            setIsModalOpened(false);
            toast.error("Já existe uma cifra cadastrada com esses dados.");
            return;
        }

        setIsLoading(true);

        const hasSended = await createCiphers(data);

        if (hasSended) {
            reset();

            setIsLoading(false);

            setIsModalOpened(false);

            fetchCiphers();

            toast.success("Cifra criada com sucesso!");
        }
    };

    const ciphersListLength =
        !!ciphersResponse && (ciphersResponse ?? []).filter((cipher: any) => cipher.name.toLowerCase().includes(filterValue.toLowerCase())).length;

    const cipherCounterMessage = formatCounterMessage(ciphersListLength);

    const sortedCiphers =
        !!ciphersResponse &&
        (ciphersResponse ?? [])
            .filter((cipher: any) => cipher.name.toLowerCase().includes(filterValue.toLowerCase()))
            .sort((a: any, b: any) => (a.name > b.name ? 1 : -1));

    const columnsNumber = ternary([
        [width > 1024, 4],
        [width >= 768, 3],
        [width < 768, 1],
    ]);

    const columns = buildLayoutColumns(sortedCiphers, columnsNumber ?? 1);

    return (
        <DefaultLayout
            contentPage={
                <Fragment>
                    <ActionElements
                        inputCompositions={
                            <Input placeholder="Pesquisar..." icon={magnifyingGlassIcon} handleChange={(e: any) => setFilterValue(e.target.value)} />
                        }
                        buttonCompositions={
                            <Button
                                label="+ Adicionar cifra"
                                variant="link"
                                isActive={false}
                                isCommingSoon={false}
                                handleClick={() => setIsModalOpened(!isModalOpened)}
                            />
                        }
                        ciphersCounter={cipherCounterMessage}
                    />

                    <CipherListWrapper
                        ciphersListComposition={columns.map((column, index) => (
                            <div key={index}>
                                {column.map((cipher: any) => (
                                    <CiphersList key={`cipher-list-item-${cipher._id}`} musicName={cipher.name} musicTone={cipher.tone} />
                                ))}
                            </div>
                        ))}
                    />

                    <Modal
                        title="Adicionar nova cifra"
                        isOpened={isModalOpened}
                        handleClose={() => setIsModalOpened(false)}
                        formElementComposition={
                            <RegisterForm
                                isLoading={isLoading}
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
