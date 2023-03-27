import { Box, Container, Image, Heading, Button, Divider } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import "./404.css"

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <Container className="not-found-container">
            <Box>
                <Heading textAlign='center'>
                    404 Page Not Found
                </Heading>
                <Box className="box-center">
                    <Image className="image" src="knife.png" alt="404" />
                </Box>
                <Divider />
                <Box className="box-center">
                <Button className="home-btn" onClick={() => navigate('/home')} bg="teal">Return to Home</Button>
                </Box>

            </Box>
        </Container>
    )
}

export default NotFound