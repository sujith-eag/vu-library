### Two Control Statements

The Java if statement works much like the IF statement in any other language. It determines the flow of program execution based on whether some condition is true or false. Its simplest form is shown here:
`if(condition) statement;`

Here, condition is a Boolean expression. (A Boolean expression is one that evaluates to either
true or false.) If condition is true, then the statement is executed. If condition is false, then the
statement is bypassed. Here is an example:
`if(10 < 11) System.out.println("10 is less than 11");`

`if(10 < 9) System.out.println("this won't be displayed");`

Java has `< >  <= >=  == !=`

```java
/*
Demonstrate the if.
Call this file IfDemo.java.
*/
class IfDemo 
{
	public static void main(String[] args) 
	{
	int a, b, c;
	a = 2;
	b = 3;

	if(a < b) System.out.println("a is less than b");

	// this won't display anything
	if(a == b) System.out.println("you won't see this");
	System.out.println();

	c = a - b; // c contains -1
	System.out.println("c contains -1");
	if(c >= 0) System.out.println("c is non-negative");
	if(c < 0) System.out.println("c is negative");
	System.out.println();

	c = b - a; // c now contains 1
	System.out.println("c contains 1");
	if(c >= 0) System.out.println("c is non-negative");
	if(c < 0) System.out.println("c is negative");
	}
}
```

```
a is less than b
c contains -1
c is negative
c contains 1
c is non-negative
```

___

### the 'for' loop

repeatedly execute a sequence of code by creating a loop

for(initialization; condition; iteration) statement;
In its most common form, the initialization portion of the loop sets a loop control variable
to an initial value. The condition is a Boolean expression that tests the loop control variable.
If the outcome of that test is true, statement executes and the for loop continues to iterate. If it
is false, the loop terminates. The iteration expression determines how the loop control variable
is changed each time the loop iterates.

```java
/* ForLoopDemo.java  for loop demo*/

class ForLoopDemo
{
	public static void main(String[] args)
	{
		int count;

		for(count = 0; count<5; count++)
			System.out.println("This is count: "+ count);

		System.out.println("Done Iterating");
	}
}
```

```
$ javac ForLoopDemo.java 

$ java ForLoopDemo 
This is count: 0
This is count: 1
This is count: 2
This is count: 3
This is count: 4
Done Iterating
```

___

#### Block of code

A code block is a grouping of two or more
statements. This is done by enclosing the statements between opening and closing curly braces.
Once a block of code has been created, it becomes a logical unit that can be used any place that
a single statement can

```java
if(w<h)
{
	v = w*h;
	w = 0;
}
```

____

#### Semicolons and Positioning

In Java, the semicolon is a separator. It is often used to terminate a statement. In essence, the
semicolon indicates the end of one logical entity.

```
System.out.println("This is a long line of output" +
	x + y + z +
	"more output");
```

It is a free form language and soesnt matter where statements are placed relative to each other.

```java
/* 
 Conversion from gallon to liter
 called GalToLitTable.java
*/

class GalToLitTable
{
	public static void main(String[] args)
	{
		double gallons, liters;
		int lineCounter;

		lineCounter = 0;
		for(gallons = 1; gallons <= 100; gallons++)
		{
			liters = gallons * 3.7854;
			System.out.println(gallons +" gallons is " + liters + " liters.");
			lineCounter++;

			if (lineCounter == 10)
			{ // space for every ten line
				System.out.println();
				lineCounter = 0;
			}
		}
	}
}
```


___

#### The Java Keywords

Sixty-seven keywords are currently defined in the Java language. These keywords, combined with the syntax of the operators and separators, form the definition of the Java language. In general, keywords cannot be used as names for a variable, class, or method.
```java
abstractassertbooleanbreakbytecase
catchcharclassconstcontinuedefault
dodoubleelseenumexportsextends
finalfinallyfloatforgotoif
implementsimportinstanceofintinterfacelong
modulenativenewnon-sealedopenopens
packagepermitsprivateprotectedprovidespublic
recordrequiresreturnsealedshortstatic
strictfpsuperswitchsynchronizedthisthrow
throwstotransienttransitive tryusesvar
voidvolatilewhilewithyield

```


However, 16 of the keywords are context-sensitive, which means that they are only keywords when used with the feature to which they relate.
They support features added to Java over the
past few years. 

Ten relate to modules: `exports, module, open`, `opens, provides, requires`, `to, transitive, uses`, and `with`. 

Records are declared by `record`;

sealed classes and interfaces use `sealed, non-sealed`, and `permits`; 

`yield` is used by the enhanced switch; 

`var` supports local variable type inference.

Because they are context-sensitive, existing programs were unaffected by their addition. 

Also, beginning with JDK 9, an underscore by itself is considered a keyword in order to prevent its use as the name of something in your program.

The keywords `const` and `goto` are reserved but not used. 

Java reserves three other names that have been part of Java since the start: `true, false, and null`. These are values defined by Java. You may not use these
words for the names of variables, classes, and so on.


____

#### Identifiers in java

In Java an identifier is, essentially, a name given to a method, a variable, or any other user-defined
item.

you cannot use the Java keywords as identifier names. Also, you should not
use the name of any standard method, such as println, as an identifier. Beyond these two
restrictions, good programming practice dictates that you use identifier names that reflect the
meaning or usage of the items being named.

___

#### Java class libraries

Java
environment relies on several built-in class libraries that contain many built-in methods that
provide support for such things as I/O, string handling, networking, and graphics. The standard
classes also provide support for a graphical user interface (GUI). Thus, Java as a totality is a
combination of the Java language itself, plus its standard classes.


println( ) and print( ) are builtin methods. These methods are accessed through System.out. System is a class predefined by Java that is automatically included in your programs.

___

