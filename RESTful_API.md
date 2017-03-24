当一个软件架构符合REST原则，我们称之为RESTful架构。按照RESTful架构可以充分的利用HTTP协议带给我们的各种功能，算是对HTTP协议使用的最佳实践，还有一点就是可以使软件架构设计更加清晰，可维护性更好。

幂等性：Idempotence 本身是一个数学概念，在HTTP/1.1规范中幂等性的定义是：Methods can also have the property of "idempotence" in that the side-effects of N > 0 identical requests is the same as for a single request.
即：如果方法调用一次和多次产生额外的效果是相同的，它就具有幂等性
例子：在HTTP中使用GET方法通常用于从服务器获取资源，无论调用多少次产生的额外效果都是从服务器获取资源，所以GET具有幂等性；而POST方法通常用于提交数据在服务器上创建一个资源，由于最终创建的结果每次都是不同的，所以POST不具有幂等性；但是PUT方法却是幂等的，因为每次调用产生的效果都是对资源进行更新。

> RESTful API设计规则：
>> 1. 应该将API部署在专用域名之下：api.example.com
>>> * 不用大写
>>> * 用-， 不用_
>>> * 参数列表要encode
>>> * URI中不应该出现动词，动词应该使用HTTP方法表示，但如果无法表示，也可使用动词，如search没有对应的HTTP方法，可在路径中使用search
>>> * URI中的名次表示资源集合，使用复数形式
>>> * 虽然/在URI中表示层级，但是避免为了追求REST导致层级过深，适当使用参数表示 GET /comments/tid?tid=1&page=1
>> 2. Request: 通过标准HTTP方法对资源CRUD
>>> * GET: 查询资源 - GET /comments --> 获取所有评论； GET /comments/tid/1 --> 获取文章tid为1的所有评论
>>> * POST：创建资源 - POST /comments/tid/1 --> 为tid为1的文章创建评论
>>> * PUT：更新资源 - PUT /comments/cid/like/1 --> 为cid为1的评论点赞
>>> * DELETE：删除资源 - DELETE /comments/cid/1 -->删除cid为1的评论
>> 3. Response
>>> * 采用JSON，不使用XML
>>> * 默认情况下JSON外层不需要嵌套大括号，API需要支持JSON跨域访问或客户端无法访问HTTP header才需要加上嵌套大括号
>>> * 默认情况下不要过滤API输出中的空格，并且要支持gzip
>> 4. API版本控制
>>> * 在URI中存放：GET /v1/comments；
>>> * 客户端在Accept Header中存放：Accept: application/vnd.github.v3+json，服务器自定义Header返回当前版本信息：X-GitHub-Media-Type: github.v3; format=json（GitHub在用）；
>>> * 以上两种方法根据情况选择，Github用的方式是REST中所要求的方式；
>>> * 测试API和正式API要进行区分，方式通过如上两种方式实现。
>> 5. 速度限制
>>> 为了避免请求泛滥，给API设置速度限制很重要。为此 RFC 6585 引入了HTTP状态码429（too many requests）。加入速度设置之后，应该提示用户，至于如何提示标准上没有说明，不过流行的方法是使用HTTP的返回头。
下面是几个必须的返回头（依照twitter的命名规则）：
>>> * X-Rate-Limit-Limit :当前时间段允许的并发请求数
>>> * X-Rate-Limit-Remaining:当前时间段保留的请求数
>>> * X-Rate-Limit-Reset:当前时间段剩余秒数
>> 6. 缓存
>>> HTTP提供了自带的缓存框架。你需要做的是在返回的时候加入一些返回头信息，在接受输入的时候加入输入验证

