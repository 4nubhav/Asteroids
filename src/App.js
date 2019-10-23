import React  from 'react';
import 'typeface-roboto'
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AsteroidList from "./components/AsteroidList";
import AsteroidOne from "./components/particles/AsteroidOne";
import AsteroidTwo from "./components/particles/AsteroidTwo";
import Stars from "./components/particles/Stars";

const theme = createMuiTheme({
    palette: {
        primary: { light: '#62717b', main: '#37464f', dark: '#101f27', contrastText: '#fff' },
        secondary: { light: '#52c7b8', main: '#009688', dark: '#00675b', contrastText: '#000' },
        type: 'dark',
        background: { paper: '#151515', default: "#000000" }
    }
});

function App() {
    return (
        <div>
            <MuiThemeProvider theme={theme}>
                <Stars/>
                <AsteroidOne/>
                <AsteroidTwo/>
                <AsteroidList/>
            </MuiThemeProvider>
        </div>
    );
}

export default App;
