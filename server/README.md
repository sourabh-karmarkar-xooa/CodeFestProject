### The following article is used

- https://www.tutsmake.com/node-express-js-creating-a-restful-crud-api-with-mysql/

### Database Commands

- Export .sql file
  - mysqldump -u root -p STATIONERY_MANAGEMENT > STATIONERY_MANAGEMENT.sql

- Import .sql file
  ```
    CREATE DATABASE IF NOT EXISTS STATIONERY_MANAGEMENT;
  ```
  - run the following command to load all the tables and data
  ```
    mysql -u root -p STATIONERY_MANAGEMENT < STATIONERY_MANAGEMENT.sql
  ```

### Setup and Run

```
npm install
```

- Add MYSQL password in config.js file

```
node server.js
```