let db = connect("mongodb://root:test123@localhost:27017");
let dbs = db.adminCommand("listDatabases");
printjson(dbs);