
const VueFooter = window.Vue;

let monFooter = {
    props: {
        links: Array,
        credits: Array
    },
    template: `<footer>
    
                    <div class="links">
                        <div class="footer-link" v-for="link in links"><a :href="link.link"> {{ link.linkname }} </a> </div>
                    </div>
                    <div class="credit">
                    <div class="footer-link" v-for="credit in credits">
                    {{ credit }} <span class="material-icons-outlined" style="font-size:16px;">copyright</span>
                    </div>
                    </div>
                </footer>`
};

let footer = new VueFooter({
    el: "#footer",
    components: { monFooter },
    data: function () {
        return {
            links: [{
                linkname: "contact",
                link: "mailto:me@mycompany.org"
            },{
                linkname: "about",
                link: "about.html"
            }],
            credits:['Vue','Grafikart']
        };
    }});
