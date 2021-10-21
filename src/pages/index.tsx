import * as React from 'react'
import {
    Box,
    useColorMode,
    useColorModeValue,
    Text,
    Flex,
    Collapse,
} from '@chakra-ui/react'
import {
    SectionAnimated,
    SectionAnimated2,
} from 'common/components/sectionanimated'
import { ToggleTheme } from 'common/components/ToggleTheme'
import { Header } from './../components/header/index'
import Carousel from 'components/carousel'
import HeroSection from 'components/herosection/HeroSection'
import Stats from 'components/statistics/Stats'
import Newslleter from 'components/newslleter/Newslleter'
import AppCollapse from 'common/components/Collapse'
import AppFooter from './../common/components/footer/Footer'

export default function App() {
    const { toggleColorMode } = useColorMode()

    const bg = useColorModeValue('red.500', 'red.200')
    const color = useColorModeValue('white', 'gray.800')
    return (
        <Box>
            <Header />
            <div
                className="CarouselAndHero"
                style={{
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Carousel />
                <HeroSection />
            </div>
            <Stats />
            <Newslleter />
            <AppCollapse />
            <AppFooter />
        </Box>
    )
}
