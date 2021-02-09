import React from "react"
import ReactDOM from "react-dom"
import App from "./App.jsx"
import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core"
import { Provider } from "react-redux"
import store from "./store/index"

import theme from "./themes/chakra-ui"

function Root() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <ColorModeProvider value="light">
                    <CSSReset />
                    <App />
                </ColorModeProvider>
            </ThemeProvider>
        </Provider>
    )
}

ReactDOM.render(<Root />, document.getElementById("root"))
