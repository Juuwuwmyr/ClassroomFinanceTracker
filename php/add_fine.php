<?php
header('Content-Type: application/json');
include 'db_connect.php';

$student_id = $_POST['student_id'] ?? '';
$violation_id = $_POST['violation_id'] ?? '';
$amount = $_POST['amount'] ?? '';
$due_date = $_POST['due_date'] ?? '';
$notes = $_POST['notes'] ?? '';

if (empty($student_id) || empty($violation_id) || empty($amount) || empty($due_date)) {
    echo json_encode([
        'success' => false,
        'message' => 'Missing required fields.'
    ]);
    exit;
}

// Insert to database
try {
    $stmt = $pdo->prepare("INSERT INTO fines (student_id, violation_id, amount, due_date, notes, date_issued, status) VALUES (?, ?, ?, ?, ?, NOW(), 'Pending')");
    $stmt->execute([$student_id, $violation_id, $amount, $due_date, $notes]);

    echo json_encode([
        'success' => true,
        'message' => 'Fine issued successfully.'
    ]);
} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $e->getMessage()
    ]);
}
?>
