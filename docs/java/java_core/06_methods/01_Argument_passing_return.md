
### Controlling access to Class Members

there are two basic types
of class members: public and private. A public member can be freely accessed by code defined
outside of its class. A private member can be accessed only by other methods defined by its
class. It is through the use of private members that access is controlled.

when correctly implemented, a class creates a “black box” that can
be used, but the inner workings of which are not open to tampering.


#### Java Access modifiers

Member access control is achieved through the use of three access modifiers: public, private, and protected. 

If no access modifier is used, the default access setting is assumed as public.


When a member of a class is modified by the public specifier, that member can be accessed by any other code in your program. This includes by methods defined inside other classes.

When a member of a class is specified as private, that member can be accessed only by other members of its class.
methods in other classes cannot access a private member of
another class.

```
public String errMsg;
private accountBalance bal;
private boolean isError(byte status) { // ...
```

```java
// Public vs private access.

class MyClass 
{
	private int alpha; // private access
	public int beta; // public access
	int gamma; // default access


	void setAlpha(int a) {
		alpha = a;
	}

	int getAlpha() {
		return alpha;
	}
}

class AccessDemo
{
	public static void main(String[] args)
	{
		MyClass ob = new MyClass();
		
		ob.setAlpha(-99); // accessor method
		System.out.println("ob.alpha is " + ob.getAlpha());
		
		ob.alpha = 10; // this wont work
		ob.beta = 88; // this is assigned
		ob.gamma = 99; 
	}
}
```

___

#### Pass Objects to Methods

it is correct and common to pass objects to methods.

The sameBlock( ) and sameVolume( ) methods compare the Block object passed as
a parameter to the invoking object. For sameBlock( ), the dimensions of the objects are
compared and true is returned only if the two blocks are the same. For sameVolume( ), the
two blocks are compared only to determine whether they have the same volume. In both cases,
notice that the parameter ob specifies Block as its type. Although Block is a class type created
by the program, it is used in the same way as Java’s built-in types.

```java
class Block 
{
	int a, b, c;
	int volume;
	
	Block(int i, int j, int k) // constructor
	{
		a = i;
		b = j;
		c = k;
		volume = a * b * c;
	}
	
	boolean sameBlock(Block ob) // Object as parameter
	{
		if( (ob.a==a) & (ob.b==b) & (ob.c==c) )
			return true;
		else
			return false;
	}
	
	boolean sameVolume(Block ob)
	{
		if( ob.volume == volume)
			return true;
		else
			return false;
	}
}

class PassOb 
{
	public static void main(String[] args) 
	{
		Block ob1 = new Block(10, 2, 5);
		Block ob2 = new Block(10, 2, 5);
		Block ob3 = new Block(4, 5, 5);
		
	System.out.println("ob1 same dimensions as ob2: " + ob1.sameBlock(ob2));
	
	System.out.println("ob1 same dimensions as ob3: " + ob1.sameBlock(ob3));
	
	System.out.println("ob1 same volume as ob3: " +	ob1.sameVolume(ob3));
	}
}	
```

```
ob1 same dimensions as ob2: true
ob1 same dimensions as ob3: false
ob1 same volume as ob3: true
```

___

#### How Arguments are passed

the effects of passing an object will be different from those experienced when passing non-object arguments.

the two
ways in which an argument can be passed to a subroutine.
The first way is call-by-value. This approach copies the value of an argument into the formal
parameter of the subroutine. Therefore, changes made to the parameter of the subroutine have
no effect on the argument in the call. The second way an argument can be passed is call-by-
reference. In this approach, a reference to an argument (not the value of the argument) is passed
to the parameter. Inside the subroutine, this reference is used to access the actual argument
specified in the call. This means that changes made to the parameter will affect the argument used
to call the subroutine.

When you pass a primitive type, such as int or double, to a method, it is passed by value.

When you pass an object to a method, objects are implicitly passed by reference.

when you create a variable of a class
type, you are creating a reference to an object. It is the reference, not the object itself, that
is actually passed to the method. As a result, when you pass this reference to a method, the
parameter that receives it will refer to the same object as that referred to by the argument.

___

To pass primitive types by reference, Java defines a set of classes that wrap the primitive types in objects.
These are Double, Float, Byte, Short, Integer, Long, and Character. In addition to
allowing a primitive type to be passed by reference, these wrapper classes define several
methods that enable you to manipulate their values.


___

#### Returning Objects

A method can return any type of data, including class types.

```java
class ErrorMsg 
{
	String[] msgs = {
		"Output Error",
		"Input Error",
		"Disk Full",
		"Index Out-Of-Bounds"
		};
	
	String getErrorMsg(int i)
	{
		if(i>= 0 & i<msgs.length)
			return msgs[i];
		else
			return "Invalid Error Code";
	} 
}

class ErrMsg
{
	public static void main(String[] args)
	{
		ErrorMsg err = new ErrorMsg();
		
		System.out.println(err.getErrorMsg(2));
		System.out.println(err.getErrorMsg(19));
	}
}
```

```
Disk Full
Invalid Error Code
```

___

Returning Created Objects
```java
// Return a programmer-defined object.
class Err 
{
	String msg; // error message
	int severity; // code indicating severity of error
	
	Err(String m, int s) 
	{
		msg = m;
		severity = s;
	}
}

class ErrorInfo 
{
	String[] msgs = 
	{
		"Output Error",
		"Input Error",
		"Disk Full",
		"Index Out-Of-Bounds"
	};	
	int[] howBad = { 3, 3, 2, 4 };
	
	Err getErrorInfo(int i) //Return an object of type Err.
	{
		if(i >= 0 & i < msgs.length)
			return new Err(msgs[i], howBad[i]);
		else
			return new Err("Invalid Error Code", 0);
	}
}

class ErrInfo 
{
	public static void main(String[] args) 
	{
		ErrorInfo err = new ErrorInfo();
		Err e;
		e = err.getErrorInfo(2);
		System.out.println(e.msg + " severity: " + e.severity);
	
		e = err.getErrorInfo(19);
		System.out.println(e.msg + " severity: " + e.severity);
	}
}
```

```
Disk Full severity: 2
Invalid Error Code severity: 0
```


Each time getErrorInfo( ) is invoked, a new Err object is created, and a reference to it is
returned to the calling routine. This object is then used within main( ) to display the error
message and severity code.

___



