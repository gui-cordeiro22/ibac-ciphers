// Dependencies
import { Fragment, useState, type FunctionComponent } from "react";

// Components
import { DefaultLayout } from "../../layouts/default-layout";
import { CiphersList } from "../../components/compositions/ciphers-list";
import { Input } from "../../components/elements/input";

// Assets
import magnifyingGlassIcon from "../../assets/lupa.png";

// Store
import { ciphers } from "../../stores/ciphers.stores";

export const SundayPage: FunctionComponent = () => {
    const [filterValue, setFilterValue] = useState("");

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
