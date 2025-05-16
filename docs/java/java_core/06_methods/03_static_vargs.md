
# static & vargs


## static

Both methods and variables can be declared to be static. static member, can be accessed before any objects of its class are created, and without reference to any object. 

`main()` is the most common example of a static member. It must be called by the JVM when program begins. 

>[!note]
>To use a static member outside the class, you need only specify the name of its class followed by the dot operator. No object needs to be created. 

if you want to assign the value 10 to a static variable called
count that is part of the Timer class : `Timer.count = 10;`

This format is similar to that used to access normal  instance variables through an object, except that the class name is used. 

>[!important]
>Variables declared as static are, essentially, global variables. When an object is declared, no copy of a static variable is made. Instead, all instances of the class share the same static variable.

A static method can be called by using dot operator on the name of the class. The difference between a static and normal method is that the static method is called through its class name, without any object of that class being created.

Methods declared as static have several restrictions:
* They can directly call only other static methods in their class.
* They can directly access only static variables in their class.
* They do not have a `this` reference.


## static Blocks

A static block is executed when the class is first loaded. Thus, it is executed before the class can be used for any other purpose.

Useful when a class will require some type of initialization before it is ready to create objects. For example, it might need to establish a connection to a remote site. It also might need to initialize certain static variables before any of the class’ static methods are used. 

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
		
		System.out.println("Sqrt of 2 is: " 
			+ StaticBlock.rootOf2);
		
		System.out.println("Sqrt of 3 is: " 
			+ StaticBlock.rootOf3);
	} 
}
```

```
Inside static block.
Inside Constructor
Sqrt of 2 is 1.4142135623730951
Sqrt of 3 is 1.7320508075688772
```

The static block is executed before any objects are constructed.

___

### Quick Sort

The Quicksort is built on the idea of partitions. The general procedure is to select a value, called the comparand, and then to partition the array into two sections. 

All elements greater than or equal to the partition value are put on one side, and those less than the value are put
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


## Nested and Inner Classes

Nested class that is declared directly within its enclosing class scope is a member of its enclosing class. It is also possible to declare a nested class that is local to a block.

This type of nested class is also called an inner class. It has access to all of the variables and methods of its outer class and may refer to them directly in the same way that other non-static members of the outer class do.


## Varargs

varargs, is short for variable-length arguments specified by three periods `(...)` 

A method that takes a variable number of arguments is called a varargs method. 

The parameter list for a varargs method is not fixed, but rather variable in length and can take a variable number of arguments.

```java
static void vaTest(int ... v) 
{
	System.out.println("Number of args: " 
		+ v.length);
	
	System.out.println("Contents: ");

	for(int i=0; i < v.length; i++)
		System.out.println(" arg " 
			+ i + ": " + v[i]);
	
	System.out.println();
}
```

`(int ... v)` This syntax tells the compiler that `vaTest( )` can be called with zero or more arguments. Furthermore, it causes v to be implicitly declared as an array of type `int[ ]`.


A method can have “normal” parameters along with a variable-length parameter. However, the variable-length parameter must be the last parameter declared by the method and there must be only one varargs parameter.

```java
int doIt(int a, int b, double c, int ... vals) 
{
```

___

### Overloading Vargs Methods

Changing the type of the input parameter to make different version of the methods.

`vaTest(int ...)` and `vaTest(boolean ...)`.

>[!note]
>`...` causes the parameter to be treated as an array of the specified type. Therefore varargs methods can be overloaded by using different types of varargs.

The second way to overload a varargs method is to add one or more normal parameters.
`vaTest(String, int ...)`. 

Java uses both the number of arguments and the type of the arguments to determine which method to call.

___

### varargs and ambiguity

`vararg` parameter can be empty, this call could be translated into a call to `vaTest(int ...)` or to `vaTest(boolean ...)`, both are equally valid. Thus, the call is inherently ambiguous so will not compile.

```java
static void vaTest(int ... v) 
{ //

static void vaTest(boolean ... v) 
{ //

vaTest(); // causes error
```

```java
static void vaTest(int ... v) 
{ // ...

static void vaTest(int n, int ... v) 
{ // ...

vaTest(1); // error
```

Although the parameter lists of `vaTest( )` differ, there is no way for the compiler to resolve the call and assign the argument.

___

