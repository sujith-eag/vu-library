
#### Methods

Methods are subroutines that manipulate the data defined by the class and, in many cases, provide access to that data. In most cases, other parts of your program will interact with a class through its methods. In well-written Java code, each method performs only one task.

`main( )` is reserved for the method that begins execution of your program. you can give a method whatever name you please.

General form of method
```java
ret-type name(parameter-list) 
{
	// body of method
}
```

Here, `ret-type` specifies the type of data returned by the method. This can be any valid type, including class types that you create. If the method does not return a value, its return type must be `void`.

The parameter-list is a sequence of type and identifier pairs separated by commas. Parameters are essentially variables that receive the value of the arguments passed to the method when it is called. If the method has no parameters, the parameter list will be empty.

___

The range of a vehicle is dependent upon the capacity of the fuel tank and the
rate of fuel consumption, and both of these quantities are encapsulated by Vehicle. By adding a method to Vehicle that computes the range, you are enhancing its object-oriented structure.

```java
class Vehicle
{
	int passengers;
	int fuelcap;
	int kpl;
	
	void range()
	{
		System.out.println("Range is " + fuelcap * kpl);
	} // no need of dot notation
}

class VehicleDemo
{
	public static void main(String[] args)
	{
		Vehicle minivan = new Vehicle();
		
		minivan.passengers = 7;
		minivan.fuelcap = 16;
		minivan.kpl = 21;
		
		System.out.print("Minivan can carry " + minivan.passengers + ". ");
		
		minivan.range(); // Displays range
	}
}
```

```
Minivan can carry 7. Range is 336
```

___

#### Returning from a Method

`return value;` This form of return can be used only with methods that have a non-void return type. Furthermore, a non-void method must return a value by using this form
of return.

In a `void` method, you can cause the immediate termination of a method by return.

```java
class Vehicle
{
	int passengers;
	int fuelcap;
	int kpl;
	
	int range()
	{
		return fuelcap * kpl;
	} // no need of dot notation
}

class VehicleDemo
{
	public static void main(String[] args)
	{
		Vehicle minivan = new Vehicle();
		
		int range1;
		minivan.passengers = 7;
		minivan.fuelcap = 16;
		minivan.kpl = 21;
		
		range1 = minivan.range(); // Displays range
		System.out.print("Minivan can carry " + minivan.passengers + "with range of " + range1 + " Miles.");
	}
}
```

```
Minivan can carry 7 with range of 336 Miles
```

Even `range1` is not necessary as `minivan.range()` can be directly used in print.

____

#### Using Parameters

It is possible to pass one or more values to a method when the method is called.
value passed to a method is called an argument. Inside the method, the variable that receives the argument is called a parameter.

```java
class CheckNum 
{
	boolean isEven(int x)
	{
		if ( (x%2) == 0)
			return true;
		else 
			return false;
	}
}

class ParaDemo
{
	public static void main(String[] args)
	{
		CheckNum e = new CheckNum();
		
		if (e.isEven(10))
			System.out.println("10 is even");
		if(e.isEven(9))
			System.out.println("9 is even");
	}
}
```

With multiple parameters

```java
class Factor 
{
	boolean isFactor(int a, int b) 
	{
		if( (b % a) == 0) return true;
		else return false;
	}
}

class IsFact 
{
	public static void main(String[] args)
	{
		Factor x = new Factor();
		
		if(x.isFactor(2,20))
			System.out.prinln("2 is factor");
	}
}
```

___

```java
double fuelNeeded(int miles) 
{
	return (double) miles / mpg;
}
```

___
