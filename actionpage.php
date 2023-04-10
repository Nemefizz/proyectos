<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    // obtener los valores del formulario
    $username = $_POST['uname'];
    $password = $_POST['psw'];

    // aquí podrías hacer la validación de usuario y contraseña con tu base de datos o algún otro método que estés utilizando para verificar la autenticación
    if ($username === "admin" && $password === "123") {

        // la validación fue exitosa, inicia una sesión y redirige al usuario a la página de bienvenida
        session_start();
        $_SESSION['username'] = $username;
        header("Location: bienvenida.php");
        exit();

    } else {

        // la validación falló, muestra un mensaje de error
        echo "Usuario o contraseña incorrectos";

    }
}

?>
