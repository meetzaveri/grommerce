const { makeExecutableSchema } = require("graphql-tools");

const TEMP_USER = {
  _id: "1",
  email: "reeversedev@gmail.com"
};

const typeDefs = `
  type Query {
    hello: String
  }
`;
const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return "Hello World";
    }
  }
};
const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers
});
module.exports = function context(headers, secrets) {
  return {
    headers,
    secrets
  };
};
