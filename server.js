import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postRoutes from "./routes/postRoutes.js"

dotenv.config();

const app = express();
app.use(express.json());
app.use('/posts',postRoutes)
app.get('/',(req,res)=>{
  res.send("Post API is Running")
})
const port = process.env.PORT;


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
