const db = connect("technocite");

const keanuReeves = db.movies
  .find({
    actors: "Keanu Reeves",
    /*
    $where : function() {
      if (!this.actors) return false;
      return this.actors.includes("Keanu Reeves");
    }
  */
  })
  .projection({
    title: true,
  });

print("KEANU REEVES");
printjson(keanuReeves.length());

const comedies = db.movies
  .find({
    genres: "Comedy",
  })
  .projection({
    title: true,
  });

print("COMEDIES");
printjson(comedies.length());

const filmsBetween2002And2008 = db.movies.find({
  year: {
    $gte: 2002,
    $lte: 2008,
  },
});

print("FILMS ENTRE 2002 ET 2008");
//printjson(filmsBetween2002And2008.toArray());

// Dans lesquels ont joué conjointement Chris O'Donnell et Matt Damon

const filmsMattChris = db.movies.find({
  actors: {
    $all: ["Chris O'Donnell", "Matt Damon"],
  },
});

print("Dans lesquels ont joué conjointement Chris O'Donnell et Matt Damon");
printjson(filmsMattChris.toArray());

// Réalisés par Neil Burger ou Brad Furman

const neilOrBrad = db.movies.find({
  directors: {
    $in: ["Neil Burger", "Brad Furman"],
  },
});

print("Réalisés par Neil Burger ou Brad Furman");
printjson(neilOrBrad.toArray());

// film le plus ancien
const oldestFilm = db.movies
  .find({
    year: {
      // on vérifie que l'année de sortie existe afin de ne pas embrouiller le sort()
      $exists: true,
    },
  })
  .sort({
    // on trie l'année en ascendant
    year: 1,
  }) // on limite à 1 pour avoir le plus ancien en premier
  .limit(1);

printjson(oldestFilm.toArray()[0]);
