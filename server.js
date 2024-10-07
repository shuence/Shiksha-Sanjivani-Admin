const express = require("express");
const cors = require("cors");
const cityRoutes = require("./routes/cityRoutes");
const schoolRoutes = require("./routes/schoolRoutes");
const studentRoutes = require("./routes/studentRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const authorityRoutes = require("./routes/authorityRoutes");
const analysisRoutes = require("./routes/analysisRoute");
const reasonRoutes = require("./routes/reasonRoutes");
const app = express();

//dbconnection
require("./config/dbconfig").getDbconnection();

// CORS options
const corsOptions = {
  origin: "https://shikshasanjivaniadmin.netlify.app", // Allow only this origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  credentials: true, // Allow credentials (if needed, like cookies or auth headers)
};

//middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cors(corsOptions)); // Apply the CORS options

app.use("/", analysisRoutes);
app.use("/", cityRoutes);
app.use("/", schoolRoutes);
app.use("/", studentRoutes);
app.use("/", userRoutes);
app.use("/", adminRoutes);
app.use("/", authorityRoutes);
app.use("/", reasonRoutes);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(9999, () => {
  console.log("server started at 9999");
});
