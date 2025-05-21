'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BurgerMenu } from '../comps/burger-menu'
import { NavBar } from '../comps/nav-bar'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from "@formspree/react"

export default function Contact() {
  const [expanded] = useState(true)
  const [showModal, setShowModal] = useState(false) // For modal visibility
  const [modalMessage, setModalMessage] = useState('') // For modal content
  const [countdown, setCountdown] = useState(5) // Countdown timer state
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null) // Timer state
  const router = useRouter()
  const [state, handleSubmit] = useForm("xgvwbejl");

  const handleCustomSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await handleSubmit(e);

    if (!state.errors || state.succeeded) {
      setModalMessage("Message sent successfully!");
    } else {
      setModalMessage("Failed to send message. Please try again.");
    }

    setShowModal(true); // Show modal with the message
    startCountdown(); // Start the countdown
  };

  // Start the countdown and update every second
  const startCountdown = () => {
    setTimer(setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timer as NodeJS.Timeout); // Stop the timer
          closeModal();
          return 0;
        }
        return prev - 1;
      });
    }, 1000));
  };

  // Handle modal close and navigate back to home page
  const closeModal = () => {
    router.push('/'); // Navigate to the home page
  };

  return (
    <div className="html-background min-h-screen flex flex-col">
      <motion.div
        className="flex-grow flex flex-col p-4 md:p-8"
        variants={{ initial: { gap: '0px', gridTemplateColumns: '1fr' }, expanded: { gap: '0px', gridTemplateColumns: 'repeat(3, 1fr)' } }}
        initial="initial"
        animate={expanded ? "expanded" : "initial"}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="background-primary rounded-lg p-6 flex justify-between items-center mb-4"
          style={{ height: '100px', zIndex: '999' }}
        >
          <NavBar />
          <BurgerMenu />
        </motion.div>
        <motion.div
          className="background-primary rounded-lg p-6 flex items-center justify-center space-x-4 mb-4"
        >
          {[{ Icon: Github, link: "https://github.com/samielmadani" }, { Icon: Linkedin, link: "https://linkedin.com/in/samielmadani" }, { Icon: Mail, link: "mailto:sami.elmadani@outlook.com" }]
            .map(({ Icon, link }, index) => (
              <motion.a
                key={index}
                href={link}
                className="primary-font"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.2 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={24} />
              </motion.a>
            ))}
        </motion.div>

        <motion.div
          className="background-primary rounded-lg p-6 flex-grow flex flex-col mb-4"
        >
          <motion.h2 className="text-2xl font-semibold mb-4 primary-font headerr">
            Contact Me
          </motion.h2>
          <motion.form
            onSubmit={handleCustomSubmit}
            className="space-y-4 flex-grow flex flex-col"
          >
            <div>
              <label htmlFor="name" className="block mb-1 primary-font font-your-custom-font">Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 rounded-lg secondary-font html-background" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 primary-font font-your-custom-font">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 rounded-lg secondary-font html-background" required />
            </div>
            <div className="flex-grow">
              <label htmlFor="message" className="block mb-1 primary-font font-your-custom-font">Message</label>
              <textarea id="message" name="message" className="w-full p-2 rounded-lg h-full secondary-font html-background" style={{ minHeight: '200px' }} required></textarea>
            </div>
            <button type="submit" className="html-background text-white px-4 py-2 rounded-lg secondary-font">(っ'-')╮=͟͟͞͞📨</button>
          </motion.form>
        </motion.div>

      </motion.div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="background-primary p-6 rounded-lg shadow-lg max-w-sm w-full flex flex-col items-center">
            <p className="text-lg primary-font headerr">{modalMessage}</p>
            <p className="text-sm text-right primary-font headerr">{`Going to home in ${countdown}...`}</p>
            <button
              onClick={closeModal}
              className="html-background secondary-font headerr px-4 py-2 rounded-lg mt-4"
            >
              Go now 
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
