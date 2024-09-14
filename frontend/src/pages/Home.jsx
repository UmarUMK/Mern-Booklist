import React, { useEffect, useState } from "react";
import { Info, Edit, Trash2, Plus, Loader, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
// import { Alert, AlertDescription } from "@/components/ui/alert";
import Spinner from "../component/spinner";

const BooksTable = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:4000/books");
        setBooks(res.data.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching books:", error);
        setError("Failed to fetch books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div variant="destructive" className="m-4">
        <div>{error}</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
        className="container mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl font-bold text-gray-800 flex items-center align-middle"
            >
              <BookOpen size={39} className="mr-2 text-pink-500" /> Books List
            </motion.h1>
            <Link to={`/books/create-books`}>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgb(255,0,0)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
              >
                <Plus size={20} className="mr-2" /> Add Book
              </motion.button>
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-400 to-pink-500 text-white">
                <tr>
                  {["No", "Title", "Author", "Publish Year"].map((header) => (
                    <th
                      key={header}
                      className="px-6 py-3  text-xs font-medium uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                  <th className="px-6 py-3  text-xs font-medium uppercase tracking-wider text-left">
                    OPERATIONS
                  </th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {books.map((book, index) => (
                    <motion.tr
                      key={book._id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-white even:bg-gray-50 hover:bg-pink-50 transition-colors duration-300"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {book.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {book.author}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {book.yearOfPublish}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          {[
                            {
                              to: `/books/details/${book._id}`,
                              icon: Info,
                              color: "blue",
                            },
                            {
                              to: `/books/edit/${book._id}`,
                              icon: Edit,
                              color: "green",
                            },
                            {
                              to: `/books/delete/${book._id}`,
                              icon: Trash2,
                              color: "red",
                            },
                          ].map(({ to, icon: Icon, color }) => (
                            <Link key={to} to={to}>
                              <motion.button
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className={`text-${color}-600 hover:text-${color}-900 transition duration-300 ease-in-out`}
                              >
                                <Icon size={18} />
                              </motion.button>
                            </Link>
                          ))}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BooksTable;
