<?php
include 'db_connect.php';
header('Content-Type: application/json');
try {
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->query("SELECT violation_id, vname FROM violations ORDER BY vname ASC");
    $violations = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($violations);
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
