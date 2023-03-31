import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

interface SectionProps {
    style?: any
    children: any
    delay: number
}
const Section = ({ style, children, delay = 0 }: SectionProps) => {
    return (
    <StyledDiv className='styled-div'
        style={style}
        animate={{ y: [10, 0], opacity: [0, 1] }}
        transition={{
            duration: '0.8',
            delay: `${delay}`
          }}
        mb={6}
    >
        {children}
    </StyledDiv>
)}

export default Section
