No | Name
-- | --
1 | [Saying Hello](http://www.yiiframework.com/doc-2.0/guide-start-hello.html)
2 | [Working with Forms](http://www.yiiframework.com/doc-2.0/guide-start-forms.html)
3 | [Working with Databases](http://www.yiiframework.com/doc-2.0/guide-start-databases.html)
4 | [Generating Code with Gii]()
5 | [Looking Ahead]()
---
#### 1. Saying Hello
<ol>
<li>Creating an Action inside a controller</li>
<li>Creating a View</li>
</ol>

---
#### 2. Working with Forms
<ol>
<li>Create a _model_ to represent the data entered by a user through a form.</li>

 **note:** `yii\base\Model` is used as a parent for model classes **NOT** associated with database tables. `yii\db\ActiveRecord` is normally the parent for model classes that do correspond to database tables.

<li>Next, you will need to create an `entry` action in the certain controller that will use the new model.</li>

<li>Creating views</li>
</ol>

> `yii\widgets\ActiveForm` is smart enough to extract the validation rules that you have declared in `EntryForm`, turn them into executable JavaScript code, and use the JavaScript to perform data validation. In case you have disabled JavaScript on your browser, the validation will still be performed on the server-side, as shown in the `actionEntry()` method. This ensures data validatiy in all circumstances.

---
#### 3. Working with Databases
**Configuring a DB Connection**
> Check if `pdo_mysql` is available or not, command `php -m`

> The `config/db/php` file is a typical file-based _configuration_ tool. This particular configuration file specifies the parameters needed to create and initialize a `yii\db\Connection` instance through which you can make SQL queries against the underlying database.

**Creating an Active Record**
> The `Pagination` object serves two purposes:
>> * Sets the `offset` and `limit` clauses for the SQL statement represented by the query so that it only returns a single page of data at a time (at most 5 rows in a page)
>> * It's used in the view to display a pager consisting of a list of page buttons, as will be explained in the next subsection.

**Creating a View**

---
#### 4. Generating Code with Gii
> 

---
#### 5. Looking Ahead