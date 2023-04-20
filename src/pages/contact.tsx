import {
    Box,
    Container,
    FormControl,
    FormLabel,
    // FormErrorMessage,
    FormHelperText,
    useColorModeValue,
    Input,
    Button,
    Textarea,
    Icon,
    Link
} from '@chakra-ui/react'
import {
    IoLogoDiscord,
    IoLogoLinkedin,
    IoLogoFacebook,
    IoLogoGithub
} from 'react-icons/io5'
import CryptoJS from "crypto-js";
import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
import Section from '../components/section'
import Layout from '../components/article'

const Contact = () => {
    const [fn, setFn] = useState('')
    const [ln, setLn] = useState('')
    const [email, setEmail] = useState('')
    const [fnMsg, setFnMsg] = useState('')
    const [lnMsg, setLnMsg] = useState('')
    const [emailMsg, setEmailMsg] = useState('')
    const [subMsg, setSubMsg] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)
    const emailValidation = new RegExp(
        '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$'
    )

    useEffect(() => {
        validateFields()
    })

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
        if (
            fnMsg === '' &&
            lnMsg === '' &&
            emailMsg === '' &&
            fn !== '' &&
            ln !== '' &&
            email !== ''
        ) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }

    const encryptData = (text: string) => {
        const data = CryptoJS.AES.encrypt(
            JSON.stringify(text),
            process.env.REACT_APP_SECRET_PASS
        ).toString();

        return data;
    };

    const decryptData = (text: string) => {
        const bytes = CryptoJS.AES.decrypt(text, process.env.REACT_APP_SECRET_PASS);
        const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return data;
    };

    const sendMail = (e: any) => {
        e.preventDefault()
        setSubMsg('Loading...')
        const emailPublicKey: string = process.env.REACT_APP_PUBLIC_KEY
        const emailTemplateId: string = process.env.REACT_APP_TEMPLATE_ID
        const emailServiceId: string = process.env.REACT_APP_SERVICE_ID

        let formSubmissions = sessionStorage.getItem('formSubmissions')
        if (!!formSubmissions) {
            try {
                if (formSubmissions === "") {
                    throw new Error("sendMail: formSubmissions was found to be an empty.")
                }
                if (parseInt(decryptData(formSubmissions)) >= 3) {
                    setSubMsg('Please do not send multiple emails. Thank you! :D')
                    return
                }
            } catch (err) {
                console.log(err)
                sessionStorage.setItem('formSubmissions', encryptData(`3`))
                setSubMsg('Please do not mess with the session storage. Thank you! :D')
                return
            }
        }

        emailjs
            .sendForm(
                emailServiceId,
                emailTemplateId,
                e.target,
                emailPublicKey
            )
            .then(
                () => {
                    setSubMsg('Thanks for reaching out!')
                    if (!!formSubmissions) {
                        sessionStorage.setItem('formSubmissions', encryptData(`${parseInt(decryptData(formSubmissions)) + 1}`))
                    } else {
                        sessionStorage.setItem('formSubmissions', encryptData(`1`))
                    }
                },
                error => {
                    setSubMsg('An error occurred: ' + error.text)
                }
            )
    }

    return (
        <Layout>
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
                <form
                    onSubmit={e => {
                        setIsDisabled(true)
                        sendMail(e)
                    }}
                >
                    <FormControl>
                        <Section style={{ margin: '0rem' }} delay={0.2}>
                            <Box
                                className="full-name"
                                whiteSpace={{ base: undefined, md: 'nowrap' }}
                            >
                                <Box
                                    className="name"
                                    paddingRight={{ base: '1rem', md: '1rem' }}
                                    width={{ base: '100%', md: '50%' }}
                                >
                                    <FormLabel>First Name</FormLabel>
                                    <Input
                                        borderColor={useColorModeValue(
                                            'gray.500',
                                            'whiteAlpha.100'
                                        )}
                                        onChange={e => {
                                            setFn(e.currentTarget.value)
                                        }}
                                        onBlur={() => {
                                            validateFn()
                                        }}
                                        className="name"
                                        type="first-name"
                                        name="first-name"
                                    />
                                    <FormHelperText className="helper-text">
                                        {fnMsg}
                                    </FormHelperText>
                                </Box>
                                <Box
                                    className="name"
                                    paddingLeft={{ base: '1rem', md: '1rem' }}
                                    width={{ base: '100%', md: '50%' }}
                                >
                                    <FormLabel>Last Name</FormLabel>
                                    <Input
                                        borderColor={useColorModeValue(
                                            'gray.500',
                                            'whiteAlpha.100'
                                        )}
                                        onChange={e => {
                                            setLn(e.currentTarget.value)
                                        }}
                                        onBlur={() => {
                                            validateLn()
                                        }}
                                        className="name"
                                        type="last-name"
                                        name="last-name"
                                    />
                                    <FormHelperText className="helper-text">
                                        {lnMsg}
                                    </FormHelperText>
                                </Box>
                            </Box>
                        </Section>
                        <Section style={{ margin: '0rem' }} delay={0.4}>
                            <FormLabel>Email address</FormLabel>
                            <Input
                                type="email"
                                name="email"
                                onChange={e => {
                                    setEmail(e.currentTarget.value)
                                }}
                                onBlur={() => {
                                    validateEmail()
                                }}
                                borderColor={useColorModeValue(
                                    'gray.500',
                                    'whiteAlpha.100'
                                )}
                            />
                            <FormHelperText className="helper-text">
                                {emailMsg}
                            </FormHelperText>
                        </Section>
                        <Section style={{ margin: '0rem' }} delay={0.6}>
                            <FormLabel>Leave a message</FormLabel>
                            <Textarea
                                name="message"
                                borderColor={useColorModeValue(
                                    'gray.500',
                                    'whiteAlpha.100'
                                )}
                            />
                            <Button
                                className="sub-btn"
                                isDisabled={isDisabled}
                                type="submit"
                                colorScheme="teal"
                            >
                                Submit
                            </Button>
                            <FormHelperText className="helper-text submit-helper-text">
                                {subMsg}
                            </FormHelperText>
                        </Section>
                    </FormControl>
                    <Section delay={1.0}>
                        <Box className="footer">
                            <Box className="link-container">
                                <Link href='https://www.discordapp.com/users/297024927561678848'>
                                    <Icon as={IoLogoDiscord} color="teal" fontSize='1.5rem' />
                                </Link>
                                <Link href='https://www.linkedin.com/in/rami-al-rafie-b55b4114a/'>
                                    <Icon as={IoLogoLinkedin} color="teal" fontSize='1.5rem' />
                                </Link>
                                <Link href='https://www.facebook.com/ralrafie/'>
                                    <Icon as={IoLogoFacebook} color="teal" fontSize='1.5rem' />
                                </Link>
                                <Link href='https://github.com/ralrafie96'>
                                    <Icon as={IoLogoGithub} color="teal" fontSize='1.5rem' />
                                </Link>
                            </Box>
                        </Box>
                    </Section>
                </form>
            </Container>
        </Layout>
    )
}

export default Contact
