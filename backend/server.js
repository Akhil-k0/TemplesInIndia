const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let database;

const initializeDBandServer = async () => {
  try {
    database = await open({
      filename: path.join(__dirname, "users.db"),
      driver: sqlite3.Database,
    });

    const dbInstance = await database.getDatabaseInstance();

    dbInstance.serialize(() => {
      dbInstance.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
      )`);
    });

    app.post("/api/signup", async (req, res) => {
      const { name, email, password } = req.body;
      console.log("Received signup request:", req.body);

      const hashedPassword = await bcrypt.hash(password, 10);

      dbInstance.run(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashedPassword],
        (err) => {
          if (err) {
            return res.status(500).json({ error: "Failed to create user" });
          }
          res.status(201).json({ message: "User created successfully" });
        }
      );
    });

    app.post("/api/login", async (req, res) => {
      const { email, password } = req.body;

      dbInstance.get(
        "SELECT * FROM users WHERE email = ?",
        [email],
        async (err, row) => {
          if (err) {
            return res.status(500).json({ error: "Internal Server Error" });
          }
          if (!row) {
            return res.status(401).json({ error: "Invalid credentials" });
          }

          const passwordMatch = await bcrypt.compare(password, row.password);
          if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
          }

          const token = jwt.sign({ id: row.id, email: row.email }, "secret", {
            expiresIn: "1h",
          });
          console.log(token);
          res.json({ token });
        }
      );
    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Database error: ${error.message}`);
    process.exit(1);
  }
};

initializeDBandServer();
