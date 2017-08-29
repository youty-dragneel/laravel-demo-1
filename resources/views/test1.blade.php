<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compartible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="js/vue/dist/vue.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
</head>
<body>

<div id="app">
  	<coupon v-model="coupon">
</div>
<hr>
<h3>Watch and Compute property</h1> 
<div id="app-1">
	<p>Original message: "@{{ message }}"</p>
	<p>Computed reversed message: "@{{ reversedMessage }}"</p>
	<p>Date : @{{ curDate }}</p>
</div>
<div id="app-2">@{{ fullName }}</div>
<hr>
<h3>Computed Setter</h1> 
<div id="app-3">	
	@{{ fullName }}
</div>

<div id="app-4">
	<button @click="displayInput">Edit</button>

	Your name is : <span v-if="inSts">
		 <input  v-model = "myName">
		 </span>
	<div>@{{ myName }}</div>	

	<h3>v-once</h3>	 
	<div v-once>@{{ myName }}</div>

	<h3>v-Html</h3>
	<div v-html="myName"></div>

	<h3>Attributes [v-bind]</h3>
	<button v-bind:disabled="isButtonDisabled">Button</button>

	<a v-bind:href="url">localHost</a>
</div>

<hr>
<h3>Watch</h3>
<div id="app-5">
	<p>
		Ask a yes/no question : 
		<input v-model="question">
	</p>	
	<p>@{{ answer }}</p>
</div>

<div id="app-6">
	<input v-model="password">	
</div>

<div id="app7">
	<form v-on:submit.prevent="onSubmit">
		
	</form>
</div>
</body>
<script type="text/javascript" src="js/testApp.js"></script>
</html>