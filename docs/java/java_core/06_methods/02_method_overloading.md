#### Method Overloading

In Java, two or more methods within the same class can share the same name, as long as
their parameter declarations are different. When this is the case, the methods are said to be
overloaded, and the process is referred to as method overloading. Method overloading is one
of the ways that Java implements polymorphism.

to overload a method, simply declare different versions of it.

one important restriction: the type and/or number of
the parameters of each overloaded method must differ. It is not sufficient for two methods
to differ only in their return types. (Return types do not provide sufficient information in all
cases for Java to decide which method to use.) Of course, overloaded methods may differ in
their return types, too. When an overloaded method is called, the version of the method whose
parameters match the arguments is executed.

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
		System.out.println("Two parameters: " + a + " " + b);
		return a+b;
	}

	double ovlDemo(double a, double b)
	{
		System.out.println("Two parameters: " + a + " " + b);
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

ovlDemo( ) is overloaded four times. The first version takes no parameters, the second takes one integer parameter, the third takes two integer parameters, and the fourth takes
two double parameters.


Return types cannot be used to differentiate overloaded methods.

Method overloading supports polymorphism because it is one way that Java implements
the “one interface, multiple methods” paradigm.

There is no rule stating that overloaded methods must relate to one another. However,
from a stylistic point of view, method overloading implies a relationship. While you can use the same name to overload unrelated methods, you should not.

___

#### Overloading Constructors

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

MyClass( ) is overloaded four ways, each constructing an object differently. The proper
constructor is called based upon the parameters specified when new is executed. By overloading
a class’ constructor, you give the user of your class flexibility in the way objects are constructed.

___

One of the most common reasons that constructors are overloaded is to allow one object to initialize another.


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

an advantage of providing a constructor that uses one object
to initialize another is efficiency. In this case, when s2 is constructed, it is not necessary to recompute the summation. Of course, even in cases when efficiency is not an issue, it is often useful to provide a constructor that makes a copy of an object.

___
