"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-4 sm:top-8 sm:left-8 flex items-center z-50 bg-black/20 backdrop-blur-sm rounded-xl p-2 sm:p-3"
    >
      <div className="w-16 h-8 sm:w-20 sm:h-10 relative flex items-center justify-center mr-2 sm:mr-3">
        <Image
          src="/logowhite.png"
          alt="Sozial Logo"
          width={80}
          height={40}
          className="w-16 h-6 sm:w-20 sm:h-8"
        />
      </div>
      <div className="text-left">
        <h3 className="text-sm sm:text-base font-bold text-white">Sozial</h3>
        <p className="text-xs text-gray-300">Digital Marketing Agency</p>
      </div>
    </motion.div>
  );
}
