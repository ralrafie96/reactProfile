import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import './App.css'
import Page from './pages/pages'
import theme from './libs/theme'
import NavBar from './components/navbar'
import Fonts from './components/fonts'

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="*" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<Page />}></Route>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    )
}

export default App
