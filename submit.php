<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve data from the form
    $name = $_POST["name"];
    $age = $_POST["age"];
    $food = $_POST["food"];
    $color = $_POST["color"];

    // Do whatever you want with the data here, such as storing in a database or sending via email
    // For this example, we'll just save the data to a text file.

    // Save the data to a text file named 'survey_data.txt'
    $file = fopen("survey_data.txt", "a");
    fwrite($file, "Name: $name\nAge: $age\nFavorite Food: $food\nFavorite Color: $color\n\n");
    fclose($file);
}
?>
