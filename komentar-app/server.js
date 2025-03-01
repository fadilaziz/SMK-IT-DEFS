require("dotenv").config(); // Load environment variables dari .env
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000; // Gunakan PORT dari Railway jika ada

// Middleware
app.use(cors());
app.use(express.json());

// Koneksi ke MongoDB (Menggunakan URI dari .env)
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Terhubung ke MongoDB");
    } catch (error) {
        console.error("❌ Koneksi MongoDB gagal:", error);
        process.exit(1);
    }
}
connectDB();

// Buat model untuk komentar
const CommentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    comment: { type: String, required: true },
}, { timestamps: true });

const Comment = mongoose.model("Comment", CommentSchema);

// Endpoint untuk menyimpan komentar
app.post("/comments", async (req, res) => {
    try {
        const { name, email, comment } = req.body;
        if (!name || !email || !comment) {
            return res.status(400).json({ error: "Semua field harus diisi" });
        }

        const newComment = new Comment({ name, email, comment });
        await newComment.save();

        res.status(201).json({ message: "✅ Komentar berhasil ditambahkan!" });
    } catch (error) {
        res.status(500).json({ error: "❌ Terjadi kesalahan saat menambahkan komentar" });
    }
});

// Endpoint untuk mengambil semua komentar
app.get("/comments", async (req, res) => {
    try {
        const comments = await Comment.find().sort({ createdAt: -1 });
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: "❌ Terjadi kesalahan saat mengambil komentar" });
    }
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`🚀 Server berjalan di port ${PORT}`);
});
