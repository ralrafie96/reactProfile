import React from 'react'
import {
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Button
} from '@chakra-ui/react'
import './pages.css'
import Section from '../components/section'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import PhotoGroup from '../components/photo-group'
const Page = () => {
    const navigate = useNavigate()
    const imgList = [
        'gallery1.jpg',
        'gallery2.jpg',
        'gallery3.jpg',
        'gallery4.jpg',
        'gallery5.jpg',
        'gallery6.jpg',
        'gallery7.jpg',
        'gallery8.jpg'
    ]
    return (
        <Container className="page-container">
            <Box
                className="title-card"
                borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
                p={3}
                mb={6}
            >
                Hello, I&apos;m a full-stack developer from Indiana
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Rami Al-Rafie
                    </Heading>
                    <p>Digital Idiot ( Developer / Designer )</p>
                </Box>
                <Box
                    className="img"
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                >
                    <Image
                        borderColor={useColorModeValue(
                            'gray.800',
                            'whiteAlpha.800'
                        )}
                        borderWidth={2}
                        borderStyle="solid"
                        width="100px"
                        height="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="profile_photo.jpg"
                        alt="profile"
                    />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <p className="paragraph">
                    Highly motivated professional based in Indianapolis with
                    intent to build experience in Software Engineering and Full
                    Stack Development. Enjoys exploring and applying different
                    designs to projects, and utilizing code in problem solving.
                    Strong work ethic, productive, and willing to learn.
                </p>
                <Box className="portfolio-btn" my={4}>
                    <Button
                        onClick={() => navigate('/works')}
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="teal"
                    >
                        My Portfolio
                    </Button>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <div className="bio-section">
                    <p className="bio-year">1996</p>Born in Indianapolis,
                    Indiana
                </div>
                <div className="bio-section">
                    <p className="bio-year">2018</p>Graduated from Indiana
                    University Purdue University Indianapolis with a
                    Bachelor&apos;s in Biomedical Engineering
                </div>
                <div className="bio-section">
                    <p className="bio-year">2018</p>Began journey to become a
                    Full-Stack Developer by joining with Infosys
                </div>
                <div className="bio-section">
                    <p className="bio-year">2019</p>Contracted to Cummins to
                    develop React and Angular web applications, and PyQt5
                    desktop applications
                </div>
                <div className="bio-section">
                    <p className="bio-year">Today</p>Continuing to upskill in
                    different technologies, and improve on UX/UI design
                </div>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Pleasures
                </Heading>
                <p className="like-section">
                    Art, Music, Volleyball, Video Games, Web Design
                </p>
            </Section>
            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                    Gallery
                </Heading>
                <Box onClick={() => navigate('/gallery')}>
                    <PhotoGroup imgList={imgList} />
                </Box>
            </Section>
        </Container>
    )
}

export default Page
