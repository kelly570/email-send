<?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        $to = 'emmaigwe991@gmail.com';
        $subject = 'Email from'. $name;
        $body = $message;
        $headers = 'From:'. $email . '\r\n';

        if (mail($to, $subject, $body, $headers)) {
            echo 'Email sent successfully!';
        } else {
            echo 'Error sending email!';
        }
    }
?>