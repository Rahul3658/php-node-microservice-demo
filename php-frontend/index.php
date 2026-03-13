<?php

$response = file_get_contents("http://node-api:3000/users");
$users = json_decode($response, true);

echo "<h1>User List</h1>";

foreach ($users as $user) {
  echo $user['name']."<br>";
}

?>
