<?php
try{
  // connexion base de donnée
  $bdd = new PDO('mysql:host=localhost;dbname=mario;charset=utf8','root','simplon',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
}
catch(Exception $e)
{
  die('Erreur : '.$e->getMessage());
}
session_start();

?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="css/style.css">
  <title>Monde</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
</head>
<body>
  <div class="monde">
    <p>
      <?php
      echo "Bienvenue ".$_SESSION['name'];
      ?>
      <a href="update.php"><img class="img" src="image/param.png" alt="paramètres"></a>
    </p>
    <div class="persoJoueur">
    </div>
    <div class="monde1">
    </div>
    <div class="monde2">
    </div>
    <div class="monde3">
    </div>
  </div>
  <script src="js/script.js">

  </script>
</body>
</html>
