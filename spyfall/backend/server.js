var app = require("express")();
var http = require("http").createServer(app);

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

http.listen(5000, () => {
  console.log("Server started on *:5000");
});
