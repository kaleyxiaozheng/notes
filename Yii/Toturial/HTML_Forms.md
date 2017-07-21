**[HTML Forms](https://www.tutorialspoint.com/yii/yii_html_forms.htm)**

> Creating a form via `yii\widgets\ActiveForm` class.

> If the model represents data from a database, then the model should be derived from the `ActiveRecord` class.

> If the model captures arbitrary input, it should be derived from the `yii\base\Model ` class.

> We observe the following −
>> * The `ActiveForm::begin()` function marks the beginning of the form. All the code between `ActiveForm::begin()` and `ActiveForm::end()` functions will be wrapped within the form tag.
>> * To create a field in the form you should call `the ActiveForm::field()` method. It creates all the input and label tags. Input names are determined automatically.
>> * the password attribute will be `RegistrationForm[password]`. If you want an attribute to take an array, you should append [ ] to the attribute name.