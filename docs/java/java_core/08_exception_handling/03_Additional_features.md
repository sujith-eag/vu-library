
#### Additional Exception Features

In addition to the exception handling features already discussed, modern versions of Java include three more. 

The first supports automatic resource management, which automates the process of releasing a resource, such as a file, when it is no longer needed. It is based on an expanded form of try, called the `try-with-resources` statement.

The second feature is called multi-catch, 

Third is sometimes called final rethrow or more precise rethrow. 


Multi-catch allows two or more exceptions to be caught by the same catch clause. 

___

Instead of having to catch each exception type individually, you can use a single catch clause to handle the exceptions without code duplication.

To create a multi-catch, specify a list of exceptions within a single catch clause. You do this by separating each exception type in the list with the OR operator. Each multi-catch parameter is implicitly final. (You can explicitly specify final, if desired, but it is not necessary.) Because each multi-catch parameter is implicitly final, it can't be assigned a new value.

```
catch(ArithmeticException | ArrayIndexOutOfBoundsException e) {
```

___

#### Built-in Exceptions

Inside the standard package java.lang, Java defines several exception classes. A few have been used by the preceding examples. The most general of these exceptions are subclasses of the standard type RuntimeException. 

Since java.lang is implicitly imported into all Java programs, many exceptions derived from RuntimeException are automatically available. they need not be included in any method’s throws list. In the language of Java, these are called unchecked exceptions because the compiler does not check to see if a method handles or throws these exceptions. The unchecked exceptions exceptions defined by java.lang that must be included in a method’s throws list if that method can generate one of these exceptions and does not handle it itself. These are called checked exceptions. In addition to the exceptions in java.lang, Java defines several other types of exceptions that relate to other packages, such as IOException mentioned earlier.


Unchecked Exceptions

Exception Meaning
ArithmeticExceptionArithmetic error, such as integer divide-by-zero.
ArrayIndexOutOfBoundsExceptionArray index is out-of-bounds.
ArrayStoreExceptionAssignment to an array element of an incompatible type.
ClassCastExceptionInvalid cast.
EnumConstantNotPresentExceptionAn attempt is made to use an undefined enumeration value.
IllegalArgumentExceptionIllegal argument used to invoke a method.
IllegalCallerExceptionA method cannot be legally executed by the calling code.
IllegalMonitorStateExceptionIllegal monitor operation, such as waiting on an unlocked thread.
IllegalStateExceptionEnvironment or application is in incorrect state.
IllegalThreadStateExceptionRequested operation not compatible with current thread state.
IndexOutOfBoundsExceptionSome type of index is out-of-bounds.
LayerInstantiationExceptionA module layer cannot be created.
NegativeArraySizeExceptionArray created with a negative size.
NullPointerExceptionInvalid use of a null reference.
NumberFormatExceptionInvalid conversion of a string to a numeric format.
SecurityExceptionAttempt to violate security.
StringIndexOutOfBoundsExceptionAttempt to index outside the bounds of a string.
TypeNotPresentExceptionType not found.
UnsupportedOperationExceptionAn unsupported operation was encountered.

___

Checked Exceptions

ClassNotFoundExceptionClass not found.
CloneNotSupportedExceptionAttempt to clone an object that does not implement the
Cloneable interface.
IllegalAccessExceptionAccess to a class is denied.
InstantiationExceptionAttempt to create an object of an abstract class or interface.
InterruptedExceptionOne thread has been interrupted by another thread.
NoSuchFieldExceptionA requested field does not exist.
NoSuchMethodExceptionA requested method does not exist.
ReflectiveOperationExceptionSuperclass of reflection-related exceptions.

___

#### Creating Exception Subclass

you can manage errors that relate specifically to your application. Creating an
exception class is easy. Just define a subclass of Exception (which is, of course, a subclass of
Throwable). Your subclasses don’t need to actually implement anything—it is their existence in
the type system that allows you to use them as exceptions.

```java
/ Use a custom exception.
// Create an exception.
class NonIntResultException extends Exception {
int n;
int d;
NonIntResultException(int i, int j) {
n = i;
d = j;
}

public String toString() {
return "Result of " + n + " / " + d +
" is non-integer.";
}
}
class CustomExceptDemo {
public static void main(String[] args) {
// Here, numer contains some odd values.
int[] numer = { 4, 8, 15, 32, 64, 127, 256, 512 };
int[] denom = { 2, 0, 4, 4, 0, 8 };
for(int i=0; i<numer.length; i++) {
try {
if((numer[i]%2) != 0)
throw new
NonIntResultException(numer[i], denom[i]);
System.out.println(numer[i] + " / " +
denom[i] + " is " +
numer[i]/denom[i]);
}
catch (ArithmeticException exc) {
// catch the exception
System.out.println("Can't divide by Zero!");
}
catch (ArrayIndexOutOfBoundsException exc) {
// catch the exception
System.out.println("No matching element found.");
}
catch (NonIntResultException exc) {
System.out.println(exc);
}
}
}
}
```

```
4 / 2 is 2
Can't divide by Zero!
Result of 15 / 4 is non-integer.
32 / 4 is 8
Can't divide by Zero!
Result of 127 / 8 is non-integer.
No matching element found.
No matching element found.
```


In general, errors can be reported in two ways: return values
and exceptions. When is one approach better than the other? Simply put, in Java, exception
handling should be the norm. Certainly, returning an error code is a valid alternative in some
cases, but exceptions provide a more powerful, structured way to handle errors. They are the
way professional Java programmers handle errors in their code.

___

