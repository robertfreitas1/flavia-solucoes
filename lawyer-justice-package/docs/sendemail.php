<?php

// Define some constants
define( "RECIPIENT_NAME", "John Doe" );
define( "RECIPIENT_EMAIL", "yourmail@mail.com" );


// Read the form values
$success = false;
$firstName = isset( $_POST['firstname'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['firstname'] ) : "";
$lastName = isset( $_POST['lastname'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['lastname'] ) : "";
$senderPhone = isset( $_POST['phone'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['phone'] ) : "";
$subject = isset( $_POST['subject'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['subject'] ) : "";
$message = isset( $_POST['message'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message'] ) : "";

// If all values exist, send the email
if ( $firstName && $lastName && $senderPhone && $subject && $message) {
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $headers = "From: " . $firstName . " <" . $senderPhone . ">";
  $success = mail( $recipient, $subject, $message, $headers );

  //Set Location After Successfull Submission
  header('Location: contact-us.html');
}

else{
	//Set Location After Error
  	header('Location: contact-us.html');	
}

?>