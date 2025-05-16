
# Method Overriding

In a class hierarchy, when a method in a subclass has the same return type and **signature** as a method in its superclass, then the method in the subclass is said to override the method in the superclass. 

When an overridden method is called from within a subclass, it will always refer to the version of that method defined by the subclass. The version of the method defined by the superclass will be hidden.

```java
// Method overriding.

class A 
{
	int i, j;
	A(int a, int b) 
	{
		i = a;
		j = b;
	}
	// display i and j
	void show() 
	{
		System.out.println("i and j: " + i + " " + j);
	}
}

class B extends A 
{
	int k;
	
	B(int a, int b, int c) 
	{
		super(a, b);
		k = c;
	}
	// display k – this overrides show() in A
	void show() 
	{
		System.out.println("k: " + k);
	}
}

class Override
{
	public static void main(String[] args) 
	{
		B subOb = new B(1, 2, 3);
		subOb.show(); // this calls show() in B
	}
}
```

```
k: 3
```

___

### Overridden member access through super

To access the superclass version of an overridden method using super.

```java
class B extends A 
{
	int k;
	
	B(int a, int b, int c) 
	{
		super(a, b);
		k = c;
	}
	
	void show() 
	{
		super.show(); // calls A's Show
		System.out.println("k: " + k);
	}
}
```

```
i and j: 1 2
k: 3
```

>[!note]
>Method overriding occurs only when the signatures of the two methods are identical. If they are not, then the two methods are simply overloaded.


## Polymorphism in Overridden methods

Method overriding forms the basis for one of Java’s most powerful concepts: dynamic method dispatch. 

**Dynamic method dispatch** is the mechanism by which a call to an overridden method is resolved at run time rather than compile time. Dynamic method dispatch is important because this is how Java implements run-time polymorphism.

When an overridden method is called through a superclass reference, Java determines which version of that method to execute based upon the type of the object being referred to at the time the call occurs. Thus, this determination is made at run time. 

When different types of objects are referred to, different versions of an overridden method will be called. In other words, it is the type of the object being referred to (not the type of the reference variable) that determines which
version of an overridden method will be executed. 

If a superclass contains a method that is overridden by a subclass, then when different types of objects are referred to through a superclass reference variable, different versions of the method are executed.

```java
// Demonstrate dynamic method dispatch.
class Sup 
{
	void who() 
	{
		System.out.println("who() in Sup");
	}
}

class Sub1 extends Sup 
{
	void who() 
	{
		System.out.println("who() in Sub1");
	}
}
class Sub2 extends Sup 
{
	void who() 
	{
		System.out.println("who() in Sub2");
	}
}

class DynDispDemo 
{
	public static void main(String[] args) 
	{
		Sup superOb = new Sup();
		Sub1 subOb1 = new Sub1();
		Sub2 subOb2 = new Sub2();
		
		Sup supRef;
		
		supRef = superOb;
		supRef.who();
		
		supRef = subOb1;
		supRef.who();
		
		supRef = subOb2;
		supRef.who();
	}
}
```

```
who() in Sup
who() in Sub1
who() in Sub2
```

Version of `who()` executed is determined by the type of object being referred to at the time of the call, not by the class type of `supRef`.

___

Readers familiar with C++ will recognize that overridden methods in Java are equivalent in purpose and similar in operation to virtual functions in C++.


## Using 'final'

`final` keyword can be used to prevent a method from being overridden or a class from being inherited.

### Preventing method override

Methods declared as final cannot be overridden. If you attempt to do so, a compile-time error will result.

```java
class A 
{
	final void meth() 
	{
		System.out.println("This is a final method.");
	}
}

class B extends A 
{
	void meth() 
	{ // ERROR! Can't override.
		System.out.println("Illegal!");
	}
}
```

### Preventing class inheritance

Declaring a class as final implicitly declares all of its methods as final, too. 

```java
final class A {
	// ...
}

// The following class is illegal.
class B extends A { // ERROR! Can't subclass A
	// ...
}
```

>[!important]
>It is illegal to declare a class as both `abstract` and `final` since an abstract class is incomplete by itself and relies upon its subclass to provide complete implementations.

Beginning with JDK 17, the ability to seal a class was added to Java. Sealing offers fine-grained control over inheritance.

____

### final with Data members

final can also be applied to member variables to create what amounts to named constants. If you precede an instance variable’s name with final, its value cannot be changed throughout the lifetime of your program.

>[!note]
>Making a final member variable static lets you refer to the constant through its class name rather than through an object.

Declaring a parameter final prevents it from being changed within the method. 

Declaring a local variable final prevents it from being assigned a value more than once.

___

