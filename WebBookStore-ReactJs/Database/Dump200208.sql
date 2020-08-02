  
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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (20,'admin','$2b$10$gKIjJZehGs8U9Rpd8B/lKOO8OOmApGwGutGlIPJTJIowPXVsDqKFu','Phan Hoang','012356',1),(21,'17520519','$2b$10$IThLVQ80aGdWqz29yurEN.rdx2JYCX.Nn4TmwAnnm/v9dxTUftYZ6','Hoang1','123456',0),(22,'ThienUIT','$2b$10$0NYT6Q0jhJufyFlEx1bKqOGOvQpNpsbfwenkRnzcs.UGM7ZdV0paG','Tran Dinh Thien','01236789',0),(23,'Hoang123','$2b$10$gVHS/iwSZMPOqYTNxdtRNeJQexaYzSbqlnZg8ukoNvpSLllX8mON6','Phan Hoang','123890',0),(24,'hazel','$2b$10$IS1MIbjetpA0gcnrx7mph.nB5eds/a9xVE1tLh1phFjXFbq6S3Jke','hansel','01236789',0),(25,'hanzel','$2b$10$Bf0UNsWVg.7.ZmJyrJmSN.UZNUFbSZB3QcE8AF98DUk.NFKlZl9xi','hanse','01236789',0),(26,'Limsa','$2b$10$Mjx47cNLkHqhRm40dVhT4.h8KQnAbj1NjQmxot597RE2P.gSh.wK6','Chawly','01236789',0),(27,'Hoang321','$2b$10$cyzf53QZPp1kuIAcIj0.JuZUvqKSoXF.glB5kYTf6SRnIF28S0eWe','Hoang Phan','01236789',0),(28,'hoang567','$2b$10$8C/5WYLuVcz7wUS3qb6oI.8GHSoOxmWd0lFe/Qw6AwK7LSoklEdbC','Hoang567','01236789',0);
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
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (90,'William Shakespeare','https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/468px-Shakespeare.jpg'),(100,'Agatha Christie','https://img.ti-media.net/wp/uploads/sites/46/2015/09/Agatha-Christie-614x920.jpg'),(101,'Barbara Cartland','https://pbs.twimg.com/profile_images/976013703719084032/tL9Y1A6Z.jpg'),(102,'Danielle Steel','https://www.gstatic.com/tv/thumb/persons/1688/1688_v9_ba.jpg'),(103,'Harold Robbins','https://i.pinimg.com/originals/55/6c/09/556c09576cad8f5ad6d17f14c65cc213.jpg'),(104,'Georges Simenon','https://www.gstatic.com/tv/thumb/persons/475530/475530_v9_ba.jpg'),(105,'Enid Blyton','https://jaydeashe.files.wordpress.com/2013/06/img_4543.jpg'),(106,'Sidney Sheldon','https://www.gstatic.com/tv/thumb/persons/59235/59235_v9_ba.jpg'),(107,'J.K.Rowling','https://www.gstatic.com/tv/thumb/persons/174909/174909_v9_bb.jpg'),(108,'Gilbert Patten','https://credo.library.umass.edu/images/resize/1080/muph061-sl561-i002-001.jpg'),(109,'Leo Tolstoy','https://www.themaestroart.com/wp-content/uploads/2018/07/Leo-Tolstoy-1.jpg'),(110,'Stephen King','https://www.gstatic.com/tv/thumb/persons/926/926_v9_bc.jpg');
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
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (60,'Romeo and Juliet',90,75,100.0,'Romeo and Juliet is a tragedy written by William Shakespeare early in his career about two young star-crossed lovers whose deaths ultimately reconcile their feuding families',200,'https://newsroom.smumn.edu/wp-content/uploads/2018/11/Romeo-Juliet-1050x675.jpg'),(61,'Hamlet',90,84,25.0,'The Tragedy of Hamlet, Prince of Denmark, is a tragedy written by William Shakespeare sometime between 1599 and 1601',344,'https://d4.violet.vn/uploads/blogs/4253/hamlet.jpg'),(62,'Othello',90,84,25.0,'Othello is a tragedy by William Shakespeare, believed to have been written in 1603.',300,'https://img.culturacolectiva.com/content/2017/01/revenge-books-othello.png'),(63,'Julius Ceasar',90,84,28.0,'The Tragedy of Julius Caesar is a history play and tragedy by William Shakespeare first performed in 1599.',239,'https://www.setonbooks.com/sempics/P-EN09-1621093.jpg'),(64,'The Merchant of Venice',90,85,40.0,'The Merchant of Venice is a 16th-century play written by William Shakespeare',173,'https://images-na.ssl-images-amazon.com/images/I/819C0ZpvhJL.jpg'),(69,'Fantastic Beasts and Where to Find Them',107,72,50.0,'Fantastic Beasts and Where to Find Them is a 2001 guide book written by British author J. K. Rowling about the magical creatures in the Harry Potter universe.',128,'https://lostpurplequill.files.wordpress.com/2016/11/pale-highway6.jpg'),(70,'Harry Potter and the Philosopher\'s Stone',107,74,65.0,'Harry Potter and the Philosopher\'s Stone is a fantasy novel written by British author J. K. Rowling',223,'https://media.bloomsbury.com/rep/bj/9781408855652.jpeg'),(71,'Harry Potter and the Deathly Hallows',107,77,45.0,'Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling',607,'https://images-na.ssl-images-amazon.com/images/I/71sH3vxziLL.jpg'),(72,'Lethal White',107,71,30.0,'Lethal White is the fourth novel in the Cormoran Strike series, written by J. K. Rowling',656,'https://images-na.ssl-images-amazon.com/images/I/91qWWm0iVML.jpg'),(73,'Frank Merriwell at Yale',108,70,50.0,'Here\'s to good old Yale-drink it down! Here\'s to good old Yale-drink it down! Here\'s to good old Yale',200,'https://images-na.ssl-images-amazon.com/images/I/71PgjpMylqL.jpg'),(74,'Owen Clancy\'s Happy Trail',108,86,30.0,'Owen Clancy\'s Happy Trail; Or, The Motor Wizard in California by Burt L. Standish. Published by Good Press.',84,'https://images-na.ssl-images-amazon.com/images/I/71fivIFJumL.jpg'),(75,'Owen Clancy\'s Run of Luck',108,86,90.0,' Published by Good Press. Good Press publishes a wide range of titles that encompasses every genre. From well-known classics & literary fiction and non-fiction to forgotten−or yet undiscovered gems−of world literature.',319,'https://kbimages1-a.akamaihd.net/c54999e2-e617-4bd8-a033-a46351e63a2d/1200/1200/False/owen-clancy-s-run-of-luck-or-the-motor-wizard-in-the-garage.jpg'),(76,'The Adventurers',103,86,50.0,'The Adventurers is a story of revolution and danger in the sultry jungles of South America',712,'https://assets1.bmstatic.com/assets/books-covers/fd/77/knf8aOHV-ipad.jpg'),(77,'The Carpetbaggers',103,86,60.0,'The Carpetbaggers is a 1961 bestselling novel by Harold Robbins, which was adapted into a 1964 film of the same title.',679,'https://i.pinimg.com/originals/6c/49/2b/6c492b7c2cc440dc671b006e6eda51a1.jpg'),(78,'If Tomorrow Comes',106,70,35.0,'It is a story portraying an ordinary woman who is framed by the Mafia, her subsequent quest for vengeance towards them and her later life as a con artist.',416,'https://isach.info/images/story/cover/if_tomorrow_comes__sidney_sheldon.jpg'),(84,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (70,'Action and adventure'),(71,'Crime'),(72,'Drama'),(73,'Fairytale'),(74,'Fantasy'),(75,'Romance'),(76,'Science fiction'),(77,'Thriller'),(78,'Short story'),(79,'Paranormal romance'),(80,'Horror'),(81,'Historical fiction'),(82,'Fairytale'),(83,'Comic book'),(84,'Tragedy'),(85,'Comedy'),(86,'Ficton');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favoritelist`
--

DROP TABLE IF EXISTS `favoritelist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favoritelist` (
  `favoritelistID` int NOT NULL AUTO_INCREMENT,
  `bookID` int DEFAULT NULL,
  `accountID` int DEFAULT NULL,
  PRIMARY KEY (`favoritelistID`),
  KEY `fk_favorite_book` (`bookID`),
  KEY `fk_favorite_account` (`accountID`),
  CONSTRAINT `fk_favorite_account` FOREIGN KEY (`accountID`) REFERENCES `account` (`accountID`),
  CONSTRAINT `fk_favorite_book` FOREIGN KEY (`bookID`) REFERENCES `book` (`bookID`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoritelist`
--

LOCK TABLES `favoritelist` WRITE;
/*!40000 ALTER TABLE `favoritelist` DISABLE KEYS */;
INSERT INTO `favoritelist` VALUES (50,60,21),(51,61,21),(52,62,21),(53,63,21),(54,64,21);
/*!40000 ALTER TABLE `favoritelist` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (63,21,75.0,1),(64,21,210.0,1),(65,23,970.0,1),(66,23,50.0,1),(67,23,240.0,1),(68,23,318.0,1),(69,23,95.0,1),(70,23,105.0,1),(71,23,150.0,1),(72,21,25.0,1),(73,21,75.0,1),(74,22,100.0,1),(75,22,195.0,1),(76,22,80.0,1),(77,23,80.0,1),(78,23,100.0,1),(79,20,150.0,1);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderitem`
--

DROP TABLE IF EXISTS `orderitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderitem` (
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
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderitem`
--

LOCK TABLES `orderitem` WRITE;
/*!40000 ALTER TABLE `orderitem` DISABLE KEYS */;
INSERT INTO `orderitem` VALUES (40,63,62,2,50.0),(41,63,61,1,25.0),(42,64,64,1,40.0),(43,64,71,1,45.0),(44,64,78,1,35.0),(45,64,75,1,90.0),(46,65,64,1,40.0),(47,65,71,4,180.0),(48,65,75,4,360.0),(49,65,77,4,240.0),(50,65,76,3,150.0),(51,66,61,1,25.0),(52,66,62,1,25.0),(53,67,64,1,40.0),(54,67,69,1,50.0),(55,67,72,1,30.0),(56,67,74,1,30.0),(57,67,75,1,90.0),(58,68,60,1,100.0),(59,68,63,1,28.0),(60,68,73,1,50.0),(61,68,77,1,60.0),(62,68,76,1,50.0),(63,68,74,1,30.0),(64,69,61,1,25.0),(65,69,64,1,40.0),(66,69,72,1,30.0),(67,70,62,1,25.0),(68,70,69,1,50.0),(69,70,72,1,30.0),(70,71,64,1,40.0),(71,71,71,1,45.0),(72,71,74,1,30.0),(73,71,78,1,35.0),(74,72,61,1,25.0),(75,73,69,1,50.0),(76,73,62,1,25.0),(77,74,61,1,25.0),(78,74,69,1,50.0),(79,74,62,1,25.0),(80,75,69,1,50.0),(81,75,71,1,45.0),(82,75,60,1,100.0),(83,76,72,1,30.0),(84,76,70,1,50.0),(85,77,74,1,30.0),(86,77,69,1,50.0),(87,78,60,1,100.0),(88,79,73,1,50.0),(89,79,78,2,70.0),(90,79,72,1,30.0);
/*!40000 ALTER TABLE `orderitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'bookstore'
--
/*!50003 DROP PROCEDURE IF EXISTS `find_book` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `find_book`(IN param1 nvarchar(50))
BEGIN
		SELECT b.bookID, b.title, au.`name`, cate.categoryName, b.price, b.`describe`, b.numberOfPages, b.bookImage 
        from book as b, author as au, category as cate
        where b.authorID = au.authorID and b.categoryID = cate.categoryID and b.title like CONCAT("%",param1,"%");
    END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `USP_GetOrderDetail` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_GetOrderDetail`( ID int )
BEGIN
	select b.title, b.price, b.bookImage, oi.quantity, oi.total 
	from orderitem as oi, book as b 
	where oi.bookID = b.bookID and oi.orderID = ID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
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
	SELECT b.bookID, b.title, au.`name`,cate.categoryName , b.price, b.`describe`, b.numberOfPages, b.bookImage 
	FROM bookstore.book as b, bookstore.author as au, bookstore.category as cate
	WHERE b.authorID = au.authorID and b.categoryID = cate.categoryID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `USP_Get_Book_By_Id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `USP_Get_Book_By_Id`(Id int)
BEGIN
	SELECT b.bookID, b.title, au.`name`,cate.categoryName , b.price, b.`describe`, b.numberOfPages, b.bookImage 
	FROM bookstore.book as b, bookstore.author as au, bookstore.category as cate
	WHERE b.authorID = au.authorID and b.categoryID = cate.categoryID and b.bookID = Id ;
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

-- Dump completed on 2020-07-16 20:54:53