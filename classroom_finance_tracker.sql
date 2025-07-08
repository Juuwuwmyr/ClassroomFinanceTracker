-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 08, 2025 at 03:32 AM
-- Server version: 8.3.0
-- PHP Version: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `classroom_finance_tracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `fines`
--

DROP TABLE IF EXISTS `fines`;
CREATE TABLE IF NOT EXISTS `fines` (
  `fine_id` int NOT NULL AUTO_INCREMENT,
  `student_id` int DEFAULT NULL,
  `violation_id` int DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `due_date` date DEFAULT NULL,
  `status` enum('Pending','Paid') DEFAULT 'Pending',
  `notes` text,
  `date_issued` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`fine_id`),
  KEY `student_id` (`student_id`),
  KEY `violation_id` (`violation_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
CREATE TABLE IF NOT EXISTS `payments` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `student_id` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `payment_method` enum('Cash','GCash','Bank Transfer','Others') DEFAULT 'Cash',
  `payment_date` date DEFAULT NULL,
  `notes` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`payment_id`),
  KEY `student_id` (`student_id`),
  KEY `category_id` (`category_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_categories`
--

DROP TABLE IF EXISTS `payment_categories`;
CREATE TABLE IF NOT EXISTS `payment_categories` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `description` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`category_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

DROP TABLE IF EXISTS `reports`;
CREATE TABLE IF NOT EXISTS `reports` (
  `report_id` int NOT NULL AUTO_INCREMENT,
  `report_name` varchar(100) DEFAULT NULL,
  `generated_on` date DEFAULT NULL,
  `type` enum('Transaction Summary','Fines Summary','Payments Summary','Custom') DEFAULT NULL,
  `status` enum('Generated','Processing') DEFAULT 'Generated',
  `file_path` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`report_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

DROP TABLE IF EXISTS `settings`;
CREATE TABLE IF NOT EXISTS `settings` (
  `setting_id` int NOT NULL AUTO_INCREMENT,
  `setting_key` varchar(50) DEFAULT NULL,
  `setting_value` varchar(255) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`setting_id`),
  UNIQUE KEY `setting_key` (`setting_key`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
CREATE TABLE IF NOT EXISTS `students` (
  `student_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `grade_level` varchar(20) DEFAULT NULL,
  `section` varchar(20) DEFAULT NULL,
  `avatar_url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`student_id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`student_id`, `first_name`, `last_name`, `grade_level`, `section`, `avatar_url`, `created_at`) VALUES
(1, 'Juan', 'Dela Cruz', '10', 'Rizal', 'https://example.com/avatars/juan.jpg', '2025-07-08 02:50:17'),
(2, 'Maria', 'Santos', '9', 'Luna', 'https://example.com/avatars/maria.jpg', '2025-07-08 02:50:17'),
(3, 'Pedro', 'Reyes', '11', 'Bonifacio', 'https://example.com/avatars/pedro.jpg', '2025-07-08 02:50:17'),
(4, 'Ana', 'Lopez', '10', 'Rizal', 'https://example.com/avatars/ana.jpg', '2025-07-08 02:50:17'),
(5, 'Carlos', 'Gomez', '9', 'Luna', 'https://example.com/avatars/carlos.jpg', '2025-07-08 02:50:17'),
(6, 'Sofia', 'Tan', '12', 'Aquino', 'https://example.com/avatars/sofia.jpg', '2025-07-08 02:50:17'),
(7, 'Miguel', 'Lim', '11', 'Bonifacio', 'https://example.com/avatars/miguel.jpg', '2025-07-08 02:50:17'),
(8, 'Isabella', 'Sy', '10', 'Rizal', 'https://example.com/avatars/isabella.jpg', '2025-07-08 02:50:17'),
(9, 'Jose', 'Garcia', '9', 'Luna', 'https://example.com/avatars/jose.jpg', '2025-07-08 02:50:17'),
(10, 'Lourdes', 'Chua', '12', 'Aquino', 'https://example.com/avatars/lourdes.jpg', '2025-07-08 02:50:17'),
(11, 'Antonio', 'Ong', '11', 'Bonifacio', 'https://example.com/avatars/antonio.jpg', '2025-07-08 02:50:17'),
(12, 'Carmen', 'Yu', '10', 'Rizal', 'https://example.com/avatars/carmen.jpg', '2025-07-08 02:50:17'),
(13, 'Ricardo', 'Uy', '9', 'Luna', 'https://example.com/avatars/ricardo.jpg', '2025-07-08 02:50:17'),
(14, 'Elena', 'Chan', '12', 'Aquino', 'https://example.com/avatars/elena.jpg', '2025-07-08 02:50:17'),
(15, 'Fernando', 'Wong', '11', 'Bonifacio', 'https://example.com/avatars/fernando.jpg', '2025-07-08 02:50:17'),
(16, 'Gabriela', 'Kho', '10', 'Rizal', 'https://example.com/avatars/gabriela.jpg', '2025-07-08 02:50:17'),
(17, 'Hector', 'Tiu', '9', 'Luna', 'https://example.com/avatars/hector.jpg', '2025-07-08 02:50:17'),
(18, 'Irene', 'Ang', '12', 'Aquino', 'https://example.com/avatars/irene.jpg', '2025-07-08 02:50:17'),
(19, 'Luis', 'Go', '11', 'Bonifacio', 'https://example.com/avatars/luis.jpg', '2025-07-08 02:50:17'),
(20, 'Monica', 'Lim', '10', 'Rizal', 'https://example.com/avatars/monica.jpg', '2025-07-08 02:50:17');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
CREATE TABLE IF NOT EXISTS `transactions` (
  `transaction_id` int NOT NULL AUTO_INCREMENT,
  `student_id` int DEFAULT NULL,
  `type` enum('Fine Payment','Class Fund','Project Contribution','Event Fee','Other') DEFAULT NULL,
  `reference_id` int DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `status` enum('Pending','Paid') DEFAULT 'Pending',
  `transaction_date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`transaction_id`),
  KEY `student_id` (`student_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `violations`
--

DROP TABLE IF EXISTS `violations`;
CREATE TABLE IF NOT EXISTS `violations` (
  `violation_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `fee` decimal(10,2) DEFAULT NULL,
  `description` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`violation_id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `violations`
--

INSERT INTO `violations` (`violation_id`, `name`, `fee`, `description`, `created_at`) VALUES
(1, 'Late Attendance', 100.00, 'Arriving late to class without valid reason', '2025-07-08 02:51:50'),
(2, 'Uniform Violation', 150.00, 'Not wearing complete proper uniform', '2025-07-08 02:51:50'),
(3, 'Library Book Overdue', 50.00, 'Failure to return borrowed books on time', '2025-07-08 02:51:50'),
(4, 'Property Damage', 200.00, 'Damaging school property or equipment', '2025-07-08 02:51:50'),
(5, 'No ID Card', 75.00, 'Not wearing school ID during school hours', '2025-07-08 02:51:50'),
(6, 'Disruptive Behavior', 125.00, 'Causing disruption during class sessions', '2025-07-08 02:51:50'),
(7, 'Cheating', 300.00, 'Academic dishonesty during exams/quizzes', '2025-07-08 02:51:50'),
(8, 'Bullying', 250.00, 'Verbal or physical harassment of others', '2025-07-08 02:51:50'),
(9, 'Littering', 50.00, 'Improper disposal of trash', '2025-07-08 02:51:50'),
(10, 'Unauthorized Areas', 100.00, 'Entering restricted school areas', '2025-07-08 02:51:50'),
(11, 'Tardiness (3rd offense)', 150.00, 'Repeated late arrivals to school', '2025-07-08 02:51:50'),
(12, 'Forgotten Materials', 50.00, 'Repeatedly coming unprepared for class', '2025-07-08 02:51:50'),
(13, 'Electronic Devices', 100.00, 'Unauthorized use during class', '2025-07-08 02:51:50'),
(14, 'Food in Classroom', 50.00, 'Eating in undesignated areas', '2025-07-08 02:51:50'),
(15, 'Plagiarism', 200.00, 'Submitting others work as own', '2025-07-08 02:51:50'),
(16, 'Skipping Class', 150.00, 'Unexcused absence from class', '2025-07-08 02:51:50'),
(17, 'Vandalism', 500.00, 'Defacing school property', '2025-07-08 02:51:50'),
(18, 'Dress Code Violation', 100.00, 'Inappropriate clothing', '2025-07-08 02:51:50'),
(19, 'Fighting', 400.00, 'Physical altercation with others', '2025-07-08 02:51:50'),
(20, 'Forged Documents', 300.00, 'Falsifying school documents or signatures', '2025-07-08 02:51:50');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
