const db = connect("technocite");

// $gt 	Greater Than. Ex { $gt : 5 }
// $lt 	Lower Than. Ex { $lt : 5 }
// $in 	INcluded. Ex { $in : [0, 1, 2, 3, 4] }
// $gte 	Greater Than or Equals. Ex { $gte : 5 }
// $lte 	Lower Than or Equals. Ex { $lte : 5 }
// $ne 	Not Equals. Ex { $ne : 5 }
// $nin 	Not INcluded>. Ex { $nin : [0, 1, 2, 3, 4] }
// $all doit avoir plusieurs élements dans le tableau

// $or et $and qui permettent de faire des sous conditions

const findResult = db.movies
  .find({
    $or: [
      {
        rank: {
          $gt: 200,
        },
        genres: {
          $all: ["Romance", "War"],
        },
      },
      {
        rating: {
          $gt: 9,
        },
      },
    ],
  })
  .limit(5);

// $exists , vérifier si un champ existe ou non
const findResultExists = db.movies.find({
  release_date: {
    $exists: false,
  },
});

// printjson(findResultExists.toArray());

// $type , recherche selon le type du champ ex : 1 : number, 2 : string , 4 : tableau etc ...
const findByType = db.movies.find({
  genres: {
    $type: 8,
  },
});

// recherche avec une regex
const s = db.movies
  .find({
    title: /.*Star wars.*/i,
    directors: "George Lucas",
  })
  .projection({
    title: true,
  })
  .sort({
    year: 1,
  });

printjson(s.toArray());
