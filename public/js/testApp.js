Vue.component('coupon',{
	props : ['value']

,	template : '<input type="text" :value="value" @input="updateCode($event.target.value)" ref="clearInput">'

,	data(){
		return{
			invalids : ['ALLFREE']
		}
	}

,	methods  : {
		updateCode(value){

			if(this.invalids.includes(value)){
				alert('invalid');
				this.$refs.clearInput.value =  value = '';

			}

			this.$emit('input',value);
		}
	}
})

new Vue({
	el : '#app' 

,	data : {
		coupon : 'TEST'
	}
})

new Vue({
	el   : '#app-1'
,   data : {
		message : 'Hello'
	}
,	computed : {
		reversedMessage: function () {
	     	
	      return this.message.split('').reverse().join('')
	    } 
	,	curDate : function(){
			return Date.now()
		}    
	}	

})

new Vue({
	el : '#app-2'

,	data : {
		firstName : 'nguon'
	,	lastName  : 'youty'
	}	

,	computed : {
		fullName : function(){
			return this.firstName + ' ' + this.lastName
		}
		}
})

new Vue({
	el : '#app-3'

,	data : {
		firstName : 'Natsu'
	,	lastName  : 'Dragoneel'
	}

,	computed : {
		fullName : {
			get : function(){
				return this.firstName + ' ' + this.lastName
			}

		,	set : function(newValue){
				var names = newValue.split(' ');
				this.firstName = names[0];
				this.lastName  = names[1];
			}
		}
	}
})

new Vue({
	el : '#app-4'
,	data : {
		myName : 'youty'
	,	inSts  : 'false'
	,	isButtonDisabled : 'false'
	,	url 	  : 'http://localhost:8000/test1'
	}

,	methods : {
		displayInput : function(){
			this.inSts = true
		}
	}

,	computed : {
	/*	fullName : {
			get : function(){
				return myName
			}

		,	set : function(newValue){
				
			}
		}*/
	}	
})

new Vue({
	el : '#app-5'

,	data : {
		answer : 'I cannot give you answer until you ask a question!'
	,	question : ''
	}	

,	watch : {
		// whenever question changes, this function will run
		question : function(newQuestion){
			this.answer = 'Waiting for you to stop tryping...'
		}
	}

,	methods : {
		 getAnswer: _.debounce(
	      function () {
	        if (this.question.indexOf('?') === -1) {
	          this.answer = 'Questions usually contain a question mark. ;-)'
	          return
	        }
	        this.answer = 'Thinking...'
	        var vm = this
	        axios.get('https://yesno.wtf/api')
	          .then(function (response) {
	            vm.answer = _.capitalize(response.data.answer)
	          })
	          .catch(function (error) {
	            vm.answer = 'Error! Could not reach the API. ' + error
	          })
	      },
	      // This is the number of milliseconds we wait for the
	      // user to stop typing.
	      500
	    )
	}	
})




new Vue({

	el : '#app-6'
,	data : {
		password : ''
	}
,	watch : {
		password : function(password){
			console.log(password)
		}
	}
,	methods : {

	}	

})









