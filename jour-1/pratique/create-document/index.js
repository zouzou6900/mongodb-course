const db = connect("technocite");

const result = db.students.insert({ name: "Back Obama" }); // insère un document dans la collection students
const insertManyResult = db.students.insertMany([
  // insertion de plusieurs documents à la fois
  { name: "Pablo Pikachu" },
  { name: "Polenta por favor" },
]);

// on affiche le résultat en format JSON
printjson(result);
printjson(insertManyResult);
