import {
    Box,
    Container,
    FormControl,
    FormLabel,
    // FormErrorMessage,
    FormHelperText,
    useColorModeValue,
    Input,
    Button
} from '@chakra-ui/react'
import { useState } from 'react'
import './contact.css'

const Contact = () => {
    const [fn, setFn] = useState('')
    const [ln, setLn] = useState('')
    const [email, setEmail] = useState('')
    const [fnMsg, setFnMsg] = useState('')
    const [lnMsg, setLnMsg] = useState('')
    const [emailMsg, setEmailMsg] = useState('')
    const emailValidation = new RegExp('^.+@.+..+')

    const validateFn = () => {
        if (fn.match(emailValidation) == null) {
            setFnMsg('Please enter a valid email.')
        }
    }

    const validateLn = () => {
        if (ln.match(emailValidation) == null) {
            setLnMsg('Please enter a valid email.')
        }
    }

    const validateEmail = () => {
        if (email.match(emailValidation) == null) {
            setEmailMsg('Please enter a valid email.')
        }
    }

    const validateFields = (e: any) => {
        console.log(e.target)
        if (e) {
            setFn('test')
            setLn('test')
            setEmail('test')
        }
        e.preventDefault()
    }
    return (
        <Container className="page-container">
            <Box
                className="title-card"
                borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
                p={3}
                mb={6}
            >
                Don&apos;t be shy, give it a try!
            </Box>
            <form onSubmit={validateFields}>
                <FormControl>
                    <Box
                        className="full-name"
                        whiteSpace={{ base: undefined, md: 'nowrap' }}
                    >
                        <Box
                            className="name"
                            paddingRight={{ base: '0rem', md: '1rem' }}
                            width={{ base: '100%', md: '50%' }}
                        >
                            <FormLabel>First Name</FormLabel>
                            <Input
                                onChange={e => {
                                    setFn(e.currentTarget.value)
                                }}
                                onBlur={() => {
                                    console.log('blurred')
                                    validateFn()
                                }}
                                className="name"
                                type="first-name"
                            />
                            <FormHelperText>{fnMsg}</FormHelperText>
                        </Box>
                        <Box
                            className="name"
                            paddingLeft={{ base: '0rem', md: '1rem' }}
                            width={{ base: '100%', md: '50%' }}
                        >
                            <FormLabel>Last Name</FormLabel>
                            <Input
                                onChange={e => {
                                    setLn(e.currentTarget.value)
                                }}
                                onBlur={() => {
                                    console.log('blurred')
                                    validateLn()
                                }}
                                className="name"
                                type="last-name"
                            />
                            <FormHelperText>{lnMsg}</FormHelperText>
                        </Box>
                    </Box>
                    <FormLabel>Email address</FormLabel>
                    <Input
                        type="email"
                        onChange={e => {
                            setEmail(e.currentTarget.value)
                        }}
                        onBlur={() => {
                            console.log('blurred')
                            validateEmail()
                        }}
                    />
                    <FormHelperText>{emailMsg}</FormHelperText>
                    <Button type="submit" colorScheme="teal">
                        Submit
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default Contact
