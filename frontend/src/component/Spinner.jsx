import React from "react";

const Spinner = ({ size = "md", color = "blue" }) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  };

  const colorClasses = {
    blue: "border-blue-500",
    gray: "border-gray-500",
    green: "border-green-500",
    red: "border-red-500",
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 z-50">
      <div
        className={`
          ${sizeClasses[size] || sizeClasses.md}
          ${colorClasses[color] || colorClasses.blue}
          border-4 border-t-transparent rounded-full animate-spin
        `}
      />
    </div>
  );
};

export default Spinner;
