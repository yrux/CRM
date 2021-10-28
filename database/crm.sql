-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 28, 2021 at 07:22 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crm`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `brand_name` varchar(255) NOT NULL,
  `brand_code` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `company_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `brand_name`, `brand_code`, `created_at`, `updated_at`, `company_id`) VALUES
(4, 'The Creative Web Design', 'TCWB', '2021-10-20 14:20:02', '2021-10-20 14:21:25', 1),
(6, 'Design Proficient', 'DP', '2021-10-20 09:33:32', '2021-10-20 09:33:39', 1),
(8, 'Design Proficient', 'DP-US', '2021-10-28 10:20:35', '2021-10-28 10:24:49', 1),
(9, 'Octalogo', 'OC US', '2021-10-28 10:25:26', '2021-10-28 10:25:58', 17);

--
-- Triggers `brands`
--
DELIMITER $$
CREATE TRIGGER `brandcodeuppercase` BEFORE INSERT ON `brands` FOR EACH ROW SET new.brand_code=UPPER(new.brand_code)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `brandcodeuppercaseupdate` BEFORE UPDATE ON `brands` FOR EACH ROW SET new.brand_code=UPPER(new.brand_code)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `brand_users`
--

CREATE TABLE `brand_users` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `is_owner` tinyint(4) NOT NULL DEFAULT 0,
  `user_email` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brand_users`
--

INSERT INTO `brand_users` (`id`, `user_id`, `brand_id`, `is_owner`, `user_email`, `user_name`, `created_at`, `updated_at`) VALUES
(2, 2, 4, 1, 'test@tcwdd.com', 'test', '2021-10-22 11:13:06', '2021-10-25 06:51:27'),
(4, 4, 4, 1, 'brandowner@gmail.com', 'Brand Owner', '2021-10-25 07:05:51', '2021-10-25 07:05:51'),
(5, 5, 4, 1, 'brandsupport@gmail.com', 'Brand Owner', '2021-10-25 07:06:16', '2021-10-25 07:06:16');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id` int(11) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Table to handle all companies';

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id`, `company_name`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'SoftCube', 0, '2021-10-12 12:54:49', '2021-10-12 12:54:49'),
(3, 'YruX', 0, '2021-10-20 07:39:15', '2021-10-20 07:39:15'),
(4, 'test', 0, '2021-10-20 07:41:21', '2021-10-20 07:53:45'),
(5, 'new company', 0, '2021-10-20 07:42:50', '2021-10-20 07:42:50'),
(6, 'YruX1', 0, '2021-10-28 06:08:06', '2021-10-28 06:08:06'),
(7, 'YruX2', 0, '2021-10-28 06:09:38', '2021-10-28 06:09:38'),
(17, 'Company', 17, '2021-10-28 09:40:27', '2021-10-28 09:40:27');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `files`
--

CREATE TABLE `files` (
  `id` int(11) NOT NULL,
  `url` varchar(555) NOT NULL,
  `fileable_id` int(11) NOT NULL,
  `fileable_type` varchar(255) NOT NULL,
  `table_name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `files`
--

INSERT INTO `files` (`id`, `url`, `fileable_id`, `fileable_type`, `table_name`, `created_at`, `updated_at`) VALUES
(1, 'projects/Xyzcpyz8ryCF4L2QrtAclgHs0YUFACkM2AHYnHKA.jpg', 1, 'App\\Models\\{Project}', 'projects', '2021-10-26 01:21:45', '2021-10-26 01:21:45'),
(2, 'projects/6l3BRP62FR392vGoC16aVhRrelo0cdV1Od21S6dL.png', 1, 'App\\Models\\{Project}', 'projects', '2021-10-26 01:21:45', '2021-10-26 01:21:45'),
(3, 'projects/8dqEGIVbgj1W2FDnPj82frzchrSKuvizokrpTXTO.jpg', 1, 'App\\Models\\{Project}', 'projects', '2021-10-26 01:21:45', '2021-10-26 01:21:45'),
(4, 'projects/0NF8fo6LMhvR0uzmJXTY2oKUGLoxEUQ8rd5KBKNL.jpg', 1, 'App\\Models$plural_table', 'projects', '2021-10-26 01:22:05', '2021-10-26 01:22:05'),
(5, 'projects/Q8tNx65Dg5Aw4PG4MGPK8bubR4nWLX0L0M8JksB4.png', 1, 'App\\Models$plural_table', 'projects', '2021-10-26 01:22:05', '2021-10-26 01:22:05'),
(6, 'projects/VoH56B3ty590o4OFtsqYSoUGzV9PrPYAM8qWK8Al.jpg', 1, 'App\\Models$plural_table', 'projects', '2021-10-26 01:22:05', '2021-10-26 01:22:05'),
(7, 'projects/CLgzFqNfw2rj8bUAkuPiRG4ZoEfoVnZAveN4tEgP.jpg', 1, 'App\\ModelsProject', 'projects', '2021-10-26 01:22:14', '2021-10-26 01:22:14'),
(8, 'projects/8hhb3zxiFcgLdIGb35b88kPq2CFcU2YqbbkYulUb.png', 1, 'App\\ModelsProject', 'projects', '2021-10-26 01:22:14', '2021-10-26 01:22:14'),
(9, 'projects/EADz0y52JVaOdP1L8b0bArDkhhaBi9SmfU1fOVwN.jpg', 1, 'App\\ModelsProject', 'projects', '2021-10-26 01:22:14', '2021-10-26 01:22:14'),
(10, 'projects/aCXLP6j0q6QhFA90HG1h01lf1gUmgq33AbJrgpwC.jpg', 1, 'App\\Models\\{Project}', 'projects', '2021-10-26 01:22:24', '2021-10-26 01:22:24'),
(11, 'projects/uHYA0mBmU1KETizvMUG6sofVt8pQHgUTFhuw2F5l.png', 1, 'App\\Models\\{Project}', 'projects', '2021-10-26 01:22:24', '2021-10-26 01:22:24'),
(12, 'projects/aG8BRGxK5k433iKDhVK2kRDL8EIvO3CIxRSgtv3e.jpg', 1, 'App\\Models\\{Project}', 'projects', '2021-10-26 01:22:24', '2021-10-26 01:22:24'),
(13, 'projects/J8dUOCOcuXbnd4X6KmvjPHvvntfSdFYuAxmtesax.jpg', 1, 'App\\Models\\Project', 'projects', '2021-10-26 01:23:10', '2021-10-26 01:23:10'),
(14, 'projects/k2n3p52QvJd6Edkp9zrhxzexp5joSbVFKPNuhdJt.png', 1, 'App\\Models\\Project', 'projects', '2021-10-26 01:23:10', '2021-10-26 01:23:10'),
(15, 'projects/WwJXXbjOIYTQroJUa9DMANftIqKhVxR1OMeqy3sg.jpg', 1, 'App\\Models\\Project', 'projects', '2021-10-26 01:23:10', '2021-10-26 01:23:10'),
(16, 'projects/iXOoFVoguuCNvfBMfiL5AzMPoqfSBS1ZoGemmrcG.jpg', 2, 'App\\Models\\Project', 'projects', '2021-10-26 01:27:50', '2021-10-26 01:27:50'),
(17, 'projects/y5tzljviVPOTH5bfvZ7VnMs7c4eSoIr2PQZJFF6l.png', 2, 'App\\Models\\Project', 'projects', '2021-10-26 01:27:50', '2021-10-26 01:27:50'),
(18, 'projects/u9ivTC9kcBc9QZPaUIFQNlUORsPwJdUWBIOWKeU1.jpg', 2, 'App\\Models\\Project', 'projects', '2021-10-26 01:27:50', '2021-10-26 01:27:50'),
(19, 'projects/cs0Q9DLZTLCpgUYwIvgvI8CvLAM6vNUZOiF1csQg.jpg', 2, 'App\\Models\\Project', 'projects', '2021-10-26 01:27:53', '2021-10-26 01:27:53'),
(20, 'projects/n7ATC56UgarDw2kZWOXKx5EgdHxdDRbWJ47Oo1xV.png', 2, 'App\\Models\\Project', 'projects', '2021-10-26 01:27:53', '2021-10-26 01:27:53'),
(21, 'projects/7OGAD2qUDhHEu7ErQwc9GSwBnsa7cIRd1cbC6zyB.jpg', 2, 'App\\Models\\Project', 'projects', '2021-10-26 01:27:53', '2021-10-26 01:27:53'),
(22, 'project_tasks/2iu4ODZS3LWDW7Lkfv1BnoC6Ow0nVJaMOTCk9xzf.jpg', 1, 'App\\Models\\ProjectTask', 'project_tasks', '2021-10-26 01:33:35', '2021-10-26 01:33:35'),
(23, 'project_tasks/Zgm8HVW0UAMnTAbuSJ9hieU2j4QP3y3MSaGlr19L.png', 1, 'App\\Models\\ProjectTask', 'project_tasks', '2021-10-26 01:33:35', '2021-10-26 01:33:35'),
(24, 'project_tasks/Y27Fap6QjaGUpGGROem0jRQoNrWXbzMTYphVOa7n.jpg', 1, 'App\\Models\\ProjectTask', 'project_tasks', '2021-10-26 01:33:35', '2021-10-26 01:33:35'),
(25, 'project_tasks/JsttrKyRugZsdp3Eu4iWHxv0OQAVEHMzGbBuLoNM.jpg', 1, 'App\\Models\\ProjectTask', 'project_tasks', '2021-10-26 01:36:34', '2021-10-26 01:36:34'),
(26, 'project_tasks/Dw2GLBHfN0RP628lqF3qbJ2GMZ16jRcoMAuCGdVA.jpg', 1, 'App\\Models\\ProjectTask', 'project_tasks', '2021-10-26 01:38:17', '2021-10-26 01:38:17'),
(27, 'company/tshoYI1YHjjx1vO7No2VpNF86PHqAm5JmRtuyacR.png', 15, 'App\\Models\\Company', 'company', '2021-10-28 08:20:51', '2021-10-28 08:20:51'),
(30, 'company/uXN3mKVtJfsBt5nI2AgKpJaSrNbCm4TBNWk2PsTi.png', 16, 'App\\Models\\Company', 'company', '2021-10-28 09:24:09', '2021-10-28 09:24:09'),
(32, 'users/FqfRrUKCiXq4Jv9kKgrzGnOUH2Gem5PEZRMzpNws.png', 2, 'App\\Models\\User', 'users', '2021-10-28 09:38:33', '2021-10-28 09:38:33'),
(33, 'company/N3ndyRSgdaD3valCKKWec2tj7RUOuxPFZyJLKTfP.png', 17, 'App\\Models\\Company', 'company', '2021-10-28 09:40:27', '2021-10-28 09:40:27'),
(34, 'brands/zqEVZsETf3bw4TAj4HQJi4O4Ap1WdG8A85eqyqmb.png', 7, 'App\\Models\\Brand', 'brands', '2021-10-28 10:20:07', '2021-10-28 10:20:07'),
(37, 'brands/w4xyKePScKPYTzMOzy4VAVVC0ktkyQg3lU3Mr1Ho.png', 8, 'App\\Models\\Brand', 'brands', '2021-10-28 10:24:50', '2021-10-28 10:24:50'),
(40, 'brands/8VQJYqF7pL55bfXMDy2BYQXmthuFCnToEaiLBb90.png', 9, 'App\\Models\\Brand', 'brands', '2021-10-28 10:25:59', '2021-10-28 10:25:59');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(9, '2014_10_12_100000_create_password_resets_table', 1),
(10, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(11, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(12, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(13, '2016_06_01_000004_create_oauth_clients_table', 1),
(14, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(15, '2019_08_19_000000_create_failed_jobs_table', 1),
(16, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('0829de5f5a403e35c3f34c7522520fc383d541f5799c4dec6e6cbe613e2f44d0b3b5a6ad91a76cdf', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-28 09:39:13', '2021-10-28 09:39:13', '2022-04-28 14:39:13'),
('092b04ab270b0b2986258a42b78fc80d705f10016f746fdf4f7b4df0784934a164b2d54e38be5c95', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-28 06:07:47', '2021-10-28 06:07:47', '2022-04-28 11:07:46'),
('0f76dcbbc0fae9328d0e3a7a558c854fad261271dde6dd733cf0df06bd6c6403d096f837198ee1f7', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-12 11:39:45', '2021-10-12 11:39:45', '2022-04-12 16:39:45'),
('136469c8c3642e44f1b168829ddde368e2d27d172fe1e4528197c812ec224ccfec88fb6d259d12aa', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-26 08:47:12', '2021-10-26 08:47:12', '2022-04-26 13:47:11'),
('1390c0dd3cbfea9be47830756f7fb9d35bd2cb9ce8ff0fbeaa33bc85787bdf8cbd397723d4c5ae3f', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-22 09:58:36', '2021-10-22 09:58:36', '2022-04-22 14:58:36'),
('1a1f8eaa77bc3446901836381caaedf23c405ea48e5a6d2a2a544a36ceb025e0dcce15bd7cdec4a6', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-26 08:55:34', '2021-10-26 08:55:34', '2022-04-26 13:55:34'),
('22350313909524347974c0a1cd07c9a921d018dca6c7bca4245d0c4e3fd17ca5cc152677542f369c', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-26 04:32:26', '2021-10-26 04:32:26', '2022-04-26 09:32:26'),
('24cb3dd7486805da1d6a082d3ee2c18314b009fe9e8501ed82ea67a71444adee8b63b45daf1a577a', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-26 04:51:50', '2021-10-26 04:51:50', '2022-04-26 09:51:49'),
('349d576f0b93e721c2c38ca4c89524aacf75ce667f30f5fff5d8005a8f98b0480fc81cb6905dc354', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-26 04:51:45', '2021-10-26 04:51:45', '2022-04-26 09:51:44'),
('3a5257b35b6c754e9ef3a4667783a36b0d82570718ea9b03b1092d9c62f30d04afd39659dcee9341', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-26 08:43:59', '2021-10-26 08:43:59', '2022-04-26 13:43:59'),
('3af0cc37a8b790b89478a7468200c46778209986bb26a782589352f6f97c435ca04b663158970aac', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-20 07:31:47', '2021-10-20 07:31:47', '2022-04-20 12:31:44'),
('3ba7eca5936c948d6d4160f4cf6f29b6063e73cefba521329e19be32d07f2ef9cf7ebe8647ff3ee2', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-26 08:47:34', '2021-10-26 08:47:34', '2022-04-26 13:47:34'),
('3bf573b76009fe6518b085e629c442f504770727653f2db6453b70a68ad9c156f7acece522fd2288', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-12 11:39:06', '2021-10-12 11:39:06', '2022-04-12 16:39:06'),
('3c4a837d2d0a2df05fe95af0bbf15e3438c1ed363d22eddff0752511aad38e1cdb6c1015017e2522', 17, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-28 10:09:08', '2021-10-28 10:09:08', '2022-04-28 15:09:07'),
('3d52a41971ff57c6b6aae88d0f200900c1f27013ba5dd6d8c2e721790b0d562992956072bc06263b', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-20 07:49:22', '2021-10-20 07:49:22', '2022-04-20 12:49:22'),
('3e94f75c1e4a30ed4117da89c1b90ef1aa5e020846239f9835c60929dfbe121daed95f4e741c9368', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-12 11:43:31', '2021-10-12 11:43:31', '2022-04-12 16:43:31'),
('3fe6d0fddefeb313a005d0ccbc97b9f6ee993878e39192b905e7f6ad1a9f3630e10c0211eb369f44', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-26 08:47:46', '2021-10-26 08:47:46', '2022-04-26 13:47:46'),
('4b4f208ec87913f5de7f79f3d77a84d8864e40fde2a622b4e2c71b4577e39e3875dbef9ec25d4854', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-12 11:37:21', '2021-10-12 11:37:21', '2022-04-12 16:37:18'),
('54b5ebb4f1f92b215adaabc2595c3147b6fd3525bad28f091e16d8a07d5760b2a25b87fd7137e652', 3, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-22 09:50:35', '2021-10-22 09:50:35', '2022-04-22 14:50:34'),
('55262ac7ce99755fa871193e5811963ad74c7e3135a2e2fb9b889f20e445df877897a2ce8959ca13', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-12 11:41:31', '2021-10-12 11:41:31', '2022-04-12 16:41:30'),
('55384a6b855e55496fa9fdc983dc9e83fd5c12854810e4581cca644f0254a1ced7368c90c90da8af', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-26 04:34:14', '2021-10-26 04:34:14', '2022-04-26 09:34:14'),
('5ae54b16df276ff6a101e51a3052df4b25dc63bbbdc313c083fc584adf444ac5d229d02588cba559', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-26 04:32:52', '2021-10-26 04:32:52', '2022-04-26 09:32:52'),
('5b8a05a9c1de000081a27a9f7cdee15bad373a8ab038a0d225b6c48874ed1b564e15965477e98b95', 17, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-28 09:40:41', '2021-10-28 09:40:41', '2022-04-28 14:40:41'),
('5bc4cb4f93b4a2eb3ce03a1b1386eed8fb867e1832b92768a8a77a309f9d98f819ee908a4cf85af5', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-28 11:32:35', '2021-10-28 11:32:35', '2022-04-28 16:32:34'),
('5c8fd358a70858ca04ba519212b2eb8af795edb64cbbe06bb4136ac635815a5c2d2d8bf98a40756c', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-22 10:00:04', '2021-10-22 10:00:04', '2022-04-22 15:00:04'),
('6a8e4b9a65f96bcd5230fec543e0e77585bbc7b77ff3436067bc055f1653db36f8fe22734895bc78', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-26 04:27:15', '2021-10-26 04:27:15', '2022-04-26 09:27:15'),
('71a47291531d4f9b279780724521e67a45311cccd2117c39049b4d5742ed9bdeb5e097ef0fbab190', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-26 08:42:21', '2021-10-26 08:42:21', '2022-04-26 13:42:20'),
('7301ec5dd0c604c68977f009ef4f5bafdd33df1673983e5f794dd8ca9159755139d86b5025fe8748', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-26 08:44:55', '2021-10-26 08:44:55', '2022-04-26 13:44:55'),
('737043d6887153febecbb326dc53b38f13476ef8ede7e23a238d24d8d624bda9acc80c97ade95ef8', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-28 09:43:01', '2021-10-28 09:43:01', '2022-04-28 14:43:01'),
('777890fee8591160c7764c9a0c4d2832eb5ba01d9cfd3e0b8a7037df713a48a1d2fdfbcc7be25d04', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-22 09:59:56', '2021-10-22 09:59:56', '2022-04-22 14:59:56'),
('7be9038d5c01d33e85cbf1afd999f12734898f3382a721cc5107827dab0c989e736b57719545aa26', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-26 04:51:19', '2021-10-26 04:51:19', '2022-04-26 09:51:19'),
('869ae8747bee378b5db22a30d7160b21d82f7e4a54b75ec393e679ef22cc9a4edb540f255c993157', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-28 10:09:28', '2021-10-28 10:09:28', '2022-04-28 15:09:28'),
('8be153733650bc19c1a18d118d6142c8b51e351f3126db1542321c080342e853e8f3b1320eb2931e', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-28 06:37:51', '2021-10-28 06:37:51', '2022-04-28 11:37:51'),
('94f89e565a9161ddb6866642b1644a22f95dc2144fe42718f0ba2b1f4ae0d499d86d7a6b865f503e', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-25 10:23:05', '2021-10-25 10:23:05', '2022-04-25 15:23:05'),
('a1965dafc527d60579be7dc09fc6b03dd3918badf28d1d4a06ee891f0913ba19a7b109c5723530af', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-12 11:41:08', '2021-10-12 11:41:08', '2022-04-12 16:41:03'),
('af38d85c996e3b2e68be590057a519b3f70880d445d17c2890c0f4805ea3a958252d61c099613d48', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-26 04:26:48', '2021-10-26 04:26:48', '2022-04-26 09:26:48'),
('b12cb03f8c2a2927f4ad0ae029ef7a07a2341be9e59e4d0a7fb9cc5be8f27e3659e1b9e6670b9122', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-12 11:39:17', '2021-10-12 11:39:17', '2022-04-12 16:39:17'),
('b3de504777cd092a4e1db218e6b32fe985db4d33c7c1d3ef6e4bcc535c2ad711edbd9457f5322e0b', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-28 09:38:43', '2021-10-28 09:38:43', '2022-04-28 14:38:43'),
('b4b8cf0c57bc28072fea4471cfec44111647e58999c151c2ce71a9944cb4b51aa7c52603515a5e2a', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-28 06:19:51', '2021-10-28 06:19:51', '2022-04-28 11:19:51'),
('bd5bde4934c8ec94293cff223bbff3f35f7d87b6164aee28017a7fdb01fd550a7b6d6bd640da60c8', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-12 11:40:00', '2021-10-12 11:40:00', '2022-04-12 16:40:00'),
('c38745ff67b73da8a432836b8e8d89b8f8a7086186c91e6c12d790dfd456b5b2e71691820888351f', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-12 11:38:10', '2021-10-12 11:38:10', '2022-04-12 16:38:10'),
('c59b0c278186605a13f492f22bad66f9a949b9b4baadba8a51772e011010bf737afb36c6626697dd', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-12 11:37:51', '2021-10-12 11:37:51', '2022-04-12 16:37:50'),
('c67cf6a56074a59bfc61036220dc02206c1ac68bc1351ba44606ee2f07a4ad97027c2c631edd71a8', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-26 08:47:40', '2021-10-26 08:47:40', '2022-04-26 13:47:40'),
('c6ff35f4fb75a520c8e1c85badeb4d86909d360aaed7ae239f3627ba81c9d740fa51fdb44deeebf8', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-26 08:44:17', '2021-10-26 08:44:17', '2022-04-26 13:44:16'),
('c76633768f5778acce5bc3861236b30cee2de8d3aa0ec1f981980c89e9142124150aea596b1c3059', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-26 08:47:30', '2021-10-26 08:47:30', '2022-04-26 13:47:30'),
('c8ddb38c688c2a8b18e705e2c0b9fbdb37c8e5567e03a62e32ea18241d50c666e220c766a7b1d533', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-22 09:58:56', '2021-10-22 09:58:56', '2022-04-22 14:58:56'),
('d1d19056f8675a8ef20ef58e6ed52b2b4bcd59a0ac64a7e926a1ab52b979d3ca9c928fc1dae9c3f7', 17, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-28 10:25:09', '2021-10-28 10:25:09', '2022-04-28 15:25:09'),
('d4601b8317f1b5a1959022d8b9da977e3c86d1e62b622c59ad85ad5ead1a47d2db8e5d067bda4989', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-25 17:47:29', '2021-10-25 17:47:29', '2022-04-25 22:47:29'),
('d5e29a68287a53419c5ee196a312687c52eef104911d21409993a312a1663f2630d00bc15b12a38d', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-26 08:47:24', '2021-10-26 08:47:24', '2022-04-26 13:47:24'),
('d8a3eb2354823b6b436b5d15993ba915d360b9c9288f1445d29d9a3260d1ef913860aa7a28223798', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-26 08:45:16', '2021-10-26 08:45:16', '2022-04-26 13:45:16'),
('e4bca24d383cdb75d0c019f52f4fba6c1ab63437d7517bd15e44562b5b38811411e00aff41e7da7f', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-12 09:08:18', '2021-10-12 09:08:18', '2022-04-12 14:08:18'),
('ea040bec5ed98f506ff88ff8cb89b82b8f24a3020cc5d21385caf45d0aa52fab5f4d91327e5ec3bf', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-26 08:46:06', '2021-10-26 08:46:06', '2022-04-26 13:46:06'),
('ec5a63dad8e368cacdf8cb58aadb9d0b3a838a943733e460ad1467d72ec26ebe9c7ed3cd0675a2b7', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-12 09:09:43', '2021-10-12 09:09:43', '2022-04-12 14:09:43'),
('ed3409f49ec7d6b7bfc94b3e1e052e63044996be9e598c06a91d921f232c5b2cf95a0a6b6cb3bcbf', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-25 06:39:16', '2021-10-25 06:39:16', '2022-04-25 11:39:15'),
('fe4bde475f338caee5ee00a02ca99adaa289989e0ce26f78c6ffa4a805be9ba0024c936818185fc4', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-26 09:11:13', '2021-10-26 09:11:13', '2022-04-26 14:11:12');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
('949d9205-b060-4a02-b12c-d7b0c317359e', NULL, 'CRM Personal Access Client', 'xXERqNLRxOWft5PQI2krO9yYH788z7rNYSFQV51x', NULL, 'http://localhost', 1, 0, 0, '2021-10-12 08:20:06', '2021-10-12 08:20:06'),
('949d9205-b5c1-4fd9-b423-29b13b1911d7', NULL, 'CRM Password Grant Client', 'ig2Fl5riNe4EG7nmU0izugVzCSvhZI0hRvUXotSv', 'users', 'http://localhost', 0, 1, 0, '2021-10-12 08:20:06', '2021-10-12 08:20:06');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, '949d9205-b060-4a02-b12c-d7b0c317359e', '2021-10-12 08:20:06', '2021-10-12 08:20:06');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `title`, `updated_at`, `created_at`) VALUES
(1, 'company-list', 'Company Listing', '2021-10-12 12:36:14', '2021-10-12 12:36:14'),
(2, 'company-create', 'Company Create', '2021-10-12 12:36:14', '2021-10-12 12:36:14'),
(3, 'company-edit', 'Company Edit', '2021-10-12 12:36:38', '2021-10-12 12:36:38'),
(4, 'company-delete', 'Company Delete', '2021-10-12 12:36:38', '2021-10-12 12:36:38'),
(5, 'company-view', 'Company View', '2021-10-12 12:36:59', '2021-10-12 12:36:59'),
(6, 'brands-list', 'Brands Listing', '2021-10-12 12:46:13', '2021-10-12 12:46:13'),
(7, 'brands-create', 'Brands Create', '2021-10-12 12:46:13', '2021-10-12 12:46:13'),
(8, 'brands-edit', 'Brands Edit', '2021-10-12 12:46:13', '2021-10-12 12:46:13'),
(9, 'brands-delete', 'Brands Delete', '2021-10-12 12:46:13', '2021-10-12 12:46:13'),
(10, 'brands-view', 'Brands View', '2021-10-12 12:46:13', '2021-10-12 12:46:13'),
(11, 'users-list', 'Users List', '2021-10-20 15:52:07', '2021-10-20 15:52:07'),
(12, 'users-create', 'Users Create', '2021-10-20 15:52:17', '2021-10-20 15:52:17'),
(13, 'users-edit', 'Users Edit', '2021-10-20 15:52:24', '2021-10-20 15:52:24'),
(14, 'users-delete', 'Users Delete', '2021-10-20 15:53:00', '2021-10-20 15:52:29'),
(15, 'users-view', 'Users View', '2021-10-20 15:53:07', '2021-10-20 15:52:48'),
(16, 'brand-users-list', 'Brand Users List', '2021-10-20 15:52:07', '2021-10-20 15:52:07'),
(17, 'brand-users-create', 'Brand Users Create', '2021-10-20 15:52:17', '2021-10-20 15:52:17'),
(18, 'brand-users-edit', 'Brand Users Edit', '2021-10-20 15:52:24', '2021-10-20 15:52:24'),
(19, 'brand-users-delete', 'Brand Users Delete', '2021-10-20 15:53:00', '2021-10-20 15:52:29'),
(20, 'brand-users-view', 'Brand Users View', '2021-10-20 15:53:07', '2021-10-20 15:52:48'),
(21, 'project-list', 'Project List', '2021-10-20 15:52:07', '2021-10-20 15:52:07'),
(22, 'project-create', 'Project Create', '2021-10-20 15:52:17', '2021-10-20 15:52:17'),
(23, 'project-edit', 'Project Edit', '2021-10-20 15:52:24', '2021-10-20 15:52:24'),
(24, 'project-delete', 'Project Delete', '2021-10-20 15:53:00', '2021-10-20 15:52:29'),
(25, 'project-view', 'Project View', '2021-10-20 15:53:07', '2021-10-20 15:52:48'),
(26, 'task-list', 'Task List', '2021-10-20 15:52:07', '2021-10-20 15:52:07'),
(27, 'task-create', 'Task Create', '2021-10-20 15:52:17', '2021-10-20 15:52:17'),
(28, 'task-edit', 'Task Edit', '2021-10-20 15:52:24', '2021-10-20 15:52:24'),
(29, 'task-delete', 'Task Delete', '2021-10-20 15:53:00', '2021-10-20 15:52:29'),
(30, 'task-view', 'Task View', '2021-10-20 15:53:07', '2021-10-20 15:52:48');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `project_id` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0=pending,1=in progress,2=completed,3=refund,4=chargeback,5=live',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `company_id`, `brand_id`, `project_id`, `title`, `description`, `status`, `created_at`, `updated_at`) VALUES
(2, 1, 4, 'TCWB-1635175928-2', 'Test Project', '<p>test description</p>', 0, '2021-10-25 10:32:08', '2021-10-25 10:32:08'),
(3, 1, 4, 'TCWB-1635176496-3', 'Test Project', '<p>test description</p>', 0, '2021-10-25 10:41:36', '2021-10-25 10:41:36'),
(4, 1, 4, 'TCWB-1635176507-4', 'Test Project', '<p>test description</p>', 0, '2021-10-25 10:41:47', '2021-10-25 10:41:47'),
(5, 1, 4, 'TCWB-1635176516-5', 'Test Project', '<p>test description</p>', 0, '2021-10-25 10:41:56', '2021-10-25 10:41:56'),
(6, 1, 4, 'TCWB-1635176535-6', 'Test Project', '<p>test description</p>', 0, '2021-10-25 10:42:15', '2021-10-25 10:42:15'),
(7, 1, 4, 'TCWB-1635176593-7', 'Test Project', '<p>test description</p>', 0, '2021-10-25 10:43:13', '2021-10-25 10:43:13');

-- --------------------------------------------------------

--
-- Table structure for table `project_tasks`
--

CREATE TABLE `project_tasks` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `task_description` text DEFAULT NULL,
  `due_date` date NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0=opened,1=inprogress,2=closed/completed,3=onhold',
  `assiged_on` int(11) NOT NULL,
  `assigned_by` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `project_tag` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `project_tasks`
--

INSERT INTO `project_tasks` (`id`, `project_id`, `task_description`, `due_date`, `status`, `assiged_on`, `assigned_by`, `updated_at`, `created_at`, `project_tag`) VALUES
(1, 6, '<p>test</p>', '2021-04-19', 1, 6, 4, '2021-10-25 18:39:15', '2021-10-25 18:18:15', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `project_users`
--

CREATE TABLE `project_users` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `project_users`
--

INSERT INTO `project_users` (`id`, `user_id`, `role_id`, `project_id`, `created_at`, `updated_at`) VALUES
(1, 2, 1, 6, '2021-10-25 10:42:15', '2021-10-25 10:42:15'),
(2, 4, 4, 6, '2021-10-25 10:42:15', '2021-10-25 10:42:15'),
(3, 5, 5, 6, '2021-10-25 10:42:15', '2021-10-25 10:42:15'),
(4, 4, 4, 7, '2021-10-25 10:43:13', '2021-10-25 10:43:13'),
(5, 2, 1, 7, '2021-10-25 10:43:13', '2021-10-25 10:43:13'),
(6, 5, 5, 7, '2021-10-25 10:43:13', '2021-10-25 10:43:13'),
(7, 5, 5, 7, '2021-10-25 11:23:06', '2021-10-25 11:23:06'),
(8, 5, 5, 6, '2021-10-25 11:26:27', '2021-10-25 11:26:27'),
(9, 5, 5, 6, '2021-10-25 11:26:29', '2021-10-25 11:26:29'),
(10, 5, 5, 6, '2021-10-25 11:27:59', '2021-10-25 11:27:59'),
(11, 5, 5, 6, '2021-10-25 11:28:06', '2021-10-25 11:28:06');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `title`, `created_at`, `updated_at`) VALUES
(1, 'superadmin', 'Super Admin', '2021-10-12 12:35:14', '2021-10-12 12:35:14'),
(2, 'company', 'Company', '2021-10-12 12:35:14', '2021-10-12 12:35:14'),
(3, 'brand', 'Brand', '2021-10-25 11:30:33', '2021-10-25 13:17:32'),
(4, 'sales', 'Sales', '2021-10-25 11:31:22', '2021-10-25 11:31:22'),
(5, 'support', 'Support', '2021-10-25 11:31:22', '2021-10-25 11:31:22'),
(6, 'customer', 'Customer', '2021-10-25 13:17:42', '2021-10-25 13:17:42'),
(7, 'productionmanager', 'Production Manager', '2021-10-25 13:18:12', '2021-10-25 13:18:12'),
(8, 'developer', 'Developer', '2021-10-25 13:18:22', '2021-10-25 13:18:22');

-- --------------------------------------------------------

--
-- Table structure for table `roles_permissions`
--

CREATE TABLE `roles_permissions` (
  `id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles_permissions`
--

INSERT INTO `roles_permissions` (`id`, `role_id`, `permission_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2021-10-12 12:38:16', '2021-10-12 12:38:16'),
(2, 1, 2, '2021-10-12 12:38:16', '2021-10-12 12:38:16'),
(3, 1, 3, '2021-10-12 12:38:16', '2021-10-12 12:38:16'),
(4, 1, 1, '2021-10-12 12:38:16', '2021-10-12 12:38:16'),
(5, 1, 5, '2021-10-12 12:38:16', '2021-10-12 12:38:16'),
(6, 1, 6, '2021-10-12 12:47:41', '2021-10-12 12:47:41'),
(7, 1, 7, '2021-10-12 12:47:41', '2021-10-12 12:47:41'),
(8, 1, 8, '2021-10-12 12:47:41', '2021-10-12 12:47:41'),
(9, 1, 9, '2021-10-12 12:47:41', '2021-10-12 12:47:41'),
(10, 1, 10, '2021-10-12 12:47:41', '2021-10-12 12:47:41'),
(11, 2, 6, '2021-10-12 12:47:41', '2021-10-12 12:47:41'),
(12, 2, 7, '2021-10-12 12:47:41', '2021-10-12 12:47:41'),
(13, 2, 8, '2021-10-12 12:47:41', '2021-10-12 12:47:41'),
(14, 2, 9, '2021-10-12 12:47:41', '2021-10-12 12:47:41'),
(15, 2, 10, '2021-10-12 12:47:41', '2021-10-12 12:47:41'),
(16, 1, 11, '2021-10-20 16:01:29', '2021-10-20 16:01:29'),
(17, 1, 12, '2021-10-20 16:01:32', '2021-10-20 16:01:32'),
(18, 1, 13, '2021-10-20 16:01:35', '2021-10-20 16:01:35'),
(19, 1, 14, '2021-10-20 16:01:37', '2021-10-20 16:01:37'),
(20, 1, 15, '2021-10-20 16:01:40', '2021-10-20 16:01:40'),
(21, 3, 17, '2021-10-25 13:22:29', '2021-10-25 13:22:29'),
(22, 3, 19, '2021-10-25 13:22:29', '2021-10-25 13:22:29'),
(23, 3, 18, '2021-10-25 13:22:29', '2021-10-25 13:22:29'),
(24, 3, 16, '2021-10-25 13:22:29', '2021-10-25 13:22:29'),
(25, 3, 20, '2021-10-25 13:22:29', '2021-10-25 13:22:29'),
(26, 3, 22, '2021-10-25 13:42:13', '2021-10-25 13:42:13'),
(27, 3, 24, '2021-10-25 13:42:13', '2021-10-25 13:42:13'),
(28, 3, 23, '2021-10-25 13:42:13', '2021-10-25 13:42:13'),
(29, 3, 21, '2021-10-25 13:42:13', '2021-10-25 13:42:13'),
(30, 3, 25, '2021-10-25 13:42:13', '2021-10-25 13:42:13'),
(31, 4, 22, '2021-10-25 13:42:13', '2021-10-25 13:42:13'),
(32, 4, 24, '2021-10-25 13:42:13', '2021-10-25 13:42:13'),
(33, 4, 23, '2021-10-25 13:42:13', '2021-10-25 13:42:13'),
(34, 4, 21, '2021-10-25 13:42:13', '2021-10-25 13:42:13'),
(35, 4, 25, '2021-10-25 13:42:13', '2021-10-25 13:42:13'),
(36, 1, 4, '2021-10-28 12:20:05', '2021-10-28 12:20:05');

-- --------------------------------------------------------

--
-- Table structure for table `task_comments`
--

CREATE TABLE `task_comments` (
  `id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  `comment` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `task_comments`
--

INSERT INTO `task_comments` (`id`, `task_id`, `comment`, `user_id`, `updated_at`, `created_at`) VALUES
(1, 1, '<p>test</p>', 4, '2021-10-25 18:57:16', '2021-10-25 18:57:16'),
(2, 1, '<p>test</p>', 4, '2021-10-25 18:57:30', '2021-10-25 18:57:30');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `company_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL DEFAULT 0,
  `country` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `remember_token` varchar(255) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`, `company_id`, `role_id`, `country`, `city`, `state`, `phone`, `remember_token`, `email_verified_at`) VALUES
(2, 'Super Admin', 'admin@crm.com', '$2y$10$ciRzvjIOmC3bf9ZcmIw1JuVb286SxZbAJDvqe8jnsgpEWDLanacSa', '2021-10-12 13:07:37', '2021-10-28 09:38:50', 1, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'Soft Cube', 'company@softcube.com', '$2y$10$41qAKuxphEMLOLYRWp8WEOwMB3x9y69qPJf6qBu9uw8PRPv0Z9PRG', '2021-10-22 09:49:58', '2021-10-22 09:49:58', 1, 2, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 'Brand Owner', 'brandowner@gmail.com', '$2y$10$zeSbB.N9ZeD/X8JxZAfjWe5MEka826SlwCbg4B4lnpE2gtKDe9Rcm', '2021-10-25 07:05:51', '2021-10-25 07:05:51', 1, 4, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 'Brand Owner', 'brandsupport@gmail.com', '$2y$10$3JZCgeni1webVQ0SJgpJlu5wOb.KVeMwR9pIMw2rHx3Y4j8RArUmG', '2021-10-25 07:06:16', '2021-10-25 07:06:16', 1, 5, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 'Production', 'production@gmail.com', '$2y$10$3JZCgeni1webVQ0SJgpJlu5wOb.KVeMwR9pIMw2rHx3Y4j8RArUmG', '2021-10-25 07:06:16', '2021-10-25 07:06:16', 1, 7, NULL, NULL, NULL, NULL, NULL, NULL),
(17, 'Company', 'company@crm.com', '$2y$10$K8YJhoKOZovL.yKuR.YrDu3xOL1fqz3lJuwXYUWs.ccATSECmMkcG', '2021-10-28 09:40:27', '2021-10-28 09:40:27', 17, 2, NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indexes for table `brand_users`
--
ALTER TABLE `brand_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `brand_user_email` (`user_email`),
  ADD KEY `brand_owner_usr_brand` (`brand_id`) USING BTREE,
  ADD KEY `brand_owner_usr` (`user_id`) USING BTREE;

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fileable_id_type_index` (`fileable_id`,`fileable_type`,`table_name`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project_customer` (`company_id`),
  ADD KEY `project_brand` (`brand_id`);

--
-- Indexes for table `project_tasks`
--
ALTER TABLE `project_tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_users`
--
ALTER TABLE `project_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project_users` (`user_id`,`role_id`),
  ADD KEY `project_project_id` (`project_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles_permissions`
--
ALTER TABLE `roles_permissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rp_permission_id` (`permission_id`),
  ADD KEY `rp_role_id` (`role_id`) USING BTREE;

--
-- Indexes for table `task_comments`
--
ALTER TABLE `task_comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_company_index` (`company_id`),
  ADD KEY `user_role_id_index` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `brand_users`
--
ALTER TABLE `brand_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `project_tasks`
--
ALTER TABLE `project_tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `project_users`
--
ALTER TABLE `project_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `roles_permissions`
--
ALTER TABLE `roles_permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `task_comments`
--
ALTER TABLE `task_comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `brands`
--
ALTER TABLE `brands`
  ADD CONSTRAINT `brands_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `brand_users`
--
ALTER TABLE `brand_users`
  ADD CONSTRAINT `brand_users_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `brand_users_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `roles_permissions`
--
ALTER TABLE `roles_permissions`
  ADD CONSTRAINT `roles_permissions_ibfk_1` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`),
  ADD CONSTRAINT `roles_permissions_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`),
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
