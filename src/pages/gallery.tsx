import {
    Box,
    Container,
    Divider,
    Heading,
    Link,
    useColorModeValue,
    Text
} from '@chakra-ui/react'
import ScrollContainer from 'react-indiana-drag-scroll'
import Layout from '../components/article'
import PhotoCard from '../components/photo-card'
import Section from '../components/section'
import './gallery.css'

interface GalleryItemProps {
    src: string
    delay: number
    width: number
    height: number
}

const GalleryItem = ({ src, delay, width, height }: GalleryItemProps) => {
    // let width = 10
    // let height = (10 * 7) / 5
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
    imgDict: { [key: string]: string; }
}
const GalleryRow = ({ imgDict }: GalleryRowProps) => {
    const rows: JSX.Element[] = []
    let delayLst: number[] = []
    for (let i = 0; i < 1; i += 1 / (Object.keys(imgDict).length - 1)) {
        delayLst.push(i)
    }
    for (let src in imgDict) {
        // let src = imgDict[Object.keys(imgDict).length - i - 1]
        let delayIndex: number = Math.floor(Math.random() * Object.keys(imgDict).length)
        let delay: number = delayLst[delayIndex]
        delayLst.splice(delayIndex, 1)
        let width = 10
        let height = 14
        if (imgDict[src] == 'landscape') {
            width = 19.6
        }
        rows.push(
            <Box className="gi-container" key={src}>
                <GalleryItem src={src} delay={delay} width={width} height={height} />
            </Box>
        )
    }

    return <Box className="row-container">{rows}</Box>
}

const Gallery = () => {
    const imgDict1 = {
        'Portraits/gallery0.jpg': 'portrait',
        'Portraits/gallery1.jpg': 'portrait',
        'Portraits/gallery2.jpg': 'portrait',
        'Portraits/gallery3.jpg': 'portrait',
        'Portraits/gallery4.jpg': 'portrait',
        'Portraits/gallery5.jpg': 'portrait',
        'Portraits/gallery6.jpg': 'portrait',
        'Portraits/gallery7.jpg': 'portrait',
        'Portraits/gallery8.jpg': 'portrait',
        'Portraits/gallery9.jpg': 'portrait'
    }
    const imgDict2 = {
        'Europe/gallery10.jpg': 'landscape',
        'Europe/gallery11.jpg': 'portrait',
        'Europe/gallery12.jpg': 'portrait',
        'Europe/gallery13.jpg': 'landscape',
        'Europe/gallery14.jpg': 'portrait',
        'Europe/gallery15.jpg': 'portrait',
        'Europe/gallery16.jpg': 'portrait',
        'Europe/gallery17.jpg': 'landscape',
        'Europe/gallery18.jpg': 'portrait',
        'Europe/gallery19.jpg': 'portrait',
        'Europe/gallery20.jpg': 'portrait',
        'Europe/gallery21.jpg': 'portrait',
    }
    const imgDict3 = {
        'Doha/doha1.jpg': 'portrait',
        'Doha/doha2.jpg': 'portrait',
        'Doha/doha3.jpg': 'landscape',
        'Doha/doha4.jpg': 'landscape',
        'Doha/doha5.jpg': 'portrait',
        'Doha/doha6.jpg': 'portrait',
        'Doha/doha7.jpg': 'portrait',
        'Doha/doha8.jpg': 'portrait',
        'Doha/doha9.jpg': 'portrait',
        'Doha/doha10.jpg': 'portrait',
        'Doha/doha11.jpg': 'portrait'
    }
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
                    A glimpse of the memories and people in my life!
                </Box>
                <Heading variant="section-title">Portraits</Heading>
                <ScrollContainer className="gr-container">
                    <GalleryRow imgDict={imgDict1} />
                </ScrollContainer>
                <Divider
                    borderColor={useColorModeValue(
                        'gray.800',
                        'whiteAlpha.500'
                    )}
                />
                <Heading variant="section-title">Europe</Heading>
                <Text>Images courtesy of <Link href='https://www.facebook.com/00arifhussain'>Arif Hussain</Link></Text>
                <ScrollContainer className="gr-container">
                    <GalleryRow imgDict={imgDict2} />
                </ScrollContainer>
                <Divider
                    borderColor={useColorModeValue(
                        'gray.800',
                        'whiteAlpha.500'
                    )}
                />
                <Heading variant="section-title">Doha</Heading>
                <Text>Images courtesy of <Link href='https://www.shotsbysamir.com/'>Samir Al-Rafie</Link></Text>
                <ScrollContainer className="gr-container">
                    <GalleryRow imgDict={imgDict3} />
                </ScrollContainer>
            </Container>
        </Layout>
    )
}

export default Gallery
