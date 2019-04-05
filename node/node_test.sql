-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Апр 02 2019 г., 16:17
-- Версия сервера: 10.1.38-MariaDB
-- Версия PHP: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `node_test`
--

-- --------------------------------------------------------

--
-- Структура таблицы `node_menus`
--

CREATE TABLE `node_menus` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `active` tinyint(11) NOT NULL,
  `create_time` int(11) NOT NULL,
  `modify_time` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `node_users`
--

CREATE TABLE `node_users` (
  `id` int(11) NOT NULL,
  `user_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `active` int(1) NOT NULL,
  `create_time` int(11) NOT NULL,
  `modify_time` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `node_users`
--

INSERT INTO `node_users` (`id`, `user_name`, `password`, `active`, `create_time`, `modify_time`) VALUES
(1, 'admin', '1q2', 1, 1111111, 1111111),
(2, 'User1', '1q2', 1, 2005, 2005),
(3, 'User2', '1q2', 1, 2005, 2005),
(4, 'Serenity2', '1q2', 1, 2005, 0),
(5, 'Serenity2', '1q2', 1, 2005, 0),
(6, 'Serenity2', '1q2', 1, 2005, 2000),
(7, 'Serenity2', '1q2', 1, 2005, 2000),
(8, 'Serenity2', '1q2', 1, 2005, 2005),
(9, 'Serenity2', '1q2', 1, 2005, 2005);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `node_menus`
--
ALTER TABLE `node_menus`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `node_users`
--
ALTER TABLE `node_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `node_menus`
--
ALTER TABLE `node_menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `node_users`
--
ALTER TABLE `node_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
