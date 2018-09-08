import { makeExecutableSchema } from "graphql-tools";

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
export const Schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
export function context(headers, secrets) {
  return {
    headers,
    secrets
  };
}
