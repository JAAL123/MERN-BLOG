import app from "./app.js";
import { connectDB } from "./db.js";

const PORT = process.env.PORT || 4000;

connectDB();
app.listen(PORT);
console.log(`Api running on port ${PORT}`);
