const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/about") {
        res.end("<h1> About Page </h1>")
    }
    else if (req.url === "/contact") {
        res.end("<h1> Contact Me </h1>")
    }
    else if (req.url === "/") {
        res.end("<h1> Home Page </h1>")
    }
    else
        res.end("<h1> 404 Page Not Found </h1>")
    console.log("server is running...");
})

server.listen(5000,() => {
    console.log("server is listening on port 5000...");
});