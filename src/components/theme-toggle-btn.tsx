import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleBtn = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const faviconUpdate = () => {
        const favicon = document.getElementById("favicon");
        if (favicon instanceof HTMLLinkElement && !!favicon.href) {
            if (colorMode === 'light') {
                favicon.href = 'duck with knife.png'
            } else {
                favicon.href = 'duck with knife dark.png'
            }
        }
    }
    faviconUpdate()

    return (
        <IconButton
            aria-label="Toggle Theme"
            colorScheme={useColorModeValue('purple', 'orange')}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
        ></IconButton>
    )
}

export default ThemeToggleBtn
