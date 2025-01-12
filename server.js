import express from "express"

const app = express()

const port = 5000;
app.use(express.json())


// routes
app.get("/", (req, res) => {
    res.send("This is the homepage")
});


//listen to the server
app.listen(port, () => {
    console.log("Backend server running")
});