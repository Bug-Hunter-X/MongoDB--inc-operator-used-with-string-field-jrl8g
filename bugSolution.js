```javascript
// Correct approach: Convert the string to a number before incrementing or use $set
db.collection('myCollection').updateOne({"_id": 1}, {"$inc": {"myNumber": 1}}); // Assuming myNumber is a numeric field

//Alternative solution using $set
db.collection('myCollection').findOneAndUpdate({"_id": 1}, {"$inc": {"myNumber": 1}}, {upsert:true,returnOriginal: false})

// or if you need to initialize and increment a number in a string field 
db.collection('myCollection').findOneAndUpdate( { "_id" : 1 }, { $inc : { "myString" : 1 } }, { upsert : true, returnOriginal : false });

```