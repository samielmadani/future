'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BurgerMenu } from '../comps/burger-menu'
import { NavBar } from '../comps/nav-bar'

export default function Contact() {
    const [expanded] = useState(true)



    const containerVariants = {
        initial: { gap: '0px', gridTemplateColumns: '1fr' },
        expanded: { gap: '0px', gridTemplateColumns: 'repeat(3, 1fr)' }
    }

    const itemVariants = {
        initial: { opacity: 0, scale: 0 },
        expanded: { opacity: 1, scale: 1 }
    }


    return (
        <div className="html-background min-h-screen flex flex-col">
            <motion.div
                className="flex-grow flex flex-col p-4 md:p-8"
                variants={containerVariants}
                initial="initial"
                animate={expanded ? "expanded" : "initial"}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="background-primary rounded-lg p-6 flex justify-between items-center mb-4"
                    variants={itemVariants}
                    style={{ height: '100px', zIndex: '999' }}
                >
                    <NavBar />
                    <BurgerMenu />
                </motion.div>

                <motion.div
                    className="background-primary rounded-lg p-6 flex-grow flex flex-col mb-4"
                    variants={itemVariants}
                >


                    <div className="flex items-center justify-center h-screen bg-gray-100">
                        <iframe
                            src="https://1drv.ms/b/c/3730b33fb89af827/IQQn-Jq4P7MwIIA3KSoAAAAAAUInHvXjwvuJ5S6PWvWUq0I"
                            width="100%"
                            height="100%"
                            allow="autoplay"
                            className="border rounded-lg shadow-lg"
                        />
                    </div>

                </motion.div>




            </motion.div>
        </div>
    )
}
