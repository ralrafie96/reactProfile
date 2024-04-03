import { Badge, Container, Link, List, ListItem, UnorderedList } from "@chakra-ui/react"
import { Link as ReactRouterLink } from 'react-router-dom'
import Layout from "../../components/article"
import Section from "../../components/section"
import Meta from "../../components/works/meta"
import Title from "../../components/works/title"
import WorkImage from "../../components/works/work-image"

const Chatter = () => {
    return (
        <Layout>
            <Container className="co-container">
                <Title>Chatter <Badge>2024</Badge>
                </Title>
                <WorkImage src="mernProject.png" alt="Chatter"></WorkImage>
                <p>
                    A web app for chatting with other developers
                </p>
                <UnorderedList ml={4} my={4}>
                    <Section>
                        <ListItem>
                            Developed a MERN Stack project that allows communication between developers of different levels
                        </ListItem>
                    </Section>
                    <Section delay={0.2}>
                        <ListItem>
                            Integrated an interactive user interface utilizing the Chakra UI library with a Node.js server hosted on an EC2 instance
                        </ListItem>
                    </Section>
                    <Section delay={0.4}>
                        <ListItem>
                            Authentication managed by providing a JSON web token to users upon logging in or registering
                        </ListItem>
                    </Section>
                    <Section delay={0.6}>
                        <ListItem>
                            Created models of document objects used across the application by utilizing Mongoose
                        </ListItem>
                    </Section>
                    <Section delay={0.8}>
                        <ListItem>
                            Backend currently uses self-signed certificate, please accept certificate <Link as={ReactRouterLink} to={'https://ec2-3-21-104-103.us-east-2.compute.amazonaws.com:5000/api/auth'}>here</Link> before continuing
                        </ListItem>
                    </Section>
                </UnorderedList>
                <List>
                    <Section delay={1.2}>
                        <ListItem>
                            <Meta>Link</Meta><span>Access site: <Link as={ReactRouterLink} to={'https://main.d31nq03u6sd2o9.amplifyapp.com/login'}>here</Link></span>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack</Meta><span>MongoDB / Express / React / Node.js</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Services</Meta><span>AWS Amplify / Amazon EC2</span>
                        </ListItem>
                    </Section>
                </List>
            </Container>
        </Layout>
    )
}

export default Chatter