var app = new Vue({
    el: '#app',
    data: {
        page: 'aboutMe', // home, aboutMe, myWork
        workSelection: 'all', //all, frontEnd, backEnd

        home_selected: true,
        aboutMe_selected: false,
        myWork_selected: false,

        all_selected: true,
        front_selected: false,
        back_selected: false,
    },
    methods: {
        selectHome: function(){
            this.home_selected = true;
            this.aboutMe_selected = false;
            this.myWork_selected = false;
        },
        selectMe: function(){
            this.home_selected = false;
            this.aboutMe_selected = true;
            this.myWork_selected = false;
        },
        selectWork: function(){
            this.home_selected = false;
            this.aboutMe_selected = false;
            this.myWork_selected = true;
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
    },
});