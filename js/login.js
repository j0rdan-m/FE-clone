
const VueLogin = window.Vue;

let myLogin = {
    props: {
        links: Array,
        credits: Array
    },
    template: `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>WorkWise Html Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <link rel="stylesheet" type="text/css" href="css/animate.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/line-awesome.css">
    <link rel="stylesheet" type="text/css" href="css/line-awesome-font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="lib/slick/slick.css">
    <link rel="stylesheet" type="text/css" href="lib/slick/slick-theme.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/responsive.css">
    </head>
    
    
    <body class="sign-in">
        
    
        <div class="wrapper">
            
    
            <div class="sign-in-page">
                <div class="signin-popup">
                    <div class="signin-pop">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="cmp-info">
                                    <div class="cm-logo">
                                        <img src="images/icon-left-font-small.png" alt="">
                                        <p>Groupomania,  is a multinational retail corporation that employs over 600 people. So we decided to create a modern and fun internal social network, that will allow employees to get to know each other in a more informal setting.</p>
                                    </div><!--cm-logo end-->	
                                    <img src="images/cm-main-img-orange.png" alt="">			
                                </div><!--cmp-info end-->
                            </div>
                            
                        </div>		
                    </div><!--signin-pop end-->
                </div><!--signin-popup end-->
                
            </div><!--sign-in-page end-->
    
    
        </div><!--theme-layout end-->

        
    </body>
    </html>`
};

let login = new VueLogin({
    el: "#login",
    components: { myLogin },
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
