<?php
include 'db_connect.php';
header('Content-Type: application/json');
try {
  
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->query("SELECT student_id, CONCAT(first_name, ' ', last_name) AS name FROM students ORDER BY first_name ASC");
    $students = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($students);
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
