#### Evolution of Java

Java was conceived by James Gosling, Patrick Naughton, Chris Warth, Ed Frank, and Mike
Sheridan at Sun Microsystems in 1991.

Original release of Java 1.0 in 1995 by Sun Microsystems, Inc.



The first major update to Java was version 1.1

The first release of Java 2 carried the version number 1.2

With Java 2, Sun repackaged the Java product as J2SE (Java 2 Platform Standard Edition), and the version numbers began to be applied to that product.

The next upgrade of Java was J2SE 1.3


The release of J2SE 5 created nothing short of a second Java revolution.
the Java Development Kit (JDK) was called JDK 5.

The next release of Java was called Java SE 6, “2” has been dropped. Official product name was Java Platform, Standard Edition 6, with the development kit being called JDK 6.  The internal, developer version number is 1.6.


Java SE 7 was the first major release of Java after Sun Microsystems was acquired by Oracle.


The next release of Java was Java SE 8, with the development kit being called JDK 8.
It has an internal version number of 1.8. Inclusion of a far-reaching new language feature: the lambda
expression.


The next release of Java was Java SE 9. The developer’s kit was called JDK 9. With the
release of JDK 9, the internal version number is also 9
Beginning with JDK 9, applets are no longer recommended for new projects. JDK 9 deprecated the entire applet API.


beginning with JDK 10, the time between releases was significantly shortened. JDK 10 was released in March 2018.


Another facet of the changes to the Java release schedule is the long-term support (LTS)
release. It is now anticipated that an LTS release will take place every three years. An LTS
release will be supported (and thus remain viable) for a period of time longer than six months.
The first LTS release was JDK 11. The second LTS release was JDK 17, for which this book
has been updated.

With the release of JDK 11, applet support has been removed.
JavaFX. This GUI framework is
no longer part of the JDK, becoming a separate open-source project instead.





## Java Fundamentals


the primary motivation was the need for a platform-independent language that could be used to create software to be embedded in various consumer electronic devices, such as toasters, microwave ovens, and remote controls. As you can probably guess, many different types of CPUs are used as controllers. 

The trouble was that (at the time) most computer languages were designed to be compiled into machine code that was targeted for a specific type of CPU.

lthough it was possible to compile a C++ program for just about any type of CPU, to do so required a full C++ compiler targeted for that CPU.

Gosling and the others worked on a portable, cross-platform language that could produce code that
would run on a variety of CPUs under differing environments. This effort ultimately led to the
creation of Java.

with the emergence of the Web,
Java was propelled to the forefront of computer language design, because the Web, too,
demanded portable programs (platform-independent).



From C, Java inherits its syntax. Java’s object model is adapted from C++.


Java is not simply the “Internet version of C++.” Java has significant practical and philosophical differences from C++. Furthermore, Java is not an enhanced version
of C++. For example, it is neither upwardly nor downwardly compatible with C++. Moreover,
Java was not designed to replace C++. Java was designed to solve a certain set of problems.


___

#### Java Applets

the applet allowed
some functionality to be moved from the server to the client. it expanded the universe
of objects that could move about freely in cyberspace.


when you read your e-mail, you are viewing
passive data. Even when you download a program, the program’s code is still only passive
data until you execute it. By contrast, the applet is a dynamic, self-executing program. Such a
program is an active agent on the client computer, yet it is delivered by the server.

JDK 9 began their phase-out process. Finally, applet support was
removed by JDK 11.

applets rely on a Java browser plug-in. 

Over the past few years support for
the Java browser plug-in has been waning. Simply put, without browser support, applets are
not viable.


one part of the answer is to use the jlink tool added by JDK 9. It
can create a complete run-time image that includes all necessary support for your program,
including the JRE. Another part of the answer is the jpackage tool. Added by JDK 16, it can
be used to create a ready-to-install application.



___
___


## Java Buzzwords

Although the fundamental
forces that necessitated the invention of Java are portability and security, other factors played
an important role in molding the final form of the language. The key considerations were
summed up by the Java design team in the following list of buzzwords.


SimpleJava has a concise, cohesive set of features that makes it easy to learn and use.

SecureJava provides a secure means of creating Internet applications.

PortableJava programs can execute in any environment for which there is a Java run-
time system.

Object-orientedJava embodies the modern object-oriented programming philosophy.

RobustJava encourages error-free programming by being strictly typed and
performing run-time checks.

MultithreadedJava provides integrated support for multithreaded programming.

Architecture-neutralJava is not tied to a specific machine or operating system architecture.

InterpretedJava supports cross-platform code through the use of Java bytecode.

High performanceThe Java bytecode is highly optimized for speed of execution.

DistributedJava was designed with the distributed environment of the Internet in mind.

DynamicJava programs carry with them substantial amounts of run-time type
information that is used to verify and resolve access to objects at run time.

___

#### Security

a program that downloads and executes on the
client computer must be prevented from doing harm. It must also be able to run in a variety of
different environments and under different operating systems.

Java achieved this protection by enabling you to confine an application to the Java
execution environment and prevent it from accessing other parts of the computer.

___

#### Portability


a mechanism that allows the same
application to be downloaded and executed by a wide variety of CPUs, operating systems, and
browsers is required.
The same application code must work in all computers.

Therefore, some
means of generating portable code was needed.

The key that allowed Java to address both the security and the portability problems is that the output of a Java compiler is not executable code. Rather, it is bytecode.

___

### The Bytecode : Java's Magic


Bytecode is a highly optimized set of instructions designed to be executed by what is called
the Java Virtual Machine (JVM), which is part of the Java Runtime Environment (JRE). 

In essence, the original JVM was designed as an interpreter for bytecode. 

This may come as a bit of a surprise because many modern languages are designed to be compiled into CPU-specific, executable code due to performance concerns. However, the fact that a Java program is executed by the JVM helps solve the major problems associated with web-based programs.


Only the JRE (which includes the JVM) needs to be implemented for each platform. Once a JRE exists for a given system, any Java program can run on it.

Although the details of the JRE will differ from platform to platform, all JREs understand the same Java bytecode.


Java program is executed by the JVM which also helps to make it secure. Because
the JVM is in control, it manages program execution. Thus, it was possible for the JVM to create
a restricted execution environment, called the sandbox, that contains the program, preventing
unrestricted access to the machine. 

Safety is also enhanced by certain restrictions that exist in the Java language.


___

When a JIT compiler is part of the JVM,
selected portions of bytecode are compiled into executable code in real time on a piece-by-
piece demand basis. That is, a JIT compiler compiles code as it is needed during execution.

____

#### OOP

At the center of Java is object-oriented programming (OOP). The object-oriented methodology
is inseparable from Java, and all Java programs are, to at least some extent, object-oriented.


Object-oriented programming took the best ideas of structured programming and combined
them with several new concepts. The result was a different way of organizing a program. In
the most general sense, a program can be organized in one of two ways: around its code (what
is happening) or around its data (what is being affected). Using only structured programming
techniques, programs are typically organized around code. This approach can be thought of as
“code acting on data.”
Object-oriented programs work the other way around. They are organized around data,
with the key principle being “data controlling access to code.” In an object-oriented language,
you define the data and the routines that are permitted to act on that data. Thus, a data type
defines precisely what sort of operations can be applied to that data.


___

To support the principles of object-oriented programming, all OOP languages have three common traits : Encapsulation, Polymorphism and inheritance.

___

### Encapsulation

Encapsulation is a programming mechanism that binds together code and the data it
manipulates, and that keeps both safe from outside interference and misuse. In an object-
oriented language, code and data can be bound together in such a way that a self-contained
black box is created. Within the box are all necessary data and code. When code and data are
linked together in this fashion, an object is created. 


In other words, an object is the device
that supports encapsulation.

Within an object, code, data, or both may be private to that object or public. Private code or data is known to and accessible by only another part of the object. When code or data is public, other parts of your program can access it. The public parts of an object are used to provide a controlled interface to the private elements of the object.


Java’s basic unit of encapsulation is the class.

A class defines the
form of an object. It specifies both the data and the code that will operate on that data. Java
uses a class specification to construct objects. Objects are instances of a class. Thus, a class is
essentially a set of plans that specify how to build an object.


### Polymorphism

Polymorphism (from Greek, meaning “many forms”) is the quality that allows one interface to
access a general class of actions. The specific action is determined by the exact nature of the
situation.

once you know how to operate
the steering wheel, you can drive any type of car.

the concept of polymorphism is often expressed by the phrase “one interface,
multiple methods.” This means that it is possible to design a generic interface to a group of
related activities. Polymorphism helps reduce complexity by allowing the same interface to be used to specify a general class of action.


a program that requires three different types of stacks.
One stack is used for integer values, one for floating-point values, and one for characters. In this
case, the algorithm that implements each stack is the same, even though the data being stored
differs. 

because of polymorphism, in Java you can create one general set of stack routines that works for all three specific situations. 

This way, once you know how to use one stack, you can use them all.


#### Inheritance

Inheritance is the process by which one object can acquire the properties of another object.

it supports the concept of hierarchical classification.

Using inheritance, an object need only define those qualities that make it
unique within its class. It can inherit its general attributes from its parent. Thus, it is the
inheritance mechanism that makes it possible for one object to be a specific instance of a
more general case.

____

