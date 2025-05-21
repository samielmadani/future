'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { BurgerMenu } from './comps/burger-menu'
import profilePic from './images/me.png'
import LogoCarousel from './comps/logo-carousel'
import { NavBar } from './comps/nav-bar'


export default function Home() {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setExpanded(true), 1000)
    return () => clearTimeout(timer)
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
    initial: { opacity: 0 },
    expanded: { opacity: 1, transition: { delay: 0.5 } }
  }

  const symbolVariants = {
    initial: { opacity: 0, rotate: 0 },
    expanded: {
      opacity: 1,
      rotate: 360,
      transition: { delay: 0.5, duration: 1, ease: 'easeInOut' },
    },
  }

  const dividerVariants = {
    initial: { width: 0 },
    expanded: { width: '100%', transition: { delay: 0.7, duration: 0.5 } }
  }

  return (
    <div className="bg-black min-h-screen flex flex-col">
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
            className="bg-[#d7cfbb] rounded-lg p-6 flex items-center justify-center"
            variants={itemVariants}
          >
            <motion.div variants={symbolVariants} className="w-36 h-32"> {/* Adjusted width and height */}
              <svg viewBox="0 0 200 200" className="w-full h-full transform scale-200"> {/* Modified viewBox and added scale */}
                <circle cx="100" cy="60" r="50" stroke="black" strokeWidth="1" fill="none" />
                <circle cx="100" cy="140" r="50" stroke="black" strokeWidth="1" fill="none" />
                <circle cx="60" cy="100" r="50" stroke="black" strokeWidth="1" fill="none" />
                <circle cx="140" cy="100" r="50" stroke="black" strokeWidth="1" fill="none" />
                <circle cx="70" cy="70" r="50" stroke="black" strokeWidth="1" fill="none" />
                <circle cx="130" cy="70" r="50" stroke="black" strokeWidth="1" fill="none" />
                <circle cx="70" cy="130" r="50" stroke="black" strokeWidth="1" fill="none" />
                <circle cx="130" cy="130" r="50" stroke="black" strokeWidth="1" fill="none" />
              </svg>
            </motion.div>

          </motion.div>

          <motion.div
            className="bg-[#d7cfbb] rounded-lg p-6 md:col-span-2 flex items-center"
            variants={itemVariants}
          >
            <motion.h1
              variants={textVariants}
              className="text-2xl font-semibold text-black leading-10" // Added leading utility for line height
              style={{ fontSize: '50px' }}
            >
              Sami Elmadani <br></br> Software Engineer
            </motion.h1>

          </motion.div>

          <motion.div
            className="bg-stone-400 rounded-lg p-6 flex items-center min-h-[300px]"
            variants={itemVariants}
          >
            <div className="absolute inset-0 overflow-y-scroll scrollbar-hidden p-4"> {/* Added padding here */}
              <motion.p variants={textVariants} className="text-black">
                <strong className="text-2xl font-bold">Software Engineer</strong><br />
                <span className="font-medium text-sm  font-bold">Motorcentral | Avanti Finance</span><br />
                <span className=" text-sm font-bold">Since July 2024</span>
                <br /><br />

                <strong className="text-xl font-bold">Software Engineer Intern</strong><br />
                <span className="font-medium text-sm  font-bold">Datacom Limited</span><br />
                <span className=" text-sm font-bold">Nov 2022 - Feb 2023</span><br />
                <span className="text-sm text-gray-800">
                  Contributed to the Datacom Timpani team, collaborating on projects to enhance software solutions and improve user experiences.
                </span>
                <br /><br />

                <strong className="text-xl font-bold">Software Engineer Intern</strong><br />
                <span className="font-medium text-sm  font-bold">Zonate, Hablaz Limited</span><br />
                <span className=" text-sm font-bold">Nov 2021 - Feb 2022</span><br />
                <span className="text-gray-800 text-sm">
                  Worked with a dynamic start-up, helping to develop innovative applications that catered to client needs and market trends.
                </span>
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="bg-stone-700 rounded-lg overflow-hidden"
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
            className="bg-[#d7cfbb] rounded-lg p-6 flex flex-col justify-between"
            variants={itemVariants}
          >
            
            <motion.div variants={imageVariants} className="flex-grow relative mb-2">
              <div className="relative" style={{ minHeight: '200px' }}> {/* Set minHeight here */}
                <Image
                  src="https://ariobe.irisceramicagroup.com/wp-content/uploads/arioimg_repo/classic/pietre-naturali-high-tech/_pavimenti/jatoba-brown/texture/ar-pn-jatoba_brown_pn-_-_-120120-f07-plp120689.jpg"
                  alt="First Dance"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
            </motion.div>

            <motion.div variants={textVariants} className="space-y-4">
              {['Zonate', 'Muslim Open Space', 'UCMUSA', 'University'].map((item, index) => (
                <div key={index}>
                  <strong className="text-black">{item}</strong>
                  <motion.div
                    className="h-px bg-black mt-1"
                    variants={dividerVariants}
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-stone-600 rounded-lg p-6 md:col-span-2 flex items-center justify-center"
            variants={itemVariants}
          >
            {/* <motion.button variants={textVariants} className="text-black text-xl font-semibold"> */}
            <LogoCarousel />

            {/* </motion.button> */}
          </motion.div>

          <motion.div
            className="bg-stone-500 rounded-lg p-6 flex items-center justify-center space-x-4"
            variants={itemVariants}
          >
            {[
              { Icon: Github, link: "https://github.com/samielmadani" },
              { Icon: Linkedin, link: "https://linkedin.com/in/samielmadani" },
              { Icon: Mail, link: "mailto:sami.elmadani@outlook.com" }
            ].map(({ Icon, link }, index) => (
              <motion.a
                key={index}
                href={link}
                className="text-black"
                variants={symbolVariants}
                whileHover={{ scale: 1.2 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}