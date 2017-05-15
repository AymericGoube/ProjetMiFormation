var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
  game.load.image('sky', 'image/level1.png');
  game.load.image('ground', 'image/ground.png');
  game.load.image('star', 'image/star.png');
  game.load.spritesheet('mario', 'image/mario2.png', 26,46);
}

var platforms;
var player;
var score = 0;
var scoreText;

function create() {

  //  We're going to be using physics, so enable the Arcade Physics system
  game.physics.startSystem(Phaser.Physics.ARCADE);

  //background du niveau
  game.add.sprite(0, 0, 'sky');

  //  The platforms group contains the ground and the 2 ledges we can jump on
  platforms = game.add.group();

  //  We will enable physics for any object that is created in this group
  platforms.enableBody = true;

  // Création de la plateforme
  var ground = platforms.create(0, game.world.height - 88, 'ground');

  //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
  ground.scale.setTo(10, 2);

  //  This stops it from falling away when you jump on it
  ground.body.immovable = true;

  //  Now let's create two ledges
  var ledge = platforms.create(500, 350, 'ground');
  ledge.scale.setTo(6, 0.8);

  ledge.body.immovable = true;

  ledge = platforms.create(-180, 250, 'ground');
  ledge.scale.setTo(6, 0.8);
  ledge.body.immovable = true;

  var ledge = platforms.create(550, 100, 'ground');
  ledge.scale.setTo(6, 0.8);

  ledge.body.immovable = true;

  // The player and its settings
  player = game.add.sprite(32, game.world.height - 150, 'mario');

  //  We need to enable physics on the player
  game.physics.arcade.enable(player);

  //  Player physics properties. Give the little guy a slight bounce.
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 300;
  player.body.collideWorldBounds = true;

  //  Our two animations, walking left and right.
  player.animations.add('left', [0, 1, 2, 3], 10, true);
  player.animations.add('right', [5, 6, 7, 8], 10, true);

  player.body.gravity.y = 300;

  stars = game.add.group();

  stars.enableBody = true;

  //  Here we'll create 12 of them evenly spaced apart
  for (var i = 0; i < 12; i++)
  {
    //  Create a star inside of the 'stars' group
    var star = stars.create(i * 70, 0, 'star');

    //  Let gravity do its thing
    star.body.gravity.y =800;

    //  This just gives each star a slightly random bounce value
    star.body.bounce.y = 0.4 + Math.random() * 0.2;
  }
  scoreText = game.add.text(16, 16,'score : 0', { fontSize: '32px', fill: '#000' });


}

function update() {
  //  Collide the player and the stars with the platforms
  var hitPlatform = game.physics.arcade.collide(player, platforms);

  cursors = game.input.keyboard.createCursorKeys();

  //  Reset the players velocity (movement)
  player.body.velocity.x = 0;

  if (cursors.left.isDown)
  {
    //  Move to the left
    player.body.velocity.x = -150;

    player.animations.play('left');
  }
  else if (cursors.right.isDown)
  {
    //  Move to the right
    player.body.velocity.x = 150;

    player.animations.play('right');
  }
  else
  {
    //  Stand still
    player.animations.stop();

    player.frame = 4;
  }

  //  Allow the player to jump if they are touching the ground.
  if (cursors.up.isDown && player.body.touching.down && hitPlatform)
  {
    player.body.velocity.y = -350;
  }

  game.physics.arcade.collide(stars, platforms);
  game.physics.arcade.overlap(player, stars, collectStar, null, this);


}


function collectStar (player, star) {

  // Removes the star from the screen
  star.kill();
  score += 10;
  scoreText.text ='score:'+ score;

  if (stars.total === 0) {
    alert("Vous avez passé le niveau 1 Bravo!!!");
  }
}