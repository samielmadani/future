'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { BurgerMenu } from './comps/burger-menu'
import profilePic from './images/me2.png'
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
    { name: 'Financial Literacy', link: 'https://linkedin.com/in/samielmadani', image: zonate },
    { name: 'Riba', link: 'https://www.facebook.com/muslimopenspace/', image: mos },
    { name: 'Saving', link: 'https://www.canterburymusa.com/', image: ucmusa },
    { name: 'Starting a business', link: 'https://github.com/samielmadani', image: monop },
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
              className="text-2xl font-semibold primary-font leading-10 headerr"
              style={{ fontSize: '50px' }}
            >
              Sara, Mazen, Saad, Sami, & Sofea <br /> Financial Literacy Program
            </motion.h1>

          </motion.div>

          <motion.div
            className="background-secondary rounded-lg p-6 flex items-center min-h-[300px]"
            variants={itemVariants}
          >
            <div className="absolute inset-0 overflow-y-scroll scrollbar-hidden p-4"> {/* Added padding here */}
              <motion.p variants={textVariants} className="secondary-font">
                <strong className="text-2xl font-bold secondary-font">Our Muslim youth are growing up with little to no financial education.</strong><br /><br />
                <span className="font-medium text-sm font-bold secondary-font">
                  <strong>Problem Statement</strong>
                  <ul className="list-disc ml-6">
                    <li>🔹 5-Year Plan (Foundation Phase)</li>
                    <li>🔹 10-Year Plan (Growth Phase)</li>
                    <li>🔹 30-Year Plan (Legacy Phase)</li>
                  </ul>
                </span>
                <br />
                <strong className="text-xl font-bold secondary-font">The Plan</strong><br />
                <span className="text-sm font-bold secondary-font">
                  Build awareness and develop the ecosystem<br />
                  Develop infrastructure & financial community<br />
                  Launch the first Islamic Bank in New Zealand<br />
                  <br />
                  <strong>Digital content:</strong> TikTok & Instagram series on halal money tips, taxes, investing, etc.<br />
                  <strong>Workshops/Seminars:</strong> In masjids, schools, community centres.<br />
                  <strong>Financial Starter Packs:</strong> PDF toolkits or web apps teaching how to:
                  <ul className="list-disc ml-6">
                    <li>Open a halal business</li>
                    <li>Budget effectively</li>
                    <li>Understand taxes</li>
                    <li>Start small investments</li>
                  </ul>
                  <strong>Monthly interviews:</strong> Elders sharing their journey on how they made it.<br />
                  <strong>Create & launch surveys:</strong> Understand youth needs and segment audience.<br />
                  <strong>Start an investment co-op or fund:</strong> A halal fund for parents to contribute for their kids.<br />
                  <strong>Youth-led businesses:</strong> Incubate startups, run business bootcamps.<br />
                  <strong>Mentor matching:</strong> Link youth to successful Muslim professionals.<br />
                  <strong>Micro-scholarships:</strong> Help Muslim youth learn about finance, coding, trade skills.<br />
                  <strong>Train-the-trainer model:</strong> Equip 50+ young Muslims to become certified community educators.<br />
                  <strong>Develop roadmap now:</strong> Research regulatory requirements, potential funding models.<br />
                  <strong>Build a community of consistent savers/investors.</strong><br />
                  <strong>Grow a generation with strong financial acumen ready to lead and govern such an institution.</strong><br />
                  <strong>Set up a waqf (Islamic endowment) to fund future community financial initiatives.</strong>
                </span>
                <br /><br />
                <strong className="text-xl font-bold secondary-font">💡 How Do We Fund This, Without Relying on Donations Forever?</strong><br />
                <ol className="list-decimal ml-6">
                  <li>
                    <strong>Low-Cost Membership:</strong> Imagine if just 5,000 Muslims gave $2 a month. That’s $10,000 coming in every single month — enough to run programs, pay content creators, and grow.
                  </li>
                  <li>
                    <strong>Sponsored Content:</strong> We create valuable, halal financial content on TikTok, Instagram, YouTube — and work with ethical Muslim-owned brands to sponsor it.
                  </li>
                  <li>
                    <strong>Workshops & Events:</strong> Run practical money workshops — things like “How to Start a Halal Side Hustle” or “First-Time Home Buying Without Riba.” Charge a small fee or find local Muslim businesses to sponsor them.
                  </li>
                  <li>
                    <strong>Business Incubator:</strong> We help young Muslims start small businesses — in return, we take a tiny share of profit or offer mentorship-for-equity. It’s win-win: they grow, and so do we.
                  </li>
                </ol>
                <br />
                <strong>Target Platforms</strong><br />
                <br />
                <strong>Content Types:</strong>
                <ul className="list-disc ml-6">
                  <li>"Did You Know?" Halal finance shorts</li>
                  <li>"Muslim Millionaire Stories" (Elder interviews)</li>
                  <li>"Street Interviews": Ask Muslims what they wish they were taught</li>
                  <li>"15-second business tip of the day"</li>
                  <li>Real-life budgeting & saving challenges</li>
                </ul>
                <br />
                <strong>Engagement Strategy</strong><br />
                <br />
                <strong>Outcomes & Measures</strong><br />
                <table className="w-full text-left mb-2 border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b p-2">Outcome</th>
                      <th className="border-b p-2">Measurable by</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2">Increased financial literacy</td>
                      <td className="p-2">Pre/post surveys, workshop quizzes</td>
                    </tr>
                    <tr>
                      <td className="p-2">Engaged youth</td>
                      <td className="p-2"># of TikTok followers, DMs, event signups</td>
                    </tr>
                    <tr>
                      <td className="p-2">Investment habits</td>
                      <td className="p-2"># of parents committing to $15/week fund</td>
                    </tr>
                    <tr>
                      <td className="p-2">Business acumen</td>
                      <td className="p-2"># of youth startups launched or mentored</td>
                    </tr>
                    <tr>
                      <td className="p-2">Social inclusivity</td>
                      <td className="p-2">% of disengaged Muslims feeling welcomed (via survey)</td>
                    </tr>
                    <tr>
                      <td className="p-2">Infrastructure building</td>
                      <td className="p-2">Progress toward Islamic finance institution roadmap</td>
                    </tr>
                  </tbody>
                </table>
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
            {/* <LogoCarousel /> */}

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