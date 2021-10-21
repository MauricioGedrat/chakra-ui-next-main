import React, { useState, useEffect } from 'react'
import {
    Text,
    Box,
    Flex,
    useColorModeValue,
    HStack,
    Stack,
} from '@chakra-ui/react'
import Image from 'next/image'
import Carro1 from '../../assets/img/Ferrari.jpg'
import Carro2 from '../../assets/img/Audi.jpg'
import Carro3 from '../../assets/img/gtr.jpg'
import Carro4 from '../../assets/img/Lambo-veneno.jpg'
import Carro5 from '../../assets/img/porshe.jpg'

export default function Carousel() {
    const arrowStyles = {
        cursor: 'pointer',
        pos: 'absolute',
        top: '50%',
        w: 'auto',
        mt: '-22px',
        p: '16px',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '18px',
        transition: '0.6s ease',
        borderRadius: '0 3px 3px 0',
        userSelect: 'none',
        _hover: {
            opacity: 0.8,
            bg: 'black',
        },
    }

    const slides = [
        {
            img: Carro1,
            label: 'Ferrari',
            description:
                'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        },
        {
            img: Carro2,
            label: 'Audi',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            img: Carro3,
            label: 'Gtr',
            description:
                'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
        },
        {
            img: Carro4,
            label: 'Lamborghini',
            description:
                'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        },
        {
            img: Carro5,
            label: 'Porshe',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ]

    const [currentSlide, setCurrentSlide] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const slidesCount = slides.length

    const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1))
    }
    const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1))
    }
    const setSlide = (slide) => {
        setCurrentSlide(slide)
    }
    const carouselStyle = {
        transition: 'all .5s',
        ml: `-${currentSlide * 100}%`,
    }

    return (
        <div
            style={{
                justifyContent: 'center',
                display: 'flex',
                marginBottom: '30px',
            }}
        >
            <Flex
                marginTop="10"
                w="50%"
                bg={useColorModeValue('gray.200', 'gray.600')}
                alignItems="center"
                justifyContent="center"
            >
                <Flex
                    w="full"
                    pos="relative"
                    overflow="hidden"
                    onDragEnd={nextSlide}
                    cursor="grab"
                >
                    <Flex w="full" {...carouselStyle}>
                        {slides.map((slide, sid) => (
                            <Box
                                key={`slide-${sid}`}
                                boxSize="full"
                                shadow="md"
                                flex="none"
                            >
                                <Image
                                    src={slide.img}
                                    layout="responsive"
                                    height="60%"
                                    width="100%"
                                />
                            </Box>
                        ))}
                    </Flex>
                    <Text {...arrowStyles} left="0" onClick={prevSlide}>
                        &#10094;
                    </Text>
                    <Text {...arrowStyles} right="0" onClick={nextSlide}>
                        &#10095;
                    </Text>
                    <HStack
                        justify="center"
                        pos="absolute"
                        bottom="8px"
                        w="full"
                    >
                        {Array.from({ length: slidesCount }).map((_, slide) => (
                            <Box
                                key={`dots-${slide}`}
                                cursor="pointer"
                                boxSize={['7px', , '15px']}
                                m="0 2px"
                                bg={
                                    currentSlide === slide
                                        ? 'blackAlpha.800'
                                        : 'blackAlpha.500'
                                }
                                rounded="50%"
                                display="inline-block"
                                transition="background-color 0.6s ease"
                                _hover={{ bg: 'blackAlpha.800' }}
                                onClick={() => setSlide(slide)}
                            ></Box>
                        ))}
                    </HStack>
                </Flex>
            </Flex>
        </div>
    )
}
