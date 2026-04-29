<!DOCTYPE html>
<html>
<head>
    <title>Welcome Page</title>
</head>
<body>

    <h1>My Web Page</h1>

    <?php
        // Set timezone for India
        date_default_timezone_set("Asia/Kolkata");

        // Welcome message
        echo "<h2>Welcome to My Website</h2>";

        // Display Date
        echo "<p><b>Today's Date:</b> " . date("d-m-Y") . "</p>";

        // Display Time
        echo "<p><b>Current Time:</b> " . date("h:i:s A") . "</p>";
    ?>

</body>
</html>
