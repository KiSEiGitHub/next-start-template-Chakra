import Head from 'next/head';
import {ChakraProvider} from "@chakra-ui/react";
import theme from "../Theme/Theme";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Doccument</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    )
}

export default MyApp
