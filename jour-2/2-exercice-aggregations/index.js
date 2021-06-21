/* 
    Sélectionnez le nombre de films par réalisateurs qui ont un rating entre 8 et 10
    ensuite ne prendre que le résultat où le réalisateur a plus de 5 films
*/
const db = connect("technocite");

const aggregateResult = db.movies.aggregate([
  {
    $match: {
      rating: {
        $gte: 8,
        $lte: 10,
      },
    },
  },
  // ne pas oublier d'$unwind avant de group
  {
    $unwind: "$directors",
  },
  {
    $group: {
      _id: "$directors",
      films: {
        $sum: 1,
      },
    },
  },
  {
    $match: {
      films: {
        $gte: 5,
      },
    },
  },
  {
    $sort: {
      films: 1,
    },
  },
]);

printjson(aggregateResult.toArray());
