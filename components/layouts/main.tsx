import { Box, Container } from '@chakra-ui/react'
import React from 'react'

import Navbar from '../navbar'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Container>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Rami Al-Rafie - Homepage</title>
            </Container>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main
