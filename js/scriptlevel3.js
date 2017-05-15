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
     var rectangle1 = game.add.sprite( 800, 400,'tuyau1');
     rectangle1.angle = 75;
     rectangle1.scale.setTo(1,2);
     var rectangle2 = game.add.sprite( 100, 210,'tuyau1');
     rectangle2.angle = -75;
     rectangle2.scale.setTo(1,2);

  },

  update: function() {


  }
};
var game = new Phaser.Game(1000, 600);

game.state.add('main', mainState);

// Start the state to actually start the game
game.state.start('main');
