const { gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
 
  type Movie {
    title: String
    year: Int,
  }

  type Review {
      author: String
      title: String
      body: String
  }

  type Query {
    movies: [Movie]
  }
`;

module.exports = typeDefs;