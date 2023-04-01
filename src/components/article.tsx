import { Global } from '@emotion/react'
import { motion } from 'framer-motion'

// const variants = {
//     hidden: { opacity: 0, x: 0, y: 20 },
//     enter: { opacity: 1, x: 0, y: 0 },
//     exit: { opacity: 0, x: 0, y: 20 }
// }

interface LayoutProps {
    children: any
    title?: string
}
const Layout = ({ children, title }: LayoutProps) => {
    return (
        <motion.article
            key="article"
            initial={{ opacity: 0, x: 0, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 0, y: 20 }}
            // variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
            style={{ position: 'relative' }}
        >
            <>
                {title && <title>{title} - Rami Al-Rafie</title>}
                {children}
                <Global
                    styles={`
                .grid-item-thumbnail {
                    border-radius: 12px;
                }
                `}
                />
            </>
        </motion.article>
    )
}

export default Layout
