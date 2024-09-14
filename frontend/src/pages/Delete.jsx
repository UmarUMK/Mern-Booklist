import React, { useState } from "react";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../component/spinner";

const Delete = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:4000/books/${id}`)
      .then(() => {
        navigate("/");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleCancel = () => {
    navigate("/");
  };
  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div className="bg-white rounded-lg p-6 max-w-sm w-full">
          <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
          <p className="text-gray-600 mb-6">
            Do you really want to delete this item?
          </p>
          <div className="flex justify-end space-x-2">
            <button
              onClick={handleCancel}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delete;
