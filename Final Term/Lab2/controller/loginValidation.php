<?php
session_start();

$username = $_POST["username"];
$password = $_POST["password"];

$_SESSION["username"] = $username;

$hasUsernameError = $hasPasswordError = true;

if (!$username) {
    $_SESSION["userNameEr"] = "Username is required";
} else {
    unset($_SESSION["userNameEr"]);
    $hasUsernameError = false;
}

if (!$password) {
    $_SESSION["passwordEr"] = "Password is required";
} else {
    unset($_SESSION["passwordEr"]);
    $hasPasswordError = false;
}

if ($hasUsernameError || $hasPasswordError) {
    Header("Location: ../view/task.php");
} else {
    echo "Hi, " . $username . "</br>";
    echo "Your password is " . $password;
}
?>