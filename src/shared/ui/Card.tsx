import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = false,
  padding = "md",
}) => {
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const classes = `
    rounded-xl bg-white shadow-md
    ${
      hover
        ? `
          cursor-pointer transition-shadow
          hover:shadow-lg
        `
        : ""
    }
    ${paddingClasses[padding]}
    ${className}
  `;

  return <div className={classes}>{children}</div>;
};
