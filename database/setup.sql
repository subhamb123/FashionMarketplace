-- CREATE TABLE IF NOT EXISTS USERS (
--     email TEXT PRIMARY KEY NOT NULL,
--     password TEXT NOT NULL,
--     firstname TEXT NOT NULL,
--     lastname TEXT NOT NULL,
--     user_type TEXT NOT NULL CHECK(user_type IN ('admin', 'user'))
-- );


-- CREATE TABLE IF NOT EXISTS ITEMS (
--     itemid TEXT PRIMARY KEY NOT NULL,
--     category TEXT NOT NULL,
--     subcategory TEXT NOT NULL,
--     price REAL NOT NULL,
--     designer TEXT NOT NULL,
--     title TEXT NOT NULL,
--     directory TEXT NOT NULL
-- );

-- CREATE TABLE IF NOT EXISTS FAVORITES (
--     user_email TEXT NOT NULL,
--     item_id TEXT NOT NULL,
--     FOREIGN KEY (user_email) REFERENCES USER(email),
--     FOREIGN KEY (item_id) REFERENCES ITEMS(itemid),
--     PRIMARY KEY (user_email, item_id)
-- );

-- CREATE TABLE IF NOT EXISTS LISTINGS (
--     user_email TEXT NOT NULL,
--     item_id TEXT NOT NULL,
--     FOREIGN KEY (user_email) REFERENCES USER(email),
--     FOREIGN KEY (item_id) REFERENCES ITEMS(itemid),
--     PRIMARY KEY (user_email, item_id)
-- );


-- DELETE FROM USERS;

-- DELETE FROM ITEMS;

-- INSERT INTO USERS (email, password, firstname, lastname, user_type) 
-- VALUES ('admin@example.com', 'adminpassword', 'Admin', 'User', 'admin');

-- INSERT INTO USERS (email, password, firstname, lastname, user_type) 
-- VALUES ('user@example.com', 'userpassword', 'Regular', 'User', 'user');

-- INSERT INTO ITEMS (itemid, category, subcategory, price, designer, title, directory) 
-- VALUES 
--     ('011', 'Menswear', 'Tops', 50, 'Carhartt', 'Vintage Carhartt WIP Distressed Zip Hoodie Oversize Y2K', '/products/11.png'),
--     ('012', 'Menswear', 'Bottoms', 120, 'Kapital', 'BNWT Cargo Y2K Pants Bondage Vintage Denim', '/products/12.png'),
--     ('013', 'Menswear', 'Outerwear', 300, 'Louis Vuitton', 'Louis Vuitton monogram reflective zip up pullover', '/products/13.png'),
--     ('014', 'Menswear', 'Tailoring', 342, 'Maison Margiela', 'Vintage MAISON MARTIN MARGIELA MEN’S Glen Plaid', '/products/14.png'),
--     ('015', 'Menswear', 'Accessories', 65, 'Nike', 'Nike vintage Cortez big handle sport bag monogram', '/products/15.png'),
--     ('016', 'Womenswear', 'Tops', 409, 'Rick Owens', 'Rick Owens Mountain Black Long Zipped Hoodie', '/products/16.png'),
--     ('017', 'Womenswear', 'Bottoms', 50, 'Carhartt', 'Women’s Y2K Carhartt FR Thrashed Denim Carpenter Jeans', '/products/17.png'),
--     ('018', 'Womenswear', 'Outerwear', 400, 'Kapital', 'KAPITAL Paisley/Boro Chore Jacket', '/products/18.png'),
--     ('019', 'Womenswear', 'Bags & Luggage', 555, 'Louis Vuitton', 'Louis Vuitton Monogram Danube Shoulder Messenger Bag', '/products/19.png'),
--     ('020', 'Womenswear', 'Accessories', 90, 'Maison Margiela', '!DS! SS23 Maison Margiela "Margiela" Logo Green Panama', '/products/20.png'),
--     ('021', 'Menswear', 'Footwear', 100, 'Adidas', 'Crazy Adidas Superstar Skateboarding Shoes', '/products/21.png'),
--     ('022', 'Menswear', 'Footwear', 180, 'Balenciaga', 'Balenciaga arena sneakers', '/products/22.png'),
--     ('023', 'Menswear', 'Footwear', 217, 'Jordan', 'Air Jordan 4 bred', '/products/23.png'),
--     ('024', 'Womenswear', 'Footwear', 125, 'Nike', 'Nike Vintage 90’s Air Rift Rare Item', '/products/24.png'),
--     ('025', 'Womenswear', 'Footwear', 105, 'Off-White', 'Off-White Woman’s Slides size 40', '/products/25.png'),
--     ('026', 'Womenswear', 'Footwear', 120, 'Yeezy', 'Adidas Yeezy Boots 380 Onyx Shoes', '/products/26.png'),
--     ('027', 'Menswear', 'Tops', 68, 'Staff Picks', 'Monster Energy Racing Zip Hoodie', '/products/27.png'),
--     ('028', 'Menswear', 'Newcastle Clubwear', 243, 'Collections', 'AD2014 CDGH Plus Bondage Buckle Pants', '/products/28.png')

-- INSERT INTO LISTINGS (user_email, item_id) VALUES ('user@example.com', '011');
-- INSERT INTO LISTINGS (user_email, item_id) VALUES ('user@example.com', '012');
-- INSERT INTO LISTINGS (user_email, item_id) VALUES ('user@example.com', '015');

-- INSERT INTO FAVORITES (user_email, item_id) VALUES ('user@example.com', '021');
-- INSERT INTO FAVORITES (user_email, item_id) VALUES ('user@example.com', '022');
-- INSERT INTO FAVORITES (user_email, item_id) VALUES ('user@example.com', '025');

CREATE TABLE IF NOT EXISTS SUGGESTIONS (
    id INTEGER,
    user_email TEXT NOT NULL,
    suggestions TEXT NOT NULL
);