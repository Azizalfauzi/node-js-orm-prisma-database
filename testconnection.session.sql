-- SELECT * FROM sample;
-- SELECT * FROM customers;
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
-- ) engine innodb;