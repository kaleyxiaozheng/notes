**[HTTP Requests](https://www.tutorialspoint.com/yii/yii_http_requests.htm)**

> Requests are represented by the `yii\web\Request` object, which provides information about HTTP headers, request parameters, cookies, and so forth.

> The methods `get()` and `post()` return request parameters of the request component.

```javascript
// Example
$req = Yii::$app->request;
   /*
   * $get = $_GET;
   */
   $get = $req->get();

   /*
   * if(isset($_GET['id'])) {
   *     $id = $_GET['id'];
   * } else {
   *     $id = null;
   * }
   */
   $id = $req->get('id');
	
   /*
   * if(isset($_GET['id'])) {
   *     $id = $_GET['id'];
   * } else {
   *     $id = 1;
   * }
   */
   $id = $req->get('id', 1);
	
   /*
   * $post = $_POST;
	*/
   $post = $req->post();

   /*
   * if(isset($_POST['name'])) {       
   *     $name = $_POST['name'];          
   * } else {
   *     $name = null;
   * }
   */
   $name = $req->post('name');
		  
   /*
   * if(isset($_POST['name'])) {
   *     $name = $_POST['name'];
   * } else {
   *     $name = '';
   * }
   */
   $name = $req->post('name', '');
```

> To retrieve parameters of other request methods (PATCH, DELETE, etc.), use the yii\web\Request::getBodyParam() method.

To get the HTTP method of the current request, use the Yii::$app→request→method property.