import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../component/BackButton";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [yearOfPublish, setYearOfPublish] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/books/${id}`)
      .then((res) => {
        setAuthor(res.data.author);
        setYearOfPublish(res.data.yearOfPublish);
        setTitle(res.data.title);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      yearOfPublish,
    };

    axios
      .put(`http://localhost:4000/books/${id}`, newBook)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <motion.div
      className="max-w-md mx-auto max-h-max bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-xl shadow-xl overflow-hidden md:max-w-2xl m-4 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <BackButton />
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
        Edit Book
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
        <div className="relative">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1 text-left"
          >
            Title
          </label>
          <motion.input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-3 py-3 bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100 transition duration-200 shadow-sm"
            placeholder="Enter book title"
            whileFocus={{ scale: 1.02 }}
          />
        </div>
        <div className="relative">
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700 mb-1 text-left"
          >
            Author
          </label>
          <motion.input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="w-full px-3 py-3 bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100 transition duration-200 shadow-sm"
            placeholder="Enter author name"
            whileFocus={{ scale: 1.02 }}
          />
        </div>
        <div className="relative">
          <label
            htmlFor="publishYear"
            className="block text-sm font-medium text-gray-700 mb-1 text-left"
          >
            Year of Publication
          </label>
          <motion.input
            type="number"
            id="publishYear"
            value={yearOfPublish}
            onChange={(e) => setYearOfPublish(e.target.value)}
            required
            min="1000"
            className="w-full px-3 py-3 bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100 transition duration-200 shadow-sm"
            placeholder="Enter publication year"
            whileFocus={{ scale: 1.02 }}
          />
        </div>
        <div>
          <motion.button
            type="submit"
            className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Make Changes
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default CreateBook;
