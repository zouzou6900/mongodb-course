const db = connect("technocite");

// save créé le document lorsqu'il n'existe pas ou le met à jour si vous renseigner un _id déjà existant
const insert = db.movies.save({
  _id: ObjectId("60cc9b653f53e98ff0d833b4"),
  title: "Sébastien se fait virer, le retour",
  genres: ["Drama", "Comedy", "Horror"],
  directors: ["Gilles Bertrand"],
  plot: "Un employé fou et loufoque se fait virer par un patron à bout de nerf",
});

const movieSeb = db.movies.find({
  title: "Sébastien se fait virer, le retour",
});

printjson(movieSeb.toArray());

// LE UPDATE
db.movies.update(
  { _id: ObjectId("60cc9b653f53e98ff0d833b4") }, // la condition de l'update
  {
    plot: "Un employé se prend un C4", // le contenu à update
  }
);

// LE UPDATE
db.movies.update(
  { _id: ObjectId("60cc9b653f53e98ff0d833b4") }, // la condition de l'update
  {
    // incrémente de 1000 une propriété
    $inc: {
      age: 1000,
    },
  }
);

const movieSebId = db.movies.findOne({
  _id: ObjectId("60cc9b653f53e98ff0d833b4"), // si vous voulez faire une recherche ou mise à jour par _id, il faut bien dire que c'est un ObjectId
});

printjson(movieSebId);

// suppression
db.movies.remove(
  {
    title: "Sébastien se fait virer",
  },
  {
    multi: true,
  }
);
