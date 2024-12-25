import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
    const navigate= useNavigate();
  return (
    <div className="h-[100%] pt-[10px] bg-white text-black font-sans overflow-hidden relative">
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } }
        }}
        className="w-full text-center px-8"
      >
        <motion.img
        variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
        className='mx-auto h-[300px]'
        src='https://img.freepik.com/premium-vector/welcome-illustration_132971-116.jpg'></motion.img>
        <motion.h1 
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Welcome to <span className="text-gray-500">CloudBuddy</span>
        </motion.h1>
        {/* <motion.p 
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          className="text-xl md:text-2xl mb-8"
        >
          Your one-stop solution for seamless website hosting. Explore new horizons of simplicity and power.
        </motion.p> */}

        <motion.div 
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          className="py-6"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            <span className="text-gray-500">Announcement:</span> Deploy React & Vite Projects with One Click!
          </h2>
          <p className="text-lg md:text-xl">
            With CloudBuddy, hosting modern frameworks like React and Vite has never been easier. Experience the future of web development today.
          </p>
        </motion.div>

        <motion.div 
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          className="mt-2 flex flex-col md:flex-row items-center justify-center gap-6"
        >
          
          <motion.a
            whileHover={{ scale: 1.1 }}
            onClick={()=>{navigate("create")}}
            className="px-8 py-4 bg-transparent border border-gray-700 text-gray-700 font-semibold text-lg rounded-full hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-500 transition-all duration-300"
          >
            Deploy Now
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 0.2, scale: 1, x: [50, -50], y: [50, -50] }} 
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-10 right-10 w-96 h-96 bg-red-400 rounded-full filter blur-3xl opacity-30"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 0.2, scale: 1, x: [-50, 50], y: [-50, 50] }} 
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-30"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 0.2, scale: 1, x: [30, -30], y: [-30, 30] }} 
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/3 left-1/3 w-72 h-72 bg-gray-400 rounded-full filter blur-3xl opacity-30"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 0.2, scale: 1, x: [40, -40], y: [40, -40] }} 
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-20 left-1/4 w-80 h-80 bg-red-300 rounded-full filter blur-3xl opacity-30"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 0.2, scale: 1, x: [-40, 40], y: [-40, 40] }} 
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-300 rounded-full filter blur-3xl opacity-30"
      ></motion.div>
    </div>
  );
};

export default WelcomePage;
