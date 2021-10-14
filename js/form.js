const VueForm = window.Vue;

let monForm = {
    props: {
        usernameError: String,
        credits: Array,
        $username: String
    },
    methods:{
        testUsername: function (){
            this.$username = document.querySelector("#username").value;
        }
    },
    computed:{
        updateUsernameError () {
            
            return this.$username ==="" ? "You have to enter a user name" : "";
        }
    },
    template: `<div class="form">
                    <div class="form-field">
                        <div label-for="user" >Username</div>
                        <input id="username" type="text" @keyup="testUsername">
                        <div>{{ updateUsernameError }}</div>
                    </div>                    
                </div>`
};

let form = new VueForm({
    el: "#form",
    components: { monForm },
    data: {
        $user:"",
        $mail:"",
        $pass:"",
        usernameError:""
    }});

