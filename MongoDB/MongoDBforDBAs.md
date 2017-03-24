#### Week 1 - Introduction
#### Week 2 - CRUD and administrative commands
#### Week 3 - Performance
#### Week 4 - Replication
#### Week 5 - Replication part 2
#### Week 6 - Scalability
#### Week 7 - Backup and recovery
#### Final exam
___

lsof -i tcp:27001
ps -ef | grep mongod

### Week 1 - Introduction
> Deal with complex structured, unstructured data

> MongoDB is document-orientated - JSON

> There are 6 types in JSON

> **types**
  >> strings

  >> numbers

  >> booleans

  >> null

  >> arrays

  >> objects/documents

  > Start MongoDB server
  ```javascript
    mongod
  ```

  > start MongoDB
  ```javascript
      mongo
  ```
```javascript
    show dbs   --> show all databases
    db   --> show the current database
    use database_name   --> change the database
```

> mongo import

``` javascript
    ls -la products.json   --> Terminal
    //type following commands in mongo shell
    mongoimport --help
    mongoimport --db pcat --collection products < projucts.json   --> database: pcat, collection: products
```

```javascript
    // connecting to localhost/pcat
    mongo localhost/pcat --> Terminal
```

```javascript
    // show everything   --> db.collection_name.find()
    db.products.find()
    // count the number of records
    db.products.count()

    db.products.find({}, {name:1})
    // formatting the ourput
    db.products.find().toArray()   
    db.product.find().limit(10).toArray()

    show collections
    db.products.findOne() == db.products.find( { } ) == db.products.find( { } ).limit(1)
    db.products.find( { } ).limit(4).skip(2)
    db.products.find( {}, {name:1, brand:1, _id:0} )

    db.products.find( {queries}, {field_selection} )
    db.products.find( {price:12.5})
```

> mongoDB queries

```javascript
    mongod   --> start mongoDB server
    mongo localhost/pcat

    db.products.find( {price:200}, {name:1, price:1, _id:0} )

    // price >= 200
    db.products.find( {price:{$gte:200}}, {name:1, price:1} )
    db.products.find( {price:{$gte:200}, available:true}, {name:1, price:1} )
    db.products.find( {for:{$exists:true}}, {name:1, for:1} )
    db.products.find( {for:"ac3"} )
    db.products.find( {"x.a":1}  )
    db.products.find( {"y.k.bbb":"hello"} )

    db.products.find( {}, {name:1, price:1} ).sort( {price:1} )
    db.products.find( {price:{$exists:true}}, {name:1, price:1} ).sort( {price:1} )

    // order by last name and first name
    db.products.find( {}, {name:1, price:1} ).sort( {last_name:1, first_name:1} )

    db.products.find( {}, {n} ).sort( {author:1, date.posted:-1} )
```

querying | updating
--- | ---
$gte | $inc
$gt | $set - set a new value or a value to previous or non-exists
$lt | $unset
$lte | $push - add something to an array
$or | $pop
$in | $addToSet - non-exists
$nin |
$type |

``` javascript
    for( var i = 0; i < 20000; i++){db.test.insert({x:i, y: "hi"}); }

    db.test.find().skip(20).limit(5)
    db.test.find().sort({x:-1}).skip(20).limit(5)

    db.test.find().help()

    var cursor = db.test.find();
    cursor.hasNext()
    cursor.next()

    var cursor = db.test.find().limit(100);while( cursor.hasNext() ) print(cursor.next());

    var cursor = db.test.find().limit(100);while( cursor.hasNext() ) print(cursor.next().x);

    {
        var cursor = bd.test.find().limit(100);
        while(cursor.hasNext()){
          print("x: " + cursor.next().x);
        }
    }
```
> Summary
  >> Framework

  >> Context

  >> CRUD

   CRUD | MongoDB
   --- | ---
   create | inserting
   read | finding
   update | updating
   delete | deleting

  >> Administrative commands

  >> Performance

  >> Deployments

  ---

### Week 2 - CRUD and Administrative commands
```javascript
    db.collection_name.insert( {a:1} )

    db.collection_name.find().pretty()

    var x = db.collection_name.find().toArray()
    x

    db.getLastError()
```

> **Updates**
  >> 1. full document update / replacement

  >> 2. Partial document update / replacement

  ```javascript
      db.collection_name.update( {where}, {doc_or_partia:update_expression} )

      db.test.update( {_id:100}, {x:"hello world", y:123} )

      t = db.test
      t.find()
      t.update( {_id:100}, {x:"hello world", y:123} )


      myobj = t.findOne()
      myobj.y = 123
      myobj

      // save is a shell helper command
      t.update( {_id:myobj_id}, myobj ) / t.save(myobj)

  ```

**partial updates**

```javascript
      t.update( {_id:101}, {$set:{y:100}} )

      mydoc = {$set:{y:100}}

      t.update( {_id:101}, {$inc:{y:1}} )

      t.update( {_id:101}, {$push:{arr:"hi"}} )
  ```
> **Remove / Delete**

```javascript
    db.collection_name.remove( {expression})

    db.test.remove( {_id:100} )

    db.test.remove()

    // if x contains "ello", then delete the record
    db.test.remove( {x:/ello/} )
```

> **Multi Update**

```javascript
    db.collection_name.update( {where}, {obj}, upsert, multi )
    db.test.update( {active: true}, {$inc:{priority:1}}, false, true )
```

> upsert - update, or insert if not present

```javascript
    db.collection_name.update( {where}, {obj}, upsert, multi )
    db.test.update( {_id:"sports/football"}, {$inc:{priority:1}}, true )

    t = db.pageviews
    t.update( {_id:"/sports/football"}, {$inc:{views:1}}, true )
    t.find()
```

> **Bulk Write Operations**

  >> ordered and unordered

  ```javascript
      var bulk = db.items.initializeUnorderedBulkOp();
      bulk.insert( {item:"ijk123", defaultQty:200, status:"A", points:200}
      bulk.insert( {item:"asd123", defaultQty:0, status:"B", points:0} );
      bulk.execute()

      var bulk = db.items.initializeOrderedBulkOp();
      bulk.insert( {item:"ijk123", defaultQty:200, status:"A", points:200}
      bulk.insert( {item:"asd123", defaultQty:0, status:"B", points:0} );
      bulk.execute()

      bulk.find( {item:"abc123"} ).remove()
      bulk.find( {item:"ijk123"} ).update( {$inc:{points:1}} )
      bulk.execute()
  ```
> docs.mongodb.org/manual/reference/commands/

> **db.runCommand()**

```javascript
    db.runCommand( {command-name : value, p1:v1, p2:v2} )

    db.runCommand( {getLastError:1, w:2} )
```

> **Command**

Commands |
--- |
getLastError | isMaster
drop | create | compact
ensureIndex | dropIndex | currentOp | killOp


```javascript
    db.runCommand( {command-name : value, p1:v1, p2:v2} )

    db.runCommand( {getLastError:1, w:2} )

    db.runCommand( {isMaster:1} ) = db.runCommand( {"isMaster"} ) = db.isMaster()

    // content of collection has been removed, but the collection is still there
    db.test.remove( {} )
    db.system.namespaces.find()

    // collection and its name have been removed
    db.test.drop()
```

Server | DB | Collection | index
--- | --- | --- | ---
isMaster | dropDatabase | create | ensureIndex,
serverStatus | repairDatabase | drop | dropIndex
logout | clone | collections |
 | copydb | renameCollection |
 | dbStats | |
getLastError | | count |
 | | aggregate |
 | | mapReduce |
 | | FindAndModify


### Week 3 - Performance

> A storage engine does affect:
  >> 1. How data is written to disk
  >> 2. How data is deleted/removed from disk
  >> 3. How data is read from disk
  >> 4. Data structures used to store data

MMAPv1 | WiredTiger
--- | ---
Grew from original storage engine | New in MongoDB 3.0
Uses mmap system call | First pluggable storage engine
default S.E. in MongoDB 3.0, run "mongod --storageEngine mmapv1" | Document level Locking, compressiong, Locks some pitfalls of MMAPv1, Perfomrance gains
"db.serverStatus()" | Built separately from MongoDB
Collection level locking with MongoDB3.0 | Used by other DB's
Database level with 2.2-2.6 | Open source
Data on disk is BSON - Bits are mapped from disk to virtual memory | mongod --storageEngine wiredTiger

> **createIndex(), getIndexes(), dropIndex()**

```javascript
    db.test.find().sort( {a:-1} )
    // you can't create index with a:-1, b:1 or a:1, b:-1
    db.foo.createIndex( {a:1, b:1} )
    db.foo.createIndex( {a:-1, b:-1} )
    db.foo.getIndexes()
    db.foo.dropIndex( {a:1} )
```

> notes on indexes
  >> * Keys can be any type
    {x:3} {x : null}
  >> * _id index is automatic and unique
  >> * other than _id explicitly declared
  >> * automatically used
  >> * can index array contents { likes:["tennis", "golf"] } - multiple keys
  >> * can index subdocuments and subfields
  >> * field names are not int he index

> **indexes properties**

  >> * default
  >> * unique : true
  >> * sparse : true

  ```javascript
      t2 = db.dupdemo
      t2.insert( [ {x:3}, {x:4}, {x:5} ] )
      t2.ensureIndex( {x:1}, {unique:true} )

      // Error message will be shown
      t2.insert( {x:4} )

  ```
> **Geospatial Indexes**

```javascript
    db.places.ensureIndex( { loc : "2dsphere" } )
    db.places.find( { loc:
      { $near : { $geometry :
                { type : "Poing", coordinates : [2, 2.01] }} } } )

    // To find records which contain "cat" string
    db.sentences.find( { $text:{ $search:"cat" } } )

    // To find records which contain "cat" as partial
    db.sentences.find( { $text:{ $search:/cat/ } } )

    db.sentences.ensureIndex( { words : "text" } )

    db.sentences.dropIndexes()
    db.sentences.ensureIndex( {words:"text"}, {default_language:"english"} )
```

> Looks at the following queries:
  >> **aggregates**
  >> **find()**
  >> **count()**
  >> **remove()**
  >> **update()**
  >> **group()**

```javascript
    for(i = 0; i < 100; i++){
      for(j = 0; j < 100; j++){
        x = [];
        for(k = 0; k < 100; k++){
          push( { a:i, b:j, c:k, _id:(100*100*i + 100*j + k) } )
        };
        db.example.insert(x)
      }
    }

    db.example.createIndex( { a:1, b:1 } )
    db.example.createIndex( { b:1 } )
    db.example.explain().find( { a:17 } ).sort( { b:-1 } )
```

> reads VS. writes
  >> * generally, more indexes --> faster reads
  >> * generally, more indexes --> slower writes
  >> * faster to build an index post import than pre-import

> currentOp() and killOp()
```javascript
    db.currentOp()
    db.killOp(Operation_id)

    db.example.find()

    while( 1 ){
      db.example.update( {}, { $inc:{x:1}, false, true } )
    }
    db.currentOp()  --> opid
    db.killOp(2530594)
```

> The Profiler
```javascript
    db.setProfilingLevel(2)
    db.system.profile.find().pretty()
    db.system.profile.find().sort( { $natural : -1 } )
    db.getProfilingStatus()
    db.system.namespaces.find()
```
  >> levels --> 0 = off; 1 = selective ("slow"); 0 = on

> mongostat and mongotop
```javascript
    // At shell
      mongostat --port 27003
```

> In a mongo shell run homework.b(). This will run in an infinite loop printing some output as it runs various statements against the server.

### Week 4 - Replication
> reasons for Replication
  >> * High available
  >> * data safety
  >> * extra copies
  >> * disaster recovery

> starting replica sets
```javascript
    // type commands in shell
    mkdir 1 2 3
    mongod --port 27001 --replSet abc --dbpath /Users/webinar/dba/1 --logpath /Users/webinar/dba/log.1 --logappend --oplogSize 50 --smallfiles --fork    
```

> initiating the set
  >> 1. specify config
  >> 2. initial data
```javascript
    mongo --port 27001

    cfg - {
        _id  "abc",
        members : [
            {_id:0, host:"10gen.local:27001"},
            {_id:0, host:"10gen.local:27002"},
            {_id:0, host:"10gen.local:27003"}
        ]
    }

    rs.help()

    cfg
    //rs.initiate(cfg)
    rs.initiate(cfg)
    rs.status()

    rs.conf() : show configuration
    db.system.replset.find().pretty()

    db.isMaster()

    // use secondary server
    mongo --port 27002
    
    // kill primary
    
    // do not use -9 in general
    kill -9 427

    kill 427
```

> reasons you wanna read secondary service
    >> 1. geopgraphy
    >> 2. separate a work load
    >> 3. separate load
    >> 4. availability

> read preference

No. | read preference | memo
--- | --- | ---
1. | priary | **default**
2. | primary preferred | try to talk to the primary, if it can't find the primary, it will try to talk to secondary;  **primary is possible**; **secondary is possible**
3. | secondary | **secondary is possible**
4. | secondary preferred | try to talk to the secondary, if it can't find the secondary, it will try to talk to nearest;  **primary is possible**; **secondary is possible**
5. | nearest | go to the nearest memory set;**primary is possible**; **secondary is possible**
 

 if you are not sure what to sus
> if you are not sure what to use
    >> * when in default, use primary preference
    >> * when remote, use nearest
    >> * use secondary for ceratin reporting workloads
    >> * even read loads consider nearest

### Week 5 - Replication Part 2
```javascript
    // start mongoDB server with port 27001, 27002, 27003
    mongod --port 27001 --replSet abc --dbpath /Users/zhengxiao/1 --logpath /Users/zhengxiao/log.1 --logappend --oplogSize 50 --smallfiles --fork 

    mongod --port 27002 --replSet abc --dbpath /Users/zhengxiao/2 --logpath /Users/zhengxiao/log.2 --logappend --oplogSize 50 --smallfiles --fork 

    mongod --port 27003 --replSet abc --dbpath /Users/zhengxiao/3 --logpath /Users/zhengxiao/log.3 --logappend --oplogSize 50 --smallfiles --fork 

    // access primary server 27001
    mongo --port 27001
    rs.conf() -- check host name
```

```javascript
    cfg
    cfg.members[2].slaveDelay = true;
    cfg
    rs.reconfig(cfg)
    cfg.members[2].priority = 0
    rs.config(cfg)
    ctg = rs.conf()
    cfg.members[2].slaveDelay = 8 * 3600
    cfg.members[2].hidden = true
    cfg
    rs.status()·
```

> Cluster wide commits and write concern
    >> * majority => commited(durable)
    
> principles
    >> 1. write is truly commited upon application @ a majority of the set
    >> 2. We can get acknowledge of this

 write concern | use cases
 --- | ---
1. no call to GLE | --> page view counter (no user impact); logging
2. w:1 | --> not super critical
3. w:"majority" | --> most things important
4. w:3 (all) | --> flowcontrolled

```javascript
    for(i = 0; i < 10000; i++){
        db.foo.insert(arr[i]);
        if(i % 500== 0 || i == 9999){
            db.gotLastError({ $w_ })
        }
    }
```

### Week 6 - Scalability

### Week 7 - Backup and Recovery

### Final Exam
