// Dependencies
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";

// Styles
import { GlobalStyle } from "./styles/global";

// Routes
import { ApplicationRoutes } from "./routes";
import { MeProvider } from "./stores/me/me.stores";

function App() {
    return (
        <Fragment>
            <GlobalStyle />
            <ToastContainer theme="light" position="bottom-right" limit={1} />
            <MeProvider>
                <ApplicationRoutes />
            </MeProvider>
        </Fragment>
    );
}

export default App;
