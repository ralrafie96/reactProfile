import { Box, Image } from "@chakra-ui/react"

interface PhotoCardProps {
    className?: string,
    src: string,
    width?: number
    height?: number
}

const PhotoCard = ({ className, src, width = 5, height = 7 }: PhotoCardProps) => {
    return (
        <Box className={className} style={{ width: `${width}rem`, height: `${height}rem` }}>
            <Image src={src} className="card" alt={src} style={{ width: `${width}rem`, height: `${height}rem` }} />
        </Box>
    )
}

export default PhotoCard