import {
    Box,
    Container,
    Divider,
    Heading,
    useColorModeValue
} from '@chakra-ui/react'
import ScrollContainer from 'react-indiana-drag-scroll'
import Layout from '../components/article'
import PhotoCard from '../components/photo-card'
import Section from '../components/section'
import './gallery.css'

interface GalleryItemProps {
    src: string
    delay: number
}

const GalleryItem = ({ src, delay }: GalleryItemProps) => {
    let width = 10
    let height = (10 * 7) / 5
    return (
        <Section delay={delay}>
            <PhotoCard
                className="gallery-item"
                src={src}
                height={height}
                width={width}
            />
        </Section>
    )
}

interface GalleryRowProps {
    imgLst: string[]
}
const GalleryRow = ({ imgLst }: GalleryRowProps) => {
    const rows: JSX.Element[] = []
    let delayLst: number[] = []
    for (let i = 0; i < 1; i += 1 / (imgLst.length - 1)) {
        delayLst.push(i)
    }
    for (let i = 0; i <= imgLst.length - 1; i++) {
        let src = imgLst[imgLst.length - i - 1]
        let delayIndex: number = Math.floor(Math.random() * imgLst.length)
        let delay: number = delayLst[delayIndex]
        delayLst.splice(delayIndex, 1)
        rows.push(
            <Box className="gi-container" key={src}>
                <GalleryItem src={src} delay={delay} />
            </Box>
        )
    }

    return <Box className="row-container">{rows}</Box>
}

const Gallery = () => {
    const imgLst1 = [
        'gallery0.jpg',
        'gallery1.jpg',
        'gallery2.jpg',
        'gallery3.jpg',
        'gallery4.jpg',
        'gallery5.jpg',
        'gallery6.jpg',
        'gallery7.jpg',
        'gallery8.jpg'
    ]
    const imgLst2 = [
        'gallery9.jpg',
        'gallery10.jpg',
        'gallery11.jpg',
        'gallery12.jpg',
        'gallery13.jpg',
        'gallery14.jpg',
        'gallery15.jpg',
        'gallery16.jpg',
        'gallery17.jpg'
    ]
    return (
        <Layout>
            <Container className="gallery-container">
                <Box
                    className="title-card"
                    borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
                    p={3}
                    mb={6}
                >
                    Hello, the Gallery Page will go here!
                </Box>
                <Heading variant="section-title">Portraits</Heading>
                <ScrollContainer className="gr-container">
                    <GalleryRow imgLst={imgLst1} />
                </ScrollContainer>
                <Divider
                    borderColor={useColorModeValue(
                        'gray.800',
                        'whiteAlpha.500'
                    )}
                />
                <Heading variant="section-title">Europe</Heading>
                <ScrollContainer className="gr-container">
                    <GalleryRow imgLst={imgLst2} />
                </ScrollContainer>
            </Container>
        </Layout>
    )
}

export default Gallery
