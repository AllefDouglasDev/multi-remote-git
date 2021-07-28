const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.send("Hello, world");
});

app.listen(PORT, () => console.log(`App running at http://localhost:${PORT}`));
