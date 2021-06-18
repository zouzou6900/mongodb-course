const db = connect("technocite"); // connexion à la base de données technocité
let databaseInfos = db.runCommand({ dbStats: 1 }); // on exécute une commande (comme dans le shell)

printjson(databaseInfos); // on affiche les données avec printjson
