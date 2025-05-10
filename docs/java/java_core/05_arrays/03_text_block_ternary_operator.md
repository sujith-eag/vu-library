
#### text block 

A text block is a new kind of string literal
that is comprised of a sequence of characters that can occupy more than one line.
newline characters can be used in a text block without the need for the \n escape
sequence. Furthermore, tab and double quote characters can also be entered directly, without
using an escape sequence, and the indentation of a multiline string can be preserved.

```java

String str = """
Text blocks make multiple lines easy because they eliminate
	the need to use \n escape sequences to indicate a newline.
As a result, text blocks make the programmer's life better!
""";

System.out.println(str);
```

```
Text blocks make multiple lines easy because they eliminate
	the need to use \n escape sequences to indicate a newline.
As a result, text blocks make the programmer's life better!
```

____

#### Using Command-Line Arguments

A command-line argument is the information that directly follows the program’s name on the command line when it is executed. they are stored as strings in the String array
passed to main( )

```java
class CLDemo
{
	public static void main(String[] args)
	{
		System.out.println("There are " + args.length + " Command line arguments.");
		
		System.out.println("They are: ");
		for(int i =0; i<args.length; i++)
			System.out.println("args : " + args[i]);
	}
}
```

```
$ java CLDemo one two three
There are 3 Command line arguments.
They are: 
args : one
args : two
args : three
```

`str.length()` is used for String
`str.length` for array of string type

____


#### Type Inference wit local variables

when a variable is initialized, the type of the initializer must be the
same as (or convertible to) the declared type of the variable. Thus, in principle, it would not
be necessary to specify an explicit type for an initialized variable because it could be inferred
from the type of its initializer.

To support local variable
type inference, the context-sensitive keyword var was added to Java.

To use local variable type inference, the variable must be declared with var as the type
name and it must include an initializer.

```java
double avg = 10.0

var avg = 10.0
```
Both will be of type double


var is context-sensitive. When it is used as the type name in the context
of a local variable declaration, it tells the compiler to use type inference to determine the type
of the variable being declared based on the type of the initializer. Thus, in a local variable
declaration, var is a placeholder for the actual inferred type.


```java
var myArray = new int[10];


var[] myArray = new int[10]; // Wrong
var myArray[] = new int[10]; // Wrong

var counter; // Wrong! Initializer required.
```

var can be used only to declare local variables. It cannot be used when
declaring instance variables, parameters, or return types,

```java
var myStr = "This is a string";
var mySubStr = myStr.substring(5, 10);
```

```
FileInputStream fin = new FileInputStream("test.txt");

var fin = new FileInputStream("test.txt");
```

Usage in Initializing object of class
```java
class MyClass
{
	private int i;
	
	MyClass(int k) {
		i = k;
	}
		
	int geti(){
		return i;
	}
		
	void seti(int k)
	{
		if( k >=0)
			i=k;
	}
}

class VarDemo
{
	public static void main(String[] args)
	{
		var mc = new MyClass(10);
		// Type is inferred from initializer
		System.out.println("Value of i in mc is " + mc.geti());
		mc.seti(19);
		System.out.println("Value of i in mc now is " + mc.geti());
	}
}
```

```
Value of i in mc is 10
Value of i in mc now is 19
```

even if only one parameter in method it needs `{ }`

___

var can be used in for and for each loop also
```java
// Use type inference in a for loop.

class VarDemo3 {
public static void main(String[] args) 
{
	// Use type inference with the loop control variable.
	System.out.print("Values of x: ");
	for(var x = 2.5; x < 100.0; x = x * 2)
		System.out.print(x + " ");
		
	System.out.println();
	
	// Use type inference with the iteration variable.
	int[] nums = { 1, 2, 3, 4, 5, 6};
	System.out.print("Values in nums array: ");
	for(var v : nums)
		System.out.print(v + " ");
		
	System.out.println();
	}
}
```

```
Values of x: 2.5 5.0 10.0 20.0 40.0 80.0
Values in nums array: 1 2 3 4 5 6
```


___

#### Some restrictions of var

Only one variable can be declared at a time; 
a variable cannot use null as an initializer; 
and the variable being declared cannot be used by the initializer expression.

ou can declare an array type using var, you cannot use var with an array initializer.
```java
var myArray = new int[10]; // This is valid.

var myArray = { 1, 2, 3 }; // Wrong
```

Local variable type
inference cannot be used to declare the exception type caught by a catch statement. Also,
neither lambda expressions nor method references can be used as initializers.

___

### Bitwise Operators

The bitwise operators can be
used on values of type long, int, short, char, or byte. Bitwise operations cannot be used on
boolean, float, or double, or class types. They are called the bitwise operators because they
are used to test, set, or shift the individual bits that make up a value.

`&  |  ^  ~` are AND, OR, XOR and Negation(Complement)

`<<` shift left 
`>>` shift right
`>>>` Unsigned shift right

```
value << num-bits
value >> num-bits
value >>> num-bits
```

Here, value is the value being shifted by the number of bit positions specified by num-bits.

The bitwise shift operators can be used to perform very fast multiplication or division
by two. A shift left doubles a value. A shift right halves it.

___

#### The ? Operator

The ? operator is often used to replace if-else statements:

The ? is called a ternary operator because it requires three operands. It takes the general form `Exp1 ? Exp2 : Exp3;`

where Exp1 is a boolean expression, and Exp2 and Exp3 are expressions of any type other than
void. The type of Exp2 and Exp3 must be the same (or compatible),

Exp1 is evaluated. If it is true, then
Exp2 is evaluated and becomes the value of the entire ? expression. If Exp1 is false, then
Exp3 is evaluated and its value becomes the value of the expression

```java
absval = val < 0 ? -val : val; 
// get absolute value of val

// same in if-else
if(val < 0) 
	absval = -val;
else 
	absval = val;
```

____

`result = i != 0 ? 100 / i : 0;` 
result is assigned the outcome of the division of 100 by i. However, this division takes
place only if i is not zero. When i is zero, a placeholder value of zero is assigned to result.

```java
// Prevent a division by zero using the ?.

class NoZeroDiv 
{
	public static void main(String[] args) 
	{
		int result;
		
		for(int i = -5; i < 6; i++) 
		{
			result = i != 0 ? 100 / i : 0;
			// This prevents a divide-by-zero.
			
			if(i != 0)
			System.out.println("100 / " + i + " is " + result);
		}
	}
}
```

```
100 / -5 is -20
100 / -4 is -25
100 / -3 is -33
100 / -2 is -50
100 / -1 is -100
100 / 1 is 100
100 / 2 is 50
100 / 3 is 33
100 / 4 is 25
100 / 5 is 20
```

____


