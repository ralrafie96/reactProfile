import { Box, Container, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'

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
            <Heading as="h3" mb={4}>Works</Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id='Cummins-OBD' title="Cummins OBD" thumbnail='cummins2.jpg'>
                        A Cert-Doc Desktop Application developed using Python
                    </WorkGridItem>
                </Section>
                <Section delay={0.2}>
                    <WorkGridItem id='Cummins-GDC' title="Cummins GDC" thumbnail='cummins1.jpg'>
                        Cummins GDC
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works
