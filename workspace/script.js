let db = connect("mongodb://root:test123*@localhost").getSiblingDB('sample_analytics');

const res =  db.transactions.aggregate([ 
  {
    $lookup: {
      from: "accounts",
      as: "account",
      localField: "account_id",
      foreignField: "account_id"
    }
  },
  {
    $unwind: "$account"
  },
  {
    $unwind: "$transactions"
  },
  {
    $match: {
      "transactions.transaction_code": "buy"
    }
  },
  {
    $group: {
      _id: "$account_id",
      total: {
        $sum: "$transactions.amount"
      },
      account: { $first: "$account" }
    }
  },
  {
    $lookup: {
      from: "customers",
      as: "customer",
      localField: "_id",
      foreignField: "accounts"
    }
  },
  {
    $unwind: "$customer"
  },
  {
    $project: {
      "customer.name": 1,
      total: 1,
    }
  },
  {
    $sort: {
      total: -1
    }
  },
  {
    $limit: 5
  },
]);

printjson(res.toArray());