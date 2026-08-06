<?php
session_start();

$userNameEr = $_SESSION["userNameEr"] ?? "";
$passwordEr = $_SESSION["passwordEr"] ?? "";
$username = $_SESSION["username"] ?? "";

unset($_SESSION["userNameEr"]);
unset($_SESSION["passwordEr"]);
unset($_SESSION["username"]);
?>

<html>

<body>
<form action="../controller/loginValidation.php" method="post">
<table>
<tr>
<td> Username </td>
<td> <input type="text" name="username" value="<?php echo $username; ?>"/>
</td>

<td>
<p style="color:red"> <?php echo $userNameEr; ?></p>
</td>
</tr>

<tr>
<td>Password</td>
<td><input type="password" name="password"></td>

<td>
<p style="color:red"> <?php echo $passwordEr; ?></p>
</td>
</tr>

<tr>
<td></td>

<td>
<button> Submit </button>
</td>
</tr>

</table>
</form>
</body>
</html>