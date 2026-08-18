<?php
$foodName=$_POST[food];
setcookie("food", "biscuit", time() + 3600, "/");

Header("Location: ../view/dashboard.php");
?>