Certainly! Here are examples of different types of JOINs in MySQL:

Consider two tables: `orders` and `customers`. The `orders` table contains information about orders, and the `customers` table contains information about customers.

**Table: orders**

| order_id | customer_id | order_date |
| -------- | ----------- | ---------- |
| 1        | 101         | 2022-01-01 |
| 2        | 102         | 2022-01-02 |
| 3        | 103         | 2022-01-03 |

**Table: customers**

| customer_id | customer_name | city     |
| ----------- | ------------- | -------- |
| 101         | John Doe      | New York |
| 102         | Jane Smith    | London   |
| 103         | Mark Johnson  | Paris    |

1. **INNER JOIN**: Returns records that have matching values in both tables.

   ```sql
   SELECT orders.order_id, customers.customer_name
   FROM orders
   INNER JOIN customers ON orders.customer_id = customers.customer_id;
   ```

   This query retrieves the `order_id` from the `orders` table and the corresponding `customer_name` from the `customers` table where the `customer_id` matches in both tables.

2. **LEFT JOIN**: Returns all records from the left table (`orders`) and the matched records from the right table (`customers`).

   ```sql
   SELECT orders.order_id, customers.customer_name
   FROM orders
   LEFT JOIN customers ON orders.customer_id = customers.customer_id;
   ```

   This query retrieves all `order_id` from the `orders` table and the corresponding `customer_name` from the `customers` table. If there is no match in the `customers` table, NULL values will be returned.

3. **RIGHT JOIN**: Returns all records from the right table (`customers`) and the matched records from the left table (`orders`).

   ```sql
   SELECT orders.order_id, customers.customer_name
   FROM orders
   RIGHT JOIN customers ON orders.customer_id = customers.customer_id;
   ```

   This query retrieves all `customer_name` from the `customers` table and the corresponding `order_id` from the `orders` table. If there is no match in the `orders` table, NULL values will be returned.

4. **FULL OUTER JOIN** (MySQL does not directly support FULL OUTER JOIN, but it can be emulated using UNION):

   ```sql
   SELECT orders.order_id, customers.customer_name
   FROM orders
   LEFT JOIN customers ON orders.customer_id = customers.customer_id
   UNION
   SELECT orders.order_id, customers.customer_name
   FROM orders
   RIGHT JOIN customers ON orders.customer_id = customers.customer_id
   WHERE orders.order_id IS NULL;
   ```

   This query emulates a full outer join by combining the results of a left join and a right join using a UNION operator. It retrieves all records from both tables, matching where possible, and including NULL values where there is no match.

These examples demonstrate different types of JOINs in MySQL. Remember to adjust the table and column names to match your specific scenario.