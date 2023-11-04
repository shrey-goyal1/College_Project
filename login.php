<?php
session_start();
include "db_conn.php";

function validate($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$response = array(); // Create an empty response array

if (isset($_POST['email']) && isset($_POST['password'])) {
    $email = validate($_POST['email']);
    $password = validate($_POST['password']);

    if (empty($email) || empty($password)) {
        $response = [
            "status" => "error",
            "message" => "Both Email and password are required."
        ];
    } else {
        $sql = "SELECT * FROM signup WHERE email='$email'";
        $result = mysqli_query($conn, $sql);

        if ($result && mysqli_num_rows($result) === 1) {
            $row = mysqli_fetch_assoc($result);
            if ($row['password'] === $password) {
                $_SESSION['email'] = $row['email'];
                $response = [
                    "status" => "success",
                    "message" => "Logged In",
                    "redirect" => "index.html"
                ];
            } else {
                $response = [
                    "status" => "error",
                    "message" => "Incorrect Credentials"
                ];
            }
        } else {
            $response = [
                "status" => "error",
                "message" => "User not found. Please register."
            ];
        }
    }
} else {
    $response = [
        "status" => "error",
        "message" => "Invalid request."
    ];
}

// Set the Content-Type to JSON
header('Content-Type: application/json');

// Encode and send the JSON response
echo json_encode($response);
?>
