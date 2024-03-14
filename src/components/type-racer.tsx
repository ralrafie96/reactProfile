import { Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './type-racer.css'

export const TypeRacer = () => {
    const sample = "Hello there my name is Rami."
    const [sampleHtml, setSampleHtml] = useState<any>()

    useEffect(() => {
        setSampleHtml(sample)
    }, [])

    const verifyInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setSampleHtml(sample.split('').map((elem, i) => {
            console.log(e.target.value.length)
            if (e.target.value.length < i + 1) {
                return <span key={i}>{elem}</span>
            }
            else if (e.target.value.split('')[i] == elem) {
                return <span key={i} style={{ color: 'green' }}>{elem}</span>
            } else {
                return <span key={i} style={{ color: 'red' }}>{elem}</span>
            }
        }))
    }
    return (
        <>
            <Input id="game-input" className="game-input" onChange={(e) => verifyInput(e)} />
            <div className="text-overlay">
                {sampleHtml}
            </div>
        </>
    )
}
