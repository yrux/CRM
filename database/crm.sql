/*
SQLyog Community v13.1.7 (64 bit)
MySQL - 10.4.21-MariaDB : Database - crm
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `brand_users` */

DROP TABLE IF EXISTS `brand_users`;

CREATE TABLE `brand_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `is_owner` tinyint(4) NOT NULL DEFAULT 0,
  `user_email` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `brand_user_email` (`user_email`),
  KEY `brand_owner_usr_brand` (`brand_id`) USING BTREE,
  KEY `brand_owner_usr` (`user_id`) USING BTREE,
  CONSTRAINT `brand_users_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `brand_users_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;

/*Data for the table `brand_users` */

insert  into `brand_users`(`id`,`user_id`,`brand_id`,`is_owner`,`user_email`,`user_name`,`created_at`,`updated_at`) values 
(2,2,4,1,'test@tcwdd.com','test','2021-10-22 16:13:06','2021-10-25 11:51:27'),
(4,4,4,1,'brandowner@gmail.com','Brand Owner','2021-10-25 12:05:51','2021-10-25 12:05:51'),
(5,5,4,1,'brandsupport@gmail.com','Brand Owner','2021-10-25 12:06:16','2021-10-25 12:06:16'),
(6,19,9,1,'test@gmail.com','test','2021-10-28 18:38:45','2021-10-28 18:38:45'),
(7,20,9,1,'test2@gmail.com','test','2021-10-28 18:39:46','2021-10-28 18:39:46'),
(8,21,9,1,'test4@gmail.com','test','2021-10-28 18:47:34','2021-10-28 18:47:34'),
(9,4,10,1,'brandowner1@gmail.com','Brand Owner','2021-10-28 20:32:00','2021-10-28 20:32:00'),
(10,5,10,1,'brandsuppor1t@gmail.com','Brand Owner','2021-10-28 20:32:27','2021-10-28 20:32:27'),
(11,21,9,0,'test7@gmail.com','tests','2021-10-28 20:33:34','2021-10-28 20:33:34'),
(13,25,11,1,'tcbownernew@gmail.com','tcbownernew','2021-10-28 23:37:46','2021-10-28 23:37:46'),
(14,33,14,1,'brandowner3@gmail.com','Brand Owner 3','2021-11-16 15:16:20','2021-11-16 15:16:20'),
(15,34,14,0,'brandsales3@gmail.com','Brand Sales 3','2021-11-16 15:16:36','2021-11-16 15:16:36'),
(16,35,14,0,'brandsupport3@gmail.com','Brand Support 3','2021-11-16 15:16:48','2021-11-16 15:16:48'),
(17,34,15,0,'brandsales3ff@gmail.com','Brand Sales 3','2022-03-12 06:23:55','2022-03-12 06:23:55');

/*Table structure for table `brands` */

DROP TABLE IF EXISTS `brands`;

CREATE TABLE `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(255) NOT NULL,
  `brand_code` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `company_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `company_id` (`company_id`),
  CONSTRAINT `brands_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

/*Data for the table `brands` */

insert  into `brands`(`id`,`brand_name`,`brand_code`,`created_at`,`updated_at`,`company_id`) values 
(4,'The Creative Web Design','TCWB','2021-10-20 19:20:02','2021-10-20 19:21:25',1),
(6,'Design Proficient','DP','2021-10-20 14:33:32','2021-10-20 14:33:39',1),
(8,'Design Proficient','DP-US','2021-10-28 15:20:35','2021-10-28 15:24:49',1),
(9,'Octalogo','OC US','2021-10-28 15:25:26','2021-10-28 15:25:58',17),
(10,'DS','DS','2021-10-28 17:59:07','2021-10-28 17:59:07',1),
(11,'Test Company Brand','TCB','2021-10-28 23:33:40','2021-10-28 23:35:18',18),
(13,'Jesper Brand','JS-B','2021-11-05 01:43:08','2021-11-05 01:43:08',1),
(14,'Company Brand','CBD','2021-11-16 15:15:50','2021-11-16 15:15:50',19),
(15,'Softcubebrand','SCB','2021-12-01 00:45:21','2021-12-01 00:45:21',19);

/*Table structure for table `brief_forms` */

DROP TABLE IF EXISTS `brief_forms`;

CREATE TABLE `brief_forms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `form_name` varchar(100) DEFAULT NULL,
  `form_description` text DEFAULT NULL,
  `form_fields` text DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

/*Data for the table `brief_forms` */

insert  into `brief_forms`(`id`,`company_id`,`user_id`,`form_name`,`form_description`,`form_fields`,`updated_at`,`created_at`) values 
(7,1,3,'Content Questionnaire',NULL,'[{\"type\":\"heading\",\"label\":\"CONTENT WRITING QUESTIONNAIRE\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"How many pages do we need to write? Please specify the exact name of the Pages that are needed; e.g. Home Page, About Us, Products, Services, Portfolio, Location Map, Contact, etc.\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Company\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"Briefly describe your business or organization in one or two short paragraphs. Describe the culture and personality of your business.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Provide relevant Information about your organization, its history, the People, their expertise and resumes (if possible).\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the Vision and Mission or Purpose of your business or Organization?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes you stand out and sets your company apart from others in your industry? Is there a unique aspect to your company that you could use as a point of differentiation? What is your unique selling point?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who is your competition? (Please list at least 3-5 competitors).\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Services:\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"List down the services and products you offer\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes your business, products and services unique? What is your competitive advantage? Why do customers choose you?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"How exactly your services enhance the lives, or solve the problems, of your target consumers?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please list 10 to 20 top keywords or phrases people use to search for your products or services\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Describe your ideal visitor; give us as much relevant information as you can about your target audience. Describe the typical consumer you are addressing and please include – where possible – details such as age, gender, income, interests, habits, lifestyle and locality\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What are your customers trying to accomplish by using your products or services?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is your target location: International, national, regional or local?\",\"grid\":12,\"model\":\"\"}]','2021-11-12 05:05:49','2021-11-12 05:05:49'),
(8,1,3,'LOGO DESIGN BRIEF',NULL,'[{\"type\":\"heading\",\"label\":\"LOGO DESIGN BRIEF\"},{\"type\":\"breaker\"},{\"type\":\"textbox\",\"label\":\"Do you need a logo for your company or for your specific product or brand?\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Please write the exact name you would like to appear in your logo.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Would you like to include a tagline with your logo? If so, please enter your tagline exactly as you would like it to be.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please describe your products / services and the industry it belongs to. (ie: Software Company, Food Manufacturing, etc.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Do you have an old logo or identity that you’ve been using? If yes, why are you making a change? Please attach your old logo.\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Do you have any existing Website? Please type the URL link.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the most important application of your logo? (ie: Business Cards, Promotional Products, Building signage, Truck, T-shirt, Website, etc.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Who are your target market, its geographical location and their age level?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Would you like a symbol or a logotype? (Symbol – This is an icon or graphical representation alongside – i.e.apple. // Logotype – it’s within the name itself or sometime refer to type-face…- i.e. Nokia logo.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Please indicate the style you want for your new identity. i.e.: Corporate, Cartoony, Fun , Elegant, Classic, Bold, Serious or High Tech\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Do you have any color preference or existing corporate colors you want to follow?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who are your competitors and what do you think about their logos?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Things or images that you DEFINITELY want to see in your logo? (e.g. \\\"I want to see a camera illustration in my logo\\\") I’d like to see one execution that uses a line drawing of two books lying flat on their side, one on top of the other, so that the spines form the shape of a “B.” This shape would stand for the B in my first name. See drawing below:\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Things or images that you do NOT want to see in your logo? (e.g. \\\"I do not want to see a house or any triangular shape”)\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Any more information you would like to add?\",\"grid\":12,\"model\":\"\"}]','2021-11-12 05:09:04','2021-11-12 05:09:04'),
(9,17,17,'LOGO DESIGN BRIEF',NULL,'[{\"type\":\"heading\",\"label\":\"LOGO DESIGN BRIEF\"},{\"type\":\"breaker\"},{\"type\":\"textbox\",\"label\":\"Do you need a logo for your company or for your specific product or brand?\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Please write the exact name you would like to appear in your logo.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Would you like to include a tagline with your logo? If so, please enter your tagline exactly as you would like it to be.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please describe your products / services and the industry it belongs to. (ie: Software Company, Food Manufacturing, etc.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Do you have an old logo or identity that you’ve been using? If yes, why are you making a change? Please attach your old logo.\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Do you have any existing Website? Please type the URL link.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the most important application of your logo? (ie: Business Cards, Promotional Products, Building signage, Truck, T-shirt, Website, etc.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Who are your target market, its geographical location and their age level?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Would you like a symbol or a logotype? (Symbol – This is an icon or graphical representation alongside – i.e.apple. // Logotype – it’s within the name itself or sometime refer to type-face…- i.e. Nokia logo.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Please indicate the style you want for your new identity. i.e.: Corporate, Cartoony, Fun , Elegant, Classic, Bold, Serious or High Tech\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Do you have any color preference or existing corporate colors you want to follow?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who are your competitors and what do you think about their logos?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Things or images that you DEFINITELY want to see in your logo? (e.g. \\\"I want to see a camera illustration in my logo\\\") I’d like to see one execution that uses a line drawing of two books lying flat on their side, one on top of the other, so that the spines form the shape of a “B.” This shape would stand for the B in my first name. See drawing below:\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Things or images that you do NOT want to see in your logo? (e.g. \\\"I do not want to see a house or any triangular shape”)\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Any more information you would like to add?\",\"grid\":12,\"model\":\"\"}]','2021-11-16 13:55:47','2021-11-12 05:09:04'),
(10,17,17,'Sales Form','<p>test</p>','[{\"type\":\"heading\",\"label\":\"Sales form\"},{\"type\":\"breaker\"},{\"type\":\"textbox\",\"label\":\"SEO Name\",\"grid\":6,\"model\":\"\",\"explanation\":\"<p>This is for SEO Purposes</p><ul><li>ABC</li><li>EFG</li><li>IJK</li><li>LMNO</li></ul>\"},{\"type\":\"textbox\",\"label\":\"SEO TITLE\",\"grid\":12,\"model\":\"\",\"explanation\":\"\"}]','2021-11-16 14:44:04','2021-11-16 14:44:04'),
(11,19,32,'Content Questionnaire',NULL,'[{\"type\":\"heading\",\"label\":\"CONTENT WRITING QUESTIONNAIRE\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"How many pages do we need to write? Please specify the exact name of the Pages that are needed; e.g. Home Page, About Us, Products, Services, Portfolio, Location Map, Contact, etc.\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Company\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"Briefly describe your business or organization in one or two short paragraphs. Describe the culture and personality of your business.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Provide relevant Information about your organization, its history, the People, their expertise and resumes (if possible).\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the Vision and Mission or Purpose of your business or Organization?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes you stand out and sets your company apart from others in your industry? Is there a unique aspect to your company that you could use as a point of differentiation? What is your unique selling point?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who is your competition? (Please list at least 3-5 competitors).\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Services:\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"List down the services and products you offer\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes your business, products and services unique? What is your competitive advantage? Why do customers choose you?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"How exactly your services enhance the lives, or solve the problems, of your target consumers?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please list 10 to 20 top keywords or phrases people use to search for your products or services\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Describe your ideal visitor; give us as much relevant information as you can about your target audience. Describe the typical consumer you are addressing and please include – where possible – details such as age, gender, income, interests, habits, lifestyle and locality\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What are your customers trying to accomplish by using your products or services?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is your target location: International, national, regional or local?\",\"grid\":12,\"model\":\"\"}]','2021-11-12 05:05:49','2021-11-12 05:05:49'),
(12,19,32,'Custom Web','<p>Test</p>','[{\"type\":\"heading\",\"label\":\"Competitors\"},{\"type\":\"textbox\",\"label\":\"Web 1\",\"grid\":6,\"model\":\"\",\"explanation\":\"\"},{\"type\":\"textbox\",\"label\":\"Web 2\",\"grid\":6,\"model\":\"\",\"explanation\":\"\"},{\"type\":\"textbox\",\"label\":\"Web 4\",\"grid\":6,\"model\":\"\",\"explanation\":\"\"},{\"type\":\"textbox\",\"label\":\"Web 3\",\"grid\":6,\"model\":\"\",\"explanation\":\"\"},{\"type\":\"breaker\"},{\"type\":\"heading\",\"label\":\"Social Media\"},{\"type\":\"breaker\"},{\"type\":\"textbox\",\"label\":\"FB\",\"grid\":6,\"model\":\"\",\"explanation\":\"\"},{\"type\":\"textbox\",\"label\":\"Linked\",\"grid\":6,\"model\":\"\",\"explanation\":\"\"}]','2021-11-26 00:09:46','2021-11-26 00:09:46');

/*Table structure for table `chat_heads` */

DROP TABLE IF EXISTS `chat_heads`;

CREATE TABLE `chat_heads` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `sender_id` int(11) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4;

/*Data for the table `chat_heads` */

insert  into `chat_heads`(`id`,`user_id`,`sender_id`,`updated_at`,`created_at`) values 
(25,2,3,'2021-10-29 14:31:01','2021-10-29 14:31:01'),
(26,3,4,'2021-10-29 14:31:18','2021-10-29 14:31:18'),
(27,24,25,'2021-10-29 22:49:37','2021-10-29 22:49:37'),
(28,2,25,'2021-10-30 00:45:57','2021-10-30 00:45:57'),
(29,2,24,'2021-10-30 00:45:59','2021-10-30 00:45:59'),
(30,2,20,'2021-10-30 00:46:03','2021-10-30 00:46:03'),
(31,2,17,'2021-10-30 00:52:16','2021-10-30 00:52:16'),
(32,2,18,'2021-10-30 00:52:56','2021-10-30 00:52:56'),
(33,2,26,'2021-11-02 00:10:39','2021-11-02 00:10:39'),
(34,25,26,'2021-11-03 06:30:02','2021-11-03 06:30:02'),
(35,33,36,'2021-11-16 16:06:21','2021-11-16 16:06:21'),
(36,34,36,'2021-11-16 19:50:20','2021-11-16 19:50:20'),
(37,34,37,'2021-11-16 19:50:22','2021-11-16 19:50:22'),
(38,34,38,'2021-11-16 19:50:23','2021-11-16 19:50:23'),
(39,33,38,'2021-11-17 00:24:48','2021-11-17 00:24:48'),
(40,33,37,'2021-11-17 05:44:37','2021-11-17 05:44:37'),
(41,37,36,'2021-11-25 04:38:44','2021-11-25 04:38:44'),
(42,37,35,'2021-11-25 04:38:45','2021-11-25 04:38:45'),
(43,37,32,'2021-11-25 04:38:47','2021-11-25 04:38:47'),
(44,37,38,'2021-11-25 04:38:48','2021-11-25 04:38:48'),
(45,37,39,'2021-11-25 05:34:55','2021-11-25 05:34:55'),
(46,34,42,'2021-11-26 04:25:32','2021-11-26 04:25:32'),
(47,34,41,'2021-11-26 04:25:33','2021-11-26 04:25:33'),
(48,34,40,'2021-11-26 05:01:33','2021-11-26 05:01:33'),
(49,34,35,'2021-11-26 05:01:39','2021-11-26 05:01:39'),
(50,34,33,'2021-11-26 05:01:40','2021-11-26 05:01:40'),
(51,33,41,'2021-11-29 22:32:36','2021-11-29 22:32:36'),
(52,43,40,'2021-12-03 06:25:40','2021-12-03 06:25:40'),
(53,43,44,'2021-12-03 06:25:42','2021-12-03 06:25:42'),
(54,43,42,'2021-12-06 21:31:24','2021-12-06 21:31:24'),
(55,43,41,'2021-12-06 21:31:27','2021-12-06 21:31:27'),
(56,33,44,'2021-12-21 23:49:00','2021-12-21 23:49:00'),
(57,32,44,'2022-02-01 21:52:34','2022-02-01 21:52:34'),
(58,32,51,'2022-02-01 21:52:36','2022-02-01 21:52:36'),
(59,32,50,'2022-02-01 21:52:38','2022-02-01 21:52:38'),
(60,32,48,'2022-02-01 21:52:39','2022-02-01 21:52:39'),
(61,32,33,'2022-02-01 21:56:21','2022-02-01 21:56:21');

/*Table structure for table `chats` */

DROP TABLE IF EXISTS `chats`;

CREATE TABLE `chats` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `chat_head_id` int(11) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4;

/*Data for the table `chats` */

insert  into `chats`(`id`,`chat_head_id`,`message`,`user_id`,`updated_at`,`created_at`) values 
(22,25,'eteasdasdasd',NULL,'2021-10-29 19:40:44','2021-10-29 19:40:44'),
(23,25,'123123123',3,'2021-10-30 00:37:29','2021-10-30 00:37:29'),
(24,25,'123123',3,'2021-10-30 00:37:40','2021-10-30 00:37:40'),
(25,25,'123123',3,'2021-10-30 00:38:15','2021-10-30 00:38:15'),
(26,25,'123123',3,'2021-10-30 00:38:36','2021-10-30 00:38:36'),
(27,25,'123123123',3,'2021-10-30 00:39:02','2021-10-30 00:39:02'),
(28,25,'hey terhe',3,'2021-10-30 00:39:16','2021-10-30 00:39:16'),
(29,25,'hey bro',2,'2021-10-30 00:39:21','2021-10-30 00:39:21'),
(30,25,'how are you?',3,'2021-10-30 00:39:24','2021-10-30 00:39:24'),
(31,25,'did you see the document',2,'2021-10-30 00:39:27','2021-10-30 00:39:27'),
(32,25,'yes bro',3,'2021-10-30 00:39:30','2021-10-30 00:39:30'),
(33,25,'this one na?',3,'2021-10-30 00:39:32','2021-10-30 00:39:32'),
(34,25,'this',3,'2021-10-30 00:39:34','2021-10-30 00:39:34'),
(35,25,'yes this one',2,'2021-10-30 00:39:38','2021-10-30 00:39:38'),
(36,25,'ok',3,'2021-10-30 00:39:40','2021-10-30 00:39:40'),
(37,25,'asdads asd asd asd123123 asd&nbsp;',2,'2021-10-30 00:42:39','2021-10-30 00:42:39'),
(38,25,'asd asd',2,'2021-10-30 00:42:41','2021-10-30 00:42:41'),
(39,25,'23asda sd',2,'2021-10-30 00:42:50','2021-10-30 00:42:50'),
(40,25,'asd asd 123&nbsp;',2,'2021-10-30 00:42:53','2021-10-30 00:42:53'),
(41,25,'123123&nbsp;',2,'2021-10-30 00:43:16','2021-10-30 00:43:16'),
(42,25,'123',2,'2021-10-30 00:43:37','2021-10-30 00:43:37'),
(43,25,'123 1asd asd',2,'2021-10-30 00:43:53','2021-10-30 00:43:53'),
(44,25,'123123',2,'2021-10-30 00:43:58','2021-10-30 00:43:58'),
(45,25,'123adsasd',2,'2021-10-30 00:43:59','2021-10-30 00:43:59'),
(46,25,'123adsasd',2,'2021-10-30 00:44:00','2021-10-30 00:44:00'),
(47,25,'123123adsads 123 1',2,'2021-10-30 00:44:01','2021-10-30 00:44:01'),
(48,25,'23123 123',2,'2021-10-30 00:44:02','2021-10-30 00:44:02'),
(49,25,'&nbsp;123',2,'2021-10-30 00:44:02','2021-10-30 00:44:02'),
(50,25,'1 23123',2,'2021-10-30 00:44:02','2021-10-30 00:44:02'),
(51,25,'123&nbsp;',2,'2021-10-30 00:44:03','2021-10-30 00:44:03'),
(52,25,'1231',2,'2021-10-30 00:44:03','2021-10-30 00:44:03'),
(53,25,'23123',2,'2021-10-30 00:44:03','2021-10-30 00:44:03'),
(54,25,'123',2,'2021-10-30 00:44:04','2021-10-30 00:44:04'),
(55,25,'123',2,'2021-10-30 00:44:04','2021-10-30 00:44:04'),
(56,25,'123',2,'2021-10-30 00:44:04','2021-10-30 00:44:04'),
(57,25,'123',2,'2021-10-30 00:44:04','2021-10-30 00:44:04'),
(58,25,'123',2,'2021-10-30 00:44:05','2021-10-30 00:44:05'),
(59,25,'123',2,'2021-10-30 00:44:05','2021-10-30 00:44:05'),
(60,25,'123',2,'2021-10-30 00:44:05','2021-10-30 00:44:05'),
(61,25,'123',2,'2021-10-30 00:44:05','2021-10-30 00:44:05'),
(62,25,'123',2,'2021-10-30 00:44:06','2021-10-30 00:44:06'),
(63,25,'123',2,'2021-10-30 00:44:06','2021-10-30 00:44:06'),
(64,25,'123',2,'2021-10-30 00:44:06','2021-10-30 00:44:06'),
(65,25,'123',2,'2021-10-30 00:44:07','2021-10-30 00:44:07'),
(66,25,'123',2,'2021-10-30 00:44:07','2021-10-30 00:44:07'),
(67,25,'123132',2,'2021-10-30 00:44:08','2021-10-30 00:44:08'),
(68,25,'123123',2,'2021-10-30 00:44:28','2021-10-30 00:44:28'),
(69,27,'hey',24,'2021-10-30 01:24:44','2021-10-30 01:24:44'),
(70,27,'hi',25,'2021-10-30 01:24:48','2021-10-30 01:24:48'),
(71,27,'how are you?',24,'2021-10-30 01:24:50','2021-10-30 01:24:50'),
(72,27,'good you?',25,'2021-10-30 01:24:53','2021-10-30 01:24:53'),
(73,27,'i\'m good as well',24,'2021-10-30 01:24:57','2021-10-30 01:24:57'),
(74,27,'check this&nbsp;',25,'2021-10-30 01:25:05','2021-10-30 01:25:05'),
(75,27,'ok looking into it',24,'2021-10-30 01:25:13','2021-10-30 01:25:13'),
(76,27,'will update yo',24,'2021-10-30 01:25:16','2021-10-30 01:25:16'),
(77,27,'ok sir',25,'2021-10-30 01:25:19','2021-10-30 01:25:19'),
(78,27,'thanks',25,'2021-10-30 01:25:20','2021-10-30 01:25:20'),
(79,27,'no problem',24,'2021-10-30 01:25:23','2021-10-30 01:25:23'),
(80,33,'123123',2,'2021-11-02 00:10:43','2021-11-02 00:10:43'),
(81,27,'hello there',25,'2021-11-03 06:30:09','2021-11-03 06:30:09'),
(82,27,'yelo bharwe',25,'2021-11-03 06:30:20','2021-11-03 06:30:20'),
(83,35,'12',33,'2021-11-16 16:06:23','2021-11-16 16:06:23'),
(84,39,'test',33,'2021-11-17 00:24:51','2021-11-17 00:24:51'),
(85,44,'123123',37,'2021-11-25 04:38:51','2021-11-25 04:38:51'),
(86,44,'123123<br>12313 ad adad&nbsp;<br>12313a dasd&nbsp;',37,'2021-11-25 04:38:56','2021-11-25 04:38:56'),
(87,43,'testa',32,'2021-11-25 04:55:19','2021-11-25 04:55:19'),
(88,43,'12312',32,'2021-11-25 04:55:22','2021-11-25 04:55:22'),
(89,43,'123123',32,'2021-11-25 04:55:31','2021-11-25 04:55:31'),
(90,45,'123',37,'2021-11-25 05:34:57','2021-11-25 05:34:57'),
(91,45,'123',37,'2021-11-25 05:34:58','2021-11-25 05:34:58'),
(92,45,'123',37,'2021-11-25 05:34:58','2021-11-25 05:34:58'),
(93,45,'asd',37,'2021-11-25 05:34:59','2021-11-25 05:34:59'),
(94,47,'123123',34,'2021-11-26 04:25:38','2021-11-26 04:25:38'),
(95,51,'1231231',33,'2021-11-29 22:32:39','2021-11-29 22:32:39'),
(96,51,'asdasdasd',33,'2021-11-29 22:32:40','2021-11-29 22:32:40'),
(97,51,'asdasd123123',33,'2021-11-29 22:32:41','2021-11-29 22:32:41'),
(98,51,'asdasd',33,'2021-11-29 22:32:43','2021-11-29 22:32:43'),
(99,51,'aasdasd',33,'2021-11-29 22:32:44','2021-11-29 22:32:44'),
(100,51,'dsadas<br>asdasdasdasdasdasda<br>asdasdasd1231 23a sd<br>123123 .',33,'2021-11-29 22:32:58','2021-11-29 22:32:58'),
(101,53,'sabih kiya kr rage gi?',43,'2021-12-03 06:25:50','2021-12-03 06:25:50'),
(102,53,'test',43,'2021-12-03 06:26:01','2021-12-03 06:26:01'),
(103,53,'asdads',44,'2021-12-15 09:37:00','2021-12-15 09:37:00');

/*Table structure for table `company` */

DROP TABLE IF EXISTS `company`;

CREATE TABLE `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COMMENT='Table to handle all companies';

/*Data for the table `company` */

insert  into `company`(`id`,`company_name`,`user_id`,`created_at`,`updated_at`) values 
(1,'SoftCube',0,'2021-10-12 17:54:49','2021-10-12 17:54:49'),
(3,'YruX',0,'2021-10-20 12:39:15','2021-10-20 12:39:15'),
(4,'test',0,'2021-10-20 12:41:21','2021-10-20 12:53:45'),
(5,'new company',0,'2021-10-20 12:42:50','2021-10-20 12:42:50'),
(6,'YruX1',0,'2021-10-28 11:08:06','2021-10-28 11:08:06'),
(7,'YruX2',0,'2021-10-28 11:09:38','2021-10-28 11:09:38'),
(17,'Company',17,'2021-10-28 14:40:27','2021-10-28 14:40:27'),
(18,'test company',24,'2021-10-28 23:32:30','2021-10-28 23:32:30'),
(19,'New Company 3',32,'2021-11-16 15:13:41','2021-11-16 15:13:41');

/*Table structure for table `crm_updates` */

DROP TABLE IF EXISTS `crm_updates`;

CREATE TABLE `crm_updates` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_new` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `crm_updates` */

insert  into `crm_updates`(`id`,`message`,`is_new`,`created_at`,`updated_at`) values 
(2,'<p>Bug fixes:&nbsp;</p><ul><li>Project Description is removed from required (You can now create projects without adding description)</li><li>Assigned By added in Task List (New, Upcoming, OverDue, All)</li></ul>','1','2022-03-05 01:42:27','2022-03-05 01:42:27');

/*Table structure for table `departments` */

DROP TABLE IF EXISTS `departments`;

CREATE TABLE `departments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `department_name` varchar(255) DEFAULT NULL,
  `company_id` int(11) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

/*Data for the table `departments` */

insert  into `departments`(`id`,`department_name`,`company_id`,`updated_at`,`created_at`) values 
(2,'Design',19,'2021-11-30 02:39:10','2021-11-30 02:27:23'),
(3,'Wordpress',19,'2021-11-30 02:39:14','2021-11-30 02:39:14'),
(4,'Frontend',19,'2021-11-30 02:39:21','2021-11-30 02:39:21'),
(5,'Custom/PHP',19,'2021-11-30 02:39:27','2021-11-30 02:39:27'),
(6,'Sales',19,'2021-11-30 02:40:20','2021-11-30 02:40:20'),
(7,'Customer',19,'2021-11-30 02:40:33','2021-11-30 02:40:33'),
(8,'Marketing',19,'2022-01-20 04:28:47','2022-01-20 04:28:45');

/*Table structure for table `events` */

DROP TABLE IF EXISTS `events`;

CREATE TABLE `events` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `event_date` date NOT NULL,
  `event_time` time NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `events` */

insert  into `events`(`id`,`user_id`,`event_date`,`event_time`,`title`,`created_at`,`updated_at`) values 
(1,17,'2022-03-12','00:00:00','02:56','2022-03-12 05:28:13','2022-03-12 05:28:13'),
(2,17,'2022-03-12','02:56:00','02:56','2022-03-12 05:32:57','2022-03-12 05:32:57'),
(3,17,'2022-03-11','13:06:00','13:06','2022-03-12 06:03:49','2022-03-12 06:03:49'),
(4,17,'2022-03-12','04:20:00','test it out','2022-03-12 06:04:28','2022-03-12 06:04:28'),
(5,17,'2022-03-12','01:05:00','Sandra Call','2022-03-12 06:05:28','2022-03-12 06:05:28');

/*Table structure for table `failed_jobs` */

DROP TABLE IF EXISTS `failed_jobs`;

CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `failed_jobs` */

/*Table structure for table `files` */

DROP TABLE IF EXISTS `files`;

CREATE TABLE `files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(555) NOT NULL,
  `fileable_id` int(11) NOT NULL,
  `fileable_type` varchar(255) NOT NULL,
  `table_name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fileable_id_type_index` (`fileable_id`,`fileable_type`,`table_name`)
) ENGINE=InnoDB AUTO_INCREMENT=178 DEFAULT CHARSET=utf8mb4;

/*Data for the table `files` */

insert  into `files`(`id`,`url`,`fileable_id`,`fileable_type`,`table_name`,`created_at`,`updated_at`) values 
(1,'projects/Xyzcpyz8ryCF4L2QrtAclgHs0YUFACkM2AHYnHKA.jpg',1,'App\\Models\\{Project}','projects','2021-10-26 06:21:45','2021-10-26 06:21:45'),
(2,'projects/6l3BRP62FR392vGoC16aVhRrelo0cdV1Od21S6dL.png',1,'App\\Models\\{Project}','projects','2021-10-26 06:21:45','2021-10-26 06:21:45'),
(3,'projects/8dqEGIVbgj1W2FDnPj82frzchrSKuvizokrpTXTO.jpg',1,'App\\Models\\{Project}','projects','2021-10-26 06:21:45','2021-10-26 06:21:45'),
(4,'projects/0NF8fo6LMhvR0uzmJXTY2oKUGLoxEUQ8rd5KBKNL.jpg',1,'App\\Models$plural_table','projects','2021-10-26 06:22:05','2021-10-26 06:22:05'),
(5,'projects/Q8tNx65Dg5Aw4PG4MGPK8bubR4nWLX0L0M8JksB4.png',1,'App\\Models$plural_table','projects','2021-10-26 06:22:05','2021-10-26 06:22:05'),
(6,'projects/VoH56B3ty590o4OFtsqYSoUGzV9PrPYAM8qWK8Al.jpg',1,'App\\Models$plural_table','projects','2021-10-26 06:22:05','2021-10-26 06:22:05'),
(7,'projects/CLgzFqNfw2rj8bUAkuPiRG4ZoEfoVnZAveN4tEgP.jpg',1,'App\\ModelsProject','projects','2021-10-26 06:22:14','2021-10-26 06:22:14'),
(8,'projects/8hhb3zxiFcgLdIGb35b88kPq2CFcU2YqbbkYulUb.png',1,'App\\ModelsProject','projects','2021-10-26 06:22:14','2021-10-26 06:22:14'),
(9,'projects/EADz0y52JVaOdP1L8b0bArDkhhaBi9SmfU1fOVwN.jpg',1,'App\\ModelsProject','projects','2021-10-26 06:22:14','2021-10-26 06:22:14'),
(10,'projects/aCXLP6j0q6QhFA90HG1h01lf1gUmgq33AbJrgpwC.jpg',1,'App\\Models\\{Project}','projects','2021-10-26 06:22:24','2021-10-26 06:22:24'),
(11,'projects/uHYA0mBmU1KETizvMUG6sofVt8pQHgUTFhuw2F5l.png',1,'App\\Models\\{Project}','projects','2021-10-26 06:22:24','2021-10-26 06:22:24'),
(12,'projects/aG8BRGxK5k433iKDhVK2kRDL8EIvO3CIxRSgtv3e.jpg',1,'App\\Models\\{Project}','projects','2021-10-26 06:22:24','2021-10-26 06:22:24'),
(13,'projects/J8dUOCOcuXbnd4X6KmvjPHvvntfSdFYuAxmtesax.jpg',1,'App\\Models\\Project','projects','2021-10-26 06:23:10','2021-10-26 06:23:10'),
(14,'projects/k2n3p52QvJd6Edkp9zrhxzexp5joSbVFKPNuhdJt.png',1,'App\\Models\\Project','projects','2021-10-26 06:23:10','2021-10-26 06:23:10'),
(15,'projects/WwJXXbjOIYTQroJUa9DMANftIqKhVxR1OMeqy3sg.jpg',1,'App\\Models\\Project','projects','2021-10-26 06:23:10','2021-10-26 06:23:10'),
(16,'projects/iXOoFVoguuCNvfBMfiL5AzMPoqfSBS1ZoGemmrcG.jpg',2,'App\\Models\\Project','projects','2021-10-26 06:27:50','2021-10-26 06:27:50'),
(17,'projects/y5tzljviVPOTH5bfvZ7VnMs7c4eSoIr2PQZJFF6l.png',2,'App\\Models\\Project','projects','2021-10-26 06:27:50','2021-10-26 06:27:50'),
(18,'projects/u9ivTC9kcBc9QZPaUIFQNlUORsPwJdUWBIOWKeU1.jpg',2,'App\\Models\\Project','projects','2021-10-26 06:27:50','2021-10-26 06:27:50'),
(19,'projects/cs0Q9DLZTLCpgUYwIvgvI8CvLAM6vNUZOiF1csQg.jpg',2,'App\\Models\\Project','projects','2021-10-26 06:27:53','2021-10-26 06:27:53'),
(20,'projects/n7ATC56UgarDw2kZWOXKx5EgdHxdDRbWJ47Oo1xV.png',2,'App\\Models\\Project','projects','2021-10-26 06:27:53','2021-10-26 06:27:53'),
(21,'projects/7OGAD2qUDhHEu7ErQwc9GSwBnsa7cIRd1cbC6zyB.jpg',2,'App\\Models\\Project','projects','2021-10-26 06:27:53','2021-10-26 06:27:53'),
(22,'project_tasks/2iu4ODZS3LWDW7Lkfv1BnoC6Ow0nVJaMOTCk9xzf.jpg',1,'App\\Models\\ProjectTask','project_tasks','2021-10-26 06:33:35','2021-10-26 06:33:35'),
(23,'project_tasks/Zgm8HVW0UAMnTAbuSJ9hieU2j4QP3y3MSaGlr19L.png',1,'App\\Models\\ProjectTask','project_tasks','2021-10-26 06:33:35','2021-10-26 06:33:35'),
(24,'project_tasks/Y27Fap6QjaGUpGGROem0jRQoNrWXbzMTYphVOa7n.jpg',1,'App\\Models\\ProjectTask','project_tasks','2021-10-26 06:33:35','2021-10-26 06:33:35'),
(25,'project_tasks/JsttrKyRugZsdp3Eu4iWHxv0OQAVEHMzGbBuLoNM.jpg',1,'App\\Models\\ProjectTask','project_tasks','2021-10-26 06:36:34','2021-10-26 06:36:34'),
(26,'project_tasks/Dw2GLBHfN0RP628lqF3qbJ2GMZ16jRcoMAuCGdVA.jpg',1,'App\\Models\\ProjectTask','project_tasks','2021-10-26 06:38:17','2021-10-26 06:38:17'),
(27,'company/tshoYI1YHjjx1vO7No2VpNF86PHqAm5JmRtuyacR.png',15,'App\\Models\\Company','company','2021-10-28 13:20:51','2021-10-28 13:20:51'),
(30,'company/uXN3mKVtJfsBt5nI2AgKpJaSrNbCm4TBNWk2PsTi.png',16,'App\\Models\\Company','company','2021-10-28 14:24:09','2021-10-28 14:24:09'),
(33,'company/N3ndyRSgdaD3valCKKWec2tj7RUOuxPFZyJLKTfP.png',17,'App\\Models\\Company','company','2021-10-28 14:40:27','2021-10-28 14:40:27'),
(34,'brands/zqEVZsETf3bw4TAj4HQJi4O4Ap1WdG8A85eqyqmb.png',7,'App\\Models\\Brand','brands','2021-10-28 15:20:07','2021-10-28 15:20:07'),
(37,'brands/w4xyKePScKPYTzMOzy4VAVVC0ktkyQg3lU3Mr1Ho.png',8,'App\\Models\\Brand','brands','2021-10-28 15:24:50','2021-10-28 15:24:50'),
(42,'brands/qA6T8pISHLtqysAR8ZOZ19QwXQIB5vyWG3Ch3IUT.png',10,'App\\Models\\Brand','brands','2021-10-28 18:04:23','2021-10-28 18:04:23'),
(43,'brands/VQYtPW7qHC1jDPSCjrYqiveCfY8fnMfmUzhNP6dd.png',9,'App\\Models\\Brand','brands','2021-10-28 18:39:56','2021-10-28 18:39:56'),
(44,'users/iAoZZrp7m4ZqEMHRBckFBDJDiM56FiSuR8hnPYZu.png',17,'App\\Models\\User','users','2021-10-28 18:47:54','2021-10-28 18:47:54'),
(45,'users/Y6PuFjcyAKZCZpJckU1RdTY5nTPxzoLfo7qxvG4V.png',2,'App\\Models\\User','users','2021-10-28 18:50:41','2021-10-28 18:50:41'),
(46,'company/PQcC7jJkzT2KABn3Ax9uMlYAN0qQu3oN98ibnloc.jpg',18,'App\\Models\\Company','company','2021-10-28 23:32:30','2021-10-28 23:32:30'),
(47,'brands/gSQuGBw2kjLeXSJ3NhbM70FGoLtph1x4jqs1kugI.png',11,'App\\Models\\Brand','brands','2021-10-28 23:33:40','2021-10-28 23:33:40'),
(77,'chat/wBmww8wi3VqG1GLrHI8mewGWvgJpo0Q042AMnP5k.docx',22,'App\\Models\\Chat','chat','2021-10-30 00:21:15','2021-10-30 00:24:47'),
(85,'chat/Cn9jeQh2DsRiZQGgkUwZ2bYAMUaAoXLGBkf5Ac67.txt',0,'App\\Models\\Chat','chat','2021-10-30 00:26:36','2021-10-30 00:26:36'),
(86,'chat/tQGHS3SlialRCOICYv9KByiLGVoTgmLSkKytC11M.txt',0,'App\\Models\\Chat','chat','2021-10-30 00:27:22','2021-10-30 00:27:22'),
(87,'chat/wh1T9RED897JmANlfxdWqe2ODfVIl3Q5ojtrWHPo.docx',0,'App\\Models\\Chat','chat','2021-10-30 00:27:22','2021-10-30 00:27:22'),
(88,'chat/YZGanB7qzdRFv4UyeQQdfycVoZE4xQN8bFahx0LJ.txt',0,'App\\Models\\Chat','chat','2021-10-30 00:27:23','2021-10-30 00:27:23'),
(89,'chat/CCmffh7uQNpE3aH9SqQlsAqoO0UkzLLY4ar28y85.docx',0,'App\\Models\\Chat','chat','2021-10-30 00:27:23','2021-10-30 00:27:23'),
(90,'chat/4KCVwZPzQs0aM5QoUba7yvBV3R0IEl6K5u6lPXYu.docx',0,'App\\Models\\Chat','chat','2021-10-30 00:27:23','2021-10-30 00:27:23'),
(91,'chat/y0ILP0He515yzcoVUtGH8gH1v7eGVbKjNDrtxaJr.txt',0,'App\\Models\\Chat','chat','2021-10-30 00:27:24','2021-10-30 00:27:24'),
(92,'chat/ke79MjWyUu5w7cjIUEQTnhrOCXnK5cLxIkkZ5Zq9.txt',0,'App\\Models\\Chat','chat','2021-10-30 00:27:57','2021-10-30 00:27:57'),
(93,'chat/DcDoSkt5pT1a3hU1GR11Oe0HvQYgSrqZfZLITvvs.docx',0,'App\\Models\\Chat','chat','2021-10-30 00:27:57','2021-10-30 00:27:57'),
(94,'chat/SRp3cOeGpAxxv6h3KC3mXSfAGEnZFfusyeMDrL3A.txt',0,'App\\Models\\Chat','chat','2021-10-30 00:27:58','2021-10-30 00:27:58'),
(95,'chat/SYoOnLqeqO28AiH1nuXZ1QiBLr4LN2Pt4MaXVwZ9.docx',0,'App\\Models\\Chat','chat','2021-10-30 00:27:58','2021-10-30 00:27:58'),
(96,'chat/gkYwZzGWEMjizpH3yUwETzX6RQX1lj9xz2wei72b.docx',0,'App\\Models\\Chat','chat','2021-10-30 00:27:58','2021-10-30 00:27:58'),
(97,'chat/eb1hBhoYWq4mKgRgjBotG0qDaRRzNCttePzBVYQ2.txt',0,'App\\Models\\Chat','chat','2021-10-30 00:27:59','2021-10-30 00:27:59'),
(98,'chat/wMh2MSMqZx2C3cuAgPfz8tvvLdn7UVJefHqOmcNT.txt',0,'App\\Models\\Chat','chat','2021-10-30 00:28:05','2021-10-30 00:28:05'),
(99,'chat/RP4lBMWnfR1DV9VeLl5MihLxztWHqrY0NlUzm90h.docx',0,'App\\Models\\Chat','chat','2021-10-30 00:28:06','2021-10-30 00:28:06'),
(100,'chat/uKb29o9b32x9NvQCi5bR75rJGRdrZUMlexJdMxrm.txt',0,'App\\Models\\Chat','chat','2021-10-30 00:28:06','2021-10-30 00:28:06'),
(101,'chat/6b8YF5WQjAOZZvXR9xPO1447njwyCzGKZz5K9HfD.docx',0,'App\\Models\\Chat','chat','2021-10-30 00:28:06','2021-10-30 00:28:06'),
(102,'chat/TU22yQZpWXMHmCV1Xa3nNlT5qIge5r63EuXXN5K0.docx',0,'App\\Models\\Chat','chat','2021-10-30 00:28:07','2021-10-30 00:28:07'),
(103,'chat/ShWrXmETyl7OMfdWk4ifks6xI2rE4LqQ60Pr7I05.txt',0,'App\\Models\\Chat','chat','2021-10-30 00:28:07','2021-10-30 00:28:07'),
(104,'chat/KQuzRXNpCEjEFyOY5fJJFvVKXY1s6DfFrhsKfn5J.docx',0,'App\\Models\\Chat','chat','2021-10-30 00:37:38','2021-10-30 00:37:38'),
(105,'chat/1g2JF1Dze2wOes0sNCJ7HrNUiVfUjiWRa26fOWtp.docx',27,'App\\Models\\Chat','chat','2021-10-30 00:39:01','2021-10-30 00:39:02'),
(106,'chat/KtljGE1GFHo0XEVGuTBEYwEc07VHjK5F2kT8YR0r.docx',34,'App\\Models\\Chat','chat','2021-10-30 00:39:32','2021-10-30 00:39:34'),
(107,'chat/Vu6Rm8fmdnWjbZcXbyvx0Hzf8DgQE0ZInS4oNQmA.docx',0,'App\\Models\\Chat','chat','2021-10-30 00:42:42','2021-10-30 00:42:42'),
(108,'chat/wvYRbWyatI9qBiy5PxxjNvFbYwYaq7pc0WFueXsq.docx',39,'App\\Models\\Chat','chat','2021-10-30 00:42:48','2021-10-30 00:42:50'),
(109,'chat/ojkx5XCXwNrzt8KJTjvd3ouIVog6k5sXHuwB5N2s.docx',0,'App\\Models\\Chat','chat','2021-10-30 00:43:02','2021-10-30 00:43:02'),
(110,'chat/yGUuShYJ9oaJqYFDwanMTJrShuY6mcndhSqRamu2.docx',41,'App\\Models\\Chat','chat','2021-10-30 00:43:13','2021-10-30 00:43:16'),
(111,'chat/v4Wz3rqkpl57DIlIPsrGwesrYFelxEwNcywlwE3l.docx',41,'App\\Models\\Chat','chat','2021-10-30 00:43:13','2021-10-30 00:43:16'),
(112,'chat/VJxHEJbr8dnKUAGGgHeMrV97DtDtxMsiVE2gaRUg.docx',41,'App\\Models\\Chat','chat','2021-10-30 00:43:13','2021-10-30 00:43:16'),
(113,'chat/MtvRuCoHjYrWdyK9YZ0hVYnlnMsM10qd2Qou6Y3m.docx',44,'App\\Models\\Chat','chat','2021-10-30 00:43:56','2021-10-30 00:43:58'),
(114,'chat/0iAjDveRbUThFKgrghndFv2Txn1v1nlwbKyq6zox.docx',44,'App\\Models\\Chat','chat','2021-10-30 00:43:56','2021-10-30 00:43:58'),
(115,'chat/y5MuekR6cYCJpFIfZAg0KIVJeRxqnZ0uJ6oqvoEY.docx',44,'App\\Models\\Chat','chat','2021-10-30 00:43:57','2021-10-30 00:43:58'),
(116,'chat/rMUEvFhOh4cUoJstl78rqoRFoaxlh5fMcwD5jORT.docx',68,'App\\Models\\Chat','chat','2021-10-30 00:44:27','2021-10-30 00:44:28'),
(117,'chat/nzY793OcTGTanQZEpuwFNKECMUgkrtD8HKaaET5J.docx',68,'App\\Models\\Chat','chat','2021-10-30 00:44:27','2021-10-30 00:44:28'),
(118,'chat/Encw95yStxehBPppPcrktEb28SUPpGyvwoeE2LRv.docx',68,'App\\Models\\Chat','chat','2021-10-30 00:44:27','2021-10-30 00:44:28'),
(119,'chat/KbbaMZe078XCKoqk864iAUNzoqhFoI8GQduQShtV.docx',74,'App\\Models\\Chat','chat','2021-10-30 01:25:04','2021-10-30 01:25:05'),
(120,'projects/xfp2xyRnD32Jdc4GNl0tj5AgS1apthvtlEZ5toee.png',13,'App\\Models\\Project','projects','2021-11-03 06:28:49','2021-11-03 06:28:49'),
(121,'projects/Gj8xCJU5BCEY15CmXiDMKAKre3PE98Ns6VXAmMaZ.png',13,'App\\Models\\Project','projects','2021-11-03 06:28:49','2021-11-03 06:28:49'),
(122,'projects/pLkqiN242ICNS00UvLLdBJbCYhORp3cmyhYed2kk.png',13,'App\\Models\\Project','projects','2021-11-03 06:28:49','2021-11-03 06:28:49'),
(123,'projects/KoOwu2yrpx07plF7xJWaYmZf7ttWuGzpxui2u9Ry.png',13,'App\\Models\\Project','projects','2021-11-03 06:28:49','2021-11-03 06:28:49'),
(124,'chat/qv1KHxg6Jd6xvQKvJM0R8Uvoj93czX3AQ8XuLiw8.docx',82,'App\\Models\\Chat','chat','2021-11-03 06:30:16','2021-11-03 06:30:20'),
(125,'chat/aiG2Af91mpnE8kn1co2vunH7z9DFUDgutFGhA16C.jpg',82,'App\\Models\\Chat','chat','2021-11-03 06:30:17','2021-11-03 06:30:20'),
(126,'project_tasks/ehdmgCBo5hpbN3J6nzrUMLaR9RHxuAdo2K3uG12q.png',7,'App\\Models\\ProjectTask','project_tasks','2021-11-03 06:35:54','2021-11-03 06:35:54'),
(127,'project_tasks/7cCbXnCcwwEI0C09NWuCiIUIV0PyNAM4MsvTsx2P.jpg',7,'App\\Models\\ProjectTask','project_tasks','2021-11-03 06:35:54','2021-11-03 06:35:54'),
(128,'project_tasks/zDuA4J1QAbBAYkw1tfDGclVQT1FShdWkYcj25yWu.png',7,'App\\Models\\ProjectTask','project_tasks','2021-11-03 06:35:54','2021-11-03 06:35:54'),
(129,'project_tasks/Li1oN21PPSfumguwi7Aeu0pXyfR7ELW3CBOFHi0S.jpg',7,'App\\Models\\ProjectTask','project_tasks','2021-11-03 06:35:54','2021-11-03 06:35:54'),
(130,'project_tasks/LUOpXJjums1SnnNoBfUxK88X2HycQ2umR8rbTNCK.jpg',7,'App\\Models\\ProjectTask','project_tasks','2021-11-03 06:35:54','2021-11-03 06:35:54'),
(131,'project_tasks/MTmllH9iwtKLzMz308Df7XRHqP29Dq5cHi5inLoH.png',7,'App\\Models\\ProjectTask','project_tasks','2021-11-03 06:35:54','2021-11-03 06:35:54'),
(132,'task_comments/4KKX79x9scVJgDfQqs6g8EXgyqIfwhygIivcMD12.png',9,'App\\Models\\TaskComment','task_comments','2021-11-05 00:34:12','2021-11-05 00:34:12'),
(133,'task_comments/IRnNfeaafDRLeawM6EE52mPILpnRsMemKc06aSj4.png',9,'App\\Models\\TaskComment','task_comments','2021-11-05 00:34:12','2021-11-05 00:34:12'),
(134,'task_comments/cunsaOyUVM7OF69kMbPyijubbW1vW8WDyvTyQ7ns.jpg',10,'App\\Models\\TaskComment','task_comments','2021-11-05 00:36:15','2021-11-05 00:36:15'),
(135,'task_comments/8aOlvAYRWXYZ51date2FXQ1k7I8i4nvU4dNKk6cj.png',10,'App\\Models\\TaskComment','task_comments','2021-11-05 00:36:15','2021-11-05 00:36:15'),
(136,'task_comments/BJjdfbSPYoGnBuEk1TITopPl7t6eCXuZW5CLNc0s.png',10,'App\\Models\\TaskComment','task_comments','2021-11-05 00:36:15','2021-11-05 00:36:15'),
(137,'task_comments/BrTXlaPhqsKb43iVKeMgF6spLPC0y7zxtETI6LjD.png',10,'App\\Models\\TaskComment','task_comments','2021-11-05 00:36:15','2021-11-05 00:36:15'),
(138,'task_comments/TzC3aFTqrHbb4ByGOmOMTdr4WNpyKgPRoqmW5sns.jpg',10,'App\\Models\\TaskComment','task_comments','2021-11-05 00:36:15','2021-11-05 00:36:15'),
(139,'task_comments/qHsYrYalqMTH4WpAdyeuZzKakXJIMD0vSLTsAXgU.jpg',10,'App\\Models\\TaskComment','task_comments','2021-11-05 00:36:15','2021-11-05 00:36:15'),
(140,'task_comments/ADOuqPmJoOGJCS994Lo9uvGty9EMP2Uec7T6UpZk.png',10,'App\\Models\\TaskComment','task_comments','2021-11-05 00:36:15','2021-11-05 00:36:15'),
(141,'users/YwfmaHHdceImwlK9VjLEp53G6yBCcLJRi5QHiVTp.png',25,'App\\Models\\User','users','2021-11-05 00:39:57','2021-11-05 00:39:57'),
(142,'brands/xhDlbtNhSKGo9gpVGxjRcPaVNCXE8LixE7R7mxu5.png',12,'App\\Models\\Brand','brands','2021-11-05 01:36:00','2021-11-05 01:36:00'),
(143,'brands/dP3HQkEhEUtdPUkTdrRwOviW5SGCFDGjFGkdOVmI.png',13,'App\\Models\\Brand','brands','2021-11-05 01:43:09','2021-11-05 01:43:09'),
(144,'company/MHdHap52zSbCjrFzRyv8mKRHZlBGHYQZVlYdOwHh.jpg',19,'App\\Models\\Company','company','2021-11-16 15:13:42','2021-11-16 15:13:42'),
(145,'brands/guyNquII2ifieU3yw8RUJtTpA064dOJSN2JvYzgz.jpg',14,'App\\Models\\Brand','brands','2021-11-16 15:15:50','2021-11-16 15:15:50'),
(146,'task_comments/MGpBv2WOOC5pN1IpYnJs7xMItUerTsADEdxhXfMs.png',12,'App\\Models\\TaskComment','task_comments','2021-11-16 19:37:40','2021-11-16 19:37:40'),
(147,'task_comments/WK50X6LhpBVFe7JkJo9fnYrkweEDilTdhsNzjfhh.png',12,'App\\Models\\TaskComment','task_comments','2021-11-16 19:37:40','2021-11-16 19:37:40'),
(148,'chat/W5fmv6WZtIyGIxFI1kLFqeWkgl3zCyLSCoptznPd.docx',0,'App\\Models\\Chat','chat','2021-11-17 00:39:16','2021-11-17 00:39:16'),
(149,'chat/JeJ9UgcMocFP70xiytrBa775b5kmjlUbrWnNX9oF.docx',43,'App\\Models\\Chat','chat','2021-11-17 00:52:22','2021-11-17 00:52:24'),
(150,'task_comments/nhzQxFLcTU6dDjNRFeKCk5OQL407zUwhtjozZtdg.png',14,'App\\Models\\TaskComment','task_comments','2021-11-17 05:30:48','2021-11-17 05:30:48'),
(151,'chat/x4qVwcRqXDqQKaOiCjYxwKCyyKwhgdctGRrebyHB.html',89,'App\\Models\\Chat','chat','2021-11-25 04:55:23','2021-11-25 04:55:31'),
(152,'chat/CNWbcouu6YalMGo2VgQLFLJXxQt6gWWvRiDh6Jt6.jpg',89,'App\\Models\\Chat','chat','2021-11-25 04:55:29','2021-11-25 04:55:31'),
(153,'chat/FVZhWCFGgBIXcgEnVE1cm4BlzxLAXbP93E0ZBhBt.jpg',0,'App\\Models\\Chat','chat','2021-11-25 04:55:56','2021-11-25 04:55:56'),
(154,'chat/K5Z3VmvS1lGvatcy4OygUmGvymqOgDHcQMVdwiSW.html',0,'App\\Models\\Chat','chat','2021-11-25 04:55:56','2021-11-25 04:55:56'),
(155,'chat/73nse5uY1iGCrExXJC7nvSvDqevNgGSIGirpJZNP.jpg',0,'App\\Models\\Chat','chat','2021-11-25 04:56:32','2021-11-25 04:56:32'),
(156,'chat/2kU80Wi5prgqUBwJFZiWoiHfgioavQ40TCn3oRJW.html',0,'App\\Models\\Chat','chat','2021-11-25 04:56:32','2021-11-25 04:56:32'),
(157,'chat/AOoYEfhTMkXUbqy4gY3wUz2SGo0Ncs4kZ01FKPHv.jpg',75,'App\\Models\\Chat','chat','2021-11-25 04:56:39','2021-11-25 04:56:42'),
(158,'chat/aKEWavZtCHI0i7ITSm0qbY9EiLROBzOLi7lwvNkg.html',75,'App\\Models\\Chat','chat','2021-11-25 04:56:39','2021-11-25 04:56:42'),
(159,'task_comments/ikPLFhZjfIAocdfj2bPqDzcQnjK5AxY091SqUC2o.png',15,'App\\Models\\TaskComment','task_comments','2021-11-25 04:57:53','2021-11-25 04:57:53'),
(160,'task_comments/rJo1PaezQ3FGet4wGBe0awUtyQYj3VJmjUC8WCmB.png',15,'App\\Models\\TaskComment','task_comments','2021-11-25 04:57:53','2021-11-25 04:57:53'),
(161,'chat/7P3hoSkvlKTHSuY7oQ18CE4F9qSPK7oB7xh54DkF.html',78,'App\\Models\\Chat','chat','2021-11-25 23:57:38','2021-11-25 23:57:45'),
(162,'chat/84Mvn7CyFT08ArsiRSQ0S1woao5Q3ryfFAhkz9DB.jpg',78,'App\\Models\\Chat','chat','2021-11-25 23:57:38','2021-11-25 23:57:45'),
(163,'chat/Uk3Twz481xdQm9hg0aciG2VfcCBUWK74lkJJ32Jj.jpg',78,'App\\Models\\Chat','chat','2021-11-25 23:57:43','2021-11-25 23:57:45'),
(164,'chat/z0Dp8biZK0DnjPGzti0hXecHikfrfVCwr6fuT5IP.html',78,'App\\Models\\Chat','chat','2021-11-25 23:57:43','2021-11-25 23:57:45'),
(165,'projects/xiAmMYKUUbYvxh0OO3Ns6SK1mokrEkoKF5JhKsvX.png',23,'App\\Models\\Project','projects','2021-11-26 00:00:00','2021-11-26 00:00:00'),
(166,'projects/beiEhbsyf2dxNQc2wh9rloO9uSr3hwEBtoyUysF2.png',23,'App\\Models\\Project','projects','2021-11-26 00:00:00','2021-11-26 00:00:00'),
(167,'task_comments/dZB9FEBBsD9uZwGoCyST2g359eautsgK5OiTZKjz.png',16,'App\\Models\\TaskComment','task_comments','2021-11-26 00:05:05','2021-11-26 00:05:05'),
(168,'task_comments/tcWx2NRQscT7xv55AiQj5WyYxpPlNufg2kihtCQf.jpg',17,'App\\Models\\TaskComment','task_comments','2021-11-26 00:05:24','2021-11-26 00:05:24'),
(169,'projects/tjUvPkPWiHLadGM0gCtCGfYlpeHj5DppBjyplnQx.png',24,'App\\Models\\Project','projects','2021-11-26 03:17:58','2021-11-26 03:17:58'),
(170,'projects/qcO6A6YqcY7NZeSChamW2JRcnq4ATxl92lDTp3YZ.png',24,'App\\Models\\Project','projects','2021-11-26 03:17:58','2021-11-26 03:17:58'),
(171,'task_comments/QrHhICrMBxAO0T08Sq8IeqsEXpqeAB4w1G7IBBml.png',18,'App\\Models\\TaskComment','task_comments','2021-11-26 04:34:15','2021-11-26 04:34:15'),
(172,'task_comments/5ExnPoXuJd3GCtgADPPqVDHxyz7DfJ2y6tlKAttj.png',18,'App\\Models\\TaskComment','task_comments','2021-11-26 04:34:15','2021-11-26 04:34:15'),
(173,'chat/9AV5so5rCGSOwJEGkdIerHkiZE29udaGtfUlds9J.jpg',85,'App\\Models\\Chat','chat','2021-11-26 04:43:16','2021-11-26 04:43:19'),
(174,'chat/QCcxQSLbwFgd2mGUaYB1UGxk2J3gp58RVy30AdbF.html',85,'App\\Models\\Chat','chat','2021-11-26 04:43:16','2021-11-26 04:43:19'),
(175,'chat/fhzbaFEcYud3wnTVQbfN6kiKg9q2HsBLQflqK7Pd.docx',100,'App\\Models\\Chat','chat','2021-11-29 22:32:57','2021-11-29 22:32:58'),
(176,'brands/QJk1TrxihFAyJa7lyUeDSfNZFl222VM1phNEGM05.png',15,'App\\Models\\Brand','brands','2021-12-01 00:45:22','2021-12-01 00:45:22'),
(177,'chat/1qftQOCha4JHx2JhJnz7BSrqKwA97SnN9KS7CHnG.png',102,'App\\Models\\Chat','chat','2021-12-03 06:25:59','2021-12-03 06:26:01');

/*Table structure for table `lead_assigned` */

DROP TABLE IF EXISTS `lead_assigned`;

CREATE TABLE `lead_assigned` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `lead_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `is_active` tinyint(4) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4;

/*Data for the table `lead_assigned` */

insert  into `lead_assigned`(`id`,`user_id`,`lead_id`,`created_at`,`is_active`) values 
(10,35,32,'2021-12-01 00:20:10',1),
(12,33,32,'2021-12-01 00:20:18',1),
(13,34,32,'2021-12-01 00:20:35',1),
(18,34,33,'2021-12-01 00:30:50',1),
(20,33,33,'2021-12-01 00:30:54',1),
(22,35,31,'2021-12-03 05:35:20',1),
(23,35,34,'2021-12-24 04:44:24',1),
(24,34,34,'2021-12-24 04:44:28',1),
(25,35,35,'2022-01-20 04:38:48',1),
(26,34,35,'2022-01-20 04:38:56',1),
(27,34,39,'2022-01-22 06:26:34',1),
(28,34,43,'2022-02-25 02:36:06',1),
(29,33,43,'2022-02-25 02:41:33',1);

/*Table structure for table `lead_messages` */

DROP TABLE IF EXISTS `lead_messages`;

CREATE TABLE `lead_messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lead_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `is_seen` tinyint(4) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8mb4;

/*Data for the table `lead_messages` */

insert  into `lead_messages`(`id`,`lead_id`,`user_id`,`message`,`is_seen`,`created_at`,`updated_at`) values 
(1,26,33,'<div>123123123123</div>',1,'2021-11-17 00:36:24','2021-11-17 02:11:47'),
(2,26,33,'12312312313',1,'2021-11-17 00:36:59','2021-11-17 02:11:47'),
(3,26,33,'123123',1,'2021-11-17 00:37:57','2021-11-17 02:11:47'),
(4,26,33,'123123ads asd asd',1,'2021-11-17 00:38:14','2021-11-17 02:11:47'),
(5,26,33,'123123',1,'2021-11-17 00:39:47','2021-11-17 02:11:47'),
(6,26,33,'123123',1,'2021-11-17 00:40:11','2021-11-17 02:11:47'),
(7,26,33,'asdasdasd',1,'2021-11-17 00:40:13','2021-11-17 02:11:47'),
(8,26,33,'123123',1,'2021-11-17 00:40:28','2021-11-17 02:11:47'),
(9,26,33,'asdasd',1,'2021-11-17 00:41:02','2021-11-17 02:11:46'),
(10,26,33,'123123',1,'2021-11-17 00:42:27','2021-11-17 02:11:46'),
(11,26,33,'12312',1,'2021-11-17 00:44:04','2021-11-17 02:11:46'),
(12,26,33,'123123',1,'2021-11-17 00:44:05','2021-11-17 02:11:46'),
(13,26,33,'123123',1,'2021-11-17 00:44:06','2021-11-17 02:11:46'),
(14,26,33,'12312',1,'2021-11-17 00:44:07','2021-11-17 02:11:46'),
(15,26,33,'3123',1,'2021-11-17 00:44:07','2021-11-17 02:11:46'),
(16,26,33,'123123',1,'2021-11-17 00:44:08','2021-11-17 02:11:46'),
(17,26,33,'123',1,'2021-11-17 00:44:08','2021-11-17 02:11:46'),
(18,26,33,'123123',1,'2021-11-17 00:44:08','2021-11-17 02:11:46'),
(19,26,33,'123',1,'2021-11-17 00:44:09','2021-11-17 02:11:32'),
(20,26,33,'12312',1,'2021-11-17 00:44:09','2021-11-17 02:11:32'),
(21,26,33,'3123',1,'2021-11-17 00:44:09','2021-11-17 02:11:32'),
(22,26,33,'123asd',1,'2021-11-17 00:44:28','2021-11-17 02:11:32'),
(23,26,33,'asd',1,'2021-11-17 00:44:28','2021-11-17 02:11:32'),
(24,26,33,'as',1,'2021-11-17 00:44:28','2021-11-17 02:11:32'),
(25,26,33,'ss',1,'2021-11-17 00:44:28','2021-11-17 02:11:32'),
(26,26,33,'s',1,'2021-11-17 00:44:29','2021-11-17 02:11:32'),
(27,26,33,'sss',1,'2021-11-17 00:44:29','2021-11-17 02:11:32'),
(28,26,33,'s',1,'2021-11-17 00:44:31','2021-11-17 02:11:32'),
(29,26,33,'s',1,'2021-11-17 00:44:31','2021-11-17 02:11:31'),
(30,26,33,'s',1,'2021-11-17 00:44:31','2021-11-17 02:10:19'),
(31,26,33,'s',1,'2021-11-17 00:44:31','2021-11-17 02:10:19'),
(32,26,33,'s',1,'2021-11-17 00:44:32','2021-11-17 02:10:19'),
(33,26,33,'s',1,'2021-11-17 00:44:32','2021-11-17 02:10:19'),
(34,26,33,'s',1,'2021-11-17 00:44:32','2021-11-17 02:10:19'),
(35,26,33,'s',1,'2021-11-17 00:44:32','2021-11-17 02:10:19'),
(36,26,33,'s',1,'2021-11-17 00:44:32','2021-11-17 02:10:19'),
(37,26,33,'s',1,'2021-11-17 00:44:33','2021-11-17 02:10:19'),
(38,26,33,'ss',1,'2021-11-17 00:44:33','2021-11-17 02:10:19'),
(39,26,33,'s',1,'2021-11-17 00:44:33','2021-11-17 02:10:19'),
(40,27,33,'123',1,'2021-11-17 00:52:13','2021-11-17 01:53:09'),
(41,27,38,'123',1,'2021-11-17 00:52:15','2021-12-03 04:58:58'),
(42,27,33,'123123asdasd',1,'2021-11-17 00:52:17','2021-11-17 01:53:09'),
(43,27,38,'user here',1,'2021-11-17 00:52:24','2021-12-03 04:58:58'),
(44,27,33,'hello',1,'2021-11-17 00:52:27','2021-11-17 01:53:09'),
(45,27,38,'123123',1,'2021-11-17 01:12:39','2021-12-03 04:58:58'),
(46,27,38,'asdasd',1,'2021-11-17 01:12:40','2021-12-03 04:58:58'),
(47,26,36,'123',1,'2021-11-17 02:10:22','2021-11-17 02:12:08'),
(48,26,36,'1231',1,'2021-11-17 02:10:42','2021-11-17 02:12:08'),
(49,26,36,'123',1,'2021-11-17 02:10:42','2021-11-17 02:12:08'),
(50,26,36,'123',1,'2021-11-17 02:10:43','2021-11-17 02:12:08'),
(51,26,36,'123',1,'2021-11-17 02:10:43','2021-11-17 02:12:08'),
(52,26,36,'123',1,'2021-11-17 02:10:43','2021-11-17 02:12:08'),
(53,26,36,'123',1,'2021-11-17 02:10:43','2021-11-17 02:12:08'),
(54,26,36,'123123',1,'2021-11-17 02:10:44','2021-11-17 02:12:08'),
(55,26,36,'123',1,'2021-11-17 02:10:44','2021-11-17 02:12:08'),
(56,26,36,'123123',1,'2021-11-17 02:16:46','2021-11-17 02:16:58'),
(57,26,36,'123',1,'2021-11-17 02:16:46','2021-11-17 02:16:59'),
(58,26,36,'123',1,'2021-11-17 02:16:47','2021-11-17 02:16:59'),
(59,26,36,'123',1,'2021-11-17 02:16:47','2021-11-17 02:16:59'),
(60,26,36,'123',1,'2021-11-17 02:16:47','2021-11-17 02:16:59'),
(61,26,36,'123',1,'2021-11-17 02:16:47','2021-11-17 02:16:59'),
(62,26,36,'123',1,'2021-11-17 02:17:19','2021-11-17 02:17:51'),
(63,26,36,'123',1,'2021-11-17 02:17:19','2021-11-17 02:17:51'),
(64,26,36,'123asd',1,'2021-11-17 02:17:20','2021-11-17 02:17:51'),
(65,26,36,'asd',1,'2021-11-17 02:17:20','2021-11-17 02:17:51'),
(66,26,36,'asd',1,'2021-11-17 02:17:21','2021-11-17 02:17:51'),
(67,26,36,'123',1,'2021-11-17 02:18:33','2021-11-17 05:04:03'),
(68,26,36,'123',1,'2021-11-17 02:18:33','2021-11-17 05:04:03'),
(69,26,36,'asd',1,'2021-11-17 02:18:33','2021-11-17 05:04:03'),
(70,26,36,'asd',1,'2021-11-17 02:18:34','2021-11-17 05:04:03'),
(71,26,33,'test',1,'2021-11-17 05:04:05','2021-11-17 05:05:04'),
(72,26,33,'helllooo??',1,'2021-11-17 05:04:29','2021-11-17 05:05:04'),
(73,26,36,'yes sir',1,'2021-11-17 05:05:07','2021-11-25 04:56:18'),
(74,26,32,'123123',0,'2021-11-25 04:56:21','2021-11-25 04:56:21'),
(75,26,32,'123',0,'2021-11-25 04:56:42','2021-11-25 04:56:42'),
(76,29,40,'123123',1,'2021-11-25 23:57:13','2021-11-26 04:25:55'),
(77,29,34,'asdasd',1,'2021-11-25 23:57:27','2021-11-25 23:58:26'),
(78,29,40,'123123',1,'2021-11-25 23:57:45','2021-11-26 04:25:55'),
(79,29,34,'123123',1,'2021-11-25 23:58:13','2021-11-25 23:58:26'),
(80,29,40,'asdasd',1,'2021-11-25 23:58:28','2021-11-26 04:25:55'),
(81,31,32,'123123',1,'2021-11-26 04:17:35','2021-11-26 04:17:47'),
(82,31,32,'asdasd',1,'2021-11-26 04:17:36','2021-11-26 04:17:47'),
(83,31,32,'123123',1,'2021-11-26 04:17:43','2021-11-26 04:17:47'),
(84,31,42,'123213',1,'2021-11-26 04:26:30','2021-12-03 06:26:51'),
(85,31,42,'test',1,'2021-11-26 04:43:19','2021-12-03 06:26:51'),
(86,31,42,'bhosrike',1,'2021-12-03 06:26:42','2021-12-03 06:26:51'),
(87,31,35,'123123',1,'2021-12-03 06:27:37','2021-12-03 06:27:47'),
(88,31,42,'123123',0,'2021-12-03 06:27:51','2021-12-03 06:27:51'),
(89,32,45,'test',1,'2021-12-22 01:43:09','2021-12-22 01:43:17'),
(90,32,33,'hey',1,'2021-12-22 01:43:19','2021-12-22 01:43:29'),
(91,32,45,'tt',1,'2021-12-22 01:43:43','2021-12-22 01:43:49'),
(92,32,45,'tt',1,'2021-12-22 01:43:43','2021-12-22 01:43:49'),
(93,32,45,'ttasdasd',1,'2021-12-22 01:43:44','2021-12-22 01:43:49'),
(94,32,45,'asdasd',1,'2021-12-22 01:43:45','2021-12-22 01:43:49'),
(95,32,33,'test',1,'2021-12-22 01:43:51','2021-12-22 01:44:00'),
(96,32,33,'123',1,'2021-12-22 01:44:03','2021-12-22 01:44:06'),
(97,32,45,'test',1,'2021-12-22 01:44:08','2021-12-22 01:44:12'),
(98,32,45,'123123',1,'2021-12-22 01:44:09','2021-12-22 01:44:12'),
(99,32,45,'asdasd',1,'2021-12-22 01:44:10','2021-12-22 01:44:12'),
(100,32,45,'12',1,'2021-12-22 01:44:12','2021-12-22 01:45:05'),
(101,32,45,'123',1,'2021-12-22 01:44:21','2021-12-22 01:45:05'),
(102,32,45,'12',1,'2021-12-22 01:44:31','2021-12-22 01:45:05'),
(103,32,45,'s',1,'2021-12-22 01:44:39','2021-12-22 01:45:05'),
(104,32,45,'s',1,'2021-12-22 01:44:40','2021-12-22 01:45:05'),
(105,32,45,'a',1,'2021-12-22 01:44:41','2021-12-22 01:45:05'),
(106,32,45,'a',1,'2021-12-22 01:44:41','2021-12-22 01:45:05'),
(107,32,45,'a',1,'2021-12-22 01:44:41','2021-12-22 01:45:05'),
(108,32,45,'s',1,'2021-12-22 01:44:51','2021-12-22 01:45:05'),
(109,32,33,'kiya hao',1,'2021-12-22 01:45:08','2021-12-22 01:45:30'),
(110,34,32,'123',1,'2022-02-01 21:56:51','2022-03-15 02:53:39');

/*Table structure for table `lead_types` */

DROP TABLE IF EXISTS `lead_types`;

CREATE TABLE `lead_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `company_id` int(11) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

/*Data for the table `lead_types` */

insert  into `lead_types`(`id`,`type`,`company_id`,`updated_at`,`created_at`) values 
(3,'Web',19,'2022-01-22 06:00:58','2022-01-22 06:00:58'),
(4,'Web',19,'2022-01-22 06:00:59','2022-01-22 06:00:59'),
(5,'Web',19,'2022-01-22 06:01:00','2022-01-22 06:01:00'),
(9,'Logo',19,'2022-01-22 06:07:21','2022-01-22 06:07:21'),
(10,'test',19,'2022-02-01 16:44:23','2022-02-01 16:44:23');

/*Table structure for table `leads` */

DROP TABLE IF EXISTS `leads`;

CREATE TABLE `leads` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `brand_id` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `lead_status` tinyint(4) DEFAULT 0 COMMENT '0=pending,1=success,2=junk,3=followup',
  `custom_fields` text DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) DEFAULT 0,
  `marketing_user_id` int(11) DEFAULT NULL,
  `lead_type` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4;

/*Data for the table `leads` */

insert  into `leads`(`id`,`brand_id`,`first_name`,`last_name`,`company`,`email`,`phone`,`message`,`lead_status`,`custom_fields`,`updated_at`,`created_at`,`user_id`,`marketing_user_id`,`lead_type`) values 
(1,6,'12345678',NULL,NULL,'company1@gmail.com','test','test',3,'','2022-01-22 04:17:43','2022-01-21 23:38:10',NULL,NULL,0),
(2,6,'12345678',NULL,NULL,'company1@gmail.com','test','test',3,'','2022-01-22 04:17:43','2022-01-21 23:38:10',NULL,NULL,0),
(3,6,'12345678',NULL,NULL,'company1@gmail.com','test','test',3,'{\"test\":\"123\",\"test2\":\"asdasd\"}','2022-01-22 04:17:43','2022-01-21 23:38:10',NULL,NULL,0),
(4,6,'12345678',NULL,NULL,'company1@gmail.com','test','test',3,'{\"test\":\"123\",\"test2\":\"asdasd\"}','2022-01-22 04:17:43','2022-01-21 23:38:10',NULL,NULL,0),
(5,6,'12345678',NULL,NULL,'company1@gmail.com','test','test',3,'{\"test\":\"123\",\"test2\":\"asdasd\"}','2022-01-22 04:17:43','2022-01-21 23:38:10',NULL,NULL,0),
(6,6,'12345678',NULL,NULL,'company1@gmail.com','test','test',3,'{\"test\":\"123\",\"test2\":\"asdasd\"}','2022-01-22 04:17:43','2022-01-21 23:38:10',NULL,NULL,0),
(7,6,'12345678',NULL,NULL,'company1@gmail.com','test','test',3,'{\"test\":\"123\",\"test2\":\"asdasd\"}','2022-01-22 04:17:43','2022-01-21 23:38:10',NULL,NULL,0),
(8,6,'12345678',NULL,NULL,'company1@gmail.com','test','test',3,'{\"test\":\"123\",\"test2\":\"asdasd\"}','2022-01-22 04:17:43','2022-01-21 23:38:10',NULL,NULL,0),
(9,6,'12345678',NULL,NULL,'company1@gmail.com','test','test',3,'{\"test\":\"123\",\"test2\":\"asdasd\"}','2022-01-22 04:17:43','2022-01-21 23:38:10',NULL,NULL,0),
(10,6,'12345678',NULL,NULL,'company1@gmail.com','test','test',3,'{\"test\":\"123\",\"test2\":\"asdasd\"}','2022-01-22 04:17:43','2022-01-21 23:38:10',NULL,NULL,0),
(11,6,'12345678',NULL,NULL,'company1@gmail.com','test','test',2,'{\"test\":\"123\",\"test2\":\"asdasd\"}','2022-01-22 04:17:43','2022-01-21 23:38:10',NULL,NULL,0),
(12,6,'12345678',NULL,NULL,'company1@gmail.com','test','test',3,'{\"test\":\"123\",\"test2\":\"asdasd\"}','2022-01-22 04:17:43','2022-01-21 23:38:10',NULL,NULL,0),
(13,6,'12345678',NULL,NULL,'company1@gmail.com','test','test',1,'{\"test\":\"123\",\"test2\":\"asdasd\"}','2022-01-22 04:17:43','2022-01-21 23:38:10',NULL,NULL,0),
(14,6,'12345678',NULL,NULL,'company1@gmail.com','test','test',3,'{\"test\":\"123\",\"test2\":\"asdasd\"}','2022-01-22 04:17:43','2022-01-21 23:38:10',NULL,NULL,0),
(15,6,'12345678',NULL,NULL,'company2@gmail.com','test','test',1,'{\"test\":\"123\",\"test2\":\"asdasd\"}','2022-01-22 04:17:43','2022-01-21 23:38:10',NULL,NULL,0),
(16,6,'12345678',NULL,NULL,'lead2@gmail.com','test','test',3,'{\"test\":\"123\",\"test2\":\"asdasd\"}','2022-01-22 04:17:43','2022-01-21 23:38:10',NULL,NULL,0),
(17,6,'12345678',NULL,NULL,'company2@gmail.com','test','test',3,'{\"test\":\"123\",\"test2\":\"asdasd\"}','2022-01-22 04:17:43','2022-01-21 23:38:10',NULL,NULL,0),
(18,6,'12345678',NULL,NULL,'company2@gmail.com','test','test',3,'{\"test\":\"123\",\"test2\":\"asdasd\"}','2022-01-22 04:17:43','2022-01-21 23:38:10',NULL,NULL,0),
(19,6,'12345678',NULL,NULL,'company2@gmail.com','test','test',2,'{\"test\":\"123\",\"test2\":\"asdasd\"}','2022-01-22 04:17:43','2022-01-21 23:38:10',NULL,NULL,0),
(20,6,'12345678',NULL,NULL,'company2@gmail.com','test','test',2,'{\"test\":\"123\",\"test2\":\"asdasd\"}','2022-01-22 04:17:43','2022-01-21 23:38:10',NULL,NULL,0),
(21,6,'12345678',NULL,NULL,'company2@gmail.com','test','test',3,'{\"test\":\"123\",\"test2\":\"asdasd\"}','2022-01-22 04:17:43','2022-01-21 23:38:10',NULL,NULL,0),
(22,6,'12345678',NULL,NULL,'company2@gmail.com','test','test',1,'{\"test\":\"123\",\"test2\":\"asdasd\"}','2022-01-22 04:17:43','2022-01-21 23:38:10',NULL,NULL,0),
(23,4,'12313',NULL,NULL,'lead4@gmail.com','123123','123123',3,NULL,'2022-01-22 04:17:43','2022-01-21 23:38:10',49,NULL,0),
(24,4,'junaid','yrux',NULL,'jesper@gmail.com','123123','123123',3,NULL,'2022-01-22 04:17:43','2022-01-21 23:38:10',30,NULL,0),
(25,9,'lead','llead','Lead Company','lead1@gmail.com','+123123123','Test',3,NULL,'2022-01-22 04:17:43','2022-01-21 23:38:10',31,NULL,0),
(26,14,'N','C','NC','nclead@gmail.com','+12123123123','this is the lead for new brand',1,NULL,'2022-01-22 04:17:43','2022-01-21 23:38:10',39,NULL,0),
(27,14,'test','test','123123','nhlead3@gmail.com','+123123123','123123',3,NULL,'2022-01-22 04:17:43','2022-01-21 23:38:10',38,NULL,0),
(28,14,'jsn','jsnl',NULL,'jsn3@gmail.com','+123123123','123123',3,NULL,'2022-01-22 04:17:43','2022-01-21 23:38:10',0,NULL,0),
(29,14,'Jhon','Doe','JhonMaverick','nhnnlead@gmail.com','1231231231','test',3,NULL,'2022-01-22 04:17:43','2022-01-21 23:38:10',41,NULL,0),
(30,14,'customer','lastname','Jhondoe','customernew1@gmail.com','123123','123',3,NULL,'2022-01-22 04:17:43','2022-01-21 23:38:10',50,NULL,0),
(31,14,'lead new','new','new','newlead32@gmail.com','123123','123',3,NULL,'2022-01-22 04:17:43','2022-01-21 23:38:10',42,NULL,0),
(32,14,'test','123','12','asdasd21@gmail.com','1212','123',1,NULL,'2022-01-22 04:17:43','2022-01-21 23:38:10',45,NULL,0),
(33,14,'123','123','123','newlead124@gmail.com','123','123',3,NULL,'2022-01-22 04:17:43','2022-01-21 23:38:10',0,NULL,0),
(34,15,'tt','tt','tt','ttlead13@gmail.com','tt','tt',3,NULL,'2022-01-22 04:17:43','2022-01-21 23:38:10',47,NULL,0),
(35,4,'123','123','123','123123t@gmail.com','0123123','123132',3,NULL,'2022-01-22 04:17:43','2022-01-21 23:38:10',51,NULL,0),
(36,4,'123','4','564','123ads123@gmail.com','564','123',0,NULL,'2022-01-22 04:17:43','2022-01-21 23:38:10',0,48,0),
(37,14,'123','123','123','leadtss@gmail.com','123','123',0,NULL,'2022-01-22 04:17:43','2022-01-21 23:38:10',0,48,0),
(38,14,'123123','123','123','asdkbnkjh@gmail.com','123','123',0,NULL,'2022-01-22 04:17:43','2022-01-21 23:38:10',0,48,0),
(39,14,'123','123','123','123asd23@gmail.com','123','123',0,NULL,'2022-01-22 06:26:25','2022-01-21 23:38:10',0,48,9),
(40,15,'123','123','123','123123@yahoo.com','0123123','123',0,NULL,'2022-01-22 06:22:46','2022-01-22 06:22:46',0,32,0),
(41,15,'123','123','123','123123@yahoo.com','0123123','123',0,NULL,'2022-01-22 06:25:09','2022-01-22 06:23:57',0,32,5),
(42,14,'123','123','123','123123@gmail.com','0123123','123123',0,NULL,'2022-02-25 02:33:19','2022-02-25 02:33:19',0,34,9),
(43,14,'123123','123123','1231','asdad1231@gmail.com','123','123123',3,NULL,'2022-02-25 02:36:26','2022-02-25 02:36:06',0,34,9);

/*Table structure for table `logs` */

DROP TABLE IF EXISTS `logs`;

CREATE TABLE `logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `log` text DEFAULT NULL,
  `logable_id` int(11) DEFAULT NULL,
  `logable_type` varchar(255) DEFAULT NULL,
  `table_name` varchar(255) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `logs` */

/*Table structure for table `marketing_budget_spendings` */

DROP TABLE IF EXISTS `marketing_budget_spendings`;

CREATE TABLE `marketing_budget_spendings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `marketing_budget_id` int(11) DEFAULT NULL,
  `spending` float DEFAULT NULL,
  `date` date DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4;

/*Data for the table `marketing_budget_spendings` */

insert  into `marketing_budget_spendings`(`id`,`marketing_budget_id`,`spending`,`date`,`updated_at`,`created_at`) values 
(12,11,1,'2022-01-31','2022-01-21 23:18:48','2022-01-21 23:18:48'),
(14,10,400,'2022-02-02','2022-01-21 23:38:16','2022-01-21 23:27:43'),
(15,10,0.202,'2022-02-03','2022-01-21 23:37:19','2022-01-21 23:37:19'),
(16,10,1,'2022-02-04','2022-01-21 23:37:48','2022-01-21 23:37:48'),
(17,10,0.5,'2022-02-05','2022-01-21 23:38:10','2022-01-21 23:38:10'),
(18,11,50,'2022-01-30','2022-01-21 23:18:48','2022-01-21 23:18:48'),
(19,11,50,'2022-01-29','2022-01-21 23:18:48','2022-01-21 23:18:48'),
(20,11,1,'2022-01-24','2022-01-24 22:55:37','2022-01-24 22:55:37'),
(21,11,2,'2022-01-24','2022-01-24 22:57:06','2022-01-24 22:57:06'),
(22,11,2,'2022-01-24','2022-01-24 22:57:20','2022-01-24 22:57:20'),
(23,12,2,'2022-01-24','2022-01-24 22:57:30','2022-01-24 22:57:30'),
(24,11,9,'2022-01-25','2022-01-25 00:32:56','2022-01-25 00:32:56'),
(25,11,9,'2022-01-25','2022-01-25 00:33:01','2022-01-25 00:33:01'),
(26,11,3,'2022-01-25','2022-01-25 00:35:40','2022-01-25 00:35:40'),
(27,13,500,'2022-03-02','2022-02-02 02:44:35','2022-02-02 02:44:35'),
(28,14,500,'2022-03-02','2022-02-02 02:45:23','2022-02-02 02:45:23');

/*Table structure for table `marketing_budgets` */

DROP TABLE IF EXISTS `marketing_budgets`;

CREATE TABLE `marketing_budgets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand_id` int(11) NOT NULL,
  `max_spendings` float NOT NULL,
  `required_leads` int(11) DEFAULT NULL,
  `company_id` int(11) NOT NULL,
  `for_period` date NOT NULL COMMENT 'marketing budget for which month and year',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;

/*Data for the table `marketing_budgets` */

insert  into `marketing_budgets`(`id`,`brand_id`,`max_spendings`,`required_leads`,`company_id`,`for_period`,`updated_at`,`created_at`) values 
(8,14,5000,25,19,'2022-09-01','2022-01-22 03:44:18','2022-01-21 01:02:53'),
(10,4,500,500,19,'2022-02-20','2022-01-21 06:25:24','2022-01-21 06:25:24'),
(11,14,500,500,19,'2022-01-20','2022-01-22 03:55:49','2022-01-22 00:42:16'),
(12,15,250,60,19,'2022-01-01','2022-01-22 04:28:10','2022-01-22 04:28:10'),
(13,15,500,50,19,'2022-03-01','2022-02-02 02:43:07','2022-02-02 02:43:07'),
(14,14,5000,500,19,'2022-03-01','2022-02-02 02:43:18','2022-02-02 02:43:18');

/*Table structure for table `merchants` */

DROP TABLE IF EXISTS `merchants`;

CREATE TABLE `merchants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_id` int(11) DEFAULT NULL,
  `merchant_details` text DEFAULT NULL,
  `merchant_type` enum('stripe','authorize.net','paypal') DEFAULT 'stripe',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

/*Data for the table `merchants` */

insert  into `merchants`(`id`,`company_id`,`merchant_details`,`merchant_type`,`updated_at`,`created_at`) values 
(1,1,'{\"sk\":\"sk_test_51JLEABHp3dFXYI5tM0HRVjZzXGfnlPU0t6ieRmOUEooGJ33JenoZa366jAoPThF2JyZOsJwZawA4u7m7oAavBdHn004eykG4NS\",\"pk\":\"pk_test_51JLEABHp3dFXYI5tFIp2RCQqCSDBART8mH4DsUuZ2pEEZn6zBC8Qu3vyJiPMOEZsL4tSsDbpI3jyib712AX8uhyy00lti3M11l\"}','stripe','2021-11-08 23:56:02','2021-11-08 23:48:08'),
(2,18,'{\"sk\":\"sk_test_51JLEABHp3dFXYI5tM0HRVjZzXGfnlPU0t6ieRmOUEooGJ33JenoZa366jAoPThF2JyZOsJwZawA4u7m7oAavBdHn004eykG4NS\",\"pk\":\"pk_test_51JLEABHp3dFXYI5tFIp2RCQqCSDBART8mH4DsUuZ2pEEZn6zBC8Qu3vyJiPMOEZsL4tSsDbpI3jyib712AX8uhyy00lti3M11l\"}','stripe','2021-11-08 23:56:02','2021-11-08 23:48:08'),
(3,17,'{\"sk\":\"sk_test_51JLEABHp3dFXYI5tM0HRVjZzXGfnlPU0t6ieRmOUEooGJ33JenoZa366jAoPThF2JyZOsJwZawA4u7m7oAavBdHn004eykG4NS\",\"pk\":\"pk_test_51JLEABHp3dFXYI5tFIp2RCQqCSDBART8mH4DsUuZ2pEEZn6zBC8Qu3vyJiPMOEZsL4tSsDbpI3jyib712AX8uhyy00lti3M11l\"}','stripe','2021-11-08 23:56:02','2021-11-08 23:48:08'),
(4,19,'{\"sk\":\"sk_test_51JLEABHp3dFXYI5tM0HRVjZzXGfnlPU0t6ieRmOUEooGJ33JenoZa366jAoPThF2JyZOsJwZawA4u7m7oAavBdHn004eykG4NS\",\"pk\":\"pk_test_51JLEABHp3dFXYI5tFIp2RCQqCSDBART8mH4DsUuZ2pEEZn6zBC8Qu3vyJiPMOEZsL4tSsDbpI3jyib712AX8uhyy00lti3M11l\"}','stripe','2021-11-08 23:56:02','2021-11-08 23:48:08');

/*Table structure for table `migrations` */

DROP TABLE IF EXISTS `migrations`;

CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `migrations` */

insert  into `migrations`(`id`,`migration`,`batch`) values 
(9,'2014_10_12_100000_create_password_resets_table',1),
(10,'2016_06_01_000001_create_oauth_auth_codes_table',1),
(11,'2016_06_01_000002_create_oauth_access_tokens_table',1),
(12,'2016_06_01_000003_create_oauth_refresh_tokens_table',1),
(13,'2016_06_01_000004_create_oauth_clients_table',1),
(14,'2016_06_01_000005_create_oauth_personal_access_clients_table',1),
(15,'2019_08_19_000000_create_failed_jobs_table',1),
(16,'2019_12_14_000001_create_personal_access_tokens_table',1),
(17,'2021_12_04_014853_create_notifications_table',2),
(18,'2022_01_22_061249_add_lead_type_column_in_lead_tbl',3),
(19,'2022_02_25_023851_add_permissions',4),
(21,'2022_03_05_000301_alter_column_in_projects',5),
(23,'2022_03_05_001640_create_news_table',6),
(24,'2022_03_12_005030_create_events_table',7);

/*Table structure for table `notifications` */

DROP TABLE IF EXISTS `notifications`;

CREATE TABLE `notifications` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_id` bigint(20) unsigned NOT NULL,
  `data` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `notifications_notifiable_type_notifiable_id_index` (`notifiable_type`,`notifiable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `notifications` */

insert  into `notifications`(`id`,`type`,`notifiable_type`,`notifiable_id`,`data`,`read_at`,`created_at`,`updated_at`) values 
('01502a59-08c0-4b35-b33e-3fe00856ec78','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":51,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}',NULL,'2021-12-06 21:33:11','2021-12-06 21:33:11'),
('01bec8f4-cf0d-424a-87d9-55c4e21197aa','App\\Notifications\\taskComment','App\\Models\\User',43,'{\"task_id\":20,\"line\":\"Sabih Shehzad Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}','2021-12-22 06:54:39','2021-12-22 05:56:33','2021-12-22 06:54:39'),
('036bceb9-03da-4e4d-988a-a04916d620f8','App\\Notifications\\BriefSubmit','App\\Models\\User',47,'{\"id\":28,\"user_id\":\"47\",\"lead_id\":34,\"brand_id\":15,\"brand_code\":\"SCB\",\"message\":\"New Brief has been sent, Kindly fill it up\"}','2021-12-24 04:52:24','2021-12-24 04:52:16','2021-12-24 04:52:24'),
('09e84df3-4ded-448d-9ad3-cd7ec4cbab6b','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":52,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}',NULL,'2021-12-07 00:33:10','2021-12-07 00:33:10'),
('0a099c4b-c27c-4785-bed1-9d1e6d53d990','App\\Notifications\\taskComment','App\\Models\\User',44,'{\"task_id\":20,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}','2022-03-10 23:08:45','2022-03-10 23:06:26','2022-03-10 23:08:45'),
('10e9958f-3352-478f-ad6b-58249338a2c6','App\\Notifications\\taskAssigned','App\\Models\\User',43,'{\"task_id\":23,\"project_id\":\"CBD-1640112031-28\"}','2021-12-22 06:54:39','2021-12-21 23:40:49','2021-12-22 06:54:39'),
('1133d79d-cb4c-493a-bf77-cb911077c68a','App\\Notifications\\taskComment','App\\Models\\User',43,'{\"task_id\":20,\"line\":\"Sabih Shehzad Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}','2022-03-05 00:11:53','2021-12-24 04:59:04','2022-03-05 00:11:53'),
('115b02cc-fe26-49ad-b402-0b865e972143','App\\Notifications\\BriefSubmit','App\\Models\\User',34,'{\"id\":28,\"user_id\":47,\"lead_id\":34,\"brand_id\":15,\"brand_code\":\"SCB\",\"message\":\"tt tt has filled the brief\"}','2021-12-24 04:53:29','2021-12-24 04:53:23','2021-12-24 04:53:29'),
('118e7fb7-0474-4b31-af14-3a74d8579f94','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":20,\"line\":\"Sabih Shehzad Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}',NULL,'2021-12-22 05:56:33','2021-12-22 05:56:33'),
('13e31538-719e-49bd-9628-1db42a2940e4','App\\Notifications\\taskComment','App\\Models\\User',44,'{\"task_id\":59,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}','2021-12-24 04:58:33','2021-12-07 00:54:54','2021-12-24 04:58:33'),
('1bdfe65e-ca79-43b2-828c-1b54fe436f3a','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":20,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}',NULL,'2022-03-10 23:06:26','2022-03-10 23:06:26'),
('1cca687e-8c42-4b67-a2d3-5d07d2aa0554','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":61,\"line\":\"Sabih Shehzad Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}',NULL,'2021-12-16 01:48:25','2021-12-16 01:48:25'),
('225d6dd3-6ffc-426f-8c5d-13d14b6b50e7','App\\Notifications\\taskComment','App\\Models\\User',44,'{\"task_id\":55,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}','2021-12-24 04:58:33','2021-12-07 00:41:13','2021-12-24 04:58:33'),
('2519ba52-e781-4344-8166-7d93d334e50a','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":42,\"line\":\"Sabih Shehzad Commented On #20\"}',NULL,'2021-12-04 06:14:34','2021-12-04 06:14:34'),
('2b6bb16c-e145-4462-83d2-00871b150be6','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":20,\"line\":\"Sabih Shehzad Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}',NULL,'2021-12-24 04:59:04','2021-12-24 04:59:04'),
('2f993e7d-b9ca-4dce-951d-d15baaa01a84','App\\Notifications\\taskComment','App\\Models\\User',44,'{\"task_id\":45,\"line\":\"Development Commented On #20\"}','2021-12-24 04:58:33','2021-12-04 06:15:13','2021-12-24 04:58:33'),
('31e6a5bd-4297-4592-8bfe-6053a907b6de','App\\Notifications\\taskComment','App\\Models\\User',43,'{\"task_id\":20,\"line\":\"Brand Support 3 Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}',NULL,'2022-03-10 23:05:52','2022-03-10 23:05:52'),
('333cc1cd-8b05-4bce-9893-d7ca75581eb8','App\\Notifications\\taskComment','App\\Models\\User',44,'{\"task_id\":51,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}','2021-12-24 04:58:33','2021-12-06 21:33:11','2021-12-24 04:58:33'),
('3354cf3d-85f2-49cd-b92c-f9724d8e962d','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":58,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}',NULL,'2021-12-07 00:54:31','2021-12-07 00:54:31'),
('3ab0e5ed-84ea-4799-9dbe-806421d4b7f8','App\\Notifications\\taskAssigned','App\\Models\\User',37,'{\"task_id\":24,\"project_id\":\"CBD-1640303708-29\"}',NULL,'2021-12-24 04:55:50','2021-12-24 04:55:50'),
('3ddf5c71-834a-4f58-8007-3fff1767ba25','App\\Notifications\\taskComment','App\\Models\\User',43,'{\"task_id\":63,\"line\":\"Sabih Shehzad Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}','2021-12-22 06:54:39','2021-12-16 01:51:48','2021-12-22 06:54:39'),
('41aaf01b-455e-4696-98d4-1512ae2e5c10','App\\Notifications\\PaymentPaidByCustomer','App\\Models\\User',33,'{\"payment_id\":26,\"lead_id\":32,\"status\":\"Paid\"}','2021-12-24 04:32:16','2021-12-22 01:48:46','2021-12-24 04:32:16'),
('4507f42a-f9ce-4c50-878f-f1000cdf7f73','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":56,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}',NULL,'2021-12-07 00:53:02','2021-12-07 00:53:02'),
('467837da-4603-4196-9a97-a214ddc83c34','App\\Notifications\\taskComment','App\\Models\\User',43,'{\"task_id\":60,\"line\":\"Sabih Shehzad Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}','2021-12-22 06:54:39','2021-12-16 01:48:11','2021-12-22 06:54:39'),
('47a2c1a9-8ba8-48ec-8597-226e2b072cfa','App\\Notifications\\taskComment','App\\Models\\User',43,'{\"task_id\":66,\"line\":\"Brand Support 3 Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}','2021-12-22 06:54:39','2021-12-16 01:54:56','2021-12-22 06:54:39'),
('47c49bab-7124-4663-916f-13c8888144b9','App\\Notifications\\taskComment','App\\Models\\User',44,'{\"task_id\":66,\"line\":\"Brand Support 3 Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}','2021-12-24 04:58:33','2021-12-16 01:54:56','2021-12-24 04:58:33'),
('4c6f63fe-680b-4c1f-9d74-c63acdd1a10d','App\\Notifications\\taskComment','App\\Models\\User',43,'{\"task_id\":42,\"line\":\"Sabih Shehzad Commented On #20\"}','2021-12-22 06:54:39','2021-12-04 06:14:34','2021-12-22 06:54:39'),
('4eb85ba3-a984-4e77-840b-777a891ad768','App\\Notifications\\taskComment','App\\Models\\User',44,'{\"task_id\":44,\"line\":\"Development Commented On #20\"}','2021-12-24 04:58:33','2021-12-04 06:15:09','2021-12-24 04:58:33'),
('4ed56928-383c-4bb2-aa0a-87b35dec1148','App\\Notifications\\taskComment','App\\Models\\User',44,'{\"task_id\":50,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}','2021-12-24 04:58:33','2021-12-06 21:32:48','2021-12-24 04:58:33'),
('51a2d387-d542-4c78-84a1-c09436398109','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":54,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}',NULL,'2021-12-07 00:40:28','2021-12-07 00:40:28'),
('522de9af-3e9d-4094-a9d5-b25219d8eb32','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":44,\"line\":\"Development Commented On #20\"}',NULL,'2021-12-04 06:15:09','2021-12-04 06:15:09'),
('53cbb68d-53bb-4d4b-b2e2-7010ba671455','App\\Notifications\\taskComment','App\\Models\\User',6,'{\"task_id\":1,\"line\":\"Brand Owner Commented On #1\",\"project_id\":\"TCWB-1635176535-6\"}',NULL,'2022-03-10 22:51:39','2022-03-10 22:51:39'),
('5b4ddcf3-b931-4c3e-8172-28102db35bb8','App\\Notifications\\taskComment','App\\Models\\User',43,'{\"task_id\":64,\"line\":\"Sabih Shehzad Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}','2021-12-22 06:54:39','2021-12-16 01:52:23','2021-12-22 06:54:39'),
('5c9923ef-0163-4811-b4e5-b62d7d25a7d7','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":64,\"line\":\"Sabih Shehzad Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}',NULL,'2021-12-16 01:52:23','2021-12-16 01:52:23'),
('63b02770-f571-4fbb-b780-8a72019780d4','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":43,\"line\":\"Sabih Shehzad Commented On #20\"}',NULL,'2021-12-04 06:14:52','2021-12-04 06:14:52'),
('6496caa1-76cb-4096-af02-c879e0fe79f3','App\\Notifications\\taskComment','App\\Models\\User',43,'{\"task_id\":20,\"line\":\"Brand Support 3 Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}',NULL,'2022-03-10 23:05:40','2022-03-10 23:05:40'),
('6712a349-ff68-495f-b83d-62afb2727f8b','App\\Notifications\\taskComment','App\\Models\\User',37,'{\"task_id\":30}',NULL,'2021-12-04 02:02:32','2021-12-04 02:02:32'),
('6a462402-3835-4c1d-957b-b5d0841422cf','App\\Notifications\\taskComment','App\\Models\\User',44,'{\"task_id\":65,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}','2021-12-24 04:58:33','2021-12-16 01:53:49','2021-12-24 04:58:33'),
('6cce9ff1-2cd5-4c58-b455-e1d375c6db0b','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":68,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}',NULL,'2021-12-22 05:54:17','2021-12-22 05:54:17'),
('6d6c873d-bb90-4c15-927d-f9cd10f0bf44','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":48,\"line\":\"Development Commented On #20\"}',NULL,'2021-12-04 06:15:37','2021-12-04 06:15:37'),
('6d703d46-466e-4ace-b30e-a26e59564857','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":55,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}',NULL,'2021-12-07 00:41:13','2021-12-07 00:41:13'),
('7ffd3041-4a8b-4e33-a7f9-87bac6c57579','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":65,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}',NULL,'2021-12-16 01:53:49','2021-12-16 01:53:49'),
('80b2ac66-8fea-4512-b481-994ab59f7b1c','App\\Notifications\\PaymentPaidByCustomer','App\\Models\\User',34,'{\"payment_id\":28,\"lead_id\":34,\"status\":\"Paid\"}','2021-12-24 04:53:29','2021-12-24 04:50:37','2021-12-24 04:53:29'),
('82ac190b-6a56-4be6-a3c5-e86fa01ab72d','App\\Notifications\\taskComment','App\\Models\\User',44,'{\"task_id\":20,\"line\":\"Brand Support 3 Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}','2022-03-10 23:08:45','2022-03-10 23:05:52','2022-03-10 23:08:45'),
('890c3ec2-7c8f-4968-8fb7-f5483ce1eec7','App\\Notifications\\taskComment','App\\Models\\User',43,'{\"task_id\":61,\"line\":\"Sabih Shehzad Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}','2021-12-22 06:54:39','2021-12-16 01:48:25','2021-12-22 06:54:39'),
('8aab8990-2ed1-4254-b8f3-808fd8038f07','App\\Notifications\\taskComment','App\\Models\\User',37,'{\"task_id\":38,\"line\":\"Brand Support 3 Commented On #21\"}',NULL,'2021-12-04 05:51:00','2021-12-04 05:51:00'),
('8d6962fd-722a-4a90-99a0-3d1fdbaf2452','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":57,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}',NULL,'2021-12-07 00:54:18','2021-12-07 00:54:18'),
('8d904bb2-9ad1-41ba-a69d-e1f3d09d0803','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":49,\"line\":\"Sabih Shehzad Commented On #20\"}',NULL,'2021-12-04 06:15:42','2021-12-04 06:15:42'),
('8d91a2e9-f579-4971-8acf-8b4b1a74cd6c','App\\Notifications\\taskComment','App\\Models\\User',43,'{\"task_id\":67,\"line\":\"Brand Owner 3 Commented On #23\",\"project_id\":\"CBD-1640112031-28\"}','2021-12-22 06:54:39','2021-12-21 23:48:48','2021-12-22 06:54:39'),
('8df486df-e7eb-4138-821a-c007099e7164','App\\Notifications\\taskComment','App\\Models\\User',37,'[]',NULL,'2021-12-04 02:00:24','2021-12-04 02:00:24'),
('90cc3f8f-c098-4e29-acc2-49455326f683','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":45,\"line\":\"Development Commented On #20\"}',NULL,'2021-12-04 06:15:13','2021-12-04 06:15:13'),
('91a3295f-7cfe-411e-9b77-97c741f33f08','App\\Notifications\\taskComment','App\\Models\\User',43,'{\"task_id\":62,\"line\":\"Sabih Shehzad Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}','2021-12-22 06:54:39','2021-12-16 01:48:41','2021-12-22 06:54:39'),
('96de8394-2748-498a-ba98-902ccc1384d9','App\\Notifications\\PaymentPaidByCustomer','App\\Models\\User',34,'{\"payment_id\":27,\"lead_id\":34,\"status\":\"Paid\"}','2021-12-24 04:53:29','2021-12-24 04:49:19','2021-12-24 04:53:29'),
('97c16278-0141-4410-9ef2-1f65c3917cf7','App\\Notifications\\taskComment','App\\Models\\User',44,'{\"task_id\":53,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}','2021-12-24 04:58:33','2021-12-07 00:37:44','2021-12-24 04:58:33'),
('9838c195-fcaf-421e-91d5-13d9aa4bfd9a','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":50,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}',NULL,'2021-12-06 21:32:48','2021-12-06 21:32:48'),
('9bc02642-96a2-4751-a4ae-6c69c88f2f01','App\\Notifications\\taskComment','App\\Models\\User',37,'[]',NULL,'2021-12-04 02:00:58','2021-12-04 02:00:58'),
('9fb6a42d-b709-4a21-9c12-92de0672060a','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":60,\"line\":\"Sabih Shehzad Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}',NULL,'2021-12-16 01:48:11','2021-12-16 01:48:11'),
('aa8bddaa-1e49-4f2e-a5cd-2a462bb7a8fe','App\\Notifications\\taskComment','App\\Models\\User',44,'{\"task_id\":68,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}','2021-12-24 04:58:33','2021-12-22 05:54:17','2021-12-24 04:58:33'),
('adaa597b-32d2-40ef-bda6-cdcd35e1c34c','App\\Notifications\\BriefSubmit','App\\Models\\User',33,'{\"id\":15,\"user_id\":45,\"lead_id\":32,\"brand_id\":14,\"brand_code\":\"CBD\",\"message\":\"test 123 has filled the brief\"}','2021-12-24 04:32:16','2021-12-24 04:29:13','2021-12-24 04:32:16'),
('b49511ba-c9ee-4f46-ab2a-7f4a1957d956','App\\Notifications\\PaymentPaidByCustomer','App\\Models\\User',33,'{\"payment_id\":24,\"lead_id\":32,\"status\":\"Paid\"}','2021-12-24 04:32:16','2021-12-22 01:37:58','2021-12-24 04:32:16'),
('b80ba687-3873-4067-91ca-beb4b1d13420','App\\Notifications\\taskAssigned','App\\Models\\User',43,'{\"task_id\":26,\"project_id\":\"CBD-1645739132-31\"}','2022-03-05 00:11:53','2022-02-25 02:45:42','2022-03-05 00:11:53'),
('bb8ad31d-e377-493f-8d69-ec7527382540','App\\Notifications\\taskAssigned','App\\Models\\User',37,'{\"task_id\":25,\"project_id\":\"CBD-1643714912-30\"}',NULL,'2022-02-01 16:30:45','2022-02-01 16:30:45'),
('c31573bd-8490-4fb4-a24a-316996e85397','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":41,\"line\":\"Sabih Shehzad Commented On #20\"}',NULL,'2021-12-04 06:14:22','2021-12-04 06:14:22'),
('c6c95f0c-96bb-4b46-a3cc-a87de329451b','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":62,\"line\":\"Sabih Shehzad Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}',NULL,'2021-12-16 01:48:41','2021-12-16 01:48:41'),
('cca5914b-622a-423a-8728-5407e92ba104','App\\Notifications\\taskComment','App\\Models\\User',43,'{\"task_id\":43,\"line\":\"Sabih Shehzad Commented On #20\"}','2021-12-22 06:54:39','2021-12-04 06:14:52','2021-12-22 06:54:39'),
('d024393b-0475-4acc-bc83-3860b853b47f','App\\Notifications\\PaymentPaidByCustomer','App\\Models\\User',33,'{\"payment_id\":25,\"lead_id\":32,\"status\":\"Paid\"}','2021-12-24 04:32:16','2021-12-22 01:42:56','2021-12-24 04:32:16'),
('d054307c-cd55-4edb-8735-18546d0c0141','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":47,\"line\":\"Development Commented On #20\"}',NULL,'2021-12-04 06:15:27','2021-12-04 06:15:27'),
('d1304846-9e9f-400e-8496-46549dea97e7','App\\Notifications\\taskComment','App\\Models\\User',6,'{\"task_id\":1,\"line\":\"Brand Owner Commented On #1\",\"project_id\":\"TCWB-1635176535-6\"}',NULL,'2022-03-10 22:51:32','2022-03-10 22:51:32'),
('d3e81f98-0f37-4334-be09-1c8a9cc47c63','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":53,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}',NULL,'2021-12-07 00:37:44','2021-12-07 00:37:44'),
('d93124cc-408a-49a1-894b-c478f4fa3a0c','App\\Notifications\\taskComment','App\\Models\\User',44,'{\"task_id\":46,\"line\":\"Development Commented On #20\"}','2021-12-24 04:58:33','2021-12-04 06:15:18','2021-12-24 04:58:33'),
('d974f230-2fa3-4d54-80fa-04e05b810017','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":63,\"line\":\"Sabih Shehzad Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}',NULL,'2021-12-16 01:51:48','2021-12-16 01:51:48'),
('d9b44958-3c1e-4330-b667-640eb6142756','App\\Notifications\\taskComment','App\\Models\\User',44,'{\"task_id\":47,\"line\":\"Development Commented On #20\"}','2021-12-24 04:58:33','2021-12-04 06:15:27','2021-12-24 04:58:33'),
('dcbda161-0760-43bb-a50c-6d00bc95baa9','App\\Notifications\\taskComment','App\\Models\\User',37,'{\"task_id\":37,\"line\":\"Brand Support 3 Commented On #21\"}',NULL,'2021-12-04 05:49:16','2021-12-04 05:49:16'),
('dd739c9f-bb4d-4e75-a7b9-76a93a3d4cc7','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":59,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}',NULL,'2021-12-07 00:54:54','2021-12-07 00:54:54'),
('df81b84e-89b6-4983-bf9e-c87da9b5d1db','App\\Notifications\\taskComment','App\\Models\\User',43,'{\"task_id\":41,\"line\":\"Sabih Shehzad Commented On #20\"}','2021-12-22 06:54:39','2021-12-04 06:14:22','2021-12-22 06:54:39'),
('e0923d17-34a4-425a-8877-4b787ee2713f','App\\Notifications\\taskComment','App\\Models\\User',37,'{\"task_id\":34,\"line\":\"Brand Support 3 Commented On #21\"}',NULL,'2021-12-04 02:05:28','2021-12-04 02:05:28'),
('e16b5e0c-161a-41b0-98d2-02f85411afac','App\\Notifications\\taskComment','App\\Models\\User',44,'{\"task_id\":48,\"line\":\"Development Commented On #20\"}','2021-12-24 04:58:33','2021-12-04 06:15:37','2021-12-24 04:58:33'),
('e25efe9e-3f52-421f-ace7-478748c17f8d','App\\Notifications\\taskComment','App\\Models\\User',44,'{\"task_id\":20,\"line\":\"Brand Support 3 Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}','2022-03-10 23:08:45','2022-03-10 23:05:40','2022-03-10 23:08:45'),
('e355f79b-8db6-49e1-98fb-edcf77ed3476','App\\Notifications\\taskComment','App\\Models\\User',37,'[]',NULL,'2021-12-04 02:01:19','2021-12-04 02:01:19'),
('e41de31b-be6d-41bc-a785-2dd7941051a3','App\\Notifications\\taskComment','App\\Models\\User',44,'{\"task_id\":54,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}','2021-12-24 04:58:33','2021-12-07 00:40:28','2021-12-24 04:58:33'),
('e5f02db5-f8e0-40a0-b909-85ebe791edee','App\\Notifications\\taskComment','App\\Models\\User',44,'{\"task_id\":58,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}','2021-12-24 04:58:33','2021-12-07 00:54:31','2021-12-24 04:58:33'),
('e9799088-acf6-4737-9019-9d195071dd87','App\\Notifications\\taskComment','App\\Models\\User',44,'{\"task_id\":52,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}','2021-12-24 04:58:33','2021-12-07 00:33:10','2021-12-24 04:58:33'),
('ec102060-41ec-4ec4-8340-81cbe9c87f2c','App\\Notifications\\taskComment','App\\Models\\User',43,'{\"task_id\":49,\"line\":\"Sabih Shehzad Commented On #20\"}','2021-12-22 06:54:39','2021-12-04 06:15:42','2021-12-22 06:54:39'),
('f21e23a7-7aef-4520-9f29-c3832bd7d752','App\\Notifications\\taskComment','App\\Models\\User',44,'{\"task_id\":56,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}','2021-12-24 04:58:33','2021-12-07 00:53:02','2021-12-24 04:58:33'),
('f2fb1f29-0ed1-4f18-867a-61e9bb09f70a','App\\Notifications\\taskComment','App\\Models\\User',37,'{\"task_id\":40,\"line\":\"Brand Support 3 Commented On #21\"}',NULL,'2021-12-04 05:51:56','2021-12-04 05:51:56'),
('f68cb026-6857-4671-95ed-841ccac08db9','App\\Notifications\\taskComment','App\\Models\\User',44,'{\"task_id\":57,\"line\":\"Development Commented On #20\",\"project_id\":\"CBD-1637882632-27\"}','2021-12-24 04:58:33','2021-12-07 00:54:18','2021-12-24 04:58:33'),
('f9c48972-840c-4a12-bdda-c6bc0f406864','App\\Notifications\\BriefSubmit','App\\Models\\User',45,'{\"id\":27,\"user_id\":\"45\",\"lead_id\":32,\"brand_id\":14,\"brand_code\":\"CBD\",\"message\":\"New Brief has been sent, Kindly fill it up\"}','2021-12-24 04:31:07','2021-12-24 04:30:59','2021-12-24 04:31:07'),
('f9d0edec-7063-4327-8f87-b9d752a6a622','App\\Notifications\\taskAssigned','App\\Models\\User',43,'{\"task_id\":27,\"project_id\":\"CBD-1643714912-30\"}',NULL,'2022-03-10 23:01:26','2022-03-10 23:01:26'),
('fde6e816-7296-40fd-a647-ffc7f0a32e90','App\\Notifications\\taskComment','App\\Models\\User',35,'{\"task_id\":46,\"line\":\"Development Commented On #20\"}',NULL,'2021-12-04 06:15:18','2021-12-04 06:15:18');

/*Table structure for table `oauth_access_tokens` */

DROP TABLE IF EXISTS `oauth_access_tokens`;

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `client_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_access_tokens` */

insert  into `oauth_access_tokens`(`id`,`user_id`,`client_id`,`name`,`scopes`,`revoked`,`created_at`,`updated_at`,`expires_at`) values 
('035f26c5f432e60acc7a351497876d97b4d2f952e7101afa0b18c9cf10ae3dbe866387c6bd3ffa22',3,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-08 18:31:05','2021-11-08 18:31:05','2022-05-08 18:31:05'),
('04e569544470c7cd13d06be6aa0596da7e995a656b78e3a8e6f15b92980b60e05612886de76e3ce7',36,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-16 16:04:19','2021-11-16 16:04:19','2022-05-16 16:04:18'),
('066ca807f15955cf920c6277effaea8fe6102f1fdf3041a563bd7dff94435d0a74a290e8f51b8c5f',17,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-16 01:42:55','2021-12-16 01:42:55','2022-06-16 01:42:52'),
('0761a81c37bb61736f06006161dee24f2c67da385a74172d02872270c4c99080b1c4946ab1dde073',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-01-22 04:27:51','2022-01-22 04:27:51','2022-07-22 04:27:51'),
('076e725199bd54ac72636d0e1762f28a7ca5e0a5a4af6f182a1f612e50f39381271fc8162bbc8c02',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-01-20 04:29:30','2022-01-20 04:29:30','2022-07-20 04:29:30'),
('0787c22a641759eb7ae98d7fe5d8763944476de4765442e937919fa3779d240d76d79c4dc47b0a78',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-16 16:18:24','2021-11-16 16:18:24','2022-05-16 16:18:24'),
('0829de5f5a403e35c3f34c7522520fc383d541f5799c4dec6e6cbe613e2f44d0b3b5a6ad91a76cdf',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-28 14:39:13','2021-10-28 14:39:13','2022-04-28 14:39:13'),
('092b04ab270b0b2986258a42b78fc80d705f10016f746fdf4f7b4df0784934a164b2d54e38be5c95',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-28 11:07:47','2021-10-28 11:07:47','2022-04-28 11:07:46'),
('0a1e401fd0b1848055c622e2903872cdf1890e0b638a44b16b1392fd3ab73b2fee8e29e9c6b24f14',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-26 04:47:35','2021-11-26 04:47:35','2022-05-26 04:47:35'),
('0a242af68fa53d75edefa7e77e97c2f969a024c1d38d50c000f54d9c257d95d384db484bec89579a',38,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-16 19:32:20','2021-11-16 19:32:20','2022-05-16 19:32:20'),
('0f38ca5520d891d50fafa695b499f40f37716b96d5d329ee79d3c8d65e5547968cedb2b3e6cd89c1',42,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-29 23:09:26','2021-11-29 23:09:26','2022-05-29 23:09:23'),
('0f76dcbbc0fae9328d0e3a7a558c854fad261271dde6dd733cf0df06bd6c6403d096f837198ee1f7',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-12 16:39:45','2021-10-12 16:39:45','2022-04-12 16:39:45'),
('1079fc1428b0857df0979358a6722911287b615a18d42135c01679b04b1382b65803fb2465fde52c',17,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-16 13:49:27','2021-11-16 13:49:27','2022-05-16 13:49:26'),
('11ef34312c38825bcd42a2d6daff2f47ca1e0aef028a896543c9dd3132a5bb0eb1e16797062d2b60',31,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-16 13:54:32','2021-11-16 13:54:32','2022-05-16 13:54:32'),
('12248eafd08bd91b38a9414ccc8159afc8ba1504f34422553441c55a0afd9742b03b7be25ab3f88e',44,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-01 06:39:56','2021-12-01 06:39:56','2022-06-01 06:39:56'),
('125777cdf596e968c12ae0e0dd846252390f4ea03105afb284be9c54cddbde171cde73323ac58229',33,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-22 04:25:01','2021-12-22 04:25:01','2022-06-22 04:25:00'),
('136469c8c3642e44f1b168829ddde368e2d27d172fe1e4528197c812ec224ccfec88fb6d259d12aa',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-26 13:47:12','2021-10-26 13:47:12','2022-04-26 13:47:11'),
('1390c0dd3cbfea9be47830756f7fb9d35bd2cb9ce8ff0fbeaa33bc85787bdf8cbd397723d4c5ae3f',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-22 14:58:36','2021-10-22 14:58:36','2022-04-22 14:58:36'),
('148b3851abc6a80caafb6ada910a7462c3c6d0af6fccc1a7f162ca9df9f0d5d932bf40c178301d34',34,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-26 04:21:46','2021-11-26 04:21:46','2022-05-26 04:21:46'),
('15e2db86d5fa2e456504f8d53949b1e520283a3095a263e49969b795dac8bc903abf0553421ce9a7',47,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-24 04:50:53','2021-12-24 04:50:53','2022-06-24 04:50:53'),
('17169b8db2f876551c952e89e08fae566e445697bcbb29b2535d05dd4a8dd35cd73dfe97a3fd58fd',43,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-04 06:13:54','2021-12-04 06:13:54','2022-06-04 06:13:53'),
('17a9c7bdfd4ea205b2c7b1e0cd4330c453fa3fac047c99e7bd7304302f9a8a85e05634ed242be635',25,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-30 00:22:18','2021-10-30 00:22:18','2022-04-30 00:22:18'),
('18a41a598a2565ac57698dde087de520a75636293bfb8d1fb36ce9e0c568218bb96db57a66642b9c',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-03-12 06:23:36','2022-03-12 06:23:36','2022-09-12 06:23:36'),
('1a1f8eaa77bc3446901836381caaedf23c405ea48e5a6d2a2a544a36ceb025e0dcce15bd7cdec4a6',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-26 13:55:34','2021-10-26 13:55:34','2022-04-26 13:55:34'),
('1b35f13f73bbdaca6c9e0b3a43c8221289eaaf47005ea450d5d27050528b45787b93d8cdac942ea6',25,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-02 00:11:04','2021-11-02 00:11:04','2022-05-02 00:11:04'),
('1b46464be64c68ff7084db821303ce54e74738b21b2ca95def049e60b27835195dd7cdea8b720c22',34,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-24 00:33:16','2021-12-24 00:33:16','2022-06-24 00:33:15'),
('1b50de2a8b1144b2eda2bfb9c762bb2039eebd3b52f8f9d2552d9a9a6044398b54cb11032b6d654b',44,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-04 05:54:25','2021-12-04 05:54:25','2022-06-04 05:54:25'),
('1fe035d305ac7d613d2539fd5b0c23ee80aac71f66b87b2f8f4356fa8a616a7ef60c579612a4bcdb',48,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-01-22 06:26:11','2022-01-22 06:26:11','2022-07-22 06:26:11'),
('22350313909524347974c0a1cd07c9a921d018dca6c7bca4245d0c4e3fd17ca5cc152677542f369c',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-26 09:32:26','2021-10-26 09:32:26','2022-04-26 09:32:26'),
('24c0ea4389edf8ffb784a929dbcad3d4a22dde3ad42b326064eb20739743c8735b0cd803bf4f2589',35,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-03-10 23:00:07','2022-03-10 23:00:07','2022-09-10 23:00:07'),
('24cb3dd7486805da1d6a082d3ee2c18314b009fe9e8501ed82ea67a71444adee8b63b45daf1a577a',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-26 09:51:50','2021-10-26 09:51:50','2022-04-26 09:51:49'),
('251f4718200f9918d2cf1e11b9ce4520079ebb7d14d1c0b822e3bd899d70b7c2b2ca7495a50b06af',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-16 19:24:48','2021-11-16 19:24:48','2022-05-16 19:24:47'),
('28e4a5a956f9c26215df7b2d0d7b49be21ec695852ac109acaf1160570b1c628214137fde9b0d0d4',34,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-02 03:05:20','2021-12-02 03:05:20','2022-06-02 03:05:20'),
('2a685365cf27cc84d43b860762c7df38a62a24e796567f2c1d56fe3c81d85a72e6e5afd59f52ff71',33,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-02 03:05:37','2021-12-02 03:05:37','2022-06-02 03:05:37'),
('2ddf12bfb85cf5a3765e75e037ab7d4c59a12c32ae87638755bc54b0beca8dc9582e002083b19623',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-02 00:10:24','2021-11-02 00:10:24','2022-05-02 00:10:22'),
('2f44cb2530d37b05cc31e388a806af13491a4196263a50be561b25eb1fc68fb0a84aa57dc2bf4b18',17,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-01-25 01:01:42','2022-01-25 01:01:42','2022-07-25 01:01:42'),
('317b3d6b65a29f87ba990e35cf514e283bced289347de7f39415691682c633337eb3e4f7408db7d0',3,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-28 18:53:35','2021-10-28 18:53:35','2022-04-28 18:53:34'),
('31999d1eda126b1517a3461ae78f003e0e2cb7a82f3682fd109c9584cc8763ea1b41bda6507eaced',44,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-22 05:54:30','2021-12-22 05:54:30','2022-06-22 05:54:30'),
('333c184e33638c8338835f0d75ada1da77f93e0b35ee8bb3a763d75dd14a8818b41cbf3beeb648fd',33,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-16 23:10:21','2021-11-16 23:10:21','2022-05-16 23:10:21'),
('349d576f0b93e721c2c38ca4c89524aacf75ce667f30f5fff5d8005a8f98b0480fc81cb6905dc354',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-26 09:51:45','2021-10-26 09:51:45','2022-04-26 09:51:44'),
('36220cdd539ad56c433427dc8ed55cfa763e5712c071c0fa84039b8a27952c9a5f5ef98000a42031',43,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-03 04:37:30','2021-12-03 04:37:30','2022-06-03 04:37:29'),
('38668a7fa783b42c0ca95af8bd0aa195ab9c681055ab0910b1c67080613c4fce020416252e45407f',33,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-29 23:43:49','2021-11-29 23:43:49','2022-05-29 23:43:49'),
('38ca863d9acd398e24b55580ebef7398ec398b1bb80cdaec9b732e05a85a1137c2c787312eef09f5',33,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-02-01 16:27:37','2022-02-01 16:27:37','2022-08-01 16:27:37'),
('39854759eee1c4760ea26a6aa7d557d8d1fc9aef0ae933b670b4578ce3b7665f1abe1edca573deae',37,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-24 04:56:07','2021-12-24 04:56:07','2022-06-24 04:56:07'),
('3a5257b35b6c754e9ef3a4667783a36b0d82570718ea9b03b1092d9c62f30d04afd39659dcee9341',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-26 13:43:59','2021-10-26 13:43:59','2022-04-26 13:43:59'),
('3aecc5108da8bba83d1cd1780092030568494c0669c37e50e1eed8032f0fddb56de73ff546edadc1',48,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-01-20 22:35:26','2022-01-20 22:35:26','2022-07-20 22:35:24'),
('3af0cc37a8b790b89478a7468200c46778209986bb26a782589352f6f97c435ca04b663158970aac',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-20 12:31:47','2021-10-20 12:31:47','2022-04-20 12:31:44'),
('3ba7eca5936c948d6d4160f4cf6f29b6063e73cefba521329e19be32d07f2ef9cf7ebe8647ff3ee2',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-26 13:47:34','2021-10-26 13:47:34','2022-04-26 13:47:34'),
('3bf573b76009fe6518b085e629c442f504770727653f2db6453b70a68ad9c156f7acece522fd2288',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-12 16:39:06','2021-10-12 16:39:06','2022-04-12 16:39:06'),
('3c4a837d2d0a2df05fe95af0bbf15e3438c1ed363d22eddff0752511aad38e1cdb6c1015017e2522',17,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-28 15:09:08','2021-10-28 15:09:08','2022-04-28 15:09:07'),
('3c80ed2cc209648881e9b94d7e7d242a01867c570338f234857e51bd766f7f25bf0547802795b224',36,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-25 05:03:36','2021-11-25 05:03:36','2022-05-25 05:03:36'),
('3ccce0a9964108bb6e1230d0b80b695c592654063311dc14ab64b3abf1092ecc15d228f5ea29abc7',3,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-05 01:42:44','2021-11-05 01:42:44','2022-05-05 01:42:43'),
('3d349b934c19782bf0b1bf43982ea9f95e42f17c2fdd288f9f4a5abee4418777c70b92b17fa3293d',44,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-07 00:55:56','2021-12-07 00:55:56','2022-06-07 00:55:56'),
('3d52a41971ff57c6b6aae88d0f200900c1f27013ba5dd6d8c2e721790b0d562992956072bc06263b',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-20 12:49:22','2021-10-20 12:49:22','2022-04-20 12:49:22'),
('3e94cfe0e4dc31babc35fb9ecfb7d2dd1459413f1f7460ca9fdaa33e1223f8c8122a7791ee1a5cc6',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-28 18:52:48','2021-10-28 18:52:48','2022-04-28 18:52:48'),
('3e94f75c1e4a30ed4117da89c1b90ef1aa5e020846239f9835c60929dfbe121daed95f4e741c9368',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-12 16:43:31','2021-10-12 16:43:31','2022-04-12 16:43:31'),
('3fe6d0fddefeb313a005d0ccbc97b9f6ee993878e39192b905e7f6ad1a9f3630e10c0211eb369f44',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-26 13:47:46','2021-10-26 13:47:46','2022-04-26 13:47:46'),
('3feff9c1fe510a6d0f0ff08c93074d5b837c0f2f5b8f5f926d9d05d06458d75562e3eb84365444a4',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-26 03:54:43','2021-11-26 03:54:43','2022-05-26 03:54:42'),
('4025a8cb099238ff13ace24afe323b0509c4a05525d2830b20d7212050daac3a8e174546f69bd4f9',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-30 00:22:13','2021-11-30 00:22:13','2022-05-30 00:22:13'),
('409e8f52d9186b34d74d649eb8359051934363a6b93b86a12a78f2f788e5d05092a99b7a0dc42af5',43,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-02 03:04:46','2021-12-02 03:04:46','2022-06-02 03:04:45'),
('41760a29f5bbd7d031220931032ac2bc6eedcfb37a1914c32fa49714711db6b48887fcd154690776',48,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-01-22 03:49:57','2022-01-22 03:49:57','2022-07-22 03:49:57'),
('4294682e7b2b0a55746b6c7baff53466161ef447679e3c9c69e95a287bb5f843dd724c6b33a13bec',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-01-20 04:28:20','2022-01-20 04:28:20','2022-07-20 04:28:20'),
('4471f0e1c3c34d6726867946f78cbb5c31593604cb72e2ef02ca157866245905766fba22fea28507',45,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-22 01:43:02','2021-12-22 01:43:02','2022-06-22 01:43:02'),
('45497825b741d6771100f1031686e8502e55a602540daed5203f466f287ef8cdd784153b9ab43215',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-24 04:40:57','2021-12-24 04:40:57','2022-06-24 04:40:57'),
('45b6097efbdad64feba0b8211ab7ca850c42bd0d33d152a4fae2f2ff2e188c27381faf5f328c70e9',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-25 04:47:31','2021-11-25 04:47:31','2022-05-25 04:47:31'),
('490a1ac9b73e5616b046d8291f457efa03f7ac09b74cf650dd619272942847457484942b55cc24cf',35,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-02 03:05:06','2021-12-02 03:05:06','2022-06-02 03:05:05'),
('4b4f208ec87913f5de7f79f3d77a84d8864e40fde2a622b4e2c71b4577e39e3875dbef9ec25d4854',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-12 16:37:21','2021-10-12 16:37:21','2022-04-12 16:37:18'),
('4d2281b4505800590eb1ab7d31b3cce0938791b42e642b99c15bca542efe147664e301c37ca8557b',43,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-01 06:25:21','2021-12-01 06:25:21','2022-06-01 06:25:21'),
('500f7f8424f1b173f3ef36058ea14e52c5c2af24cbde4e7178c984d6fc51653aa738ad3604085d9b',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-03-05 01:14:31','2022-03-05 01:14:31','2022-09-05 01:14:31'),
('50dcdd340901889239a73fb86107c242696ce7660c09207c35422be871eb97628dac177db0529057',24,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-03-08 00:34:43','2022-03-08 00:34:43','2022-09-08 00:34:41'),
('519b25e114781274d7c8ee8deedecc45618c6c6c31ff78e3edd15d676247a2f224b979f2bdd17829',42,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-03 06:26:35','2021-12-03 06:26:35','2022-06-03 06:26:35'),
('541ffda894a0635385c62a45617a1f7d1e16ed56fb9ae2dca6045082363f12401704c3630901a160',17,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-15 09:37:57','2021-12-15 09:37:57','2022-06-15 09:37:56'),
('54b5ebb4f1f92b215adaabc2595c3147b6fd3525bad28f091e16d8a07d5760b2a25b87fd7137e652',3,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-22 14:50:35','2021-10-22 14:50:35','2022-04-22 14:50:34'),
('54e25ab877cfcf201bece55a577268cb99989a7c967e00e13ab40133bfffc2269bd258eecba3567d',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-03 04:58:25','2021-12-03 04:58:25','2022-06-03 04:58:25'),
('55262ac7ce99755fa871193e5811963ad74c7e3135a2e2fb9b889f20e445df877897a2ce8959ca13',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-12 16:41:31','2021-10-12 16:41:31','2022-04-12 16:41:30'),
('55384a6b855e55496fa9fdc983dc9e83fd5c12854810e4581cca644f0254a1ced7368c90c90da8af',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-26 09:34:14','2021-10-26 09:34:14','2022-04-26 09:34:14'),
('5677c4eef9fcb3947fd89380f2c1aeec6c3c39275621ceaac38209449219c71f49366de3773c3a75',35,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-03 06:10:06','2021-12-03 06:10:06','2022-06-03 06:10:06'),
('57fd6f33e527e65409201058b80299036d14c5ca9c4995ccb846b00fe0d09e5104e16904fc333815',25,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-02 00:16:24','2021-11-02 00:16:24','2022-05-02 00:16:24'),
('59b7f32be2005c4a18f3797af8c35042f20e14b8869138837993580dc847494c9517ee338ef0f2c6',43,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-16 01:52:40','2021-12-16 01:52:40','2022-06-16 01:52:40'),
('5ae54b16df276ff6a101e51a3052df4b25dc63bbbdc313c083fc584adf444ac5d229d02588cba559',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-26 09:32:52','2021-10-26 09:32:52','2022-04-26 09:32:52'),
('5b8a05a9c1de000081a27a9f7cdee15bad373a8ab038a0d225b6c48874ed1b564e15965477e98b95',17,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-28 14:40:41','2021-10-28 14:40:41','2022-04-28 14:40:41'),
('5bc4cb4f93b4a2eb3ce03a1b1386eed8fb867e1832b92768a8a77a309f9d98f819ee908a4cf85af5',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-28 16:32:35','2021-10-28 16:32:35','2022-04-28 16:32:34'),
('5c67948995faecae2496a81219d6347e885b3be68472c21bd3370a1ad1424a68fbe8e0a517f1446f',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-28 20:34:24','2021-10-28 20:34:24','2022-04-28 20:34:24'),
('5c8fd358a70858ca04ba519212b2eb8af795edb64cbbe06bb4136ac635815a5c2d2d8bf98a40756c',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-22 15:00:04','2021-10-22 15:00:04','2022-04-22 15:00:04'),
('5dc6ae2571cd0a8434741d978fbce34bc93ad4868215636b1e07239a240d73764cb69827b9a8218d',42,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-26 22:21:31','2021-11-26 22:21:31','2022-05-26 22:21:30'),
('5def6f72e4c4eb8e0e09be9d528b35ffee6ea52992542d7814a4d589e8f8273f0673ab6e2ed07c7c',34,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-25 23:39:33','2021-11-25 23:39:33','2022-05-25 23:39:33'),
('5f295780b410e6e87bdcaccf276aa0a012fd4344c54fc1b6b8d4e01bf0a493d079fc6e99400a2163',48,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-01-20 04:30:44','2022-01-20 04:30:44','2022-07-20 04:30:44'),
('5fb0b489a636f94d889e05658ed8969c20b2169dd21306105d34fba8b78b7808c4a8d4a52560f34d',17,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-28 20:33:18','2021-10-28 20:33:18','2022-04-28 20:33:17'),
('6376a763b8dc25b48a9b927b2ce0465c71a6c01c17ef73fbf81684292850f1c6b3bc541ffb02e121',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-28 18:50:34','2021-10-28 18:50:34','2022-04-28 18:50:34'),
('654ae95ec1688796560962b40d83a945fb02d0983317b8bd5d41a37c1500d4f403c78394febca304',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-01-22 03:53:06','2022-01-22 03:53:06','2022-07-22 03:53:06'),
('656ea86d6c607e7c704b1c343a94b6071c36f23866960c856781f680b25084a6712544d2571e4fc6',24,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-30 01:24:38','2021-10-30 01:24:38','2022-04-30 01:24:38'),
('66bcf97c08001c30d44e7708f40e6c509a76a08a19157d5897c193e9251fa5c9f7b802c2bd9fc8db',33,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-26 23:42:49','2021-11-26 23:42:49','2022-05-26 23:42:49'),
('6764bbb5e4a864ad4f19e81a0a4b1c21e89406939cfe97d8f1dea3a5737cbdaedb675facdf3ee321',17,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-29 14:08:08','2021-10-29 14:08:08','2022-04-29 14:08:07'),
('6811b071e2730bfb85b9eca6461cf5a10368141c5117f3e6aa3e8a19b89616d6d39d6a961e5d38e0',45,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-22 01:38:09','2021-12-22 01:38:09','2022-06-22 01:38:09'),
('682aa1891dfd066b85933197aa31e668dbbf95ed24d31bc1657b42a4a86bab6d85ac2cbaa32f43e5',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-03-10 22:51:08','2022-03-10 22:51:08','2022-09-10 22:51:06'),
('6a8e4b9a65f96bcd5230fec543e0e77585bbc7b77ff3436067bc055f1653db36f8fe22734895bc78',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-26 09:27:15','2021-10-26 09:27:15','2022-04-26 09:27:15'),
('6ba4fc26accf2177353978bfd78bbf04174f3460b935b594ff24c2cd3d293c90bed32bb7181f8e0c',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-16 15:13:57','2021-11-16 15:13:57','2022-05-16 15:13:57'),
('6d41f4684d4aba9f08cf3cff667b75aeb3caf0418eeb94c65a746e8b749db8f1f10a8984329dbd8e',45,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-22 01:23:16','2021-12-22 01:23:16','2022-06-22 01:23:16'),
('71a47291531d4f9b279780724521e67a45311cccd2117c39049b4d5742ed9bdeb5e097ef0fbab190',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-26 13:42:21','2021-10-26 13:42:21','2022-04-26 13:42:20'),
('7301ec5dd0c604c68977f009ef4f5bafdd33df1673983e5f794dd8ca9159755139d86b5025fe8748',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-26 13:44:55','2021-10-26 13:44:55','2022-04-26 13:44:55'),
('737043d6887153febecbb326dc53b38f13476ef8ede7e23a238d24d8d624bda9acc80c97ade95ef8',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-28 14:43:01','2021-10-28 14:43:01','2022-04-28 14:43:01'),
('75b38e7eb1eb5486d4057339b536297d63a9f1f01583791db05edfbd7666db012c8d876c53a138c9',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-01-25 01:02:14','2022-01-25 01:02:14','2022-07-25 01:02:14'),
('767455831288dfe12e93e5ab33dd60acc79198a09f2ebc86b37a0c1002cc54fe2d4495e2ce0b5442',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-02-01 16:44:18','2022-02-01 16:44:18','2022-08-01 16:44:18'),
('767be33136f464d7c7b0cafa330798bf34bf50accd3716e4a55aa81cfef7f6286ff56d03a3723f26',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-16 15:12:07','2021-11-16 15:12:07','2022-05-16 15:12:07'),
('777890fee8591160c7764c9a0c4d2832eb5ba01d9cfd3e0b8a7037df713a48a1d2fdfbcc7be25d04',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-22 14:59:56','2021-10-22 14:59:56','2022-04-22 14:59:56'),
('7847751e1b2289f9f15d860e30c66ba4b6643b85a69a960c41137f658b2b20baa507aeb50cb70427',35,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-16 01:54:12','2021-12-16 01:54:12','2022-06-16 01:54:12'),
('78bf0c4866c2bb2e2f82cf9b7cbebc120f61e28d502c244a2ecf2d47e15dad936d1baef0b059af84',43,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-02 03:39:05','2021-12-02 03:39:05','2022-06-02 03:39:05'),
('78dc0ce2306fa741203799c7adf7bc8e3c9e55536742498089684a07650d2992aa1833d7ec60b619',42,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-26 04:16:51','2021-11-26 04:16:51','2022-05-26 04:16:51'),
('79ddacd76649aa08ef74e6b4b0169d49861da567b3c05711deb4de40b0df22e14c7bc513e2015f86',48,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-01-25 00:32:42','2022-01-25 00:32:42','2022-07-25 00:32:41'),
('7a6957f90c08230230261235a216daf2b9f5802ffcf67228f35e5efb8a067632e18feac73ef4f733',44,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-02 04:56:05','2021-12-02 04:56:05','2022-06-02 04:56:05'),
('7be9038d5c01d33e85cbf1afd999f12734898f3382a721cc5107827dab0c989e736b57719545aa26',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-26 09:51:19','2021-10-26 09:51:19','2022-04-26 09:51:19'),
('7d34c9e0b6185b62c4e90381da202c53a39aa836b99825ebda94e79695a282023606402db35767ac',45,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-24 04:25:50','2021-12-24 04:25:50','2022-06-24 04:25:50'),
('7dfaac291ef02ee36ab9cb4060fbc5b9f74e9931af32f2e191ed0d4d1a0104f33dd0213d629b59d2',44,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-16 01:47:52','2021-12-16 01:47:52','2022-06-16 01:47:51'),
('7f0fe16c10ba315df7a829fb97e0a19ba0b532eedfbdd5c418a36ba543919baeaa2829b158d1e8fa',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-25 04:47:13','2021-11-25 04:47:13','2022-05-25 04:47:10'),
('80246799f06b73bf90023633af416fceb2330d3c8dc3dda7d56a190217bc6b341997db9ed0abea09',33,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-29 22:20:05','2021-11-29 22:20:05','2022-05-29 22:20:04'),
('804769f8f2a697c318b84cb2c3dd471c9ba77978c5f20d7d1b6da3f4449cca609479ae12a9466a1f',44,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-04 06:14:08','2021-12-04 06:14:08','2022-06-04 06:14:07'),
('80573f5cd0aff30aba9a3e6da815807e3fecb42515df9d881b64d98a8861b809f8e70d98b6703788',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-30 00:22:42','2021-10-30 00:22:42','2022-04-30 00:22:41'),
('80fc2defbef8da49cd6e144ced36c1b983e7dce85d198e1e5ab340e561098461dfeb5ef48cb86ece',43,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-01 06:50:30','2021-12-01 06:50:30','2022-06-01 06:50:30'),
('8227a1d5b6ec4aaa5c69e6df6c2bdd58fdc2fe95736ff48e5af118097a22fb18332fa698bed18ce5',3,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-29 14:10:00','2021-10-29 14:10:00','2022-04-29 14:10:00'),
('84ca6c8bd772564f0632c34f0503635f89a2c46bd9726ade609d3d23ce7836c3d731dd029456e34b',34,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-26 22:21:59','2021-11-26 22:21:59','2022-05-26 22:21:58'),
('8662d1cf4ef95af0050d77ba5be4416c15d5d4c0e1831893d0050ef601fccadcb22956f98c4d3fad',33,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-03 05:00:42','2021-12-03 05:00:42','2022-06-03 05:00:42'),
('86700cedb9f3c3a8088b5723dfdabb8dbc022cf8ca7e86496120126e2f6d2b237f89a8dea37cbdbc',43,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-06 21:34:45','2021-12-06 21:34:45','2022-06-06 21:34:45'),
('869ae8747bee378b5db22a30d7160b21d82f7e4a54b75ec393e679ef22cc9a4edb540f255c993157',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-28 15:09:28','2021-10-28 15:09:28','2022-04-28 15:09:28'),
('87647d0e628ba04970eb83f50e10434cbe5b2b51c2f8cc97d20e187217da147de7b9e87acfc8954a',3,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-08 23:39:03','2021-11-08 23:39:03','2022-05-08 23:39:03'),
('896fcd515caace9f995c78da1237ab40001c534417c8d4e6e2225d29748d73cff223b57036545f5a',44,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-22 05:48:59','2021-12-22 05:48:59','2022-06-22 05:48:59'),
('8987ff37cfa2331cf6baa5878178dfd8fe0bcb8488283eea1f65179c5025417dab5a7d9d36b01dff',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-16 15:13:04','2021-11-16 15:13:04','2022-05-16 15:13:04'),
('89d2fd6870607b15343df9e181081a97912bc7b21c63216266a05462c6b613e2ceadbc2edb562e43',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-02-02 02:42:41','2022-02-02 02:42:41','2022-08-02 02:42:40'),
('8a7e3487047d8aa661ddc4958400f032f1456fbef6e9dda8bf797874544d9b6a139503be57a41c03',44,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-02 03:37:23','2021-12-02 03:37:23','2022-06-02 03:37:23'),
('8be153733650bc19c1a18d118d6142c8b51e351f3126db1542321c080342e853e8f3b1320eb2931e',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-28 11:37:51','2021-10-28 11:37:51','2022-04-28 11:37:51'),
('8ce3fc7e083289e0d0b963670af51eea39e1b760cf759bbf8e303dc9cdff5ee8733b9d440ad3247d',33,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-21 23:30:10','2021-12-21 23:30:10','2022-06-21 23:30:09'),
('8d4da5df14c6047d24e21dc9b06a5c44ad546d8ed2fb74118b304c3f13c1be11a2a4dc4bc68150e3',3,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-30 00:23:00','2021-10-30 00:23:00','2022-04-30 00:23:00'),
('8e12e9128455cef6a47f6c4476c63b0194bf4f447607ac4bb91b53516e7f4cf263467f38f5ecbd5b',17,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-03-12 01:34:20','2022-03-12 01:34:20','2022-09-12 01:34:19'),
('8e5cf5bcaf38fc57f0f368002844a83a1cf75716f7d276bd7d30bd0cac4710ee0830c940dce06880',3,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-26 23:21:08','2021-11-26 23:21:08','2022-05-26 23:21:08'),
('8f0f8dfedfb763bb83a0e58aff06bbcbf0cfae52fe217056f91edaeece04f230ffd73cda724290da',3,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-01-20 04:26:27','2022-01-20 04:26:27','2022-07-20 04:26:27'),
('8f37440c1fb9462219650bb9427e530203d7b1ed61a18ca5917fa7f22b8f3f737db019d99557a84b',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-01-21 00:46:27','2022-01-21 00:46:27','2022-07-21 00:46:27'),
('8feec85fc6e9352ee3b1117bb51690965619a256587ecea8eda1f18f6860b4efe70755bf13ec9f53',43,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-03-10 23:06:09','2022-03-10 23:06:09','2022-09-10 23:06:09'),
('904021cfc3ed5feabbc61ddd1d71703dec4923b69c931cf07f03fba7c9e320d0b4b314e16fa998cc',43,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-03-10 23:42:58','2022-03-10 23:42:58','2022-09-10 23:42:58'),
('9071c70dc4488a5bf01f87576e191d381eb796d92c817474939430b9e164ad64a1e4b9b67b227e1d',33,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-16 15:17:19','2021-11-16 15:17:19','2022-05-16 15:17:18'),
('90ba8970db88442e4274faae46e27e61b2f6751fa1c1d989d721479d76500c9df6833f894f951775',33,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-22 01:25:58','2021-12-22 01:25:58','2022-06-22 01:25:58'),
('90cd861b6e0eee961ca0c51533248f0a7e9df77bcde75b2d0cd8c1cd96966a0da791b9d1fa6f07c0',35,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-03-12 06:15:11','2022-03-12 06:15:11','2022-09-12 06:15:11'),
('9222f5b1570e525869d9da34c19ed0f30f6dafa374108db7a4b509557e7eba8d99bafe22998deadf',34,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-16 19:28:16','2021-11-16 19:28:16','2022-05-16 19:28:16'),
('94f89e565a9161ddb6866642b1644a22f95dc2144fe42718f0ba2b1f4ae0d499d86d7a6b865f503e',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-25 15:23:05','2021-10-25 15:23:05','2022-04-25 15:23:05'),
('951364e2bf5b50edf32d03de1a42b3216dd29a958ff0dca4219bced8093ac0e8dfcbdc386ffd7dc9',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-26 22:22:21','2021-11-26 22:22:21','2022-05-26 22:22:21'),
('9569d1a3828f9da463f2819fd63f02ace2c5c11c0c8a471d87f08566699bf1a405887ff9908315a1',37,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-25 04:57:34','2021-11-25 04:57:34','2022-05-25 04:57:34'),
('971ef5ce8ee8b1799147c0bea069f385f1a45b35f092508ef4c2b8db39edef2279c1b9093215a0ac',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-25 23:33:18','2021-11-25 23:33:18','2022-05-25 23:33:18'),
('985d626a416f941faf3e3a98cd21196a269fcfecbcbe01f5aedfa453e9f8e6e7205d801d363a27f6',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-25 04:58:56','2021-11-25 04:58:56','2022-05-25 04:58:56'),
('9d777dde4d5156d97a18b5103ef790ddb709844f87bf93d3a43e51798cbbe4493a8e6eaf87b73a1b',3,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-05 02:44:46','2021-11-05 02:44:46','2022-05-05 02:44:46'),
('a1965dafc527d60579be7dc09fc6b03dd3918badf28d1d4a06ee891f0913ba19a7b109c5723530af',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-12 16:41:08','2021-10-12 16:41:08','2022-04-12 16:41:03'),
('a1d7341db926db936e61cb144b2a9063c6554dd4cd5c0dd8e83e7db53dc233e9dfb932fe81682c65',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-28 20:33:01','2021-10-28 20:33:01','2022-04-28 20:33:01'),
('a3d9e33818c9ec86f5a5647a6979efc0f072bd1d21b3e86429bed2fb51b6489512f1df284b65c054',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-16 01:44:37','2021-12-16 01:44:37','2022-06-16 01:44:37'),
('a4743730a58a8196e7680088af4f33938e2c9e1a074c86997a890f9209a91546e728b7d4190299cd',30,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-13 03:50:41','2021-11-13 03:50:41','2022-05-13 03:50:40'),
('a581977cc88a50e18d6d4d818131a3afb47026ed99aa86fd5cdadd0ad70188006f1a9cea751c4abf',43,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-22 05:49:38','2021-12-22 05:49:38','2022-06-22 05:49:38'),
('a6b5605396f7a1a42e2d01d15f5125305ee0ee18333a7ae85c1669a21fd8129fb371f1bcf181d687',34,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-26 04:08:49','2021-11-26 04:08:49','2022-05-26 04:08:49'),
('ac7eae3784f9f44b95284002b3dbd8ba2547cb5f68f9309ab8df0a1eb97c0932d960d4a47b9402be',37,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-26 00:04:43','2021-11-26 00:04:43','2022-05-26 00:04:43'),
('acedffd35f04add26b28c33fa17193e7d94f3e72085f06c24c089b0da2bf316101e87a5baddd95ff',24,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-28 23:33:03','2021-10-28 23:33:03','2022-04-28 23:33:03'),
('ad02d0adec931f2c7fa76e8d17d9ef7bc87d68b479004a759556ba22e4f4a8ce420c5c7c6e15b997',35,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-01 01:57:19','2021-12-01 01:57:19','2022-06-02 01:57:19'),
('add77761f1e8a5eb54c58c1cebbce190e4adbe262359dc2b23280789207e0bfc69cbeea312d032f2',37,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-17 05:07:50','2021-11-17 05:07:50','2022-05-17 05:07:50'),
('af38d85c996e3b2e68be590057a519b3f70880d445d17c2890c0f4805ea3a958252d61c099613d48',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-26 09:26:48','2021-10-26 09:26:48','2022-04-26 09:26:48'),
('b12cb03f8c2a2927f4ad0ae029ef7a07a2341be9e59e4d0a7fb9cc5be8f27e3659e1b9e6670b9122',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-12 16:39:17','2021-10-12 16:39:17','2022-04-12 16:39:17'),
('b242f7c8a124cb39770dea090e072a06ee8ea06a8aeca54993eccbd45a035239369cbe53509bf999',34,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-24 04:45:40','2021-12-24 04:45:40','2022-06-24 04:45:40'),
('b2692224d747a05e4570b79323fab77cf663716611a72e912bf1f515d6492ec25d7aa9f79dbaf2bf',37,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-25 05:28:45','2021-11-25 05:28:45','2022-05-25 05:28:45'),
('b3056cca6e9cf43a6ebb97de7295c0290942b04782d662d96788fcc9f6b9c1ca474ea5fa0b30f8a1',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-05 01:28:59','2021-11-05 01:28:59','2022-05-05 01:28:59'),
('b3de504777cd092a4e1db218e6b32fe985db4d33c7c1d3ef6e4bcc535c2ad711edbd9457f5322e0b',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-28 14:38:43','2021-10-28 14:38:43','2022-04-28 14:38:43'),
('b4b8cf0c57bc28072fea4471cfec44111647e58999c151c2ce71a9944cb4b51aa7c52603515a5e2a',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-28 11:19:51','2021-10-28 11:19:51','2022-04-28 11:19:51'),
('b4c0cf73f8bb741e6be2309d318da250a9986d734f2f68d0376644d33c092fb57a29f176ef0de88b',36,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-17 02:10:18','2021-11-17 02:10:18','2022-05-17 02:10:17'),
('b5e6765a411b195f27f74630775035c6ab47be235a15707b0b8c9904223f5aaff4a379d5d7698551',42,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-26 04:48:07','2021-11-26 04:48:07','2022-05-26 04:48:07'),
('b61b44df11469ea135b44ade71422f2ee19b2cb4ca2839931e00f9358fe8f2e3c5bc4fe11a5bd0e9',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-26 00:08:50','2021-11-26 00:08:50','2022-05-26 00:08:50'),
('b8d2d22b16f726e697c4119a62a0a7578538e1d0f6f40ba5f9da88cdeacc47d02df5f307ba27e088',33,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-03-08 00:34:56','2022-03-08 00:34:56','2022-09-08 00:34:56'),
('b9f1e5b261f6c8df8c96e8acad39f27e8c3c2c7e98ad763dcb03283b8f1c5a24a01c8f97c58eaa89',44,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-03 06:22:16','2021-12-03 06:22:16','2022-06-03 06:22:16'),
('b9fa9ab1b8a419d90c5b02f5e3d487bc4ff77586ee22a0ba36887930763b23e99d52e8ed6d42badc',44,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-03-10 23:08:12','2022-03-10 23:08:12','2022-09-10 23:08:11'),
('bbcf809d904c6047b2e407958d8c1bebefc9236d7304221f045c02004e68e3017f8d289baa64ea08',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-01-22 06:07:11','2022-01-22 06:07:11','2022-07-22 06:07:10'),
('bc97726934ae2c1c2245d1e5b14962ac33b66658848da9c8b1eeadd21a72377ba87a0e694969105c',34,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-26 00:10:03','2021-11-26 00:10:03','2022-05-26 00:10:03'),
('bd32e9a45f247fb720854c3c88510382a6500ad4d52c1337bc3ef8fe2024e6bfdb4451eafbf751d8',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-28 20:36:26','2021-10-28 20:36:26','2022-04-28 20:36:26'),
('bd5bde4934c8ec94293cff223bbff3f35f7d87b6164aee28017a7fdb01fd550a7b6d6bd640da60c8',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-12 16:40:00','2021-10-12 16:40:00','2022-04-12 16:40:00'),
('bf3c30019f4702db43b26902d7d95237f94e8e1601df51b792e01666cc18dfd3939d04648f2b56f4',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-30 02:17:40','2021-11-30 02:17:40','2022-05-30 02:17:40'),
('bf9c7b4e821f38ed0ac0af1e25b4a1467b9d8c61f4c3871298f3d13f395df9ccda68cbc0ab9a33d0',34,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-02-25 02:25:52','2022-02-25 02:25:52','2022-08-25 02:25:50'),
('c0365eda9a6572745234f711a83f17b208c7051fbbf8696daf35944458701c1e09c2870c500a38f9',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-02-01 16:25:55','2022-02-01 16:25:55','2022-08-01 16:25:54'),
('c1a227e441c6864f45221369671a615fc8b92d2f7d0e5856dd9b1ca8c38c57bdaed9a55f401f86ff',43,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-22 05:56:44','2021-12-22 05:56:44','2022-06-22 05:56:44'),
('c23092fc1281849aeeb536dc7e4ac5c2c5a6d91408970df8be98bd1fc6d171945230e62b49334d28',17,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-22 04:12:35','2021-12-22 04:12:35','2022-06-22 04:12:35'),
('c2ffa8f03534da58dad838f04977b0219409868095ebddc6806cfbf63294bade1ac261bd174b0b6c',48,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-01-21 22:41:11','2022-01-21 22:41:11','2022-07-21 22:41:10'),
('c38745ff67b73da8a432836b8e8d89b8f8a7086186c91e6c12d790dfd456b5b2e71691820888351f',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-12 16:38:10','2021-10-12 16:38:10','2022-04-12 16:38:10'),
('c59b0c278186605a13f492f22bad66f9a949b9b4baadba8a51772e011010bf737afb36c6626697dd',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-12 16:37:51','2021-10-12 16:37:51','2022-04-12 16:37:50'),
('c67cf6a56074a59bfc61036220dc02206c1ac68bc1351ba44606ee2f07a4ad97027c2c631edd71a8',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-26 13:47:40','2021-10-26 13:47:40','2022-04-26 13:47:40'),
('c6ff35f4fb75a520c8e1c85badeb4d86909d360aaed7ae239f3627ba81c9d740fa51fdb44deeebf8',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-26 13:44:17','2021-10-26 13:44:17','2022-04-26 13:44:16'),
('c76633768f5778acce5bc3861236b30cee2de8d3aa0ec1f981980c89e9142124150aea596b1c3059',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-26 13:47:30','2021-10-26 13:47:30','2022-04-26 13:47:30'),
('c8055252bef7fe118c1e9b31f5c839b4813eb52f6ba58850fcf0acb547f51f783adc3ddac73e02ba',17,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-01-21 00:46:02','2022-01-21 00:46:02','2022-07-21 00:46:02'),
('c854e168a2d14387d52e0bebd6ea9c52a8e1897799ec218289e852bb82072ba73cf279aa9351c88a',43,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-06 20:25:15','2021-12-06 20:25:15','2022-06-06 20:25:14'),
('c8ddb38c688c2a8b18e705e2c0b9fbdb37c8e5567e03a62e32ea18241d50c666e220c766a7b1d533',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-22 14:58:56','2021-10-22 14:58:56','2022-04-22 14:58:56'),
('c9edf5da6c8f79498bcff73fa7a98c43ad9b837e5bd9fa350e6214925090dc282a1d2800812445cb',43,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-16 01:46:37','2021-12-16 01:46:37','2022-06-16 01:46:37'),
('ca3d500390d9dcd812517a8763eb6aecbcdb5ab3ea37d3103d3f83d3fca29f2f93959e110ab2ec57',37,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-16 16:41:43','2021-11-16 16:41:43','2022-05-16 16:41:43'),
('cae57d96ebb3ab02e593266cd1764d346cf4bb07ed4f0be66436059587841aa5314c942539bbb41b',34,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-03-12 06:24:06','2022-03-12 06:24:06','2022-09-12 06:24:05'),
('cdd137c955819df384e2d2aebf557f4ce91cfce77cffa99182a3e35e7dd5a1f81c57a9ec7f3e5443',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-01-20 22:47:30','2022-01-20 22:47:30','2022-07-20 22:47:30'),
('cedbb790533eed25dc33a009b5a67ba4227aae05e97876bf654efa4419ece9672c068e677c484c7a',43,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-03-05 00:06:58','2022-03-05 00:06:58','2022-09-05 00:06:58'),
('cefcd4ab9b462485370ad132bfcbc4d27b5326ee9ffbbeeca95f0be789c1e0967f199f19a3e2539f',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-28 17:47:42','2021-10-28 17:47:42','2022-04-28 17:47:41'),
('cf1bdc326199d2df66baec5151a83b998a0d827babb4fee3bc002ad4531488c7cae229cc0b1dfd61',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-01 02:02:54','2021-12-01 02:02:54','2022-06-02 02:02:53'),
('d19132202d8977708ddd09633e0e922c4dc6a68b18a460b79af45e21147c551418cf36a8fd97bf73',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-30 00:52:28','2021-10-30 00:52:28','2022-04-30 00:52:28'),
('d1d19056f8675a8ef20ef58e6ed52b2b4bcd59a0ac64a7e926a1ab52b979d3ca9c928fc1dae9c3f7',17,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-28 15:25:09','2021-10-28 15:25:09','2022-04-28 15:25:09'),
('d2f339b9ce5f7f8ad4e4386f2450e3c90e156d2811955553d83484914c39b013a0b5cfd5a176313c',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-08 23:38:49','2021-11-08 23:38:49','2022-05-08 23:38:47'),
('d4601b8317f1b5a1959022d8b9da977e3c86d1e62b622c59ad85ad5ead1a47d2db8e5d067bda4989',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-25 22:47:29','2021-10-25 22:47:29','2022-04-25 22:47:29'),
('d4f6c4c94b154def3c1f0b7852dae2869840b93cc2ee48be98efda4a7776a4f2b732d3b00a0704a0',25,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-30 01:19:11','2021-10-30 01:19:11','2022-04-30 01:19:11'),
('d58fe65d575406a1e0dc5ecde1dcb4221033d8eff6a4b39eb04a640c78cc0ab6a7cc375f36f7c6f0',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-26 04:11:34','2021-11-26 04:11:34','2022-05-26 04:11:34'),
('d5e29a68287a53419c5ee196a312687c52eef104911d21409993a312a1663f2630d00bc15b12a38d',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-26 13:47:24','2021-10-26 13:47:24','2022-04-26 13:47:24'),
('d66f2b6fcd023d2ca5c8f309a786a0bb34eed1cceec7aea27123f86cb1e3f2be5db052149bd6c218',37,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-04 05:55:25','2021-12-04 05:55:25','2022-06-04 05:55:25'),
('d68b6727da91f2c8eea907bbede640077be649116b09203d47f2891c27f920d2005078a97fcd05aa',35,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-25 23:07:24','2021-11-25 23:07:24','2022-05-25 23:07:23'),
('d6b307504b824dff4b827ee444b708645a29e773a3a9e192b144a4a7b9d7f28cdbeb321c1c76e06d',48,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-01-22 06:07:30','2022-01-22 06:07:30','2022-07-22 06:07:29'),
('d885eb2c0904f94ba7eaa6cb027fe58b5afb4dddb01b97b2d63b1139a1045e3c5971380450fe3da9',40,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-25 23:53:26','2021-11-25 23:53:26','2022-05-25 23:53:26'),
('d8a3eb2354823b6b436b5d15993ba915d360b9c9288f1445d29d9a3260d1ef913860aa7a28223798',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-26 13:45:16','2021-10-26 13:45:16','2022-04-26 13:45:16'),
('da39b9ac9cb8ba1d4f5a63b92bf1d73124426d0c8e241529eb176266f4e08632f46c6f1d83458ad6',17,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-28 18:35:03','2021-10-28 18:35:03','2022-04-28 18:35:03'),
('dae64836c184a05afed094f5ed31e86fd820275c0938ef50e96a9d3e2afb898f93128d9cc6497897',17,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-03-10 23:42:41','2022-03-10 23:42:41','2022-09-10 23:42:41'),
('dd6c28da71ad5f57a334e00fac12eec68de5d35e4b6c954a2d5bea477eb6af4477cbeebe9600f5d2',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-03-12 06:23:17','2022-03-12 06:23:17','2022-09-12 06:23:17'),
('dee2309b740ba6935b61f036296ed6b664d4126a943da6f765343381fd7edb5fb513534dfd436052',42,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-26 23:21:27','2021-11-26 23:21:27','2022-05-26 23:21:27'),
('e4bca24d383cdb75d0c019f52f4fba6c1ab63437d7517bd15e44562b5b38811411e00aff41e7da7f',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-12 14:08:18','2021-10-12 14:08:18','2022-04-12 14:08:18'),
('e4fd8faa95e8853c5454b9c00089b023828ac9f2749a57e57b1dc50fe2cc10e769e3bb0c122a0492',40,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-26 04:05:48','2021-11-26 04:05:48','2022-05-26 04:05:48'),
('e5b051ad4c5201b2c99f82eb2e5384552f41cf4d6340bfa410cb476118061e9d4355bc01fe846e43',17,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2022-03-10 23:18:44','2022-03-10 23:18:44','2022-09-10 23:18:43'),
('e96353545672efae96cabdadbfd61fe76c85b8640c9f3a66ea26793cad9bad7b5d1c77499f3499b6',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-08 18:30:40','2021-11-08 18:30:40','2022-05-08 18:30:40'),
('ea040bec5ed98f506ff88ff8cb89b82b8f24a3020cc5d21385caf45d0aa52fab5f4d91327e5ec3bf',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-26 13:46:06','2021-10-26 13:46:06','2022-04-26 13:46:06'),
('ec157cec6ec12180385e3b132594dab18557dac60b7d8b7b0ec985ca636f53bf6510d9fcb1bb6fa0',43,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-03 06:23:38','2021-12-03 06:23:38','2022-06-03 06:23:38'),
('ec5a63dad8e368cacdf8cb58aadb9d0b3a838a943733e460ad1467d72ec26ebe9c7ed3cd0675a2b7',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-12 14:09:43','2021-10-12 14:09:43','2022-04-12 14:09:43'),
('ed3409f49ec7d6b7bfc94b3e1e052e63044996be9e598c06a91d921f232c5b2cf95a0a6b6cb3bcbf',2,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-25 11:39:16','2021-10-25 11:39:16','2022-04-25 11:39:15'),
('edad4e387a0898b3c5cd43da389505f9f90c1a6e078ecd5b24c2e5c5d5ed992b1bbcd7a50aa75660',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-25 23:32:11','2021-11-25 23:32:11','2022-05-25 23:32:11'),
('f0b682dd91c7a72da53aad92abe92b18938ab33100ff5f5c6df0d31c79635d86be48edbd207beae9',40,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-26 02:43:23','2021-11-26 02:43:23','2022-05-26 02:43:23'),
('f46b30fdc8d6a24026b00e71e7fc9b648962af7fbe02ccb8a7a159cb351784b46ba40246145a12a9',34,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-26 04:50:00','2021-11-26 04:50:00','2022-05-26 04:50:00'),
('f649aca538df8bdfc7ebc6987df99710db65ea879e9c4254f7ffbb77a5d6970edd705ebfa9c03aae',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-25 05:01:39','2021-11-25 05:01:39','2022-05-25 05:01:39'),
('f68445333df3ace0cad010676f6129d749ca4949e572e0cf174ddb2b5c9fe6a875141bf40fc90a25',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-03 05:04:19','2021-12-03 05:04:19','2022-06-03 05:04:19'),
('f7866677df726a31b07ec5da2ffa7cb8874c5ec9a596e809a2e50bf93655f4638d7594a7b356065e',33,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-24 04:21:55','2021-12-24 04:21:55','2022-06-24 04:21:55'),
('f7ae9245a8a08505a21690d7ebf58e60b02c6bccb923a577adbe69a49b193aec7209db149511aa24',44,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-24 04:58:21','2021-12-24 04:58:21','2022-06-24 04:58:21'),
('f8827b84db7ad9a6c52169e2dca15fdfddd63b67091d340861128cf9159f7827cc4428a87416eea3',43,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-12-16 01:55:07','2021-12-16 01:55:07','2022-06-16 01:55:07'),
('f8978eeff91bd6ae052420b9707e13eeadffd91b3e6993f7f867d518d81f8c0d2c0a0298a64bac69',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-25 23:47:38','2021-11-25 23:47:38','2022-05-25 23:47:38'),
('fb9c6ea8cdd5fc6bb0fdcc67f6da33baf44cce9a81c72ae55c3ba167f3f8440bfe0f7c81c2e24ab5',3,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-10 18:10:41','2021-11-10 18:10:41','2022-05-10 18:10:40'),
('fe4bde475f338caee5ee00a02ca99adaa289989e0ce26f78c6ffa4a805be9ba0024c936818185fc4',4,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-10-26 14:11:13','2021-10-26 14:11:13','2022-04-26 14:11:12'),
('ff5db12db4d9e7c99be5688c21275c8a16db3153019716f1dd55dac48310ad6e1b070092a398965e',32,'949d9205-b060-4a02-b12c-d7b0c317359e','Laravel Password Grant Client','[]',0,'2021-11-16 23:08:57','2021-11-16 23:08:57','2022-05-16 23:08:57');

/*Table structure for table `oauth_auth_codes` */

DROP TABLE IF EXISTS `oauth_auth_codes`;

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `client_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_auth_codes_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_auth_codes` */

/*Table structure for table `oauth_clients` */

DROP TABLE IF EXISTS `oauth_clients`;

CREATE TABLE `oauth_clients` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_clients` */

insert  into `oauth_clients`(`id`,`user_id`,`name`,`secret`,`provider`,`redirect`,`personal_access_client`,`password_client`,`revoked`,`created_at`,`updated_at`) values 
('949d9205-b060-4a02-b12c-d7b0c317359e',NULL,'CRM Personal Access Client','xXERqNLRxOWft5PQI2krO9yYH788z7rNYSFQV51x',NULL,'http://localhost',1,0,0,'2021-10-12 13:20:06','2021-10-12 13:20:06'),
('949d9205-b5c1-4fd9-b423-29b13b1911d7',NULL,'CRM Password Grant Client','ig2Fl5riNe4EG7nmU0izugVzCSvhZI0hRvUXotSv','users','http://localhost',0,1,0,'2021-10-12 13:20:06','2021-10-12 13:20:06');

/*Table structure for table `oauth_personal_access_clients` */

DROP TABLE IF EXISTS `oauth_personal_access_clients`;

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_personal_access_clients` */

insert  into `oauth_personal_access_clients`(`id`,`client_id`,`created_at`,`updated_at`) values 
(1,'949d9205-b060-4a02-b12c-d7b0c317359e','2021-10-12 13:20:06','2021-10-12 13:20:06');

/*Table structure for table `oauth_refresh_tokens` */

DROP TABLE IF EXISTS `oauth_refresh_tokens`;

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `oauth_refresh_tokens` */

/*Table structure for table `password_resets` */

DROP TABLE IF EXISTS `password_resets`;

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `password_resets` */

/*Table structure for table `payments` */

DROP TABLE IF EXISTS `payments`;

CREATE TABLE `payments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lead_id` int(11) DEFAULT NULL,
  `amount` float DEFAULT NULL,
  `status` tinyint(4) DEFAULT 0 COMMENT '0=pending,1=paid,2=failed',
  `merchant` enum('stripe','paypal','authorize.net','other') DEFAULT 'stripe',
  `description` varchar(555) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `payment_type` enum('sell','upsell','bonus') DEFAULT 'sell',
  `project_id` int(11) DEFAULT 0,
  `currency` enum('USD','GBP') DEFAULT 'USD',
  `user_id` int(11) DEFAULT 0 COMMENT 'Sell person who generated the payment link',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4;

/*Data for the table `payments` */

insert  into `payments`(`id`,`lead_id`,`amount`,`status`,`merchant`,`description`,`updated_at`,`created_at`,`payment_type`,`project_id`,`currency`,`user_id`) values 
(2,21,50,0,'stripe','test','2021-11-09 03:11:15','2021-11-08 14:08:59','sell',0,'USD',0),
(3,21,45,0,'stripe','test','2021-11-09 03:11:16','2021-11-08 14:08:59','sell',0,'USD',0),
(4,21,45,1,'stripe','test','2021-11-09 03:12:04','2021-11-08 14:08:59','sell',0,'USD',0),
(5,21,500,0,'stripe','test description','2021-11-09 04:39:59','2021-11-09 04:39:59','sell',0,'USD',0),
(6,21,0,0,'stripe',NULL,'2021-11-09 04:42:24','2021-11-09 04:42:24','sell',0,'USD',0),
(7,21,50,0,'stripe',NULL,'2021-11-09 04:43:02','2021-11-09 04:43:02','sell',0,'USD',0),
(8,21,50,0,'stripe',NULL,'2021-11-09 04:44:10','2021-11-09 04:44:10','sell',0,'USD',0),
(9,24,2500,1,'stripe',NULL,'2022-03-10 22:55:19','2021-11-09 06:00:38','sell',32,'USD',0),
(10,24,5456,1,'stripe',NULL,'2022-03-10 22:55:19','2021-11-09 06:13:42','sell',32,'USD',0),
(11,24,5000,1,'stripe','test','2022-03-10 22:55:19','2021-11-13 03:40:56','sell',32,'USD',0),
(12,24,500,0,'stripe',NULL,'2022-03-10 22:55:19','2021-11-16 13:39:28','sell',32,'USD',0),
(13,25,500,1,'stripe','Test Description','2021-11-16 13:54:19','2021-11-16 13:50:55','sell',0,'USD',0),
(14,26,200,1,'stripe','for css','2021-11-16 16:04:08','2021-11-16 16:02:48','sell',0,'USD',0),
(15,27,4500,1,'stripe','Website Design & Development Sale','2022-02-01 16:28:32','2021-11-16 19:29:54','sell',30,'USD',0),
(16,26,500,1,'stripe','test','2021-11-25 05:02:56','2021-11-25 05:01:55','sell',0,'USD',0),
(17,28,500,0,'stripe','Initial Payment','2021-12-21 23:40:31','2021-11-25 05:12:56','sell',28,'USD',0),
(18,28,250,0,'stripe','Upon Live','2021-12-21 23:40:31','2021-11-25 05:13:13','sell',28,'USD',0),
(19,29,350,1,'stripe','Initial Payment','2021-11-26 03:17:58','2021-11-25 23:43:05','sell',24,'USD',0),
(20,29,500,1,'stripe','Project upsell','2021-11-26 04:09:19','2021-11-26 04:02:53','upsell',25,'USD',0),
(21,31,500,1,'stripe','New Sell','2021-11-26 04:23:52','2021-11-26 04:14:25','sell',27,'USD',0),
(22,31,5000,0,'stripe','marzi','2021-11-26 23:34:43','2021-11-26 23:34:43','sell',27,'USD',0),
(23,32,500,1,'stripe','test','2022-02-25 02:45:32','2021-12-21 23:39:10','sell',31,'GBP',0),
(24,32,2500,1,'stripe','test','2022-02-25 02:45:32','2021-12-22 01:37:13','sell',31,'USD',33),
(25,32,5000,1,'stripe','test','2022-02-25 02:45:32','2021-12-22 01:42:19','sell',31,'USD',33),
(26,32,500,0,'stripe',NULL,'2022-02-25 02:45:32','2021-12-22 01:47:35','sell',31,'USD',33),
(27,34,500,1,'stripe','soft cube','2021-12-24 04:55:08','2021-12-24 04:48:07','sell',29,'USD',34),
(28,34,500,1,'stripe','test','2021-12-24 04:55:08','2021-12-24 04:49:58','sell',29,'USD',34);

/*Table structure for table `permissions` */

DROP TABLE IF EXISTS `permissions`;

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4;

/*Data for the table `permissions` */

insert  into `permissions`(`id`,`name`,`title`,`updated_at`,`created_at`) values 
(1,'company-list','Company Listing','2021-10-12 17:36:14','2021-10-12 17:36:14'),
(2,'company-create','Company Create','2021-10-12 17:36:14','2021-10-12 17:36:14'),
(3,'company-edit','Company Edit','2021-10-12 17:36:38','2021-10-12 17:36:38'),
(4,'company-delete','Company Delete','2021-10-12 17:36:38','2021-10-12 17:36:38'),
(5,'company-view','Company View','2021-10-12 17:36:59','2021-10-12 17:36:59'),
(6,'brands-list','Brands Listing','2021-10-12 17:46:13','2021-10-12 17:46:13'),
(7,'brands-create','Brands Create','2021-10-12 17:46:13','2021-10-12 17:46:13'),
(8,'brands-edit','Brands Edit','2021-10-12 17:46:13','2021-10-12 17:46:13'),
(9,'brands-delete','Brands Delete','2021-10-12 17:46:13','2021-10-12 17:46:13'),
(10,'brands-view','Brands View','2021-10-12 17:46:13','2021-10-12 17:46:13'),
(11,'users-list','Users List','2021-10-20 20:52:07','2021-10-20 20:52:07'),
(12,'users-create','Users Create','2021-10-20 20:52:17','2021-10-20 20:52:17'),
(13,'users-edit','Users Edit','2021-10-20 20:52:24','2021-10-20 20:52:24'),
(14,'users-delete','Users Delete','2021-10-20 20:53:00','2021-10-20 20:52:29'),
(15,'users-view','Users View','2021-10-20 20:53:07','2021-10-20 20:52:48'),
(16,'brand-users-list','Brand Users List','2021-10-20 20:52:07','2021-10-20 20:52:07'),
(17,'brand-users-create','Brand Users Create','2021-10-20 20:52:17','2021-10-20 20:52:17'),
(18,'brand-users-edit','Brand Users Edit','2021-10-20 20:52:24','2021-10-20 20:52:24'),
(19,'brand-users-delete','Brand Users Delete','2021-10-20 20:53:00','2021-10-20 20:52:29'),
(20,'brand-users-view','Brand Users View','2021-10-20 20:53:07','2021-10-20 20:52:48'),
(21,'project-list','Project List','2021-10-20 20:52:07','2021-10-20 20:52:07'),
(22,'project-create','Project Create','2021-10-20 20:52:17','2021-10-20 20:52:17'),
(23,'project-edit','Project Edit','2021-10-20 20:52:24','2021-10-20 20:52:24'),
(24,'project-delete','Project Delete','2021-10-20 20:53:00','2021-10-20 20:52:29'),
(25,'project-view','Project View','2021-10-20 20:53:07','2021-10-20 20:52:48'),
(26,'task-list','Task List','2021-10-20 20:52:07','2021-10-20 20:52:07'),
(27,'task-create','Task Create','2021-10-20 20:52:17','2021-10-20 20:52:17'),
(28,'task-edit','Task Edit','2021-10-20 20:52:24','2021-10-20 20:52:24'),
(29,'task-delete','Task Delete','2021-10-20 20:53:00','2021-10-20 20:52:29'),
(30,'task-view','Task View','2021-10-20 20:53:07','2021-10-20 20:52:48'),
(31,'brief-list','Brief List','2021-11-10 17:55:40','2021-11-10 17:55:40'),
(32,'brief-create','Brief Create','2021-11-10 17:55:54','2021-11-10 17:55:44'),
(33,'brief-edit','Brief Edit','2021-11-10 17:56:06','2021-11-10 17:56:06'),
(34,'brief-view','Brief View','2021-11-10 17:56:13','2021-11-10 17:56:13'),
(35,'brief-delete','Brief Delete','2021-11-10 17:56:21','2021-11-10 17:56:21'),
(36,'department-list','Department List','2021-11-30 01:59:26','2021-11-30 01:59:26'),
(37,'department-create','Department Create','2021-11-30 01:59:35','2021-11-30 01:59:35'),
(38,'department-edit','Department Edit','2021-11-30 01:59:43','2021-11-30 01:59:43'),
(39,'department-view','Department View','2021-11-30 01:59:56','2021-11-30 01:59:52'),
(40,'department-delete','Department Delete','2021-11-30 02:00:06','2021-11-30 02:00:06'),
(41,'leadassign-list','Lead Assign List','2021-11-30 23:08:42','2021-11-30 23:08:42'),
(42,'leadassign-create','Lead Assign Create','2021-11-30 23:08:53','2021-11-30 23:08:53'),
(43,'leadassign-edit','Lead Assign Edit','2021-11-30 23:09:03','2021-11-30 23:09:03'),
(44,'leadassign-view','Lead Assign View','2021-11-30 23:09:30','2021-11-30 23:09:11'),
(45,'leadassign-delete','Lead Assign Delete','2021-11-30 23:09:37','2021-11-30 23:09:23'),
(46,'marketing_budgets-list','Marketing Budget List','2022-01-20 22:43:07','2022-01-20 22:43:07'),
(47,'marketing_budgets-create','Marketing Budget Create','2022-01-20 22:43:19','2022-01-20 22:43:14'),
(48,'marketing_budgets-edit','Marketing Budget Edit','2022-01-20 22:43:29','2022-01-20 22:43:24'),
(49,'marketing_budgets-view','Marketing Budget View','2022-01-20 22:43:39','2022-01-20 22:43:34'),
(50,'marketing_budgets-delete','Marketing Budget Delete','2022-01-20 22:43:45','2022-01-20 22:43:42'),
(51,'lead_type-list','Lead Type List','2022-01-22 05:13:58','2022-01-22 05:13:58'),
(52,'lead_type-create','Lead Type Create','2022-01-22 05:14:05','2022-01-22 05:14:02'),
(53,'lead_type-edit','Lead Type Edit','2022-01-22 05:14:14','2022-01-22 05:14:10'),
(54,'lead_type-view','Lead Type View','2022-01-22 05:14:24','2022-01-22 05:14:20'),
(55,'lead_type-delete','Lead Type Delete','2022-01-22 05:14:31','2022-01-22 05:14:29'),
(56,'crmupdate-list','CrmUpdate List','2022-03-05 01:01:32','2022-03-05 01:01:32'),
(57,'crmupdate-view','CrmUpdate View','2022-03-05 01:01:32','2022-03-05 01:01:32'),
(58,'crmupdate-create','CrmUpdate Create','2022-03-05 01:01:32','2022-03-05 01:01:32'),
(59,'crmupdate-edit','CrmUpdate Edit','2022-03-05 01:01:32','2022-03-05 01:01:32'),
(60,'crmupdate-delete','CrmUpdate Delete','2022-03-05 01:01:32','2022-03-05 01:01:32'),
(61,'event-list','Event List','2022-03-12 01:13:06','2022-03-12 01:13:06'),
(62,'event-view','Event View','2022-03-12 01:13:06','2022-03-12 01:13:06'),
(63,'event-create','Event Create','2022-03-12 01:13:06','2022-03-12 01:13:06'),
(64,'event-edit','Event Edit','2022-03-12 01:13:06','2022-03-12 01:13:06'),
(65,'event-delete','Event Delete','2022-03-12 01:13:06','2022-03-12 01:13:06');

/*Table structure for table `personal_access_tokens` */

DROP TABLE IF EXISTS `personal_access_tokens`;

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `personal_access_tokens` */

/*Table structure for table `project_tasks` */

DROP TABLE IF EXISTS `project_tasks`;

CREATE TABLE `project_tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_id` int(11) NOT NULL,
  `title` varchar(555) DEFAULT NULL,
  `task_description` text DEFAULT NULL,
  `due_date` date NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0=opened,1=inprogress,2=closed/completed,3=onhold',
  `assigned_on` int(11) NOT NULL,
  `developer_id` int(11) DEFAULT 0,
  `assigned_by` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `project_tag` varchar(100) DEFAULT NULL,
  `task_type` enum('initial','revision','innerpages','redraw') DEFAULT 'initial',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4;

/*Data for the table `project_tasks` */

insert  into `project_tasks`(`id`,`project_id`,`title`,`task_description`,`due_date`,`status`,`assigned_on`,`developer_id`,`assigned_by`,`updated_at`,`created_at`,`project_tag`,`task_type`) values 
(1,6,NULL,'<p>test</p>','2021-04-19',2,6,0,4,'2022-03-10 22:51:39','2021-10-25 23:18:15','test','initial'),
(2,7,'123123','<p>123123123</p>','2021-11-02',0,6,0,25,'2021-11-02 01:14:58','2021-11-02 01:14:58',NULL,'initial'),
(3,7,'123123123','<p>123123123123123</p>','2021-12-31',0,6,0,25,'2021-11-03 05:50:14','2021-11-02 01:17:39',NULL,'initial'),
(4,7,'1231231','<p>23123123</p>','2021-11-04',3,6,0,25,'2021-11-05 00:32:45','2021-11-02 01:17:57',NULL,'initial'),
(5,7,'123123123','<p>123123123</p>','2021-11-25',3,6,0,25,'2021-11-04 23:00:19','2021-11-02 01:19:36',NULL,'initial'),
(6,7,'23123123','<p>1231231</p>','2021-11-01',0,6,0,25,'2021-11-03 05:50:38','2021-11-02 01:20:07',NULL,'initial'),
(7,13,'Create Logo of webnhub','<p>Create Logo of webnhub</p><p>Create Logo of webnhub</p><p>Create Logo of webnhub</p><p>Create Logo of webnhub</p>','2021-11-17',0,6,0,25,'2021-11-03 06:35:54','2021-11-03 06:35:54',NULL,'initial'),
(8,18,'test 3','<p>test 3</p>','2021-11-17',0,37,0,33,'2021-11-16 16:20:53','2021-11-16 16:20:53',NULL,'initial'),
(9,19,'123','<p>123</p>','2021-11-17',0,37,0,33,'2021-11-16 16:21:45','2021-11-16 16:21:45',NULL,'initial'),
(10,21,'test','<p>123</p>','2021-11-24',0,37,0,33,'2021-11-16 17:01:55','2021-11-16 17:01:19',NULL,'initial'),
(11,22,'Test Task','<p>asdasdasd</p>','2021-11-18',0,37,0,34,'2021-11-16 19:35:34','2021-11-16 19:35:34',NULL,'initial'),
(12,23,'Create Logo','<p>XYZ</p>','2021-11-30',0,37,0,34,'2021-11-26 00:02:48','2021-11-26 00:02:48',NULL,'initial'),
(13,27,'213123123','<p>123123</p>','2021-11-29',0,37,0,34,'2021-11-26 04:24:37','2021-11-26 04:24:37',NULL,'initial'),
(14,27,'123123','<p>123123123</p>','2021-11-27',0,37,0,34,'2021-11-26 04:27:46','2021-11-26 04:27:46',NULL,'initial'),
(15,27,'123123','<p>123123</p>','2021-11-27',2,37,0,34,'2021-11-26 04:30:35','2021-11-26 04:29:49',NULL,'initial'),
(16,19,'Create a New LP','<p>Create a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LP</p><p>Create a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LP</p><p>Create a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LP</p><p>Create a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LP</p><p>Create a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LPCreate a New LP</p>','2021-12-13',2,37,0,33,'2021-11-29 23:46:20','2021-11-29 22:25:07',NULL,'initial'),
(17,27,'asdasdasd','<p>asdasdasdasd</p><p>asdasdasd</p><p>asdasdasdasd</p>','2021-12-15',0,37,0,35,'2021-12-01 02:47:51','2021-12-01 02:47:51',NULL,'initial'),
(18,27,'asdasdasd','<p>asdasdasdasd</p><p>asdasdasd</p><p>asdasdasdasd</p>','2021-12-15',0,37,0,35,'2021-12-01 02:49:00','2021-12-01 02:49:00',NULL,'initial'),
(19,27,'inner pages','<p>inner pagesinner pagesinner pagesinner pagesinner pagesinner pagesinner pagesinner pagesinner pagesinner pagesinner pagesinner pagesinner pages</p>','2021-12-16',0,37,0,35,'2021-12-01 02:55:55','2021-12-01 02:55:55',NULL,'innerpages'),
(20,27,'revisionrevisionrevisionrevisionrevisionrevisionrevisionrevision','<p>revisionrevisionrevisionrevisionrevisionrevisionrevisionrevision</p><p>revisionrevisionrevisionrevisionrevisionrevisionrevisionrevision</p><p>revisionrevisionrevisionrevisionrevisionrevisionrevisionrevision</p><p>revisionrevisionrevisionrevisionrevisionrevisionrevisionrevision</p>','2021-12-09',0,43,44,35,'2022-03-10 23:06:26','2021-12-01 02:57:27',NULL,'revision'),
(21,27,'redraw redrawredrawredrawredrawredrawredrawredrawredrawredrawredrawredraw','<p>redraw redrawredrawredrawredrawredrawredrawredrawredrawredrawredrawredraw</p><p>redraw redrawredrawredrawredrawredrawredrawredrawredrawredrawredrawredraw</p><p>redraw redrawredrawredrawredrawredrawredrawredrawredrawredrawredrawredraw</p><p>redraw redrawredrawredrawredrawredrawredrawredrawredrawredrawredrawredraw</p>','2021-12-09',0,37,0,35,'2021-12-03 06:24:35','2021-12-01 03:29:38',NULL,'redraw'),
(22,27,'for custom','<p>for custom</p>','2021-12-09',2,43,44,35,'2021-12-02 03:39:16','2021-12-01 04:12:17',NULL,'innerpages'),
(23,28,'123123','<p>123123</p>','2021-12-22',0,43,0,33,'2021-12-21 23:40:48','2021-12-21 23:40:48',NULL,'initial'),
(24,29,'make a web page (mock','<p>web page</p>','2021-12-31',0,37,0,34,'2021-12-24 04:55:50','2021-12-24 04:55:50',NULL,'initial'),
(25,30,'test','<p>test</p>','2022-02-09',0,37,0,33,'2022-02-01 16:30:44','2022-02-01 16:30:44',NULL,'initial'),
(26,31,'123','<p>123123</p>','2022-02-26',0,43,0,34,'2022-02-25 02:45:42','2022-02-25 02:45:42',NULL,'initial'),
(27,30,'asd','<p>asd</p>','2022-03-24',0,43,0,35,'2022-03-10 23:01:26','2022-03-10 23:01:26',NULL,'initial');

/*Table structure for table `project_users` */

DROP TABLE IF EXISTS `project_users`;

CREATE TABLE `project_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `project_users` (`user_id`,`role_id`),
  KEY `project_project_id` (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4;

/*Data for the table `project_users` */

insert  into `project_users`(`id`,`user_id`,`role_id`,`project_id`,`created_at`,`updated_at`) values 
(1,2,1,6,'2021-10-25 15:42:15','2021-10-25 15:42:15'),
(2,4,4,6,'2021-10-25 15:42:15','2021-10-25 15:42:15'),
(3,5,5,6,'2021-10-25 15:42:15','2021-10-25 15:42:15'),
(4,4,4,7,'2021-10-25 15:43:13','2021-10-25 15:43:13'),
(5,2,1,7,'2021-10-25 15:43:13','2021-10-25 15:43:13'),
(6,5,5,7,'2021-10-25 15:43:13','2021-10-25 15:43:13'),
(7,5,5,7,'2021-10-25 16:23:06','2021-10-25 16:23:06'),
(8,5,5,6,'2021-10-25 16:26:27','2021-10-25 16:26:27'),
(9,5,5,6,'2021-10-25 16:26:29','2021-10-25 16:26:29'),
(10,5,5,6,'2021-10-25 16:27:59','2021-10-25 16:27:59'),
(11,5,5,6,'2021-10-25 16:28:06','2021-10-25 16:28:06'),
(12,26,6,6,'2021-10-25 16:28:06','2021-10-30 02:54:14'),
(13,26,6,2,'2021-10-25 16:28:06','2021-10-25 16:28:06'),
(14,26,6,3,'2021-10-25 16:28:06','2021-10-25 16:28:06'),
(15,26,6,4,'2021-10-25 16:28:06','2021-10-25 16:28:06'),
(16,26,6,5,'2021-10-25 16:28:06','2021-10-25 16:28:06'),
(17,26,6,7,'2021-10-25 16:28:06','2021-10-25 16:28:06'),
(18,25,5,8,'2021-11-02 04:00:21','2021-11-02 04:00:21'),
(19,25,5,9,'2021-11-02 04:03:19','2021-11-02 04:03:19'),
(20,25,5,10,'2021-11-02 04:03:58','2021-11-02 04:03:58'),
(21,25,5,11,'2021-11-02 04:04:33','2021-11-02 04:04:33'),
(22,25,5,12,'2021-11-02 04:10:27','2021-11-02 04:10:27'),
(23,25,5,13,'2021-11-03 06:28:48','2021-11-03 06:28:48'),
(24,33,4,14,'2021-11-16 15:55:46','2021-11-16 15:55:46'),
(25,33,4,15,'2021-11-16 15:55:52','2021-11-16 15:55:52'),
(26,33,4,16,'2021-11-16 15:56:16','2021-11-16 15:56:16'),
(27,33,4,17,'2021-11-16 16:00:05','2021-11-16 16:00:05'),
(28,33,4,18,'2021-11-16 16:20:23','2021-11-16 16:20:23'),
(29,33,4,19,'2021-11-16 16:21:36','2021-11-16 16:21:36'),
(30,33,4,20,'2021-11-16 16:44:23','2021-11-16 16:44:23'),
(31,33,4,21,'2021-11-16 17:01:01','2021-11-16 17:01:01'),
(32,36,6,21,'2021-11-16 17:01:01','2021-11-16 17:01:01'),
(33,34,4,22,'2021-11-16 19:34:39','2021-11-16 19:34:39'),
(34,38,6,22,'2021-11-16 19:34:39','2021-11-16 19:34:39'),
(35,33,4,22,'2021-11-16 19:34:39','2021-11-16 19:34:39'),
(36,34,4,23,'2021-11-26 00:00:00','2021-11-26 00:00:00'),
(37,40,6,23,'2021-11-26 00:00:00','2021-11-26 00:00:00'),
(38,33,4,23,'2021-11-26 00:00:00','2021-11-26 00:00:00'),
(39,34,4,24,'2021-11-26 03:17:58','2021-11-26 03:17:58'),
(40,40,6,24,'2021-11-26 03:17:58','2021-11-26 03:17:58'),
(41,33,4,24,'2021-11-26 03:17:58','2021-11-26 03:17:58'),
(42,34,4,25,'2021-11-26 04:09:19','2021-11-26 04:09:19'),
(43,41,6,25,'2021-11-26 04:09:19','2021-11-26 04:09:19'),
(44,33,4,25,'2021-11-26 04:09:19','2021-11-26 04:09:19'),
(45,34,4,26,'2021-11-26 04:10:10','2021-11-26 04:10:10'),
(46,40,6,26,'2021-11-26 04:10:10','2021-11-26 04:10:10'),
(47,34,4,27,'2021-11-26 04:23:52','2021-11-26 04:23:52'),
(48,42,6,27,'2021-11-26 04:23:52','2021-11-26 04:23:52'),
(49,33,4,27,'2021-11-26 04:23:52','2021-11-26 04:23:52'),
(50,33,4,28,'2021-12-21 23:40:31','2021-12-21 23:40:31'),
(51,0,6,28,'2021-12-21 23:40:31','2021-12-21 23:40:31'),
(52,34,4,29,'2021-12-24 04:55:08','2021-12-24 04:55:08'),
(53,47,6,29,'2021-12-24 04:55:08','2021-12-24 04:55:08'),
(54,33,4,29,'2021-12-24 04:55:08','2021-12-24 04:55:08'),
(55,33,4,30,'2022-02-01 16:28:32','2022-02-01 16:28:32'),
(56,38,6,30,'2022-02-01 16:28:32','2022-02-01 16:28:32'),
(57,34,4,31,'2022-02-25 02:45:32','2022-02-25 02:45:32'),
(58,45,6,31,'2022-02-25 02:45:32','2022-02-25 02:45:32'),
(59,33,4,31,'2022-02-25 02:45:32','2022-02-25 02:45:32'),
(60,4,4,32,'2022-03-10 22:55:19','2022-03-10 22:55:19'),
(61,30,6,32,'2022-03-10 22:55:19','2022-03-10 22:55:19'),
(62,5,5,32,'2022-03-10 22:55:19','2022-03-10 22:55:19');

/*Table structure for table `projects` */

DROP TABLE IF EXISTS `projects`;

CREATE TABLE `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `project_id` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0=pending,1=in progress,2=completed,3=refund,4=chargeback,5=live',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `project_customer` (`company_id`),
  KEY `project_brand` (`brand_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4;

/*Data for the table `projects` */

insert  into `projects`(`id`,`company_id`,`brand_id`,`project_id`,`title`,`description`,`status`,`created_at`,`updated_at`) values 
(2,18,4,'TCWB-1635175928-2','Test Project','<p>test description</p>',0,'2021-10-25 15:32:08','2021-10-30 02:38:43'),
(3,18,4,'TCWB-1635176496-3','Test Project','<p>test description</p>',0,'2021-10-25 15:41:36','2021-10-30 02:38:43'),
(4,18,4,'TCWB-1635176507-4','Test Project','<p>test description</p>',0,'2021-10-25 15:41:47','2021-10-30 02:38:44'),
(5,18,4,'TCWB-1635176516-5','Test Project','<p>test description</p>',0,'2021-10-25 15:41:56','2021-10-30 02:38:44'),
(6,18,4,'TCWB-1635176535-6','Test Project','<p>test description</p>',0,'2021-10-25 15:42:15','2021-10-30 02:38:44'),
(7,18,4,'TCWB-1635176593-7','Test Project','<p>test description</p>',0,'2021-10-25 15:43:13','2021-10-30 02:38:45'),
(8,18,11,'TCB-1635807621-8','123123','<p>123123123</p>',0,'2021-11-02 04:00:21','2021-11-02 04:00:21'),
(9,18,11,'TCB-1635807799-9','123123','<p>123123123</p>',0,'2021-11-02 04:03:19','2021-11-02 04:03:19'),
(10,18,11,'TCB-1635807838-10','123123','<p>123123</p>',0,'2021-11-02 04:03:58','2021-11-02 04:03:58'),
(11,18,11,'TCB-1635807873-11','123123','<p>adadasd</p>',0,'2021-11-02 04:04:33','2021-11-02 04:04:33'),
(12,18,11,'TCB-1635808227-12','123123123','<p>123123123123</p>',0,'2021-11-02 04:10:27','2021-11-02 04:10:27'),
(13,18,11,'TCB-1635902928-13','WebnHub','<p>Webnhub Website,</p><p>We need to create a website which have alot of data and users</p>',0,'2021-11-03 06:28:48','2021-11-03 06:28:48'),
(14,19,14,'CBD-1637060146-14','New Project','<p>New Project</p>',0,'2021-11-16 15:55:46','2021-11-16 15:55:46'),
(15,19,14,'CBD-1637060152-15','New Project','<p>New Project</p>',0,'2021-11-16 15:55:52','2021-11-16 15:55:52'),
(16,19,14,'CBD-1637060176-16','New Project','<p>New Project</p>',0,'2021-11-16 15:56:16','2021-11-16 15:56:16'),
(17,19,14,'CBD-1637060405-17','test','<p>test</p>',0,'2021-11-16 16:00:05','2021-11-16 16:00:05'),
(18,19,14,'CBD-1637061623-18','Test 3','<p>test 3</p>',0,'2021-11-16 16:20:23','2021-11-16 16:20:23'),
(19,19,14,'CBD-1637061696-19','test 3','<p>test</p>',0,'2021-11-16 16:21:36','2021-11-16 16:21:36'),
(20,19,14,'CBD-1637063063-20','tes','<p>123123</p>',0,'2021-11-16 16:44:23','2021-11-16 16:44:23'),
(21,19,14,'CBD-1637064061-21','test','<p>test</p>',0,'2021-11-16 17:01:01','2021-11-16 17:01:01'),
(22,19,14,'CBD-1637073279-22','Test Project','<p>tresadasdasd</p>',0,'2021-11-16 19:34:39','2021-11-16 19:34:39'),
(23,19,14,'CBD-1637866800-23','test','<p>123123123</p>',0,'2021-11-26 00:00:00','2021-11-26 00:00:00'),
(24,19,14,'CBD-1637878678-24','123123','<p>123123123</p>',0,'2021-11-26 03:17:58','2021-11-26 03:17:58'),
(25,19,14,'CBD-1637881759-25','test','<p>123123</p>',0,'2021-11-26 04:09:19','2021-11-26 04:09:19'),
(26,19,14,'CBD-1637881810-26','123123','<p>Project Descripton</p>',0,'2021-11-26 04:10:10','2021-11-26 04:10:10'),
(27,19,14,'CBD-1637882632-27','123123','<p>123123123</p>',0,'2021-11-26 04:23:52','2021-11-26 04:23:52'),
(28,19,14,'CBD-1640112031-28','test','<p>test</p>',0,'2021-12-21 23:40:31','2021-12-21 23:40:31'),
(29,19,14,'CBD-1640303708-29','test','<p>test</p>',0,'2021-12-24 04:55:08','2021-12-24 04:55:08'),
(30,19,14,'CBD-1643714912-30','fucker','<p>test</p>',0,'2022-02-01 16:28:32','2022-03-10 16:07:24'),
(31,19,14,'CBD-1645739132-31','project','<p>123123123</p>',0,'2022-02-25 02:45:32','2022-02-25 02:45:32'),
(32,1,10,'DS-1646934919-32','tt','<p>tt</p>',0,'2022-03-10 22:55:19','2022-03-10 22:55:19');

/*Table structure for table `roles` */

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

/*Data for the table `roles` */

insert  into `roles`(`id`,`name`,`title`,`created_at`,`updated_at`) values 
(1,'superadmin','Super Admin','2021-10-12 17:35:14','2021-10-12 17:35:14'),
(2,'company','Company','2021-10-12 17:35:14','2021-10-12 17:35:14'),
(3,'brand','Brand','2021-10-25 16:30:33','2021-10-25 18:17:32'),
(4,'sales','Sales','2021-10-25 16:31:22','2021-10-25 16:31:22'),
(5,'support','Support','2021-10-25 16:31:22','2021-10-25 16:31:22'),
(6,'customer','Customer','2021-10-25 18:17:42','2021-10-25 18:17:42'),
(7,'productionmanager','Production Manager','2021-10-25 18:18:12','2021-10-25 18:18:12'),
(8,'developer','Developer','2021-10-25 18:18:22','2021-10-25 18:18:22'),
(9,'marketing','Marketing','2021-10-25 18:18:22','2021-10-25 18:18:22');

/*Table structure for table `roles_permissions` */

DROP TABLE IF EXISTS `roles_permissions`;

CREATE TABLE `roles_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `rp_permission_id` (`permission_id`),
  KEY `rp_role_id` (`role_id`) USING BTREE,
  CONSTRAINT `roles_permissions_ibfk_1` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`),
  CONSTRAINT `roles_permissions_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=166 DEFAULT CHARSET=utf8mb4;

/*Data for the table `roles_permissions` */

insert  into `roles_permissions`(`id`,`role_id`,`permission_id`,`created_at`,`updated_at`) values 
(1,1,1,'2021-10-12 17:38:16','2021-10-12 17:38:16'),
(2,1,2,'2021-10-12 17:38:16','2021-10-12 17:38:16'),
(3,1,3,'2021-10-12 17:38:16','2021-10-12 17:38:16'),
(4,1,1,'2021-10-12 17:38:16','2021-10-12 17:38:16'),
(5,1,5,'2021-10-12 17:38:16','2021-10-12 17:38:16'),
(6,1,6,'2021-10-12 17:47:41','2021-10-12 17:47:41'),
(7,1,7,'2021-10-12 17:47:41','2021-10-12 17:47:41'),
(8,1,8,'2021-10-12 17:47:41','2021-10-12 17:47:41'),
(9,1,9,'2021-10-12 17:47:41','2021-10-12 17:47:41'),
(10,1,10,'2021-10-12 17:47:41','2021-10-12 17:47:41'),
(11,2,6,'2021-10-12 17:47:41','2021-10-12 17:47:41'),
(12,2,7,'2021-10-12 17:47:41','2021-10-12 17:47:41'),
(13,2,8,'2021-10-12 17:47:41','2021-10-12 17:47:41'),
(14,2,9,'2021-10-12 17:47:41','2021-10-12 17:47:41'),
(15,2,10,'2021-10-12 17:47:41','2021-10-12 17:47:41'),
(16,1,11,'2021-10-20 21:01:29','2021-10-20 21:01:29'),
(17,1,12,'2021-10-20 21:01:32','2021-10-20 21:01:32'),
(18,1,13,'2021-10-20 21:01:35','2021-10-20 21:01:35'),
(19,1,14,'2021-10-20 21:01:37','2021-10-20 21:01:37'),
(20,1,15,'2021-10-20 21:01:40','2021-10-20 21:01:40'),
(21,3,17,'2021-10-25 18:22:29','2021-10-25 18:22:29'),
(22,3,19,'2021-10-25 18:22:29','2021-10-25 18:22:29'),
(23,3,18,'2021-10-25 18:22:29','2021-10-25 18:22:29'),
(24,3,16,'2021-10-25 18:22:29','2021-10-25 18:22:29'),
(25,3,20,'2021-10-25 18:22:29','2021-10-25 18:22:29'),
(26,3,22,'2021-10-25 18:42:13','2021-10-25 18:42:13'),
(27,3,24,'2021-10-25 18:42:13','2021-10-25 18:42:13'),
(28,3,23,'2021-10-25 18:42:13','2021-10-25 18:42:13'),
(29,3,21,'2021-10-25 18:42:13','2021-10-25 18:42:13'),
(30,3,25,'2021-10-25 18:42:13','2021-10-25 18:42:13'),
(31,4,22,'2021-10-25 18:42:13','2021-10-25 18:42:13'),
(32,4,24,'2021-10-25 18:42:13','2021-10-25 18:42:13'),
(33,4,23,'2021-10-25 18:42:13','2021-10-25 18:42:13'),
(34,4,21,'2021-10-25 18:42:13','2021-10-25 18:42:13'),
(35,4,25,'2021-10-25 18:42:13','2021-10-25 18:42:13'),
(36,1,4,'2021-10-28 17:20:05','2021-10-28 17:20:05'),
(37,2,16,'2021-10-25 18:22:29','2021-10-25 18:22:29'),
(38,1,16,'2021-10-25 18:22:29','2021-10-25 18:22:29'),
(39,2,17,'2021-10-25 18:22:29','2021-10-25 18:22:29'),
(40,1,17,'2021-10-25 18:22:29','2021-10-25 18:22:29'),
(41,2,11,'2021-10-29 04:39:34','2021-10-29 04:39:34'),
(42,2,12,'2021-10-29 04:39:39','2021-10-29 04:39:39'),
(43,2,13,'2021-10-29 04:39:41','2021-10-29 04:39:41'),
(44,2,14,'2021-10-29 04:39:43','2021-10-29 04:39:43'),
(45,2,15,'2021-10-29 04:39:46','2021-10-29 04:39:46'),
(46,5,21,'2021-10-30 02:37:40','2021-10-30 02:37:40'),
(47,5,22,'2021-10-30 02:37:55','2021-10-30 02:37:55'),
(48,5,23,'2021-10-30 02:37:57','2021-10-30 02:37:57'),
(49,5,24,'2021-10-30 02:37:59','2021-10-30 02:37:59'),
(50,5,25,'2021-10-30 02:38:04','2021-10-30 02:38:04'),
(51,4,21,'2021-10-30 02:38:11','2021-10-30 02:38:11'),
(52,4,22,'2021-10-30 02:38:13','2021-10-30 02:38:13'),
(53,4,23,'2021-10-30 02:38:15','2021-10-30 02:38:15'),
(54,4,24,'2021-10-30 02:38:16','2021-10-30 02:38:16'),
(55,4,25,'2021-10-30 02:38:18','2021-10-30 02:38:18'),
(56,2,31,'2021-11-10 17:56:45','2021-11-10 17:56:45'),
(57,2,32,'2021-11-10 17:56:48','2021-11-10 17:56:48'),
(58,2,33,'2021-11-10 17:56:50','2021-11-10 17:56:50'),
(59,2,34,'2021-11-10 17:56:53','2021-11-10 17:56:53'),
(60,2,35,'2021-11-10 17:56:56','2021-11-10 17:56:56'),
(61,4,31,'2021-11-16 15:53:46','2021-11-16 15:53:46'),
(62,5,31,'2021-11-16 15:53:50','2021-11-16 15:53:50'),
(63,7,25,'2021-11-17 05:27:50','2021-11-17 05:27:50'),
(64,6,21,'2021-11-26 03:35:12','2021-11-26 03:35:12'),
(66,6,25,'2021-11-26 23:23:41','2021-11-26 23:23:41'),
(67,2,21,'2021-11-26 23:34:27','2021-11-26 23:34:27'),
(68,2,36,'2021-11-30 02:00:24','2021-11-30 02:00:24'),
(69,2,37,'2021-11-30 02:00:28','2021-11-30 02:00:28'),
(70,2,38,'2021-11-30 02:00:31','2021-11-30 02:00:31'),
(71,2,39,'2021-11-30 02:00:33','2021-11-30 02:00:33'),
(72,2,40,'2021-11-30 02:00:36','2021-11-30 02:00:36'),
(73,2,41,'2021-11-30 23:10:59','2021-11-30 23:10:59'),
(74,2,42,'2021-11-30 23:11:01','2021-11-30 23:11:01'),
(75,2,43,'2021-11-30 23:11:04','2021-11-30 23:11:04'),
(76,2,44,'2021-11-30 23:11:07','2021-11-30 23:11:07'),
(78,2,45,'2021-11-30 23:11:12','2021-11-30 23:11:12'),
(79,5,41,'2021-12-01 01:59:22','2021-12-01 01:59:22'),
(80,4,41,'2021-12-01 01:59:30','2021-12-01 01:59:30'),
(82,8,25,'2021-12-01 06:45:30','2021-12-01 06:45:44'),
(83,9,41,'2022-01-20 03:02:54','2022-01-20 03:02:54'),
(84,9,42,'2022-01-20 03:02:57','2022-01-20 03:02:57'),
(85,9,43,'2022-01-20 03:02:59','2022-01-20 03:02:59'),
(86,9,44,'2022-01-20 03:03:01','2022-01-20 03:03:01'),
(87,9,45,'2022-01-20 03:03:05','2022-01-20 03:03:05'),
(88,2,46,'2022-01-20 22:44:28','2022-01-20 22:44:28'),
(89,2,47,'2022-01-20 22:44:33','2022-01-20 22:44:33'),
(90,2,48,'2022-01-20 22:44:37','2022-01-20 22:44:37'),
(91,2,49,'2022-01-20 22:44:41','2022-01-20 22:44:41'),
(92,2,50,'2022-01-20 22:44:43','2022-01-20 22:44:43'),
(93,2,51,'2022-01-22 05:48:54','2022-01-22 05:48:54'),
(94,2,52,'2022-01-22 05:48:56','2022-01-22 05:48:56'),
(95,2,53,'2022-01-22 05:48:59','2022-01-22 05:48:59'),
(96,2,54,'2022-01-22 05:49:00','2022-01-22 05:49:00'),
(97,2,55,'2022-01-22 05:49:03','2022-01-22 05:49:03'),
(98,9,51,'2022-01-22 05:49:09','2022-01-22 05:49:09'),
(99,9,52,'2022-01-22 05:49:13','2022-01-22 05:49:17'),
(100,9,53,'2022-01-22 05:49:19','2022-01-22 05:49:19'),
(101,9,54,'2022-01-22 05:49:22','2022-01-22 05:49:22'),
(102,9,55,'2022-01-22 05:49:24','2022-01-22 05:49:24'),
(103,4,41,'2022-02-25 02:41:26','2022-02-25 02:41:26'),
(104,4,42,'2022-02-25 02:41:26','2022-02-25 02:41:26'),
(105,4,43,'2022-02-25 02:41:26','2022-02-25 02:41:26'),
(106,4,44,'2022-02-25 02:41:26','2022-02-25 02:41:26'),
(107,4,45,'2022-02-25 02:41:26','2022-02-25 02:41:26'),
(108,1,56,'2022-03-05 01:07:28','2022-03-05 01:07:28'),
(109,1,57,'2022-03-05 01:07:31','2022-03-05 01:07:31'),
(110,1,58,'2022-03-05 01:07:33','2022-03-05 01:07:33'),
(111,1,59,'2022-03-05 01:07:36','2022-03-05 01:07:36'),
(112,1,60,'2022-03-05 01:07:38','2022-03-05 01:07:38'),
(113,2,56,'2022-03-05 01:29:26','2022-03-05 01:29:26'),
(114,3,56,'2022-03-05 01:29:30','2022-03-05 01:29:30'),
(115,4,56,'2022-03-05 01:29:34','2022-03-05 01:29:34'),
(116,5,56,'2022-03-05 01:29:38','2022-03-05 01:29:38'),
(118,7,56,'2022-03-05 01:29:49','2022-03-05 01:29:49'),
(119,8,56,'2022-03-05 01:29:53','2022-03-05 01:29:53'),
(120,9,56,'2022-03-05 01:29:59','2022-03-05 01:29:59'),
(121,1,61,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(122,2,61,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(123,3,61,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(124,4,61,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(125,5,61,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(126,6,61,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(127,7,61,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(128,8,61,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(129,9,61,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(130,1,62,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(131,2,62,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(132,3,62,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(133,4,62,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(134,5,62,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(135,6,62,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(136,7,62,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(137,8,62,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(138,9,62,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(139,1,63,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(140,2,63,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(141,3,63,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(142,4,63,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(143,5,63,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(144,6,63,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(145,7,63,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(146,8,63,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(147,9,63,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(148,1,64,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(149,2,64,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(150,3,64,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(151,4,64,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(152,5,64,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(153,6,64,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(154,7,64,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(155,8,64,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(156,9,64,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(157,1,65,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(158,2,65,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(159,3,65,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(160,4,65,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(161,5,65,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(162,6,65,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(163,7,65,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(164,8,65,'2022-03-12 01:13:06','2022-03-12 01:13:06'),
(165,9,65,'2022-03-12 01:13:06','2022-03-12 01:13:06');

/*Table structure for table `task_comment_user_notifications` */

DROP TABLE IF EXISTS `task_comment_user_notifications`;

CREATE TABLE `task_comment_user_notifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4;

/*Data for the table `task_comment_user_notifications` */

insert  into `task_comment_user_notifications`(`id`,`task_id`,`user_id`) values 
(63,1,6),
(64,1,6),
(70,20,35);

/*Table structure for table `task_comments` */

DROP TABLE IF EXISTS `task_comments`;

CREATE TABLE `task_comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task_id` int(11) NOT NULL,
  `comment` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `is_internal` tinyint(4) DEFAULT 0 COMMENT 'is internal 1 means comment is between developer and production manager',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4;

/*Data for the table `task_comments` */

insert  into `task_comments`(`id`,`task_id`,`comment`,`user_id`,`updated_at`,`created_at`,`is_internal`) values 
(1,7,'<p>test</p>',4,'2021-11-04 22:11:32','2021-10-25 23:57:16',0),
(2,7,'<p>test</p>',4,'2021-11-04 22:11:33','2021-10-25 23:57:30',0),
(3,7,'<p>hello there</p>',25,'2021-11-04 22:35:54','2021-11-04 22:35:54',0),
(4,7,'<p>test there</p>',25,'2021-11-04 22:37:27','2021-11-04 22:37:27',0),
(5,7,'<p>hey</p>',25,'2021-11-04 22:37:56','2021-11-04 22:37:56',0),
(6,4,'<p>kia horaha isme?</p>',25,'2021-11-04 22:38:25','2021-11-04 22:38:25',0),
(7,4,'<p>i need updates topday</p><ul><li>booking</li><li>panels</li><li><strong>updates</strong></li></ul>',25,'2021-11-04 22:38:42','2021-11-04 22:38:42',0),
(8,4,'<p>23123123231231232312312323123123231231232312312323123123231231232312312323123123231231232312312323123123231231232312312323123123231231232312312323123123231231232312312323123123231231232312312323123123231231232312312323123123231231232312312323123123231231232312312323123123231231232312312323123123231231232312312323123123</p><p>231231232312312323123123231231232312312323123123231231232312312323123123231231232312312323123123</p>',25,'2021-11-04 22:38:59','2021-11-04 22:38:59',0),
(9,7,'<p>hello there</p>',25,'2021-11-05 00:34:12','2021-11-05 00:34:12',0),
(10,7,'<p>Hello sir, Kindly have a look on the website and let us know what to do in this.</p><ul><li><strong>Company’s</strong> Quality Assurance activities start right from the beginning of the project until the product is ready for production thus ensuring compliance with the market standards and trends.&nbsp;</li><li>A specialized team of skilled individuals from relevant departments takes part in requirements gathering phase where requirements and scope of the project has to be finalized following the design phase and development.</li><li><strong>Company</strong> places great emphasis on proper documentation to ensure customer satisfaction towards our understanding of the product and success of the project. Company works on a milestones based approach where we run multiple cycles of development and testing until the product is ready for production within the approved scope and schedule.</li><li>As a whole, we unite Frontend Testing to ensure web application meets design requirements, Cross Platform compatibility to ensure consistency across different platforms and finally, functional testing to enforce standards and to make sure end product fully meets customer requirements.</li></ul>',25,'2021-11-05 00:36:15','2021-11-05 00:36:15',0),
(11,11,'<p>123123123123123</p>',34,'2021-11-16 19:37:32','2021-11-16 19:37:32',0),
(12,11,'<p>123123</p>',34,'2021-11-16 19:37:40','2021-11-16 19:37:40',0),
(13,11,'<p>production manage here</p>',37,'2021-11-17 05:25:52','2021-11-17 05:25:52',0),
(14,11,'<p>123123</p>',37,'2021-11-17 05:30:48','2021-11-17 05:30:48',0),
(15,10,'<p>123123123</p>',37,'2021-11-25 04:57:53','2021-11-25 04:57:53',0),
(16,12,'<p>123123123123</p><p>asdasdasd</p>',34,'2021-11-26 00:05:05','2021-11-26 00:05:05',0),
(17,12,'<p>12312313 21</p><p>23 123 1231 231 2312 3123&nbsp;</p><ul><li>asdasd</li><li>asdasdasd</li></ul>',37,'2021-11-26 00:05:24','2021-11-26 00:05:24',0),
(18,14,'<p>123123213</p><ul><li>do this</li><li>do that</li><li>&nbsp;</li></ul>',34,'2021-11-26 04:34:15','2021-11-26 04:34:15',0),
(19,16,'<p>sdafard4asd+46as4</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>',33,'2021-11-29 22:31:59','2021-11-29 22:31:59',0),
(20,16,'<p>sadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasdsadasdasdasd</p>',33,'2021-11-29 22:32:22','2021-11-29 22:32:22',0),
(21,22,'<p>comment by sabih</p>',44,'2021-12-01 06:40:18','2021-12-01 06:40:18',0),
(22,20,'<p>1</p>',43,'2021-12-03 06:24:54','2021-12-03 06:24:54',0),
(23,21,'<p>123123</p>',35,'2021-12-04 01:58:27','2021-12-04 01:58:27',0),
(24,21,'<p>123123</p>',35,'2021-12-04 01:58:47','2021-12-04 01:58:47',0),
(25,21,'<p>123123</p>',35,'2021-12-04 01:59:18','2021-12-04 01:59:18',0),
(26,21,'<p>123123</p>',35,'2021-12-04 02:00:24','2021-12-04 02:00:24',0),
(27,21,'<p>123123</p>',35,'2021-12-04 02:00:46','2021-12-04 02:00:46',0),
(28,21,'<p>123123</p>',35,'2021-12-04 02:00:58','2021-12-04 02:00:58',0),
(29,21,'<p>123123</p>',35,'2021-12-04 02:01:19','2021-12-04 02:01:19',0),
(30,21,'<p>123123</p>',35,'2021-12-04 02:02:32','2021-12-04 02:02:32',0),
(31,21,'<p>123123</p>',35,'2021-12-04 02:04:50','2021-12-04 02:04:50',0),
(32,21,'<p>123123</p>',35,'2021-12-04 02:05:06','2021-12-04 02:05:06',0),
(33,21,'<p>123123</p>',35,'2021-12-04 02:05:21','2021-12-04 02:05:21',0),
(34,21,'<p>123123</p>',35,'2021-12-04 02:05:28','2021-12-04 02:05:28',0),
(35,21,'<p>12312312</p>',35,'2021-12-04 05:48:49','2021-12-04 05:48:49',0),
(36,21,'<p>12312312</p>',35,'2021-12-04 05:49:02','2021-12-04 05:49:02',0),
(37,21,'<p>12312312</p>',35,'2021-12-04 05:49:16','2021-12-04 05:49:16',0),
(38,21,'<p>12312312</p>',35,'2021-12-04 05:51:00','2021-12-04 05:51:00',0),
(39,21,'<p>12312312</p>',35,'2021-12-04 05:51:26','2021-12-04 05:51:26',0),
(40,21,'<p>12312312</p>',35,'2021-12-04 05:51:56','2021-12-04 05:51:56',0),
(41,20,'<p>test sabih</p>',44,'2021-12-04 06:14:22','2021-12-04 06:14:22',0),
(42,20,'<p>working bro</p>',44,'2021-12-04 06:14:34','2021-12-04 06:14:34',0),
(43,20,'<p>ok bhai,</p>',44,'2021-12-04 06:14:52','2021-12-04 06:14:52',0),
(44,20,'<p>testing notification for sabih</p>',43,'2021-12-04 06:15:09','2021-12-04 06:15:09',0),
(45,20,'<p>testing notification for sabih 2</p>',43,'2021-12-04 06:15:13','2021-12-04 06:15:13',0),
(46,20,'<p>testing notification for sabih 3</p>',43,'2021-12-04 06:15:18','2021-12-04 06:15:18',0),
(47,20,'<p>testing notification for sabih 4</p>',43,'2021-12-04 06:15:26','2021-12-04 06:15:26',0),
(48,20,'<p>testing notification for sabih 5</p>',43,'2021-12-04 06:15:37','2021-12-04 06:15:37',0),
(49,20,'<p>thanks</p>',44,'2021-12-04 06:15:42','2021-12-04 06:15:42',0),
(50,20,'<p>1</p>',43,'2021-12-06 21:32:47','2021-12-06 21:32:47',0),
(51,20,'<p>12312312312312312123123asdasd</p><p>asdasdasdasd</p>',43,'2021-12-06 21:33:11','2021-12-06 21:33:11',0),
(52,20,'<p>for internal</p>',43,'2021-12-07 00:33:10','2021-12-07 00:33:10',0),
(53,20,'<p>internal</p>',43,'2021-12-07 00:37:44','2021-12-07 00:37:44',0),
(54,20,'<p>internal</p>',43,'2021-12-07 00:40:28','2021-12-07 00:40:28',0),
(55,20,'<p>internal</p>',43,'2021-12-07 00:41:13','2021-12-07 00:41:13',0),
(56,20,'<p>internal</p>',43,'2021-12-07 00:53:02','2021-12-07 00:53:02',0),
(57,20,'<p>internal</p>',43,'2021-12-07 00:54:18','2021-12-07 00:54:18',1),
(58,20,'<p>updated internal</p>',43,'2021-12-07 00:54:31','2021-12-07 00:54:31',1),
(59,20,'<p>updated internal</p>',43,'2021-12-07 00:54:54','2021-12-07 00:54:54',1),
(60,20,'<p>test</p>',44,'2021-12-16 01:48:10','2021-12-16 01:48:10',0),
(61,20,'<p>sabih here</p>',44,'2021-12-16 01:48:25','2021-12-16 01:48:25',1),
(62,20,'<p>t</p>',44,'2021-12-16 01:48:41','2021-12-16 01:48:41',0),
(63,20,'<p>test</p>',44,'2021-12-16 01:51:48','2021-12-16 01:51:48',0),
(64,20,'<p>t</p>',44,'2021-12-16 01:52:23','2021-12-16 01:52:23',1),
(65,20,'<p>yes</p>',43,'2021-12-16 01:53:49','2021-12-16 01:53:49',1),
(66,20,'<p>test</p>',35,'2021-12-16 01:54:56','2021-12-16 01:54:56',0),
(67,23,'<p>t</p>',33,'2021-12-21 23:48:48','2021-12-21 23:48:48',0),
(68,20,'<p>sabih kiya scene h?</p>',43,'2021-12-22 05:54:17','2021-12-22 05:54:17',1),
(69,20,'<p>kuch nh kam kr raha hn</p>',44,'2021-12-22 05:56:33','2021-12-22 05:56:33',1),
(70,20,'<p>t</p>',44,'2021-12-24 04:59:04','2021-12-24 04:59:04',1),
(71,1,'Brand Ownerput the task On Hold',4,'2022-03-10 22:51:31','2022-03-10 22:51:31',0),
(72,1,'Brand Owner Closed the task',4,'2022-03-10 22:51:39','2022-03-10 22:51:39',0),
(73,20,'Brand Support 3put the task On Hold',35,'2022-03-10 23:05:40','2022-03-10 23:05:40',0),
(74,20,'Brand Support 3 Closed the task',35,'2022-03-10 23:05:52','2022-03-10 23:05:52',0),
(75,20,'Development Opened the task',43,'2022-03-10 23:06:26','2022-03-10 23:06:26',0);

/*Table structure for table `task_times` */

DROP TABLE IF EXISTS `task_times`;

CREATE TABLE `task_times` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;

/*Data for the table `task_times` */

insert  into `task_times`(`id`,`task_id`,`date`,`start_time`,`end_time`,`user_id`) values 
(1,21,'2021-12-02','04:58:42','04:59:04',44),
(2,21,'2021-12-02','05:08:27','05:09:16',44),
(3,21,'2021-12-02','05:12:49','05:13:12',44),
(4,21,'2021-12-02','05:36:28','05:36:32',44),
(5,21,'2021-12-02','05:36:35','05:36:38',44),
(6,21,'2021-12-03','04:20:52','04:21:07',44),
(7,21,'2021-12-03','04:21:08','04:21:25',44),
(8,21,'2021-12-03','04:22:11','04:22:31',44),
(9,21,'2021-12-03','04:22:34','04:22:58',44),
(10,21,'2021-12-03','04:23:05','04:23:32',44),
(11,21,'2021-12-03','04:37:39','04:40:33',44),
(12,21,'2021-12-03','04:41:11','04:42:46',44),
(13,21,'2021-12-03','04:44:12','04:52:37',44),
(14,21,'2021-12-03','04:53:14','04:54:05',44),
(15,21,'2021-12-03','06:22:20','06:22:43',44),
(16,20,'2021-12-24','04:59:27','11:08:17',44),
(17,20,'2022-03-10','11:08:42','11:10:30',44);

/*Table structure for table `user_briefs` */

DROP TABLE IF EXISTS `user_briefs`;

CREATE TABLE `user_briefs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `form_name` varchar(255) DEFAULT NULL,
  `form_fields` text DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `sender_id` int(11) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL,
  `status` tinyint(4) DEFAULT 0 COMMENT '0=pending,1=filled',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4;

/*Data for the table `user_briefs` */

insert  into `user_briefs`(`id`,`form_name`,`form_fields`,`user_id`,`sender_id`,`brand_id`,`status`,`updated_at`,`created_at`) values 
(2,'test','[{\"type\":\"heading\",\"label\":\"LOGO DESIGN BRIEF\"},{\"type\":\"breaker\"},{\"type\":\"textbox\",\"label\":\"Do you need a logo for your company or for your specific product or brand?\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Please write the exact name you would like to appear in your logo.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Would you like to include a tagline with your logo? If so, please enter your tagline exactly as you would like it to be.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please describe your products / services and the industry it belongs to. (ie: Software Company, Food Manufacturing, etc.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Do you have an old logo or identity that you’ve been using? If yes, why are you making a change? Please attach your old logo.\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Do you have any existing Website? Please type the URL link.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the most important application of your logo? (ie: Business Cards, Promotional Products, Building signage, Truck, T-shirt, Website, etc.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Who are your target market, its geographical location and their age level?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Would you like a symbol or a logotype? (Symbol – This is an icon or graphical representation alongside – i.e.apple. // Logotype – it’s within the name itself or sometime refer to type-face…- i.e. Nokia logo.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Please indicate the style you want for your new identity. i.e.: Corporate, Cartoony, Fun , Elegant, Classic, Bold, Serious or High Tech\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Do you have any color preference or existing corporate colors you want to follow?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who are your competitors and what do you think about their logos?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Things or images that you DEFINITELY want to see in your logo? (e.g. \\\"I want to see a camera illustration in my logo\\\") I’d like to see one execution that uses a line drawing of two books lying flat on their side, one on top of the other, so that the spines form the shape of a “B.” This shape would stand for the B in my first name. See drawing below:\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Things or images that you do NOT want to see in your logo? (e.g. \\\"I do not want to see a house or any triangular shape”)\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Any more information you would like to add?\",\"grid\":12,\"model\":\"\"}]',30,3,4,0,'2021-11-16 13:25:35','2021-11-16 13:25:35'),
(3,'test','[{\"type\":\"heading\",\"label\":\"LOGO DESIGN BRIEF\"},{\"type\":\"breaker\"},{\"type\":\"textbox\",\"label\":\"Do you need a logo for your company or for your specific product or brand?\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Please write the exact name you would like to appear in your logo.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Would you like to include a tagline with your logo? If so, please enter your tagline exactly as you would like it to be.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please describe your products / services and the industry it belongs to. (ie: Software Company, Food Manufacturing, etc.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Do you have an old logo or identity that you’ve been using? If yes, why are you making a change? Please attach your old logo.\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Do you have any existing Website? Please type the URL link.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the most important application of your logo? (ie: Business Cards, Promotional Products, Building signage, Truck, T-shirt, Website, etc.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Who are your target market, its geographical location and their age level?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Would you like a symbol or a logotype? (Symbol – This is an icon or graphical representation alongside – i.e.apple. // Logotype – it’s within the name itself or sometime refer to type-face…- i.e. Nokia logo.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Please indicate the style you want for your new identity. i.e.: Corporate, Cartoony, Fun , Elegant, Classic, Bold, Serious or High Tech\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Do you have any color preference or existing corporate colors you want to follow?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who are your competitors and what do you think about their logos?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Things or images that you DEFINITELY want to see in your logo? (e.g. \\\"I want to see a camera illustration in my logo\\\") I’d like to see one execution that uses a line drawing of two books lying flat on their side, one on top of the other, so that the spines form the shape of a “B.” This shape would stand for the B in my first name. See drawing below:\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Things or images that you do NOT want to see in your logo? (e.g. \\\"I do not want to see a house or any triangular shape”)\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Any more information you would like to add?\",\"grid\":12,\"model\":\"\"}]',31,17,9,0,'2021-11-16 14:00:41','2021-11-16 14:00:41'),
(4,'test','[{\"type\":\"heading\",\"label\":\"LOGO DESIGN BRIEF\"},{\"type\":\"breaker\"},{\"type\":\"textbox\",\"label\":\"Do you need a logo for your company or for your specific product or brand?\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Please write the exact name you would like to appear in your logo.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Would you like to include a tagline with your logo? If so, please enter your tagline exactly as you would like it to be.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please describe your products / services and the industry it belongs to. (ie: Software Company, Food Manufacturing, etc.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Do you have an old logo or identity that you’ve been using? If yes, why are you making a change? Please attach your old logo.\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Do you have any existing Website? Please type the URL link.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the most important application of your logo? (ie: Business Cards, Promotional Products, Building signage, Truck, T-shirt, Website, etc.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Who are your target market, its geographical location and their age level?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Would you like a symbol or a logotype? (Symbol – This is an icon or graphical representation alongside – i.e.apple. // Logotype – it’s within the name itself or sometime refer to type-face…- i.e. Nokia logo.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Please indicate the style you want for your new identity. i.e.: Corporate, Cartoony, Fun , Elegant, Classic, Bold, Serious or High Tech\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Do you have any color preference or existing corporate colors you want to follow?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who are your competitors and what do you think about their logos?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Things or images that you DEFINITELY want to see in your logo? (e.g. \\\"I want to see a camera illustration in my logo\\\") I’d like to see one execution that uses a line drawing of two books lying flat on their side, one on top of the other, so that the spines form the shape of a “B.” This shape would stand for the B in my first name. See drawing below:\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Things or images that you do NOT want to see in your logo? (e.g. \\\"I do not want to see a house or any triangular shape”)\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Any more information you would like to add?\",\"grid\":12,\"model\":\"\"}]',31,17,9,0,'2021-11-16 14:01:33','2021-11-16 14:01:33'),
(5,'tt','[{\"type\":\"heading\",\"label\":\"LOGO DESIGN BRIEF\"},{\"type\":\"breaker\"},{\"type\":\"textbox\",\"label\":\"Do you need a logo for your company or for your specific product or brand?\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Please write the exact name you would like to appear in your logo.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Would you like to include a tagline with your logo? If so, please enter your tagline exactly as you would like it to be.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please describe your products / services and the industry it belongs to. (ie: Software Company, Food Manufacturing, etc.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Do you have an old logo or identity that you’ve been using? If yes, why are you making a change? Please attach your old logo.\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Do you have any existing Website? Please type the URL link.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the most important application of your logo? (ie: Business Cards, Promotional Products, Building signage, Truck, T-shirt, Website, etc.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Who are your target market, its geographical location and their age level?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Would you like a symbol or a logotype? (Symbol – This is an icon or graphical representation alongside – i.e.apple. // Logotype – it’s within the name itself or sometime refer to type-face…- i.e. Nokia logo.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Please indicate the style you want for your new identity. i.e.: Corporate, Cartoony, Fun , Elegant, Classic, Bold, Serious or High Tech\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Do you have any color preference or existing corporate colors you want to follow?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who are your competitors and what do you think about their logos?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Things or images that you DEFINITELY want to see in your logo? (e.g. \\\"I want to see a camera illustration in my logo\\\") I’d like to see one execution that uses a line drawing of two books lying flat on their side, one on top of the other, so that the spines form the shape of a “B.” This shape would stand for the B in my first name. See drawing below:\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Things or images that you do NOT want to see in your logo? (e.g. \\\"I do not want to see a house or any triangular shape”)\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Any more information you would like to add?\",\"grid\":12,\"model\":\"\"}]',31,17,9,0,'2021-11-16 14:01:55','2021-11-16 14:01:55'),
(6,'test','[{\"type\":\"heading\",\"label\":\"LOGO DESIGN BRIEF\"},{\"type\":\"breaker\"},{\"type\":\"textbox\",\"label\":\"Do you need a logo for your company or for your specific product or brand?\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Please write the exact name you would like to appear in your logo.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Would you like to include a tagline with your logo? If so, please enter your tagline exactly as you would like it to be.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please describe your products / services and the industry it belongs to. (ie: Software Company, Food Manufacturing, etc.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Do you have an old logo or identity that you’ve been using? If yes, why are you making a change? Please attach your old logo.\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Do you have any existing Website? Please type the URL link.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the most important application of your logo? (ie: Business Cards, Promotional Products, Building signage, Truck, T-shirt, Website, etc.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Who are your target market, its geographical location and their age level?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Would you like a symbol or a logotype? (Symbol – This is an icon or graphical representation alongside – i.e.apple. // Logotype – it’s within the name itself or sometime refer to type-face…- i.e. Nokia logo.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Please indicate the style you want for your new identity. i.e.: Corporate, Cartoony, Fun , Elegant, Classic, Bold, Serious or High Tech\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Do you have any color preference or existing corporate colors you want to follow?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who are your competitors and what do you think about their logos?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Things or images that you DEFINITELY want to see in your logo? (e.g. \\\"I want to see a camera illustration in my logo\\\") I’d like to see one execution that uses a line drawing of two books lying flat on their side, one on top of the other, so that the spines form the shape of a “B.” This shape would stand for the B in my first name. See drawing below:\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Things or images that you do NOT want to see in your logo? (e.g. \\\"I do not want to see a house or any triangular shape”)\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Any more information you would like to add?\",\"grid\":12,\"model\":\"\"}]',31,17,9,0,'2021-11-16 14:02:50','2021-11-16 14:02:50'),
(7,'test','[{\"type\":\"heading\",\"label\":\"LOGO DESIGN BRIEF\"},{\"type\":\"breaker\"},{\"type\":\"textbox\",\"label\":\"Do you need a logo for your company or for your specific product or brand?\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Please write the exact name you would like to appear in your logo.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Would you like to include a tagline with your logo? If so, please enter your tagline exactly as you would like it to be.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please describe your products / services and the industry it belongs to. (ie: Software Company, Food Manufacturing, etc.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Do you have an old logo or identity that you’ve been using? If yes, why are you making a change? Please attach your old logo.\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Do you have any existing Website? Please type the URL link.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the most important application of your logo? (ie: Business Cards, Promotional Products, Building signage, Truck, T-shirt, Website, etc.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Who are your target market, its geographical location and their age level?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Would you like a symbol or a logotype? (Symbol – This is an icon or graphical representation alongside – i.e.apple. // Logotype – it’s within the name itself or sometime refer to type-face…- i.e. Nokia logo.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Please indicate the style you want for your new identity. i.e.: Corporate, Cartoony, Fun , Elegant, Classic, Bold, Serious or High Tech\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Do you have any color preference or existing corporate colors you want to follow?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who are your competitors and what do you think about their logos?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Things or images that you DEFINITELY want to see in your logo? (e.g. \\\"I want to see a camera illustration in my logo\\\") I’d like to see one execution that uses a line drawing of two books lying flat on their side, one on top of the other, so that the spines form the shape of a “B.” This shape would stand for the B in my first name. See drawing below:\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Things or images that you do NOT want to see in your logo? (e.g. \\\"I do not want to see a house or any triangular shape”)\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Any more information you would like to add?\",\"grid\":12,\"model\":\"\"}]',31,17,9,0,'2021-11-16 14:03:03','2021-11-16 14:03:03'),
(8,'12','[{\"type\":\"heading\",\"label\":\"LOGO DESIGN BRIEF\"},{\"type\":\"breaker\"},{\"type\":\"textbox\",\"label\":\"Do you need a logo for your company or for your specific product or brand?\",\"grid\":12,\"model\":\"123123\"},{\"type\":\"textbox\",\"label\":\"Please write the exact name you would like to appear in your logo.\",\"grid\":12,\"model\":\"123123\"},{\"type\":\"description\",\"label\":\"Would you like to include a tagline with your logo? If so, please enter your tagline exactly as you would like it to be.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please describe your products / services and the industry it belongs to. (ie: Software Company, Food Manufacturing, etc.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Do you have an old logo or identity that you’ve been using? If yes, why are you making a change? Please attach your old logo.\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Do you have any existing Website? Please type the URL link.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the most important application of your logo? (ie: Business Cards, Promotional Products, Building signage, Truck, T-shirt, Website, etc.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Who are your target market, its geographical location and their age level?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Would you like a symbol or a logotype? (Symbol – This is an icon or graphical representation alongside – i.e.apple. // Logotype – it’s within the name itself or sometime refer to type-face…- i.e. Nokia logo.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Please indicate the style you want for your new identity. i.e.: Corporate, Cartoony, Fun , Elegant, Classic, Bold, Serious or High Tech\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Do you have any color preference or existing corporate colors you want to follow?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who are your competitors and what do you think about their logos?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Things or images that you DEFINITELY want to see in your logo? (e.g. \\\"I want to see a camera illustration in my logo\\\") I’d like to see one execution that uses a line drawing of two books lying flat on their side, one on top of the other, so that the spines form the shape of a “B.” This shape would stand for the B in my first name. See drawing below:\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Things or images that you do NOT want to see in your logo? (e.g. \\\"I do not want to see a house or any triangular shape”)\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Any more information you would like to add?\",\"grid\":12,\"model\":\"\"}]',31,17,9,1,'2021-11-16 14:35:36','2021-11-16 14:03:46'),
(9,'Sales Form','[{\"type\":\"heading\",\"label\":\"Sales form\"},{\"type\":\"breaker\"},{\"type\":\"textbox\",\"label\":\"SEO Name\",\"grid\":6,\"model\":\"Have me Answer this?\",\"explanation\":\"<p>This is for SEO Purposes</p><ul><li>ABC</li><li>EFG</li><li>IJK</li><li>LMNO</li></ul>\"},{\"type\":\"textbox\",\"label\":\"SEO TITLE\",\"grid\":12,\"model\":\"Your answer is her\",\"explanation\":\"\"}]',31,17,9,1,'2021-11-16 14:44:38','2021-11-16 14:44:15'),
(10,'test','[{\"type\":\"heading\",\"label\":\"LOGO DESIGN BRIEF\"},{\"type\":\"breaker\"},{\"type\":\"textbox\",\"label\":\"Do you need a logo for your company or for your specific product or brand?\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Please write the exact name you would like to appear in your logo.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Would you like to include a tagline with your logo? If so, please enter your tagline exactly as you would like it to be.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please describe your products / services and the industry it belongs to. (ie: Software Company, Food Manufacturing, etc.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Do you have an old logo or identity that you’ve been using? If yes, why are you making a change? Please attach your old logo.\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Do you have any existing Website? Please type the URL link.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the most important application of your logo? (ie: Business Cards, Promotional Products, Building signage, Truck, T-shirt, Website, etc.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Who are your target market, its geographical location and their age level?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Would you like a symbol or a logotype? (Symbol – This is an icon or graphical representation alongside – i.e.apple. // Logotype – it’s within the name itself or sometime refer to type-face…- i.e. Nokia logo.)\",\"grid\":12,\"model\":\"\"},{\"type\":\"textbox\",\"label\":\"Please indicate the style you want for your new identity. i.e.: Corporate, Cartoony, Fun , Elegant, Classic, Bold, Serious or High Tech\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Do you have any color preference or existing corporate colors you want to follow?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who are your competitors and what do you think about their logos?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Things or images that you DEFINITELY want to see in your logo? (e.g. \\\"I want to see a camera illustration in my logo\\\") I’d like to see one execution that uses a line drawing of two books lying flat on their side, one on top of the other, so that the spines form the shape of a “B.” This shape would stand for the B in my first name. See drawing below:\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Things or images that you do NOT want to see in your logo? (e.g. \\\"I do not want to see a house or any triangular shape”)\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Any more information you would like to add?\",\"grid\":12,\"model\":\"\"}]',32,19,4,0,'2021-11-16 15:14:32','2021-11-16 13:25:35'),
(11,'Questionair','[{\"type\":\"heading\",\"label\":\"CONTENT WRITING QUESTIONNAIRE\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"How many pages do we need to write? Please specify the exact name of the Pages that are needed; e.g. Home Page, About Us, Products, Services, Portfolio, Location Map, Contact, etc.\",\"grid\":12,\"model\":\"123123\"},{\"type\":\"heading\",\"label\":\"Information about Your Company\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"Briefly describe your business or organization in one or two short paragraphs. Describe the culture and personality of your business.\",\"grid\":12,\"model\":\"65465\"},{\"type\":\"description\",\"label\":\"Provide relevant Information about your organization, its history, the People, their expertise and resumes (if possible).\",\"grid\":12,\"model\":\"123123123\"},{\"type\":\"description\",\"label\":\"What is the Vision and Mission or Purpose of your business or Organization?\",\"grid\":12,\"model\":\"1231231\"},{\"type\":\"description\",\"label\":\"What makes you stand out and sets your company apart from others in your industry? Is there a unique aspect to your company that you could use as a point of differentiation? What is your unique selling point?\",\"grid\":12,\"model\":\"23123123123\"},{\"type\":\"description\",\"label\":\"Who is your competition? (Please list at least 3-5 competitors).\",\"grid\":12,\"model\":\"123123123\"},{\"type\":\"heading\",\"label\":\"Information about Your Services:\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"List down the services and products you offer\",\"grid\":12,\"model\":\"123123123\"},{\"type\":\"description\",\"label\":\"What makes your business, products and services unique? What is your competitive advantage? Why do customers choose you?\",\"grid\":12,\"model\":\"123123\"},{\"type\":\"description\",\"label\":\"How exactly your services enhance the lives, or solve the problems, of your target consumers?\",\"grid\":12,\"model\":\"123123\"},{\"type\":\"description\",\"label\":\"Please list 10 to 20 top keywords or phrases people use to search for your products or services\",\"grid\":12,\"model\":\"123123\"},{\"type\":\"description\",\"label\":\"Describe your ideal visitor; give us as much relevant information as you can about your target audience. Describe the typical consumer you are addressing and please include – where possible – details such as age, gender, income, interests, habits, lifestyle and locality\",\"grid\":12,\"model\":\"123123123\"},{\"type\":\"description\",\"label\":\"What are your customers trying to accomplish by using your products or services?\",\"grid\":12,\"model\":\"123123\\n123123\\nasdasdasd\"},{\"type\":\"description\",\"label\":\"What is your target location: International, national, regional or local?\",\"grid\":12,\"model\":\"123123asd123\\n1asdasd123123\\n123123123\"}]',36,33,14,1,'2021-11-16 16:05:06','2021-11-16 16:04:31'),
(12,'Sendiong to user','[{\"type\":\"heading\",\"label\":\"CONTENT WRITING QUESTIONNAIRE\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"How many pages do we need to write? Please specify the exact name of the Pages that are needed; e.g. Home Page, About Us, Products, Services, Portfolio, Location Map, Contact, etc.\",\"grid\":12,\"model\":\"test\"},{\"type\":\"heading\",\"label\":\"Information about Your Company\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"Briefly describe your business or organization in one or two short paragraphs. Describe the culture and personality of your business.\",\"grid\":12,\"model\":\"asdasdasd\"},{\"type\":\"description\",\"label\":\"Provide relevant Information about your organization, its history, the People, their expertise and resumes (if possible).\",\"grid\":12,\"model\":\"asdasdasdasd\"},{\"type\":\"description\",\"label\":\"What is the Vision and Mission or Purpose of your business or Organization?\",\"grid\":12,\"model\":\"asdasdasd\"},{\"type\":\"description\",\"label\":\"What makes you stand out and sets your company apart from others in your industry? Is there a unique aspect to your company that you could use as a point of differentiation? What is your unique selling point?\",\"grid\":12,\"model\":\"asdasdasd\"},{\"type\":\"description\",\"label\":\"Who is your competition? (Please list at least 3-5 competitors).\",\"grid\":12,\"model\":\"asdasdasd\"},{\"type\":\"heading\",\"label\":\"Information about Your Services:\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"List down the services and products you offer\",\"grid\":12,\"model\":\"asdasdasd\"},{\"type\":\"description\",\"label\":\"What makes your business, products and services unique? What is your competitive advantage? Why do customers choose you?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"How exactly your services enhance the lives, or solve the problems, of your target consumers?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please list 10 to 20 top keywords or phrases people use to search for your products or services\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Describe your ideal visitor; give us as much relevant information as you can about your target audience. Describe the typical consumer you are addressing and please include – where possible – details such as age, gender, income, interests, habits, lifestyle and locality\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What are your customers trying to accomplish by using your products or services?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is your target location: International, national, regional or local?\",\"grid\":12,\"model\":\"\"}]',38,34,14,1,'2021-11-16 19:33:09','2021-11-16 19:32:34'),
(13,'Content Question','[{\"type\":\"heading\",\"label\":\"CONTENT WRITING QUESTIONNAIRE\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"How many pages do we need to write? Please specify the exact name of the Pages that are needed; e.g. Home Page, About Us, Products, Services, Portfolio, Location Map, Contact, etc.\",\"grid\":12,\"model\":\"123123\"},{\"type\":\"heading\",\"label\":\"Information about Your Company\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"Briefly describe your business or organization in one or two short paragraphs. Describe the culture and personality of your business.\",\"grid\":12,\"model\":\"123123\"},{\"type\":\"description\",\"label\":\"Provide relevant Information about your organization, its history, the People, their expertise and resumes (if possible).\",\"grid\":12,\"model\":\"123123\"},{\"type\":\"description\",\"label\":\"What is the Vision and Mission or Purpose of your business or Organization?\",\"grid\":12,\"model\":\"123\"},{\"type\":\"description\",\"label\":\"What makes you stand out and sets your company apart from others in your industry? Is there a unique aspect to your company that you could use as a point of differentiation? What is your unique selling point?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who is your competition? (Please list at least 3-5 competitors).\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Services:\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"List down the services and products you offer\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes your business, products and services unique? What is your competitive advantage? Why do customers choose you?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"How exactly your services enhance the lives, or solve the problems, of your target consumers?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please list 10 to 20 top keywords or phrases people use to search for your products or services\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Describe your ideal visitor; give us as much relevant information as you can about your target audience. Describe the typical consumer you are addressing and please include – where possible – details such as age, gender, income, interests, habits, lifestyle and locality\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What are your customers trying to accomplish by using your products or services?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is your target location: International, national, regional or local?\",\"grid\":12,\"model\":\"\"}]',40,34,14,1,'2021-11-25 23:56:40','2021-11-25 23:48:29'),
(14,'Questions','[{\"type\":\"heading\",\"label\":\"CONTENT WRITING QUESTIONNAIRE\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"How many pages do we need to write? Please specify the exact name of the Pages that are needed; e.g. Home Page, About Us, Products, Services, Portfolio, Location Map, Contact, etc.\",\"grid\":12,\"model\":\"12312\"},{\"type\":\"heading\",\"label\":\"Information about Your Company\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"Briefly describe your business or organization in one or two short paragraphs. Describe the culture and personality of your business.\",\"grid\":12,\"model\":\"123123\"},{\"type\":\"description\",\"label\":\"Provide relevant Information about your organization, its history, the People, their expertise and resumes (if possible).\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the Vision and Mission or Purpose of your business or Organization?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes you stand out and sets your company apart from others in your industry? Is there a unique aspect to your company that you could use as a point of differentiation? What is your unique selling point?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who is your competition? (Please list at least 3-5 competitors).\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Services:\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"List down the services and products you offer\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes your business, products and services unique? What is your competitive advantage? Why do customers choose you?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"How exactly your services enhance the lives, or solve the problems, of your target consumers?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please list 10 to 20 top keywords or phrases people use to search for your products or services\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Describe your ideal visitor; give us as much relevant information as you can about your target audience. Describe the typical consumer you are addressing and please include – where possible – details such as age, gender, income, interests, habits, lifestyle and locality\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What are your customers trying to accomplish by using your products or services?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is your target location: International, national, regional or local?\",\"grid\":12,\"model\":\"\"}]',42,32,14,1,'2021-11-26 04:17:06','2021-11-26 04:16:35'),
(15,'test','[{\"type\":\"heading\",\"label\":\"CONTENT WRITING QUESTIONNAIRE\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"How many pages do we need to write? Please specify the exact name of the Pages that are needed; e.g. Home Page, About Us, Products, Services, Portfolio, Location Map, Contact, etc.\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Company\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"Briefly describe your business or organization in one or two short paragraphs. Describe the culture and personality of your business.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Provide relevant Information about your organization, its history, the People, their expertise and resumes (if possible).\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the Vision and Mission or Purpose of your business or Organization?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes you stand out and sets your company apart from others in your industry? Is there a unique aspect to your company that you could use as a point of differentiation? What is your unique selling point?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who is your competition? (Please list at least 3-5 competitors).\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Services:\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"List down the services and products you offer\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes your business, products and services unique? What is your competitive advantage? Why do customers choose you?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"How exactly your services enhance the lives, or solve the problems, of your target consumers?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please list 10 to 20 top keywords or phrases people use to search for your products or services\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Describe your ideal visitor; give us as much relevant information as you can about your target audience. Describe the typical consumer you are addressing and please include – where possible – details such as age, gender, income, interests, habits, lifestyle and locality\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What are your customers trying to accomplish by using your products or services?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is your target location: International, national, regional or local?\",\"grid\":12,\"model\":\"test\"}]',45,33,14,1,'2021-12-24 04:29:13','2021-12-24 04:22:09'),
(16,'test','[{\"type\":\"heading\",\"label\":\"CONTENT WRITING QUESTIONNAIRE\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"How many pages do we need to write? Please specify the exact name of the Pages that are needed; e.g. Home Page, About Us, Products, Services, Portfolio, Location Map, Contact, etc.\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Company\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"Briefly describe your business or organization in one or two short paragraphs. Describe the culture and personality of your business.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Provide relevant Information about your organization, its history, the People, their expertise and resumes (if possible).\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the Vision and Mission or Purpose of your business or Organization?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes you stand out and sets your company apart from others in your industry? Is there a unique aspect to your company that you could use as a point of differentiation? What is your unique selling point?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who is your competition? (Please list at least 3-5 competitors).\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Services:\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"List down the services and products you offer\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes your business, products and services unique? What is your competitive advantage? Why do customers choose you?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"How exactly your services enhance the lives, or solve the problems, of your target consumers?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please list 10 to 20 top keywords or phrases people use to search for your products or services\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Describe your ideal visitor; give us as much relevant information as you can about your target audience. Describe the typical consumer you are addressing and please include – where possible – details such as age, gender, income, interests, habits, lifestyle and locality\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What are your customers trying to accomplish by using your products or services?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is your target location: International, national, regional or local?\",\"grid\":12,\"model\":\"\"}]',45,33,14,0,'2021-12-24 04:22:16','2021-12-24 04:22:16'),
(17,'test','[{\"type\":\"heading\",\"label\":\"CONTENT WRITING QUESTIONNAIRE\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"How many pages do we need to write? Please specify the exact name of the Pages that are needed; e.g. Home Page, About Us, Products, Services, Portfolio, Location Map, Contact, etc.\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Company\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"Briefly describe your business or organization in one or two short paragraphs. Describe the culture and personality of your business.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Provide relevant Information about your organization, its history, the People, their expertise and resumes (if possible).\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the Vision and Mission or Purpose of your business or Organization?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes you stand out and sets your company apart from others in your industry? Is there a unique aspect to your company that you could use as a point of differentiation? What is your unique selling point?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who is your competition? (Please list at least 3-5 competitors).\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Services:\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"List down the services and products you offer\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes your business, products and services unique? What is your competitive advantage? Why do customers choose you?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"How exactly your services enhance the lives, or solve the problems, of your target consumers?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please list 10 to 20 top keywords or phrases people use to search for your products or services\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Describe your ideal visitor; give us as much relevant information as you can about your target audience. Describe the typical consumer you are addressing and please include – where possible – details such as age, gender, income, interests, habits, lifestyle and locality\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What are your customers trying to accomplish by using your products or services?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is your target location: International, national, regional or local?\",\"grid\":12,\"model\":\"\"}]',45,33,14,0,'2021-12-24 04:22:30','2021-12-24 04:22:30'),
(18,'test','[{\"type\":\"heading\",\"label\":\"CONTENT WRITING QUESTIONNAIRE\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"How many pages do we need to write? Please specify the exact name of the Pages that are needed; e.g. Home Page, About Us, Products, Services, Portfolio, Location Map, Contact, etc.\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Company\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"Briefly describe your business or organization in one or two short paragraphs. Describe the culture and personality of your business.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Provide relevant Information about your organization, its history, the People, their expertise and resumes (if possible).\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the Vision and Mission or Purpose of your business or Organization?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes you stand out and sets your company apart from others in your industry? Is there a unique aspect to your company that you could use as a point of differentiation? What is your unique selling point?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who is your competition? (Please list at least 3-5 competitors).\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Services:\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"List down the services and products you offer\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes your business, products and services unique? What is your competitive advantage? Why do customers choose you?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"How exactly your services enhance the lives, or solve the problems, of your target consumers?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please list 10 to 20 top keywords or phrases people use to search for your products or services\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Describe your ideal visitor; give us as much relevant information as you can about your target audience. Describe the typical consumer you are addressing and please include – where possible – details such as age, gender, income, interests, habits, lifestyle and locality\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What are your customers trying to accomplish by using your products or services?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is your target location: International, national, regional or local?\",\"grid\":12,\"model\":\"\"}]',45,33,14,0,'2021-12-24 04:23:08','2021-12-24 04:23:08'),
(19,'test','[{\"type\":\"heading\",\"label\":\"CONTENT WRITING QUESTIONNAIRE\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"How many pages do we need to write? Please specify the exact name of the Pages that are needed; e.g. Home Page, About Us, Products, Services, Portfolio, Location Map, Contact, etc.\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Company\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"Briefly describe your business or organization in one or two short paragraphs. Describe the culture and personality of your business.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Provide relevant Information about your organization, its history, the People, their expertise and resumes (if possible).\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the Vision and Mission or Purpose of your business or Organization?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes you stand out and sets your company apart from others in your industry? Is there a unique aspect to your company that you could use as a point of differentiation? What is your unique selling point?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who is your competition? (Please list at least 3-5 competitors).\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Services:\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"List down the services and products you offer\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes your business, products and services unique? What is your competitive advantage? Why do customers choose you?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"How exactly your services enhance the lives, or solve the problems, of your target consumers?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please list 10 to 20 top keywords or phrases people use to search for your products or services\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Describe your ideal visitor; give us as much relevant information as you can about your target audience. Describe the typical consumer you are addressing and please include – where possible – details such as age, gender, income, interests, habits, lifestyle and locality\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What are your customers trying to accomplish by using your products or services?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is your target location: International, national, regional or local?\",\"grid\":12,\"model\":\"\"}]',45,33,14,0,'2021-12-24 04:23:26','2021-12-24 04:23:26'),
(20,'test','[{\"type\":\"heading\",\"label\":\"CONTENT WRITING QUESTIONNAIRE\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"How many pages do we need to write? Please specify the exact name of the Pages that are needed; e.g. Home Page, About Us, Products, Services, Portfolio, Location Map, Contact, etc.\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Company\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"Briefly describe your business or organization in one or two short paragraphs. Describe the culture and personality of your business.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Provide relevant Information about your organization, its history, the People, their expertise and resumes (if possible).\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the Vision and Mission or Purpose of your business or Organization?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes you stand out and sets your company apart from others in your industry? Is there a unique aspect to your company that you could use as a point of differentiation? What is your unique selling point?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who is your competition? (Please list at least 3-5 competitors).\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Services:\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"List down the services and products you offer\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes your business, products and services unique? What is your competitive advantage? Why do customers choose you?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"How exactly your services enhance the lives, or solve the problems, of your target consumers?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please list 10 to 20 top keywords or phrases people use to search for your products or services\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Describe your ideal visitor; give us as much relevant information as you can about your target audience. Describe the typical consumer you are addressing and please include – where possible – details such as age, gender, income, interests, habits, lifestyle and locality\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What are your customers trying to accomplish by using your products or services?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is your target location: International, national, regional or local?\",\"grid\":12,\"model\":\"\"}]',45,33,14,0,'2021-12-24 04:23:35','2021-12-24 04:23:35'),
(21,'test','[{\"type\":\"heading\",\"label\":\"CONTENT WRITING QUESTIONNAIRE\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"How many pages do we need to write? Please specify the exact name of the Pages that are needed; e.g. Home Page, About Us, Products, Services, Portfolio, Location Map, Contact, etc.\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Company\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"Briefly describe your business or organization in one or two short paragraphs. Describe the culture and personality of your business.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Provide relevant Information about your organization, its history, the People, their expertise and resumes (if possible).\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the Vision and Mission or Purpose of your business or Organization?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes you stand out and sets your company apart from others in your industry? Is there a unique aspect to your company that you could use as a point of differentiation? What is your unique selling point?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who is your competition? (Please list at least 3-5 competitors).\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Services:\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"List down the services and products you offer\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes your business, products and services unique? What is your competitive advantage? Why do customers choose you?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"How exactly your services enhance the lives, or solve the problems, of your target consumers?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please list 10 to 20 top keywords or phrases people use to search for your products or services\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Describe your ideal visitor; give us as much relevant information as you can about your target audience. Describe the typical consumer you are addressing and please include – where possible – details such as age, gender, income, interests, habits, lifestyle and locality\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What are your customers trying to accomplish by using your products or services?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is your target location: International, national, regional or local?\",\"grid\":12,\"model\":\"\"}]',45,33,14,0,'2021-12-24 04:23:55','2021-12-24 04:23:55'),
(22,'test','[{\"type\":\"heading\",\"label\":\"CONTENT WRITING QUESTIONNAIRE\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"How many pages do we need to write? Please specify the exact name of the Pages that are needed; e.g. Home Page, About Us, Products, Services, Portfolio, Location Map, Contact, etc.\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Company\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"Briefly describe your business or organization in one or two short paragraphs. Describe the culture and personality of your business.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Provide relevant Information about your organization, its history, the People, their expertise and resumes (if possible).\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the Vision and Mission or Purpose of your business or Organization?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes you stand out and sets your company apart from others in your industry? Is there a unique aspect to your company that you could use as a point of differentiation? What is your unique selling point?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who is your competition? (Please list at least 3-5 competitors).\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Services:\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"List down the services and products you offer\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes your business, products and services unique? What is your competitive advantage? Why do customers choose you?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"How exactly your services enhance the lives, or solve the problems, of your target consumers?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please list 10 to 20 top keywords or phrases people use to search for your products or services\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Describe your ideal visitor; give us as much relevant information as you can about your target audience. Describe the typical consumer you are addressing and please include – where possible – details such as age, gender, income, interests, habits, lifestyle and locality\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What are your customers trying to accomplish by using your products or services?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is your target location: International, national, regional or local?\",\"grid\":12,\"model\":\"\"}]',45,33,14,0,'2021-12-24 04:24:25','2021-12-24 04:24:25'),
(23,'test','[{\"type\":\"heading\",\"label\":\"CONTENT WRITING QUESTIONNAIRE\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"How many pages do we need to write? Please specify the exact name of the Pages that are needed; e.g. Home Page, About Us, Products, Services, Portfolio, Location Map, Contact, etc.\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Company\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"Briefly describe your business or organization in one or two short paragraphs. Describe the culture and personality of your business.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Provide relevant Information about your organization, its history, the People, their expertise and resumes (if possible).\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the Vision and Mission or Purpose of your business or Organization?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes you stand out and sets your company apart from others in your industry? Is there a unique aspect to your company that you could use as a point of differentiation? What is your unique selling point?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who is your competition? (Please list at least 3-5 competitors).\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Services:\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"List down the services and products you offer\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes your business, products and services unique? What is your competitive advantage? Why do customers choose you?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"How exactly your services enhance the lives, or solve the problems, of your target consumers?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please list 10 to 20 top keywords or phrases people use to search for your products or services\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Describe your ideal visitor; give us as much relevant information as you can about your target audience. Describe the typical consumer you are addressing and please include – where possible – details such as age, gender, income, interests, habits, lifestyle and locality\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What are your customers trying to accomplish by using your products or services?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is your target location: International, national, regional or local?\",\"grid\":12,\"model\":\"\"}]',45,33,14,0,'2021-12-24 04:24:34','2021-12-24 04:24:34'),
(24,'test','[{\"type\":\"heading\",\"label\":\"CONTENT WRITING QUESTIONNAIRE\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"How many pages do we need to write? Please specify the exact name of the Pages that are needed; e.g. Home Page, About Us, Products, Services, Portfolio, Location Map, Contact, etc.\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Company\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"Briefly describe your business or organization in one or two short paragraphs. Describe the culture and personality of your business.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Provide relevant Information about your organization, its history, the People, their expertise and resumes (if possible).\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the Vision and Mission or Purpose of your business or Organization?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes you stand out and sets your company apart from others in your industry? Is there a unique aspect to your company that you could use as a point of differentiation? What is your unique selling point?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who is your competition? (Please list at least 3-5 competitors).\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Services:\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"List down the services and products you offer\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes your business, products and services unique? What is your competitive advantage? Why do customers choose you?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"How exactly your services enhance the lives, or solve the problems, of your target consumers?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please list 10 to 20 top keywords or phrases people use to search for your products or services\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Describe your ideal visitor; give us as much relevant information as you can about your target audience. Describe the typical consumer you are addressing and please include – where possible – details such as age, gender, income, interests, habits, lifestyle and locality\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What are your customers trying to accomplish by using your products or services?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is your target location: International, national, regional or local?\",\"grid\":12,\"model\":\"\"}]',45,33,14,0,'2021-12-24 04:24:48','2021-12-24 04:24:48'),
(25,'test','[{\"type\":\"heading\",\"label\":\"CONTENT WRITING QUESTIONNAIRE\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"How many pages do we need to write? Please specify the exact name of the Pages that are needed; e.g. Home Page, About Us, Products, Services, Portfolio, Location Map, Contact, etc.\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Company\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"Briefly describe your business or organization in one or two short paragraphs. Describe the culture and personality of your business.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Provide relevant Information about your organization, its history, the People, their expertise and resumes (if possible).\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the Vision and Mission or Purpose of your business or Organization?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes you stand out and sets your company apart from others in your industry? Is there a unique aspect to your company that you could use as a point of differentiation? What is your unique selling point?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who is your competition? (Please list at least 3-5 competitors).\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Services:\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"List down the services and products you offer\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes your business, products and services unique? What is your competitive advantage? Why do customers choose you?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"How exactly your services enhance the lives, or solve the problems, of your target consumers?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please list 10 to 20 top keywords or phrases people use to search for your products or services\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Describe your ideal visitor; give us as much relevant information as you can about your target audience. Describe the typical consumer you are addressing and please include – where possible – details such as age, gender, income, interests, habits, lifestyle and locality\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What are your customers trying to accomplish by using your products or services?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is your target location: International, national, regional or local?\",\"grid\":12,\"model\":\"\"}]',45,33,14,0,'2021-12-24 04:24:53','2021-12-24 04:24:53'),
(26,'test','[{\"type\":\"heading\",\"label\":\"CONTENT WRITING QUESTIONNAIRE\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"How many pages do we need to write? Please specify the exact name of the Pages that are needed; e.g. Home Page, About Us, Products, Services, Portfolio, Location Map, Contact, etc.\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Company\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"Briefly describe your business or organization in one or two short paragraphs. Describe the culture and personality of your business.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Provide relevant Information about your organization, its history, the People, their expertise and resumes (if possible).\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the Vision and Mission or Purpose of your business or Organization?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes you stand out and sets your company apart from others in your industry? Is there a unique aspect to your company that you could use as a point of differentiation? What is your unique selling point?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who is your competition? (Please list at least 3-5 competitors).\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Services:\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"List down the services and products you offer\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes your business, products and services unique? What is your competitive advantage? Why do customers choose you?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"How exactly your services enhance the lives, or solve the problems, of your target consumers?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please list 10 to 20 top keywords or phrases people use to search for your products or services\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Describe your ideal visitor; give us as much relevant information as you can about your target audience. Describe the typical consumer you are addressing and please include – where possible – details such as age, gender, income, interests, habits, lifestyle and locality\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What are your customers trying to accomplish by using your products or services?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is your target location: International, national, regional or local?\",\"grid\":12,\"model\":\"\"}]',45,33,14,0,'2021-12-24 04:25:35','2021-12-24 04:25:35'),
(27,'test','[{\"type\":\"heading\",\"label\":\"CONTENT WRITING QUESTIONNAIRE\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"How many pages do we need to write? Please specify the exact name of the Pages that are needed; e.g. Home Page, About Us, Products, Services, Portfolio, Location Map, Contact, etc.\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Company\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"Briefly describe your business or organization in one or two short paragraphs. Describe the culture and personality of your business.\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Provide relevant Information about your organization, its history, the People, their expertise and resumes (if possible).\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is the Vision and Mission or Purpose of your business or Organization?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes you stand out and sets your company apart from others in your industry? Is there a unique aspect to your company that you could use as a point of differentiation? What is your unique selling point?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Who is your competition? (Please list at least 3-5 competitors).\",\"grid\":12,\"model\":\"\"},{\"type\":\"heading\",\"label\":\"Information about Your Services:\"},{\"type\":\"breaker\"},{\"type\":\"description\",\"label\":\"List down the services and products you offer\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What makes your business, products and services unique? What is your competitive advantage? Why do customers choose you?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"How exactly your services enhance the lives, or solve the problems, of your target consumers?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Please list 10 to 20 top keywords or phrases people use to search for your products or services\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"Describe your ideal visitor; give us as much relevant information as you can about your target audience. Describe the typical consumer you are addressing and please include – where possible – details such as age, gender, income, interests, habits, lifestyle and locality\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What are your customers trying to accomplish by using your products or services?\",\"grid\":12,\"model\":\"\"},{\"type\":\"description\",\"label\":\"What is your target location: International, national, regional or local?\",\"grid\":12,\"model\":\"\"}]',45,33,14,0,'2021-12-24 04:30:59','2021-12-24 04:30:59'),
(28,'test','[{\"type\":\"heading\",\"label\":\"Competitors\"},{\"type\":\"textbox\",\"label\":\"Web 1\",\"grid\":6,\"model\":\"123123\",\"explanation\":\"\"},{\"type\":\"textbox\",\"label\":\"Web 2\",\"grid\":6,\"model\":\"123\",\"explanation\":\"\"},{\"type\":\"textbox\",\"label\":\"Web 4\",\"grid\":6,\"model\":\"123\",\"explanation\":\"\"},{\"type\":\"textbox\",\"label\":\"Web 3\",\"grid\":6,\"model\":\"123\",\"explanation\":\"\"},{\"type\":\"breaker\"},{\"type\":\"heading\",\"label\":\"Social Media\"},{\"type\":\"breaker\"},{\"type\":\"textbox\",\"label\":\"FB\",\"grid\":6,\"model\":\"\",\"explanation\":\"\"},{\"type\":\"textbox\",\"label\":\"Linked\",\"grid\":6,\"model\":\"\",\"explanation\":\"\"}]',47,34,15,1,'2021-12-24 04:53:23','2021-12-24 04:52:16');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `company_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL DEFAULT 0,
  `department_id` int(11) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `remember_token` varchar(255) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_company_index` (`company_id`),
  KEY `user_role_id_index` (`role_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`),
  CONSTRAINT `users_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4;

/*Data for the table `users` */

insert  into `users`(`id`,`name`,`email`,`password`,`created_at`,`updated_at`,`company_id`,`role_id`,`department_id`,`country`,`city`,`state`,`phone`,`remember_token`,`email_verified_at`) values 
(2,'Super Admin','admin@crm.com','$2y$10$ciRzvjIOmC3bf9ZcmIw1JuVb286SxZbAJDvqe8jnsgpEWDLanacSa','2021-10-12 18:07:37','2021-11-30 02:30:05',1,1,2,NULL,NULL,NULL,NULL,NULL,NULL),
(3,'Soft Cube','company@softcube.com','$2y$10$41qAKuxphEMLOLYRWp8WEOwMB3x9y69qPJf6qBu9uw8PRPv0Z9PRG','2021-10-22 14:49:58','2021-11-30 02:30:05',1,2,2,NULL,NULL,NULL,NULL,NULL,NULL),
(4,'Brand Owner','brandowner@gmail.com','$2y$10$zeSbB.N9ZeD/X8JxZAfjWe5MEka826SlwCbg4B4lnpE2gtKDe9Rcm','2021-10-25 12:05:51','2021-11-30 02:30:05',1,4,2,NULL,NULL,NULL,NULL,NULL,NULL),
(5,'Brand Owner','brandsupport@gmail.com','$2y$10$3JZCgeni1webVQ0SJgpJlu5wOb.KVeMwR9pIMw2rHx3Y4j8RArUmG','2021-10-25 12:06:16','2021-11-30 02:30:05',1,5,2,NULL,NULL,NULL,NULL,NULL,NULL),
(6,'Production','production@gmail.com','$2y$10$3JZCgeni1webVQ0SJgpJlu5wOb.KVeMwR9pIMw2rHx3Y4j8RArUmG','2021-10-25 12:06:16','2021-11-30 02:30:05',18,7,2,NULL,NULL,NULL,NULL,NULL,NULL),
(17,'Company','company@crm.com','$2y$10$K8YJhoKOZovL.yKuR.YrDu3xOL1fqz3lJuwXYUWs.ccATSECmMkcG','2021-10-28 14:40:27','2021-11-30 02:30:05',17,2,2,NULL,NULL,NULL,NULL,NULL,NULL),
(18,'test','test@gmail.com','$2y$10$Ad5OoyCldFkxs55KxkJ8sui1jP4EonU/GuuO5.hqnD9AAKkbz/Q12','2021-10-28 18:38:18','2021-11-30 02:30:05',17,5,2,NULL,NULL,NULL,NULL,NULL,NULL),
(19,'test','test@gmail.com','$2y$10$JmbWGCSc..DB0gdBtfXgJul3CTlvqBqMheKEFqg/LBN02P3d7WbOW','2021-10-28 18:38:45','2021-11-30 02:30:05',17,5,2,NULL,NULL,NULL,NULL,NULL,NULL),
(20,'test','test2@gmail.com','$2y$10$UcCW.ASyHqEg.EyP1Ba3yuGDxqsEks2x5Bf9.nQZk5IgI4gaZRDZ2','2021-10-28 18:39:46','2021-11-30 02:30:05',17,5,2,NULL,NULL,NULL,NULL,NULL,NULL),
(21,'support','test@support.com','$2y$10$yMMAAuIkIf2K3EUR7JmreuCQGdcyinu57zoTu./Q.NEFmnB6gaoLi','2021-10-28 18:47:34','2021-11-30 02:30:05',1,5,2,NULL,NULL,NULL,NULL,NULL,NULL),
(24,'test company','companytest@gmail.com','$2y$10$w08evdr3BCMj9pHz3g/Jp.SkKv.031DDGzd9kr.PVfOIfWJyZhzTK','2021-10-28 23:32:30','2021-11-30 02:30:05',18,2,2,NULL,NULL,NULL,NULL,NULL,NULL),
(25,'tcbowner','tcbowner@gmail.com','$2y$10$TYr/1op6we3ZP4y4MHm94uReXPoqPpYv2amcGFNilDTRGhGBX9mFG','2021-10-28 23:37:14','2021-11-30 02:30:05',18,5,2,NULL,NULL,NULL,NULL,NULL,NULL),
(26,'Customer','customer@gmail.com','$2y$10$FSA3VoRa.IwlxSxOCIDlCem7S4J7TYdbTlTSjJWN1xqQGH.EqPJZ6','2021-10-30 02:53:37','2021-11-30 02:30:05',18,6,2,NULL,NULL,NULL,NULL,NULL,NULL),
(30,'junaid yrux','jesper@gmail.com','$2y$10$d0Sj0M.8biOSXLl/5vAt7.wkT/rZrB5MmHfIjbxz6mCJqceQHRSQ2','2021-11-13 03:49:55','2021-11-30 02:30:05',1,6,2,NULL,NULL,NULL,NULL,NULL,NULL),
(31,'lead llead','lead1@gmail.com','$2y$10$7/XWQAeBeVk6UzxlpVq3MOe2u54VCvPi6XSeV6eH74iJge6E/mPgK','2021-11-16 13:54:19','2021-11-30 02:30:05',17,6,2,NULL,NULL,NULL,NULL,NULL,NULL),
(32,'New Company 3','company3@gmail.com','$2y$10$wne6/Jb.pblUyILiojt64ewqCyhhkGS3IQOihV0ExGpD8uINKoyly','2021-11-16 15:13:41','2021-11-30 02:30:05',19,2,2,NULL,NULL,NULL,NULL,NULL,NULL),
(33,'Brand Owner 3','brandowner3@gmail.com','$2y$10$w7olRl0i./QYlXGH.be.buw68uZ3sgK7sAuVZbrUh/QYnr3YY7H6a','2021-11-16 15:16:20','2021-11-30 02:30:05',19,4,2,NULL,NULL,NULL,NULL,NULL,NULL),
(34,'Brand Sales 3','brandsales3@gmail.com','$2y$10$YhNVFRozlIqHsJuSEVqUD..LZSnBeht0KLYgXt4pUlNo53eOJNwQS','2021-11-16 15:16:36','2021-11-30 02:30:05',19,4,2,NULL,NULL,NULL,NULL,NULL,NULL),
(35,'Brand Support 3','brandsupport3@gmail.com','$2y$10$mHj2hkFEhMVwxhQJsfD5i.k0xN3tvt5joBrm50QEB65Q9J8bGgZfa','2021-11-16 15:16:48','2021-11-30 02:30:05',19,5,2,NULL,NULL,NULL,NULL,NULL,NULL),
(36,'N C','nclead@gmail.com','$2y$10$2dP17NSNDG7wGHb2uMIBxOVMWWF5uq6xkaiJXPyWYwLEZAVGa1tOa','2021-11-16 16:04:08','2021-11-30 02:30:05',19,6,2,NULL,NULL,NULL,NULL,NULL,NULL),
(37,'Design','design3@gmail.com','$2y$10$UGYhklpDerbClNzBUztE4OEGKQkyA19DCiVgFGqPdYpCnfKEdFIDq','2021-11-16 16:20:07','2021-11-30 02:30:05',19,7,2,NULL,NULL,NULL,NULL,NULL,NULL),
(38,'test test','nhlead3@gmail.com','$2y$10$ir2KAIdLE.HMj9zpsYseAeRk1uABQ/nDjdLHH1w4ZVFi.7LmcfJUe','2021-11-16 19:30:35','2021-11-30 02:30:05',19,6,2,NULL,NULL,NULL,NULL,NULL,NULL),
(39,'N C','nclead@gmail.com','$2y$10$WnFv16RCk2P1PIcAnWSw.O8lX7.eEbOBxDNeH8.I8/Ob.cWNSfuXC','2021-11-25 05:02:56','2021-11-30 02:30:05',19,6,2,NULL,NULL,NULL,NULL,NULL,NULL),
(40,'Jhon Doe','nhnnlead@gmail.com','$2y$10$YlBZRHbbwvCUOvFe786g6uYCGn04Hp4rN8UGxHgCDjw6KHU6cGWv.','2021-11-25 23:46:42','2021-11-30 02:30:05',19,6,2,NULL,NULL,NULL,NULL,NULL,NULL),
(41,'Jhon Doe','nhnnlead@gmail.com','$2y$10$amJWWF6UjnqK8QfdUHCMTeztmw1xVuXgjP4fNnhRT2hOX.0ifC2lq','2021-11-26 04:03:54','2021-11-30 02:30:05',19,6,2,NULL,NULL,NULL,NULL,NULL,NULL),
(42,'lead new new','newlead32@gmail.com','$2y$10$3hqiLhNOPK3HxyBMV2FEB.yTydM.zUpqU5p.ITWEOv./3JyUP2bke','2021-11-26 04:16:09','2021-11-30 02:30:05',19,6,2,NULL,NULL,NULL,NULL,NULL,NULL),
(43,'Development','development@gmail.com','$2y$10$HDJdCFR4JYRzwXA5ZR16Wu/fcKLCXkyWZHf2Dc3x/2fkqXaoaJnc6','2021-12-01 04:11:56','2021-12-01 04:11:56',19,7,5,NULL,NULL,NULL,NULL,NULL,NULL),
(44,'Sabih Shehzad','sabih@gmail.com','$2y$10$yC9j3eTmiHL3Is.S4dmJ.ebiLNYiB.dX1pIgle6neMw7YvhnjL/Qy','2021-12-01 06:17:48','2021-12-01 06:17:49',19,8,5,NULL,NULL,NULL,NULL,NULL,NULL),
(45,'test 123','asdasd21@gmail.com','$2y$10$Rpu6IVyrb3pYzt3IrVOTeuHk2skPE4vjObIp1j9lub0KjDut8BI8m','2021-12-21 23:39:47','2021-12-21 23:39:47',19,6,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(47,'tt tt','ttlead13@gmail.com','$2y$10$a.4ZAIYjNDoZaefoOjeaeuiggvphDqBFtx9fyxn/hgQONCxpurC1.','2021-12-24 04:50:37','2021-12-24 04:50:37',19,6,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(48,'marketing','marketing@gmail.com','$2y$10$ct/3RW7bYMImRCDOWdBXpuGSzO00N3IJRg9kkye8mbdjyV32AaWhG','2022-01-20 04:28:54','2022-01-20 04:30:25',19,9,8,NULL,NULL,NULL,NULL,NULL,NULL),
(49,'12313 ','lead4@gmail.com','$2y$10$tcQx2zRMo/QCSYPrGfMJzuoq1TbY6va2KZJdFDniRgWyE2OzipD6e','2022-01-20 04:51:17','2022-01-20 04:51:17',1,6,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(50,'customer lastname','customernew1@gmail.com','$2y$10$9fBAm0hbzHFuqzRqWMUhE.2z90JTP0fHcc25Ujrum1ErlEGHKZgCa','2022-01-20 04:52:22','2022-01-20 04:52:22',19,6,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
(51,'123 123','123123t@gmail.com','$2y$10$ERUugIK1zgrINdKthinRf.R3gFxin.yFTyMY.7Ex8vo7a8jAMfj0.','2022-01-20 04:56:30','2022-01-20 04:56:30',19,6,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/* Trigger structure for table `brands` */

DELIMITER $$

/*!50003 DROP TRIGGER*//*!50032 IF EXISTS */ /*!50003 `brandcodeuppercase` */$$

/*!50003 CREATE */ /*!50017 DEFINER = 'root'@'localhost' */ /*!50003 TRIGGER `brandcodeuppercase` BEFORE INSERT ON `brands` FOR EACH ROW SET new.brand_code=UPPER(new.brand_code) */$$


DELIMITER ;

/* Trigger structure for table `brands` */

DELIMITER $$

/*!50003 DROP TRIGGER*//*!50032 IF EXISTS */ /*!50003 `brandcodeuppercaseupdate` */$$

/*!50003 CREATE */ /*!50017 DEFINER = 'root'@'localhost' */ /*!50003 TRIGGER `brandcodeuppercaseupdate` BEFORE UPDATE ON `brands` FOR EACH ROW SET new.brand_code=UPPER(new.brand_code) */$$


DELIMITER ;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
