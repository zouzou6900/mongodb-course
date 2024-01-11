let db = connect("mongodb://root:test123@localhost").getSiblingDB('big_data');

let movies = db.data.dropIndexes();

print(movies);