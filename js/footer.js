
const VueFooter = window.Vue;

let monFooter = {
    props: {
        links: Array,
        credits: Array
    },
    template: `<footer>
    <div class="footy-sec mn no-margin">
        <div class="container">
            <ul>
                <li><a href="#" title="">Help Center</a></li>
                <li><a href="#" title="">Privacy Policy</a></li>
                <li><a href="#" title="">Community Guidelines</a></li>
                <li><a href="#" title="">Cookies Policy</a></li>
                <li><a href="#" title="">Career</a></li>
                <li><a href="#" title="">Forum</a></li>
                <li><a href="#" title="">Language</a></li>
                <li><a href="#" title="">Copyright Policy</a></li>
            </ul>
            <p><img src="images/copy-icon2.png" alt="">Copyright 2021</p>
            <img class="fl-rgt" src="images/icon-left-font-monochrome-black-small.png" alt="">
        </div>
    </div>
</footer><!--footer end-->`
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
