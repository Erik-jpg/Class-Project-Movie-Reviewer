const buildResolvers = db => ({
  Query: {
    movies: () =>db.collection("movies").find({}).
    toArray(),
  },
});



module.exports = buildResolvers;
