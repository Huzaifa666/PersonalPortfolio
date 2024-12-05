import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {DEFAULT_THEME, MantineProvider} from "@mantine/core";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <MantineProvider theme={DEFAULT_THEME}>
        <App />
      </MantineProvider>
  </StrictMode>,
)
