const express = require("express");
const graphQL = require("./routes/graphql");

const app = express();

app.use("/graphql", graphQL);

app.listen("4000", () => {
  console.log("Server running on 4000");
});
