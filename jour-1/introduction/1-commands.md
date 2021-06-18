// liste les bases de données présentes
show dbs;

// utiliser une base de données spécifique
use admin;

// créons une base de données
use technocite; // on dit à mongodb de mettre le contexte de DB courant dans la base de données technocité, même si celle-ci n'existe pas encore
db.students.insert({ name : "gilles bertrand"}); // insérer depuis la db technocité, dans une COLLECTION qui s'appelle students un document { name : "gilles bertrand" }

// bonus : si vous voulez vous pouvez voir plus d'infos sur le stockage de la DB courante avec cette commande :
db.runCommand({ dbStats : 1});

db.students.insert({ the_name : 1 }); // le type de données n'a pas vraiment d'importance, ni le nom des colonnes

// permet de lister les différentes collections présentes dans votre DB actuelle
show collections;
