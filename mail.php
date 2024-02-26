<?php  


require("mailer/class.phpmailer.php");
require("mailer/class.pop3.php");
require("mailer/class.smtp.php");


$nombre = $_POST['nombreContacto']; 
$email = $_POST['emailContacto']; 
$celular = $_POST['telefono']; 
$mensaje = $_POST['mensaje']; 

$resHTML   = "<h2>Datos del cliente</h2>";
$resHTML  .= "Nombre Completo: <strong>".$nombre."</strong><br/>";
$resHTML  .= "Email: <strong>".$email."</strong><br/>";
$resHTML  .= "Telefono: <strong>".$celular."</strong><br/>";
$resHTML  .= "Mensaje: <strong>".$mensaje."</strong><br/><br/>";

$destino = 'valen21hg@outlook.com';
$from = $destino;
$to = $destino;

$subject = "Formulario de Contacto - ". $nombre;
$headers = "From:" . $from . "\r\n";
$headers .= "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

if(mail($to,$subject,$resHTML, $headers)) {
    echo json_encode(array("status"=>200));
 } else {
    echo json_encode(array("status"=>400));
}