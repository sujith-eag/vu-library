
# Data Types and Operators

Java is a **strongly typed language**, meaning all variables, expressions, and values must have a defined type. This enforces **strict type checking** at compile time, helping to prevent errors and improve reliability. Operations are allowed only between compatible types.

## Primitive Data Types

Java defines two categories of built-in data types:

- **Primitive types** – Simple, non-object data types (binary values)
    
- **Reference types** – Defined by classes (object-oriented)
    

### The 8 Primitive Types:

|Type|Width|Range|
|---|---|---|
|`byte`|8-bit|–128 to 127|
|`short`|16-bit|–32,768 to 32,767|
|`int`|32-bit|–2,147,483,648 to 2,147,483,647|
|`long`|64-bit|–9,223,372,036,854,775,808 to 9,223,372,036,854,775,807|
|`float`|32-bit|Single-precision floating-point|
|`double`|64-bit|Double-precision floating-point|
|`char`|16-bit|0 to 65,535 (Unicode characters)|
|`boolean`|1-bit|`true` or `false`|


```java
char ch = 'X';
int age = 25;
boolean isJavaFun = true;
```

---

### Literals

A **literal** is a constant value written directly into the code which are represented in their human readable form.

Examples:

- Integer: `10`, `-100`
    
- Floating-point: `11.123`
    
- Character: `'A'`
    
- Boolean: `true`, `false`
    

#### Underscores in Literals (JDK 7+)

Underscores can be used to improve readability:

```java
int num = 123_456_789;
double pi = 3.14_15_92;
```

---

### Character Escape Sequences

Certain characters are represented with **escape sequences**:

|Escape Sequence|Description|
|---|---|
|`\'`|Single quote|
|`\"`|Double quote|
|`\\`|Backslash|
|`\r`|Carriage return|
|`\n`|New line|
|`\f`|Form feed|
|`\t`|Horizontal tab|
|`\b`|Backspace|
|`\ddd`|Octal constant|
|`\uxxxx`|Unicode (hex constant)|
|`\s`|Space (JDK 15+)|
|`\endofline`|Continue line (text blocks, JDK 15+)|

---

### String Literals

A **string literal** is a series of characters enclosed in double quotes:

```java
"This is a string"
```

Strings can include escape sequences:

```java
System.out.println("First line\nSecond line");
System.out.println("A\tB\tC");
```

> A **character** (`'A'`) is a `char`, while a **string** (`"A"`) is an object of class `String`.


## Operators in Java

Operators perform actions on variables and values.

### Types of Operators

#### Arithmetic Operators

`+`, `-`, `*`, `/`, `%`, `++`, `--`

Can be applied to numbers and characters.

#### Relational Operators

`==`, `!=`, `<`, `>`, `<=`, `>=`

Used to compare values. The result is a boolean (`true` or `false`).

#### Logical Operators

- `&` – AND
    
- `|` – OR
    
- `^` – XOR
    
- `!` – NOT
    
- `&&` – Short-circuit AND
    
- `||` – Short-circuit OR
    

#### Assignment Operators

- Basic: `=`
    
- Compound: `+=`, `-=`, `*=`, `/=`, `%=`, `&=`, `|=`, `^=`
    

---

### Short-Circuit Operators Example

Avoid division by zero using `&&`:

```java
class SCOps {
	public static void main(String[] args) {
		int n = 10, d = 2;

		if (d != 0 && (n % d) == 0)
			System.out.println(d + " is a factor of " + n);

		d = 0;
		if (d != 0 && (n % d) == 0)
			System.out.println("This line won't execute");
	}
}
```

---

### Logical vs Short-Circuit Operators

```java
class SideEffects {
	public static void main(String[] args) {
		int i = 0;

		if (false & (++i < 100)) 
			System.out.println("Not displayed");
		System.out.println("Logical & result: " + i); // i = 1

		if (false && (++i < 100)) 
			System.out.println("Also not displayed");
		System.out.println("Short-circuit && result: " + i); // i = 1
	}
}
```

- `&` always evaluates both sides
    
- `&&` skips the second part if the first is false
    

---

### Assignment Operators

```java
int x, y, z;
x = y = z = 100; // Chain assignment
x += 10;         // Shorthand for x = x + 10
```

---

