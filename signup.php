<?php


$data = $_REQUEST['key'];


if (empty($data)) {
    echo "Invalid or missing data in the request.";
    exit;
}

$URLdata = json_decode($data, true);

if ($URLdata !== null) {
    $con = new mysqli("localhost", "root", "", "master");
    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $FName = $URLdata["FName"];
    $LName = $URLdata["LName"];
    $Email = $URLdata["Email"];
    $Gender = $URLdata["Gender"];
    $PhoneNumber = $URLdata["PhoneNumber"];
    $Password = $URLdata["Password"];


    $stmt = $con->prepare("INSERT INTO signup (FName, LName, Email, Gender, PhoneNumber, Password) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $FName, $LName, $Email, $Gender, $PhoneNumber, $Password);

    if ($stmt->execute()) {
        echo "Thank You for Your Registration!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $con->close();
} else {
    echo "Invalid JSON data or missing keys.";
}
?>
