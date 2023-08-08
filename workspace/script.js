let db = connect("mongodb://root:test123*@localhost").getSiblingDB('sample_mflix');

const result = db.movies
  .find({
    title: {
      $ne : "Jurassic Park"
    }
  });

printjson(result.toArray());