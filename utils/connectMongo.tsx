import { MONGO_DB_URI } from "@/app/constants";
import mongoose from "mongoose";

const DATABASE_URL = MONGO_DB_URI;

if (!DATABASE_URL) {
    throw new Error("Please define the DATABASE_URL environment variable inside .env.local");
}

const connectMongo = async () => mongoose.connect("mongodb+srv://mpushparaja13:YUGH23FiwYlLWQ5b@cluster0.ayqti.mongodb.net/blog-db");

export default connectMongo;