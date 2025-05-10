
#### Throwing an Exception

The preceding examples have been catching exceptions generated automatically by the JVM.
However, it is possible to manually throw an exception by using the throw statement. Its general
form is shown here:
`throw exceptOb;`

Here, exceptOb must be an object of an exception class derived from Throwable.

```java
// Manually throw an exception.

class ThrowDemo 
{
	public static void main(String[] args) 
	{
		try 
		{
			System.out.println("Before throw.");
			throw new ArithmeticException();
		}
		catch (ArithmeticException exc) 
		{
			// catch the exception
			System.out.println("Exception caught.");
		}
		System.out.println("After try/catch block.");
	}
}
```

```
Before throw.
Exception caught.
After try/catch block.
```

ArithmeticException was created using new in the throw statement.
Remember, throw throws an object. Thus, you must create an object for it to throw. That is,
you can’t just throw a type.


___

#### Rethrowing an Exception

An exception caught by one catch statement can be rethrown so that it can be caught by an
outer catch. The most likely reason for rethrowing this way is to allow multiple handlers
access to the exception. For example, perhaps one exception handler manages one aspect of
an exception, and a second handler copes with another aspect. Remember, when you rethrow
an exception, it will not be recaught by the same catch statement. It will propagate to the next
catch statement.


```java
// Handle error gracefully and continue.
class Rethrow 
{
	public static void genException() 
	{
		int[] numer = { 4, 8, 16, 32, 64, 128, 256, 512 };  // longer than denum
		int[] denum = { 2, 0, 4, 4, 0, 8 };
		
		for(int i=0; i<numer.length; i++) 
		{
			try 
			{
				System.out.println(numer[i] + " / " +
				denom[i] + " is " +
				numer[i]/denom[i]);
			}
			catch(ArithmeticException exc)
			{
				Syste.out.println("Can't divide by Zero!");
			}
			catch (ArrayIndexOutOfBoundsException exc)
			{ // catch subclass
				System.out.println("No matching element found.");
				
				throw exc;
				// rethrow exception
			}
		}
	}
}


class RethrowDemo
{
	public static void main(String[] args)
	{
		try
		{
			Rethrow.genException();
			// calling class
		}
		catch(ArrayIndexOutOfBoundsException exc)
		{
			System.out.println("Fatal error - " + "program terminated.");
		}
	}
}
```


divide-by-zero errors are handled locally, by genException( ), but an
array boundary error is rethrown. In this case, it is caught by main( ).

___


#### looking at Throwable

a catch clause specifies
an exception type and a parameter. The parameter receives the exception object. Since all
exceptions are subclasses of Throwable, all exceptions support the methods defined by
Throwable.

Of the methods defined by Throwable, two of the most interesting are printStackTrace( )
and toString( ). You can display the standard error message plus a record of the method calls
that lead up to the exception by calling printStackTrace( ). You can use toString( ) to retrieve
the standard error message. The toString( ) method is also called when an exception is used as
an argument to println( ).

```java
// Using the Throwable methods.
class ExcTest 
{
	static void genException() 
	{
		int[] nums = new int[4];
		System.out.println("Before exception is generated.");
		// generate an index out-of-bounds exception
		nums[7] = 10;
		System.out.println("this won't be displayed");
	}
}

class UseThrowableMethods 
{
	public static void main(String[] args) 
	{
		try 
		{
			ExcTest.genException();
		}
		catch (ArrayIndexOutOfBoundsException exc) 
		{
			// catch the exception
			System.out.println("Standard message is: ");
			System.out.println(exc);
			System.out.println("\nStack trace: ");
			exc.printStackTrace();
		}
		System.out.println("After catch Statement.");
	}
}
```

```
Before exception is generated.

Standard message is:
java.lang.ArrayIndexOutOfBoundsException: Index 7 out of bounds for length 4

Stack trace:
java.lang.ArrayIndexOutOfBoundsException: Index 7 out of bounds for length 4
	at ExcTest.genException(UseThrowableMethods.java:10)
	at UseThrowableMethods.main(UseThrowableMethods.java:19)

After catch statement.
```


____

#### Using finally

an exception might cause an error that terminates the current method,
causing its premature return. However, that method may have opened a file or a network
connection that needs to be closed. Such types of circumstances are common in programming,
and Java provides a convenient way to handle them: finally.
To specify a block of code to execute when a try/catch block is exited, include a finally
block at the end of a try/catch sequence.

whether the try block ends normally, or because
of an exception, the last code executed is that defined by finally. The finally block is
also executed if any code within the try block or any of its catch statements return from
the method.

```java
// Use finally.
class UseFinally 
{
	public static void genException(int what) 
	{
		int t;
		int[] nums = new int[2];
		System.out.println("Receiving " + what);
		try 
		{
			switch(what) 
			{
				case 0:
					t = 10 / what; // generate div-by-zero error
					break;
				case 1:
					nums[4] = 4; // generate array index error.
					break;
				case 2:
					return; // return from try block
			}
		}
		catch (ArithmeticException exc) 
		{
			// catch the exception
			System.out.println("Can't divide by Zero!");
			return; // return from catch
		}
		catch (ArrayIndexOutOfBoundsException exc) 
		{
			// catch the exception
			System.out.println("No matching element found.");
		}
		finally 
		{
			System.out.println("Leaving try.");
			// Executed on way out of try/catch blocks
		}
	}
}


class FinallyDemo 
{
	public static void main(String[] args) 
	{
		for(int i=0; i < 3; i++) 
		{
			UseFinally.genException(i);
			System.out.println();
		}
	}
}
```

```
Receiving 0
Can't divide by Zero!
Leaving try.

Receiving 1
No matching element found.
Leaving try.

Receiving 2
Leaving try.
```

As the output shows, no matter how the try block is exited, the finally block is executed.


____


#### Using throws

In some cases, if a method generates an exception that it does not handle, it must declare that
exception in a throws clause.

```
ret-type methName(param-list) throws except-list {
	// body
}
```


Here, except-list is a comma-separated list of exceptions that the method might throw outside
of itself.

exceptions
that are subclasses of Error or RuntimeException don’t need to be specified in a throws list.
Java simply assumes that a method may throw one. All other types of exceptions do need to be
declared. Failure to do so causes a compile-time error.

___

when performing keyboard input, you needed to add the clause
throws java.io.IOException
to main( ). Now you can understand why. An input statement might generate an IOException,
and at that time, we weren’t able to handle that exception. Thus, such an exception would be
thrown out of main( ) and needed to be specified as such. Now that you know about exceptions,
you can easily handle IOException.

```java
// Use throws.
class ThrowsDemo 
{
	public static char prompt(String str)
		throws java.io.IOException 
		{
			System.out.print(str + ": ");
			return (char) System.in.read();
		}
		
	public static void main(String[] args) 
	{
		char ch;

		// Since prompt( ) might throw an exception, it is enclosed in a try block.
		try 
		{
			ch = prompt("Enter a letter");
		}
		catch(java.io.IOException exc) 
		{
			System.out.println("I/O exception occurred.");
			ch = 'X';
		}
		
		System.out.println("You pressed " + ch);
	}
}
```

prompt( ) method does not handle
IOException itself. Instead, it uses a throws clause, which means that the calling method must
handle it. In this example, the calling method is main( ), and it deals with the error.


IOException is fully qualified by its package name java.io.

Java’s I/O system is contained in the java.io package. Thus, the IOException is also contained there. It would also have been possible to import java.io and then refer to IOException directly.


____
