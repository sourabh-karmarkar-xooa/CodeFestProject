-- MySQL dump 10.13  Distrib 8.0.17, for Linux (x86_64)
--
-- Host: localhost    Database: STATIONERY_MANAGEMENT
-- ------------------------------------------------------
-- Server version	8.0.17-0ubuntu2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `EMPLOYEE_REQUESTS`
--

DROP TABLE IF EXISTS `EMPLOYEE_REQUESTS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `EMPLOYEE_REQUESTS` (
  `req_id` int(11) NOT NULL AUTO_INCREMENT,
  `created_date` date NOT NULL,
  `emp_id` int(11) NOT NULL,
  `status` varchar(20) NOT NULL,
  `sign` longblob NOT NULL,
  PRIMARY KEY (`req_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EMPLOYEE_REQUESTS`
--

LOCK TABLES `EMPLOYEE_REQUESTS` WRITE;
/*!40000 ALTER TABLE `EMPLOYEE_REQUESTS` DISABLE KEYS */;
INSERT INTO `EMPLOYEE_REQUESTS` VALUES (1,'2019-11-09',100,'requested',_binary 'SIGN');
/*!40000 ALTER TABLE `EMPLOYEE_REQUESTS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `INVENTORY_DETAILS`
--

DROP TABLE IF EXISTS `INVENTORY_DETAILS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `INVENTORY_DETAILS` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(50) NOT NULL,
  `label` varchar(50) NOT NULL,
  `availableQty` int(11) NOT NULL,
  `imgURL` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `INVENTORY_DETAILS`
--

LOCK TABLES `INVENTORY_DETAILS` WRITE;
/*!40000 ALTER TABLE `INVENTORY_DETAILS` DISABLE KEYS */;
INSERT INTO `INVENTORY_DETAILS` VALUES (1,'pen','blue pen',20,'path'),(2,'marker','blue marker',25,'path'),(3,'marker','black marker',30,'path'),(4,'duster','duster',13,'path'),(5,'notepad','notepad',0,'path'),(6,'stick notes','stick notes pink',10,'path');
/*!40000 ALTER TABLE `INVENTORY_DETAILS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `REQUEST_DETAIL`
--

DROP TABLE IF EXISTS `REQUEST_DETAIL`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `REQUEST_DETAIL` (
  `req_detail_id` int(11) NOT NULL AUTO_INCREMENT,
  `req_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `item_quantity` int(11) NOT NULL,
  PRIMARY KEY (`req_detail_id`),
  KEY `req_id` (`req_id`),
  KEY `item_id` (`item_id`),
  CONSTRAINT `REQUEST_DETAIL_ibfk_1` FOREIGN KEY (`req_id`) REFERENCES `EMPLOYEE_REQUESTS` (`req_id`),
  CONSTRAINT `REQUEST_DETAIL_ibfk_2` FOREIGN KEY (`item_id`) REFERENCES `INVENTORY_DETAILS` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `REQUEST_DETAIL`
--

LOCK TABLES `REQUEST_DETAIL` WRITE;
/*!40000 ALTER TABLE `REQUEST_DETAIL` DISABLE KEYS */;
INSERT INTO `REQUEST_DETAIL` VALUES (1,1,2,4),(2,1,4,2);
/*!40000 ALTER TABLE `REQUEST_DETAIL` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-09 18:12:09
