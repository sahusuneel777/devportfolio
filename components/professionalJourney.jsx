import React from "react";
import { motion } from "motion/react";

const journeyData = [
  {
    year: "Oct 2024 – Present",
    role: "Senior Software Engineer",
    company: "KIMS Hospitals",
    description:
      "Leading mobile app development and contributing as part of the core team enabling the KIMS EHR platform(iOS & Android) to evolve into a scalable SaaS product.",
    link: "https://play.google.com/store/apps/details?id=com.kims.doctors",
  },
  {
    year: "Jun 2022 – Sep 2024",
    role: "Software Developer",
    company: "Aurora e-Labs",
    description:
      "Served as perfect the launchpad for my professional career. Built web & mobile applications from scratch using (React & React Native), contributing to product architecture and feature development.",
    link: "https://apps.apple.com/in/app/kimscrm/id6751717113",
  },
];

const Journey = () => {
  return (
    <motion.div
      id="journey"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-20 scroll-mt-20"
    >
      {/* Title */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Path
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Professional Journey
      </motion.h2>

      {/* Timeline */}
      <div className="relative mt-16">
        <div className="absolute left-4 top-0 h-full w-[2px] bg-gray-300 dark:bg-gray-600"></div>

        <div className="space-y-12">
          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex items-start gap-6"
            >
              {/* circle */}
              <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black text-xs font-bold">
                {index + 1}
              </div>

              {/* card */}
              <div className="bg-white dark:bg-darkHover border border-gray-300 dark:border-gray-700 rounded-lg p-6 w-full hover:shadow-lg transition duration-300">
                <span className="text-sm text-gray-500">{item.year}</span>

                <h3 className="text-xl font-semibold mt-1 dark:text-white">
                  {item.role}
                </h3>

                <h4 className="text-sm text-gray-500 mb-2">{item.company}</h4>

                <p className="text-gray-600 dark:text-white/80 text-sm mb-4">
                  {item.description}
                </p>

                {/* Button */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium px-4 py-2 rounded-md border border-gray-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                >
                  See My Work →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Journey;