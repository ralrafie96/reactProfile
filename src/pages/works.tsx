import { Box, Container, useColorModeValue } from '@chakra-ui/react'

const Works = () => {
    return (
        <Container className="page-container">
            <Box
                className="title-card"
                borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
                p={3}
                mb={6}
            >
                Hello, the Works Page will go here!
            </Box>
        </Container>
    )
}

export default Works
