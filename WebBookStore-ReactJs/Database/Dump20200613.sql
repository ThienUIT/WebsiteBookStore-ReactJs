-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: bookstore
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `accountID` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(50) DEFAULT NULL,
  `passWord` varchar(255) DEFAULT NULL,
  `displayName` varchar(50) DEFAULT NULL,
  `phoneNumber` varchar(20) DEFAULT NULL,
  `role` int DEFAULT NULL,
  PRIMARY KEY (`accountID`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (20,'admin','$2b$10$gKIjJZehGs8U9Rpd8B/lKOO8OOmApGwGutGlIPJTJIowPXVsDqKFu','Phan Hoang','012356',1),(21,'17520519','$2b$10$EVdXxGKTCWRXRW0NJsw0yuaiTQi8byzVPRmnlA6WxE97dMXUODOKS','Hoang1','123456',0);
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author` (
  `authorID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `authorImage` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`authorID`)
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (90,'William Shakespeare','https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/468px-Shakespeare.jpg'),(100,'Agatha Christie','https://img.ti-media.net/wp/uploads/sites/46/2015/09/Agatha-Christie-614x920.jpg'),(101,'Barbara Cartland','https://pbs.twimg.com/profile_images/976013703719084032/tL9Y1A6Z.jpg'),(102,'Danielle Steel','https://www.gstatic.com/tv/thumb/persons/1688/1688_v9_ba.jpg'),(103,'Harold Robbins','https://i.pinimg.com/originals/55/6c/09/556c09576cad8f5ad6d17f14c65cc213.jpg'),(104,'Georges Simenon','https://www.gstatic.com/tv/thumb/persons/475530/475530_v9_ba.jpg'),(105,'Enid Blyton','https://jaydeashe.files.wordpress.com/2013/06/img_4543.jpg'),(106,'Sidney Sheldon','https://www.gstatic.com/tv/thumb/persons/59235/59235_v9_ba.jpg'),(107,'J.K.Rowling','https://www.gstatic.com/tv/thumb/persons/174909/174909_v9_bb.jpg'),(108,'Gilbert Patten','https://credo.library.umass.edu/images/resize/1080/muph061-sl561-i002-001.jpg');
/*!40000 ALTER TABLE `author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `bookID` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `authorID` int DEFAULT NULL,
  `categoryID` int DEFAULT NULL,
  `price` decimal(10,1) DEFAULT NULL,
  `describe` varchar(300) DEFAULT NULL,
  `numberOfPages` int DEFAULT NULL,
  `bookImage` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`bookID`),
  KEY `fk_author` (`authorID`),
  KEY `fk_category` (`categoryID`),
  CONSTRAINT `fk_author` FOREIGN KEY (`authorID`) REFERENCES `author` (`authorID`),
  CONSTRAINT `fk_category` FOREIGN KEY (`categoryID`) REFERENCES `category` (`categoryID`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (60,'Romeo and Juliet',90,75,10.0,'Romeo and Juliet is a tragedy written by William Shakespeare early in his career about two young star-crossed lovers whose deaths ultimately reconcile their feuding families',200,'https://newsroom.smumn.edu/wp-content/uploads/2018/11/Romeo-Juliet-1050x675.jpg'),(61,'Hamlet',90,84,25.0,'The Tragedy of Hamlet, Prince of Denmark, is a tragedy written by William Shakespeare sometime between 1599 and 1601',344,'https://d4.violet.vn/uploads/blogs/4253/hamlet.jpg'),(62,'Othello',90,84,25.0,'Othello is a tragedy by William Shakespeare, believed to have been written in 1603.',300,'https://img.culturacolectiva.com/content/2017/01/revenge-books-othello.png'),(63,'Julius Ceasar',90,84,28.0,'The Tragedy of Julius Caesar is a history play and tragedy by William Shakespeare first performed in 1599.',239,'https://www.setonbooks.com/sempics/P-EN09-1621093.jpg'),(64,'The Merchant of Venice',90,85,40.0,'The Merchant of Venice is a 16th-century play written by William Shakespeare',173,'https://images-na.ssl-images-amazon.com/images/I/819C0ZpvhJL.jpg'),(69,'Fantastic Beasts and Where to Find Them',107,72,50.0,'Fantastic Beasts and Where to Find Them is a 2001 guide book written by British author J. K. Rowling about the magical creatures in the Harry Potter universe.',128,'https://lostpurplequill.files.wordpress.com/2016/11/pale-highway6.jpg'),(70,'Harry Potter and the Philosopher\'s Stone',107,74,50.0,'Harry Potter and the Philosopher\'s Stone is a fantasy novel written by British author J. K. Rowling',223,'https://media.bloomsbury.com/rep/bj/9781408855652.jpeg'),(71,'Harry Potter and the Deathly Hallows',107,77,45.0,'Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling',607,'https://images-na.ssl-images-amazon.com/images/I/71sH3vxziLL.jpg'),(72,'Lethal White',107,71,30.0,'Lethal White is the fourth novel in the Cormoran Strike series, written by J. K. Rowling',656,'https://images-na.ssl-images-amazon.com/images/I/91qWWm0iVML.jpg');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `categoryID` int NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`categoryID`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (70,'Action and adventure'),(71,'Crime'),(72,'Drama'),(73,'Fairytale'),(74,'Fantasy'),(75,'Romance'),(76,'Science fiction'),(77,'Thriller'),(78,'Short story'),(79,'Paranormal romance'),(80,'Horror'),(81,'Historical fiction'),(82,'Fairytale'),(83,'Comic book'),(84,'Tragedy'),(85,'Comedy');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `orderID` int NOT NULL AUTO_INCREMENT,
  `accountID` int DEFAULT NULL,
  `totalMoney` decimal(10,1) DEFAULT NULL,
  `status` int DEFAULT NULL,
  PRIMARY KEY (`orderID`),
  KEY `fk_account` (`accountID`),
  CONSTRAINT `fk_account` FOREIGN KEY (`accountID`) REFERENCES `account` (`accountID`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderdetail`
--

DROP TABLE IF EXISTS `orderdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderdetail` (
  `oderdetailID` int NOT NULL AUTO_INCREMENT,
  `orderID` int DEFAULT NULL,
  `bookID` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `total` decimal(10,1) DEFAULT NULL,
  PRIMARY KEY (`oderdetailID`),
  KEY `fk_order` (`orderID`),
  KEY `fk_book` (`bookID`),
  CONSTRAINT `fk_book` FOREIGN KEY (`bookID`) REFERENCES `book` (`bookID`),
  CONSTRAINT `fk_order` FOREIGN KEY (`orderID`) REFERENCES `order` (`orderID`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderdetail`
--

LOCK TABLES `orderdetail` WRITE;
/*!40000 ALTER TABLE `orderdetail` DISABLE KEYS */;
/*!40000 ALTER TABLE `orderdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'bookstore'
--

--
-- Dumping routines for database 'bookstore'
--
/*!50003 DROP PROCEDURE IF EXISTS `USP_Get_Book` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_Get_Book`()
BEGIN
	SELECT b.bookID, b.title, au.`name`, b.price, b.`describe`, b.numberOfPages, b.bookImage 
	FROM bookstore.book as b, bookstore.author as au
	WHERE b.authorID = au.authorID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-13 16:19:02
