### The following article is used

- https://www.tutsmake.com/node-express-js-creating-a-restful-crud-api-with-mysql/

### Database Commands

- Export .sql file
  - mysqldump -u root -p STATIONERY_MANAGEMENT > STATIONERY_MANAGEMENT.sql

- Import .sql file
  ```
    CREATE DATABASE IF NOT EXISTS STATIONERY_MANAGEMENT;
  ```
- Run the following command to load all the tables and data
  ```
    mysql -u root -p STATIONERY_MANAGEMENT < STATIONERY_MANAGEMENT.sql
  ```

### OR

- Run queries

```
CREATE TABLE INVENTORY_DETAILS (
  id int NOT NULL AUTO_INCREMENT,
  category varchar(50) NOT NULL,
  label varchar(50) NOT NULL,
  availableQty int NOT NULL,
  imgURL varchar(50) NOT NULL,
  PRIMARY KEY (id)
);
```
```
INSERT INTO INVENTORY_DETAILS VALUES (1,'pen','blue pen',20,'path'),(2,'marker','blue marker',25,'path'),(3,'marker','black marker',30,'path'),(4,'duster','duster',13,'path'),(5,'notepad','notepad',0,'path'),(6,'stick notes','stick notes pink',10,'path');
```
```
CREATE TABLE EMPLOYEE_REQUESTS (
  req_id int NOT NULL AUTO_INCREMENT,
  created_date timestamp,
  emp_id int NOT NULL,
  status varchar(20) NOT NULL,
  sign longblob NOT NULL,
  PRIMARY KEY (req_id)
);
```
```
INSERT INTO EMPLOYEE_REQUESTS VALUES (1,NOW(),100,'requested','SIGN'),(2,NOW(),103,'ready','SIGN'),(3,NOW(),110,'delivered','SIGN'),(4,NOW(),107,'closed','SIGN'),(5,NOW(),103,'ready','SIGN');
```
```
CREATE TABLE REQUEST_DETAIL (
  req_detail_id int NOT NULL AUTO_INCREMENT,
  req_id int NOT NULL,
  item_id int NOT NULL,
  item_quantity int NOT NULL,
  PRIMARY KEY (req_detail_id),
  FOREIGN KEY (req_id) REFERENCES EMPLOYEE_REQUESTS(req_id),
  FOREIGN KEY (item_id) REFERENCES INVENTORY_DETAILS(id)
);
```
```
INSERT INTO REQUEST_DETAIL VALUES (1,1,2,4),(2,1,4,2),(3,2,6,1),(4,2,3,2),(5,3,1,2),(6,3,3,3),(7,3,2,1),(8,3,4,2),(9,4,6,5),(10,5,2,4),(11,5,1,1),(12,5,4,2);
```

### Setup and Run

```
npm install
```

- Add MYSQL password in config.js file

```
node server.js
```