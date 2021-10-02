const buildResolvers = db => ({
  Query: {
    movies: (parent, args, context) => 
    context.db.collection("movies").find({}).
    toArray(),
  },
  Mutation: {
    addMovie:async (parent, args, context)=> {
      const result = await context.db
      .collection("movies")
      .insertOne({...args})
      .catch(console.error);
      return { _id: result.insertedId};
  },
  addReview:async (parent, args, context) => {
    const { movieId, author, title, body } = args;
    const resultOfUpdate = await context.db
          .collection('movies')
          .updateOne({_id:movieId }, {$push: {reviews: author, title, body}).catch(console.error);
  }
},
});



module.exports = buildResolvers;
