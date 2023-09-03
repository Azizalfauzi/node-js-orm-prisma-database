create database belajar_nodejs_prisma;

USE belajar_nodejs_prisma;

SHOW tables;

DESC sample;

ALTER table sample add column full_desc text;


create table likes (
    customer_id VARCHAR(100) not null,
    product_id VARCHAR(100) not null,
    primary key (customer_id, product_id),
    constraint likes_customers_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id),
    constraint likes_products_id_fk FOREIGN KEY (product_id) REFERENCES products (id)
);

SELECT * FROM likes;
DROP table likes;

create table comment (
    id int not null auto_increment,
    customer_id VARCHAR(100) not null,
    title VARCHAR(200) not null,
    description text,
    primary key (id),
    constraint comment_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id)
);
SELECT *
FROM comment;
INSERT into comment(customer_id, title, description)
VALUES ('eko', 'Comment 1', 'Sample comment 1'),
    ('wan', 'Comment 2', 'Sample comment 2'),
    ('ad', 'Comment 3', 'Sample comment 3');
-- create table wallet (
--     id VARCHAR(100) not null,
--     balance INT not null,
--     customer_id VARCHAR(100) not null,
--     primary key (id),
--     constraint wallet_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id),
--     constraint wallet_customer_id_unique unique (customer_id)   
-- );
-- SELECT * FROM wallet;
-- SELECT * FROM sample;
SELECT *
FROM customers;
-- SELECT * FROM customers WHERE name = "Wawan";
-- 
-- create table customers
-- (
--     id VARCHAR(100) not null,
--     name VARCHAR(100) not null,
--     email VARCHAR(100) not null,
--     phone VARCHAR(100) not null,
--     primary key (id),
--     constraint customer_email_unique unique (email),
--     constraint customer_phone_unique unique (phone)
-- );
-- create table products (
--     id VARCHAR(100) not null,
--     name VARCHAR(100) not null,
--     price int not null,
--     stock int not null,
--     category VARCHAR(100) not null,
--     primary key (id)
-- );
-- SELECT * FROM products;
-- INSERT INTO products (id, name, price, stock, category)
-- VALUES ('P0001', 'A', 1000, 100, 'K1'),
-- ('P0002', 'B', 2000, 200, 'K2'),
-- ('P0003', 'C', 5000, 300, 'K3'),
-- ('P0004', 'D', 6000, 150, 'K4'),
-- ('P0005', '3', 8000, 250, 'K5');
-- create table categories (
--     id int not null auto_increment,
--     name VARCHAR(100) not null,
--     primary key (id)
-- );
-- SELECT * FROM categories;