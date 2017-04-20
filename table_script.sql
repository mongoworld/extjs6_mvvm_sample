CREATE TABLE admin
(
	admin_seq           INTEGER AUTO_INCREMENT PRIMARY KEY,
	admin_id            VARCHAR(50) NOT NULL,
	admin_name          VARCHAR(50) NOT NULL,
	admin_pwd      VARCHAR(50) NOT NULL
);

INSERT INTO admin(admin_id,admin_name,admin_pwd) VALUES('admin','관리자','1234');

CREATE TABLE member
(
	member_seq           INTEGER AUTO_INCREMENT PRIMARY KEY,
	member_id            VARCHAR(50) NOT NULL,
	member_name          VARCHAR(50) NOT NULL,
	member_dft_addr      VARCHAR(200) NOT NULL,
	member_dtl_addr      VARCHAR(200) NULL,
	member_zipcode       VARCHAR(5) NOT NULL,
	member_regdate       DATETIME NOT NULL,
	member_pwd           VARCHAR(50) NOT NULL
);

CREATE TABLE delivery
(
	delivery_seq         INTEGER AUTO_INCREMENT PRIMARY KEY,
	delivery_status      CHAR(1) NOT NULL,
	delivery_name        VARCHAR(50) NOT NULL,
	delivery_dft_addr    VARCHAR(200) NOT NULL,
	delivery_dtl_addr    VARCHAR(200) NULL,
	delivery_zipcode     VARCHAR(5) NOT NULL,
	order_seq            INTEGER NOT NULL
);

CREATE TABLE item
(
	item_seq             INTEGER AUTO_INCREMENT PRIMARY KEY,
	item_name            VARCHAR(50) NOT NULL,
	item_price           INTEGER NOT NULL,
	item_amount          INTEGER NOT NULL,
	item_regdate         DATETIME NOT NULL
);

CREATE TABLE orderItem
(
	order_seq            INTEGER NOT NULL,
	item_seq             INTEGER NOT NULL,
	order_item_seq       INTEGER AUTO_INCREMENT PRIMARY KEY,
	order_count          BIGINT NOT NULL,
	order_total_price    BIGINT NOT NULL
);


CREATE TABLE orders
(
	order_seq            INTEGER AUTO_INCREMENT PRIMARY KEY,
	order_regdate        DATETIME NULL,
	member_seq           INTEGER NOT NULL,
	order_status         CHAR(1) NOT NULL
);


ALTER TABLE delivery
ADD FOREIGN KEY R_1 (order_seq) REFERENCES orders (order_seq);



ALTER TABLE orderItem
ADD FOREIGN KEY R_2 (order_seq) REFERENCES orders (order_seq);



ALTER TABLE orderItem
ADD FOREIGN KEY R_3 (item_seq) REFERENCES item (item_seq);



ALTER TABLE orders
ADD FOREIGN KEY R_4 (member_seq) REFERENCES member (member_seq);


