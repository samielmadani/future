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
                    <div className="flex flex-col items-center justify-center h-full">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center headerr">Legacy & Vision</h1>
                        <p className="mb-4 text-center">
                            <strong>30-Year Plan (Legacy Phase):</strong> Launch the first Islamic Bank in New Zealand, set up a waqf (Islamic endowment) to fund future community financial initiatives, and grow a generation with strong financial acumen ready to lead and govern such institutions.
                        </p>
                        <p className="mb-4 text-center">
                            <strong>Our goal:</strong> Build a sustainable ecosystem where every Muslim youth has the knowledge, tools, and support to thrive financially and contribute to the community's prosperity.
                        </p>
                        <p className="text-center">
                            <strong>Let's create a legacy of financial empowerment for generations to come.</strong>
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
