import { useColorMode } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const ToggleTheme = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box p="5" cursor="pointer" onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Box>
    )
}
