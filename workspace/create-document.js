let db = connect("mongodb://root:test123@localhost:27017");
db = db.getSiblingDB('technocite');
db.students.insertOne({name:"sebastien"});
const inserted = db.students.insertMany([{name:"sebastien"},{name:"amaury"}]);

console.log(inserted);