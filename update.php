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

if (isset($_SESSION['maj'])) {
  $requete = $bdd->prepare('UPDATE marioUser SET (pseudoUser) = test');
  $requete->execute();
  }

  // if (isset($_SESSION['delete'])) {
  //   $requete = $bdd->prepare('DELETE marioUser SET (pseudoUser) VALUES :name ');
  //   $requete->execute(array(
  //     'name' => $_SESSION['name']));
  //   }

    ?>

    <input type="text" name="name" placeholder="Nouveau Pseudo">
    <button type="submit" name="maj">Changez Votre Pseudo</button>

    <button type="submit" name="delete">Supprimez votre compte</button>
