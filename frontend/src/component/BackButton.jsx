import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <>
      <Link to={"/"}>
        <button
          className="absolute top-4 left-4 p-2 flex items-center justify-center text-gray-600 hover:text-gray-900 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Go back"
        >
          <ArrowLeft size={24} />
        </button>
      </Link>
    </>
  );
};

export default BackButton;
