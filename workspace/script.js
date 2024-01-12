let db = connect("mongodb://root:test123@localhost");
// liste des bases de données
let dbList = db.adminCommand("listDatabases");
console.log(dbList);
