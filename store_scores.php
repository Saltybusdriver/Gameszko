
<?php session_start();?>
<?php
$conn = mysqli_connect("localhost", "root", "1234", "gameszko");
if (mysqli_connect_errno()) {
    echo "Incident during connection: " . mysqli_connect_errno();
    exit();
}

if(isset($_POST['score']))
{
    
    $username = $_SESSION['username'];
    $score = $_POST['score'];
    $updateQuery = "UPDATE players SET overall_high_score = $score WHERE name Like '$username'";
    $conn->query($updateQuery);
}    

mysqli_close($conn);
?>