import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {MantineProvider} from "@mantine/core";
import {mainTheme} from "./theme/theme.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider defaultColorScheme="dark" theme={mainTheme}>
            <App/>
        </MantineProvider>
    </StrictMode>,
)
