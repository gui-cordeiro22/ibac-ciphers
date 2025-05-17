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

                setCiphersData(cipherListResponse.data);
            } catch (error) {
                console.error(`Erro ao buscar dados - ${error}`);
            }
        };

        fetchData();
    }, []);

    return (
        <DefaultLayout
            contentPage={
                <Fragment>
                    <Input placeholder="Pesquisar..." icon={magnifyingGlassIcon} handleChange={(e: any) => setFilterValue(e.target.value)} />
                    {!!ciphersData &&
                        ciphersData
                            .filter((cipher) => cipher.name.toLowerCase().includes(filterValue.toLowerCase()))
                            .sort((a, b) => (a.name > b.name ? 1 : -1))
                            .map((cipher) => <CiphersList key={`cipher-list-item-${cipher.id}`} musicName={cipher.name} musicTone={cipher.tone} />)}
                </Fragment>
            }
        />
    );
};
