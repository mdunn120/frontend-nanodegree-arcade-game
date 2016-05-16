// Enemies our player must avoid
var Enemy = function(x , y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed*dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
    this.x = 202;
    this.y = 405;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Handle input. This is where the arrow keys get hooked 
Player.prototype.handleInput = function(direction) {
   if (direction == "left") {
    this.x = this.x - 90;
   };
   if (direction == "right") {
    this.x = this.x + 90;
   };
   if (direction == "up") {
    this.y = this.y - 90;
   };
   if(direction == "down"){
    this.y = this.y + 90;
   }
};

var allEnemies = [ new Enemy(0,50,100), new Enemy(0,140,200), new Enemy(0,230,50)];
//need help here


//This function is being called in the updated function 
//in engine.js. That means ther is a chance that bugs 
//will be made every time the game engine "ticks" The 
//probability of a bug getting created is 2%
function createEnemy(){
    //The probably of bugs being made every tick is 2%
    if(Math.random()<.02){
        //Using a random number generator to decide which 
        //row (y position) the bugs will end up in (1, 2, 3)
        yPosRand = Math.floor((Math.random() * 3) + 1);

        if(yPosRand == 1){
            yPosRandUpdate = 50;
        }
         if(yPosRand == 2){
            yPosRandUpdate = 140;
        }
         if(yPosRand == 3){
            yPosRandUpdate = 230;
        }

        //The first random number is the x positon which can start up to -300 away
        //The second number is the y position which can be 50, 140 or 230
        //The third number is the speed
        var enemy1 = new Enemy( Math.floor((Math.random()*-300) + 1), yPosRandUpdate,  Math.floor((Math.random() * 200) + 100));
        allEnemies.push(enemy1);
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
//var allEnemies = [ new Enemy(0,50,100), new Enemy(0,140,200), new Enemy(0,230,50)]
// Place the player object in a variable called player
var player = new Player();

//player.render();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
