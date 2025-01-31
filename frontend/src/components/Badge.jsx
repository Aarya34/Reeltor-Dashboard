import React from "react";

const Badge = ({ children, className }) => {
    // This component is used to display a badge with a background color and rounded corners
  return (
    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
