#### Interfaces

In object-oriented programming, it is sometimes helpful to define what a class must do but not how it will do it.

An abstract method defines the signature for a method but provides no implementation. A subclass must provide its own implementation of each abstract method defined by its superclass. 
Thus, an abstract method specifies the interface to the method but not the implementation.

In Java, you can
fully separate a class’ interface from its implementation by using the keyword interface.


An interface is syntactically similar to an abstract class, in that you can specify one or
more methods that have no body. Those methods must be implemented by a class in order for
their actions to be defined. Thus, an interface specifies what must be done, but not how to do
it. Once an interface is defined, any number of classes can implement it. Also, one class can
implement any number of interfaces.


To implement an interface, a class must provide bodies (implementations) for the methods
described by the interface. Each class is free to determine the details of its own implementation.
Two classes might implement the same interface in different ways, but each class still
supports the same set of methods. Thus, code that has knowledge of the interface can use objects
of either class since the interface to those objects is the same. By providing the interface keyword,
Java allows you to fully utilize the “one interface, multiple methods” aspect of polymorphism.


Today, it is possible to add a default implementationto an interface method. Furthermore, static interface methods are now supported, and beginning
with JDK 9, an interface can also include private methods. Thus, it is now possible for interface
to specify some behavior.

as a general rule, you
will still often create and use interfaces in which no use is made of these new features.

a simplified general form of a traditional interface:
```java
access interface name {
	ret-type method-name1(param-list);
	ret-type method-name2(param-list);
	type var1 = value;
	type var2 = value;
	// ...
	ret-type method-nameN(param-list);
	type varN = value;
}
```

```java
public interface Series {
int getNext(); // return next number in series
void reset(); // restart
void setStart(int x); // set starting value
}
```
This interface is declared public so that it can be implemented by code in any package.


#### Implementing Interfaces

Once an interface has been defined, one or more classes can implement that interface.
To implement an interface, include the implements clause in a class definition and then
create the methods required by the interface. The general form of a class that includes the
implements clause looks like this:
```
class classname extends superclass implements interface {
	// class-body
}
```

The extends is optional

The methods that implement an interface must be declared public. Also, the type signature
of the implementing method must match exactly the type signature specified in the interface
definition.

Whenever you implement a method defined by an interface, it must
be implemented as public because all members of an interface are implicitly public.

It is both permissible and common for classes that implement interfaces to define
additional members of their own.


If a class includes an interface but does not fully implement the methods
defined by that interface, then that class must be declared abstract. No objects of such
a class can be created, but it can be used as an abstract superclass, allowing subclasses to
provide the complete implementation.




#### Using Interface References



#### Variables in Interfaces

As mentioned, variables can be declared in an interface, but they are implicitly public, static, and
final. At first glance, you might think that there would be very limited use for such variables, but
the opposite is true. Large programs typically make use of several constant values that describe
such things as array size, various limits, special values, and the like. Since a large program is
typically held in a number of separate source files, there needs to be a convenient way to make
these constants available to each file.

To define a set of shared constants, create an interface that contains only these constants,
without any methods. Each file that needs access to the constants simply “implements” the
interface. This brings the constants into view.

```java
// An interface that contains constants.
interface IConst 
{
	int MIN = 0;
	int MAX = 10;
	String ERRORMSG = "Boundary Error";
}
```

```java
class IConstD implements IConst 
{
	public static void main(String[] args) 
	{
		int[] nums = new int[MAX];
		for(int i=MIN; i < 11; i++) 
		{
			if(i >= MAX) 
				System.out.println(ERRORMSG);
			else 
			{
				nums[i] = i;
				System.out.print(nums[i] + " ");
			}
		}
	}
}
```

The technique of using an interface to define shared constants is controversial. It is described here for completeness.


#### Interfaces can be Extended

One interface can inherit another by use of the keyword extends. The syntax is the same as for
inheriting classes. When a class implements an interface that inherits another interface, it must
provide implementations for all methods required by the interface inheritance chain.

any class that implements an interface
must implement all methods required by that interface, including any that are inherited from
other interfaces.


#### Default Interface Methods

A default method
lets you define a default implementation for an interface method. In other words, by use of
a default method, it is possible for an interface method to provide a body, rather than being
abstract. During its development, the default method was also referred to as an extension
method, and you will likely see both terms used.

A primary motivation for the default method was to provide a means by which interfaces
could be expanded without breaking existing code. Recall that there must be implementations
for all methods defined by an interface. In the past, if a new method were added to a popular,
widely used interface, then the addition of that method would break existing code because
no implementation would be found for that method. The default method solves this problem
by supplying an implementation that will be used if no other implementation is explicitly
provided. Thus, the addition of a default method will not cause preexisting code to break.
Another motivation for the default method was the desire to specify methods in an interface
that are, essentially, optional, depending on how the interface is used.

It is important to point out that the addition of default methods does not change a key
aspect of interface: an interface still cannot have instance variables. Thus, the defining
difference between an interface and a class is that a class can maintain state information, but
an interface cannot. Furthermore, it is still not possible to create an instance of an interface
by itself. It must be implemented by a class.


As a general rule, default methods constitute a special-purpose feature.
Interfaces that you create will still be used primarily to specify what and not how. However,
the inclusion of the default method gives you added flexibility.



#### Default Method Fundamentals

An interface default method is defined similar to the way a method is defined by a class. The
primary difference is that the declaration is preceded by the keyword default. For example,
consider this simple interface:
```java
public interface MyIF 
{
	// This is a "normal" interface method declaration.
	// It does NOT define a default implementation.
	int getUserID();
	
// This is a default method with default implementation.
	default int getAdminID() {
	return 1;
	}
}
```

#### Multiple Inheritance issues

default methods do offer a bit of what one would normally
associate with the concept of multiple inheritance. For example, you might have a class that
implements two interfaces. If each of these interfaces provides default methods, then some
behavior is inherited from both. Thus, to a limited extent, default methods do support multiple
inheritance of behavior.

in such a situation, it is possible that a name
conflict will occur.

First, in all cases a class implementation takes priority over an interface default
implementation. The class method overrides the default method.

Second, in cases in which a class inherits two interfaces that both have the same default
method, if the class does not override that method, then an error will result.

In cases in which one interface inherits another, with both defining a common default
method, the inheriting interface’s version of the method takes precedence.

#### Use static methods in an interface

JDK 8 added another new capability to interface: the ability to define one or more static
methods. Like static methods in a class, a static method defined by an interface can be called
independently of any object. Thus, no implementation of the interface is necessary, and no
instance of the interface is required in order to call a static method. Instead, a static method is
called by specifying the interface name, followed by a period, followed by the method name.
Here is the general form:
`InterfaceName.staticMethodName`

```java
public interface MyIF 
{
	// It does NOT define a default implementation.
	int getUserID();

	// a default implementation.
	default int getAdminID() 
	{
		return 1;
	}
	
	// This is a static interface method.
	static int getUniversalID() 
	{
		return 0;
	}
}
```

`int uID = MyIF.getUniversalID();`

no implementation or instance of MyIF is required to call getUniversalID( ) because it is static.

Static interface methods are not inherited by either an implementing class or a subinterface.



#### Private Interface Methods

interface can include a private method. A private interface method
can be called only by a default method or another private method defined by the same
interface. Because a private interface method is specified private, it cannot be used by code
outside the interface in which it is defined. This restriction includes subinterfaces because a
private interface method is not inherited by a subinterface.


The key benefit of a private interface method is that it lets two or more default methods
use a common piece of code, thus avoiding code duplication.


```java
public interface Series 
{
	int getNext(); 
	// return next number in series

	// Return an array that contains the next n elements
	default int[] getNextArray(int n) 
	{
		return getArray(n);
	}

	// Return an array that contains the next n elements
	default int[] skipAndGetNextArray(int skip, int n) 
	{
		// Skip the specified number of elements.
		getArray(skip);
		return getArray(n);
	}

	// A private method that returns an array containing next n elements.
	private int[] getArray(int n) 
	{
		int[] vals = new int[n];
		for(int i=0; i < n; i++) vals[i] = getNext();
		return vals;
	}


	void reset(); // restart
	void setStart(int x); // set starting value
}
```


Notice that both getNextArray( ) and skipAndGetNextArray( ) use the private getArray( )
method to obtain the array to return. This prevents both methods from having to duplicate the
same code sequence. Keep in mind that because getArray( ) is private, it cannot be called by
code outside Series. Thus, its use is limited to the default methods inside Series.
Although the private interface method is a feature that you will seldom need, in those cases
in which you do need it, you will find it quite useful.


____

