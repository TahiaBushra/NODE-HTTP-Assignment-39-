// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Assalamualaikum! Welcome to my server");
// });

// const PORT = 3000;

// server.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });

//   const jsonRes = {
//     message: "Assalamualaikum! How are you today ?",
//     timestamp: new Date().toLocaleDateString(),
//   };
//   res.end(JSON.stringify(jsonRes));
// });

// const PORT = 3000;

// server.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });

//

// const http = require("http");

// const server = http.createServer((req, res) => {
//   const url = req.url;

//   switch (url) {
//     case "/":
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end("Welcome to home");
//       break;
//     case "/about":
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end("Welcome to about");
//       break;
//     case "/contact":
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end("Welcome to contact");
//       break;
//     default:
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("Page not found");
//   }
// });

// const PORT = 8080;
// server.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });

console.log("Start");

process.nextTick(() => {
  console.log("Task 1");
});

console.log("End");

process.nextTick(() => {
  console.log("Task 2");
});
