<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GAMEszko</title>
    <link rel="stylesheet" href="style.css">
    
</head>
<?php
    session_start();
    $username = $_SESSION['username'];
?>
<body id="body">
    <img src="IMG/Player.png" alt="Player.png" id="Player" class="Character">
    <img src="IMG/Enemy.png" alt="Enemy.png" id="Enemy" class="Enemy">
    <img src="IMG/Buffs/Ring.png" alt="Buffs.png" id="Tripple" class="Buffs">
    <img src="IMG/Buffs/ProjUp.png" alt="Buffs1.png" id="ProjUP" class="Buffs">
    <img src="IMG/Buffs/TrippleShot.png" alt="buff2.png" id="Ring" class="Buffs">
    <img src="IMG/Projectile/Ball.gif" id="Projectile" class="Projectiles">
    <h2>High Scores</h2>
<ul id="scores">
        <?php
        $conn = mysqli_connect("localhost", "root", "1234", "gameszko");
        if (mysqli_connect_errno()) {
            echo "Incident during connection: " . mysqli_connect_errno();
            exit();
        }
    
        $query = "SELECT name, overall_high_score FROM players ORDER BY overall_high_score DESC";
        $result = $conn->query($query);
    
        while ($row = $result->fetch_assoc()) {
            $name = $row['name'];
            $score = $row['overall_high_score'];
            echo "<li>$name: $score</li>";
        }
    
        mysqli_close($conn);
        ?>
</ul>
<div id="health"><div id="bar">
<span id="scoreDisplay">Score: <span id="scoreValue">0</span></p> 
</div></div>


<script src="code/KeyLisneters.js"></script>
<script src="code/main.js"></script>

</body>
</html>