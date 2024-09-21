<?php
// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];

    // Display the submitted information
    echo "<h1>Submitted Information</h1>";
    echo "Name: " . htmlspecialchars($name) . "<br>";

    // Store the information into a text file
    $file = 'submissions.txt';

    // Check if the file is writable
    if (is_writable($file)) {
        $current = file_get_contents($file);
        $current .= "Name: " . $name . "\n";
        file_put_contents($file, $current);
        echo "<p>Information has been stored in submissions.txt</p>";
    } else {
        echo "<p>Unable to write to file.</p>";
    }
} else {
    echo "<p>No form data submitted.</p>";
}
?>
