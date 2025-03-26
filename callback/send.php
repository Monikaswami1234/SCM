<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form inputs
    $name = $_POST['name'];
    $email = $_POST['email'];
   // $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Set the email recipient and subject
    $to = "mohit.gauba@scmconnect.in"; // Replace with the recipient's email address
    $email_subject = "New Contact Form Message: " . $subject;
    
    // Build the email content
    $email_body = "You have received a new message from your website contact form.\n\n";
    $email_body .= "Here are the details:\n";
    $email_body .= "Name: $name\n";
    $email_body .= "Mobile: $email\n";
    $email_body .= "Message: $message\n";

    // Set the headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Message sending failed.";
    }
} else {
    echo "Invalid request.";
}
?>