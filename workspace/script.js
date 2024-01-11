let db = connect("mongodb://root:test123@localhost");

const session = db.getMongo().startSession();

// Start a transaction
session.startTransaction();

try {
  // Operations within the transaction
  const orders = session.getDatabase("shop").orders;
  const inventory = session.getDatabase("shop").collection;

  inventory.updateOne(
    { sku: "peanut" },
    { $inc: { quantity: -20 } }
  );

  orders.insertOne(
    {
        item: "peanut", 
        quantity: 20, 
        price: 20
    });

  // Commit the transaction
  session.commitTransaction();
} catch (error) {
  // An error occurred, abort the transaction
  print("Error occurred, aborting transaction:", error);
  session.abortTransaction();
} finally {
  // End the session
  session.endSession();
}