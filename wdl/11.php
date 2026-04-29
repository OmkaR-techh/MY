<!DOCTYPE html>
<html>
<head>
    <title>String Manipulation</title>
</head>
<body>

    <h2>String Manipulation Program</h2>

    <!-- Form -->
    <form method="POST">
        Enter a String: <input type="text" name="str"><br><br>
        <input type="submit" value="Process">
    </form>

    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {

            $str = $_POST['str'];

            if (!empty($str)) {

                // String Length
                $length = strlen($str);

                // Reverse String
                $reverse = strrev($str);

                // Substring (first 5 characters)
                $substring = substr($str, 0, 5);

                // Display Results
                echo "<h3>Results:</h3>";
                echo "Original String: " . $str . "<br>";
                echo "Length: " . $length . "<br>";
                echo "Reversed String: " . $reverse . "<br>";
                echo "Substring (first 5 chars): " . $substring;
            } else {
                echo "Please enter a string!";
            }
        }
    ?>

</body>
</html>
