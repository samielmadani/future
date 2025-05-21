'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { School, Languages, MapPinCheck } from 'lucide-react'
import { BurgerMenu } from '../comps/burger-menu'
import { NavBar } from '../comps/nav-bar'
import profilePic from '../images/me2.png'

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
    <div className="html-background min-h-screen flex flex-col font-roboto">
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

        <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4">

          <motion.div
            className="background-primary rounded-lg p-6 md:col-span-2 row-span-2"
            variants={itemVariants}
          >
            <motion.h2 variants={textVariants} className="text-3xl font-semibold mb-4 primary-font headerr">
              About the Team
            </motion.h2>
            <motion.ul variants={textVariants} className="mb-4 primary-font list-disc list-inside about-bod">
              <li><strong>Sara, Mazen, Saad, Sami, & Sofea</strong></li>
            </motion.ul>

            <motion.h3 variants={textVariants} className="text-2xl font-semibold mb-2 primary-font about-head">
              Vision:
            </motion.h3>
            <motion.ul variants={textVariants} className="mb-4 primary-font list-disc list-inside about-bod">
              <li>
                We are a group of passionate Muslims dedicated to empowering our youth with practical financial literacy, rooted in Islamic values.
              </li>
              <li>
                Our vision is to build a thriving, financially savvy Muslim community in New Zealand—one that can support itself, grow businesses, and leave a legacy for generations to come.
              </li>
              <li>
                Through digital content, workshops, and innovative programs, we aim to make financial education accessible, engaging, and relevant for every Muslim youth.
              </li>
              <li>
                <strong>Join us on this journey to financial empowerment and community growth!</strong>
              </li>
            </motion.ul>
          </motion.div>

          <motion.div
            className="background-secondary rounded-lg overflow-hidden md:row-span-2"
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
                objectPosition="top"

              />
            </motion.div>
          </motion.div>

          <motion.div
            className="background-secondary rounded-lg p-6 flex flex-col items-center justify-center secondary-font"
            variants={itemVariants}
          >
            <School size={48} className="mb-2" />
            <motion.h3 variants={textVariants} className="text-xl font-semibold mb-2 text-center factss">
              Home
            </motion.h3>
            <motion.p variants={textVariants} className="text-center factsss">
Buying a house in New Zealand
            </motion.p>

          </motion.div>

          <motion.div
            className="background-secondary rounded-lg p-6 flex flex-col items-center justify-center secondary-font"
            variants={itemVariants}
          >
            <MapPinCheck size={48} className="mb-2" />
            <motion.h3 variants={textVariants} className="text-xl font-semibold mb-2 text-center factss ">
              Settle
            </motion.h3>
            <motion.p variants={textVariants} className="text-center factsss">
               Financial stability
            </motion.p>
          </motion.div>

          <motion.div
            className="background-secondary rounded-lg p-6 flex flex-col items-center justify-center secondary-font"
            variants={itemVariants}
          >
            <Languages size={48} className="mb-2" />
            <motion.h3 variants={textVariants} className="text-xl font-semibold mb-2 factss">
              Language
            </motion.h3>
            <motion.p variants={textVariants} className="text-center factsss">
              Support regardless of language barriers
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
