import { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider, extendTheme, Box } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import '../assets/geral.css'

const App = (props: AppProps) => {
    const { Component, pageProps } = props

    const theme = extendTheme({
        colors: {
            brand: {
                100: '#63B3ED',
                // ...
                900: '#1a202c',
            },
        },
        components: {
            Button: {
                variants: {
                    mauricio: {
                        bg: 'brand.100',
                        boxShadow: 'none',
                    },
                },
            },
        },
    })

    // console.table(theme.colors)

    return (
        <>
            <Head>
                <title>Angry Cars</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>

            <ChakraProvider theme={theme}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} />
                </AnimatePresence>
            </ChakraProvider>
        </>
    )
}

export default App
