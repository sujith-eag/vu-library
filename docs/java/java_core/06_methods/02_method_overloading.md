
# Method Overloading

In Java, two or more methods within the same class can share the same name, as long as their parameter declarations are different. When this is the case, the methods are said to be overloaded, and the process is referred to as method overloading. 

When an overloaded method is called, the version of the method whose parameters match the arguments is executed.

>[!important]
>To overload a method, simply declare different versions of it.
>
>Method overloading is one of the ways that Java implements polymorphism. it is one way that Java implements “one interface, multiple methods” paradigm.


>[!warning]
>The type and/or number of the parameters of each overloaded method must differ. It is not sufficient for two methods to differ only in their return types. 

Overloaded methods may differ in their return types but  do not provide sufficient information in all cases for Java to decide which method to use. 

```java
class Overload
{
	void ovlDemo()
	{
		System.out.println("No Parameters");
	}
	
	void ovlDemo(int a)
	{
		System.out.println("One Parameter: " + a);
	}
	
	int ovlDemo(int a, int b)
	{
		System.out.println("Two parameters: " 
			+ a + " " + b);
		return a+b;
	}

	double ovlDemo(double a, double b)
	{
		System.out.println("Two parameters: " 
			+ a + " " + b);
		return a+b;
	}
}

class OverloadDemo
{
	public static void main(String[] args)
	{
		Overload ob = new Overload();
		int resI;
		double resD;
		
		ob.ovlDemo();
		
		ob.ovlDemo(2);	
		
		resI = ob.ovlDemo(4,6);
		System.out.println("Result : " + resI);
		
		resD = ob.ovlDemo(1.1, 2.32);
		System.out.println("Result : " + resD);
	}
}
```

```
No parameters

One parameter: 2

Two parameters: 4 6
Result : 10

Two double parameters: 1.1 2.32
Result : 3.42
```

`ovlDemo( )` is overloaded four times. 
* First version takes no parameters
* Second takes one integer parameter
* Third takes two integer parameters
* Fourth takes two double parameters.

Same name can be used to overload unrelated methods, you should not. From a stylistic point of view, method overloading implies a relationship.


## Overloading Constructors

Like methods, constructors can also be overloaded. Doing so allows you to construct objects in a variety of ways.

```java
// Overloaded constructor

class MyClass
{
	int x;

	// Variety of Constructors
	MyClass()
	{
		System.out.println("Inside MyClass()");
		x = 0;
	}
	
	MyClass(int i)
	{
		System.out.println("Inside MyClass(int)");
		x = i;
	}
	
	MyClass(double d)
	{
		System.out.println("Inside MyClass(double)");
		x = (int) d;
	}
	
	MyClass(int i, int j)
	{
		System.out.println("Inside MyClass(int, int)");
		x = i*j;
	}
}


class OverloadConsDemo 
{
	public static void main(String[] args) 
	{
		MyClass t1 = new MyClass();
		MyClass t2 = new MyClass(88);
		MyClass t3 = new MyClass(17.23);
		MyClass t4 = new MyClass(2, 4);
		
		System.out.println("t1.x: " + t1.x);
		System.out.println("t2.x: " + t2.x);
		System.out.println("t3.x: " + t3.x);
		System.out.println("t4.x: " + t4.x);
	}
}
```

```
Inside MyClass().
Inside MyClass(int).
Inside MyClass(double).
Inside MyClass(int, int).
t1.x: 0
t2.x: 88
t3.x: 17
t4.x: 8
```

`MyClass( )` is overloaded four ways, each constructing an object differently. The proper constructor is called based upon the parameters specified when new is executed. 

By overloading a class constructor, you give the user flexibility in the way objects are constructed.

___
#### Object Initializing another object

One of the most common reasons that constructors are overloaded is to allow one object to initialize another. An advantage of providing a constructor that uses one object to initialize another is efficiency. 

```java
// Initialize one object with another.
class Summation
{
	int sum;
	// Construct from an int.
	Summation(int num) 
	{
		sum = 0;
		for(int i=1; i <= num; i++)
			sum += i;
	}
	
	// Construct from another object.
	Summation(Summation ob) 
	{
		sum = ob.sum;
	}
}

class SumDemo 
{
	public static void main(String[] args) 
	{
		Summation s1 = new Summation(5);
		Summation s2 = new Summation(s1);
		System.out.println("s1.sum: " + s1.sum);
		System.out.println("s2.sum: " + s2.sum);
	}
}
```

```
s1.sum: 15
s2.sum: 15
```

In this case, when `s2` is constructed, it is not necessary to recompute the summation. 

___
