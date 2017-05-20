<?php
$frm = $_POST['frmid'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$mail = $_POST['mail'];


$subject = "Входящая заявка с сайта";

//$headers= "From: noreply <noreply@noreply.ru>\r\n";
//$headers.= "Reply-To: noreply <noreply@noreply.ru>\r\n";
$headers.= "X-Mailer: PHP/" . phpversion()."\r\n";
$headers.= "MIME-Version: 1.0" . "\r\n";
$headers.= "Content-type: text/plain; charset=utf-8\r\n";

$to = "papik5@mail.ru";


if($frm){
    $message = "Форма: $frm\n\n";
}

if($name){
    $message .= "Имя: $name\n";
}

if($phone){
    $message .= "Телефон: $phone\n";
}

if($mail){
    $message .= "Почта: ".$mail."\n";
}


mail ($to,$subject,$message,$headers);
?>
