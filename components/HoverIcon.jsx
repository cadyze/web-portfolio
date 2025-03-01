"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HoverIcon = ({ logo, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }} // Slightly grows when hovered
      transition={{ duration: 0.2 }}
    >
      {/* Logo Image */}
      <Image
        src={logo}
        alt={title}
        width={60}
        height={60}
        className="object-contain rounded-md"
      />

      {/* Title appears on hover */}
      {isHovered && (
        <motion.p
          className="absolute top-full mt-2 text-white text-sm font-medium opacity-0"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.p>
      )}
    </motion.div>
  );
};

export default HoverIcon;
