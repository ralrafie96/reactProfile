import { Box, Button, Container } from '@chakra-ui/react'
import React, { useState } from 'react'
import Layout from '../components/article'
import { TypeRacer } from '../components/type-racer'
import './game.css'

export const Game = () => {
    const [startGame, setStartGame] = useState(false)
    return (
        <Layout>
            <Container className="page-container">
                <Box className={`game-container ${startGame ? 'hidden' : ''}`}>
                    <p>Welcome To TypeRacer</p>
                    <Button onClick={() => { setStartGame(!startGame) }}>
                        Start
                    </Button>
                </Box>
                <Box className={`tr-container ${!startGame ? 'hidden' : ''}`} >
                    <TypeRacer />
                </Box>
            </Container>
        </Layout >
    )
}
