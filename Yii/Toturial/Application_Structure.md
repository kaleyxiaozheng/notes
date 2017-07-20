**[Application Structure](https://www.tutorialspoint.com/yii/yii_application_structure.htm)**

> There is only one folder in the overall code base that is publicly available for the web server. It is the web directory. Other folders outside the web root directory are out of reach for the web server.

> **Note** - All project dependencies are located in the `composer.json` file.

folders in Yii 2 | Explanation
-- | --
`Assets` | This folder includes all `.js` and `.css` files referenced in the web page.
`Commands` | This folder includes the controllers that can be used from the terminal.
`Config` | This folder contains **config** files for managing database, application and application parameters.
`Mail` | This folder includes the mail layout.
`Models` | This folder includes the models used in the application.
`Runtime` | This folder is for storing runtime data.
`Tests` | This folder includes all the tests (acceptance, unit, functional).
`Vendor` |  This folder contains all the third-party packages managed by Composer.
`Views` | This folder is for views, that are displayed by the controllers. The _layout_ folder is a for page template.
`Web` | The entry point from web.

> **Yii2 Objects**

Objects | Explanation
-- | --
`Models, Views, and Controller` | * **Models** are for data representation (usually from the database). <br /> * **Views** are for displaying the data. <br /> * **Controllers** are for processing requests and generating responses.
`Components` | * To create a reusable functionality, the user can write his own components. <br /> * **Components** are just objects that contain `logic`. For example, a component could be a weight converter.
`Application components` | * These are objects that instanced just one time in the whole application. <br /> * The main difference between Components and Application components is that the latter can have **only one instance** in the whole application.
`Widgets` | Widgets are reusable objects containing both **logic and rendering code**. A widget could be, for example, a gallery slider.
`Filters` | Filters are objects that run before or after the execution of the Controller actions.
`Modules` | You can consider Modules as reusable subapps, containing Models, Views, Controllers, and so forth.
`Extensions` | Extensions are packages that can be managed by the Composer.

> The difference between `Components` and `Widgets` is on top of `logic`, `Widgets` also contains `rendering code`.