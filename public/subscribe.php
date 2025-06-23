<?php
// subscribe.php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the email from the POST request
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    // Validate the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid email address"]);
        exit;
    }

    // Email content
    $to = $email;
    $subject = "Newsletter Subscription Confirmation";
    $message = "Thank you for subscribing to our newsletter!";
    $headers = "From: hello@buildaiweb.com";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
        echo json_encode(["success" => "Subscription successful"]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Failed to send email"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
