const db = connect("store");

const result = db.orders.aggregate([
  {
    // pour chaque order, son item dans l'inventaire
    $lookup: {
      from: "inventory",
      localField: "item",
      foreignField: "sku",
      as: "order_item",
    },
  },
  {
    // Ne sélectionnez que l'item et la quantité
    $project: {
      order_item: true,
      quantity: true,
    },
  },
  {
    // Essayez, grâce à une commande vue précédemment, de n'avoir q'un seul résultat en forme d'objet pour la relation
    $unwind: "$order_item",
  },
  {
    // Ne sélectionnez ensuite que ceux qui ont au moins 1 de stock
    $match: {
      "order_item.instock": {
        $gte: 1,
      },
    },
  },
]);

printjson(result.toArray());
