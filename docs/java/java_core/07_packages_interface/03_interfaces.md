
# Interfaces

An interface defines a set of methods that will be implemented by a class. It specifies what a class should do, but not how it does it.

An abstract method defines a method signature without providing an implementation. A subclass must provide its own implementation of each abstract method defined by its superclass.

In Java, you can fully separate a class’s interface from its implementation by using the `interface` keyword.

Once an interface is defined, any number of classes can implement it. Furthermore, a single class can implement multiple interfaces.

To implement an interface, a class must provide method bodies (implementations) for all methods described by the interface. Each implementing class is free to define the specific behavior of those methods.

Two classes might implement the same interface in different ways, yet both will support the same set of methods. Therefore, code that references the interface can use objects of either class, enabling polymorphism through "one interface, multiple methods."

Modern Java allows default implementations in interfaces. Additionally, static methods are supported, and since JDK 9, interfaces can also include private methods. These additions enable interfaces to define some behavior. However, it is still common to use interfaces without leveraging these features.

#### General Form of a Traditional Interface

```java
access interface name {
	ret-type methodName1(param-list);
	ret-type methodName2(param-list);
	type var1 = value;
	type var2 = value;
	// ...
	ret-type methodNameN(param-list);
	type varN = value;
}
```

Example:

```java
public interface Series {
	int getNext(); // Return next number in series
	void reset();  // Restart series
	void setStart(int x); // Set starting value
}
```

This interface is declared `public` so it can be implemented by classes in any package.

## Implementing Interfaces

To implement an interface, use the `implements` clause in a class definition, and then define all methods required by the interface.

#### General Form of a Class That Implements an Interface

```java
class ClassName extends Superclass implements InterfaceName {
	// class body
}
```

The `extends` clause is optional.

The methods that implement an interface must be declared `public`. The type signature of each method must exactly match the one specified in the interface.

All methods in an interface are implicitly `public`. Therefore, any class implementing the interface must define them as `public`.

It is both permissible and common for classes that implement interfaces to define additional members.

If a class declares that it implements an interface but does not provide implementations for all of the interface’s methods, it must be declared `abstract`. Such a class cannot be instantiated but can be used as a superclass for a subclass that completes the implementation.


## Using Interface References


### Variables in Interfaces

Variables can be declared in an interface. These variables are implicitly `public`, `static`, and `final`.

While this might initially seem of limited use, it is actually quite common. Large programs often rely on constant values for array sizes, limits, special values, etc. Since large programs span multiple source files, it is useful to have a centralized way of defining and sharing constants.

To define shared constants, you can create an interface that contains only constants (no methods). Any class or file that needs access to these constants can simply implement the interface, thereby bringing the constants into scope.

```java
// An interface that contains constants.
interface IConst {
	int MIN = 0;
	int MAX = 10;
	String ERRORMSG = "Boundary Error";
}
```

```java
class IConstD implements IConst {
	public static void main(String[] args) {
		int[] nums = new int[MAX];
		for (int i = MIN; i < 11; i++) {
			if (i >= MAX)
				System.out.println(ERRORMSG);
			else {
				nums[i] = i;
				System.out.print(nums[i] + " ");
			}
		}
	}
}
```

>[!note] 
>The technique of using an interface to define shared constants is considered controversial. It is presented here for completeness.


## Interfaces Can Be Extended

One interface can inherit another using the `extends` keyword. The syntax is the same as that used for class inheritance. When a class implements an interface that extends another interface, it must provide implementations for all methods defined throughout the entire interface inheritance chain.

Any class that implements an interface must implement all methods required by that interface, including any methods inherited from other interfaces.

---

### Default Interface Methods

A _default method_ allows you to define a default implementation for an interface method. That is, instead of being abstract, the method can include a body. During its development, the default method was also referred to as an _extension method_, and you may still encounter both terms.

The primary motivation for default methods was to allow interfaces to evolve without breaking existing code. Previously, if a new method was added to a widely used interface, existing implementations would break because they did not provide a definition for the new method. Default methods solve this problem by supplying a predefined implementation that is used if no other one is provided. This ensures backward compatibility.

Another motivation was to support optional methods—methods that may or may not be overridden depending on the use case.

It's important to note that the introduction of default methods does not change a key characteristic of interfaces: they cannot have instance variables. This remains a defining difference between classes and interfaces. A class can maintain state, but an interface cannot. Also, it is still not possible to instantiate an interface directly; it must be implemented by a class.

As a general rule, default methods are considered a special-purpose feature. Most interfaces are still used to define _what_ should be done, not _how_. However, default methods provide additional flexibility when needed.

---

### Default Method Fundamentals

A default method in an interface is declared similarly to a class method, but it is preceded by the keyword `default`. For example:

```java
public interface MyIF {
	// A standard interface method declaration (no default implementation)
	int getUserID();
	
	// A default method with a default implementation
	default int getAdminID() {
		return 1;
	}
}
```

---

### Multiple Inheritance Issues

Default methods introduce a limited form of multiple inheritance. A class may implement multiple interfaces, each of which may define default methods. This can lead to inherited behavior from more than one source.

However, name conflicts may occur when:

1. A class implements two interfaces that define the same default method.
    
2. A class inherits from an interface that extends another, and both define a method with the same signature.
    

Java handles such conflicts in the following ways:

- If a class provides its own implementation of a method, it overrides any default implementation from an interface.
    
- If a class inherits conflicting default methods from two interfaces and does not override the method, a compile-time error occurs.
    
- If an interface inherits another interface and both define a default method with the same signature, the version in the inheriting interface takes precedence.
    

---

### Static Methods in Interfaces

Starting with JDK 8, interfaces can also include static methods. A static method in an interface works similarly to a static method in a class. It can be called without an implementation or instance of the interface.

Syntax:

```java
InterfaceName.staticMethodName();
```

Example:

```java
public interface MyIF {
	// A regular method declaration
	int getUserID();

	// A default method
	default int getAdminID() {
		return 1;
	}

	// A static method
	static int getUniversalID() {
		return 0;
	}
}
```

Usage:

```java
int uID = MyIF.getUniversalID();
```

Since `getUniversalID()` is static, no object or implementation of `MyIF` is required to invoke it. Note that static methods in interfaces are _not_ inherited by implementing classes or subinterfaces.

---

### Private Interface Methods

Interfaces can also include _private methods_. A private method in an interface can only be used by other methods defined in the same interface, such as default or other private methods. It cannot be accessed by implementing classes or subinterfaces.

The primary benefit of private interface methods is code reuse. They allow two or more default methods to share logic without duplicating code.

Example:

```java
public interface Series {
	int getNext(); // Return next number in series

	// Return an array containing the next n elements
	default int[] getNextArray(int n) {
		return getArray(n);
	}

	// Return an array after skipping a certain number of elements
	default int[] skipAndGetNextArray(int skip, int n) {
		getArray(skip); // Skip the specified number
		return getArray(n);
	}

	// A private method used internally by default methods
	private int[] getArray(int n) {
		int[] vals = new int[n];
		for (int i = 0; i < n; i++) vals[i] = getNext();
		return vals;
	}

	void reset();        // Restart the series
	void setStart(int x); // Set starting value
}
```

In this example, both `getNextArray()` and `skipAndGetNextArray()` use the private `getArray()` method to avoid duplicating the same code. Since `getArray()` is private, it cannot be accessed outside the `Series` interface or by any implementing class.

Although private interface methods are not commonly used, they are quite useful in scenarios where internal logic needs to be shared among default methods.

---