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

> To select data from a table in MongoDB, we can also use the `find() method.

> The `find()` method returns all occurrences in the selection. The first parameter of the `find()` method is a query object. Use an empty query object, which selects all records in a table.

### Query

### Sort

### Delete


### Drop Collection

### Update


### Limit


### Join