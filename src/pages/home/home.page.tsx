// Dependencies
import { useContext, type FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

// Components
import { Home } from "../../components/pages/home";
import { MainMenu } from "../../components/compositions/main-menu";
import { Button } from "../../components/elements/button";

// Assets
import ibacLogo from "../../assets/ibac-logo.png";

// Store
import { MeContext } from "../../stores/me/me.stores";
import { mainMenuData } from "../../components/compositions/main-menu/main-menu.stores";

export const HomePage: FunctionComponent = () => {
    const navigate = useNavigate();

    const { state, action } = useContext(MeContext);

    console.log("State:", state, action);

    return (
        <Home
            menuCompositions={
                <MainMenu
                    imageSource={ibacLogo}
                    title="Cifras - Equipe de Louvor | IBAC"
                    description="Plataforma idealizada para armazenar as músicas tocadas e seus respectivos tons"
                    buttonsCompositions={mainMenuData
                        .filter((item) => item.label !== "Home")
                        .map((item, index) => (
                            <Button
                                key={`home-button-${index}`}
                                label={item.label}
                                handleClick={() => navigate(item.path)}
                                variant="default"
                                isActive={false}
                                isCommingSoon={item.isCommingSoon}
                            />
                        ))}
                />
            }
        />
    );
};
