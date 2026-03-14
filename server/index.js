const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const resumeData = require("./resumeData");
const { createResumeApiError } = require("./errorMessages");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/resume", (req, res) => {
  res.json(resumeData);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

app
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
  .on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      console.error(`\n${createResumeApiError(PORT, error)}\n`);
      process.exit(1);
    }

    console.error("Server error:", error);
    process.exit(1);
  });
