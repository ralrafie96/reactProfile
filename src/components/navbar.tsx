// import Logo from './logo'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'
import { Link as ReactRouterLink, useLocation } from 'react-router-dom'
import './navbar.css'
import Logo from './logo'
import ThemeToggleBtn from './theme-toggle-btn'

interface LinkItemProps {
    p?: number
    href: string
    path: string
    children: any
}

const LinkItem = ({ p = 2, href, path, children }: LinkItemProps) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
        <Link
            as={ReactRouterLink}
            to={href}
            p={p}
            bg={active ? 'glassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}
        >
            {children}
        </Link>
    )
}

const NavBar = () => {
    const location = useLocation()
    return (
        <Box
            className="navbar"
            as="nav"
            style={{
                backgroundColor: useColorModeValue(
                    'rgba(255, 255, 255, 0.25)',
                    'rgba(32, 32, 35, 0.5)'
                )
            }}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                className="container"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItem href="/works" path={location.pathname}>
                        Works
                    </LinkItem>
                    {/* <LinkItem href="/gallery" path={location.pathname}>
                        Gallery
                    </LinkItem> */}
                    <LinkItem href="/contact" path={location.pathname}>
                        Contact
                    </LinkItem>
                </Stack>
                <Box className="menu-btn" flex={1}>
                    <ThemeToggleBtn />
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} ></MenuButton>
                            <MenuList>
                                <LinkItem p={0} href='/home' path={location.pathname}>
                                    <MenuItem bg={location.pathname === '/home' ? 'glassTeal' : undefined}>Home</MenuItem>
                                </LinkItem>
                                <LinkItem p={0} href='/works' path={location.pathname}>
                                    <MenuItem bg={location.pathname === '/works' ? 'glassTeal' : undefined}>Works</MenuItem>
                                </LinkItem>
                                {/* <LinkItem p={0} href='/gallery' path={location.pathname}>
                                    <MenuItem bg={location.pathname === '/gallery' ? 'glassTeal' : undefined}>Gallery</MenuItem>
                                </LinkItem> */}
                                <LinkItem p={0} href='/contact' path={location.pathname}>
                                    <MenuItem bg={location.pathname === '/contact' ? 'glassTeal' : undefined}>Contact</MenuItem>
                                </LinkItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default NavBar
