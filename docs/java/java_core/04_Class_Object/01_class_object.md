
# 'class' Object

The class is the foundation upon which the entire Java language is built. class defines the nature of an object and forms the basis for object-oriented programming in Java. 

## 'class' Fundamentals

class created using keyword `class` is a template that defines the form of an object. It specifies both the data and the code that will operate on that data. 

Objects are instances of a class. Thus, a class is essentially a set of plans that specify how to build an object. A class is a logical abstraction. It is not until an object of that class has been created that a physical representation of that class exists in memory.

Methods and Variables that constitute a class are called members of the class. The data members are also referred to as instance variables. 

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


>[!important]
>A well-designed class should define one and only one logical entity. a well-designed class groups logically connected information. 


General form of a class does not specify a `main( )` method which is required only if that class is the starting point for your program. Also, some types of Java applications don’t require a `main( )`.


## Defining a Class

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

Every Vehicle object will contain its own copies of the instance variables passengers, fuelcap, and kpl. dot (.) operator `object.member` is used to access these variables.

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

Both the `Vehicle` and `VehicleDemo` classes can be in the same source filecalling it `VehicleDemo.java`. This name makes sense because the `main()` method is in the class called `VehicleDemo`.

The Java compiler automatically puts each class into its own `.class` file when it is compiled using `javac`. Two `.class` files will be created, one for `Vehicle` and one for `VehicleDemo`. 

>[!note]
>It is **not necessary** for both the Vehicle and the `VehicleDemo` class to be in the same source file. You could put each class in its own file, called `Vehicle.java` and `VehicleDemo.java`, respectively. If you do this, you can still compile the program by compiling `VehicleDemo.java`.

____

### How objects are created

The `new` operator dynamically allocates (at run time) memory for an object
and returns a reference to it. This reference is the address in memory of the object allocated by `new`.  This reference is then stored in a variable. 

Thus, in Java, all class objects must be dynamically allocated. 

```java
Vehicle minivan; // declare reference to object

minivan = new Vehicle(); // allocate a Vehicle object
```

* First line declares minivan as a reference to an object of type Vehicle. Thus, minivan is a variable that can refer to an object, but it is not an object itself.

* Next line creates a new Vehicle object and assigns its reference to minivan. Now, minivan is linked with an object.

____

### Reference variables and assignment

In an assignment operation, object reference variables act differently than do variables of a primitive type, such as `int`. 

Assigning one primitive-type variable to another, variable on the left receives a copy of the value of the variable on the right. 

Assigning one object reference variable to another, changes the object that the reference variable refers to.

```java
Vehicle car1 = new Vehicle();

vehicle car2 = car1;

car1.mpg = 26;

System.out.println(car1.mpg);

System.out.println(car2.mpg);

// 26.
```

`car1` and `car2` will both refer to the same object. Thus, the object can be acted upon by either `car1` or `car2`.

____
