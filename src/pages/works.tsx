import {
    Box,
    Container,
    Heading,
    Link,
    SimpleGrid,
    useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/article'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'

const Works = () => {
    return (
        <Layout>
            <Container className="page-container">
                <Heading as="h3" mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem
                            id="Cummins_OBD"
                            title="Cummins OBD"
                            thumbnail="cummins2.jpg"
                        >
                            A Cert-Doc Desktop Application developed using
                            Python
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.2}>
                        <WorkGridItem
                            id="Cummins_GDC"
                            title="Cummins GDC"
                            thumbnail="cummins1.jpg"
                        >
                            Front-end development on GDC Projects using React
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.4}>
                        <WorkGridItem
                            id="MCU_Oscilloscope"
                            title="MCU Oscilloscope"
                            thumbnail="msp430.jpg"
                        >
                            A system that acquires a few seconds of a time
                            varying signal
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.6}>
                        <WorkGridItem
                            id="Senior_Design"
                            title="Senior Design Project"
                            thumbnail="tricycle.jpg"
                        >
                            A system to measure power output of recumbent
                            cyclers
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                <Section delay={1.0}>
                    <Box
                        className="title-card"
                        borderRadius="lg"
                        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
                        p={3}
                        mb={6}
                    >
                        You can access the repository for this site <Link href='https://github.com/ralrafie96/reactProfile'>here.</Link>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Works
