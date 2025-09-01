import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "gray" | "gradient";
  padding?: "sm" | "md" | "lg";
  animated?: boolean;
}

export const Section = ({
  children,
  className = "",
  background = "white",
  padding = "md",
  animated = true,
}: SectionProps) => {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-to-br from-blue-600 to-blue-800",
  };

  const paddingClasses = {
    sm: "py-8",
    md: "py-16",
    lg: "py-20",
  };

  const classes = `
    ${backgroundClasses[background]}
    ${paddingClasses[padding]}
    ${className}
  `;

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  if (animated) {
    return (
      <motion.section
        className={classes}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
          {children}
        </div>
      </motion.section>
    );
  }

  return (
    <section className={classes}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>{children}</div>
    </section>
  );
};
