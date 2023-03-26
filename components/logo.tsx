import { Box, Text, Image, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
        transform: rotate(20deg);
    }
`

const Logo = () => {
    const footPrintImg = `/images/footprint${useColorModeValue(
        '',
        '-dark'
    )}.png}`

    return (
        <Box>
            <LogoBox>
                <Image src={footPrintImg} width={20} height={20} alt="logo" />
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily="M PLUS Rounded 1c"
                    fontWeight="bold"
                    ml={3}
                >
                    Rami Al-Rafie
                </Text>
            </LogoBox>
        </Box>
    )
}

export default Logo
