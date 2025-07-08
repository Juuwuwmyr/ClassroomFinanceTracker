<?php
try {
    $pdo = new PDO(
        "mysql:host=localhost;dbname=classroom_finance_tracker;charset=utf8mb4",
        "root",
        ""
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    die(json_encode([
        "error" => "Database Connection Failed: " . $e->getMessage()
    ]));
}
?>
