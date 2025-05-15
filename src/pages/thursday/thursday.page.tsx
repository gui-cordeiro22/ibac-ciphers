// Dependencies
import { Fragment, type FunctionComponent } from "react";

// Component
import { DefaultLayout } from "../../layouts/default-layout";

export const ThursdayPage: FunctionComponent = () => {
    return (
        <DefaultLayout
            contentPage={
                <Fragment>
                    <div>SearchInput</div>
                    <div>CiphersList</div>
                </Fragment>
            }
        />
    );
};
