new Vue ({
    el: '#app',
    data: {
        player: 100,
        monter: 100,
        gameIsrunning: false,
    },
    methods:{
        startNewgame: function(){
            this.gameIsrunning = true;
            this.player = 100;
            this.monter =100;
        },
        attack: function(){

            // Monter
            var maxdamege = 10;
            var mindamege = 4;
            var damege = Math.max(Math.floor(Math.random() *maxdamege) +1, mindamege )
            this.monter -= damege;

            if(this.monter <= 0){
                alert('Player Won');
                this.gameIsrunning = false;
                return
            }
            // Player
            var maxdamege = 12;
            var mindamege = 3;
            var damege = Math.max(Math.floor(Math.random() *maxdamege) +1, mindamege )
            this.player -= damege;
            if(this.player <= 0){
                alert('Monter Won');
                this.gameIsrunning = false;
                return
            }

        },
        specialattack: function(){

        },
        heal: function(){

        },
        giveUp: function(){

        }
    }
    

})