<?php
include 'db_connect.php';
header('Content-Type: application/json');

$sql = "SELECT f.*, 
               CONCAT(s.first_name, ' ', s.last_name) AS student_name, 
               v.vname
        FROM fines f 
        JOIN students s ON f.student_id = s.student_id 
        JOIN violations v ON f.violation_id = v.violation_id 
        ORDER BY f.date_issued DESC";

$stmt = $pdo->prepare($sql);
$stmt->execute();
$fines = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($fines);
?>
