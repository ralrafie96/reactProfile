import { Box, Container, Image, Heading, Button, Divider, useColorModeValue } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import "./404.css"

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <Container className="not-found-container">
            <Box textAlign='center'>
                <Heading>
                    404 Page Not Found
                </Heading>
                <Box className="box-center">
                    <Image className="image" src="knife.png" alt="404" />
                </Box>
                The page you were looking for was not found.
                <Divider borderColor={useColorModeValue('gray.800', 'whiteAlpha.500')}/>
                <Box className="box-center">
                <Button className="home-btn" onClick={() => navigate('/home')} colorScheme="teal">Return to Home</Button>
                </Box>

            </Box>
        </Container>
    )
}

export default NotFound