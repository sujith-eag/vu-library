

## Type Conversion in Assignments

When **compatible types** are mixed in an assignment, **automatic type conversion** (also called _type coercion_) occurs if:

1. The two types are compatible.
    
2. The destination type is **larger** than the source type.
    

This is called a **widening conversion**.

```java
int i;
float f;

i = 10;
f = i; // int is automatically converted to float
```

> Note: `boolean` and `int` are **not compatible types** and cannot be converted automatically.

---

## Casting Incompatible Types

For incompatible or narrowing conversions, you must use explicit type casting.

```java
(target-type) expression
```
`target-type` specifies the desired type to convert the specified expression to.

```java
double x = 10.0, y = 3.0;
int result = (int) (x / y); // Converts result of x/y to int
```
cast is necessary here because there is no automatic conversion from double to int.

> Parentheses around the entire expression are important; without them, only `x` would be cast to int. Not the result of the expression


```java
class CastDemo {
	public static void main(String[] args) {
		double x = 10.0, y = 3.0;
		byte b;
		int i;
		char ch;

		i = (int) (x / y); // Truncation occurs
		System.out.println("Integer outcome of x/y: " + i);

		i = 100;
		b = (byte) i; // No info lost
		System.out.println("Value of b: " + b);

		i = 257;
		b = (byte) i; // Info lost (257 mod 256 = 1)
		System.out.println("Value of b: " + b);

		b = 88; // ASCII for 'X'
		ch = (char) b;
		System.out.println("ch: " + ch);
	}
}
```

**Output:**

```
Integer outcome of x / y: 3
Value of b: 100
Value of b: 1
ch: X
```

---

## Expressions and Type Conversion in Expressions

In mixed-type expressions, Java follows **type promotion rules**:

1. All `byte`, `short`, and `char` are **promoted to `int`**.
    
2. If one operand is `long`, result is `long`.
    
3. If one is `float`, result is `float`.
    
4. If any operand is `double`, result is `double`.

>[!note]
>Type promotion only affects the evaluation of an expression. if the value of a byte variable is promoted to int inside an expression, outside the expression, the variable is still a byte.

---

### Type Promotion Example:

```java
class PromDemo {
	public static void main(String[] args) {
		byte b = 10;
		int i;

		i = b * b;  // OK: b is promoted to int
		b = (byte)(b * b);  // Requires explicit cast
		System.out.println("i and b: " + i + " " + b);
	}
}
```

This is important to remember because it explains why an expression like `b * b` requires casting when assigned back to a `byte`.

b is promoted to int when the expression is evaluated. However, when you try to assign `b * b` to b, you do need a cast—back to byte

---

### Promotion with `char`:

```java
char ch1 = 'a', ch2 = 'b';
ch1 = (char) (ch1 + ch2); // Must cast result to char
```

Without the cast, `ch1 + ch2` would result in an `int`, which can't be assigned to a `char`.

---

### Using Cast to Get Floating-Point Division

```java
class UseCast {
	public static void main(String[] args) {
		int i;
		for (i = 0; i < 5; i++) {
			System.out.println(i + " / 3: " + i / 3);
			System.out.println(i + " / 3 with fractions: " + (double) i / 3);
			System.out.println();
		}
	}
}
```

**Output:**

```
0 / 3: 0
0 / 3 with fractions: 0.0
1 / 3: 0
1 / 3 with fractions: 0.3333333333333333
2 / 3: 0
2 / 3 with fractions: 0.6666666666666666
3 / 3: 1
3 / 3 with fractions: 1.0
4 / 3: 1
4 / 3 with fractions: 1.3333333333333333
```

---

## Operator Precedence and Expression Formatting

Java follows standard **mathematical precedence rules** in expressions.

```java
x = 10 / y * (127 / x);
```

is equivalent to:

```java
x = (10 / y) * (127 / x);
```

Use parentheses to make expressions clearer and control evaluation order.

```java
x = y / 3 - 34 * temp + 127;

x = (y / 3) - (34 * temp) + 127;
```

> Use of extra parentheses is encouraged for clarity. It does not slow down execution or cause errors.

---
