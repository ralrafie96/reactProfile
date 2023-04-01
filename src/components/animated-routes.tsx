import { AnimatePresence } from 'framer-motion'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import NotFound from '../pages/404'
import Contact from '../pages/contact'
import Gallery from '../pages/gallery'
import Page from '../pages/pages'
import Works from '../pages/works'

const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence mode="wait" initial={true}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
                <Route path="/404" element={<NotFound />}></Route>
                <Route path="/home" element={<Page />}></Route>
                <Route path="/gallery" element={<Gallery />}></Route>
                <Route path="/works" element={<Works />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
