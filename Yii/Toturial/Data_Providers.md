**[Data Providers](https://www.tutorialspoint.com/yii/yii_data_providers.htm)**

> Yii provides a set of data provider classes that encapsulate pagination and sorting. A data provider implements `yii\data\DataProviderInterface`. It supports retrieving sorted and paginated data. Data providers usually work with data widgets.

> Yii includes -
>> * `ActiveDataProvider` - Uses `yii\db\ActiveQuery` or `yii\db\Query` to query data from databases.
>> * `SqlDataProvider` - Executes SQL and returns data as arrasy.

>> * `ArrayDataProvider` - Takes a big array and returns a slice of it.

> You define the sorting and pagination behaviors of a data-provider by configuring its pagination and sort properties. Data widgets, such as `yii\grid\GridView`, have a property called `dataProvider`, which takes a data provider instance and displays the data on the screen.

>> After creating databsae and changing file of `\configdb.php`. Inside the root folder run `./yii migrate/create test_table`. This command will create a database migration for managing our DB. The migration file should appear in the migrations folder of the project root.