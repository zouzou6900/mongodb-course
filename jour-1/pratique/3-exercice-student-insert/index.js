const db = connect("technocite");

// on crée l'objet qui sera inséré en DB
const student = [
  {
    name: "Sébastien Cardon",
    degree: "Rester assis sur sa chaise toute la journée",
    poids: 100,
    heigth: 30,
  },
  {
    name: "Sébastien Carfion",
    degree: "Rester assis sur sa chaise toute la journée",
    poids: 100,
    heigth: 30,
  },
];

// on insère notre étudiant
// NOTE : on peut même insérer un tableau
const result = db.students.insert(student);

printjson(result);
