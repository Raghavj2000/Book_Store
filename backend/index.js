import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoutes.js'   
import cors from 'cors'    

const app = express();
app.use(express.json()); // To parse JSON bodies

// MiddleWare for handling CORS
app.use(cors());
// Allow customk origins
// app.use(
//     cors({
//       origin: "http://localhost:3000",
//       methods: ["GET", "POST", "PUT", "DELETE"],
//       credentials: true,
//       allowedHeaders: ["Content-Type"],
//     })
// )

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("LOl");
});


app.use('/books',booksRoute)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("database connected");
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
