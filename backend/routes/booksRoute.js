import { Book } from "../models/bookstore.model.js";
import { Router } from "express";
const router = Router();
router.post("/", async (req, res) => {
  const { title, author, yearOfPublish } = req.body;
  try {
    if (!title || !author || !yearOfPublish) {
      return res.status(400).json({ message: "all feilds are mandatory" });
    }
    const newBook = {
      title,
      author,
      yearOfPublish,
    };
    const book = await Book.create(newBook);
    return res.status(200).send(book);
  } catch (error) {
    return res.status(400).json({ message: "problem in uploading a book" });
  }
});

router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({ length: books.length, data: books });
  } catch (error) {
    return res.status(400).json({ message: "error in getting books" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      return res.status(400).json({ message: "book is not found" });
    }
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    return res.status(400).json({ message: "error in getting books" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    // if (!id) {
    //   return res.status(400).json({ message: "provide a correct id" });
    // }
    const { title, author, yearOfPublish } = req.body;
    if (!title || !author || !yearOfPublish) {
      return res.status(400).json({ message: "unable to update a book" });
    }

    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(400).json({ message: "unable to update a book" });
    }
    return res.status(200).send({ message: "book updated successfully" });
  } catch (error) {
    return res.status(400).json({ messange: "can't update a book" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(400).json({ message: "provide a correct id" });
    }
    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      return response.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json({ message: "book deleted Successfully" });
  } catch (error) {
    return res.status(400).json({ message: "unable to delete a book" });
  }
});

export default router;
