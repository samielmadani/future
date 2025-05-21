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
              About Me
            </motion.h2>

            <motion.h3 variants={textVariants} className="text-2xl font-semibold mb-2 primary-font about-head">
              Background:
            </motion.h3>
            <motion.ul variants={textVariants} className="mb-4 primary-font list-disc list-inside about-bod">
              <li>Software Engineering graduate from the University of Canterbury.</li>
              <li>Strong foundation in full-stack and mobile/web development.</li>
              <li>Passionate about innovation.</li>
            </motion.ul>

            <motion.h3 variants={textVariants} className="text-2xl font-semibold mb-2 primary-font about-head">
              Current Role:
            </motion.h3>
            <motion.ul variants={textVariants} className="mb-4 primary-font list-disc list-inside about-bod">
              <li>
                Software Developer at{" "}
                <a style={{fontWeight: 'bold'}} href="https://www.motorcentral.co.nz/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Motorcentral
                </a>
                {" (part of "}
                <a style={{fontWeight: 'bold'}} href="https://www.avantifinance.co.nz/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Avanti Finance
                </a>
                {")"}
              </li>
              <li>Industry leading DMS software for the automotive industry.</li>
              <li>Working in C# .NET, Angular TS, SQL and more...</li>
            </motion.ul>

            <motion.h3 variants={textVariants} className="text-2xl font-semibold mb-2 primary-font about-head">
              Personal Projects:
            </motion.h3>
            <motion.ul variants={textVariants} className="mb-4 primary-font list-disc list-inside about-bod">
              <li>Created applications using React, JavaScript, TypeScript, C#, Flutter, Kotlin, and Jetpack Compose.</li>
              <li>Many projects serve the university and local community, including a website and mobile app for the University of Canterbury Muslim Students Association.</li>
            </motion.ul>

            <motion.h3 variants={textVariants} className="text-2xl font-semibold mb-2 primary-font about-head">
              Community Involvement:
            </motion.h3>
            <motion.ul variants={textVariants} className="mb-4 primary-font list-disc list-inside about-bod">
              <li>Event Coordinator for New Zealand Eid Day (Christchurch) since July 2021.</li>
              <li>Manage event volunteers, ticket registrations, food vendors, and coordinate large events with the Christchurch City Council.</li>
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
              Education
            </motion.h3>
            <motion.p variants={textVariants} className="text-center factsss">
              University of Canterbury<br></br>Christchurch Boys High School

            </motion.p>

          </motion.div>

          <motion.div
            className="background-secondary rounded-lg p-6 flex flex-col items-center justify-center secondary-font"
            variants={itemVariants}
          >
            <MapPinCheck size={48} className="mb-2" />
            <motion.h3 variants={textVariants} className="text-xl font-semibold mb-2 text-center factss ">
              FROM
            </motion.h3>
            <motion.p variants={textVariants} className="text-center factsss">
              🇵🇸 Palestine <br></br> 🇳🇿 New Zealand
            </motion.p>
          </motion.div>

          <motion.div
            className="background-secondary rounded-lg p-6 flex flex-col items-center justify-center secondary-font"
            variants={itemVariants}
          >
            <Languages size={48} className="mb-2" />
            <motion.h3 variants={textVariants} className="text-xl font-semibold mb-2 factss">
              Languages
            </motion.h3>
            <motion.p variants={textVariants} className="text-center factsss">
              Fluent in English <br></br>and Arabic
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
