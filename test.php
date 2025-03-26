<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // If using Composer
// require 'PHPMailer/PHPMailer.php'; // If using manual installation
// require 'PHPMailer/SMTP.php';
// require 'PHPMailer/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);
    try {
        // SMTP Settings
        $mail->isSMTP();
        $mail->Host       = 'mail.scmconnect.in'; // Change this to your mail server
        $mail->SMTPAuth   = true;
        $mail->Username   = 'no-reply@scmconnect.in'; // Your cPanel email
        $mail->Password   = 'jK5^gO67%!lO'; // Your email password
        $mail->SMTPSecure = 'ssl';
        $mail->Port       = 465;

        // Email Settings
        $mail->setFrom('no-reply@scmconnect.in', 'Website Inquiry');
        $mail->addAddress('no-reply@scmconnect.in'); // Change this to your email
        $mail->Subject = "New Inquiry from $name";
        $mail->Body    = "Name: $name\nEmail: $email\nMessage: $message";

        $mail->send();
        echo "Inquiry sent successfully!";
    } catch (Exception $e) {
        echo "Inquiry failed: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid Request";
}
?>
