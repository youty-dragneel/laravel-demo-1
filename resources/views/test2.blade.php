<!DOCTYPE html>
<html>
<head>
    <title>Hello Laravel</title>
    <script type="text/javascript" src="js/vue/dist/vue.js"></script>
    <link rel="stylesheet" type="text/css" href="css/semantic-ui/dist/semantic.min.css">
</head>
<body>
<div id="app">
    <h3>For Loop</h3>    
    <table border=1>
        <thead>
            <tr>
                <th>Id</th>                
                <th>Name</th>                
                <th>Price</th>                
                <th>Qty</th>                
            </tr>
        </thead>
        <tbody>
  <!--           <tr-list v-model="item-list">
             -->
            <tr v-for="item in items">
                <td v-html="item.id"></td>
                <td v-html="item.name"></td>
                <td v-html="item.price"></td>
                <td v-html="item.qty"></td>
            </tr>
        </tbody>
    </table>
</div>

<div id="app1">
    <h3>For Loop</h3>    
    <table id="secondTable" border="1">
      <thead>
        <tr>
          <th v-for="col in columns">@{{col}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows">
          <td v-for="col in columns">@{{row[col]}}</td>
        </tr>
      </tbody>
    </table>
</div>


<script type="text/javascript" src="js/testApp1.js"></script>
</body>
</html>
