<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compartible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="js/vue/dist/vue.js"></script>
</head>
<body>

<div id="app">
	<!-- <input type="text" v-model="coupon"> -->
	<input type="text" :value="coupon" @input="coupon = $event.target.value">
  	<!-- <input type="text" :value="coupon" @input="coupon = $event.target.value"> -->
  	<!-- <coupon v-model="coupon"> -->
</div>

</body>
<script type="text/javascript" src="js/testApp.js"></script>
</html>