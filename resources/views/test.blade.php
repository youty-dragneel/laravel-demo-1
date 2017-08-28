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
	<input type="text" name="name" id="name" v-model="name">
</div>
<div id="example">
	<button v-on:click="greet">Greet</button>
	<button v-on:click="hello">Greet</button>
</div>
<div id="exmaple-1">
	<button v-on:click="">Add 1</button>
</div>

<div id="example-2">
  <simple-counter></simple-counter>
  <simple-counter></simple-counter>
  <simple-counter></simple-counter>
</div>

<script type="text/javascript">
var data = { counter : 0 }
// ------------- Declare component
Vue.component('simple-counter',{
	template : '<button v-on:click="counter += 1">@{{ counter }}</button>',
	data : function(){
		return {
			counter : 0
		}
	} 
})


// ---------add new Event ---------------
new Vue({
	el : '#exmaple-1',
	data : {
		counter : 0
	}
})

new Vue({
	el : '#example-2'
})

var vm = new Vue({
	el : '#example' ,
	data: {
    	name: 'Vue.js'
  	},
	methods : {
		greet: function(event){
			alert(event.target.tagName);
		},
		hello: function(event){
			alert('hello function')
		}
	}
})

</script>

</body>
</html>