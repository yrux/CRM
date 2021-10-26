-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 26, 2021 at 02:18 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

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
(6, 'Design Proficient', 'DP', '2021-10-20 09:33:32', '2021-10-20 09:33:39', 1);

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
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Table to handle all companies';

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id`, `company_name`, `created_at`, `updated_at`) VALUES
(1, 'SoftCube', '2021-10-12 12:54:49', '2021-10-12 12:54:49'),
(3, 'YruX', '2021-10-20 07:39:15', '2021-10-20 07:39:15'),
(4, 'test', '2021-10-20 07:41:21', '2021-10-20 07:53:45'),
(5, 'new company', '2021-10-20 07:42:50', '2021-10-20 07:42:50');

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
('0f76dcbbc0fae9328d0e3a7a558c854fad261271dde6dd733cf0df06bd6c6403d096f837198ee1f7', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-12 11:39:45', '2021-10-12 11:39:45', '2022-04-12 16:39:45'),
('1390c0dd3cbfea9be47830756f7fb9d35bd2cb9ce8ff0fbeaa33bc85787bdf8cbd397723d4c5ae3f', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-22 09:58:36', '2021-10-22 09:58:36', '2022-04-22 14:58:36'),
('3af0cc37a8b790b89478a7468200c46778209986bb26a782589352f6f97c435ca04b663158970aac', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-20 07:31:47', '2021-10-20 07:31:47', '2022-04-20 12:31:44'),
('3bf573b76009fe6518b085e629c442f504770727653f2db6453b70a68ad9c156f7acece522fd2288', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-12 11:39:06', '2021-10-12 11:39:06', '2022-04-12 16:39:06'),
('3d52a41971ff57c6b6aae88d0f200900c1f27013ba5dd6d8c2e721790b0d562992956072bc06263b', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-20 07:49:22', '2021-10-20 07:49:22', '2022-04-20 12:49:22'),
('3e94f75c1e4a30ed4117da89c1b90ef1aa5e020846239f9835c60929dfbe121daed95f4e741c9368', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-12 11:43:31', '2021-10-12 11:43:31', '2022-04-12 16:43:31'),
('4b4f208ec87913f5de7f79f3d77a84d8864e40fde2a622b4e2c71b4577e39e3875dbef9ec25d4854', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-12 11:37:21', '2021-10-12 11:37:21', '2022-04-12 16:37:18'),
('54b5ebb4f1f92b215adaabc2595c3147b6fd3525bad28f091e16d8a07d5760b2a25b87fd7137e652', 3, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-22 09:50:35', '2021-10-22 09:50:35', '2022-04-22 14:50:34'),
('55262ac7ce99755fa871193e5811963ad74c7e3135a2e2fb9b889f20e445df877897a2ce8959ca13', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-12 11:41:31', '2021-10-12 11:41:31', '2022-04-12 16:41:30'),
('5c8fd358a70858ca04ba519212b2eb8af795edb64cbbe06bb4136ac635815a5c2d2d8bf98a40756c', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-22 10:00:04', '2021-10-22 10:00:04', '2022-04-22 15:00:04'),
('777890fee8591160c7764c9a0c4d2832eb5ba01d9cfd3e0b8a7037df713a48a1d2fdfbcc7be25d04', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-22 09:59:56', '2021-10-22 09:59:56', '2022-04-22 14:59:56'),
('94f89e565a9161ddb6866642b1644a22f95dc2144fe42718f0ba2b1f4ae0d499d86d7a6b865f503e', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-25 10:23:05', '2021-10-25 10:23:05', '2022-04-25 15:23:05'),
('a1965dafc527d60579be7dc09fc6b03dd3918badf28d1d4a06ee891f0913ba19a7b109c5723530af', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-12 11:41:08', '2021-10-12 11:41:08', '2022-04-12 16:41:03'),
('b12cb03f8c2a2927f4ad0ae029ef7a07a2341be9e59e4d0a7fb9cc5be8f27e3659e1b9e6670b9122', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-12 11:39:17', '2021-10-12 11:39:17', '2022-04-12 16:39:17'),
('bd5bde4934c8ec94293cff223bbff3f35f7d87b6164aee28017a7fdb01fd550a7b6d6bd640da60c8', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-12 11:40:00', '2021-10-12 11:40:00', '2022-04-12 16:40:00'),
('c38745ff67b73da8a432836b8e8d89b8f8a7086186c91e6c12d790dfd456b5b2e71691820888351f', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-12 11:38:10', '2021-10-12 11:38:10', '2022-04-12 16:38:10'),
('c59b0c278186605a13f492f22bad66f9a949b9b4baadba8a51772e011010bf737afb36c6626697dd', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-12 11:37:51', '2021-10-12 11:37:51', '2022-04-12 16:37:50'),
('c8ddb38c688c2a8b18e705e2c0b9fbdb37c8e5567e03a62e32ea18241d50c666e220c766a7b1d533', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-22 09:58:56', '2021-10-22 09:58:56', '2022-04-22 14:58:56'),
('d4601b8317f1b5a1959022d8b9da977e3c86d1e62b622c59ad85ad5ead1a47d2db8e5d067bda4989', 4, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-25 17:47:29', '2021-10-25 17:47:29', '2022-04-25 22:47:29'),
('e4bca24d383cdb75d0c019f52f4fba6c1ab63437d7517bd15e44562b5b38811411e00aff41e7da7f', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-12 09:08:18', '2021-10-12 09:08:18', '2022-04-12 14:08:18'),
('ec5a63dad8e368cacdf8cb58aadb9d0b3a838a943733e460ad1467d72ec26ebe9c7ed3cd0675a2b7', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-12 09:09:43', '2021-10-12 09:09:43', '2022-04-12 14:09:43'),
('ed3409f49ec7d6b7bfc94b3e1e052e63044996be9e598c06a91d921f232c5b2cf95a0a6b6cb3bcbf', 2, '949d9205-b060-4a02-b12c-d7b0c317359e', 'Laravel Password Grant Client', '[]', 0, '2021-10-25 06:39:16', '2021-10-25 06:39:16', '2022-04-25 11:39:15');

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
(35, 4, 25, '2021-10-25 13:42:13', '2021-10-25 13:42:13');

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
(2, 'Super Admin', 'admin@crm.com', '$2y$10$fJwkT72wGNXCIBSqq.5JveP/rSFoSRfrSvotM2BJYPO6xgJFgSWVm', '2021-10-12 13:07:37', '2021-10-20 13:08:30', 1, 1, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'Soft Cube', 'company@softcube.com', '$2y$10$41qAKuxphEMLOLYRWp8WEOwMB3x9y69qPJf6qBu9uw8PRPv0Z9PRG', '2021-10-22 09:49:58', '2021-10-22 09:49:58', 1, 2, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 'Brand Owner', 'brandowner@gmail.com', '$2y$10$zeSbB.N9ZeD/X8JxZAfjWe5MEka826SlwCbg4B4lnpE2gtKDe9Rcm', '2021-10-25 07:05:51', '2021-10-25 07:05:51', 1, 4, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 'Brand Owner', 'brandsupport@gmail.com', '$2y$10$3JZCgeni1webVQ0SJgpJlu5wOb.KVeMwR9pIMw2rHx3Y4j8RArUmG', '2021-10-25 07:06:16', '2021-10-25 07:06:16', 1, 5, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 'Production', 'production@gmail.com', '$2y$10$3JZCgeni1webVQ0SJgpJlu5wOb.KVeMwR9pIMw2rHx3Y4j8RArUmG', '2021-10-25 07:06:16', '2021-10-25 07:06:16', 1, 7, NULL, NULL, NULL, NULL, NULL, NULL);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `brand_users`
--
ALTER TABLE `brand_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `task_comments`
--
ALTER TABLE `task_comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
