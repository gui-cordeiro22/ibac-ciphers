// Dependencies
import { useEffect, type FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

// Components
import { Home } from "../../components/pages/home";
import { MainMenu } from "../../components/compositions/main-menu";
import { Button } from "../../components/elements/button";

// Assets
import ibacLogo from "../../assets/ibac-logo.png";

// Store
import { useMeStores } from "../../hooks/use-me-stores";
import { mainMenuData } from "../../components/compositions/main-menu/main-menu.stores";

export const HomePage: FunctionComponent = () => {
    const navigate = useNavigate();

    const { state, action } = useMeStores();

    const { handleNavigate } = action;

    console.log("Me State:", state, action);

    useEffect(() => {
        handleNavigate();
    }, []);

    return (
        <Home
            menuCompositions={
                <MainMenu
                    imageSource={ibacLogo}
                    title="Cifras - Equipe de Louvor | IBAC"
                    description="Plataforma idealizada para armazenar as músicas tocadas e seus respectivos tons"
                    buttonsCompositions={mainMenuData.map(
                        (item, index) =>
                            item.label !== "Home" && (
                                <Button
                                    key={`home-button-${index}`}
                                    label={item.label}
                                    handleClick={() => navigate(item.path)}
                                    variant="default"
                                    isActive={false}
                                    isCommingSoon={item.isCommingSoon}
                                />
                            )
                    )}
                />
            }
        />
    );
};
