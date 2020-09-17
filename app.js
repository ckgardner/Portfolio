var app = new Vue({
    el: '#app',
    data: {
        page: 'home', // home, aboutMe, myWork
        workSelection: 'all', //all, frontEnd, backEnd

        home_selected: true,
        aboutMe_selected: false,
        myWork_selected: false,
        contact_selected: false,

        slideIndex: 1,

        all_selected: true,
        front_selected: false,
        back_selected: false,
        hamburger_selected: false,

        unoHover: false,
        wildflowerHover: false,
        dashboardHover: false,
        countHover: false,
        mudHover: false,
        terainHover: false,

        fName: "",
        lName: "",
        message: "",
        fNameError: false,
        lNameError: false,
        messageError: false,

        jsHover: false,
        htmlHover: false,
        cssHover: false,
        pythonHover: false,
        cHover: false,
        goHover: false,
        nodeHover: false,
        vueHover: false,
        reactHover: false,
        expressHover: false,
    },
    created: function (){
        this.loadSvgs();
        this.currentSlide(this.slideIndex);
    },
    methods: {
        showSlides: function() {
            var i;
            var slides = document.getElementsByClassName("testimonialWrapper");
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[this.slideIndex-1].style.display = "block";
            dots[this.slideIndex-1].className += " active";
        },
        currentSlide: function(n) {
            this.slideIndex = n
            this.showSlides();
        },
        nextSlide: function(){
            if (this.slideIndex == 2){
                this.slideIndex = 1
            }else{
                this.slideIndex ++
            }
            this.showSlides();
        },
        prevSlide: function(){
            if (this.slideIndex == 1){
                this.slideIndex = 2
            }else{
                this.slideIndex --
            }
            this.showSlides();
        },
        selectHome: function(){
            this.home_selected = true;
            this.aboutMe_selected = false;
            this.myWork_selected = false;
            this.contact_selected = false;
            this.hamburger_selected = false;
        },
        selectMe: function(){
            this.home_selected = false;
            this.aboutMe_selected = true;
            this.myWork_selected = false;
            this.contact_selected = false;
            this.hamburger_selected = false;
        },
        selectWork: function(){
            this.home_selected = false;
            this.aboutMe_selected = false;
            this.myWork_selected = true;
            this.contact_selected = false;
            this.hamburger_selected = false;
        },
        selectContact: function(){
            this.home_selected = false;
            this.aboutMe_selected = false;
            this.myWork_selected = false;
            this.contact_selected = true;
            this.hamburger_selected = false;
        },
        selectAll: function(){
            this.all_selected = true;
            this.front_selected = false;
            this.back_selected = false;
        },
        selectFront: function(){
            this.all_selected = false;
            this.front_selected = true;
            this.back_selected = false;
        },
        selectBack: function(){
            this.all_selected = false;
            this.front_selected = false;
            this.back_selected = true;
        },
        setStop: function(id, radius, stop){
            console.log("setting stop");
            var c = document.getElementById(id);
            c.className = "background";
            var stopVal = Math.PI * radius * 2 * (stop);
            c.setAttribute("stroke-dasharray", stopVal + ", 3000");
            c.setAttribute("stroke-dashoffset", stopVal);
            c.className = "overlayLine";
        },
        loadSvgs: function (){
            this.setStop("htmlLine", 47, 1);
            this.setStop("jsLine", 47, .95);
            this.setStop("cssLine", 47, .90);
            this.setStop("cLine", 47, .8);
            this.setStop("goLine", 47, .5);
            this.setStop("pythonLine", 47, .7);
            this.setStop("nodejsLine", 47, .7);
            this.setStop("reactLine", 47, .4);
            this.setStop("vueLine", 47, .95);
            this.setStop("expressLine", 47, .6);     
        },
        sendClicked: function(){
            if (this.fName != "" && this.lName != "" && this.message != "") {
                window.location.href="mailto:" + "?subject=Hello there!" + "&body=" + 
                    "Hi Cade, my name is " + this.fName + " " + this.lName + "%0D%0A" + "%0D%0A" + this.message;
                ;
            }else {
                if (this.fName == "") {
                    this.fNameError = true;
                }
                if (this.lName == "") {
                    this.lNameError = true;
                }
                if (this.message == ""){
                    this.messageError = true;
                }
            }
        },
        resetJs: function(){
            document.getElementById("jsLine").style.animation = "null";
            setTimeout(function(){
                document.getElementById("jsLine").style.animation = "";
            },.2);
        },
        resetHtml: function(){
            document.getElementById("htmlLine").style.animation = "null";
            setTimeout(function(){
                document.getElementById("htmlLine").style.animation = "";
            },.2);
        },
        resetCss: function(){
            document.getElementById("cssLine").style.animation = "null";
            setTimeout(function(){
                document.getElementById("cssLine").style.animation = "";
            },.2);
        },
        resetPython: function(){
            document.getElementById("pythonLine").style.animation = "null";
            setTimeout(function(){
                document.getElementById("pythonLine").style.animation = "";
            },.2);
        },
        resetC: function(){
            document.getElementById("cLine").style.animation = "null";
            setTimeout(function(){
                document.getElementById("cLine").style.animation = "";
            },.2);
        },
        resetGo: function(){
            document.getElementById("goLine").style.animation = "null";
            setTimeout(function(){
                document.getElementById("goLine").style.animation = "";
            },.2);
        },
        resetNode: function(){
            document.getElementById("nodejsLine").style.animation = "null";
            setTimeout(function(){
                document.getElementById("nodejsLine").style.animation = "";
            },.2);
        },

        resetReact: function(){
            document.getElementById("reactLine").style.animation = "null";
            setTimeout(function(){
                document.getElementById("reactLine").style.animation = "";
            },.2);
        },
        resetVue: function(){
            document.getElementById("vueLine").style.animation = "null";
            setTimeout(function(){
                document.getElementById("vueLine").style.animation = "";
            },.2);
        },
        resetExpress: function(){
            document.getElementById("expressLine").style.animation = "null";
            setTimeout(function(){
                document.getElementById("expressLine").style.animation = "";
            },.2);
        },
        hamburgerClicked: function(){
            if (this.hamburger_selected == false){
                this.hamburger_selected = true;
            }else{
                this.hamburger_selected = false;
            }
        }
    },
});