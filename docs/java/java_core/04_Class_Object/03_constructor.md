

# constructors

A constructor initializes an object when it is created. It has the same name as its class and is syntactically similar to a method. However, constructors have no explicit return type. 

Constructor is used to give initial values to the instance variables defined by the class, or to perform any other startup procedures required to create a fully
formed object.

The instance variables of each Vehicle object had to be set manually using a sequence of statements, such as:  `minivan.passengers = 7;`

```java
class Myclass
{
	int x;
	
	MyClass()  // cnstructor for my class
	{
		x = 10;
	}
}

class ConsDemo
{
	public static void main(String[] args)
	{
		Myclass t1 = new Myclass();
		Myclass t2 = new Myclass();
		
		System.out.println(t1.x + " " + t2.x );
	}
}
```

This constructor is called by new when an object is created using new.

>[!note]
>All classes have constructors, whether you define one or not, because Java automatically provides a default constructor. Non-initialized member variables have their default values, which are zero, null, and false, for numeric types, reference types, and booleans, respectively. Once you define your own constructor, the default constructor is no longer used.


## Parameterized constructors

Parameters are added to a constructor in the same way that they are added to a method. Just declare them inside the parentheses after the constructor’s name.

```java
class MyClass
{
	int x;
	
	MyClass(int i)  // constructor for MyClass
	{
		x = i;
	}
}

class ConsDemo
{
	public static void main(String[] args)
	{
		MyClass t1 = new MyClass(10);
		MyClass t2 = new MyClass(88);
		
		System.out.println(t1.x + " " + t2.x );
	}
}
```

___

```java
class Vehicle 
{
	int passengers;
	int fuelcap;
	int kpl;
	
	Vehicle(int p, int f, int m)
	{
		passengers = p
		fuelcap = f;
		kpl = m;
	}
	
	int range()
	{
		return kpl*fuelcap;
	}
	
	// Fuel needed for given distance
	double fuelNeeded(int km)
	{
		return (double) km / kpl;
	}
}

class VehConsDemo 
{
	public static void main(String[] args) 
	{
		// construct complete vehicles
		Vehicle minivan = new Vehicle(7, 16, 21);
		
		double liters;
		int dist = 252;
		
		liters = minivan.fuelNeeded(dist);
		
		System.out.println("To go " + dist 
			+ " miles minivan needs " + liters 
				+ " liters of fuel.");
	}
}
```



## Garbage collection

Java’s garbage collection system reclaims objects automatically behind the scenes, without any programmer intervention. 

When no references to an object exist, that object is assumed to be no longer needed, and the memory occupied by the object is released. This recycled memory can then be used for a subsequent allocation.

Garbage collection occurs only sporadically during the execution of your program. It will not occur simply because one or more objects exist that are no longer used.

>[!note]
>The garbage collector will run only when two conditions are met: There are objects to recycle, and there is a reason to recycle them. 


## 'this' keyword

When a method is called, it is automatically passed an implicit argument that is a reference to the invoking object (that is, the object on which the method is called). This reference is called `this`.

Writing the statement without using `this` in return is really just shorthand. `this` has some important uses. For example, the Java syntax permits the name of a parameter or a local variable to be the same as the name of an instance variable. When this happens, the local name hides the instance variable. You can gain access to the hidden instance variable by referring to it through `this`.

```java
// Constructor for class pwr

pwr (double b, int e)
{
	this.b = b;
	this.e = e;
	
	val = 1;
	if(e==0)
		return;
	
	for( ; e>0; e--)
		val = val *b;
}
```

____

