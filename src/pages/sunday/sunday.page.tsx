// Dependencies
import { Fragment, useEffect, useState, type FunctionComponent } from "react";

// Components
import { DefaultLayout } from "../../layouts/default-layout";
import { CiphersList } from "../../components/compositions/ciphers-list";
import { Input } from "../../components/elements/input";

// Types
import type { CiphersData } from "./sunday.types";

// Assets
import magnifyingGlassIcon from "../../assets/lupa.png";

// Store
import { ciphers } from "../../stores/ciphers.stores";

// Services
import { restAPI } from "../../services/api";

export const SundayPage: FunctionComponent = () => {
    const [filterValue, setFilterValue] = useState("");

    const [ciphersData, setCiphersData] = useState<CiphersData>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cipherListResponse = await restAPI.get(`/cifras`);

                if (cipherListResponse.status !== 200) {
                    throw new Error("Erro na requisição");
                }

                setCiphersData(cipherListResponse.data.data);
            } catch (error) {
                console.error(`Erro ao buscar dados - ${error}`);
            }
        };

        fetchData();
    });

    console.log(ciphersData);

    return (
        <DefaultLayout
            contentPage={
                <Fragment>
                    <Input placeholder="Pesquisar..." icon={magnifyingGlassIcon} handleChange={(e: any) => setFilterValue(e.target.value)} />
                    {ciphers
                        .filter((cipher) => cipher.musicName.toLowerCase().includes(filterValue.toLowerCase()))
                        .sort((a, b) => (a.musicName > b.musicName ? 1 : -1))
                        .map((cipher, index) => (
                            <CiphersList key={`cipher-list-item-${index}`} musicName={cipher.musicName} musicTone={cipher.tone} />
                        ))}
                </Fragment>
            }
        />
    );
};
