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
import { useEffect, useState } from 'react'
import './contact.css'

const Contact = () => {

    const [fn, setFn] = useState('')
    const [ln, setLn] = useState('')
    const [email, setEmail] = useState('')
    const [fnMsg, setFnMsg] = useState('')
    const [lnMsg, setLnMsg] = useState('')
    const [emailMsg, setEmailMsg] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)
    const emailValidation = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')

    useEffect(() => {
        console.log('in useEffect')
        validateFields()
      });

    const validateFn = () => {
        if (!fn.trim()) {
            setFnMsg('Please enter a First Name.')
        } else {
            setFnMsg('')
        }
    }

    const validateLn = () => {
        if (!ln.trim()) {
            setLnMsg('Please enter a Last Name.')
        } else {
            setLnMsg('')
        }
    }

    const validateEmail = () => {
        if (!email.trim()) {
            setEmailMsg('Please enter an Email Address.')
        } else if (email.match(emailValidation) === null) {
            setEmailMsg('Please enter a valid Email Address.')
        } else {
            setEmailMsg('')
        }
    }

    const validateFields = () => {
        if (fnMsg === '' && lnMsg === '' && emailMsg === '' && fn !== '' && ln !== '' && email !== '') {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
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
            <form onSubmit={(e) => {console.log('submitted form!'); e.preventDefault()}}>
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
                                    validateFn()
                                }}
                                className="name"
                                type="first-name"
                            />
                            <FormHelperText className='helper-text'>{fnMsg}</FormHelperText>
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
                                    validateLn()
                                }}
                                className="name"
                                type="last-name"
                            />
                            <FormHelperText className='helper-text'>{lnMsg}</FormHelperText>
                        </Box>
                    </Box>
                    <FormLabel>Email address</FormLabel>
                    <Input
                        type="email"
                        onChange={e => {
                            setEmail(e.currentTarget.value)
                        }}
                        onBlur={() => {
                            validateEmail()
                        }}
                    />
                    <FormHelperText className='helper-text'>{emailMsg}</FormHelperText>
                    <Button isDisabled={isDisabled} type="submit" colorScheme="teal">
                        Submit
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default Contact
