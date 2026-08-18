<?php
session_start();

$username = $_SESSION["loggedInUsername"] ?? "";
$isLoggedIn = $_SESSION["isLoggedIn"] ?? false;

if (!$isLoggedIn) {
    Header("Location: login.php");
}

$isCookieSet = isset($_COOKIE["section"]);
$cookieValue = $_COOKIE["section"] ?? "";

?>

<html>
<form onsubmit="">
<body></body>
<h1>Welcome, <?php echo $username; ?>!</h1>
<p>You are successfully logged in.</p>

<p>Cookie Set Status: <?php echo $isCookieSet; ?></p>
<p>Cookie Value: <?php echo $cookieValue; ?></p>
<?php

if($isCookieSet){

}
else{
    echo ""<p> hi, your favourite food is ,$cookieValue</p>
}

?>

<table>
    <tr>
        <td>
<a href="../controller/addCookie.php">Please let us know your favorite food</a></td>
<td>
    <input type ="text" name="food">
</td>

<td><button>Food</button></td>

    </tr>
</table>


<a href="../controller/logout.php">Logout</a>

</body>
</form>
</html>