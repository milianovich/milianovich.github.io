<?php  
session_start();
if(isset($_SESSION['id']) && isset($_SESSION['user_name'])) {
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HOME</title>
    </head>
    <body>
        <h1>hello, <?php echo $_SESSION['user_name']; ?> </h1>
        <a href="logout.php">Logout</a>
    </body>
    </html>
    <?php
}
else {
    header("Location: index.php");
    exit();
}
?>