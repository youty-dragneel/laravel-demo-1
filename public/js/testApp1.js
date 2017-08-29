/*Vue.componet('item-list', {
	
	props : ['']

	template : '<tr v-for="item in items"><td v-html="item.id"></td><td v-html="item.name"></td><td v-html="item.price"></td><td v-html="item.qty"></td></tr>'

,	

})*/

new Vue({
	el : '#app'

,	data : {
		items : [
			{id : '1', name :'ABC', price: '10$', qty: '100'}
		,   {id : '2', name :'ABC', price: '10$', qty: '70' }
		,	{id : '3', name :'ABC', price: '10$', qty: '80' }
		, 	{id : '4', name :'ABC', price: '10$', qty: '90' }
		]
	}
})

new Vue({

	el	 :  '#app1'

,	data : 	{
		rows : [
			{id : '1', name :'ABC', price: '10$', qty: '100'}
		,   {id : '2', name :'ABC', price: '10$', qty: '70' }
		,	{id : '3', name :'ABC', price: '10$', qty: '80' }
		, 	{id : '4', name :'ABC', price: '10$', qty: '90' }
		]
	}

,	computed : {
		"columns" : function(){
			if(this.rows.length == 0){
				return []
			}
			return Object.keys(this.rows[0])
		}
	}

})
/*



var secondTable = new Vue({
  el: '#secondTable',
  data: {
    rows: [
      { id: 1, name: "Chandler Bing", phone: '305-917-1301', profession: 'IT Manager' },
      { id: 2, name: "Ross Geller", phone: '210-684-8953', profession: 'Paleontologist' },
      { id: 3, name: "Rachel Green", phone: '765-338-0312', profession: 'Waitress'},
      { id: 4, name: "Monica Geller", phone: '714-541-3336', profession: 'Head Chef' },
      { id: 5, name: "Joey Tribbiani", phone: '972-297-6037', profession: 'Actor' },
      { id: 6, name: "Phoebe Buffay", phone: '760-318-8376', profession: 'Masseuse' }
    ]
  },
  computed: {
    "columns": function columns() {
      if (this.rows.length == 0) {
        return [];
      }
      return Object.keys(this.rows[0])
    }
  }
});*/