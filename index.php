<?php
try{
  // connexion à la base de donnée
  $bdd = new PDO('mysql:host=localhost;dbname=mario;charset=utf8','root','simplon',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
}
catch(Exception $e)
{
  die('Erreur : '.$e->getMessage());
}

$name = $_POST['name'];
if(isset($_POST['submit'])) {
  $requete = $bdd->prepare('INSERT INTO marioUser (pseudoUser) VALUES (:name)');
  $requete->execute(array(
    'name' => $_POST['name']));
    session_start();
  }



  //  while ($donnees = $requete->fetch()) {
  //    echo "done";}
  ?>
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Jeu</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <div class="accueil">
      <form class="form" action="choixperso.php" method="post">
        <input type="text" name="name" value="" placeholder="Rentrez votre pseudo" required >
        <input type="submit" name="submit" value="Jouez">
      </div>
    </form>
  </body>
  </html>
