CREATE TABLE IF NOT EXISTS USERS (
    email TEXT PRIMARY KEY NOT NULL,
    password TEXT NOT NULL,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    user_type TEXT NOT NULL CHECK(user_type IN ('admin', 'user'))
);


CREATE TABLE IF NOT EXISTS ITEMS (
    itemid TEXT PRIMARY KEY NOT NULL,
    category TEXT NOT NULL,
    subcategory TEXT NOT NULL,
    price REAL NOT NULL,
    designer TEXT NOT NULL,
    title TEXT NOT NULL,
    style TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS FAVORITES (
    user_email TEXT NOT NULL,
    item_id TEXT NOT NULL,
    FOREIGN KEY (user_email) REFERENCES USER(email),
    FOREIGN KEY (item_id) REFERENCES ITEMS(itemid),
    PRIMARY KEY (user_email, item_id)
);

CREATE TABLE IF NOT EXISTS LISTINGS (
    user_email TEXT NOT NULL,
    item_id TEXT NOT NULL,
    FOREIGN KEY (user_email) REFERENCES USER(email),
    FOREIGN KEY (item_id) REFERENCES ITEMS(itemid),
    PRIMARY KEY (user_email, item_id)
);


DELETE FROM USER;

DELETE FROM ITEMS;

INSERT INTO USERS (email, password, firstname, lastname, user_type) 
VALUES ('admin@example.com', 'adminpassword', 'Admin', 'User', 'admin');

INSERT INTO USERS (email, password, firstname, lastname, user_type) 
VALUES ('user@example.com', 'userpassword', 'Regular', 'User', 'user');

INSERT INTO ITEMS (itemid, category, subcategory, price, designer, title, style) 
VALUES 
    ('011', 'Menswear', 'Tops', 399.99, 'Chrome Hearts', 'Chrome Hearts Logo Print Hoodie', 'Streetwear'),
    ('012', 'Menswear', 'Bottoms', 499.99, 'Vetements', 'Vetements Logo Embroidered Jeans', 'Streetwear'),
    ('013', 'Womenswear', 'Tops', 899.99, 'Gucci', 'Gucci Floral Print Silk Blouse', 'Luxury'),
    ('014', 'Womenswear', 'Dresses', 1499.99, 'Versace', 'Versace Medusa Embellished Mini Dress', 'Luxury'),
    ('015', 'Menswear', 'Footwear', 1199.99, 'Prada', 'Prada Leather Chelsea Boots', 'Classic'),
    ('016', 'Womenswear', 'Footwear', 1399.99, 'Jimmy Choo', 'Jimmy Choo Crystal-Embellished Sandals', 'Elegant'),
    ('017', 'Accessories', 'Bags', 2499.99, 'Louis Vuitton', 'Louis Vuitton Monogram Canvas Neverfull Bag', 'Luxury'),
    ('018', 'Accessories', 'Eyewear', 499.99, 'Ray-Ban', 'Ray-Ban Wayfarer Sunglasses', 'Classic'),
    ('019', 'Menswear', 'Outerwear', 1999.99, 'Burberry', 'Burberry Cashmere Trench Coat', 'Classic'),
    ('020', 'Womenswear', 'Accessories', 799.99, 'Chrome Hearts', 'Chrome Hearts Sterling Silver Cross Pendant Necklace', 'Streetwear'),
    ('021', 'Menswear', 'Tops', 599.99, 'Vetements', 'Vetements Oversized Graphic Print T-shirt', 'Streetwear'),
    ('022', 'Menswear', 'Bottoms', 699.99, 'Gucci', 'Gucci Logo Embroidered Track Pants', 'Streetwear'),
    ('023', 'Womenswear', 'Tops', 1099.99, 'Versace', 'Versace Baroque Print Silk Shirt', 'Luxury'),
    ('024', 'Womenswear', 'Dresses', 1699.99, 'Chanel', 'Chanel Tweed Shift Dress', 'Luxury'),
    ('025', 'Menswear', 'Footwear', 1299.99, 'Prada', 'Prada Suede Loafers', 'Classic'),
    ('026', 'Womenswear', 'Footwear', 1599.99, 'Jimmy Choo', 'Jimmy Choo Glitter Pumps', 'Elegant'),
    ('027', 'Accessories', 'Bags', 2799.99, 'Louis Vuitton', 'Louis Vuitton Epi Leather Alma Bag', 'Luxury'),
    ('028', 'Accessories', 'Eyewear', 549.99, 'Ray-Ban', 'Ray-Ban Clubmaster Sunglasses', 'Classic'),
    ('029', 'Menswear', 'Outerwear', 2199.99, 'Burberry', 'Burberry Quilted Jacket', 'Classic'),
    ('030', 'Womenswear', 'Accessories', 899.99, 'Vetements', 'Vetements Logo Print Leather Belt', 'Streetwear');

INSERT INTO LISTINGS (user_email, item_id) VALUES 
('user@example.com', '011'),
('user@example.com', '012'),
('user@example.com', '015');

INSERT INTO FAVORITES (user_email, item_id) VALUES 
('user@example.com', '021'),
('user@example.com', '022'),
('user@example.com', '025');