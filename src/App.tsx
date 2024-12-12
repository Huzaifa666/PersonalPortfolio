import {AppShell, AppShellMain, Box, Button} from "@mantine/core";
import classes from "./css/root.module.css";
import '@mantine/core/styles.css';
import {useViewportSize} from "@mantine/hooks";

function App() {
    const {height, width} = useViewportSize();
    return (
        <AppShell>
            <AppShellMain>
                <Box className={classes.box}
                     style={{
                         height,
                         width
                     }}>
                    <div className={classes.boxSpan}>
                        <span>Hello, I'm <span className={classes.spanH}>Huzaifa</span>.</span>
                        <span>I'm a full stack web developer.</span>
                    </div>
                    <Button visibleFrom="md" size="lg" variant="light">More about me</Button>
                    <Button hiddenFrom="md" size="sm" variant="light">More about me</Button>
                </Box>
            </AppShellMain>
        </AppShell>
    )
}

export default App
