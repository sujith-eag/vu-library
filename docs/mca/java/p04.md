# Program 4:

Create a Java program that :

- Use of **packages and interfaces**
    
- **Access modifiers** (`private`, `default`, `protected`, `public`)
    
- **Importing packages**
    
- **Interface implementation**, including **default methods**

## Directory Structure

```
/p1
    Protection.java
    Derived.java
    SamePackage.java
    Demo.java

/p2
    Protection2.java
    OtherPackage.java
    Demo.java
```

## `p1/Protection.java`

```java
package p1;

public class Protection {
    int n = 1;                // default access
    private int n_pri = 2;    // private access
    protected int n_pro = 3;  // protected access
    public int n_pub = 4;     // public access

    public Protection() {
        System.out.println("Inside Protection Constructor");
        System.out.println("Value of n: " + n);
        System.out.println("Value of n_pri: " + n_pri);
        System.out.println("Value of n_pro: " + n_pro);
        System.out.println("Value of n_pub: " + n_pub);
    }
}
```

## `p1/Derived.java`

```java
package p1;

class Derived extends Protection {
    Derived() {
        System.out.println("Inside Derived Constructor");
        System.out.println("Value of n: " + n);
        // System.out.println("Value of n_pri: " + n_pri); // private - not accessible
        System.out.println("Value of n_pro: " + n_pro);
        System.out.println("Value of n_pub: " + n_pub);
    }
}
```


## `p1/SamePackage.java`

```java
package p1;

class SamePackage {
    Protection p = new Protection();

    SamePackage() {
        System.out.println("Inside SamePackage Constructor");
        System.out.println("Value of n: " + p.n);
        // System.out.println("Value of n_pri: " + p.n_pri); // private - not accessible
        System.out.println("Value of n_pro: " + p.n_pro);
        System.out.println("Value of n_pub: " + p.n_pub);
    }
}
```

## `p1/Demo.java`

```java
package p1;

public class Demo {
    public static void main(String[] args) {
        Protection ob1 = new Protection();
        Derived ob2 = new Derived();
        SamePackage ob3 = new SamePackage();
    }
}
```

## `p2/Protection2.java`

```java
package p2;

class Protection2 extends p1.Protection {
    Protection2() {
        System.out.println("Inside Protection2 Constructor");
        // System.out.println("Value of n: " + n);        // default - not accessible in another package
        // System.out.println("Value of n_pri: " + n_pri); // private - not accessible
        System.out.println("Value of n_pro: " + n_pro);
        System.out.println("Value of n_pub: " + n_pub);
    }
}
```



## `p2/OtherPackage.java`

```java
package p2;

class OtherPackage {
    OtherPackage() {
        p1.Protection pro = new p1.Protection();
        System.out.println("Inside OtherPackage Constructor");
        // System.out.println("Value of n: " + pro.n);        // default - not accessible
        // System.out.println("Value of n_pri: " + pro.n_pri); // private - not accessible
        // System.out.println("Value of n_pro: " + pro.n_pro); // protected - not accessible without inheritance
        System.out.println("Value of n_pub: " + pro.n_pub);
    }
}
```

## `p2/Demo.java`

```java
package p2;

class Demo {
    public static void main(String[] args) {
        Protection2 obj1 = new Protection2();
        OtherPackage obj2 = new OtherPackage();
    }
}
```


## Access Modifier Summary

|Modifier|Same Class|Same Package|Subclass (other package)|Other Package|
|---|---|---|---|---|
|`private`|✅|❌|❌|❌|
|_default_|✅|✅|❌|❌|
|`protected`|✅|✅|✅ (via inheritance)|❌|
|`public`|✅|✅|✅|✅|

## Interface with Default Methods

To meet the interface requirement:

### `MyInterface.java`

```java
package p1;

public interface MyInterface {
    void abstractMethod();

    default void defaultMethod() {
        System.out.println("Inside default method of interface.");
    }
}
```

### Modified `Derived.java` (to implement interface)

```java
package p1;

class Derived extends Protection implements MyInterface {
    Derived() {
        System.out.println("Inside Derived Constructor");
        System.out.println("Value of n: " + n);
        System.out.println("Value of n_pro: " + n_pro);
        System.out.println("Value of n_pub: " + n_pub);
    }

    public void abstractMethod() {
        System.out.println("Abstract method implemented in Derived.");
    }
}
```

