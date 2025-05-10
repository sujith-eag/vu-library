Using inheritance, you can create a general
class that defines traits common to a set of related items. This class can then be inherited by
other, more specific classes, each adding those things that are unique to it. it
allows the creation of hierarchical classifications.

In the language of Java, a class that is inherited is called a superclass. The class that
does the inheriting is called a subclass. Therefore, a subclass is a specialized version of a
superclass. It inherits all of the variables and methods defined by the superclass and adds its
own, unique elements.


Java supports inheritance by allowing one class to incorporate another class into its declaration.
This is done by using the extends keyword

___

The following program creates a superclass called TwoDShape, which stores the width and
height of a two-dimensional object, and a subclass called Triangle.

```java
class TwoDShape
{
	double width;
	double height;
	
	void showDim()
	{
		System.out.println("width and height are " + width + " and " + height);
	}
}

class Triangle extends TwoDShape // inherits TwoDShape
{
	String style;
	
	double area()
	{
		return width* height/2;
	}  // can refer to TwoDShape members directly
	
	void shoStyle()
	{
		System.out.println("Triangle is " + style);
	}
}

class Shape
{
	public static void main(String[] args)
	{
		Triangle t1 = new Triangle();
		Triangle t2 = new Triangle();
		
	 // members of TwoDShape are available to triangle
		t1.width = 4.0;
		t1.height = 4.0;
		t1.style = "filled";
		
		t2.width = 8.0;
		t2.height = 12.0;
		t2.style = "outlined";
		
		System.out.println("Info for t1: ");
		t1.showStyle();
		t1.showDim();
		System.out.println("Area is " + t1.area());

		System.out.println();
		
		System.out.println("Info for t2: ");
		t2.showStyle();
		t2.showDim();
		System.out.println("Area is " + t2.area());
	}
}
```

```
Info for t1:
Triangle is filled
Width and height are 4.0 and 4.0
Area is 8.0

Info for t2:
Triangle is outlined
Width and height are 8.0 and 12.0
Area is 48.0
```


Here, TwoDShape defines the attributes of a “generic” two-dimensional shape, such as a
square, rectangle, triangle, and so on. The Triangle class creates a specific type of TwoDShape,
in this case, a triangle. The Triangle class includes all of TwoDShape and adds the field style,
the method area( ), and the method showStyle( ). The triangle’s style is stored in style.

Because Triangle includes all of the members of its superclass, TwoDShape, it can access
width and height inside area( ). Also, inside main( ), objects t1 and t2 can refer to width and
height directly, as if they were declared by Triangle.

Even though TwoDShape is a superclass for Triangle, it is also a completely independent,
stand-alone class. Being a superclass for a subclass does not mean that the superclass cannot
be used by itself.

General form of class declaration that inherits a superclass is is
```java
class subclass-name extends superclass-name {
	// body of class
}
```

You can specify only one superclass for any subclass that you create. Java does not support
the inheritance of multiple superclasses into a single subclass. (This differs from C++, in
which you can inherit multiple base classes)

You can, however, create a hierarchy of inheritance in which a subclass becomes
a superclass of another subclass.

```java
// A subclass of TwoDShape for rectangles.

class Rectangle extends TwoDShape 
{
	boolean isSquare() 
	{
		if(width == height) return true;
			return false;
	}
	double area() 
	{
		return width * height;
	}
}
```

___

#### Member Access and Inheritance

Inheriting a class does not overrule the private
access restriction. Thus, even though a subclass includes all of the members of its superclass,
it cannot access those members of the superclass that have been declared private.

if width and height are made private in TwoDShape, then Triangle will not be able to access them:

a class member that has been declared private will remain private to its
class. It is not accessible by any code outside its class, including subclasses. accessor methods to provide access to the private members of a class.

```java
class TwoDShape
{
	private double width;
	private double height;

	// Accessor methods for private members
	double getWidth() { return width;}
	double getHeight() { return height;}
	void setWidth(double w) { width = w;}
	void setHeight(double h) { height = h;}

	void showDim()
	{
		System.out.println("width and height are " + width + " and " + height);
	}
}

class Triangle extends TwoDShape // inherits TwoDShape
{
	String style;
	
	double area()
	{
		return getWidth() * getHeight()/2;
	}  // using accessor methods of TwoDShape
	
	void showStyle()
	{
		System.out.println("Triangle is " + style);
	}
}

class Shapes
{
	public static void main(String[] args)
	{
		Triangle t1 = new Triangle();
		Triangle t2 = new Triangle();
		
	 // members of TwoDShape are available to triangle
		t1.setWidth(4.0);
		t1.setHeight(4.0);
		t1.style = "filled";
		
		t2.setWidth(8.0);
		t2.setHeight(12.0);
		t2.style = "outlined";
		
		System.out.println("Info for t1: ");
		t1.showStyle();
		t1.showDim();
		System.out.println("Area is " + t1.area());

		System.out.println();
		
		System.out.println("Info for t2: ");
		t2.showStyle();
		t2.showDim();
		System.out.println("Area is " + t2.area());
	}
}
```

There are no hard and fast rules, but here are two general principles. If an instance variable
is to be used only by methods defined within its class, then it should be made private. 

If an instance variable must be within certain bounds, then it should be private and made available only through accessor methods. This way, you can prevent invalid values from being assigned.

___

#### Constructors and Inheritance

The constructor for the superclass constructs the superclass portion of the object, and the constructor for the subclass constructs the subclass part.

in practice, most classes will have explicit constructors.

When only the subclass defines a constructor, the process is straightforward: simply
construct the subclass object. The superclass portion of the object is constructed automatically using its default constructor.

```java
// Constructor for Triangle

class Triangle extends TwoDShape 
{
	private String style;
	
	// Constructor
	Triangle(String s, double w, double h) 
	{
		setWidth(w);
		setHeight(h);
		// Initialize TwoDShape portion of object.
		style = s;
	}
```

Here, Triangle’s constructor initializes the members of TwoDClass that it inherits along with its own style field.

___
