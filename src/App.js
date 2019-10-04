import React, { useContext } from 'react';
import './App.css';
import 'typeface-roboto'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeContext } from "./components/contexts/ThemeContext";
import SimpleAppBar from "./components/AppBar";
import AsteroidList from "./components/AsteroidList";

function App() {
    const { theme } = useContext(ThemeContext);

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
