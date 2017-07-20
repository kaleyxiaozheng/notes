**[Active Record](https://www.tutorialspoint.com/yii/yii_active_record.htm)**

> Active Record provides an object-oriented API for accessing data. An Active Record class is associated with a database table.

> After declaring an Active Record cass (Say **MyUser** model) for a seperate database table, you should follow these steps to query data from it-
>> * Create a new query object, using the `yii\db\ActiveRecord::find()` method.
>> * Build the query object.
>> * Call a query method to retrieve data.

> **Example**
>> **Step 1** - Modify the **actionTestDb()** method this way.
```javascript
public function actionTestDb() {
   // return a single user whose ID is 1
   // SELECT * FROM `user` WHERE `id` = 1
   $user = MyUser::find()
      ->where(['id' => 1])
      ->one();
   var_dump($user);

   // return the number of users
   // SELECT COUNT(*) FROM `user`
   $users = MyUser::find()
      ->count();
   var_dump($users);

   // return all users and order them by their IDs
   // SELECT * FROM `user` ORDER BY `id`
   $users = MyUser::find()
      ->orderBy('id')
      ->all();
   var_dump($users);
}
```

> **Querying by `primary key values` or `a set of column values`**, Yii provides the following methods
>> * `yii\db\ActiveRecord::findOne()` − Returns a single Active Record instance

>> * `yi\db\ActiveRecord::findAll()` − Returns an array of Active Record instances

```javascript
public function actionTestDb() {
    
   // returns a single customer whose ID is 1
   // SELECT * FROM `user` WHERE `id` = 1
   $user = MyUser::findOne(1);
   var_dump($user);
   // returns customers whose ID is 1,2,3, or 4
   // SELECT * FROM `user` WHERE `id` IN (1,2,3,4)
   $users = MyUser::findAll([1, 2, 3, 4]);
   var_dump($users);
   // returns a user whose ID is 5
   // SELECT * FROM `user` WHERE `id` = 5
   $user = MyUser::findOne([
      'id' => 5
   ]);
   var_dump($user);
}
```
 ---
 >**Save Data to Database**
 >> To save data to the database, you should call the `yii\db\ActiveRecord::save()` method.

 >>> **Step 1** - Modify the `activeTestDb()` method 
 ```javascript

public function actionTestDb() {
   // insert a new row of data
   $user = new MyUser();
   $user->name = 'MyCustomUser2';
   $user->email = 'mycustomuser@gmail.com';
   $user->save();
   var_dump($user->attributes);
   
   // update an existing row of data
   $user = MyUser::findOne(['name' => 'MyCustomUser2']);
   $user->email = 'newemail@gmail.com';
   $user->save();
   var_dump($user->attributes);
}
 ```

 ---
 >**Delete a single row of data**, you should -
 >> * Retrieve the Active Record instance.
 >> * Call the `yii\db\ActiveRecord::delete()` method

 >>> **Step 1** - Modify the `activeTestDb` method

 ```javascript
public function actionTestDb() {
   $user = MyUser::findOne(2);
   if($user->delete()) {
      echo "deleted";
   } 
}
 ```

 ---
 >**Delete multiple rows of data**, you should -
 >> * Call the `yii\db\ActiveRecord::deleteAll()` method

 >>> **Step 1** - Modify the `activeTestDb` method

 ```javascript
public function actionTestDb() {
   MyUser::deleteAll('id >= 20');
}