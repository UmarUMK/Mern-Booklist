import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../component/BackButton";

const Detail = () => {
  const { id } = useParams();
  const [books, setBooks] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:4000/books/${id}`).then((res) => {
      setBooks(res.data);
    });
  }, []);
  return (
    <div>
      <BackButton />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-lg p-6 max-w-md mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="flex justify-center mb-6"
        >
          <BookOpen className="text-blue-500" size={48} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl font-bold text-center text-gray-800 mb-4"
        >
          {books.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg text-gray-600 mb-2">By {books.author}</p>
          <p className="text-md text-gray-500">
            Published in {books.yearOfPublish}
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 border-t border-gray-200 pt-4"
        >
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
            Read More
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Detail;
