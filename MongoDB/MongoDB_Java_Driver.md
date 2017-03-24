## [MongoDB Driver](http://mongodb.github.io/mongo-java-driver/3.4/)

### 1. Installation MongoDB Driver

> Add dependency in build.gradle

```java
    compile("org.mongodb:mongodb-driver:3.4.2")
```
> Prerequisites 
>> * A running MongoDB on localhost using the default port for MongoDB 27017
>> * The following import statements:

```java
    import com.mongodb.MongoClient;
    import com.mongodb.MongoClientURI;
    import com.mongodb.ServerAddress;

    import com.mongodb.client.MongoDatabase;
    import com.mongodb.client.MongoCollection;

    import org.bson.Document;
    import java.util.Arrays;
    import com.mongodb.Block;

    import com.mongodb.client.MongoCursor;
    import static com.mongodb.client.model.Filters.*;
    import com.mongodb.client.result.DeleteResult;
    import static com.mongodb.client.model.Updates.*;
    import com.mongodb.client.result.UpdateResult;
    import java.util.ArrayList;
    import java.util.List;
```

### 2. Make a Connection

> Use **MongoClient()** to make a connection to a running MongoDB instance.

> The MongoClient instance represents a pool of connections to the database; you will only need one instance of class MongoClient even with multiple threads.

>> **Important**
>>> Typically you only create one MongoClient instance for a given MongoDB deployment (e.g. standalone, replica set, or a sharded cluster) and use it across your application. However, if you do create multiple instances:
>>> * All resource usage limits (e.g. max connections, etc.) apply per MongoClient instance.
>>> * To dispose of an instance, call MongoClient.close() to clean up resources.

> The following example shows several ways to connect to the database mydb on the local machine. If the database does not exist, MongoDB will create it for you. To connect to a single MongoDB instance:
>> 1. To connect to a standalone MongoDB instance - You can instantiate a MongoClient object without any parameters to connect to a MongoDB instance running on localhost on port 27017: 

```javascript
    MongoClient mongoClient = new MongoClient();
```

>> 2. You can explicitly specify the hostname to connect to a MongoDB instance running on the specified host on port 27017:

```javascript
    MongoClient mongoClient = new MongoClient("host1");
```

>> 3. You can explicitly specify the hostname and the port:

```javascript
    MongoClient mongoClient = new MongoClient("host1", 27017);
```

>> 4. You can specify the **MongoClientURI** connectin string:

```javascript
    MongoClientURI connectionString = new MongoClientURI("mongodb://host1 : 27017");
    MongoClient mongoClient = new MongoClient(connectionString);
```

### 3. Access a Collection

> Once you have a MongoDatabase instance, use its **getCollection()** method to access a collection.

> Specify the name of the collection to the getCollection() method. If a collection does not exist, MongoDB creates the collection when you first store data for that collection.

> For example, using the database instance, the following statement accesses the collection named test in the mydb database:

```javascript
    MongoCollection<Document> collection = database.getCollection("test");
```

> MongoCollection instances are immutable

### 4. Create a Document

> To create the document using the Java driver, use the Document class.

>> For example, consider the following JSON document:

```javascript
    {
        "name" : "MongoDB",
        "type" : "database",
        "count" : 1,
        "versions" : ["v3.2", "v3.0", "v2.6"],
        "info" : {x : 203, y : 102} 
    }
```

> To create the document using the Java driver, instantiate a Document object with a field and value, and use its append() method to include additional fields and values to the document object. The value can be another Document object to specify an embedded document:

```javascript
    Document doc = new Document("name", "MongoDB")
                    .append("type", "database")
                    .append("count", 1)
                    .append("versions", Arrays.asList("v3.2", "v3.0", "v2.6") )
                    .append("info", new Document("x", 203).append("y", 102));
```

### 5. Insert a Document

> Once you have the **MongoCollection** object, you can insert documents into the collection.

>> * Insert One Document - To insert a single document into the collection, you can use the collection's **insertOne()** method.

>> NOTE
>>>If no top-level _id field is specified in the document, MongoDB automatically adds the _id field to the inserted document.

```java
    collection.insertOne(doc);
```

>> * Insert Multiple Documents - To add multiple documents, you can use the collection’s **insertMany()** method which takes a list of documents to insert.

```java
    // The following example will add multiple documents of the form:
    { "i" : value }

    // Create the documents in a loop and add to the documents list:
    List<Document> docuemnts = new ArrayList<Document>();
    for(int i = 0; i < 100; i++){
        documents.add(new Document("i", 1));
    }

    // To insert these documents to the collection, pass the list of documents to the **insertMany()** method.
    collection.insertMany(documents);
```

### 6. Count Documents in A Collection

> To count the number of documents in a collection, you can use the collection’s **count()** method. The following code should print 101 (the 100 inserted via insertMany plus the 1 inserted via the insertOne).

```java
    System.out.println(collection.count());
```

### 7. Query the Collection

> To query the collection, you can use the collection’s find() method. You can call the method without any arguments to query all documents in a collection or pass a filter to query for documents that match the filter criteria.

> The find() method returns a FindIterable() instance that provides a fluent interface for chaining other methods.

> * Find the First Document in a Collection
>> To return the first document in the collection, use the **find()** method without any parameters and chain to **find()** method the **first()** method.
>>If the collection is empty, the operation returns null.

```java
    Document myDoc = collection.find().first();
    System.out.println(myDoc.toJson());

    // The example should print the following document:
    {
        "_id" : { "$oid" : "551582c558c7b4fbacf16735" },
        "name" : "MongoDB",
        "type" : "database",
         "count" : 1,
        "info" : { "x" : 203, "y" : 102 }
    }
```

> Note: The _id element has been added automatically by MongoDB to your document and your value will differ from that shown. MongoDB reserves field names that start with "_" and "$" for internal use.

>> 2. Find All Documents in a Collection
>>> To retrieve all the documents in the collection, we will use the **find()** method without any parameters.
>>> To iterate through the results, chain the **iterator()** method to the find().
>>> The following example retrieves all documents in the collection and prints the returned documents (101 documents):

```java
    MongoCursor<Document> cursor = collection.find().iterator();
    try {
        while (cursor.hasNext()) {
            System.out.println(cursor.next().toJson());
        }
    } finally {
        cursor.close();
    }


    //Although the following idiom for iteration is permissible, avoid its use as the application can leak a cursor if the loop terminates early:
    for (Document cur : collection.find()) {
        System.out.println(cur.toJson());
    }
```

### 8. Specify a Query Filter

> To to query for documents that match certain conditions, pass a filter object to the **find()** method. To facilitate creating filter objects, Java driver provides the **Filters** helper.

> 1. Get A Single Document That Matches a Filter
>> For example, to find the first document where the field i has the value 71, pass an **eq** filter object to specify the equality condition:

```java
    myDoc = collection.find(eq("i", 71)).first();
    System.out.println(myDoc.toJson());

    //The example prints one document:

    { "_id" : { "$oid" : "5515836e58c7b4fbc756320b" }, "i" : 71 }
```

> 2. Get All Documents That Match a Filter
>> The following example returns and prints all documents where "i" > 50:

```java
    Block<Document> printBlock = new Block<Document>() {
        @Override
        public void apply(final Document document) {
            System.out.println(document.toJson());
        }
    };

    collection.find(gt("i", 50)).forEach(printBlock);

// The example uses the **forEach** method on the FindIterable object to apply a block to each document.

// To specify a filter for a range, such as 50 < i <= 100, you can use the and helper:

    collection.find(and(gt("i", 50), lte("i", 100))).forEach(printBlock);
```

### 9. Update Documents

> To update documents in a collection, you can use the collection’s **updateOne()"" and **updateMany()** methods.

> Pass to the methods:
>> * A filter object to determine the document or documents to update. To facilitate creating filter objects, Java driver provides the **Filters** helper. To specify an empty filter (i.e. match all documents in a collection), use an empty **Document** object.
>> * An update document that specifies the modifications.

> The update methods return an **UpdateResult** which provides information about the operation including the number of documents modified by the update.

> 1. Update a Single Document
>> To update at most a single document, use the **updateOne()**.
>> The following example updates the first document that meets the filter i equals 10 and sets the value of i to 110:

```java
collection.updateOne(eq("i", 10), new Document("$set", new Document("i", 110)));
```

> 2. Update Multiple Documents
>> To update all documents matching the filter, use the **updateMany()** method.
>> The following example increments the value of i by 100 for all documents where =i is less than 100:

```java
UpdateResult updateResult = collection.updateMany(lt("i", 100), inc("i", 100));
System.out.println(updateResult.getModifiedCount());
```

### 10. Delete Documents

> To delete documents from a collection, you can use the collection’s **deleteOne()** and **deleteMany()** methods.

> Pass to the methods a filter object to determine the document or documents to delete. To facilitate creating filter objects, Java driver provides the **Filters** helper. To specify an empty filter (i.e. match all documents in a collection), use an empty Document object.

> The delete methods return a **DeleteResult** which provides information about the operation including the number of documents deleted.

> 1. Delete a Single Document That Match a Filter
>> To delete at most a single document that match the filter, use the **deleteOne()** method:
>> The following example deletes at most one document that meets the filter i equals 110:

```java
    collection.deleteOne(eq("i", 110));
```

> 2. Delete All Documents That Match a Filter
>> To delete all documents matching the filter use the **deleteMany()** method.

The following example deletes all documents where i is greater or equal to 100:

```java
    DeleteResult deleteResult = collection.deleteMany(gte("i", 100));
    System.out.println(deleteResult.getDeletedCount());
```

### 11. Create Indexes

> To create an index on a field or fields, pass an index specification document to the **createIndex()** method. An index key specification document contains the fields to index and the index type for each field:

```java
    new Document(<field1>, <type1>).append(<field2>, <type2>) ...
 ```

>> * For an ascending index type, specify 1 for <type>.
>> * For a descending index type, specify -1 for <type>.

> The following example creates an ascending index on the i field:
```java
     collection.createIndex(new Document("i", 1));
```

### 12. Connect to a Replica set

> To connect to a **replica set**, you must specify one or more members to the MongoClient constructor.

> **NOTE** -
> MongoDB will auto-discover the primary and the secondaries.

>> * You can specify the members using the **MongoClientURI** connection string:
>>> * To specify at least two members of the replica set:

```java
    MongoClient mongoClient = new MongoClient(
    new MongoClientURI("mongodb://host1:27017,host2:27017,host3:27017"));
```

>>> * With at least one member of the replica set and the replicaSet option:

```java
    MongoClient mongoClient = new MongoClient(
    new MongoClientURI(
      "mongodb://host1:27017,host2:27017,host3:27017/?replicaSet=myReplicaSet"));
```

>>> * You can specify a list of the all the replica set members’ **ServerAddress**:

```java
    MongoClient mongoClient = new MongoClient(
    Arrays.asList(new ServerAddress("host1", 27017),
              new ServerAddress("host2", 27017),
              new ServerAddress("host3", 27017)));
```

### 13. Connect to a Sharded Cluster

> To connect to a **sharded cluster**, specify the mongos instance or instances to the MongoClient constructor.

> 1. To connect to a single mongos instance:
>> * You can specify the hostname and the port (or you can omit the parameters if mongos is running on localhost and port 27017)

```java
    MongoClient mongoClient = new MongoClient( "localhost" , 27017 );
```

> 2. You can specify the **MongoClientURI** connection string:

```java
    MongoClient mongoClient = new MongoClient(new MongoClientURI("mongodb://localhost:27017"));
```

> To connect to multiple mongos instances:
>> * You can specify the **MongoClientURI** connection string with their hostnames and ports:

```java
    MongoClient mongoClient = new MongoClient(
    new MongoClientURI("mongodb://host1:27017,host2:27017"));
```
>> * You can specify a list of the mongos instances’ **ServerAddress**:

```java
    MongoClient mongoClient = new MongoClient(
    Arrays.asList(new ServerAddress("host1", 27017),
                 new ServerAddress("host2", 27017)));
```

### 14. Conenction Options

> You can specify the connection settings using either the **MongoClientURI** or **MongoClientOptions** or both.

> For example, you can specify **TLS/SSL** and authentication setting in the MongoClientURI connection string:

```java
    MongoClientURI uri = new MongoClientURI("mongodb://user1:pwd1@host1/?authSource=db1&ssl=true");
    MongoClient mongoClient = new MongoClient(uri);
```

> You can also use **MongoClientOptions* to specify **TLS/SSL **and the MongoCredential for the authentication information:

```java
 String user; // the user name
 String database; // the name of the database in which the user is defined
 char[] password; // the password as a character array
 // ...

 MongoCredential credential = MongoCredential.createCredential(user, database, password);

 MongoClientOptions options = MongoClientOptions.builder().sslEnabled(true).build();

 MongoClient mongoClient = new MongoClient(new ServerAddress("host1", 27017),
                                           Arrays.asList(credential),
                                           options);
```

[read operation](http://mongodb.github.io/mongo-java-driver/3.4/driver/tutorials/perform-read-operations/)