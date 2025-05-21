'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BurgerMenu } from '../comps/burger-menu'
import { NavBar } from '../comps/nav-bar'
import LogoCarousel from '../comps/logo-carousel'

export default function Projects() {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    setExpanded(true)
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
    expanded: { opacity: 1, transition: { duration: 0.5 } }
  }

  const imageVariants = {
    initial: { opacity: 0 },
    expanded: { opacity: 1, transition: { duration: 0.5 } }
  }

  const projects = [
    { title: "UCMUSA Prayer App", height: "h-64" },
    { title: "Muslim Open Space", height: "h-80" },
    { title: "Zonate", height: "h-72" },
    { title: "canterburymusa.com", height: "h-72" },
    { title: "Lenfolio", height: "h-64" },
    { title: "Mixed Reality Monopoly", height: "h-80" },
  ]

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <motion.div
        className=" flex flex-col p-4 md:p-8"
        variants={containerVariants}
        initial="initial"
        animate={expanded ? "expanded" : "initial"}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-[#d7cfbb] rounded-lg p-6 flex justify-between items-center mb-4"
          variants={itemVariants}
          style={{ height: '100px' }} // Fixed height for the header
        >
          <NavBar />
          <BurgerMenu />
        </motion.div>

        <motion.div
          className="bg-[#d7cfbb] rounded-lg p-6 flex-grow flex flex-col"
          variants={itemVariants}
        >
          <motion.h2 variants={textVariants} className="text-3xl font-semibold mb-6 text-black font-poppins">
            My Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-6">
              {projects.slice(0, 2).map((project, index) => (
                <motion.div
                  key={index}
                  className={`bg-stone-700 rounded-lg overflow-hidden ${project.height}`}
                  variants={itemVariants}
                >
                  <motion.div variants={imageVariants} className="h-full">
                    <Image
                      src="https://ariobe.irisceramicagroup.com/wp-content/uploads/arioimg_repo/classic/pietre-naturali-high-tech/_pavimenti/jatoba-brown/texture/ar-pn-jatoba_brown_pn-_-_-120120-f07-plp120689.jpg"
                      alt={project.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    variants={textVariants}
                    className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4"
                  >
                    <h3 className="text-lg font-semibold font-poppins">{project.title}</h3>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {projects.slice(2, 4).map((project, index) => (
                <motion.div
                  key={index + 2}
                  className={`bg-stone-700 rounded-lg overflow-hidden ${project.height}`}
                  variants={itemVariants}
                >
                  <motion.div variants={imageVariants} className="h-full">
                    <Image
                      src="https://ariobe.irisceramicagroup.com/wp-content/uploads/arioimg_repo/classic/pietre-naturali-high-tech/_pavimenti/jatoba-brown/texture/ar-pn-jatoba_brown_pn-_-_-120120-f07-plp120689.jpg"
                      alt={project.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    variants={textVariants}
                    className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4"
                  >
                    <h3 className="text-lg font-semibold font-poppins">{project.title}</h3>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {projects.slice(4, 6).map((project, index) => (
                <motion.div
                  key={index + 4}
                  className={`bg-stone-700 rounded-lg overflow-hidden ${project.height}`}
                  variants={itemVariants}
                >
                  <motion.div variants={imageVariants} className="h-full">
                    <Image
                      src="https://ariobe.irisceramicagroup.com/wp-content/uploads/arioimg_repo/classic/pietre-naturali-high-tech/_pavimenti/jatoba-brown/texture/ar-pn-jatoba_brown_pn-_-_-120120-f07-plp120689.jpg"
                      alt={project.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    variants={textVariants}
                    className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4"
                  >
                    <h3 className="text-lg font-semibold font-poppins">{project.title}</h3>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>



        <motion.div
            className="bg-[#d7cfbb] rounded-lg p-6 md:col-span-2 flex items-center justify-center mb-4"
            variants={itemVariants}
            style={{marginTop: '1rem'}}
          >
            {/* <motion.button variants={textVariants} className="text-black text-xl font-semibold"> */}
            <LogoCarousel />

            {/* </motion.button> */}
          </motion.div>
      </motion.div>
    </div>
  )
}