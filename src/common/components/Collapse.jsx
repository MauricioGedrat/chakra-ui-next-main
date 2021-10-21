import React from 'react'
import {
    Accordion,
    AccordionButton,
    AccordionPanel,
    Box,
    AccordionIcon,
    AccordionItem,
    Flex,
    Text,
} from '@chakra-ui/react'

const AppCollapse = () => {
    return (
        <Box justifyContent="center" marginBottom="10" data-aos="zoom-in">
            <Text
                textAlign={'center'}
                fontSize={'4xl'}
                py={10}
                fontWeight={'bold'}
            >
                Perguntas frequentes
            </Text>
            <Flex justifyContent="center">
                <Accordion defaultIndex={[0]} allowMultiple w="container.xl">
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    Qual é o carro mais veloz que vocês tem?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontWeight={'bold'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    Qual é o carro mais ecônomico?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontWeight={'bold'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    Qual é o maior carro?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontWeight={'bold'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    Qual a marca que a empresa mais vende?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontWeight={'bold'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    Qual é o carro mais caro?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontWeight={'bold'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Flex>
        </Box>
    )
}

export default AppCollapse
