import { Container, Badge, UnorderedList, ListItem, List } from "@chakra-ui/react"
import Layout from "../../components/article"
import Section from "../../components/section"
import Meta from "../../components/works/meta"
import Title from "../../components/works/title"
import WorkImage from "../../components/works/work-image"

const MCUOscilloscope = () => {
    return (
        <Layout>
            <Container className="co-container">
                <Title>MCU Oscilloscope <Badge>2020</Badge>
                </Title>
                <WorkImage src="msp430.jpg" alt="msp430"></WorkImage>
                <p>
                A system that acquires a few seconds of a time varying signal
                </p>
                <UnorderedList ml={4} my={4}>
                    <Section>
                        <ListItem>
                            Developed a system to adequately acquire 10 – 15 seconds of a time varying signal ranging between 0 – 3.3V using Matlab via an MSP-EXP430f5529.
                        </ListItem>
                    </Section>
                    <Section delay={0.2}>
                        <ListItem>
                            Program samples and digitizes a single channel analog signal at 1.25 kHz at 12-bits resolution.
                        </ListItem>
                    </Section>
                    <Section delay={0.4}>
                        <ListItem>
                        The system then transmits the digitized signal via the MCU&apos;s UART to enable capture and reconstruction of the signal within Matlab.
                        </ListItem>
                    </Section>
                    <Section delay={0.6}>
                        <ListItem>
                            Utilizes the MCU&apos;s Low Power Mode to put the device to sleep when not sampling, increasing the efficiency of the device.
                        </ListItem>
                    </Section>
                </UnorderedList>
                <List>
                    <Section delay={1.0}>
                        <ListItem>
                            <Meta>Tools</Meta><span>Code Composer Studio / Energia</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Language</Meta><span>MATLAB / C++</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Course</Meta><span>BME: Embedded Bioinstrumentation</span>
                        </ListItem>
                    </Section>
                </List>
            </Container>
        </Layout>
    )
}

export default MCUOscilloscope