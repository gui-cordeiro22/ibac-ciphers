// Dependencies
import { Fragment, type FunctionComponent } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Components
import { Header } from "../../components/sections/header";
import { Button } from "../../components/elements/button";

// Types
import type { DefaultLayoutProps } from "./default.layout.types";

// Assets
import ibacLogo from "../../assets/ibac-logo.png";

// Store
import { mainMenuData } from "../../stores/main-menu.stores";

export const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({ contentPage }) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Fragment>
            <Header
                imageSource={ibacLogo}
                navLinkCompositions={mainMenuData.map((item, index) => (
                    <Button
                        key={`sunday-button-${index}`}
                        label={item.label}
                        variant="link"
                        isActive={location.pathname === item.path}
                        isCommingSoon={item.isCommingSoon}
                        handleClick={() => navigate(location.pathname === item.path ? "#" : item.path)}
                    />
                ))}
            />
            {contentPage}
        </Fragment>
    );
};
