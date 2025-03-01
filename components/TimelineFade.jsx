'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HoverIcon from "./HoverIcon";

// Timeline Marker Component
const TimelineMarker = () => {
  return (
    <motion.div
      className="relative z-10 h-5 w-5 rounded-full border-4 border-white flex items-center justify-center"
      initial={{ backgroundColor: "rgb(31, 41, 55)" }} // bg-gray-800
      whileHover={{ backgroundColor: "rgb(255, 255, 255)" }} // bg-white
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="h-1 w-6 bg-white"
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0 }} // Hide the small bar when hovered
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};
const TimelineItem = ({ title, business, description, hoverText, logoPath, icons }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="mb-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex group items-left">
        <TimelineMarker />
        <div className="flex-1 ml-4 z-10 font-medium">
          <TimelineContent
            title={title}
            business={business}
            description={description}
            hoverText={hoverText}
            logoPath={logoPath}
            icons={icons}
            isHovered={isHovered}
          />
        </div>
      </div>
    </li>
  );
};

const TimelineContent = ({ title, business, description, hoverText, logoPath, icons, isHovered }) => {
  return (
    <div className="relative flex items-left">
      {/* Timeline Card */}
      <motion.div
        className="relative order-1 space-y-2 bg-gray-800 rounded-lg shadow-lg transition-ease lg:w-5/12 px-6 py-4"
        animate={{ scale: isHovered ? 1.02 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {/* Header with Title, Business, and Logo */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="mb-1 font-bold text-white text-2xl">{title}</h3>
            <p className="text-sm text-gray-100">{business}</p>
          </div>
          {logoPath && (
            <div className="h-10 w-10">
              <Image
                src={logoPath}
                alt="Company Logo"
                width={70}
                height={70}
                className="object-contain rounded-md"
              />
            </div>
          )}
        </div>
        <hr />
        <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
          {description}
        </p>
      </motion.div>

      {/* Hover Icons that Spawn One at a Time (Horizontally) */}
      <div className="relative w-full order-2">
        {isHovered && (
          <div className="absolute left-full ml-4 flex space-x-3 h-16 items-center">
            {icons.map((icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.15 }}
              >
                <HoverIcon logo={icon.logo} title={icon.title} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


const TimelineFade = () => {
  const timelineData = [
    {
      title: "Full-stack Developer",
      business: "Dossiay Inc. (January 2025 - Present)",
      description:
        "Connected businesses and users together by connecting the React Native application to the online database.",
      hoverText: "Worked on API integrations and performance optimizations.",
      logoPath: "/images/logo.png", // Static file from public folder
      icons: [
        { logo: "/images/react.png", title: "React" },
        { logo: "/images/aws.png", title: "AWS" },
        { logo: "/images/database.png", title: "Database" },
      ],
    },
    {
      title: "Software Engineer",
      business: "Tech Corp (2024 - Present)",
      description:
        "Worked on full-stack development using React and AWS services.",
      hoverText: "Handled API integration and database design.",
      logoPath: "/images/logo2.png",
      icons: [
        { logo: "/images/javascript.png", title: "JavaScript" },
        { logo: "/images/nextjs.png", title: "Next.js" },
        { logo: "/images/graphql.png", title: "GraphQL" },
      ],
    },
  ];

  return (
    <div className="p-10">
      <div className="relative">
        <div
          className="border-r-4 border-white absolute h-full top-0"
          style={{ left: "9px" }}
        ></div>
        <ul className="list-none m-0 p-0">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.title}
              business={item.business}
              description={item.description}
              hoverText={item.hoverText}
              logoPath={item.logoPath}
              icons={item.icons}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineFade;
