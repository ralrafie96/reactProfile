import { Badge, Container, List, ListItem, UnorderedList } from "@chakra-ui/react"
import Layout from "../../components/article"
import Section from "../../components/section"
import Meta from "../../components/works/meta"
import Title from "../../components/works/title"
import WorkImage from "../../components/works/work-image"
import './cummins-obd.css'

const CumminsOBD = () => {
    return (
        <Layout>
            <Container className="co-container">
                <Title>Cummins OBD <Badge>2020</Badge>
                </Title>
                <WorkImage src="cummins2.jpg" alt="cummins2"></WorkImage>
                <p>
                    A Cert-Doc Desktop Application developed using Python
                </p>
                <UnorderedList ml={4} my={4}>
                    <Section>
                        <ListItem>
                            Worked with product managers to build a desktop application that would streamline documentation and workflow management.
                        </ListItem>
                    </Section>
                    <Section delay={0.2}>
                        <ListItem>
                            Utilized knowledge of Python to consume APIs, conduct business logic, and develop a robust user interface.
                        </ListItem>
                    </Section>
                    <Section delay={0.4}>
                        <ListItem>
                            Identified bottlenecks in existing codebase and utilized multiprocessing to refactor for improved performance and maintainability.
                        </ListItem>
                    </Section>
                    <Section delay={0.6}>
                        <ListItem>
                            Improved testing efficiency with the development of automated test scripts using Jenkins and PyTest.
                        </ListItem>
                    </Section>
                </UnorderedList>
                <List>
                    <Section delay={1.0}>
                        <ListItem>
                            <Meta>Platform</Meta><span>Windows/Linux</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Technology</Meta><span>Python</span>
                        </ListItem>
                    </Section>
                </List>
            </Container>
        </Layout>
    )
}

export default CumminsOBD