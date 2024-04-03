import { Badge, Container, List, ListItem, UnorderedList } from "@chakra-ui/react"
import Layout from "../../components/article"
import Section from "../../components/section"
import Meta from "../../components/works/meta"
import Title from "../../components/works/title"
import WorkImage from "../../components/works/work-image"

const CumminsPcrs = () => {
    return (
        <Layout>
            <Container className="co-container">
                <Title>Cummins PCRS <Badge>2023</Badge>
                </Title>
                <WorkImage src="cummins3.jpg" alt="Cummins3"></WorkImage>
                <p>
                    A tool that queries volume and payment data to create reports
                </p>
                <UnorderedList ml={4} my={4}>
                    <Section>
                        <ListItem>
                            Worked with product managers to re-architect a reporting solution tool into a single-page application.
                        </ListItem>
                    </Section>
                    <Section delay={0.2}>
                        <ListItem>
                            Enhanced user experience by developing and implementing a responsive front-end interface using Angular and Ionic component libraries.
                        </ListItem>
                    </Section>
                    <Section delay={0.4}>
                        <ListItem>
                            Managed data within a PostgreSQL database, and developed an ETL script in Python to seamlessly migrate the client data over from Oracle.
                        </ListItem>
                    </Section>
                    <Section delay={0.6}>
                        <ListItem>
                            Developed and integrated APIs utilizing Amazon Lambda, and migrated business logic over to batch jobs run in Amazon SQS.
                        </ListItem>
                    </Section>
                </UnorderedList>
                <List>
                    <Section delay={1.0}>
                        <ListItem>
                            <Meta>Stack</Meta><span>Angular / Python / PostgreSQL</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Tools</Meta><span>AWS (CloudFormation, Serverless, Lambda, SQS, S3)</span>
                        </ListItem>
                    </Section>
                </List>
            </Container>
        </Layout>
    )
}

export default CumminsPcrs