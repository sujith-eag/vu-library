The class is the essence of Java. It is the foundation upon which the entire Java language is built because the class defines the nature of an object. As such, the class forms the basis for object-oriented programming in Java. Within a class are defined data and code that acts upon that data. The code is contained in methods.

____

#### class Fundamentals

class is a template that defines the form of an object. It specifies both the data and the code that will operate on that data. 

Java uses a class specification to construct objects. Objects are instances of a class. Thus, a class is essentially a set of plans that specify how to build an object. It is important to be clear on one issue: a class is a logical abstraction. It is not until an object of that class has been created that a physical representation of that class exists in memory.

Methods and Variables that constitute a class are called members of the class. The data members are also referred to as instance variables. When you define a class, you declare its exact form and nature. You do this by specifying the instance variables that it contains and the methods that operate on them

A class is created by using the keyword `class`.

```java
class classname {
	// declare instance variables
	type var1;
	type var2;
	// ...
	type varN;
	
	// declare methods
	type method1(parameters) {
		// body of method
	}
	
	type method2(parameters) {
		// body of method
	}
		
	// ...
	type methodN(parameters) {
		// body of method
	}
}
```

Although there is no syntactic rule that enforces it, a well-designed class should define one and only one logical entity.	a well-designed class groups logically connected information. Putting unrelated information into the same class will quickly destructure your code!

___

However, notice that the general form of a class does not specify a `main( )` method. A `main( )` method is required only if that class is the starting point for your program. Also, some types of Java applications don’t require a `main( )`.

___

#### Defining a Class

A data-only class.
```java
class Vehicle
{
	int passengers;
	int fuelcap;
	int kpl;
}

// To actually create a Vehicle object
Vehicle minivan = new Vehicle(); 

// create a Vehicle object called minivan
```

Every Vehicle object will contain its own copies of the instance variables passengers, fuelcap, and kpl. To access these variables, you will use the dot (.) operator `object.member` 

The dot operator links the name of an object with the name of a member.
`minivan.fuelcap = 16;`

___

```java
class Vehicle
{
	int passengers;
	int fuelcap;
	int kpl;
}

class VehicleDemo
{
	public static void main(String[] args)
	{
		Vehicle minivan = new Vehicle();
		int range;
		minivan.passengers = 7;
		minivan.fuelcap = 16;
		minivan.kpl = 21;
		
		range = minivan.fuelcap * minivan.kpl;
		System.out.println("Minivan can carry " + minivan.passengers + " with a range of " + range);
	}
}
```

You can put both the `Vehicle` and `VehicleDemo` classes in the same source file. You could call the file that contains this program `VehicleDemo.java`. This name makes sense because the `main( )` method is in the class called `VehicleDemo`.

Either class can be the first one in the file.  The Java compiler automatically puts each class into its own `.class` file. When you compile this program using `javac`, you will find that two `.class` files have been created, one for `Vehicle` and one for `VehicleDemo`. 

It is important to understand that it is not necessary for both the Vehicle and the `VehicleDemo` class to be in the same source file. You could put each class in its own file, called `Vehicle.java` and `VehicleDemo.java`, respectively. If you do this, you can still compile the program by compiling `VehicleDemo.java`.

____

#### How objects are created

The `new` operator dynamically allocates (that is, allocates at run time) memory for an object
and returns a reference to it. This reference is, essentially, the address in memory of the object allocated by `new`. 

This reference is then stored in a variable. Thus, in Java, all class objects must be dynamically allocated. The two steps combined in the preceding statement can be rewritten like this to show each step individually:

```java
Vehicle minivan; // declare reference to object

minivan = new Vehicle(); // allocate a Vehicle object
```
The first line declares minivan as a reference to an object of type Vehicle. Thus, minivan is a variable that can refer to an object, but it is not an object itself. At this point, minivan does not refer to an object. The next line creates a new Vehicle object and assigns a reference to it to minivan. Now, minivan is linked with an object.

____

#### Reference variables and assignment

In an assignment operation, object reference variables act differently than do variables of a primitive type, such as `int`. 

When you assign one primitive-type variable to another, variable on the left receives a copy of the value of the variable on the right. 

When you assign one object reference variable to another, you are changing the object that the reference variable refers to.

The effect of this difference can cause some counter intuitive results.

```java
Vehicle car1 = new Vehicle();
vehicle car2 = car1;
```

car1 and car2 will both refer to the same object. Thus, the object can be acted upon by either car1 or car2.

```java
car1.mpg = 26;

System.out.println(car1.mpg);
System.out.println(car2.mpg);

// 26.
```

____
