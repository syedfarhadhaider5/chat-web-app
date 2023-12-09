import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Container, CssBaseline, ThemeProvider, useTheme} from "@mui/material";
import Head from "next/head";
import lightMuiTheme from "@/LightMuiTheme";
import darkMuiTheme from "@/DarkMuiTheme";
import {useEffect, useState} from "react";
import "../styles/LeftSidebar.css";

export default function App({ Component, pageProps }: AppProps) {
    const theme = useTheme();
    const [toggleValue, setToggleValue] = useState(false);
    useEffect(() => {
        setToggleValue(JSON.parse(localStorage.getItem('toggleTheme')))
    }, []);
    return (
        <ThemeProvider theme={toggleValue ? darkMuiTheme : lightMuiTheme}>
            <CssBaseline />
            <Head>
                <title>Rentro</title>
            </Head>
                <Component {...pageProps} />
        </ThemeProvider>
    )
}
