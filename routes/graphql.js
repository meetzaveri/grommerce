const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("../models/schema");
const Router = express.Router();

Router.get("/", (req, res, next) => {
  console.log("Entered GraphQL.");
  expressGraphQL({
    schema: schema,
    graphiql: true
  });
});

module.exports = ("GraphQL", Router);
