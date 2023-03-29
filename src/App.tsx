import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import './App.css'
import Page from './pages/pages'
import theme from './libs/theme'
import NavBar from './components/navbar'
import Fonts from './components/fonts'
import Gallery from './pages/gallery'
import Works from './pages/works'
import NotFound from './pages/404'
import ScrollToTop from './components/scroll-to-top'

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <BrowserRouter>
                <NavBar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="*" element={<Navigate to="/404" replace />} />
                    <Route path="/404" element={<NotFound />}></Route>
                    <Route path="/home" element={<Page />}></Route>
                    <Route path="/gallery" element={<Gallery />}></Route>
                    <Route path="/works" element={<Works />}></Route>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    )
}

export default App
