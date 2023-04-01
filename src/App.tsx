import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import './App.css'
import theme from './libs/theme'
import NavBar from './components/navbar'
import Fonts from './components/fonts'
import ScrollToTop from './components/scroll-to-top'
import AnimatedRoutes from './components/animated-routes'

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <BrowserRouter>
                <NavBar />
                <ScrollToTop />
                <AnimatedRoutes />
            </BrowserRouter>
        </ChakraProvider>
    )
}

export default App
