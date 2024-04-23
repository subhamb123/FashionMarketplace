CREATE TABLE IF NOT EXISTS USERS (
    email TEXT PRIMARY KEY NOT NULL,
    password TEXT NOT NULL,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    username TEXT NOT NULL,
    user_type TEXT NOT NULL CHECK(user_type IN ('admin', 'user'))
);


CREATE TABLE IF NOT EXISTS ITEMS (
    itemid TEXT PRIMARY KEY NOT NULL,
    category TEXT NOT NULL,
    subcategory TEXT NOT NULL,
    price REAL NOT NULL,
    designer TEXT NOT NULL,
    title TEXT NOT NULL,
    style TEXT NOT NULL,
    size TEXT,
    seller TEXT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS FAVORITES (
    user_email TEXT NOT NULL,
    item_id TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_email) REFERENCES USERS(email),
    FOREIGN KEY (item_id) REFERENCES ITEMS(itemid),
    PRIMARY KEY (user_email, item_id)
);


CREATE TABLE IF NOT EXISTS STAFFPICK (
    itemid TEXT PRIMARY KEY NOT NULL,
    FOREIGN KEY (itemid) REFERENCES ITEMS(itemid)
);


DELETE FROM USERS;

DELETE FROM ITEMS;

INSERT INTO USERS (email, password, firstname, lastname, username, user_type) 
VALUES 
    ('admin@example.com', 'adminpassword', 'Admin', 'User', 'admin','admin'),
    ('user@example.com', 'userpassword', 'User', 'User', 'user','user');

INSERT INTO USERS (email, password, firstname, lastname, username, user_type) 
VALUES 
    ('Wearwolf@example.com', 'sellerpassword', 'Wear', 'Wolf', 'Wearwolf', 'user'),
    ('secundostore@example.com', 'sellerpassword', 'secudno', 'store', 'secundostore', 'user'),
    ('ArchiveMess@example.com', 'sellerpassword', 'Archive', 'Mess', 'ArchiveMess', 'user');


INSERT INTO ITEMS (itemid, category, subcategory, price, designer, title, style, size, seller, timestamp) 
VALUES 
    ('011', 'Menswear', 'Tops', 399.99, 'Chrome Hearts', 'Chrome Hearts Logo Print Hoodie', 'Streetwear', 'M', 'secundostore@example.com', '2023-12-15 08:30:00'),
    ('012', 'Menswear', 'Bottoms', 499.99, 'Vetements', 'Vetements Logo Embroidered Jeans', 'Streetwear', '32', 'Wearwolf@example.com', '2023-12-20 10:45:00'),
    ('013', 'Womenswear', 'Tops', 899.99, 'Gucci', 'Gucci Floral Print Silk Blouse', 'Luxury', 'S', 'Wearwolf@example.com', '2023-12-22 12:15:00'),
    ('014', 'Womenswear', 'Dresses', 1499.99, 'Versace', 'Versace Medusa Embellished Mini Dress', 'Luxury', 'XS', 'ArchiveMess@example.com', '2023-12-25 14:20:00'),
    ('015', 'Menswear', 'Footwear', 1199.99, 'Prada', 'Prada Leather Chelsea Boots', 'Classic', '10', 'Wearwolf@example.com', '2023-12-28 16:30:00'),
    ('016', 'Womenswear', 'Footwear', 1399.99, 'Jimmy Choo', 'Jimmy Choo Crystal-Embellished Sandals', 'Elegant', '7', 'Wearwolf@example.com', '2023-12-30 18:45:00'),
    ('017', 'Womenswear', 'Bags & Luggage', 2499.99, 'Louis Vuitton', 'Louis Vuitton Monogram Canvas Neverfull Bag', 'Luxury', 'One Size', 'secundostore@example.com', '2024-01-03 09:00:00'),
    ('018', 'Menswear', 'Accessories', 499.99, 'Ray-Ban', 'Ray-Ban Wayfarer Sunglasses', 'Classic', 'One Size', 'Wearwolf@example.com', '2024-01-06 11:30:00'),
    ('019', 'Menswear', 'Outerwear', 1999.99, 'Burberry', 'Burberry Cashmere Trench Coat', 'Classic', 'L', 'ArchiveMess@example.com', '2024-01-09 13:45:00'),
    ('020', 'Womenswear', 'Accessories', 799.99, 'Chrome Hearts', 'Chrome Hearts Sterling Silver Cross Pendant Necklace', 'Streetwear', 'One Size', 'Wearwolf@example.com', '2024-01-12 15:20:00'),
    ('021', 'Menswear', 'Tops', 599.99, 'Vetements', 'Vetements Oversized Graphic Print T-shirt', 'Streetwear', 'XL', 'secundostore@example.com', '2024-01-15 17:30:00'),
    ('022', 'Menswear', 'Bottoms', 699.99, 'Gucci', 'Gucci Logo Embroidered Track Pants', 'Streetwear', '34', 'Wearwolf@example.com', '2024-01-18 19:40:00'),
    ('023', 'Womenswear', 'Tops', 1099.99, 'Versace', 'Versace Baroque Print Silk Shirt', 'Luxury', 'M', 'Wearwolf@example.com', '2024-01-21 08:50:00'),
    ('024', 'Womenswear', 'Dresses', 1699.99, 'Chanel', 'Chanel Tweed Shift Dress', 'Luxury', 'S', 'secundostore@example.com', '2024-01-24 10:15:00'),
    ('025', 'Menswear', 'Footwear', 1299.99, 'Prada', 'Prada Suede Loafers', 'Classic', '9', 'Wearwolf@example.com', '2024-01-27 12:30:00'),
    ('026', 'Womenswear', 'Footwear', 1599.99, 'Jimmy Choo', 'Jimmy Choo Glitter Pumps', 'Elegant', '6', 'ArchiveMess@example.com', '2024-01-30 14:45:00'),
    ('027', 'Womenswear', 'Bags & Luggage', 2799.99, 'Louis Vuitton', 'Louis Vuitton Epi Leather Alma Bag', 'Luxury', 'One Size', 'Wearwolf@example.com', '2024-02-02 16:00:00'),
    ('028', 'Menswear', 'Accessories', 549.99, 'Ray-Ban', 'Ray-Ban Clubmaster Sunglasses', 'Classic', 'One Size', 'Wearwolf@example.com', '2024-02-05 18:20:00'),
    ('029', 'Menswear', 'Outerwear', 2199.99, 'Burberry', 'Burberry Quilted Jacket', 'Classic', 'L', 'secundostore@example.com', '2024-02-08 20:40:00'),
    ('030', 'Womenswear', 'Accessories', 899.99, 'Vetements', 'Vetements Logo Print Leather Belt', 'Streetwear', 'One Size', 'Wearwolf@example.com', '2024-02-11 09:10:00'),
    ('031', 'Menswear', 'Tops', 299.99, 'Yves Saint Laurent', 'Yves Saint Laurent Logo Graphic T-shirt', 'Streetwear', 'L', 'secundostore@example.com', '2023-11-15 08:30:00'),
    ('032', 'Menswear', 'Bottoms', 59.99, 'Ralph Lauren', 'Ralph Lauren Slim Fit Chinos', 'Classic', '33', 'secundostore@example.com', '2023-11-20 10:45:00'),
    ('033', 'Womenswear', 'Tops', 699.99, 'Dior', 'Dior Embroidered Logo Sweatshirt', 'Luxury', 'M', 'ArchiveMess@example.com', '2023-11-22 12:15:00'),
    ('034', 'Womenswear', 'Dresses', 1299.99, 'Balenciaga', 'Balenciaga Oversized Shirt Dress', 'Streetwear', 'S', 'Wearwolf@example.com', '2023-11-25 14:20:00'),
    ('035', 'Menswear', 'Footwear', 999.99, 'Gucci', 'Gucci Leather Loafers', 'Luxury', '8', 'ArchiveMess@example.com', '2023-11-28 16:30:00'),
    ('036', 'Womenswear', 'Footwear', 1199.99, 'Alexander McQueen', 'Alexander McQueen Oversized Sneakers', 'Streetwear', '7', 'Wearwolf@example.com', '2023-11-30 18:45:00'),
    ('037', 'Womenswear', 'Bags & Luggage', 1999.99, 'Saint Laurent', 'Saint Laurent Monogram Leather Crossbody Bag', 'Luxury', 'One Size', 'ArchiveMess@example.com', '2023-12-03 09:00:00'),
    ('038', 'Menswear', 'Accessories', 399.99, 'Oakley', 'Oakley Polarized Sports Sunglasses', 'Sportswear', 'One Size', 'ArchiveMess@example.com', '2023-12-06 11:30:00'),
    ('039', 'Menswear', 'Outerwear', 1599.99, 'Moncler', 'Moncler Quilted Down Jacket', 'Luxury', 'M', 'Wearwolf@example.com', '2023-12-09 13:45:00'),
    ('040', 'Womenswear', 'Accessories', 599.99, 'Fendi', 'Fendi Logo Print Scarf', 'Luxury', 'One Size', 'secundostore@example.com', '2023-12-12 15:20:00'),
    ('041', 'Menswear', 'Tops', 39.99, 'Polo Ralph Lauren', 'Polo Ralph Lauren Cotton Oxford Shirt', 'Classic', 'XL', 'Wearwolf@example.com', '2023-12-15 17:30:00'),
    ('042', 'Menswear', 'Bottoms', 49.99, 'Tommy Hilfiger', 'Tommy Hilfiger Slim Fit Jeans', 'Streetwear', '32', 'secundostore@example.com', '2023-12-18 19:40:00'),
    ('043', 'Womenswear', 'Tops', 999.99, 'Burberry', 'Burberry Logo Embroidered Polo Shirt', 'Classic', 'XS', 'ArchiveMess@example.com', '2023-12-21 08:50:00'),
    ('044', 'Womenswear', 'Dresses', 1799.99, 'Valentino', 'Valentino Lace Midi Dress', 'Luxury', 'S', 'ArchiveMess@example.com', '2023-12-24 10:15:00'),
    ('045', 'Menswear', 'Footwear', 1099.99, 'Salvatore Ferragamo', 'Salvatore Ferragamo Leather Sneakers', 'Classic', '9', 'ArchiveMess@example.com', '2023-12-27 12:30:00'),
    ('046', 'Womenswear', 'Footwear', 1299.99, 'Gucci', 'Gucci Horsebit Leather Mules', 'Luxury', '6', 'Wearwolf@example.com', '2023-12-30 14:45:00'),
    ('047', 'Womenswear', 'Bags & Luggage', 2299.99, 'Prada', 'Prada Nylon Shoulder Bag', 'Luxury', 'One Size', 'secundostore@example.com', '2024-01-02 16:00:00'),
    ('048', 'Womenswear', 'Accessories', 449.99, 'Versace', 'Versace Medusa Aviator Sunglasses', 'Luxury', 'One Size', 'ArchiveMess@example.com', '2024-01-05 18:20:00'),
    ('049', 'Menswear', 'Outerwear', 1799.99, 'Canada Goose', 'Canada Goose Expedition Parka', 'Outdoor', 'L', 'ArchiveMess@example.com', '2024-01-08 20:40:00'),
    ('050', 'Womenswear', 'Accessories', 699.99, 'Gucci', 'Gucci Leather Belt with Double G Buckle', 'Luxury', 'One Size', 'Wearwolf@example.com', '2024-01-11 09:10:00'),
    ('051', 'Menswear', 'Tops', 499.99, 'Balmain', 'Balmain Logo Print Cotton T-shirt', 'Streetwear', 'L', 'ArchiveMess@example.com', '2024-04-18 08:30:00'),
    ('052', 'Menswear', 'Tops', 599.99, 'Alexander Wang', 'Alexander Wang Striped Cotton Shirt', 'Classic', 'M', 'ArchiveMess@example.com', '2024-04-19 10:45:00'),
    ('053', 'Menswear', 'Tops', 449.99, 'Off-White', 'Off-White Graphic Print Hoodie', 'Streetwear', 'XL', 'Wearwolf@example.com', '2024-04-20 12:15:00'),
    ('054', 'Menswear', 'Accessories', 699.99, 'Burberry', 'Burberry Checkered Scarf', 'Classic', 'One Size', 'ArchiveMess@example.com', '2024-04-21 14:20:00'),
    ('055', 'Menswear', 'Accessories', 399.99, 'Fendi', 'Fendi Logo Print Baseball Cap', 'Streetwear', 'One Size', 'Wearwolf@example.com', '2024-04-22 16:30:00'),
    ('056', 'Menswear', 'Accessories', 549.99, 'Gucci', 'Gucci Leather Belt with Interlocking G Buckle', 'Luxury', 'One Size', 'ArchiveMess@example.com', '2024-04-23 18:45:00'),
    ('057', 'Womenswear', 'Outerwear', 2199.99, 'Moncler', 'Moncler Puffer Jacket with Fur Trim', 'Luxury', 'S', 'secundostore@example.com', '2024-04-24 09:00:00'),
    ('058', 'Womenswear', 'Outerwear', 1899.99, 'Canada Goose', 'Canada Goose Chilliwack Bomber Jacket', 'Outdoor', 'M', 'secundostore@example.com', '2024-04-25 11:30:00'),
    ('059', 'Womenswear', 'Outerwear', 2499.99, 'Burberry', 'Burberry Kensington Heritage Trench Coat', 'Classic', 'L', 'ArchiveMess@example.com', '2024-04-26 13:45:00'),
    ('060', 'Womenswear', 'Outerwear', 1799.99, 'The North Face', 'The North Face 1996 Retro Nuptse Jacket', 'Outdoor', 'XL', 'Wearwolf@example.com', '2024-04-27 15:20:00'),
    ('061', 'Womenswear', 'Bottoms', 899.99, 'Versace', 'Versace High Waisted Leather Pants', 'Luxury', 'S', 'Wearwolf@example.com', '2024-04-28 17:30:00'),
    ('062', 'Womenswear', 'Bottoms', 1099.99, 'Chanel', 'Chanel Tweed Mini Skirt', 'Luxury', 'M', 'ArchiveMess@example.com', '2024-04-29 19:40:00'),
    ('063', 'Womenswear', 'Bottoms', 799.99, 'Gucci', 'Gucci Wool Wide-Leg Pants', 'Classic', 'XS', 'Wearwolf@example.com', '2024-04-30 08:50:00'),
    ('064', 'Womenswear', 'Bottoms', 1299.99, 'Prada', 'Prada Pleated Midi Skirt', 'Luxury', 'L', 'secundostore@example.com', '2024-05-01 10:15:00'),
    ('065', 'Womenswear', 'Bottoms', 1499.99, 'Valentino', 'Valentino Tailored Wool Trousers', 'Luxury', 'S', 'ArchiveMess@example.com', '2024-05-02 12:30:00'),
    ('066', 'Womenswear', 'Bottoms', 999.99, 'Dior', 'Dior Denim High-Rise Jeans', 'Luxury', 'M', 'Wearwolf@example.com', '2024-05-03 14:45:00'),
    ('067', 'Menswear', 'Bottoms', 59.99, 'Ralph Lauren', 'Ralph Lauren Classic Fit Chinos', 'Classic', '32', 'Wearwolf@example.com', '2024-02-15 08:30:00'),
    ('068', 'Menswear', 'Outerwear', 1799.99, 'Moncler', 'Moncler Puffer Jacket', 'Luxury', 'M', 'secundostore@example.com', '2024-02-18 10:45:00'),
    ('069', 'Menswear', 'Footwear', 299.99, 'Nike', 'Nike Air Jordan 1 Retro High OG', 'Streetwear', '10', 'ArchiveMess@example.com', '2024-02-21 12:15:00'),
    ('070', 'Menswear', 'Footwear', 99.99, 'Adidas', 'Adidas Ultraboost Running Shoes', 'Sportswear', '9', 'ArchiveMess@example.com', '2024-02-24 14:20:00'),
    ('071', 'Womenswear', 'Tops', 699.99, 'Chloé', 'Chloé Ruffle Trim Blouse', 'Elegant', 'XS', 'Wearwolf@example.com', '2024-02-27 16:30:00'),
    ('072', 'Womenswear', 'Tops', 1199.99, 'Valentino', 'Valentino Logo Print T-shirt', 'Luxury', 'M', 'Wearwolf@example.com', '2024-03-04 09:10:00'),
    ('073', 'Womenswear', 'Bottoms', 1299.99, 'Saint Laurent', 'Saint Laurent Leather Mini Skirt', 'Luxury', 'S', 'secundostore@example.com', '2024-03-05 09:10:00'),
    ('074', 'Womenswear', 'Bottoms', 799.99, 'Balenciaga', 'Balenciaga Logo-Print Leggings', 'Streetwear', 'S', 'Wearwolf@example.com', '2024-03-07 11:30:00'),
    ('075', 'Womenswear', 'Bottoms', 899.99, 'Balmain', 'Balmain Button-Embellished Skinny Jeans', 'Luxury', 'M', 'secundostore@example.com', '2024-03-10 13:45:00'),
    ('076', 'Womenswear', 'Footwear', 1499.99, 'Stuart Weitzman', 'Stuart Weitzman Over-the-Knee Boots', 'Elegant', '7', 'Wearwolf@example.com', '2024-03-13 15:20:00'),
    ('077', 'Womenswear', 'Footwear', 1299.99, 'Steve Madden', 'Steve Madden Platform Sandals', 'Casual', '8', 'secundostore@example.com', '2024-03-16 17:30:00');


INSERT INTO FAVORITES (user_email, item_id, timestamp) VALUES 
('user@example.com', '021', '2023-04-19 08:30:00'),
('user@example.com', '022', '2023-04-19 10:45:00'),
('user@example.com', '025', '2023-04-19 12:00:00');


INSERT INTO STAFFPICK (itemid) VALUES
('021'), ('034'), ('045'), ('050'), ('057'), ('062'), ('071'),
('025'), ('032'), ('043'), ('055'), ('069');