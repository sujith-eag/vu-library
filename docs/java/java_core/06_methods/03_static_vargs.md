

#### Understanding static

When a member is declared static, it can be accessed before any objects of its class are created, and without reference to any object. You can declare both methods and variables to be static.

The most common example of a static member is main( ). 

main( ) is declared as static because it must be called by the JVM when your program begins. Outside the class, to use a static member, you need only specify the name of its class followed by the dot operator. 

No object needs to be created. 

if you want to assign the value 10 to a static variable called
count that is part of the Timer class, use this line:
`Timer.count = 10;`

This format is similar to that used to access normal instance variables through an object, except that the class name is used. A static method can be called in the same way—by use of the dot operator on the name of the class.


Variables declared as static are, essentially, global variables. When an object is declared, no copy of a static variable is made. Instead, all instances of the class share the same static variable.

The difference between a static method and a normal method is that the static method is
called through its class name, without any object of that class being created.

Methods declared as static have several restrictions:
●They can directly call only other static methods in their class.
●They can directly access only static variables in their class.
●They do not have a this reference.

___

#### Static Blocks

Sometimes a class will require some type of initialization before it is ready to create objects. 

For example, it might need to establish a connection to a remote site. It also might need to initialize certain static variables before any of the class’ static methods are used. To handle these types of situations, Java allows you to declare a static block. A static block is executed when the class is first loaded. Thus, it is executed before the class can be used for any other purpose.

```java
// Use a static block

class StaticBlock
{
	static double rootOf2;
	static double rootOf3;

	static { // Executed when class loads
		System.out.println("Inside static block");
		rootOf2 = Math.sqrt(2.0);
		rootOf3 = Math.sqrt(3.0);
	}
	
	StaticBlock(String msg)
	{
		System.out.println(msg);
	}
}

class SDemo3
{
	public static void main(String[] args)
	{
		StaticBlock ob = new StaticBlock("Inside Constructor");
		
		System.out.println("Sqrt of 2 is: " + StaticBlock.rootOf2);
		System.out.println("Sqrt of 3 is: " + StaticBlock.rootOf3);
	} 
}
```

```
Inside static block.
Inside Constructor
Sqrt of 2 is 1.4142135623730951
Sqrt of 3 is 1.7320508075688772
```

the static block is executed before any objects are constructed.

___


#### Quick Sort

The Quicksort is built on the idea of partitions. The general procedure is to select a value,
called the comparand, and then to partition the array into two sections. All elements greater
than or equal to the partition value are put on one side, and those less than the value are put
on the other. This process is then repeated for each remaining section until the array is sorted.

```java
class Quicksort 
{
	// Set up a call to the actual Quicksort method.
	static void qsort(char[] items) 
	{
		qs(items, 0, items.length-1);
	}
	
	// A recursive version of Quicksort for characters.
	private static void qs(char[] items, int left, int right)
	{
		int i, j;
		char x, y;
		i = left; j = right;
		x = items[(left+right)/2];
		do 
		{
			while((items[i] < x) && (i < right)) i++;
			while((x < items[j]) && (j > left)) j--;
			if(i <= j) 
			{
				y = items[i];
				items[i] = items[j];
				items[j] = y;
				i++; j--;
			}
		} while(i <= j);
		
	if(left < j) qs(items, left, j);
	if(i < right) qs(items, i, right);
	}
}

class QSDemo
{
	public static void main(String[] args) 
	{
		char[] a = { 'd', 'x', 'a', 'r', 'p', 'j', 'i' };
		int i;
		System.out.print("Original array: ");
		for(i=0; i < a.length; i++)
			System.out.print(a[i]);
	
		System.out.println();
	
		// now, sort the array
		Quicksort.qsort(a);
		
		System.out.print("Sorted array: ");
		for(i=0; i < a.length; i++)
			System.out.print(a[i]);
	}
}
```

___

#### Nested and Inner Classes

nested class that is declared directly within its
enclosing class scope is a member of its enclosing class. It is also possible to declare a nested
class that is local to a block.

non-static
variety. This type of nested class is also called an inner class. It has access to all of the variables
and methods of its outer class and may refer to them directly in the same way that other non-
static members of the outer class do.


#### Varargs : Variable length arguments

varargs, which is short for
variable-length arguments. A method that takes a variable number of arguments is called a
variable-arity method, or simply a varargs method. The parameter list for a varargs method
is not fixed, but rather variable in length. Thus, a varargs method can take a variable number
of arguments.

A variable-length argument is specified by three periods (...).


```java
static void vaTest(int ... v) 
{
	System.out.println("Number of args: " + v.length);
	System.out.println("Contents: ");
	
		for(int i=0; i < v.length; i++)
			System.out.println(" arg " + i + ": " + v[i]);
	System.out.println();
}
```

`int ... v` This syntax tells the compiler that `vaTest( )` can be called with zero or more arguments. Furthermore, it causes v to be implicitly declared as an array of type `int[ ]`.


A method can have “normal” parameters along with a variable-length parameter. However,
the variable-length parameter must be the last parameter declared by the method. 

`int doIt(int a, int b, double c, int ... vals) {`

there must be only one varargs parameter

___

#### Overloading Vargs Methods

Changing the type of the input parameter to make different version of the methods.

vaTest(int ...) and vaTest(boolean ...).
Remember, the ... causes the parameter to be treated as an array of the specified type. Therefore,
just as you can overload methods by using different types of array parameters, you can overload
varargs methods by using different types of varargs.

The second way to overload a varargs method is to add one or more normal parameters.
This is what was done with vaTest(String, int ...). In this case, Java uses both the number of
arguments and the type of the arguments to determine which method to call.

#### varargs and ambiguity

```java
static void vaTest(int ... v) {

static void vaTest(boolean ... v) {

vaTest(); // causes error
```

vararg parameter can be empty, this call could be translated into a call to vaTest(int ...)
or to vaTest(boolean ...). Both are equally valid. Thus, the call is inherently ambiguous so will not compile.

```java
static void vaTest(int ... v) { // ...

static void vaTest(int n, int ... v) { // ...

vaTest(1);
```
Although the parameter lists of vaTest( ) differ, there is no way for the compiler to resolve the call:


___

