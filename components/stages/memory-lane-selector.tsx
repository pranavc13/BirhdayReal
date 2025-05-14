"use client"

import { motion } from "framer-motion"
import { User } from "lucide-react"


type MemoryLaneSelectorProps = {
  memoryLaneNames: string[]
  onSelectLane: (laneName: string) => void
  handleBackToCategories: () => void
}

const MemoryLaneSelector = ({ 
  memoryLaneNames, 
  onSelectLane,
  handleBackToCategories
}: MemoryLaneSelectorProps) => {

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Animation variants for items
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  }

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.button         
        className="absolute top-6 left-6 bg-gradient-to-br from-pink-400 to-purple-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2"         
        initial={{ x: -20, opacity: 0 }}         
        animate={{ x: 0, opacity: 1 }}         
        transition={{ delay: 0.5, type: "spring", stiffness: 300 }}         
        whileHover={{ scale: 1.05 }}         
        whileTap={{ scale: 0.95 }}         
        onClick={handleBackToCategories}       
      >         
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">           
          <path             
            fillRule="evenodd"             
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"             
            clipRule="evenodd"           
          />         
        </svg>         
        <span>Back To Activities</span>       
      </motion.button>

      <motion.div
        className="max-w-4xl w-full bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl border-2 border-pink-300"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 12 }}
      >
        <motion.div
          className="text-center text-5xl mb-4"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          🌟
        </motion.div>

        <motion.h1
          className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Welcome to Memory Lane
        </motion.h1>

        <motion.p
          className="text-center text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Choose a memory lane to explore cherished moments
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {memoryLaneNames.map((name) => (
            <motion.div
              key={name}
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectLane(name)}
              className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl cursor-pointer border-2 border-pink-200 hover:border-pink-400 transition-colors"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mb-4">
                  <User size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 capitalize">{name}</h3>
                <p className="text-gray-600 mt-2">Explore {name}'s memories</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default MemoryLaneSelector