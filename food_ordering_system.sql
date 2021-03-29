-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th3 21, 2021 lúc 12:27 PM
-- Phiên bản máy phục vụ: 10.4.18-MariaDB
-- Phiên bản PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `food_ordering_system`
--
CREATE DATABASE IF NOT EXISTS `food_ordering_system` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `food_ordering_system`;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customer`
--

CREATE TABLE `customer` (
  `CUSTOMER_ID` int(11) NOT NULL,
  `NAME` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `PHONE` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `VISITED` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `customer`
--

INSERT INTO `customer` (`CUSTOMER_ID`, `NAME`, `PHONE`, `VISITED`) VALUES
(1, 'Lâm Văn Lương', '0127648256', 8),
(2, 'Hồ Ngọc Lan', '0917462742', 8),
(3, 'Trương Vân Lâm', '0915425647', 8),
(4, 'Dương Thủy Tiên', '016728645', 8),
(5, 'Nguyễn Trọng Thông', '0162776930', 8);



CREATE TABLE `auth` (
  `AUTH_ID` int(11) NOT NULL,
  `TOKEN` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `STAFF_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE `auth`
  ADD PRIMARY KEY (`AUTH_ID`);
-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customer_promo`
--

CREATE TABLE `customer_promo` (
  `CUSTOMER_ID` int(11) NOT NULL,
  `PROMO_ID` int(11) NOT NULL,
  `USED` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `customer_promo`
--

INSERT INTO `customer_promo` (`CUSTOMER_ID`, `PROMO_ID`, `USED`) VALUES
(1, 2, 3),
(2, 2, 2),
(1, 2, 3),
(2, 2, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dish`
--

CREATE TABLE `dish` (
  `DISH_ID` int(11) NOT NULL,
  `NAME` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `TYPE_ID` int(11) NOT NULL,
  `DESCRIPTION` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `RATION` int(11) NOT NULL COMMENT 'KHẨU PHẦN ĂN BAO NHIEU',
  `STATUS` bit(2) NOT NULL,
  `PRICE` int(11) NOT NULL,
  `DISCOUNT` int(11) NOT NULL,
  `TIME_SLOT` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `dish`
--

INSERT INTO `dish` (`DISH_ID`, `NAME`, `TYPE_ID`, `DESCRIPTION`, `RATION`, `STATUS`, `PRICE`, `DISCOUNT`, `TIME_SLOT`) VALUES
(1, 'Lẩu cá thác lác', 1, 'Lẩu cá thác lác với khổ qua', 5, b'01', 350000, 0, 'Bữa tối'),
(2, 'Lẩu đuôi bò', 1, 'Lẩu đuôi bò hầm nấm', 5, b'01', 360000, 0, 'Bữa tối'),
(3, 'Lẩu gà cay', 1, 'Lẩu gà tiềm ớt hiểm', 5, b'01', 370000, 0, 'Bữa tối'),
(4, 'Bao tử hầm tiêu', 2, 'Bao tử bò hầm tiêu xanh', 3, b'01', 250000, 0, 'Bữa chiều'),
(5, 'Bò lá nốt', 2, 'Bò lá nốt ăn kèm bún và chuối xanh', 2, b'01', 150000, 0, 'Bữa chiều'),
(6, 'Gà nướng muối ớt', 2, 'Gà nướng muối ớt nguyên con', 5, b'01', 300000, 0, 'Bữa trưa'),
(7, 'Bào xào cần', 2, 'Thịt bò xào cần tây', 3, b'01', 150000, 0, 'Bữa chiều'),
(8, 'Chân gà nướng', 3, 'Chân gà nướng muối ớt', 2, b'01', 100000, 0, 'Bữa chiều'),
(9, 'Khoai tây chiênn', 3, 'Khoai tây chiênn 1 dĩa', 1, b'01', 45000, 0, 'Bữa chiều'),
(10, 'Bánh bao chiên', 3, 'Bánh bao nhỏ nhân thịt chiên', 1, b'01', 10000, 0, 'Bữa chiều'),
(11, 'Bia', 4, 'Bia heneike', 1, b'01', 22000, 0, ''),
(12, 'Coca', 4, 'Nước ngọt cocacola', 1, b'01', 15000, 0, ''),
(13, 'Pepsi', 4, 'Nước ngọt pepsi', 1, b'01', 15000, 0, ''),
(14, 'Nước', 4, 'Aquafina', 1, b'01', 10000, 0, ''),
(15, 'Nho', 5, 'Nho Mỹ tráng miệng', 4, b'01', 45000, 0, ''),
(16, 'Bánh flan', 5, 'Bánh flan tráng miệng', 1, b'01', 22000, 0, ''),
(17, 'Rau câu', 5, 'Rau câu tráng miệng', 4, b'01', 15000, 0, ''),
(18, 'Bún', 3, 'Bún lẩu thêm', 1, b'01', 10000, 0, 'Bữa tối'),
(19, 'Nước lẩu', 3, 'Nước lẩu thêm', 1, b'01', 10000, 0, 'Bữa tối'),
(20, 'Rau', 3, 'Rau nhúng lẩu', 1, b'01', 10000, 0, 'Bữa tối'),
(21, 'Bạch tuộc nướng', 2, 'Bạch tuộc nướng sate', 3, b'01', 150000, 0, 'Bữa tối'),
(22, 'Hàu nướng', 2, 'Hùa nướng mỡ hành', 3, b'01', 170000, 0, 'Bữa tối'),
(23, 'Cơm chiên', 2, 'Cơm chiên cá mặn', 3, b'01', 150000, 0, 'Bữa tối'),
(24, 'Bia 333', 4, 'Bia 333', 5, b'01', 30000, 0, 'Bữa tối'),
(25, 'Soda chanh', 4, 'Soda chanh', 1, b'01', 35000, 0, 'Bữa tối'),
(26, 'Nước mơ', 4, 'Nước mơ', 1, b'01', 35000, 0, 'Bữa tối'),
(27, 'Sting', 4, 'Sting', 1, b'01', 22000, 0, 'Bữa tối'),
(28, '7 up', 4, '7 up', 1, b'01', 22000, 0, 'Bữa tối'),
(29, 'Xá xị', 4, 'Xá xị', 1, b'01', 22000, 0, 'Bữa tối');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `image_dish`
--

CREATE TABLE `image_dish` (
  `IMG_ID` int(11) NOT NULL,
  `DISH_ID` int(11) NOT NULL,
  `SRC` varchar(500) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `image_dish`
--

INSERT INTO `image_dish` (`IMG_ID`, `DISH_ID`, `SRC`) VALUES
(1, 1, './dish/1_1.jpg'),
(2, 2, './dish/2_2.jpg'),
(3, 3, './dish/3_3.jpg'),
(4, 4, './dish/4_4.jpg'),
(5, 5, './dish/5_5.jpg'),
(6, 6, './dish/6_6.jpg'),
(7, 7, './dish/7_7.jpg'),
(8, 8, './dish/8_8.jpg'),
(9, 9, './dish/9_9.jpg'),
(10, 10, './dish/10_10.jpg'),
(11, 11, './dish/11_11.jpg'),
(12, 12, './dish/12_12.jpg'),
(13, 13, './dish/13_13.jpg'),
(14, 14, './dish/14_14.jpg'),
(15, 15, './dish/15_15.jpg'),
(16, 16, './dish/16_16.jpg'),
(17, 17, './dish/17_17.jpg'),
(18, 18, './dish/18_18.jpg'),
(19, 19, './dish/19_19.jpg'),
(20, 20, './dish/20_20.jpg'),
(21, 21, './dish/21_21.jpg'),
(22, 22, './dish/22_22.jpg'),
(23, 23, './dish/23_23.jpg'),
(24, 24, './dish/24_24.jpg'),
(25, 25, './dish/25_25.jpg'),
(26, 26, './dish/26_26.jpg'),
(27, 27, './dish/27_27.jpg'),
(28, 28, './dish/28_28.jpg'),
(29, 29, './dish/29_29.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `invoice`
--

CREATE TABLE `invoice` (
  `INVOICE_ID` int(11) NOT NULL,
  `CREATED_AT` datetime NOT NULL,
  `TABLE_ID` int(11) NOT NULL,
  `PROMO_ID` int(11) NOT NULL,
  `TAX` float NOT NULL,
  `TOTAL_PRICE` int(11) NOT NULL,
  `NET_PRICE` int(11) NOT NULL,
  `MONEY_RECEIVED` int(11) NOT NULL,
  `MONEY_CHANGE` int(11) NOT NULL,
  `STAFF_ID` int(11) NOT NULL,
  `CUSTOMER_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `invoice`
--

INSERT INTO `invoice` (`INVOICE_ID`, `CREATED_AT`, `TABLE_ID`, `PROMO_ID`, `TAX`, `TOTAL_PRICE`, `NET_PRICE`, `MONEY_RECEIVED`, `MONEY_CHANGE`, `STAFF_ID`, `CUSTOMER_ID`) VALUES
(1, '2021-03-08 09:15:01', 1, 1, 0.1, 1723000, 947650, 950000, 2350, 2, 2),
(2, '2021-03-08 09:30:11', 2, 1, 0.1, 1605000, 882750, 900000, 17250, 2, 2),
(3, '2021-03-08 09:34:10', 3, 1, 0.1, 1240000, 682000, 700000, 18000, 2, 2),
(4, '2021-03-08 09:51:01', 4, 1, 0.1, 1526000, 839300, 850000, 11700, 2, 2),
(5, '2021-03-08 10:01:02', 5, 1, 0.1, 2140000, 1177000, 1200000, 33000, 2, 2),
(6, '2021-03-08 10:03:56', 3, 1, 0.1, 2363000, 1299650, 1300000, 1350, 2, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `invoice_detail`
--

CREATE TABLE `invoice_detail` (
  `INVOICE_ID` int(11) NOT NULL,
  `ORDER_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `invoice_detail`
--

INSERT INTO `invoice_detail` (`INVOICE_ID`, `ORDER_ID`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `ORDER_ID` int(11) NOT NULL,
  `TABLE_ID` int(11) NOT NULL,
  `CREATED_AT` datetime NOT NULL,
  `UPDATED_AT` datetime DEFAULT NULL,
  `STATUS` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`ORDER_ID`, `TABLE_ID`, `CREATED_AT`, `UPDATED_AT`, `STATUS`) VALUES
(1, 1, '2021-03-21 09:52:44', '2021-03-21 09:52:44', 'ĐÃ THANH TOÁN'),
(2, 2, '2021-03-21 09:52:44', '2021-03-21 09:52:44', 'ĐÃ THANH TOÁN'),
(3, 3, '2021-03-21 09:52:44', '2021-03-21 09:52:44', 'ĐÃ THANH TOÁN'),
(4, 4, '2021-03-21 09:52:44', '2021-03-21 09:52:44', 'ĐÃ THANH TOÁN'),
(5, 3, '2021-03-17 15:53:44', '2021-03-18 15:53:44', 'ĐÃ THANH TOÁN');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_detail`
--

CREATE TABLE `order_detail` (
  `ORDER_ID` int(11) NOT NULL,
  `DISH_ID` int(11) NOT NULL,
  `QUANTITY` int(11) NOT NULL,
  `NOTE` varchar(1000) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `order_detail`
--

INSERT INTO `order_detail` (`ORDER_ID`, `DISH_ID`, `QUANTITY`, `NOTE`) VALUES
(1, 1, 2, ''),
(2, 2, 4, ''),
(3, 3, 5, ''),
(4, 4, 9, ''),
(5, 5, 2, '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `position`
--

CREATE TABLE `position` (
  `POSITION_ID` int(11) NOT NULL,
  `TITLE` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `position`
--

INSERT INTO `position` (`POSITION_ID`, `TITLE`) VALUES
(1, 'Quản lý'),
(2, 'Thu Ngân'),
(3, 'Đầu bếp'),
(4, 'Nhân viên pha chế'),
(5, 'Phục vụ');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `promo`
--

CREATE TABLE `promo` (
  `PROMO_ID` int(11) NOT NULL,
  `NAME` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `PERCENT` float DEFAULT NULL,
  `MINIMUM_PRICE` int(11) DEFAULT NULL,
  `PRE_CONDITION` int(11) DEFAULT NULL,
  `EXPIRED` datetime DEFAULT NULL,
  `AVAIABLE` bit(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `promo`
--

INSERT INTO `promo` (`PROMO_ID`, `NAME`, `PERCENT`, `MINIMUM_PRICE`, `PRE_CONDITION`, `EXPIRED`, `AVAIABLE`) VALUES
(1, 'KHUYỄN MÃI KHAI TRƯƠNG LÊN ĐẾN 50%', 50, 1000000, 0, '2021-03-31 13:54:59', b'01'),
(2, 'KHUYẾN MÃI 10% KHI THANH TOÁN QUA MOMO', 10, 500000, 0, '2021-03-31 13:55:22', b'01');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `recommend_dish`
--

CREATE TABLE `recommend_dish` (
  `DISH_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `recommend_dish`
--

INSERT INTO `recommend_dish` (`DISH_ID`) VALUES
(1),
(4),
(8);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `staff`
--

CREATE TABLE `staff` (
  `STAFF_ID` int(11) NOT NULL,
  `NAME_STAFF` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `PHONE` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `EMAIL` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `USERNAME` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `PASSWORD` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `POSITION_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `staff`
--

INSERT INTO `staff` (`STAFF_ID`, `NAME_STAFF`, `PHONE`, `EMAIL`, `USERNAME`, `PASSWORD`, `POSITION_ID`) VALUES
(1, 'Trần Văn Chín', '0162776930', 'tvchin@gmail.com', 'ADMIN1', '$2b$10$AzH8RnEa9/06auG4YrTzR..MHfWzk6aX0y3zeI7N492Na/DorVzxu', 1),
(2, 'Đỗ Ngọc Ngân', '5669849845', 'dnngan@gmail.com', 'staff2', '$2b$10$AzH8RnEa9/06auG4YrTzR..MHfWzk6aX0y3zeI7N492Na/DorVzxu', 2),
(3, 'Đặng Ngọc Anh', '5974685129', 'dnanh@gmail.com', 'staff3', '$2b$10$AzH8RnEa9/06auG4YrTzR..MHfWzk6aX0y3zeI7N492Na/DorVzxu', 3),
(4, 'Đinh Quốc Dũng', '8596478596', 'dqdung@gmail.com', 'staff4', '$2b$10$AzH8RnEa9/06auG4YrTzR..MHfWzk6aX0y3zeI7N492Na/DorVzxu', 4),
(5, 'Nguyễn Hào Quang', '8956859684', 'nhquang@gmail.com', 'staff5', '$2b$10$AzH8RnEa9/06auG4YrTzR..MHfWzk6aX0y3zeI7N492Na/DorVzxu', 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tables`
--

CREATE TABLE `tables` (
  `TABLE_ID` int(11) NOT NULL,
  `FLOOR` int(11) NOT NULL,
  `NUM_PEOPLE` int(11) NOT NULL,
  `STATUS` bit(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tables`
--

INSERT INTO `tables` (`TABLE_ID`, `FLOOR`, `NUM_PEOPLE`, `STATUS`) VALUES
(1, 1, 4, b'00'),
(2, 1, 2, b'00'),
(3, 1, 6, b'00'),
(4, 2, 4, b'00'),
(5, 2, 4, b'00'),
(6, 2, 6, b'00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `type_of_dish`
--

CREATE TABLE `type_of_dish` (
  `TYPE_ID` int(11) NOT NULL,
  `NAME` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `type_of_dish`
--

INSERT INTO `type_of_dish` (`TYPE_ID`, `NAME`) VALUES
(1, 'Lẩu'),
(2, 'Món chính'),
(3, 'Món phụ'),
(4, 'Thức uống'),
(5, 'Tráng miệng');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`CUSTOMER_ID`);

--
-- Chỉ mục cho bảng `customer_promo`
--
ALTER TABLE `customer_promo`
  ADD KEY `FK_CUSTOMER_ID` (`CUSTOMER_ID`),
  ADD KEY `FK_POSITION_ID1` (`PROMO_ID`);

--
-- Chỉ mục cho bảng `dish`
--
ALTER TABLE `dish`
  ADD PRIMARY KEY (`DISH_ID`),
  ADD KEY `FK_TYPE_OF_DISH` (`TYPE_ID`);

--
-- Chỉ mục cho bảng `image_dish`
--
ALTER TABLE `image_dish`
  ADD PRIMARY KEY (`IMG_ID`),
  ADD KEY `FK_DISH_ID3` (`DISH_ID`);

--
-- Chỉ mục cho bảng `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`INVOICE_ID`),
  ADD KEY `FK_TABLE_ID2` (`TABLE_ID`),
  ADD KEY `FK_PROMO_ID2` (`PROMO_ID`),
  ADD KEY `FK_STAFF_ID3` (`STAFF_ID`);

--
-- Chỉ mục cho bảng `invoice_detail`
--
ALTER TABLE `invoice_detail`
  ADD PRIMARY KEY (`INVOICE_ID`,`ORDER_ID`),
  ADD KEY `FK_ORDER_ID5` (`ORDER_ID`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`ORDER_ID`),
  ADD KEY `FK_ORDER_ID` (`TABLE_ID`);

--
-- Chỉ mục cho bảng `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`ORDER_ID`,`DISH_ID`),
  ADD KEY `FK_DISH_ID4` (`DISH_ID`);

--
-- Chỉ mục cho bảng `position`
--
ALTER TABLE `position`
  ADD PRIMARY KEY (`POSITION_ID`);

--
-- Chỉ mục cho bảng `promo`
--
ALTER TABLE `promo`
  ADD PRIMARY KEY (`PROMO_ID`);

--
-- Chỉ mục cho bảng `recommend_dish`
--
ALTER TABLE `recommend_dish`
  ADD KEY `FK_DISH_ID2` (`DISH_ID`);

--
-- Chỉ mục cho bảng `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`STAFF_ID`),
  ADD KEY `FK_POSITION_ID` (`POSITION_ID`);

--
-- Chỉ mục cho bảng `tables`
--
ALTER TABLE `tables`
  ADD PRIMARY KEY (`TABLE_ID`);

--
-- Chỉ mục cho bảng `type_of_dish`
--
ALTER TABLE `type_of_dish`
  ADD PRIMARY KEY (`TYPE_ID`);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `customer_promo`
--
ALTER TABLE `customer_promo`
  ADD CONSTRAINT `FK_CUSTOMER_ID` FOREIGN KEY (`CUSTOMER_ID`) REFERENCES `customer` (`CUSTOMER_ID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_POSITION_ID1` FOREIGN KEY (`PROMO_ID`) REFERENCES `promo` (`PROMO_ID`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `dish`
--
ALTER TABLE `dish`
  ADD CONSTRAINT `FK_TYPE_OF_DISH` FOREIGN KEY (`TYPE_ID`) REFERENCES `type_of_dish` (`TYPE_ID`);

--
-- Các ràng buộc cho bảng `image_dish`
--
ALTER TABLE `image_dish`
  ADD CONSTRAINT `FK_DISH_ID3` FOREIGN KEY (`DISH_ID`) REFERENCES `dish` (`DISH_ID`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `invoice`
--
ALTER TABLE `invoice`
  ADD CONSTRAINT `FK_PROMO_ID2` FOREIGN KEY (`PROMO_ID`) REFERENCES `promo` (`PROMO_ID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_STAFF_ID3` FOREIGN KEY (`STAFF_ID`) REFERENCES `staff` (`STAFF_ID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_TABLE_ID2` FOREIGN KEY (`TABLE_ID`) REFERENCES `tables` (`TABLE_ID`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `invoice_detail`
--
ALTER TABLE `invoice_detail`
  ADD CONSTRAINT `FK_INVOICE_ID3` FOREIGN KEY (`INVOICE_ID`) REFERENCES `invoice` (`INVOICE_ID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_ORDER_ID5` FOREIGN KEY (`ORDER_ID`) REFERENCES `orders` (`ORDER_ID`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `FK_ORDER_ID` FOREIGN KEY (`TABLE_ID`) REFERENCES `tables` (`TABLE_ID`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `order_detail`
--
ALTER TABLE `order_detail`
  ADD CONSTRAINT `FK_DISH_ID4` FOREIGN KEY (`DISH_ID`) REFERENCES `dish` (`DISH_ID`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_ORDER_ID1` FOREIGN KEY (`ORDER_ID`) REFERENCES `orders` (`ORDER_ID`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `recommend_dish`
--
ALTER TABLE `recommend_dish`
  ADD CONSTRAINT `FK_DISH_ID2` FOREIGN KEY (`DISH_ID`) REFERENCES `dish` (`DISH_ID`);

--
-- Các ràng buộc cho bảng `staff`
--
ALTER TABLE `staff`
  ADD CONSTRAINT `FK_POSITION_ID` FOREIGN KEY (`POSITION_ID`) REFERENCES `position` (`POSITION_ID`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
