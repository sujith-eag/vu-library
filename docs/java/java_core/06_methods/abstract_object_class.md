
___

#### Using Abstract Classes



____

#### Object Class

Java defines one special class called Object that is an implicit superclass of all other classes.
In other words, all other classes are subclasses of Object. This means that a reference variable
of type Object can refer to an object of any other class.

Object defines the following methods, which means that they are available in every object:

```
Object clone( )  - Creates a new object that is the same as the object being cloned.


boolean equals(Object object) - Determines whether one object is equal to another.


void finalize( )  - Called before an unused object is recycled. (Deprecated by JDK 9.)


int hashCode( ) - Returns the hash code associated with the invoking object.


Class<?> getClass( ) - Obtains the class of an object at run time.


void notify( ) - Resumes execution of a thread waiting on the invoking object.


void notifyAll( ) - Resumes execution of all threads waiting on the invoking object.


String toString( ) - Returns a string that describes the object.


void wait( ) 
void wait(long milliseconds)
void wait(long milliseconds, int nanoseconds)

Waits on another thread of execution.
```

The methods getClass( ), notify( ), notifyAll( ), and wait( ) are declared as final. You can override the others.

equals( ) and toString( ). The equals( ) method compares two objects. It returns true if the objects are equal, and false otherwise.

The toString( ) method returns a string that contains a description of the object on which it is called. Also, this method is automatically called when an object is output using println( ).

____

