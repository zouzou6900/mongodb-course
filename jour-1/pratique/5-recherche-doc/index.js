const db = connect("technocite");

const result = db.movies.find(); // on récupère tout
// dans le résultat vous voyez une propriété qui s'appelle _id , c'est une propriété générée automatiquement pour chaque document dans mongoDB, il est UNIQUE.

//printjson(result.toArray());

// find() et ses options
const allButWithLimit = db.movies
  .find()
  //   .projection({
  //     // je veux seulement le titre et le plot dans le résultat
  //     title: true,
  //     plot: true,
  //   })
  .projection({
    // je veux tout sauf le title et le plot dans le résultat
    title: false,
    plot: false,
  })
  .limit(10)
  .sort({
    year: -1, // 1 = ASC => du plus petit au plus grand
    // -1 = DESC => du plus grand au plus petit
  });

printjson(allButWithLimit.toArray());

// findOne et ses options
const findOneResult = db.movies.findOne();

print("Mon résultat de findOne !");
printjson(findOneResult);
