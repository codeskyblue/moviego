<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="">
	<meta name="author" content="">
    <base href="/">
	<title>电影库</title>
	<link href="/static/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link href="/static/lib/toastr/toastr.min.css" rel="stylesheet">
	<link href="/static/css/style.css" rel="stylesheet">
</head>
<body ng-app="moivego" ng-class="pageClass">
<nav class="global-nav">
<div class="global-nav container">
</div>
</nav>
<header class="site-header">
<div ng-include="'/static/tpl/header.html'"></div>
</header>
<main class="main-container" ng-view></main>
<script type="text/ng-template" id="/tpl/index.html">
   
</script>

<script src="/static/lib/angular/angular.js"></script>
<script src="/static/lib/jquery/jquery.js"></script>
<script src="/static/lib/angular/angular-animate.min.js"></script>
<script src="/static/lib/angular/angular-cookies.min.js"></script>
<script src="/static/lib/angular/angular-resource.min.js"></script>
<script src="/static/lib/angular/angular-route.min.js"></script>
<script src="/static/lib/angular/angular-sanitize.min.js"></script>
<script src="/static/lib/angular/ui-bootstrap-tpls.min.js"></script>
<script src="/static/lib/toastr/toastr.js"></script>
<script src="/static/js/tools.js"></script>
<script src="/static/js/router.js"></script>
<script src="/static/js/services.js"></script>
<script src="/static/js/filters.js"></script>
<script src="/static/js/directives.js"></script>
<script src="/static/js/controllers.js"></script>
<script src="/static/js/app.js"></script>

</body>
</html>