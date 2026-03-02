const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// ✅ Define PORT (VERY IMPORTANT)
const PORT = process.env.PORT || 3000;

// 🔥 Connect to MongoDB (Correct way)
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Create Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// Create Model
const User = mongoose.model("User", userSchema);

// Save Route
app.post('/save', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.json({ message: "Data saved to MongoDB!" });
    } catch (error) {
        res.status(500).json({ message: "Error saving data" });
    }
});

// ✅ Test route (so Not Found won't happen)
app.get('/', (req, res) => {
    res.send("Server is running 🚀");
});

// ✅ Listen properly
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
