-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 08, 2021 at 03:48 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u2play_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `brackets`
--

CREATE TABLE `brackets` (
  `bracket_id` int(7) UNSIGNED ZEROFILL NOT NULL,
  `tournament_id` int(7) UNSIGNED ZEROFILL NOT NULL,
  `match_id` int(7) UNSIGNED ZEROFILL NOT NULL,
  `position` int(11) DEFAULT NULL,
  `home` int(11) NOT NULL,
  `away` int(11) NOT NULL,
  `status` enum('complete','ongoing') NOT NULL DEFAULT 'ongoing',
  `type_game` enum('BO1','BO3','BO5') NOT NULL,
  `date_start` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `bracket_detail`
--

CREATE TABLE `bracket_detail` (
  `bracket_detail_id` int(7) UNSIGNED ZEROFILL NOT NULL,
  `bracket_id` int(7) UNSIGNED ZEROFILL NOT NULL,
  `round` int(11) NOT NULL,
  `away_score` int(11) DEFAULT NULL,
  `home_score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `categorize`
--

CREATE TABLE `categorize` (
  `cat_id` int(5) UNSIGNED ZEROFILL NOT NULL,
  `category_title` varchar(45) DEFAULT NULL,
  `category_desc` tinytext DEFAULT NULL,
  `slug` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categorize`
--

INSERT INTO `categorize` (`cat_id`, `category_title`, `category_desc`, `slug`, `created_at`) VALUES
(00001, 'Berita Terbaru', 'Berisi tentang Teknologi Artikel yang mutakhir dan terkini', 'berita-terbaru', '2021-10-16 20:23:15'),
(00002, 'Teknologis', 'Berisi tentang Teknologi Artikel yang mutakhir', 'Teknologis', '2021-10-16 07:00:00'),
(00003, 'News', 'Berisi tentang content berita news terbaru', 'news-terbaru', '2021-10-16 14:56:56'),
(00004, 'Dota 2', 'Berisi Content tentang Dota 2', 'dota-2', '2021-10-16 15:02:54'),
(00005, 'news', 'berita news terbaru', 'news', '2021-11-07 18:18:48');

-- --------------------------------------------------------

--
-- Table structure for table `categorize_has_posts`
--

CREATE TABLE `categorize_has_posts` (
  `id` int(11) NOT NULL,
  `cat_id` int(5) UNSIGNED ZEROFILL NOT NULL,
  `post_id` int(5) UNSIGNED ZEROFILL NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categorize_has_posts`
--

INSERT INTO `categorize_has_posts` (`id`, `cat_id`, `post_id`) VALUES
(1, 00002, 00001);

-- --------------------------------------------------------

--
-- Table structure for table `matchs`
--

CREATE TABLE `matchs` (
  `match_id` int(7) UNSIGNED ZEROFILL NOT NULL,
  `bracket_id` int(7) UNSIGNED ZEROFILL NOT NULL,
  `team_player_id` int(7) UNSIGNED ZEROFILL NOT NULL,
  `tournament_id` int(7) UNSIGNED ZEROFILL NOT NULL,
  `winner` int(11) DEFAULT NULL,
  `loser` int(11) DEFAULT NULL,
  `proof` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `players`
--

CREATE TABLE `players` (
  `player_id` int(7) UNSIGNED ZEROFILL NOT NULL,
  `uid` int(7) UNSIGNED ZEROFILL NOT NULL,
  `team_id` int(7) UNSIGNED ZEROFILL NOT NULL,
  `nickname` varchar(45) NOT NULL,
  `location` varchar(45) NOT NULL,
  `game_list` enum('UNSET') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `post_id` int(5) UNSIGNED ZEROFILL NOT NULL,
  `uid` int(10) UNSIGNED ZEROFILL NOT NULL,
  `status` enum('published','draft','deleted') DEFAULT 'draft',
  `post_title` varchar(45) DEFAULT NULL,
  `post_content` text DEFAULT NULL,
  `primary_image` varchar(150) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `cat_id` int(5) UNSIGNED ZEROFILL DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `uid`, `status`, `post_title`, `post_content`, `primary_image`, `slug`, `cat_id`, `created_at`) VALUES
(00001, 0000000001, 'published', 'This is the third post', 'This is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first post', '/images/posts/post-1.png', 'this-is-the-seconds-post', 00002, '2021-10-13 03:50:12'),
(00002, 0000000001, 'published', 'This is the third post', 'This is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first post', '/images/posts/post-1.png', 'this-is-the-seconds-post', 00001, '2021-10-13 03:50:33'),
(00003, 0000000001, 'published', 'This is the third post', 'This is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first post', '/images/posts/post-1.png', 'this-is-the-seconds-post', 00001, '2021-10-13 03:51:43'),
(00004, 0000000001, 'published', 'This is the third post', 'This is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first post', '/images/posts/post-1.png', 'this-is-the-seconds-post', 00001, '2021-10-13 03:51:45'),
(00005, 0000000001, 'published', 'This is the third post', 'This is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first post', '/images/posts/post-1.png', 'this-is-the-seconds-post', 00001, '2021-10-13 05:50:44'),
(00006, 0000000001, 'published', 'This is the third post', 'This is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first post', '/images/posts/post-1.png', 'this-is-the-seconds-post', 00001, '2021-10-13 05:50:45'),
(00007, 0000000001, 'published', 'This is the third post', 'This is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first post', '/images/posts/post-1.png', 'this-is-the-seconds-post', 00001, '2021-10-13 05:50:46'),
(00008, 0000000001, 'published', 'This is the third post', 'This is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first post', '/images/posts/post-1.png', 'this-is-the-seconds-post', 00001, '2021-10-13 05:50:47'),
(00009, 0000000001, 'published', 'This is the third post', 'This is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first post', '/images/posts/post-1.png', 'this-is-the-seconds-post', 00001, '2021-10-13 05:50:47'),
(00010, 0000000001, 'published', 'This is the third post', 'This is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first post', '/images/posts/post-1.png', 'this-is-the-seconds-post', 00001, '2021-10-13 05:50:48'),
(00011, 0000000001, 'published', 'This is the third post', 'This is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first post', '/images/posts/post-1.png', 'this-is-the-seconds-post', 00001, '2021-10-13 05:50:48'),
(00012, 0000000001, 'published', 'This is the third post', 'This is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first post', '/images/posts/post-1.png', 'this-is-the-seconds-post', 00001, '2021-10-13 05:50:49'),
(00013, 0000000001, 'published', 'This is the third post', 'This is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first post', '/images/posts/post-1.png', 'this-is-the-seconds-post', 00001, '2021-10-13 05:50:49'),
(00014, 0000000001, 'published', 'This is the third post', 'This is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first post', '/images/posts/post-1.png', 'this-is-the-seconds-post', 00001, '2021-10-13 05:50:50'),
(00015, 0000000001, 'published', 'asdasdasd', '<p>asdasdasdasdasdasd</p>', '', 'asdasdas-asdasdas-asdasd', 00000, '2021-10-15 05:50:28'),
(00016, 0000000001, 'published', 'asdasdasd', '<p>asdasdasdasdasdasd</p>', '', 'asdasdas-asdasdas-asdasd', 00002, '2021-10-15 05:55:27'),
(00017, 0000000001, 'published', 'Dota 2 The International', '<p>Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,</p><p><br></p><h1>Kategori Bertahan SEA</h1><p><br></p><ul><li>T1</li><li>TNC</li></ul><p><br></p>', '', 'dota-2-the-international', 00000, '2021-10-16 20:32:51'),
(00018, 0000000001, 'draft', 'This is the third post', 'This is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first post', '', 'this-is-the-seconds-post', 00001, '2021-10-26 14:51:10'),
(00019, 0000000001, 'draft', 'This is the third post', 'This is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first post', '', 'this-is-the-seconds-post', 00001, '2021-10-26 14:53:19'),
(00020, 0000000001, 'draft', 'This is the third post', 'This is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first postThis is the first post', '', 'this-is-the-seconds-post', 00001, '2021-10-26 14:53:46');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `team_id` int(7) UNSIGNED ZEROFILL NOT NULL,
  `team_name` varchar(45) NOT NULL,
  `team_code` varchar(5) NOT NULL,
  `max_member` int(1) NOT NULL DEFAULT 10,
  `desc` longtext NOT NULL,
  `manager` int(11) NOT NULL,
  `coach` int(11) NOT NULL,
  `sponsor` varchar(255) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `game_list` enum('unset') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tournaments`
--

CREATE TABLE `tournaments` (
  `tournament_id` int(7) UNSIGNED ZEROFILL NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `organizer` varchar(255) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `featured_image` varchar(255) DEFAULT NULL,
  `venue` varchar(45) DEFAULT NULL,
  `prizepool` int(11) DEFAULT NULL,
  `rule_link` varchar(150) DEFAULT NULL,
  `contact_person` varchar(255) DEFAULT NULL,
  `registration_start` date DEFAULT NULL,
  `registration_end` date DEFAULT NULL,
  `start` date DEFAULT NULL,
  `end` date DEFAULT NULL,
  `create_date` datetime DEFAULT current_timestamp(),
  `difficult` enum('beginner','intermediate','professional') DEFAULT NULL,
  `max_team` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tournaments`
--

INSERT INTO `tournaments` (`tournament_id`, `title`, `organizer`, `description`, `featured_image`, `venue`, `prizepool`, `rule_link`, `contact_person`, `registration_start`, `registration_end`, `start`, `end`, `create_date`, `difficult`, `max_team`) VALUES
(0000001, 'The RagnaroX WarZone', NULL, 'This is the ragnarox warzone, the game is a d', NULL, 'Online', 30000000, 'https://ink.to/rule', 'Galang : 082134832652, Reza : 082121212', '2021-10-15', '2021-10-30', '2021-11-05', '2021-11-09', '2021-10-16 15:27:14', 'beginner', NULL),
(0000002, 'The RagnaroX WarZone', 'Umbreula', 'This is the ragnarox warzone, the game is a d', '/images/sample/tourneysingle.svg', 'Online', 3000000, 'https://ink.to/rule', 'Galang : 082134832652, Reza : 082121212', '2021-10-15', '2021-10-15', '2021-10-15', '2021-10-15', '2021-10-27 19:33:36', 'beginner', 32),
(0000003, 'The RagnaroX WarZone 2', 'Umbreula', 'This is the ragnarox warzone, the game is a d', '/images/sample/tourneysingle.svg', 'Online', 3000000, 'https://ink.to/rule', 'Galang : 082134832652, Reza : 082121212', '2021-10-15', '2021-10-15', '2021-10-15', '2021-10-15', '2021-10-27 19:34:06', 'beginner', 32),
(0000004, 'The RagnaroX WarZone 3', 'Umbreula', 'This is the ragnarox warzone, the game is a d', '/images/sample/tourneysingle.svg', 'Online', 3000000, 'https://ink.to/rule', 'Galang : 082134832652, Reza : 082121212', '2021-10-15', '2021-10-15', '2021-10-15', '2021-10-15', '2021-10-27 19:34:10', 'beginner', 32),
(0000005, 'The RagnaroX WarZone 4', 'Umbreula', 'This is the ragnarox warzone, the game is a d', '/images/sample/tourneysingle.svg', 'Online', 3000000, 'https://ink.to/rule', 'Galang : 082134832652, Reza : 082121212', '2021-10-15', '2021-10-15', '2021-10-15', '2021-10-15', '2021-10-27 19:34:15', 'beginner', 32),
(0000006, 'The RagnaroX WarZone 5', 'Umbreula', 'This is the ragnarox warzone, the game is a d', '/images/sample/tourneysingle.svg', 'Online', 3000000, 'https://ink.to/rule', 'Galang : 082134832652, Reza : 082121212', '2021-10-15', '2021-10-15', '2021-10-15', '2021-10-15', '2021-10-27 19:34:19', 'beginner', 32),
(0000007, 'The RagnaroX WarZone 6', 'Umbreula', 'This is the ragnarox warzone, the game is a d', '/images/sample/tourneysingle.svg', 'Online', 3000000, 'https://ink.to/rule', 'Galang : 082134832652, Reza : 082121212', '2021-10-15', '2021-10-15', '2021-10-15', '2021-10-15', '2021-10-27 19:34:23', 'beginner', 32),
(0000008, 'The RagnaroX WarZone 7', 'Umbreula', 'This is the ragnarox warzone, the game is a d', '/images/sample/tourneysingle.svg', 'Online', 3000000, 'https://ink.to/rule', 'Galang : 082134832652, Reza : 082121212', '2021-10-15', '2021-10-15', '2021-10-15', '2021-10-15', '2021-10-27 19:34:27', 'beginner', 32),
(0000009, 'Garena Free Fire Grand Tournament 1vs1 battle', 'Garena', 'Lorem Ipsum is simply dummy text of the print', '/images/sample/tourneysingle.svg', 'Online', 199999998, 'https://ink.to/rule', 'Galang : 082134832652, Reza : 082121212', '2021-10-01', '2021-10-14', '2021-11-01', '2021-11-06', '2021-10-31 18:43:39', '', 32);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `uid` int(7) UNSIGNED ZEROFILL NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `birth_date` date NOT NULL,
  `gender` enum('L','P') NOT NULL,
  `email` varchar(45) NOT NULL,
  `phone_number` varchar(13) NOT NULL,
  `address` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('superadmin','admin','user') NOT NULL,
  `status` enum('active','non') DEFAULT 'non',
  `verification_code` int(11) DEFAULT NULL,
  `joined_at` datetime NOT NULL DEFAULT current_timestamp(),
  `lastest_login` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`uid`, `first_name`, `last_name`, `birth_date`, `gender`, `email`, `phone_number`, `address`, `password`, `role`, `status`, `verification_code`, `joined_at`, `lastest_login`) VALUES
(0000001, 'user', 'account', '0000-00-00', 'L', 'admin@u2play.com', '082134832652', '', '$2a$08$nhllcSxNjt4iDY91fKZFXuFRtL1.z8Olo8JsFq21EmU..3lZT2YIu', 'superadmin', 'active', 2659, '2021-10-13 03:44:56', '2021-10-13 03:44:56'),
(0000002, 'user', 'account 2', '0000-00-00', 'L', 'galangypradana@gmail.com', '082134832652', '', '$2a$08$EI2ns./fgxo4ss7TegWPEOnxYUCtXUcyg9ojYEfzuB9R4HBGYe0g2', 'user', 'active', 4929, '2021-10-27 03:54:00', '2021-10-27 03:54:00'),
(0000003, 'Tina', 'Rouse', '0000-00-00', 'L', 'maszgalang11@gmail.com', '82329345025', '', '$2a$08$YJ0lkp53RRi.jla8CRCTX.WOG7/FRdNUIYOWmEoZ.RWwIum/1rsRS', 'user', 'non', 4799, '2021-10-31 02:50:04', '2021-10-31 02:50:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brackets`
--
ALTER TABLE `brackets`
  ADD PRIMARY KEY (`bracket_id`);

--
-- Indexes for table `bracket_detail`
--
ALTER TABLE `bracket_detail`
  ADD PRIMARY KEY (`bracket_detail_id`),
  ADD KEY `fk_bracket_detail_brackets1_idx` (`bracket_id`);

--
-- Indexes for table `categorize`
--
ALTER TABLE `categorize`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `categorize_has_posts`
--
ALTER TABLE `categorize_has_posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_categorize_has_posts_posts1_idx` (`post_id`),
  ADD KEY `fk_categorize_has_posts_categorize1_idx` (`cat_id`);

--
-- Indexes for table `matchs`
--
ALTER TABLE `matchs`
  ADD PRIMARY KEY (`match_id`),
  ADD KEY `fk_matchs_brackets1_idx` (`bracket_id`),
  ADD KEY `fk_matchs_tournaments1_idx` (`tournament_id`),
  ADD KEY `fk_matchs_teams1_idx` (`team_player_id`);

--
-- Indexes for table `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`player_id`),
  ADD KEY `fk_player_users_idx` (`uid`),
  ADD KEY `fk_players_teams1_idx` (`team_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `fk_posts_users1_idx` (`uid`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`team_id`);

--
-- Indexes for table `tournaments`
--
ALTER TABLE `tournaments`
  ADD PRIMARY KEY (`tournament_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brackets`
--
ALTER TABLE `brackets`
  MODIFY `bracket_id` int(7) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bracket_detail`
--
ALTER TABLE `bracket_detail`
  MODIFY `bracket_detail_id` int(7) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categorize`
--
ALTER TABLE `categorize`
  MODIFY `cat_id` int(5) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `categorize_has_posts`
--
ALTER TABLE `categorize_has_posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `matchs`
--
ALTER TABLE `matchs`
  MODIFY `match_id` int(7) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(5) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `tournaments`
--
ALTER TABLE `tournaments`
  MODIFY `tournament_id` int(7) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `uid` int(7) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bracket_detail`
--
ALTER TABLE `bracket_detail`
  ADD CONSTRAINT `fk_bracket_detail_brackets1` FOREIGN KEY (`bracket_id`) REFERENCES `brackets` (`bracket_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `categorize_has_posts`
--
ALTER TABLE `categorize_has_posts`
  ADD CONSTRAINT `fk_categorize_has_posts_categorize1` FOREIGN KEY (`cat_id`) REFERENCES `categorize` (`cat_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_categorize_has_posts_posts1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `matchs`
--
ALTER TABLE `matchs`
  ADD CONSTRAINT `fk_matchs_brackets1` FOREIGN KEY (`bracket_id`) REFERENCES `brackets` (`bracket_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_matchs_players1` FOREIGN KEY (`team_player_id`) REFERENCES `players` (`player_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_matchs_teams1` FOREIGN KEY (`team_player_id`) REFERENCES `teams` (`team_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_matchs_tournaments1` FOREIGN KEY (`tournament_id`) REFERENCES `tournaments` (`tournament_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `players`
--
ALTER TABLE `players`
  ADD CONSTRAINT `fk_player_users` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_players_teams1` FOREIGN KEY (`team_id`) REFERENCES `teams` (`team_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `fk_posts_users1` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
