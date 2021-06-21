const db = connect("technocite");

/**
 * Bien faire attention à l'ordre dans lequel vous exécutez vos opérateurs d'aggrégations
 */
const result = db.movies.aggregate([
  {
    // fait une projection et ne prend que le champ directors des movies
    $project: { directors: 1 },
  },
  {
    // crée un document pour chaque élément du tableau
    $unwind: "$directors",
  },
  {
    // on filtre notre résultat précédent qu'avec ceux qui ont été fait par Steven Spielberg
    $match: {
      directors: {
        $in: ["Steven Spielberg", "Stanley Kubrick"],
      },
    },
  },
  {
    $group: {
      _id: "$directors", // on groupe par $directors
      films: { $sum: 1 }, // la somme de tous les élements dans le groupe
    },
  },
  {
    // on trie par films en ordre Ascendant dans le résultat précédent
    $sort: {
      films: 1,
    },
  },
  {
    //on limite ensuite à 1 le résultat final
    $limit: 1,
  },
]);

printjson(result.toArray());
