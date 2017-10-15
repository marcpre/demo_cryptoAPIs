<?php

require_once("vendor/autoload.php");

use Medoo\Medoo;

$dotenv = new Dotenv\Dotenv(__DIR__);
$dotenv->load();

$database = new mysqli($_ENV["DB_HOST"], $_ENV["DB_USER"], $_ENV["DB_PASS"], $_ENV["DB_NAME"]);
if ($database->connect_errno) {
    echo "Failed to connect to MySQL: ({$database->connect_errno}) {$database->connect_error}";
}
