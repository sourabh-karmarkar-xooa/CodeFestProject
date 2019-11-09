### The following article is used

- https://www.tutsmake.com/node-express-js-creating-a-restful-crud-api-with-mysql/

### Database Commands

- Run the following commands in MYSQL CLI

```
CREATE DATABASE IF NOT EXISTS stationerymanagement;
```

```
CREATE TABLE IF NOT EXISTS inventory_details 
  ( 
     id           INT NOT NULL auto_increment, 
     category     VARCHAR(50) NOT NULL, 
     label        VARCHAR(50) NOT NULL, 
     availableqty INT NOT NULL, 
     imgurl       VARCHAR(50) NOT NULL, 
     PRIMARY KEY ( id ) 
  ); 
```

```
INSERT INTO inventory_details 
VALUES      (1, 
             "pen", 
             "blue pen", 
             20, 
             "path"), 
            (2, 
             "marker", 
             "blue marker", 
             25, 
             "path"), 
            (3, 
             "marker", 
             "black marker", 
             30, 
             "path"), 
            (4, 
             "duster", 
             "duster", 
             13, 
             "path"), 
            (5, 
             "notepad", 
             "notepad", 
             0, 
             "path"), 
            (6, 
             "stick notes", 
             "stick notes pink", 
             10, 
             "path"); 
```

### Setup and Run

```
npm install
```

- Add MYSQL password in config.js file

```
node server.js
```