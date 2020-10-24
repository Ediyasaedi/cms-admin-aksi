import React from "react"
import ReactDOM from "react-dom"
import App from "./App.jsx"
import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core"

import theme from "./themes/chakra-ui"

function Root() {
    return (
        <ThemeProvider theme={theme}>
            <ColorModeProvider value="dark">
                <CSSReset />
                <App />
            </ColorModeProvider>
        </ThemeProvider>
    )
}

ReactDOM.render(<Root />, document.getElementById("root"))
