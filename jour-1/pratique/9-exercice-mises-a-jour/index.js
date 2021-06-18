// DUMP
// mongodump --db technocite --collection movies

//Augmenter le rank de 1000 pour tous les films dans lesquels a joué Charlize Theron

const db = connect("technocite");

db.movies.update(
  {
    actors: "Charlize Theron",
  },
  {
    $inc: {
      rank: 1000,
    },
  }
);

const film = db.movies.findOne({
  actors: "Charlize Theron",
});

printjson(film);

// Supprimer les films réalisés par Harald Zwart
db.movies.remove(
  {
    actors: "Harald Zwart",
  },
  {
    multi: true,
  }
);

const filmHarald = db.movies.find({
  actors: "Harald Zwart",
});

printjson(filmHarald.toArray());

//  Ajouter l'acteur Key Key aux films "+1", "3D rou pu tuan zhi ji le bao jian" et "Anamorph"
// il est également possible d'utiliser updateMany() pour ne pas mettre le multi : true à la fin
db.movies.update(
  {
    // va matcher les 3 films
    title: {
      $in: ["+1", "3D rou pu tuan zhi ji le bao jian", "Anamorph"],
    },
  },
  {
    // ajoute un élement dans un tableau
    $push: {
      actors: "Key Key",
    },
  },
  {
    // permet d'update toutes les occurences trouvées par la condition
    multi: true,
  }
);

const filmsKeyKey = db.movies.find({
  title: {
    $in: ["+1", "3D rou pu tuan zhi ji le bao jian", "Anamorph"],
  },
});

printjson(filmsKeyKey.toArray());
