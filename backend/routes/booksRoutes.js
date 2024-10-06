import express from "express";

const router = express.Router();
import {Book} from "../models/bookModel.js";
// Add new book to DB
router.post("/", async (req, res) => {
    try {
      if (
        !req.body.title ||
        !req.body.author ||
        !req.body.description ||
        !req.body.publishedYear
      ) {
        return res.status(400).send("All fields are required");
      }
  
      const newBook = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        publishedYear: req.body.publishedYear,
      };
  
      const book = await Book.create(newBook);
      return res.status(201).send(book); // Send back the created book
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });
  
  
  //Get all books from DB
  
  router.get("/",async (req, res) => {
    try {
      const books = await Book.find({});
      return res.status(200).json({
          count: books.length,
          data: books
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  })
  
  
  // gety specific book from DB
  
  router.get("/:id",async (req, res) => {
      try {
          const {id} = req.params;
        const book = await Book.findById(id);
        return res.status(200).json({
            count: book.length,
            data: book
        });
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
    })
  
  
  
  // Update book in DB
  
  router.put("/:id",async (req, res) => {
      try {
         if(
          !req.body.title ||
          !req.body.author ||
          !req.body.description ||
          !req.body.publishedYear
         ){
          return res.status(400).send("All fields are required");
         }
         const {id} = req.params;
         const result = await Book.findByIdAndUpdate(id, req.body);
          if(!result){
              return res.status(404).send("Book not found");
          }
          return res.status(200).send("Successfully updated");
  
        } catch (err) {
          console.log(err);
          res.status(500).send(err);
        }
   })
  
  // Book delete
  router.delete("/:id",async (req, res) => {
      try {
          const {id} = req.params;
          const result = await Book.findByIdAndDelete(id);
          if(!result){
              return res.status(404).send("Book not found");
          }  
          return res.status(200).send("Successfully deleted");
      } catch (err) {
          console.log(err);
          res.status(500).send(err);
      }
   })



export default router