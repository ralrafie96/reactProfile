import { Text, Image, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './logo.css'

const Logo = () => {
    const navigate = useNavigate()
    const footPrintImg = `duck with knife${useColorModeValue('', ' dark')}.png`

    return (
        <div className="logo-box" onClick={() => navigate('/home')}>
            <Image
                className={useColorModeValue('logo', 'logo-dark')}
                src={footPrintImg}
                width={10}
                height={10}
                alt="logo"
            />
            <Text
                className="logo-text"
                color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                fontWeight="bold"
                ml={3}
            >
                Rami Al-Rafie
            </Text>
        </div>
    )
}

export default Logo
