// Dependencies
import type { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

// Components
import { Home } from "../../components/pages/home";
import { MainMenu } from "../../components/compositions/main-menu";
import { Button } from "../../components/elements/button";

// Assets
import ibacLogo from "../../assets/ibac-logo.png";

// Store
import { mainMenuData } from "../../stores/main-menu.stores";

export const HomePage: FunctionComponent = () => {
    const navigate = useNavigate();

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
                                />
                            )
                    )}
                />
            }
        />
    );
};
