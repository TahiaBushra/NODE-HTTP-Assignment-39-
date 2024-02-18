// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Assalamualaikum! Welcome to my server");
// });

// const PORT = 3000;

// server.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  const jsonRes = {
    message: "Assalamualaikum! How are you today ?",
    timestamp: new Date().toLocaleDateString(),
  };
  res.end(JSON.stringify(jsonRes));
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
