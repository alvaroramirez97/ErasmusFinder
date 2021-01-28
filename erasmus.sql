-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.23 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.1.0.6116
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para erasmus
DROP DATABASE IF EXISTS `erasmus`;
CREATE DATABASE IF NOT EXISTS `erasmus` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `erasmus`;

-- Volcando estructura para tabla erasmus.datosevento
DROP TABLE IF EXISTS `datosevento`;
CREATE TABLE IF NOT EXISTS `datosevento` (
  `id_evento` int NOT NULL AUTO_INCREMENT,
  `id_organizador` int NOT NULL,
  `destino` varchar(200) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `fecha` date NOT NULL,
  `latitud` double NOT NULL DEFAULT '0',
  `longitud` double NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_evento`) USING BTREE,
  KEY `id_organizador` (`id_organizador`),
  CONSTRAINT `datosevento_ibfk_1` FOREIGN KEY (`id_organizador`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla erasmus.datosevento: ~5 rows (aproximadamente)
DELETE FROM `datosevento`;
/*!40000 ALTER TABLE `datosevento` DISABLE KEYS */;
INSERT INTO `datosevento` (`id_evento`, `id_organizador`, `destino`, `descripcion`, `fecha`, `latitud`, `longitud`) VALUES
	(2, 4, 'Venecia', 'Quedada en la plaza de San Marcos', '2020-03-25', 45.4341, 12.33),
	(6, 4, 'Paris', 'Visita a la torre Eiffel', '2021-02-26', 48.8032, 2.3511),
	(7, 53, 'Tokyo', 'Ruta por Tokyo', '2021-03-31', 35.6895, 139.69171),
	(8, 54, 'China', 'Ruta por la muralla china', '2021-04-15', 35.86166, 104.195397),
	(18, 57, 'Rusia', 'nieve', '2021-01-14', 0, 0);
/*!40000 ALTER TABLE `datosevento` ENABLE KEYS */;

-- Volcando estructura para tabla erasmus.datosidiomas
DROP TABLE IF EXISTS `datosidiomas`;
CREATE TABLE IF NOT EXISTS `datosidiomas` (
  `id_idioma` int NOT NULL AUTO_INCREMENT,
  `nombre_idioma` varchar(200) NOT NULL,
  PRIMARY KEY (`id_idioma`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla erasmus.datosidiomas: ~18 rows (aproximadamente)
DELETE FROM `datosidiomas`;
/*!40000 ALTER TABLE `datosidiomas` DISABLE KEYS */;
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
/*!40000 ALTER TABLE `datosidiomas` ENABLE KEYS */;

-- Volcando estructura para tabla erasmus.eventousuario
DROP TABLE IF EXISTS `eventousuario`;
CREATE TABLE IF NOT EXISTS `eventousuario` (
  `id_evento` int NOT NULL,
  `id_usuario` int NOT NULL,
  KEY `id_usuario` (`id_usuario`),
  KEY `id_evento` (`id_evento`) USING BTREE,
  CONSTRAINT `eventousuario_ibfk_1` FOREIGN KEY (`id_evento`) REFERENCES `datosevento` (`id_evento`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `eventousuario_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla erasmus.eventousuario: ~0 rows (aproximadamente)
DELETE FROM `eventousuario`;
/*!40000 ALTER TABLE `eventousuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `eventousuario` ENABLE KEYS */;

-- Volcando estructura para tabla erasmus.idiomasusuario
DROP TABLE IF EXISTS `idiomasusuario`;
CREATE TABLE IF NOT EXISTS `idiomasusuario` (
  `id_idioma` int NOT NULL,
  `id_usuario` int NOT NULL,
  KEY `id_idioma` (`id_idioma`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `idiomasusuario_ibfk_1` FOREIGN KEY (`id_idioma`) REFERENCES `datosidiomas` (`id_idioma`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `idiomasusuario_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla erasmus.idiomasusuario: ~0 rows (aproximadamente)
DELETE FROM `idiomasusuario`;
/*!40000 ALTER TABLE `idiomasusuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `idiomasusuario` ENABLE KEYS */;

-- Volcando estructura para tabla erasmus.ubicaciones
DROP TABLE IF EXISTS `ubicaciones`;
CREATE TABLE IF NOT EXISTS `ubicaciones` (
  `id_pais` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `codigo_pais` varchar(2) NOT NULL,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL,
  PRIMARY KEY (`id_pais`)
) ENGINE=InnoDB AUTO_INCREMENT=194 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla erasmus.ubicaciones: ~193 rows (aproximadamente)
DELETE FROM `ubicaciones`;
/*!40000 ALTER TABLE `ubicaciones` DISABLE KEYS */;
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
/*!40000 ALTER TABLE `ubicaciones` ENABLE KEYS */;

-- Volcando estructura para tabla erasmus.usuarios
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `apellidos` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `last_update` date DEFAULT '0000-00-00',
  `last_longitud` double NOT NULL DEFAULT '0',
  `last_latitud` double NOT NULL DEFAULT '0',
  `id_pais` int NOT NULL,
  `accessToken` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `foto` varchar(200) DEFAULT 'defecto.png',
  `idioma` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `id_pais` (`id_pais`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_pais`) REFERENCES `ubicaciones` (`id_pais`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla erasmus.usuarios: ~18 rows (aproximadamente)
DELETE FROM `usuarios`;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`id`, `nombre`, `apellidos`, `email`, `password`, `last_update`, `last_longitud`, `last_latitud`, `id_pais`, `accessToken`, `foto`, `idioma`) VALUES
	(4, 'Paco', 'Perez', 'paco@correo.com', '$2b$10$tDku1TnjNl/3QjoKKXKcxOXYoALqNkD81odiJaKJK4h7il7q1VbgS', '0000-00-00', 2.35, 46.05, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InBhY29AY29ycmVvLmNvbSIsImlhdCI6MTU4Mzg2ODA3MSwiZXhwIjoxNTgzOTU0NDcxfQ.uhQ8ciULimwGVRqS-ZrukRHLxzcpY004exSASCmyWkM', NULL, NULL),
	(31, 'prueba', 'cifrado', 'prueba@gmail.com', '$2b$10$tDku1TnjNl/3QjoKKXKcxOXYoALqNkD81odiJaKJK4h7il7q1VbgS', '0000-00-00', 21, 12, 54, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InBydWViYUBnbWFpbC5jb20iLCJpYXQiOjE2MTEzNDgxMDcsImV4cCI6MTYxMTQzNDUwN30.3fSRselLOfr2-6-VvVjUV0W57aK_lwNdrY8X6D4ncc0', '', NULL),
	(33, 'prueba2', 'cifrado', 'cifrado@correo.com', '$2b$10$tDku1TnjNl/3QjoKKXKcxOXYoALqNkD81odiJaKJK4h7il7q1VbgS', '0000-00-00', 34, 33, 54, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNpZnJhZG9AY29ycmVvLmNvbSIsImlhdCI6MTYxMTM0ODE4NiwiZXhwIjoxNjExNDM0NTg2fQ.27fIll7d_YZOBwfaCZlgVA3HPqBqI42LDSVDJ5oL0rg', '', NULL),
	(36, 'john', 'Smith', 'juan@gmail.com', '$2b$10$tDku1TnjNl/3QjoKKXKcxOXYoALqNkD81odiJaKJK4h7il7q1VbgS', '0000-00-00', -3.03104, 39.1479296, 28, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imp1YW5AZ21haWwuY29tIiwiaWF0IjoxNjExNjkzMTc3LCJleHAiOjE2MTE3Nzk1Nzd9.U88qiZ496GtzqQ8c9WKGB0GPgyqK2nGueWB3tTiU3hI', '', 'ingles'),
	(37, 'Paco', 'pass=1234', '2pac@correo.com', '$2b$10$tDku1TnjNl/3QjoKKXKcxOXYoALqNkD81odiJaKJK4h7il7q1VbgS', '0000-00-00', 3, 7, 44, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJwYWNAY29ycmVvLmNvbSIsImlhdCI6MTYxMTQyODE0NSwiZXhwIjoxNjExNTE0NTQ1fQ.HbQmFI0nS49nPZnugOHho8MEKARKckpFEMlgUtUmT1M', '', 'Aleman'),
	(43, 'Samuel', 'López', 'samuel@gmail.com', '$2b$10$tDku1TnjNl/3QjoKKXKcxOXYoALqNkD81odiJaKJK4h7il7q1VbgS', '0000-00-00', 23.75, 54.5, 54, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InNhbXVlbEBnbWFpbC5jb20iLCJpYXQiOjE2MTE2ODY5NjUsImV4cCI6MTYxMTc3MzM2NX0.S2Gp6_L4KkicecYVwiKTqJTKrE7rQkDRvnXEXSzMumw', '', 'Español'),
	(44, 'Julia', 'Ramos', 'julia@gmail.com', '$2b$10$tDku1TnjNl/3QjoKKXKcxOXYoALqNkD81odiJaKJK4h7il7q1VbgS', '0000-00-00', 38.75844, -4.69531, 60, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imp1bGlhQGdtYWlsLmNvbSIsImlhdCI6MTYxMTY4NzMwNCwiZXhwIjoxNjExNzczNzA0fQ.uOYqhU5sX53qFSnwWH8uelI6XwRVe-gOhqTAdW-juOc', '', 'ingles'),
	(45, 'Roberto', 'Gutierrez', 'roberto@gmail.com', '$2b$10$tDku1TnjNl/3QjoKKXKcxOXYoALqNkD81odiJaKJK4h7il7q1VbgS', '0000-00-00', 42.83333, 12.83333, 82, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJvYmVydG9AZ21haWwuY29tIiwiaWF0IjoxNjExNjg4NDE0LCJleHAiOjE2MTE3NzQ4MTR9.g-X7NHWrnA6zg3gZPezhb3_dIDSiIKBfw1uMfO26JF0', '', 'italiano'),
	(46, 'Michael', 'Owen', 'michael@gmail.com', '$2b$10$tDku1TnjNl/3QjoKKXKcxOXYoALqNkD81odiJaKJK4h7il7q1VbgS', '0000-00-00', -98.5, 39.76, 180, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im1pY2hhZWxAZ21haWwuY29tIiwiaWF0IjoxNjExNjg4NTE5LCJleHAiOjE2MTE3NzQ5MTl9.fDo-95Z0h-5-aWtEk3-DXx9NpyQmIMnhhQlVJ90d-fo', '', 'ingles'),
	(47, 'Dimitri', 'Vegas', 'dimitri@gmail.com', '$2b$10$tDku1TnjNl/3QjoKKXKcxOXYoALqNkD81odiJaKJK4h7il7q1VbgS', '0000-00-00', 49, 32, 178, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRpbWl0cmlAZ21haWwuY29tIiwiaWF0IjoxNjExNjg4NjYyLCJleHAiOjE2MTE3NzUwNjJ9.YuejcuBvcPh7NsiOt9pN95Q54fbSUaWARvQU0RqsEtw', '', 'ucraniano'),
	(48, 'Congo', 'Mohamed', 'congo@gmail.com', '$2b$10$tDku1TnjNl/3QjoKKXKcxOXYoALqNkD81odiJaKJK4h7il7q1VbgS', '0000-00-00', -2.5, 23.5, 191, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNvbmdvQGdtYWlsLmNvbSIsImlhdCI6MTYxMTY4ODc1NywiZXhwIjoxNjExNzc1MTU3fQ.abXGK4RoOdC50xd1vjSmomUWLE9m1itVdp7WCzGx2-8', '', 'francés'),
	(49, 'Rock', 'Johnson', 'rock@gmail.com', '$2b$10$tDku1TnjNl/3QjoKKXKcxOXYoALqNkD81odiJaKJK4h7il7q1VbgS', '0000-00-00', 46, 10, 46, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJvY2tAZ21haWwuY29tIiwiaWF0IjoxNjExNjg4Nzg2LCJleHAiOjE2MTE3NzUxODZ9.7OwQnDY4NUMtxVqSs3DnQaj71LxWU70QC1aCxNd79I0', '', 'ingles'),
	(50, 'Mesut', 'Ozil', 'mesut@gmail.com', '$2b$10$tDku1TnjNl/3QjoKKXKcxOXYoALqNkD81odiJaKJK4h7il7q1VbgS', '0000-00-00', 10.5, 51.5, 44, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im1lc3V0QGdtYWlsLmNvbSIsImlhdCI6MTYxMTY4OTEzMCwiZXhwIjoxNjExNzc1NTMwfQ.Shjaxoz2A55L4KDFtHdi18r53tzjOmi3MxF6D-E03zQ', '', 'aleman'),
	(51, 'Mick', 'Jagger', 'mick@gmail.com', '$2b$10$tDku1TnjNl/3QjoKKXKcxOXYoALqNkD81odiJaKJK4h7il7q1VbgS', '0000-00-00', -113.64258, 60.10867, 29, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im1pY2tAZ21haWwuY29tIiwiaWF0IjoxNjExNjg5MTk3LCJleHAiOjE2MTE3NzU1OTd9.A59jSMtjnPQ17BdYmBpJ98twfnjayRKUfI0HzosPvrg', '', 'ingles'),
	(52, 'Miroslav', 'Vidic', 'miroslav@gmail.com', '$2b$10$tDku1TnjNl/3QjoKKXKcxOXYoALqNkD81odiJaKJK4h7il7q1VbgS', '0000-00-00', 100, 60, 145, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im1pcm9zbGF2QGdtYWlsLmNvbSIsImlhdCI6MTYxMTY4OTIzNCwiZXhwIjoxNjExNzc1NjM0fQ.Qc7bQggxF9ocQ1n10YordWnZXuetL7B9rrmChRVwlFo', '', 'ruso'),
	(53, 'Kotaro', 'Kot', 'kotaro@gmail.com', '$2b$10$tDku1TnjNl/3QjoKKXKcxOXYoALqNkD81odiJaKJK4h7il7q1VbgS', '0000-00-00', 139.75309, 35.68536, 85, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImtvdGFyb0BnbWFpbC5jb20iLCJpYXQiOjE2MTE2ODkyNzgsImV4cCI6MTYxMTc3NTY3OH0.vtZCLc7MAYRzV0PjyE8K21daAdXWrEZYIFsRjk1CWMg', '', 'japones'),
	(54, 'Wu', 'Lei', 'wu@gmail.com', '$2b$10$tDku1TnjNl/3QjoKKXKcxOXYoALqNkD81odiJaKJK4h7il7q1VbgS', '0000-00-00', 105, 35, 37, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ind1QGdtYWlsLmNvbSIsImlhdCI6MTYxMTY4OTMwMywiZXhwIjoxNjExNzc1NzAzfQ.WyH3DwY4B8gas8nZBh1Uxs9fXS_uKnVKnP6rKxnnJjA', '', 'chino'),
	(57, 'Alvaro', 'Ramirez', 'alvaro@ramirez.com', '$2b$10$tDku1TnjNl/3QjoKKXKcxOXYoALqNkD81odiJaKJK4h7il7q1VbgS', '0000-00-00', -3.03104, 39.1479296, 135, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFsdmFyb0ByYW1pcmV6LmNvbSIsImlhdCI6MTYxMTg2MTk1MCwiZXhwIjoxNjExOTQ4MzUwfQ.BJe78N0a4OuahapCMY0QgGsEdQyDVJbR9QjNSvjzJEU', '', 'frances');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
