import { Badge } from "@chakra-ui/react"

const Meta = ({ children }: any) => {
    return (
        <Badge colorScheme="teal" mr={2}>
            {children}
        </Badge>
    )
}

export default Meta