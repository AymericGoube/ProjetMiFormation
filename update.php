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
<form class="upt" action="update.php" method="post">
  <input type="text" name="newPseudo" placeholder="Nouveau Pseudo">
  <button type="submit" name="maj">Changez Votre Pseudo</button>

  <!-- <button type="submit" name="delete">Supprimez votre compte</button> -->
</form>
<?php
$newpseudo = $_POST['newPseudo'];
$oldpseudo = $_SESSION['name'];
echo $oldpseudo;
$requete = $bdd->prepare('UPDATE marioUser SET pseudoUser = :name WHERE pseudoUser = :oldpseudo');
$requete->execute(array(
  'name' => $newpseudo,
  'oldpseudo' => $oldpseudo
));

 ?>
