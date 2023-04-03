import { Badge, Container, List, ListItem, UnorderedList } from "@chakra-ui/react"
import Layout from "../../components/article"
import Section from "../../components/section"
import Meta from "../../components/works/meta"
import Title from "../../components/works/title"
import WorkImage from "../../components/works/work-image"

const SeniorDesign = () => {
    return (
        <Layout>
            <Container className="co-container">
                <Title>Senior Design <Badge>2017</Badge>
                </Title>
                <WorkImage src="tricycle.jpg" alt="tricycle"></WorkImage>
                <p>
                A system to measure power output of recumbent cyclers
                </p>
                <UnorderedList ml={4} my={4}>
                    <Section>
                        <ListItem>
                            Designed a dynamometer to measure power output of recumbent cyclers using a stepper motor and DAQ System.
                        </ListItem>
                    </Section>
                    <Section delay={0.2}>
                        <ListItem>
                            Created a rheostat using ceramic resistors and switches which were connected to the terminals of a stepper motor to simulate varying levels of difficulty.
                        </ListItem>
                    </Section>
                    <Section delay={0.4}>
                        <ListItem>
                            Maintained a detailed specification sheet and concept description outlining the design of the project.
                        </ListItem>
                    </Section>
                    <Section delay={0.6}>
                        <ListItem>
                            Performed final verification and validation tests of the design by having volunteers measure their own power output while using the device.
                        </ListItem>
                    </Section>
                </UnorderedList>
                <List>
                    <Section delay={1.0}>
                        <ListItem>
                            <Meta>Tools</Meta><span>MATLAB</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Course</Meta><span>BME: Biomedical Engineering Design I & II</span>
                        </ListItem>
                    </Section>
                </List>
            </Container>
        </Layout>
    )
}

export default SeniorDesign