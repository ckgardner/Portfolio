var app = new Vue({
    el: '#app',
    data: {
        page: 'myWork', // home, aboutMe, myWork

        home_selected: true,
        aboutMe_selected: false,
        myWork_selected: false,
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
    },
});