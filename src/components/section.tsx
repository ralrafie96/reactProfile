import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

interface SectionProps {
    children: any
    delay: number
}
const Section = ({ children, delay = 0 }: SectionProps) => (
    <StyledDiv
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // transition={{ duration: '0.8' }}
        // transitionDelay={{ duration: delay.toString() }}
        style={{
            transition: `all 0.8s ${delay}s`
            // transitionDelay: `${delay}s`
        }}
        mb={6}
    >
        {children}
    </StyledDiv>
)

export default Section
