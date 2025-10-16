const express = require("express");
const app = express();

const path = require("node:path");




app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));






app.get("/", (request, response) => {

});

app.get("/new", (request, response) => {

});

app.post("/new", (request, response) => {

});



app.use((err, req, res, next) => {
    res.status(404).send("404: Page Not Found");
});





const PORT = 3000;

app.listen(PORT, () => {
    console.log("Listening for PORT number", PORT);
});