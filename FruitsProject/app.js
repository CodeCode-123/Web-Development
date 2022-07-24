const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  rating: 10,
  review: "Pretty solid as a fruit."
});

//fruit.save();
/*
Fruit.updateOne({_id: "62ce6a3938e2ef21f05d584c"}, {name: "Peach"}, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Update Successfully");
  }
});*/

/*
Fruit.deleteOne({name: "Peach"}, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Deleted Successfully");
  }
})*/





const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pear = new Fruit({
  name: "Pear",
  score: 9,
  review: "Delicious fruit."
});

pear.save()

Person.updateOne({name: "John"}, {favouriteFruit: pear}, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Updated Successfully");
  }
})




/*
const person = new Person({
  name: "Amy",
  age: 12,
  favouriteFruit: pineapple
});*/

//person.save();

/*
Person.deleteMany({name:"John"}, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully deleted all");
  }
})*/
//person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "The best fruit!"
});

const orange = new Fruit({
  name: "Orange",
  score: 4,
  review: "Too sour for me"
});

const banana = new Fruit({
  name: "Banana",
  score: 3,
  review: "Weird texture"
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all fruits to fruitsDB");
//   }
// })

Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  } else {

    //mongoose.connection.close();

    fruits.forEach(fruit => {
      console.log(fruit.name);
    });
  };
});







/* Mongo Native Driver
// http://mongodb.github.io/node-mongodb-native/3.1/quick-start/quick-start/
// https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/connect/#std-label-node-connect-to-mongodb
// http://mongodb.github.io/node-mongodb-native/3.1/quick-start/quick-start/

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  findDocuments(db, function() {
      client.close();
    });
});

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Insert some documents
  collection.insertMany([
    {
      name: "Apple",
      score: 8,
      review: "Great fruit"
    },
    {
      name: "Orange",
      score: 6,
      review: "Kinda sour"
    },
    {
      name: "Banana",
      score: 9,
      review: "Great stuff!"
    }
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3,result.insertedCount);
    assert.equal(3,Object.keys(result.insertedIds).length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits)
    callback(fruits);
  });
}
*/
