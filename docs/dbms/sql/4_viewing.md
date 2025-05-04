---
title: "SQL - 04 Viewing"
description: ""
summary: ""
date: 2025-02-01T19:23:04+05:30
lastmod: 2025-02-01T19:23:04+05:30
draft: false
weight: 1504
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


`JOIN` can be used to join two tables according to their columns.

## Views

A view is a virtual table defined by a query.
Views are useful for
* Simplifying: putting together data from different tables to be queried more simply,
* Aggregating: running aggregate functions, like finding the sum and storing the results,
* Partitioning: dividing data into logical pieces,
* Securing: hiding columns that should be kept secure. 


### Simplifying

{{< figure  src="images/sql/4_viewing/20241216205008.jpg"  alt="s"  caption="s" >}}

```sql
SELECT "title" FROM "books"
WHERE "id" IN (
	SELECT "book_id" FROM "authored"
	WHERE "author_id" = (
		SELECT "id" FROM "authors"
		WHERE "name" = 'Fernanda'
	)
);
```
This complex query can be made simpler by using `JOIN`
```sql
SELECT "name", "title" FROM "authors"
JOIN "authored" ON "authors"."id" = "authored"."author_id"
JOIN "books" ON "books"."id" = "authored"."books_id";
```

{{< figure  src="images/sql/4_viewing/20241216205017.jpg"  alt="s"  caption="s" >}}

{{< figure  src="images/sql/4_viewing/20241216205226.jpg"  alt="s"  caption="s" >}}

It is important to specify how two tables are joined, or columns they are joined on.
The primary key on one table is usually joined to the corresponding foreign key of the other table.

To save the virtual table created in the previous step as a view, we need to change the query.
```sql
CREATE VIEW "longlist" AS
SELECT "name", "title" FROM "authors"
JOIN "authored" ON "authors"."id" = "authored"."author_id"
JOIN "books" ON "books"."id" = "authored"."books_id";
```
The view created will be called `longlist` and this can be used exactly like an SQL table.
`SELECT * FROM "longlist";`

So now the long query can be simplified to
`SELECT "title" FROM "longlist" WHERE "name" = 'Fernanda';`

The data needed to make the view is stored in the underlying tables and this does not make a new table in memory.
So the virtual table does not take up any memory, but is accessible through this simplified view.
The data can be ordered also but cannot be edited.


### Aggregating

```sql
SELECT "book_id", ROUND(AVG("rating"), 2) AS "rating"
FROM "ratings"
GROUP BY "book_id";
```
Trying to display the names for each book
```sql
SELECT "book_id", "title", "year", ROUND(AVG("rating"), 2) AS "rating"
FROM "ratings"
JOIN "books" ON "ratings"."book_id" = "books"."id"
GROUP BY "book_id";
```
Joining two tables `ratings` and `books` on the `book_id` column.
With `Group by` at the end to sort the joined table.

This aggregated data can be stored in a view.
```sql
CREATE VIEW "average_book_ratings" AS
...
```

On adding more data on to the table, we can obtain an up to date data from the view because it generates the data newly from the underlying tables.
The `average_book_ratings` is now part of the data base schema.


#### Temporary view
can be used to make a view temporarily which is not stored in the schema. It exists only till the duration of the connection to the database.

```sql
CREATE TEMPORARY VIEW "average_ratings_by_year" AS
SELECT "year", ROUND(AVG("rating"), 2) AS "rating" FROM "average_book_ratings" 
GROUP BY "year";
```


## Common Table Expression (CTE)

A regular view exists forever in our database schema.
A temporary view exists for the duration of our connection with the database.
A CTE is a view that exists for a single query alone.

`DROP ViEW` can be used to drop a view that is present in a schema.

```sql
WITH "average_bbok_ratings" AS (
	SELECT "book_id", "title", "year", ROUND(AVG("rating"), 2) AS "rating" FROM "ratings"
	JOIN "books" ON "ratings"."book_id" = "books"."id"
	GROUP BY "book_id"
)
SELECT "year" ROUND(AVG("rating"), 2) AS "rating" FROM "average_book_ratings"
GROUP BY "year";
```
Creating a view containing the average books ratings per year using `CTE` instead of temporary view.


## Partitioning

Just to break up the data into smaller pieces that will be useful to an application.
```sql
CREATE VIEW "2022" AS
SELECT "id", "title" FROM "books"
WHERE "year" = 2022;
```

```sql
SELECT * FROM "2022";
```



## Securing

Using `view` to limit the access to the database and certain data.

A ride sharing app can change the data which is PII (personally Identifiable information) by creating a view which does not contain any PII.
Or we can create a view where all the data in name is generated as `annoymous` to indicate that the data should not be accessed.
```sql
CREATE VIEW "analysis" AS
SELECT "id", "origin", "destination", "Annoymous" AS "rider"
FROM "rides";
```
SQLite does not allow access control so a direct query to the rides table will reveal the names.


## Soft Deletions

Involves marking the row as deleted instead of actually deleting it.

```sql
ALTER TABLE "collections"
ADD COLUMN "deleted" INTEGER DEFAULT 0;
```

```sql
UPDATE "collections"
SET "deleted" = 1
WHERE "title" = 'Farmers working at dawn';
```

A view can be created to display the rows where the deletion has not happened.

```sql 
CREATE VIEW "current_collections" AS
SELECT "id", "title", "accession_number", "acquired"
FROM "collections"
WHERE "deleted" = 0;
```

It will not be possible to insert or deleted data from a view.
But we can set up a trigger now to insert data into an underlying table using the `INSTEAD OF` trigger.

```sql
CREATE TRIGGER "delete"
INSTEAD OF DELETE ON "current_collections"
FOR EACH ROW
BEGIN 
	UPDATE "collections" SET "deleted" = 1
	WHERE "id" = OLD."id";
END;
```

Note the `OLD` which is used to get the data that we are trying to remove.

Similarly we can have a trigger set to update the table when something is inserted into the view. Also to handle if the data is present before inserting.
```sql
CREATE TRIGGER "insert_when_exists"
INSTEAD OF INSERT ON "current_collections"
FOR EACH ROW 
WHEN NEW."accession_number" IN (
    SELECT "accession_number" FROM "collections"
)
BEGIN
    UPDATE "collections" 
    SET "deleted" = 0 
    WHERE "accession_number" = NEW."accession_number";
END;
```

The `when` is used to check the number for the same item.

```sql
CREATE TRIGGER "insert_when_new"
INSTEAD OF INSERT ON "current_collections"
FOR EACH ROW
WHEN NEW."accession_number" NOT IN (
    SELECT "accession_number" FROM "collections"
)
BEGIN
    INSERT INTO "collections" ("title", "accession_number", "acquired")
    VALUES (NEW."title", NEW."accession_number", NEW."acquired");
END;
```


_____
