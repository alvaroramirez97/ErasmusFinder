-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-03-2020 a las 19:19:28
-- Versión del servidor: 10.1.35-MariaDB
-- Versión de PHP: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `erasmus`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datosevento`
--

CREATE TABLE `datosevento` (
  `id_evento` int(11) NOT NULL,
  `id_organizador` int(11) NOT NULL,
  `destino` varchar(200) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `fecha` date NOT NULL,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `datosevento`
--

INSERT INTO `datosevento` (`id_evento`, `id_organizador`, `destino`, `descripcion`, `fecha`, `latitud`, `longitud`) VALUES
(1, 2, 'Africa', 'Un viaje a la sabana africana', '2020-03-19', 17, 13),
(2, 4, 'Venecia', 'Quedada en la plaza de San Marcos', '2020-03-25', 45.4341, 12.33),
(3, 3, 'Las Bahamas', 'Un paraíso', '2020-02-29', -77.37, 25.94),
(4, 3, 'Tomelloso', 'Quedada en Tomelloso', '2020-04-22', 39.16, -3.011),
(5, 12, 'Alcázar de San Juan', 'Reunión en el Juan Bosco', '2020-03-31', 39.3913, -3.2234);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datosidiomas`
--

CREATE TABLE `datosidiomas` (
  `id_idioma` int(11) NOT NULL,
  `nombre_idioma` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `datosidiomas`
--

INSERT INTO `datosidiomas` (`id_idioma`, `nombre_idioma`) VALUES
(1, 'Mandarin'),
(2, 'Spanish'),
(3, 'English'),
(4, 'Hindi'),
(5, 'Arabic'),
(6, 'Bengali'),
(7, 'Portuguese'),
(8, 'Russian'),
(9, 'Japanese'),
(10, 'Punjabi'),
(11, 'Turkish'),
(12, 'Korean'),
(13, 'French'),
(14, 'German'),
(15, 'Italian'),
(16, 'Dutch'),
(17, 'Greek'),
(18, 'Hungarian');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventousuario`
--

CREATE TABLE `eventousuario` (
  `id_evento` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `eventousuario`
--

INSERT INTO `eventousuario` (`id_evento`, `id_usuario`) VALUES
(2, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `idiomasusuario`
--

CREATE TABLE `idiomasusuario` (
  `id_idioma` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicaciones`
--

CREATE TABLE `ubicaciones` (
  `id_pais` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `codigo_pais` varchar(2) NOT NULL,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ubicaciones`
--

INSERT INTO `ubicaciones` (`id_pais`, `nombre`, `codigo_pais`, `latitud`, `longitud`) VALUES
(1, 'Principality of Andorra', 'AD', 42.55, 1.58333),
(2, 'United Arab Emirates', 'AE', 23.75, 54.5),
(3, 'Islamic Republic of Afghanistan', 'AF', 33, 66),
(4, 'Antigua and Barbuda', 'AG', 17.05, -61.8),
(5, 'Republic of Albania', 'AL', 41, 20),
(6, 'Republic of Armenia', 'AM', 40.25, 45),
(7, 'Republic of Angola', 'AO', -12.5, 18.5),
(8, 'Argentine Republic', 'AR', -34, -64),
(9, 'Republic of Austria', 'AT', 47.33333, 13.33333),
(10, 'Commonwealth of Australia', 'AU', -25, 135),
(11, 'Republic of Azerbaijan', 'AZ', 40.5, 47.5),
(12, 'Bosnia and Herzegovina', 'BA', 44.25, 17.83333),
(13, 'Barbados', 'BB', 13.16453, -59.55165),
(14, 'Bangladesh', 'BD', 24, 90),
(15, 'Kingdom of Belgium', 'BE', 50.75, 4.5),
(16, 'Burkina Faso', 'BF', 12.5, -1.66667),
(17, 'Republic of Bulgaria', 'BG', 42.66667, 25.25),
(18, 'Kingdom of Bahrain', 'BH', 26.03333, 50.55),
(19, 'Republic of Burundi', 'BI', -3.5, 30),
(20, 'Republic of Benin', 'BJ', 9.5, 2.25),
(21, 'Brunei Darussalam', 'BN', 4.5, 114.66667),
(22, 'Plurinational State of Bolivia', 'BO', -17, -65),
(23, 'Federative Republic of Brazil', 'BR', -10, -55),
(24, 'Commonwealth of The Bahamas', 'BS', 25.04082, -77.37122),
(25, 'Kingdom of Bhutan', 'BT', 27.5, 90.5),
(26, 'Republic of Botswana', 'BW', -22, 24),
(27, 'Republic of Belarus', 'BY', 53, 28),
(28, 'Belize', 'BZ', 17.25, -88.75),
(29, 'Canada', 'CA', 60.10867, -113.64258),
(30, 'Democratic Republic of the Congo', 'CD', -2.5, 23.5),
(31, 'Central African Republic', 'CF', 7, 21),
(32, 'Republic of the Congo', 'CG', -1, 15.5),
(33, 'Switzerland', 'CH', 47.00016, 8.01427),
(34, 'Republic of Côte d’Ivoire', 'CI', 8, -5.5),
(35, 'Republic of Chile', 'CL', -30, -71),
(36, 'Republic of Cameroon', 'CM', 6, 12.5),
(37, 'People’s Republic of China', 'CN', 35, 105),
(38, 'Republic of Colombia', 'CO', 4, -73.25),
(39, 'Republic of Costa Rica', 'CR', 10, -84),
(40, 'Republic of Cuba', 'CU', 22, -79.5),
(41, 'Republic of Cabo Verde', 'CV', 16, -24),
(42, 'Republic of Cyprus', 'CY', 35, 33),
(43, 'Czechia', 'CZ', 49.75, 15),
(44, 'Federal Republic of Germany', 'DE', 51.5, 10.5),
(45, 'Republic of Djibouti', 'DJ', 11.83333, 42.5),
(46, 'Kingdom of Denmark', 'DK', 56, 10),
(47, 'Dominica', 'DM', 15.5, -61.33333),
(48, 'Dominican Republic', 'DO', 19, -70.66667),
(49, 'People’s Democratic Republic of Algeria', 'DZ', 28, 3),
(50, 'Republic of Ecuador', 'EC', -1.25, -78.25),
(51, 'Republic of Estonia', 'EE', 59, 26),
(52, 'Arab Republic of Egypt', 'EG', 27, 30),
(53, 'State of Eritrea', 'ER', 15, 39),
(54, 'Kingdom of Spain', 'ES', 40, -4),
(55, 'Federal Democratic Republic of Ethiopia', 'ET', 9, 39.5),
(56, 'Republic of Finland', 'FI', 64, 26),
(57, 'Republic of Fiji', 'FJ', -18, 178),
(58, 'Republic of France', 'FR', 46, 2),
(59, 'Gabonese Republic', 'GA', -1, 11.75),
(60, 'United Kingdom of Great Britain and Northern Ireland', 'GB', 54.75844, -2.69531),
(61, 'Grenada', 'GD', 12.11667, -61.66667),
(62, 'Georgia', 'GE', 41.99998, 43.4999),
(63, 'Republic of Ghana', 'GH', 8.1, -1.2),
(64, 'Gambia', 'GM', 13.5, -15.5),
(65, 'Republic of Guinea', 'GN', 10.83333, -10.66667),
(66, 'Republic of Equatorial Guinea', 'GQ', 1.7, 10.5),
(67, 'Hellenic Republic', 'GR', 39, 22),
(68, 'Republic of Guatemala', 'GT', 15.5, -90.25),
(69, 'Republic of Guinea-Bissau', 'GW', 12, -15),
(70, 'Co-operative Republic of Guyana', 'GY', 5, -59),
(71, 'Republic of Honduras', 'HN', 15, -86.5),
(72, 'Republic of Croatia', 'HR', 45.16667, 15.5),
(73, 'Republic of Haiti', 'HT', 19, -72.41667),
(74, 'Hungary', 'HU', 47, 20),
(75, 'Republic of Indonesia', 'ID', -5, 120),
(76, 'Ireland', 'IE', 53, -8),
(77, 'State of Israel', 'IL', 31.5, 34.75),
(78, 'Republic of India', 'IN', 22, 79),
(79, 'Republic of Iraq', 'IQ', 33, 44),
(80, 'Islamic Republic of Iran', 'IR', 32, 53),
(81, 'Republic of Iceland', 'IS', 65, -18),
(82, 'Repubblica Italiana', 'IT', 42.83333, 12.83333),
(83, 'Jamaica', 'JM', 18.16667, -77.25),
(84, 'Hashemite Kingdom of Jordan', 'JO', 31, 36),
(85, 'Japan', 'JP', 35.68536, 139.75309),
(86, 'Republic of Kenya', 'KE', 1, 38),
(87, 'Kyrgyz Republic', 'KG', 41.5, 75),
(88, 'Kingdom of Cambodia', 'KH', 13, 105),
(89, 'Republic of Kiribati', 'KI', 1.421, 172.984),
(90, 'Union of the Comoros', 'KM', -12.23333, 44.44553),
(91, 'Federation of Saint Kitts and Nevis', 'KN', 17.33333, -62.75),
(92, 'Democratic People’s Republic of Korea', 'KP', 40, 127),
(93, 'Republic of Korea', 'KR', 36.5, 127.75),
(94, 'State of Kuwait', 'KW', 29.5, 47.75),
(95, 'Republic of Kazakhstan', 'KZ', 48, 68),
(96, 'Lao People’s Democratic Republic', 'LA', 18, 105),
(97, 'Lebanon', 'LB', 33.83333, 35.83333),
(98, 'Saint Lucia', 'LC', 13.88333, -60.96667),
(99, 'Principality of Liechtenstein', 'LI', 47.16667, 9.53333),
(100, 'Democratic Socialist Republic of Sri Lanka', 'LK', 7.75, 80.75),
(101, 'Republic of Liberia', 'LR', 6.5, -9.5),
(102, 'Kingdom of Lesotho', 'LS', -29.5, 28.25),
(103, 'Republic of Lithuania', 'LT', 55.41667, 24),
(104, 'Grand Duchy of Luxembourg', 'LU', 49.75, 6.16667),
(105, 'Republic of Latvia', 'LV', 57, 25),
(106, 'Libya', 'LY', 28, 17),
(107, 'Kingdom of Morocco', 'MA', 32, -6),
(108, 'Principality of Monaco', 'MC', 43.73141, 7.41903),
(109, 'Republic of Moldova', 'MD', 47.25, 28.58333),
(110, 'Montenegro', 'ME', 42.75, 19.25),
(111, 'Republic of Madagascar', 'MG', -20, 47),
(112, 'Republic of Macedonia', 'MK', 41.66667, 21.75),
(113, 'Republic of Mali', 'ML', 18, -2),
(114, 'Union of Burma', 'MM', 21, 96),
(115, 'Mongolia', 'MN', 46, 105),
(116, 'Islamic Republic of Mauritania', 'MR', 20.25, -10.5),
(117, 'Republic of Malta', 'MT', 35.91667, 14.43333),
(118, 'Republic of Mauritius', 'MU', -20.3, 57.58333),
(119, 'Republic of Maldives', 'MV', 3.2, 73),
(120, 'Republic of Malawi', 'MW', -13.5, 34),
(121, 'Mexico', 'MX', 23, -102),
(122, 'Malaysia', 'MY', 2.5, 112.5),
(123, 'Republic of Mozambique', 'MZ', -18.25, 35),
(124, 'Republic of Namibia', 'NA', -22, 17),
(125, 'Republic of Niger', 'NE', 18, 9),
(126, 'Federal Republic of Nigeria', 'NG', 10, 8),
(127, 'Republic of Nicaragua', 'NI', 13, -85),
(128, 'Kingdom of the Netherlands', 'NL', 52.25, 5.75),
(129, 'Kingdom of Norway', 'NO', 62, 10),
(130, 'Federal Democratic Republic of Nepal', 'NP', 28, 84),
(131, 'Nauru', 'NR', -0.517, 166.933),
(132, 'New Zealand', 'NZ', -42, 174),
(133, 'Sultanate of Oman', 'OM', 21, 57),
(134, 'Republic of Panama', 'PA', 9, -80),
(135, 'Republic of Peru', 'PE', -10, -75.25),
(136, 'Independent State of Papua New Guinea', 'PG', -6, 147),
(137, 'Republic of the Philippines', 'PH', 13, 122),
(138, 'Islamic Republic of Pakistan', 'PK', 30, 70),
(139, 'Republic of Poland', 'PL', 52, 20),
(140, 'Portuguese Republic', 'PT', 39.6945, -8.13057),
(141, 'Republic of Paraguay', 'PY', -23.33333, -58),
(142, 'State of Qatar', 'QA', 25.5, 51.25),
(143, 'România', 'RO', 46, 25),
(144, 'Serbia', 'RS', 44.81892, 20.45998),
(145, 'Russian Federation', 'RU', 60, 100),
(146, 'Republic of Rwanda', 'RW', -2, 30),
(147, 'Kingdom of Saudi Arabia', 'SA', 25, 45),
(148, 'Solomon Islands', 'SB', -8, 159),
(149, 'Republic of Seychelles', 'SC', -4.58333, 55.66667),
(150, 'Republic of the Sudan', 'SD', 16, 30),
(151, 'Kingdom of Sweden', 'SE', 62, 15),
(152, 'Republic of Singapore', 'SG', 1.36667, 103.8),
(153, 'Republic of Slovenia', 'SI', 46.08333, 15),
(154, 'Slovak Republic', 'SK', 48.66667, 19.5),
(155, 'Republic of Sierra Leone', 'SL', 8.5, -11.5),
(156, 'Repubblica di San Marino', 'SM', 43.9367, 12.4463),
(157, 'Republic of Senegal', 'SN', 14.5, -14.25),
(158, 'Somalia', 'SO', 6, 48),
(159, 'Republic of Suriname', 'SR', 4, -56),
(160, 'South Sudan', 'SS', 7.5, 30),
(161, 'Sao Tome and Principe', 'ST', 1, 7),
(162, 'Republic of El Salvador', 'SV', 13.83333, -88.91667),
(163, 'Syrian Arab Republic', 'SY', 35, 38),
(164, 'Kingdom of Swaziland', 'SZ', -26.5, 31.5),
(165, 'Republic of Chad', 'TD', 15, 19),
(166, 'Togolese Republic', 'TG', 8.66667, 1.08333),
(167, 'Kingdom of Thailand', 'TH', 15.5, 101),
(168, 'Republic of Tajikistan', 'TJ', 39, 71),
(169, 'Democratic Republic of Timor-Leste', 'TL', -8.83333, 125.75),
(170, 'Turkmenistan', 'TM', 39.75, 59.66667),
(171, 'Republic of Tunisia', 'TN', 34, 9),
(172, 'Kingdom of Tonga', 'TO', -20, -175),
(173, 'Republic of Turkey', 'TR', 39, 35),
(174, 'Republic of Trinidad and Tobago', 'TT', 11, -61),
(175, 'Tuvalu', 'TV', -8.51719, 179.14478),
(176, 'Taiwan', 'TW', 24, 121),
(177, 'United Republic of Tanzania', 'TZ', -6, 35),
(178, 'Ukraine', 'UA', 49, 32),
(179, 'Republic of Uganda', 'UG', 1.25, 32.5),
(180, 'United States', 'US', 39.76, -98.5),
(181, 'Oriental Republic of Uruguay', 'UY', -33, -56),
(182, 'Republic of Uzbekistan', 'UZ', 41.66667, 63.83333),
(183, 'State of the Vatican City', 'VA', 41.90225, 12.4533),
(184, 'Saint Vincent and the Grenadines', 'VC', 13.08333, -61.2),
(185, 'Bolivarian Republic of Venezuela', 'VE', 8, -66),
(186, 'Socialist Republic of Vietnam', 'VN', 16.16667, 107.83333),
(187, 'Republic of Vanuatu', 'VU', -16, 167),
(188, 'Independent State of Samoa', 'WS', -13.8, -172.13333),
(189, 'Republic of Kosovo', 'XK', 42.58333, 20.91667),
(190, 'Republic of Yemen', 'YE', 15.5, 47.5),
(191, 'Republic of South Africa', 'ZA', -29, 24),
(192, 'Republic of Zambia', 'ZM', -14.33333, 28.5),
(193, 'Republic of Zimbabwe', 'ZW', -19, 29.75);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `apellidos` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `last_update` date NOT NULL,
  `last_longitud` double NOT NULL,
  `last_latitud` double NOT NULL,
  `id_pais` int(11) NOT NULL,
  `accessToken` varchar(300) NOT NULL,
  `foto` varchar(200) DEFAULT 'defecto.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellidos`, `email`, `password`, `last_update`, `last_longitud`, `last_latitud`, `id_pais`, `accessToken`, `foto`) VALUES
(2, 'Alvaro', 'Ramirez', 'alvaro@gmail.com', '1234', '0000-00-00', -3.01298, 39.16354, 5, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFsdmFyb0BnbWFpbC5jb20iLCJpYXQiOjE1ODM0MzMxMzIsImV4cCI6MTU4MzUxOTUzMn0.Vc_wx3OlqWZGmxt4plGjRk0ZryHwqRa9Do1Eo1zoT7o', NULL),
(3, 'Paco', 'Ramirez', 'paco@gmail.com', '1234', '0000-00-00', 10, 62, 5, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFsdmFyb0BnbWFpbC5jb20iLCJpYXQiOjE1ODM0MzMxMzIsImV4cCI6MTU4MzUxOTUzMn0.Vc_wx3OlqWZGmxt4plGjRk0ZryHwqRa9Do1Eo1zoT7o', NULL),
(4, 'Paco', 'Perez', 'paco@correo.com', '123', '0000-00-00', 2.35, 46.05, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InBhY29AY29ycmVvLmNvbSIsImlhdCI6MTU4Mzg2ODA3MSwiZXhwIjoxNTgzOTU0NDcxfQ.uhQ8ciULimwGVRqS-ZrukRHLxzcpY004exSASCmyWkM', NULL),
(6, 'Antonio', 'Onion', 'toni@gmail.com', '1234', '0000-00-00', 10.05, 51.05, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRvbmlAZ21haWwuY29tIiwiaWF0IjoxNTgyMjEyMTQ1LCJleHAiOjE1ODIyOTg1NDV9.nZDjMJlnxW0Qn7tdmGsd9Wi8g_rWQnNp7EUGEtD31AY', 'C:\\fakepath\\logo.png'),
(7, 'Josico', 'Jose', 'jose@correo.com', '1234', '0000-00-00', -2.69, 54.75, 1, '', 'C:\\fakepath\\22-04-06_1655.jpg'),
(8, 'jaime', 'marquina', 'jaimemarquina96@gmail.com', '1234', '0000-00-00', -2, 53, 1, 'ya29.a0Adw1xeVSDhWqPvbhiqJYfRHlnhI0IsZp_tJJk3v_iRNiIg7wnUds0o9kZaFPysAbwYkonBFFizbnaFYmpTISDp354H3AN9dFYpywW3ztuHjS5tX81IHO2OZUNAkXdxbAm8r7UJ3M032Cc8o3r90sZcpF53FXzmupHFyT', 'C:\\fakepath\\22-04-06_1655.jpg'),
(9, 'jaime', 'marquina', 'jaime_marquina@hotmail.com', '123', '0000-00-00', 12.83, 42.8, 1, 'EAAHEo5Pyc6ABAJ7Qugo5ZAy1RdJleC0gDBKKbtS1hNdVkYOjfemkQgAySIeWcfaGq2IFFTh34fgMmqNEYWAy613iLN1goBYHgpWyZBRAZAy3sq4ZBIOKyHuDGAHY3JHfw3NZAQzkAzyhyZAW61tkCsS09SmyNa3ejFYdE9308mBoVkc9gUrkxS', 'C:\\fakepath\\22-04-06_1655.jpg'),
(11, 'Fran', 'Cuesta', 'fran@correo.com', '1234', '0000-00-00', 10, 56, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZyYW5AY29ycmVvLmNvbSIsImlhdCI6MTU4NDExNDkyOCwiZXhwIjoxNTg0MjAxMzI4fQ.9fasm2tHP1NbMkJZX33hseKRAZ9Rn6pyNKmvQfkNNFE', ''),
(12, 'Jesus', 'Gil', 'jesus@correo.com', '1234', '0000-00-00', 40, 55, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Implc3VzQGNvcnJlby5jb20iLCJpYXQiOjE1ODQxMTUxNDMsImV4cCI6MTU4NDIwMTU0M30.-Kxa1Yykim279nfMo4_rvcA8H0QPIIO8lJhes_qyXHg', ''),
(13, 'Mario', 'Lopez', 'mario@correo.com', '1234', '0000-00-00', 25, 46, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im1hcmlvQGNvcnJlby5jb20iLCJpYXQiOjE1ODQxMTUxNjEsImV4cCI6MTU4NDIwMTU2MX0.IACHZGy193KcCpsLCcKpzeMng0NXmv22KDBbTIWOkk0', ''),
(14, 'Sara', 'Pastor', 'sara@correo.com', '1234', '0000-00-00', -98, 39.5, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InNhcmFAY29ycmVvLmNvbSIsImlhdCI6MTU4NDExNTYxNiwiZXhwIjoxNTg0MjAyMDE2fQ.6Mb4SO48h3kTpWmXyM91ciCKhZ5lETSD8M6zeUWSsVQ', ''),
(15, 'Fer', 'Diaz', 'fer@correo.com', '1234', '0000-00-00', -93.5, 33.76, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZlckBjb3JyZW8uY29tIiwiaWF0IjoxNTg0MTE1NjM3LCJleHAiOjE1ODQyMDIwMzd9.11sGK8w7knCtVFoFKvt6feM9L-XquMfvujOoj8vhYB4', ''),
(16, 'Ruben', 'Perez', 'ruben@correo.com', '123', '0000-00-00', -54, -10, 12, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJ1YmVuQGNvcnJlby5jb20iLCJpYXQiOjE1ODQxMTU4NjEsImV4cCI6MTU4NDIwMjI2MX0.gyrLDsoEC_0CR0ANEDZMRrsvh3zfvVUA0Gll1QYX4Ps', ''),
(17, 'Pablo', 'Marco', 'pablo@correo.com', '123', '0000-00-00', -78.25, -1.25, 11, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InBhYmxvQGNvcnJlby5jb20iLCJpYXQiOjE1ODQxMTU4OTMsImV4cCI6MTU4NDIwMjI5M30.uVeX6aQ2JjtzCMwwUt5cEjj2wmpYYn7oVliMQf5DsLY', ''),
(18, 'Mercedes', 'Mila', 'mercedes@correo.com', '123', '0000-00-00', -73.25, 4, 14, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im1lcmNlZGVzQGNvcnJlby5jb20iLCJpYXQiOjE1ODQxMTU5MTgsImV4cCI6MTU4NDIwMjMxOH0.U3FdQzIWDwn3YLDhV1cP-vLnJJVLyFVr5A-lq6xAYz0', ''),
(19, 'Marta', 'Cañego', 'marta@correo.com', '123', '0000-00-00', -75.25, -10, 13, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im1hcnRhQGNvcnJlby5jb20iLCJpYXQiOjE1ODQxMTU5MzgsImV4cCI6MTU4NDIwMjMzOH0.lGIif1m_65z2e52ZM5O2XTz_m0Yh6T2BRkIFCCUjT2o', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `datosevento`
--
ALTER TABLE `datosevento`
  ADD PRIMARY KEY (`id_evento`) USING BTREE,
  ADD KEY `id_organizador` (`id_organizador`);

--
-- Indices de la tabla `datosidiomas`
--
ALTER TABLE `datosidiomas`
  ADD PRIMARY KEY (`id_idioma`);

--
-- Indices de la tabla `eventousuario`
--
ALTER TABLE `eventousuario`
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_evento` (`id_evento`) USING BTREE;

--
-- Indices de la tabla `idiomasusuario`
--
ALTER TABLE `idiomasusuario`
  ADD KEY `id_idioma` (`id_idioma`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `ubicaciones`
--
ALTER TABLE `ubicaciones`
  ADD PRIMARY KEY (`id_pais`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `id_pais` (`id_pais`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `datosevento`
--
ALTER TABLE `datosevento`
  MODIFY `id_evento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `datosidiomas`
--
ALTER TABLE `datosidiomas`
  MODIFY `id_idioma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `ubicaciones`
--
ALTER TABLE `ubicaciones`
  MODIFY `id_pais` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=194;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `datosevento`
--
ALTER TABLE `datosevento`
  ADD CONSTRAINT `datosevento_ibfk_1` FOREIGN KEY (`id_organizador`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `eventousuario`
--
ALTER TABLE `eventousuario`
  ADD CONSTRAINT `eventousuario_ibfk_1` FOREIGN KEY (`id_evento`) REFERENCES `datosevento` (`id_evento`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `eventousuario_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `idiomasusuario`
--
ALTER TABLE `idiomasusuario`
  ADD CONSTRAINT `idiomasusuario_ibfk_1` FOREIGN KEY (`id_idioma`) REFERENCES `datosidiomas` (`id_idioma`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `idiomasusuario_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_pais`) REFERENCES `ubicaciones` (`id_pais`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
