// ANCIEN JEU

// var game = new Phaser.Game(1200, 650, Phaser.AUTO, '', { preload: preload, create: create, update: update });
//
// function preload() {
// game.load.spritesheet('mario', 'image/dude.png', 32, 48);
// game.load.image('sky','image/backgrd4.png');
// game.load.image('pipe','image/tube2.png');
// game.load.image('coin', 'image/diamond.png');
// }
//
// var player;
// var platforms;
// var coin;
// var coins;
// var score = 0;
// var scoreText;
// var highscore = sessionStorage.getItem("highscore");
// var stateText;
// function create() {
//
//   game.physics.startSystem(Phaser.Physics.ARCADE);
//   game.add.tileSprite(0, 0, 9000, 950, 'sky');
//
//   // platforms = game.add.group();
//   // platforms.enableBody = true;
//   // var tuyau = platforms.create(400, 350,'pipe');
//   // tuyau.body.immovable = true;
//   // tuyau = platforms.create(600, 500, 'pipe');
//   // tuyau.body.immovable = true;
//
//   game.world.setBounds(0, 0, 9000, 650);
// player = game.add.sprite(32, game.world.height - 400, 'mario');
//
// game.physics.arcade.enable(player);
// player.body.gravity.y = 1200;
// player.body.collideWorldBounds = true;
// cursors = game.input.keyboard.createCursorKeys();
// game.camera.follow(player);
//
//
//
//   // var coin = game.add.sprite(400,200, 'coin');
//   // var tourne = coin.animations.add('tourne');
//   // coin.animations.play('tourne',30,true);
//
// coins = game.add.group();
// coins.enableBody = true;
// for (var i = 2; i < 22; i++)
// {
//   let hauteur = Math.random()*550;
//   var coin = coins.create(i * 300, hauteur, 'coin');
//   coin.checkWorldBounds = true;
//   coin.events.onOutOfBounds.add(coinOut, this);
//   // var tourne = coin.animations.add('tourne');
//   // coin.animations.play('tourne',30,true);
// }
// scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000'});
//   highscoreText = game.add.text(200, 16, 'Highscore:'+ highscore, { fontSize: '32px', fill: '#000'});
//   // stateText = game.add.text(600,350,'', { font: '84px Arial', fill: '#fff' });
//   // stateText.anchor.setTo(0.5, 0.5);
//   // stateText.visible = false;
//   // stateText.fixedToCamera = true;
//   scoreText.fixedToCamera = true;
//   highscoreText.fixedToCamera = true;
// }
// function coinOut(coin){
//   player.kill();
//   // stateText.text="GAME OVER \n CLICK TO RESTART";
//   // stateText.visible = true;
//   game.input.onTap.addOnce(restart,this);
//   if (score > highscore) {
//     sessionStorage.setItem("highscore",score);
//   }
// }
// function update() {
//
//   player.body.velocity.x = 250;
//   game.physics.arcade.collide(player, platforms);
//   game.physics.arcade.overlap(player, coins, collectCoin, null, this);
//   if (cursors.up.isDown)
//   {
//     player.body.velocity.y = -300;
//   }
//
// }
//
// function collectCoin (player, coin) {
//   // Kill la pièce
//   coin.kill();
//
//   //  Update le score
//   score += 10;
//   scoreText.text = 'Score: ' + score;
//   if (coins.total === 0) {
//     alert("Bravo, votre score est de " + score);
//     sessionStorage.setItem("highscore",score);
//   }
//   // else if (coins.outOfBounds === true) {
//   //   alert("perdu");
//   // }
// }
//
// function restart(pointer){
//   player.revive();
//
//   coin.callAll('revive');
//   // stateText.visible = false;
// }


var mainState = {
  preload: function() {
    game.load.image('mario', 'image/marioGRAND.png');
    game.load.image('coin', 'image/diamond.png');
    game.load.image('tuyau1', 'image/tube1.png');
    game.load.image('tuyau2', 'image/tube2.png');
    game.load.image('buttonquit', 'image/buttonquit.png');
  },
  create: function() {
    game.stage.backgroundColor = '#71c5cf';
    game.physics.startSystem(Phaser.Physics.ARCADE);
    player = game.add.sprite(30, game.world.height - 400, 'mario');
     player.scale.setTo(0.04, 0.04);

    game.physics.arcade.enable(player);
    player.body.gravity.y = 1200;
    cursors = game.input.keyboard.createCursorKeys();
    game.camera.follow(player);

    cursors = game.input.keyboard.createCursorKeys();
    cursors.up.onDown.add(this.jump, this);
    var timer = game.time.events.loop(1500, this.addCoin,this);
    coins = game.add.group();
    coins.enableBody = true;
    let hauteur = Math.random()*200;
    var coin = coins.create(650, hauteur - 250, 'tuyau1');
    var coin2 = coins.create(650, hauteur + 200, 'tuyau2');
    game.physics.arcade.enable(coin,coin2);
    coin.body.velocity.x = -200;
    coin.checkWorldBounds = true;
    coin.onOutOfBoundskill = true;
    coin2.body.velocity.x = -200;
    coin2.checkWorldBounds = true;
    coin2.onOutOfBoundskill = true;
    scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000'});
    highscoreText = game.add.text(200, 16, 'Highscore:'+ highscore, { fontSize: '32px', fill: '#000'});
    Quitgame = game.add.button(630, 330, 'buttonquit',function(){window.location.href = ("http://localhost/travaux/JeuProjetMiFormation/Monde.php")});
    Quitgame.width = 50;
    Quitgame.height = 50;
    pause = game.add.text(500, 16, 'Pause', { fontSize: '32px', fill: '#000'});
    pause.inputEnabled = true;
    pause.events.onInputUp.add(function () {
      // When the paus button is pressed, we pause the game
      game.paused = true;
      unpause = game.add.text(250, 150, 'Reprendre', { font: '50px Arial', fill: '#000' });

    });

    game.input.onDown.add(unpause, self);
    function unpause(event){
      if (game.paused) {
        unpause.destroy();
        game.paused = false;
      }

    }
  },
  addCoin: function(){
    let hauteur = Math.random()*100;
    var coin = coins.create(650, hauteur - 250, 'tuyau1');
        var coin2 = coins.create(650, hauteur + 200, 'tuyau2');
    game.physics.arcade.enable(coin,coin2);
    coin.body.velocity.x = -200;
    coin.checkWorldBounds = true;
    coin.onOutOfBoundskill = true;
    coin2.body.velocity.x = -200;
    coin2.checkWorldBounds = true;
    coin2.onOutOfBoundskill = true;
    score += 10;
    scoreText.text = 'Score: ' + score;
  },


  update: function() {
    // This function is called 60 times per second
    // It contains the game's logic
    game.physics.arcade.overlap(player, coins, this.collectCoin, null,this);
    if (score > highscore) {
      localStorage.setItem("highscore",score);
    }
    if (player.body.y < 0 || player.body.y > 650)
    this.restartGame();
  },
  collectCoin: function (player, coin) {
    // Kill la pièce
    player.kill();
    this.restartGame();
  },
  jump: function() {
    player.body.velocity.y = -350;
  },
  // coinOut: function(coin){
  //   //  Update le score
  //   console.log("salut");
  //   score += 10;
  //   scoreText.text = 'Score: ' + score;
  // },
  restartGame: function() {
    // Start the 'main' state, which restarts the game
    game.state.start('main');
    score = 0;
  },
};

// Initialize Phaser, and create a 400px by 490px game
var game = new Phaser.Game(700, 400);
var score = 0;
var scoreText;
var pause;
var Quitgame;
var highscore = localStorage.getItem("highscore");
// Add the 'mainState' and call it 'main'
game.state.add('main', mainState);

// Start the state to actually start the game
game.state.start('main');
