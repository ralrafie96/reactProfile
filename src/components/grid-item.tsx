import { Box, LinkBox, Text, Image, LinkOverlay } from '@chakra-ui/react'

interface GridItemProps {
    children: any
    href: string
    title: string
}

const GridItem = ({ children, href, title }: GridItemProps) => {
    return (
        <Box className="grid-item-container">
            <LinkBox className="link-box">
                <Image src={''} alt={title} placeholder="blur" loading="lazy" />
                <LinkOverlay href={href} target="_blank">
                    <Text mt={2}>{title}</Text>
                </LinkOverlay>
                <Text className="text">{children}</Text>
            </LinkBox>
        </Box>
    )
}

// export const WorkGridItem = ({ children, id, title }) => {
//     return (
//         <Box w="100%" align="center">
//             <NextLink href={`/works/${id}`}>
//                 <LinkBox cursor="pointer">
//                     <Image src={''}
//                 </LinkBox>
//             </NextLink>
//         </Box>
//     )
// }

export default GridItem
