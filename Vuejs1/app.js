const conttent = new Vue ({
    // 
    el: '.conttent',
    data : {
        conttent: 'Hảo huynh đệ',
        link: 'https://www.facebook.com/search/top?q=vuejs',
        linksex: '<a href=" nnnnnnnnnnnn" >CCCC</a>',
        dem: 0,
        x: 0,
        y: 0
    },
    methods: {
        sayPost: function(){
            this.conttent = 'anh em như con cẹc';
            return this.conttent;
        },
        sayDem: function(){
        this.dem++;
        },
        sayTru: function(){
        this.dem--;
        },
        tinhToado: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        banphim: function(){
            alert("Hello")
        }
    }
    
});

// Compunent
Vue.component('pi',{
    template: '<p>Ăn xin</p>',
})


new Vue ({
    el: '.app',
    data : {
        name : 'Anh Em',
        an: 0,
        uong: 0,
            
    },
    computed: {
        tanga: function(){
            console.log('Gói ăn')
            return this.an;
        },
        tangb: function(){
            console.log('Gói ăn')
            return this.uong;
        }

    },
    methods: {

    }
});

// new Vue ({
//     el: '.color',
//     data: {
//         quanlido: 'do',
//         quanlixanh: false,
//     },
//     computed:{
//         quanlido: function(){
//             return this.quanlido;
//         }
//     },
// })

new Vue({
    el: '#app1',
    data: {
        isRed: true
    },
    methods: {
        toggleClass : function () {
            if (this.isRed == true) {
                this.isRed = false;
            } else {
                this.isRed = true;
            }
        }
    }
});


new Vue({
    el: '.app2',
    data: {
        quanlicam: false,
        quanlixanh: true,
        color: 'vang',
        colors: 'xanh'
    },
})

new Vue({
    el: '#app3',
    data : {
        colorss: 'red',
        width: 100,
        height: 100,
    },
    computed: { 
        changeColor: function(){
            return {
                width: this.width +'px',
                height: this.height + 'px',
        }
    }
    }
})

var dong = new Vue ({
    el: "#an",
    data: {
        title: "Bom mìn",
        dongvat : true,
        hien: "true",
        bins: ["na", "nà" , "ná",],     
        menus: ["cứt", "cơm", "ngon", "bom"],
        students: [{
            name: "Nguyen",
            age: 10,
            class: "CNTT"
        },{
            name: "Cam",
            age: 11,
            class: "CNTT"
        },{
            name: "Bu",
            age: 12,
            class: "CNTT"
        }],
                  
    }

})

var vat = new Vue({
    el: '.b',
    data: {
        title: "uồi",

    },
    methods: {
        chance: function () {
            dong.title = "cin cu";
        }
    }

})