// Importera paket
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const fruitsRouter = require("./routes/fruits.js");

// Konfiguration
const PORT = process.env.PORT || 1515;
const distPath = path.join(__dirname, "/../dist/");
console.log("distpath:", distPath);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(`${req.method}  ${req.url}  `, req.body);
  next();
});

// '/' -> dist/index.html'
app.use(express.static(distPath));
// '/img/hamster-14.jpg' -> './hamsterImages/hamster-14.jpg'
app.use("/img", express.static(path.join(__dirname, "/hamsterImages/")));

// Endpoints
app.use("/fruits", fruitsRouter);
// Saknas: /hamsters, /matches

// Övriga endpoints, för att fungera med React Router i frontend
app.all("*", (req, res) => {
  res.sendFile(distPath + "index.html");
});

app.listen(PORT, () => {
  console.log("Server listening on port ", PORT);
});
