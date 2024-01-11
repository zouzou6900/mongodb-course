let db = connect("mongodb://root:test123@localhost").getSiblingDB('sample_mflix');

const result = db.movies
  .find(
    {
      directors: "George Lucas",
    },

    {
      title: 1,
    }
  )
  .sort({
    title: -1,
  })
  .count();

printjson(result);