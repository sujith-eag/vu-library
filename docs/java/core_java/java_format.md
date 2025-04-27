
### Java Development Kit

be aware that for modern versions of
Java, both Oracle JDKs and open source OpenJDKs are available for download.

Oracle JDK can be downloaded from `www.oracle.com/java/technologies/downloads/.` Also at the time of this writing, an open source version is available at `jdk.java.net.`


The JDK supplies two primary programs. The first is javac, which is the Java compiler.
The second is java, which is the standard Java interpreter and is also referred to as the
application launcher. 

The JDK runs in the command-prompt environment and uses command-line tools. It is not a windowed application. It is also not an integrated development environment (IDE).

____


Sample Program

```java
/*
Call this file Example.java
*/

class Example 
{
	// A Java program begins with a call to main()

	public static void main(String[] args)
	{
		System.out.println("Java drives the Web.");
	}
}
```

Three steps needed for executing a code.
1. Enter the program.
2. Compile the program.
3. Run the program.

#### Entering the program

enter the program into your computer using a text editor, not a word processor. Word processors
typically store format information along with text. This format information will confuse
the Java compiler.

The first thing that you must learn about Java is that the name you give to a source file is very important. For this example, the name of the source file should be `Example.java`

The Java compiler requires that a source file use the `.java` filename extension.
In Java, a source file is officially called a compilation unit. It is a text file that contains (among other things) one or more class definitions.


in the program, the name of the class defined by the program is also `Example`.  In Java, all code must reside inside a class. By convention, the name of the main class should match the name of the file that holds the program. 

It is convention that filenames correspond to class names. This convention makes it easier to maintain and organize programs.


#### Compiling the Program

To compile the Example program, execute the compiler, `javac`. 

Specifying the name of the source file on the command line, as 
```
javac Example.java
```

The `javac` compiler creates a file called `Example.class` that contains the bytecode version of the program. 

`bytecode` is not executable code. Bytecode must be executed by a Java Virtual Machine. Thus, the output of javac is not code that can be directly executed.

To actually run the program, you must use the Java interpreter, `java` by passing the class name as a command-line argument :

```
java Example
```


___

When Java source code is compiled, each individual class is put into its own output file named after the class and using the .class extension. 

This is why it is a good idea to give your Java source files the same name as the class they contain—the name of the source file will match the name of the .class file. When you execute the Java interpreter as just shown, you are actually specifying the name of the class that you want the interpreter to execute. It will automatically search for a file by that name that has the .class extension. If it finds the file, it
will execute the code contained in the specified class.

___

key features that are common to all Java programs.


java uses three types of comment

`/* */` is a multi-line comment describing the operations of the program.

`//` is single line commnet

`class Example {` , class declares new class being created and Example is the name of the class.


`public static void main(String[] args)` begins the main method.

The `public` keyword is an access modifier defining how other parts of the program can access the members of the class.

`main( )` must be declared as public, since it must be called by code outside of its class when the program is started.


The keyword static allows `main( )` to be called before an object of the class has been created. This is necessary because `main( )` is called by the JVM
before any objects are made.


The keyword void simply tells the compiler that main( ) does not return a value.


Any information
that you need to pass to a method is received by variables specified within the set of
parentheses that follow the name of the method. These variables are called parameters. If no
parameters are required for a given method, you still need to include the empty parentheses.

In main( ) there is only one parameter, `String[ ] args`, which declares a parameter named args. This is an array of objects of type String. (Arrays are collections of similar objects.) Objects of type String store sequences of characters. In this case, args receives any command-line arguments present when the program is executed.


___

`System.out.println("Java drives the Web.");`

System is a predefined class that provides access to the system, and out is the output stream that is connected to the console. Thus, System.out is an object that encapsulates console output. The fact that Java uses an object to define console output is further evidence of its object-oriented nature.

built-in `println( )` method displays the string that is passed to it.


___

Variable is declared using `int myVar1;` to represent integer type value.

`System.out.println("myVar1 contains " + myVar1);` plus sign is used to chain together many items in a single `println()` statement.

The print( ) method is just like println( ), except that it does not output a new line after each call. Second, in the call to println( ), notice that myVar2 is used by itself. Both print( ) and println( ) can be used to
output values of any of Java’s built-in types.

```java
/* File Example2.java*/

class Example2
{
	public static void main(String[] args)
	{
		int myVar1;
		int myVar2;

		myVar1 = 1024;
		System.out.println("myVar1 Contains " + myVar1);
		
		myVar2 = myVar1 / 2;
		System.out.print("myVar2 contains myVar1 / 2: ");
		System.out.println(myVar2);
	}
}
```

```
$ javac Example2.java 

$ java Example2 
myVar1 Contains 1024
myVar2 contains myVar1 / 2: 512
```

___


To allow numbers with fractional components, Java
defines two floating-point types: float and double, which represent single- and double-precision values,

double is the most commonly used.

```java
/*
GalToLit.java
Program to convert Gallons to Liters
*/

class GalToLit
{
	public static void main(String[] args)
	{
		double gallons;
		double liters;

		gallons = 10;
		liters = gallons * 3.7854;

		System.out.println(gallons + " gallons is " + liters + " liters");
	}
}
```

```
$ javac GalToLit.java 

$ java GalToLit 
10.0 gallons is 37.854 liters
```

To print a blank line, simply call println( ) without any arguments.
(no `\n` newline character??)


___


