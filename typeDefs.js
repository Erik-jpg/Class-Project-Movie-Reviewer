const { gql } = require('apollo-server');

const typeDefs = gql`
 
  type Movie {
    _id: ID
    title: String
    year: Int,
    reviews: [Review]
  }

  type Review {
      author: String
      title: String
      body: String
  }

  input ReviewInput {
    author: String
      title: String
      body: String
  }

  type Query {
    movies: [Movie]
  }

  type Mutation {
    addMovie(title: String!, year: Int!): Movie
  }

  // type Mutation {
  //   addReview(movieId: ID!, author: String!, title: String!, body: String!):Movie
  // }

`;

module.exports = typeDefs;