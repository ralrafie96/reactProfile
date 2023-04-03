import { ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Heading, Link } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const Title = ({ children }: any) => {
    const navigate = useNavigate()
    return (
        <Box>
            <Link onClick={() => navigate('/works')}>Works</Link>
            <span>
                &nbsp;
                <ChevronRightIcon />
                &nbsp;
            </span>
            <Heading display='inline-block' as="h3" fontSize={20} mb={4}>
                {children}
            </Heading>
        </Box>
    )
}

export default Title