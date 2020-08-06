# Creating a New Node And Testing It
CD to your working directory. Then input the following commands into your Terminal.

* npm init
* npm init -y (will set all the defaults)
* code .
* create a index.js
* write console.log()
* type node index.js in your terminal to run the console.log


# SQL

##### CREATE DATABASE

`CREATE DATABASE databaseName;`

##### CREATE TABLE

```
CREATE TABLE customers (
id SERIAL PRIMARY KEY,
name TEXT,
phone VARCHAR(15),
address TEXT
);
```

##### INSERT INTO TABLE

```
INSERT INTO customers
(name, phone, address)
VALUES
('Anthony', '333-444-4444', '123 Main St.');
```

##### MODIFYING TABLE COLUMNS

Add Column
`ALTER TABLE customers ADD COLUMN date DATE;`

Drop Column
`ALTER TABLE customers DROP date;`

# EXPRESS

##### Declare and Initialize instace of Express

```
const express = require('express')
const app = express()
```

##### Setup Express server and listen on a port

```
app.listen(8000, () => {
  console.log("Server up and listening on port 8000")
})
```

##### Express Router - Serves messages or files went specific path is hit

```
app.get('/', function(req, res) {
  res.send("You are on the home page")
})
```

##### EJS Layouts

Allows for content to be served with javascript mixed HTML files that end in extension .ejs, layouts allows for a template page to be setup with a template placeholders that can be served with dynamic content from different endpoints.

```
var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', function(req, res) {
    res.render('home');
});
```

##### Express Controllers

Express has the ability for use to use a router to split endpoints up in different files and append those partial url endpoints to a prefixed url segment. An example usage would be for a blog and having the blog prefixed url segment be /blog and have multiple routes inside that part.

```
var express = require('express');
var router = express.Router();

router.get('/animals', function(req, res) {
  res.render('faves/animals', {title: 'Favorite Animals', animals: ['sand crab', 'corny joke dog']})
});

module.exports = router;
});
```
