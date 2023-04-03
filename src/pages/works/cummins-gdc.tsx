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
                            Worked with multiple clients to develop the front end of their applications by utilizing knowledge of React and TypeScript.
                        </ListItem>
                    </Section>
                    <Section delay={0.2}>
                        <ListItem>
                            Handled GraphQL Queries and Mutations to connect an RDS Serverless data source to ReactJS Front-End application.
                        </ListItem>
                    </Section>
                    <Section delay={0.4}>
                        <ListItem>
                            Maintained code for each project in separate repositories using Git and used tools such as GitLab and Jira to keep track of all features.
                        </ListItem>
                    </Section>
                    <Section delay={0.6}>
                        <ListItem>
                            Communicated daily amongst a team and held ceremonies in a Scrum and Agile format.
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