import React  from 'react';
import 'typeface-roboto'
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import SimpleAppBar from "./components/AppBar";
import AsteroidList from "./components/AsteroidList";

const theme = createMuiTheme({
    palette: {
        primary: { light: '#9a67ea', main: '#673AB7', dark: '#320b86', contrastText: '#fff' },
        secondary: { light: '#52c7b8', main: '#009688', dark: '#00675b', contrastText: '#000' },
        type: 'dark',
        background: { paper: '#333', default: "#212121" }
    }
});

function App() {
    return (
        <div style={{ paddingTop: 56 }}>
            <MuiThemeProvider theme={theme}>
                <SimpleAppBar style={{ position: 'fixed', top: 0 }} />
                <AsteroidList/>
            </MuiThemeProvider>
        </div>
    );
}

export default App;
