'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { BurgerMenu } from './comps/burger-menu'
import profilePic from './images/me2.png'
import LogoCarousel from './comps/logo-carousel'
import { NavBar } from './comps/nav-bar'

import gitGif from './images/git.gif'
import { useRouter } from 'next/navigation'

import zonate from './images/z1.png';
import ucmusa from './images/ucmusa.png';
import monop from './images/m1.jpeg';
import mos from './images/os1.jpeg';


export default function Home() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isSpinning, setIsSpinning] = useState(false); // State to track spinning
  const [rotation, setRotation] = useState(0); // State to track rotation angle


  // Handle spin toggle on click
  const handleSpinClick = () => {
    setIsSpinning((prev) => !prev);
    if (!isSpinning) {
      setRotation((prevRotation) => prevRotation + 360); // Add 720 degrees on each spin
    }
  };


  const spinVariants = {
    initial: { rotate: rotation },
    spinning: {
      rotate: rotation + 360, // Add 720 degrees to the current rotation
      transition: {
        repeat: 0, // Continuous spinning
        duration: 2, // Duration for one full spin
        ease: 'easeInOut',
      },
    },
  };



  // Data for the items
  const items = [
    { name: 'Zonate', link: 'https://linkedin.com/in/samielmadani', image: zonate },
    { name: 'Muslim Open Space', link: 'https://www.facebook.com/muslimopenspace/', image: mos },
    { name: 'UCMUSA', link: 'https://www.canterburymusa.com/', image: ucmusa },
    { name: 'University', link: 'https://github.com/samielmadani', image: monop },
  ];

  // Event handler for image click
  const handleImageClick = (link: string) => {
    window.open(link, '_blank'); // Open link in a new tab
  };

  const handleItemClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Collapse if already expanded
  };

  const [expanded] = useState(true)

  const router = useRouter();

  const handleClick = () => {
    router.push('/about'); // Replace with the target URL
  };


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

        <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            className="background-primary rounded-lg p-6 flex items-center justify-center"
            variants={itemVariants}
          >
            <motion.div variants={symbolVariants} className="w-36 h-32"> {/* Adjusted width and height */}
              <motion.div
              style={{cursor: "pointer"}}
                className="w-36 h-32"
                onClick={handleSpinClick}
                variants={spinVariants}
                initial="initial"
                animate={isSpinning ? "spinning" : "initial"} // Toggle spinning animation
              >
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

          </motion.div>

          <motion.div
            className="background-primary rounded-lg p-6 md:col-span-2 flex items-center"
            variants={itemVariants}
          >
            <motion.h1
              variants={textVariants}
              className="text-2xl font-semibold primary-font leading-10 headerr" // Added leading utility for line height
              style={{ fontSize: '50px' }}
            >
              Sami Elmadani <br></br> Software Engineer
            </motion.h1>

          </motion.div>

          <motion.div
            className="background-secondary rounded-lg p-6 flex items-center min-h-[300px]"
            variants={itemVariants}
          >
            <div className="absolute inset-0 overflow-y-scroll scrollbar-hidden p-4"> {/* Added padding here */}
              <motion.p variants={textVariants} className="secondary-font">
                <strong className="text-2xl font-bold secondary-font">Software Engineer</strong><br />
                <span className="font-medium text-sm font-bold secondary-font">
                  <a style={{ fontWeight: 'bold' }} href="https://www.motorcentral.co.nz/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Motorcentral
                  </a>
                  {" | "}
                  <a style={{ fontWeight: 'bold' }} href="https://www.avantifinance.co.nz/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Avanti Finance
                  </a>
                </span>
                <br />
                <span className=" text-sm font-bold secondary-font">Since July 2024</span>
                <br /><br />

                <strong className="text-xl font-bold secondary-font">Software Engineer Intern</strong><br />
                <span className="font-medium text-sm font-bold secondary-font">
                  <a style={{ fontWeight: 'bold' }} href="https://datacom.com/nz/en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Datacom Limited
                  </a>
                </span>
                <br />
                <span className=" text-sm font-bold secondary-font">Nov 2022 - Feb 2023</span><br />
                <span className="text-sm text-gray-800 secondary-font">
                  Contributed to the Datacom Timpani team, collaborating on projects to enhance software solutions and improve user experiences.
                </span>
                <br /><br />

                <strong className="text-xl font-bold secondary-font">Software Engineer Intern</strong><br />
                <span className="font-medium text-sm  font-bold secondary-font">Zonate, Hablaz Limited</span><br />
                <span className=" text-sm font-bold secondary-font">Nov 2021 - Feb 2022</span><br />
                <span className="text-gray-800 text-sm secondary-font">
                  Worked with a dynamic start-up, helping to develop innovative applications that catered to client needs and market trends.
                </span>
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="background-secondary  rounded-lg overflow-hidden"
            variants={itemVariants}
            whileTap={{ scale: 1.1, zIndex: 999, cursor: 'pointer' }} // Add this for hover effect
            whileHover={{ scale: 1.1, zIndex: 999, cursor: 'pointer' }} // Add this for hover effect
            onClick={handleClick} // Redirect on click

          >
            <motion.div
              variants={imageVariants}
              className="h-full relative"
              style={{ minHeight: '500px' }} // Adjust the minHeight as needed
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
            className="background-primary rounded-lg flex flex-col justify-between"
            variants={itemVariants}
          >
            <div className='overflow-y-scroll scrollbar-hidden p-4' style={{ maxHeight: '500px' }}>

              <motion.div variants={imageVariants} className="flex-grow relative mb-2">
                <div className="relative" style={{ minHeight: '200px' }}> {/* Set minHeight here */}
                  <a href="https://github.com/samielmadani" target="_blank" rel="noopener noreferrer">

                    <Image
                      src={gitGif}
                      alt="First Dance"
                      layout="fill"
                      objectFit="cover"
                      className="rounded"

                    />
                  </a>
                </div>
              </motion.div>


              <motion.div variants={textVariants} className="space-y-4">
                {items.map((item, index) => (
                  <div key={index}>
                    <div
                      className="cursor-pointer flex items-center justify-between"
                      onClick={() => handleItemClick(index)}
                    >
                      <strong className="primary-font titless hover:text-gray-700 transition-colors duration-300">
                        {item.name}
                      </strong>

                      {/* Arrow Icon with rotation animation */}
                      <motion.div
                        initial={{ rotate: 0 }} // Initial rotation
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }} // Rotate 180° when expanded
                        transition={{ duration: 0.3, ease: 'easeInOut' }} // Smooth rotation
                      >
                        <span className="text-xl primary-font titless hover:text-gray-700 transition-colors">↓</span>
                      </motion.div>
                    </div>

                    <motion.div className="h-px html-background mt-1" variants={dividerVariants} />

                    {/* Preload images */}
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="hidden" // Hidden preload images
                      priority // Ensure they load during page load
                    />

                    {/* Conditionally render the image for the expanded item with animations */}
                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ maxHeight: 0, opacity: 0 }} // Start with zero maxHeight and opacity
                          animate={{ maxHeight: 500, opacity: 1 }} // Animate to maxHeight and full opacity
                          exit={{ maxHeight: 0, opacity: 0 }} // Animate back to zero maxHeight and opacity
                          transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth animation for both open and close
                          className="mt-2 overflow-hidden" // Overflow hidden to prevent overflow during animation
                        >
                          <motion.div
                            style={{ borderRadius: 50 }}
                            whileTap={{ scale: 1.15, zIndex: 999, cursor: 'pointer' }} // Add this for hover effect
                            whileHover={{ scale: 1.15, zIndex: 999, cursor: 'pointer' }} // Add this for hover effect
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              className="w-full h-auto"
                              onClick={() => handleImageClick(item.link)} // Handle image click
                            />
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>


            </div>

          </motion.div>

          <motion.div
            className="background-secondary  rounded-lg p-6 md:col-span-2 flex items-center justify-center"
            variants={itemVariants}
          >
            {/* <motion.button variants={textVariants} className="primary-font text-xl font-semibold"> */}
            <LogoCarousel />

            {/* </motion.button> */}
          </motion.div>

          <motion.div
            className="background-secondary  rounded-lg p-6 flex items-center justify-center space-x-4"
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
                className="primary-font"
                variants={symbolVariants}
                whileTap={{ scale: 1.2 }}
                whileHover={{ scale: 1.2 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={24} className='secondary-font' />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}