import { Box, Image } from '@chakra-ui/react'
import './photo-group.css'

interface PhotoGroupProps {
    imgList: string[]
}

const PhotoGroup = ({ imgList }: PhotoGroupProps) => {
    return (
        <Box className="card-container">
            <Image src={imgList[0]} className="card card-xs" alt="img1"></Image>
            <Image src={imgList[1]} className="card card-xl" alt="img2"></Image>
            <Image src={imgList[2]} className="card card-xs" alt="img3"></Image>
            <Image src={imgList[3]} className="card card-xl" alt="img4"></Image>
            <Image src={imgList[4]} className="card card-xs" alt="img5"></Image>
            <Image src={imgList[5]} className="card card-xl" alt="img6"></Image>
            <Image src={imgList[6]} className="card card-xs" alt="img7"></Image>
            <Image src={imgList[7]} className="card card-xl" alt="img8"></Image>
        </Box>
    )
}

export default PhotoGroup
