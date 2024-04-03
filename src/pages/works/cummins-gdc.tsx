import { Badge, Container, List, ListItem, UnorderedList } from "@chakra-ui/react"
import Layout from "../../components/article"
import Section from "../../components/section"
import Meta from "../../components/works/meta"
import Title from "../../components/works/title"
import WorkImage from "../../components/works/work-image"

const CumminsGDC = () => {
    return (
        <Layout>
            <Container className="co-container">
                <Title>Cummins GDC <Badge>2018</Badge>
                </Title>
                <WorkImage src="cummins1.jpg" alt="cummins1"></WorkImage>
                <p>
                    Front-end development on GDC Projects using React
                </p>
                <UnorderedList ml={4} my={4}>
                    <Section>
                        <ListItem>
                            Worked with multiple clients to develop responsive user interfaces by utilizing knowledge of React and TypeScript.
                        </ListItem>
                    </Section>
                    <Section delay={0.2}>
                        <ListItem>
                            Integrated GraphQL queries and mutations that interacted with an Amazon RDS PostgreSQL database.
                        </ListItem>
                    </Section>
                    <Section delay={0.4}>
                        <ListItem>
                            Maintained code for each client in Git repositories and utilized GitLab and Jira to keep track of implemented and incoming features.
                        </ListItem>
                    </Section>
                    <Section delay={0.6}>
                        <ListItem>
                            Conducted thorough code reviews to identify potential areas for improvement, ultimately enhancing code quality across all projects handled by the team.
                        </ListItem>
                    </Section>
                </UnorderedList>
                <List>
                    <Section delay={1.0}>
                        <ListItem>
                            <Meta>Stack</Meta><span>React / Node.js / Serverless / Amazon RDS</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Tools</Meta><span>AWS (CloudFormation, Serverless, Code Commit, API Gateway, EC2, S3)</span>
                        </ListItem>
                    </Section>
                </List>
            </Container>
        </Layout>
    )
}

export default CumminsGDC