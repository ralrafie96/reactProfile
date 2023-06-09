import {
    Box,
    Container,
    Image,
    Text,
    Heading,
    Button,
    Divider,
    useColorModeValue
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/article'
import './404.css'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <Layout>
            <Container className="not-found-container">
                <Box textAlign="center">
                    <Heading>404 Page Not Found</Heading>
                    <Box className="box-center">
                        <Image className="image" src="knife.png" alt="404" />
                    </Box>
                    <Text marginBottom={2}>
                        The page you were looking for was not found.
                    </Text>
                    <Divider
                        borderColor={useColorModeValue(
                            'gray.800',
                            'whiteAlpha.500'
                        )}
                    />
                    <Box className="box-center">
                        <Button
                            className="home-btn"
                            onClick={() => navigate('/home')}
                            colorScheme="teal"
                        >
                            Return to Home
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Layout>
    )
}

export default NotFound
