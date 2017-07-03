### Install MongoDB Driver
> Download and install mongodb package
`npm install mongodb`

> Node.js can use this module to manipulate MongoDB databases
`var mongo = require('mongodb);`

### Create Database
> 1. Create a MongoClient object
>> `var MongoClient = require('mongodb').MongoClient;`

> 2. Specify a connection URL with the correct ip address and the name of the database you want to create
>> `var url = "mongodb://localhost:27017/mydb";`

> 3. MongoDB will create the databse if it does not exist, and make a connection to it.

### Create Table
> To create a table in MongoDB, use the `createCollection()` method

### Insert Into
> To insert a record into a table in MongoDB, using the `insertOne()` method.

> The first parameter of the `insertOne()` method is an object containing the name(s) and value(s) of each field in the record you want to insert. It also takes a callback function where you can work with any errors, or the result of the insertion.

> To insert a multiple records into a table in MongoDB, using the `insertMany()` method.

> The first parameter of the `insertMany()` method is an array of objects, containing the data you want to insert. It also takes a callback function where you can work with any errors, or the result of the insertion.

### Select From
> To select data from a table in MongoDB, we can use the `findOne()` method

> The `findOne()` method returns the first occurrence in the selection. The first parameter of the `findOne()` method is a query object. Use an empty query object, which selects all records in a table (but returns only the first record)

> To select data from a table in MongoDB, we can also use the `find()` method.

> The `find()` method returns all occurrences in the selection. The first parameter of the `find()` method is a query object. Use an empty query object, which selects all records in a table.

### Query
> When selecting records from a table, you can filter the result by using a query object.

> The first argument of the `find()` method is a query object, and is used to limit the search.

```javascript
var query = { address: "Park Lane 38" };
db.collection("customers").find(query).toArray(function(err, result){
    // TODO something
});
```
> **Regular expressions** can only be used to query strings

> To select the records in a table that starts with the letter "S", use the regular expression `/^S/`, `var query = { address: /^S/ };`

### Sort
> Use the `sort()` method to sort the result in ascending or descending order.

> The `sort()` method takes one parameter, an object defining the sorting order.

```javascript
var mysort = { name: 1 }; // ascending
var mysort = { name: -1 }; // descending

db.collection("customers").find().sort(mysort).toArray(function(err, result){
    // TODO 
});
```

### Delete Record
> To delete a record, or document as it is called in MongoDB, using the `deleteOne()` method.

> The first parameter of the `deleteOne()` method is a query object defining which document to delete.

> **Note: ** If the query finds more than one record, only the first occurrence is deleted.

```javascript 
var myquery = { address: 'Mountain 21' };
db.collection("customers").deleteOne(myquery, function(err, obj){
    // TODO
});
```

> To delete more than one document, use the `deleteMany()` method.

> The first parameter of the `deleteMany()` method is a query object defining which documents to delete.

```javascript
// delete all documents were the address starts with the letter "O"
var myquery = { address: /^O/ };
db.collection("customers").deleteMany(myquery, function(err, obj){
    // TODO
});
```

### Drop Collection
> Delete a table, or collection by using the `drop()` method.

> The `drop()` method takes a callback function containing the error object and the result parameter which returns true if the collection was dropped successfully, otherwise it returns false.

```javascript
db.collection("customers").drop(function(err, delOK){
    // TODO
});
```

> Using `dropCollection()` method to delete a table (collection)

> The `dropCollection()` method takes two parameters: the name of the collection and a callback function.

```javascript
db.dropCollection("customers", function(err, delOK){
    // TODO
});
```

### Update
> Update a record, or document by using the `updateOne()` method.

> The first parameter of the `updateOne()` method is a query object defining which document to update.

> **Note:** If the query finds more than one record, only the first occurrence is updated.

> The second parameter is an object defining the new values of the document. By default, all fields in the document gets updated, (except the `_id` field) so remember to set the value of every field, otherwise the value will be left empty.

```javascript
var myquery = { address: "Valley 345" };
var newvalues = { name: "Mickey", address: "Canyon 123" };
db.collection("customers").updateOne(myquery, newvalues, function(err, res){
    // TODO
});
```

> **Update Only Specific Fields** To update only selected fields, use the `$set` operator to prevent the other fields from being left empty

```javascript
var newvalues = { $set: { address: "Canyon 123 } };
```

> To update **all** documents that meets the criteria of the query, use the `updateMany()` method.

```javascript
var myquery = { address: /^S/ };
var newvalues = { $set: { name: "Minnie" } };
db.collection("customers").updateMany(myquery, newvalues, function(err, res){
    if (err) throw err;
    console.log(res.result.nModified + " record(s) updated");
    db.close();
});
```
> The `updateOne()` and the `updateMany()` methods return an object which contains information about how the execution affected the database.One object inside the object is called "result" which tells us if the execution went OK, and how many documents were affected.

### Limit
> To limit the result in MongoDB, use the `limit()` method. The `limit()` method takes one parameter, a number defining how many documents to return.

```javascript
db.collection("customers").find().limit(5).toArray(function(err, result){
    // TODO
});
```

### Join
> MongoDB is not a relational database, but you can perform a **left outer join** by using the `$lookup` stage. The `$lookup` stage lets you specify which collection you want to join with the current collection, and which fields that should match.

```javascript
// Collection: orders
[
    { _id: 1, product_id: 154, status: 1 }
]

// Collection: products
[
    { _id: 154, name: 'Chocolate Heaven' },
    { _id: 155, name: 'Tasty Lemons' },
    { _id: 156, name: 'Vanilla Dreams' }
]

// join the matching "products" document(s) to the "orders" collection
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost27017/mydb";

MongoClient = connect(url, function(err, db){
    if (err) throw err;
    db.collection('orders).aggregate([
        {
            $lookup:
            {
                from: 'products',
                localField: 'products_id',
                foreignField: 'id',
                as: 'orderdetails'
            }
        }
    ], function(err, res){
        if (err) throw err;
        console.log(res);
        db.close();
    });
});

// the result
[
    {
        _id: 1, product_id: 154, status: 1, orderdetails: [
            {
                _id: 154, name: 'Chocolate Heaven'
            }
        ]
    }
]
```