const db = connect("movies");

const result = db.comments.aggregate([
  {
    $limit: 1,
  },
  {
    $lookup: {
      from: "movies",
      localField: "movie_id",
      foreignField: "_id",
      as: "joined_movie",
    },
  },
  {
    $unwind: "$joined_movie",
  },
]);

printjson(result.toArray());
