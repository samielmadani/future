'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Music, Headphones, Mic2 } from 'lucide-react'
import { BurgerMenu } from '../comps/burger-menu'
import { NavBar } from '../comps/nav-bar'
import profilePic from '../images/me.png'


export default function About() {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    setExpanded(true);
  }, [])

  const containerVariants = {
    initial: { gap: '0px', gridTemplateColumns: '1fr' },
    expanded: { gap: '0px', gridTemplateColumns: 'repeat(3, 1fr)' }
  }

  const itemVariants = {
    initial: { opacity: 0, scale: 0 },
    expanded: { opacity: 1, scale: 1 }
  }

  const textVariants = {
    initial: { opacity: 0 },
    expanded: { opacity: 1, transition: { delay: 0.5 } }
  }

  const imageVariants = {
    initial: { opacity: 0, y: 20 },
    expanded: { opacity: 1, y: 0, transition: { delay: 0.7 } }
  }

  return (
    <div className="bg-black min-h-screen flex flex-col font-roboto">
      <motion.div
        className="flex-grow flex flex-col p-4 md:p-8"
        variants={containerVariants}
        initial="initial"
        animate={expanded ? "expanded" : "initial"}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-[#d7cfbb] rounded-lg p-6 flex justify-between items-center mb-4"
          variants={itemVariants}
          style={{ height: '100px' }}
        >
          <NavBar />
          <BurgerMenu />
        </motion.div>

        <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            className="bg-[#d7cfbb] rounded-lg p-6 md:col-span-2 row-span-2"
            variants={itemVariants}
          >
            <motion.h2 variants={textVariants} className="text-3xl font-semibold mb-4 text-black">
              2023 Univeristy of Canterbury Software Engineering Graduate
            </motion.h2>
            <motion.p variants={textVariants} className="mb-4 text-black">
              Some info bout me.
            </motion.p>
          </motion.div>

          <motion.div
            className="bg-stone-700 rounded-lg overflow-hidden md:row-span-2"
            variants={itemVariants}
          >
            <motion.div
              variants={imageVariants}
              className="h-full relative"
              style={{ minHeight: '400px' }} // Adjust the minHeight as needed
            >
              <Image
                src={profilePic}
                alt="DJ Profile"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-stone-600 rounded-lg p-6 flex flex-col items-center justify-center"
            variants={itemVariants}
          >
            <Music size={48} className="mb-2" />
            <motion.h3 variants={textVariants} className="text-xl font-semibold mb-2 text-center">
              TITLE
            </motion.h3>
            <motion.p variants={textVariants} className="text-center">
            Textttttt
            </motion.p>
          </motion.div>

          <motion.div
            className="bg-stone-500 rounded-lg p-6 flex flex-col items-center justify-center"
            variants={itemVariants}
          >
            <Headphones size={48} className="mb-2" />
            <motion.h3 variants={textVariants} className="text-xl font-semibold mb-2 text-center">
            TITLE
            </motion.h3>
            <motion.p variants={textVariants} className="text-center">
              Textttttt
            </motion.p>
          </motion.div>

          <motion.div
            className="bg-stone-400 rounded-lg p-6 flex flex-col items-center justify-center"
            variants={itemVariants}
          >
            <Mic2 size={48} className="mb-2" />
            <motion.h3 variants={textVariants} className="text-xl font-semibold mb-2">
            TITLE
            </motion.h3>
            <motion.p variants={textVariants} className="text-center">
            Textttttt
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}