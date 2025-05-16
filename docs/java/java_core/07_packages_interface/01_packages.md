
# Packages

Packages are groups of related classes which help organize code and provide another layer of encapsulation also play an important role with modules. 

A package serves two purposes. 

* First, it provides a mechanism by which related pieces of a program can be organized as a unit. Classes defined within a package must be accessed through their package name. Thus, a package provides a way to name a collection of classes. 

* Second, a package participates in Java’s access control mechanism. Classes defined within a package can be made private to that package and not accessible by code outside the package. Thus, the package provides a means by which classes can be encapsulated.

In Java, no two classes can use the same name from the same namespace. Thus, within a given namespace, each class name must be unique. 

Name collisions must be avoided with code created by other programmers working on the same project, and with Java’s library. 

The solution to these problems is the package because it gives a way to partition the namespace. When a class
is defined within a package, the name of that package is attached to each class, thus avoiding name collisions with other classes that have the same name, but are in other packages.

Since a package usually contains related classes, Java defines special access rights to code within a package. In a package, you can define code that is accessible by other code within the same package but not by code outside the package. This enables you to create self-contained
groups of related classes that keep their operation private.


## Defining a Package

All classes in Java belong to some package. When no package statement is specified, the default package is used.The default package has no name, which makes the default package transparent.

To create a package, put a package command at the top of a Java source file. The classes declared within that file will then belong to the specified package. 

Since a package defines a namespace, the names of the classes in the file become part of that package’s namespace.

___

`package pkg;` Here, `pkg` is the name of the package.

`package mypack;`

Typically, Java uses the file system to manage packages, with each package stored in its own directory. The `.class` files for any classes you declare to be part of `mypack` must be stored in a directory called `mypack`.

Like the rest of Java, package names are case sensitive. This means that the directory in which a package is stored must be precisely the same as the package name.

* Lowercase is often used for package names. 
* More than one file can include the same package statement. The package statement simply specifies to which package the classes defined in a file belong. 
* It does not exclude other classes in other files from being part of that same package. Most real-world packages are spread across many files.


You can create a multilevel hierarchy of packages. To do so, simply separate each package name from the one above it by use of a period. 

`package pack1.pack2.pack3...packN;`

you must create directories that support the package hierarchy that you create.

For example,
`package alpha.beta.gamma;` must be stored in `.../alpha/beta/gamma`, where `...` specifies the path to the specified directories.

___

### Finding Packages and CLASSPATH


How does the Java run-time system know where to look for packages that you create? The answer has three parts. 

First, by default, the Java run-time system uses the current working directory as its starting point. Thus, if your package is in a sub-directory of the current directory, it will be found.

Second, you can specify a directory path or paths by setting the `CLASSPATH` environmental variable. 

Third, you can use the `-classpath` option with java and `javac` to specify the path to your classes.


>[!note]
>Beginning with JDK 9, a package can be part of a module, and thus found on the module path.


The easiest is to simply create the package directories below your current development directory, put the `.class` files into the appropriate directories, and then execute the programs from the development directory.

To avoid problems, it is best to keep all `.java` and `.class` files associated with a package in that package’s directory. Also, compile each file from the directory above
the package directory.

___

Call a file `BookDemo.java` and put it in a directory called `bookpack`.

Compile the file by specifying `javac bookpack/BookDemo.java` from the directory directly above `bookpack`. 

`BookDemo` and `Book` are now part of the package `bookpack`. This means that `BookDemo` cannot be executed by itself. That is, you cannot use this command line:
`java BookDemo`

Instead, `BookDemo` must be qualified with its package name : `java bookpack.BookDemo`


## Packages and Member Access

The visibility of an element is affected by its access specification `private, public, protected, or default` and the package in which it resides. 

Thus, as it relates to classes and packages, the visibility of an element is determined by its visibility within a class and its visibility within a package. 

This multilayered approach to access control supports a rich assortment of access privileges.

* A private member is accessible only to the other members of its class. A private member is unaffected by its membership in a package. It is only visible within same class. (one visibility) 

* If a member of a class has no explicit access modifier, then it is visible within its package but not outside its package. Therefore, you will use the default access specification for elements that you want to keep private to a package but public within that package.
* Visible within same class, same package by subclass and same package by non-sub class (three visibility)

* A member specified as protected is accessible within its package and to subclasses in other packages.  Visible within same class, same package by subclass and same package by non-sub class and also within different packages by subclass (four visibility) 
* It is not accessible from different package which is not subclass of protected.

* Members explicitly declared public are the most visible, and can be accessed from different classes and different packages by non-subclass also. (five visibility) 


___

### Understanding Protected Members

.

.

.

.


## Importing Packages

When you use a class from another package, you can fully qualify the name of the class with the name of its package, such an approach could easily become tiresome and awkward, especially if the classes you are qualifying are deeply nested in a package hierarchy.

Using `import` you can bring one or more members of a package into view. This allows you to use those members
directly, without explicit package qualification.

`import pkg.classname;`

pkg is the name of the package, which can include its full path, and classname is the name of the class being imported.

If you want to import the entire contents of a package, use
an asterisk `(*)` for the class name.

`import mypack.MyClass` MyClass class is imported from mypack.

`import mypack.*;` All of the classes in mypack are imported.


## Java's Class Library in packages

Java defines a large number of standard classes that are available to all programs. This class library is often referred to as the Java API (Application Programming Interface). 

The Java API is stored in packages. At the top of the package hierarchy is `java`. Descending from `java` are several sub-packages.

* `java.lang` Contains a large number of general-purpose classes
* `java.io` Contains I/O classes
* `java.net` Contains classes that support networking
* `java.util`  Contains a large number of utility classes, including the Collections Framework
* `java.awt`  Contains classes that support the Abstract Window Toolkit

`java.lang` contains, among several others, the `System` class, used when performing output using `println( )`.

The `java.lang` package is unique because it is imported automatically into every Java program. This is why you did not have to import `java.lang` in the preceding sample
programs. 

However, you must explicitly import the other packages.

____


