
<?php session_start();?>
    <?php
    if (isset($_POST['username']))
    {
        $conn=mysqli_connect("localhost","root","1234","gameszko");
        $conn->query("SET CHARSET utf-8");
        if (mysqli_connect_errno())
        {
            echo "Incident durring connection" . mysqli_connect_errno();
        }
        $enteredUsername = $_POST["username"];
        $checkQuery = "SELECT * FROM players WHERE name = '$enteredUsername'";
        $result = $conn->query($checkQuery);
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $overallHighScore = $row["overall_high_score"];
                echo "<p>Welcome back, $enteredUsername! Your overall high score is: $overallHighScore</p>";
            }
        } else {
            $insertQuery = "INSERT INTO players (name) VALUES ('$enteredUsername')";
            if ($conn->query($insertQuery) === TRUE) {
                echo "<p>New user $enteredUsername added to the database!</p>";
            } else {
                echo "Error: " . $insertQuery . "<br>" . $conn->error;
            }
        }
        $_SESSION['username'] = $enteredUsername;
        mysqli_close($conn);
    }
    
    header("Location: index.php");
    exit();
    ?>
