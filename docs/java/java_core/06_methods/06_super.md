
#### Using super to call Superclass Constructor

When both the superclass and the subclass define constructors, the process is a bit more
complicated because both the superclass and subclass constructors must be executed. In this
case, you must use another of Java’s keywords, super, which has two general forms. The
first calls a superclass constructor. The second is used to access a member of the superclass
that has been hidden by a member of a subclass.


`super(parameter-list);` 
super( ) must always be the first statement executed inside a subclass constructor.

```java
class TwoDShape
{
	private double width;
	private double height;

	// Parameterized constructor
	TwoDShape(double w, double h)
	{
		width = w;
		height = h;
	}
	
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
	private String style;
	
	Triangle(String s, double w, double h)
	{
		super(w, h); // call superclass constructor
		
		style = s;
	}
	
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
		Triangle t1 = new Triangle("filled", 4.0, 4.0);
		Triangle t2 = new Triangle("outlined", 8.0, 12.0);
		
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

Here, Triangle( ) calls super( ) with the parameters w and h. This causes the TwoDShape( )
constructor to be called, which initializes width and height using these values. Triangle
no longer initializes these values itself. It need only initialize the value unique to it: style.

Any form of constructor defined by the superclass can be called by super( ). 

This can be expanded by adding default constructors and constructors that take one argument (constructor overloading)

```java
class TwoDShape
{
	private double width;
	private double height;
	
	// A default Constructor
	TwoDShape()
	{
		width = height = 0.0;
	}
	
	// Parameterized constructor
	TwoDShape(double w, double h)
	{
		width = w;
		height = h;
	}
	
	// Construct object with equal height and width
	TwoDShape(double x)
	{
		width = height = x;
	}
	
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
	private String style;
	
	// Default Constructor
	Triangle()
	{
		super(); // calling default for superclass 
		style = "none";
	}
	
	// Constructor 
	Triangle(String s, double w, double h)
	{
		super(w, h); // call superclass constructor
		
		style = s;
	}
	
	// One argument constructor
	Triangle(double x)
	{
		super(x);
		
		style = "filled";
	}
	
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
		Triangle t2 = new Triangle("outlined", 8.0, 12.0);
		Triangle t3 = new Triangle(4.0);
		
		t1 = t2;
		
		System.out.println("Info for t1: ");
		t1.showStyle();
		t1.showDim();
		System.out.println("Area is " + t1.area());

		System.out.println();
		
		System.out.println("Info for t2: ");
		t2.showStyle();
		t2.showDim();
		System.out.println("Area is " + t2.area());
		
		System.out.println();
		
		System.out.println("Info for t3: ");
		t3.showStyle();
		t3.showDim();
		System.out.println("Area is " + t3.area());
	}
}
```

```
$ java Shapes 

Info for t1: 
Triangle is outlined
width and height are 8.0 and 12.0
Area is 48.0

Info for t2: 
Triangle is outlined
width and height are 8.0 and 12.0
Area is 48.0

Info for t3: 
Triangle is filled
width and height are 4.0 and 4.0
Area is 8.0
```

____

#### Using super to Access Superclass Members


There is a second form of super that acts somewhat like this, except that it always refers to the
superclass of the subclass in which it is used. This usage has the following general form:
`super.member`

Here, member can be either a method or an instance variable.
This form of super is most applicable to situations in which member names of a subclass
hide members by the same name in the superclass.

```java
// Using super to overcome name hiding.

class A 
{
	int i;
}

// Create a subclass by extending class A.
class B extends A 
{
	int i; // this i hides the i in A
	// Constructor
	B(int a, int b) 
	{
		super.i = a; // refers to i in A
		i = b; // i in B
	}
	
	void show() 
	{
		System.out.println("i in superclass: " + super.i);
		System.out.println("i in subclass: " + i);
	}
}

class UseSuper 
{
	public static void main(String[] args) 
	{
		B subObject = new B(1, 2);
		subObject.show();
	}
}
```

```
i in superclass: 1
i in subclass: 2
```

Although the instance variable i in B hides the i in A, super allows access to the i defined in the superclass. super can also be used to call methods that are hidden by a subclass.

____

#### Creating multilevel hierarchy

subclass Triangle is used as a superclass to create the subclass called ColorTriangle.
ColorTriangle inherits all of the traits of Triangle and TwoDShape and adds a field called
color, which holds the color of the triangle.


```java
// A multilevel hierarchy

class TwoDShape
{
	private double width;
	private double height;
	
	// A default Constructor
	TwoDShape()
	{
		width = height = 0.0;
	}
	
	// Parameterized constructor
	TwoDShape(double w, double h)
	{
		width = w;
		height = h;
	}
	
	// Construct object with equal height and width
	TwoDShape(double x)
	{
		width = height = x;
	}
	
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

// Extend TwoDShape
class Triangle extends TwoDShape
{
	private String style;
	
	// Default Constructor
	Triangle()
	{
		super(); // calling default for superclass 
		style = "none";
	}
	
	// Constructor
	Triangle(String s, double w, double h)
	{
		super(w, h); // call superclass constructor
		
		style = s;
	}
	
	// One argument constructor
	Triangle(double x)
	{
		super(x);
		
		style = "filled";
	}
	
	double area()
	{
		return getWidth() * getHeight()/2;
	}  // using accessor methods of TwoDShape
	
	void showStyle()
	{
		System.out.println("Triangle is " + style);
	}
}

// Extend Triangle ( decendent of TwoDShape)
class ColorTriangle extends Triangle
{
	private String color; 
	
	ColorTriangle(String c, String s, double w, double h)
	{
		super(s, w, h);
		color = c;
	}
	
	String getColor() { return color; }
	
	void showColor()
	{
		System.out.println("Color is " + color);
	}
}


class Shapes
{
	public static void main(String[] args)
	{
		ColorTriangle t1 = new ColorTriangle("Blue","outlined", 8.0, 12.0 );

		ColorTriangle t2 = new Triangle("Red", "filled", 2.0, 2.0);
		
		System.out.println("Info for t1: ");
		t1.showStyle();
		t1.showDim();
		t1.showColor();
		System.out.println("Area is " + t1.area());
		
		System.out.println();
		
		System.out.println("Info for t2: ");
		t2.showStyle();
		t2.showDim();
		t2.showcolor();
		System.out.println("Area is " + t2.area());
	}
}
```

```
Info for t1:
Triangle is outlined
Width and height are 8.0 and 12.0
Color is Blue
Area is 48.0

Info for t2:
Triangle is filled
Width and height are 2.0 and 2.0
Color is Red
Area is 2.0
```

____

super( ) always refers to the constructor
in the closest superclass. The super( ) in ColorTriangle calls the constructor in Triangle. The
super( ) in Triangle calls the constructor in TwoDShape. In a class hierarchy, if a superclass
constructor requires parameters, then all subclasses must pass those parameters “up the line.”
This is true whether or not a subclass needs parameters of its own.

___

since super( ) must be the first statement executed in a subclass’
constructor, this order is the same whether or not super( ) is used. If super( ) is not used, then
the default (parameterless) constructor of each superclass will be executed.

constructors complete their execution in order of derivation, from superclass to subclass.


___
