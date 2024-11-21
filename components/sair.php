<?php
  session_start();
  unset($_SESSION['usu_login']);
  unset($_SESSION['usu_senha']);
  unset($_SESSION['autenticado_2fa']);
  unset($_SESSION['usu_cpf']);
  session_destroy();
  header('Location: ../pages/Login.php');
?>