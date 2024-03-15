import { Box, Button, Container, Input } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import Layout from '../components/article'
import './game.css'

export const Game = () => {
    const [startGame, setStartGame] = useState(false)
    const [countdown, setCountdown] = useState(3)
    const [sample, setSample] = useState("")
    const [sampleHtml, setSampleHtml] = useState<any>()
    const [startTime, setStartTime] = useState<number>(Date.now())
    const [now, setNow] = useState<number>(Date.now())

    const intervalRef = useRef<any>(null);

    const generateWords = async (length: number, amount: number) => {
        const response = await fetch(`https://random-word-api.vercel.app/api?words=${amount}&length=${length}`)
        let wordLst = await response.json()
        // let lstInString = ''
        // for (let i=0; i < wordLst.length; i++) {
        //     console.log(wordLst[i])
        //     lstInString = `${wordLst[i]} ${lstInString}`
        // }
        // console.log(lstInString)
        // setSample(lstInString)
        return wordLst
    }

    const initializeTypeRacer = async () => {
        let wordLst: string[] = []
        let words1 = await generateWords(7, 10)
        wordLst = [...wordLst, ...words1]
        let words2 = await generateWords(6, 10)
        wordLst = [...wordLst, ...words2]
        let words3 = await generateWords(5, 10)
        wordLst = [...wordLst, ...words3]

        console.log(wordLst)
        let lstInString = ''
        for (let i=0; i < wordLst.length; i++) {
            console.log(wordLst[i])
            lstInString = `${wordLst[i]} ${lstInString}`
        }
        lstInString = lstInString.trim()

        console.log(`'${lstInString}'`)

        setSample(lstInString)

        setStartGame(!startGame);
        setTimeout(() => {
            setCountdown(2)
        }, 1000);
        setTimeout(() => {
            setCountdown(1)
        }, 2000);
        setTimeout(() => {
            setCountdown(0)
            document.getElementById("game-input")?.focus()
            handleStart();
        }, 3000);
    }

    const handleStart = () => {
        setNow(Date.now())
        setStartTime(Date.now())
        intervalRef.current = setInterval(() => {
            setNow(Date.now())
        }, 10);
    }

    const handleStop = () => {
        clearInterval(intervalRef.current)
    }

    useEffect(() => {
        setSampleHtml(sample)
    }, [sample])

    const verifyInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSampleHtml(sample.split('').map((elem, i) => {
            if (e.target.value.length < i + 1) {
                return <span key={i} style={{ color: 'gray' }}>{elem}</span>
            }
            else if (e.target.value.split('')[i] == elem) {
                return <span key={i} style={{ color: 'green', backgroundColor: 'lightgreen' }}>{elem}</span>
            } else {
                return <span key={i} style={{ color: 'red', backgroundColor: 'lightpink' }}>{elem}</span>
            }
        }))
        if (e.target.value == sample) {
            handleStop()
            document.getElementById('game-input')?.setAttribute("disabled", "true")
        }
    }
    return (
        <Layout>
            <Container className="page-container">
                <Box className={`game-container ${startGame ? 'hidden' : ''}`}>
                    <p>Welcome To TypeRacer</p>
                    <Button onClick={() => initializeTypeRacer()}>
                        Start
                    </Button>
                </Box>
                <Box className={`tr-container ${!startGame ? 'hidden' : ''}`} >
                    <Box className={`modal-bg ${countdown <= 0 ? 'hidden' : ''}`}>
                        <p className='countdown'>{countdown}</p>
                    </Box>
                    <div>
                        {sampleHtml}
                    </div>
                    <Box>Elapsed Time: {`${String(Math.floor((Math.floor(now - startTime) / 1000) / 60)).padStart(2, '0')}:${String(Math.floor((now - startTime) / 1000) % 60).padStart(2, '0')}:${String(Math.floor((now - startTime) % 1000)).padStart(3, '0')}`}</Box>
                    <Input id="game-input" className="game-input" onChange={(e) => verifyInput(e)} />
                </Box>
            </Container>
        </Layout >
    )
}
