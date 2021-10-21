import { AppProps } from 'next/app'
import { useEffect } from 'react'
import Head from 'next/head'
import { ChakraProvider, extendTheme, Box } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import '../assets/geral.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }) {
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
    useEffect(() => {
        // here you can add your aos options
        AOS.init({
            offset: 100,
        })
    }, [])

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

export default MyApp
