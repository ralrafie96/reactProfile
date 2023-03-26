import React from 'react'
import { Container, Box, Heading } from '@chakra-ui/react'
const Page = () => {
    console.log('in here')
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6}>
                Hello, I&apos;m a full-stack developer from Indiana
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Rami Al-Rafie
                    </Heading>
                    <p>Digital Craftsman ( Developer / Designer )</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page
