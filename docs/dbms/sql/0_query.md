---
title: "SQL - 0 Quering"
description: ""
summary: ""
date: 2025-02-01T19:22:15+05:30
lastmod: 2025-02-01T19:22:15+05:30
draft: false
weight: 1500
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

#### **Database**
A collection of data for Creating, Reading, Updating and Deleting.

Every row in a table stores one item in that set. (Each book is a row)
Every column has some attribute of that item. (title, author)

Limitations of Spreadsheets and Advantages of databases
* Scale: Database can store items to millions and billions.
* Update Capacity: Databases are able to handle multiple updates of data in a second.
* Speed: Databases allow fast look-up of information. As they provide access to different algorithms to retrieve information.


#### **Database Management Systems**
DBMS is a way to interact with a database using a graphical interface or textual language.
Ex: MySQL, Oracle, PostgreSQL, SQLite, Microsoft Access, MongoDB etc.

### SQL

Structured Query Language, is a language used to interact with databases using CRUD operations. It has keywords that can be used to interact with the database.
It is a query language that can be used to ask questions of data inside a database.

`sqlite3 longlist.db` to enter
`ctrl+L` to clear terminal screen
`.quit` to exit.

### SQLite

SQLite uses a sub set of SQL, if code has to be ported to different system like MySQL, it is likely some syntax has to change.


## SELECT
Allows for selecting some rows or all of it from a table inside a database.

```Sql

SELECT * FROM "longlist";

SELECT "title" FROM "longlist";

SELECT "title", "author" FROM "longlist";
```

Double quotes `" "` are called SQL identifiers used for table and column names.
SQL also has strings which are contents in table which uses `' '` to differentiate them from identifiers.

SQLite is case-insensitive but Case is used as a style convention to help in readability.

## LIMIT

Used to limit the number of data contained in a database.
`LIMIT` is used to specify the number of rows in the query output.

```sql
SELECT "title"
FROM "longlist"
LIMIT 10;
```
Taking just the first 10 titles in the database.
Order is as per the entry in database.


## WHERE

`WHERE` is used to select rows based on a condition; it will output the rows for which the specified condition is true.
```sql
SELECT "title", "author"
FROM "longlist"
WHERE "year" = 2023;
```
`=` shows equals and 

`!= <>` both represent Not equal to.
`NOT` is a used to negate a sign.

To select all books which are not hardcover books.
```sql
SELECT "title"
FROM "longlist"
WHERE "format" <> 'hardcover';

WHERE "format" != 'hardcover';

WHERE NOT "format" = 'hardcover'; 
```
`'hardcover'` is in single quotes to represent it is a string entry in a row of an item.

## OR AND
`AND` and `OR` can be used to combine conditionals. 
`()` parentheses is used to indicate how to combine the conditions in a compound conditional statements.

To select titles and authors of books in 2022 or 2023.
```sql
SELECT "title", "author"
From "longlist"
WHERE "year" = 2022 OR "year" = 2023;
```

To select titles and authors of books in 2022 or 2023 that are not hardcovers.
```sql
SELECT "title", "format"
From "longlist"
WHERE ("year" = 2022 OR "year" = 2023) AND "format" != 'hardcover';
```
Here `OR` should be evaluated before `AND`

## NULL
If the table has missing data or no data, then `NULL` is the type used to indicate that data does not have a value or does not exist in the table.
Conditions used with `NULL` are `IS NULL` and `IS NOT NULL`

```sql
SELECT "title", "translator"
From "longlist"
WHERE "translator" IS NULL;

WHERE "translator" IS NOT NULL;
```


## LIKE
This keyword is used to select data that roughly matches the specified string. Like finding strings that have specific keywords.
`LIKE` can be combined with `%`  which matches any character around a string and `_` which matches a single character.

```sql
SELECT "title"
FROM "longlist"
WHERE "title" LIKE '%love%';

WHERE "title" LIKE 'Love%';
```
`'%love%'` To find any title that has the word `love` anywhere in it. `%` matches 0 or more characters before and after `love`.

`'Love%'` selects books that only begins with `Love`

```sql
SELECT "title"
FROM "longlist"
WHERE "title" LIKE 'The%';

WHERE "title" LIKE 'The %';
```
`The%` finds any title that begins with `the` but it might also include `Them, they` also as first three characters are same.

`The %` finds only title which has `The` in the beginning with space after it.


To find a title with one letter unknown like `pyre  pire`
```sql
SELECT "title"
FROM "longlist"
WHERE "title" LIKE 'P_re';
```
`_` matches to any single character.
This can also get `pore` `pure` if they exist.

Querying for multiple words
```sql
SELECT "title"
FROM "longlist"
WHERE "title" LIKE 'The%love%';

WHERE "title" LIKE 'T____';
```

In SQLite, comparison of string with `LIKE` is by default case-insensitive, whereas comparison with `=` is case-sensitive.
(Other DBMS or configuration of database might change this)



## Ranges
Using comparison operators `< > <= >=` in our condition to match the range values.

Books between 2019 to 2022
```sql
SELECT "title", "autor", "year"
FROM "longlist"
WHERE "year" >= 2019 AND "year" <= 2022;
```
`BETWEEN` and `AND` also can specify inclusive range.
```sql
SELECT "title", "author"
FROM "longlist"
WHERE "year" BETWEEN 2019 AND 2022;
```

Selecting books based on number of votes and ratings
```sql
SELECT "title", "rating", "votes"
FROM "longlist"
WHERE "rating" > 4.0 AND "votes" > 10000;

WHERE "pages" < 300;
```

`< >` works on integers, floating points. These data types for columns are set while creating the database.


## ORDER BY

`ORDER BY` allows or organizing / sorting the returned rows in some specified order.
The default order will be ascending for `ORDER BY`, so this gets the lowest ranking books.
```sql
SELECT "title", "rating"
FROM "longlist"
ORDER BY "rating" LIMIT 10;
```

`ASC` and `DESC` are keywords that specify the order explicitly
This gets the top 10 books by rating
```sql
SELECT "title", "rating"
FROM "longlist"
ORDER BY "rating" DESC LIMIT 10;
```

Using `votes` as tie breaker when there are similar ratings
```sql
SELECT "title", "rating", "votes"
FROM "longlist"
ORDER BY "rating" DESC, "votes" DESC
lIMIT 10;
```
`DESC` is mentioned for each column of `ORDER BY`



## Aggregate Functions

`COUNT, AVG, MIN, MAX, SUM` are called aggregate functions and allow us to perform corresponding operations over multiple rows of data.
By their vary nature they return only a single output - the aggregate value.

Average rating of all books
```sql
SELECT AVG("rating")
FROM "longlist";
```

Average rounded to two decimal points using `ROUND ( value, decimal points)`
```sql
SELECT ROUND(AVG("rating"), 2)
FROM "longlist";
```

To rename the column in which the result gets displayed by using `AS`
```sql
SELECT ROUND(AVG("rating"), 2) AS "average rating"
FROM "longlist";
```


```sql
SELECT MAX("rating"), MIN("rating")
FROM "longlist";
```
Counting total number of Books in Database
```sql
SELECT SUM("votes")
FROM "longlist";
```

Counting number of books in database (number of rows)
```sql
SELECT COUNT(*)
FROM "longlist";
```

```sql
SELECT COUNT("translator")
FROM "longlist";
```
this might give less number if few the rows has `NULL` value. `COUNT` does not count `NULL` values.

Using `DISTINCT` to count the unique entries only.
```sql
SELECT COUNT(DISTINCT "publishers")
FROM "longlist";

SELECT DISTINCT "publishers"
FROM "longlist";
```


______

