
const VueHeader = window.Vue;

let monHeader = {
    props: {
        logo: String,
        btns: Array
    },
    template: `<header>
    
                    <div>{{ logo }} <i class="fa fa-search"></i></div>
                    <div style="display:flex">
                        <div class="btn-header" v-for="btn in btns">{{ btn }}</div>
                    </div>
                </header>`
};


let header = new VueHeader({
    el: "#header",
    components: { monHeader },
    data: function () {
        return{
            toto: {
                titi: "titi",
                tata: "tata"
            },
            read: true,
            btns:['home', 'account'],
            logo:"LOL"
        };
    },
    methods: {
        test: function (){
            this.read = !this.read;
        },
        tititi: function (){
            this.toto.titi = "blublublu";
            console.log(this.toto.titi);
        }
    }
});
