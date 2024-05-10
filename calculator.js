const http = require("http");
const simp = require("simple-programs");

const fact = simp.factorial(5);

console.log(fact)

http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("irasubiza saly nelson && mukama");
    res.end();
  })
  .listen(3000);
