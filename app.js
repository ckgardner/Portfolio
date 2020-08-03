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

        unoHover: false,
        wildflowerHover: false,
        dashboardHover: false,
        countHover: false,
        mudHover: false,
        terainHover: false,
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
        },
        selectMe: function(){
            this.home_selected = false;
            this.aboutMe_selected = true;
            this.myWork_selected = false;
            this.contact_selected = false;
        },
        selectWork: function(){
            this.home_selected = false;
            this.aboutMe_selected = false;
            this.myWork_selected = true;
            this.contact_selected = false;
        },
        selectContact: function(){
            this.home_selected = false;
            this.aboutMe_selected = false;
            this.myWork_selected = false;
            this.contact_selected = true;
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
            this.setStop("htmlLine", 47, .8);
            this.setStop("jsLine", 47, .9);
            this.setStop("cssLine", 47, .75);
            this.setStop("cLine", 47, .7);
            this.setStop("goLine", 47, .5);
            this.setStop("pythonLine", 47, .7);
            this.setStop("nodejsLine", 47, .5);
            this.setStop("reactLine", 47, .3);
            this.setStop("vueLine", 47, .9);
            this.setStop("expressLine", 47, .5);     
        },
    },
});