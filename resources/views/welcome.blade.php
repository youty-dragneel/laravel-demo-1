<!DOCTYPE html>
<html>
<head>
    <title>Hello Laravel</title>
    <!-- <script type="text/javascript" src="js/jquery/jquery-3.2.1.min.js"></script> -->
    <!-- <script type="text/javascript" src="js/vue/dist/vue.min.js"></script> -->
    <script type="text/javascript" src="js/vue/dist/vue.js"></script>
    <!-- <script type="text/javascript" src="css/semantic-ui/dist/semantic.min.js"></script> -->
    <link rel="stylesheet" type="text/css" href="css/semantic-ui/dist/semantic.min.css">
</head>
<body>
<div class="ui container">
    
    <form class="ui form" id="app">
    <h4 class="ui dividing header">Test Input</h4>
    <div class="field">
        <div class="two fields">
            <div class="field">
                <label>Id</label>
                <input type="text" id="txtId" v-model="userId">   
            </div>
            <div class="field">
                <label>Name</label>
                <input type="text" id="txtName"/>            
            </div>
        </div>

        <div class="two fields">
            <div class="field">
                <label>Email</label>
                <input type="text" id="txtEmail"/>
            </div>
            <div class="field">
                <label>Phone Number</label>
                <input type="text" id="txtPhone">
            </div>
        </div>
        <div class="two fields">
            <div class="field">
                <label>Password</label>
                <input type="text" id="txtPassword">
            </div>
            <div class="field">
                <label>Confirm Password</label>
                <input type="text" id="txtConfPassword">
            </div>
        </div>
    </div>
</form>
</div>

<script type="text/javascript" src="js/app.js"></script>
</body>
</html>