**[Views](https://www.tutorialspoint.com/yii/yii_views.htm)**

> Views are responsible for presenting the data to end users. In web applications, Views are just PHP script files containing HTML and PHP code.

> `<?= Html::encode($this->title) ?>` It is important to encode and/or filter the data coming from the end user in order to avoid the XSS attacks. You should always encode a plain text by calling `yii\helpers\Html::encode()` and HTML content by calling `yii\helpers\HtmlPurifier`.

> **Note** - that the javascript code inside the `Html::encode()` function is displayed as **plain text**. The same thing is for `HtmlPurifier::process()` call. 

> **Views** follow these conventions −
>> * Views, which are rendered by a controller, should be put into the `@app/views/controllerID folder`.
>> * Views, which are rendered in a widget, should be put into the `widgetPath/views `folder.

**render a view within a controller** | **using the following methods**
-- | --
`render()` |  Renders a view and applies a layout
`renderPartial()` | Renders a view without a layout
`renderAjax()` | Renders a view without a layout, but injects all registered js and css files
`renderFile()` | Renders a view in a given file path or alias
`renderContent()` | Renders a static string and applies a layout.

**render a view within another view** | **using the following methods**
-- | --
`render()` |  Renders a view and applies a layout
`renderAjax()` | Renders a view without a layout, but injects all registered js and css files
`renderFile()` | Renders a view in a given file path or alias

> **Accessing Data in Views**
>> To access data within a view, you should pass the data as the second parameter to the view rendering method.