
# 'for-each' loop & Strings


The second form of the `for` loop implements a “for-each” style loop which cycles
through a collection of objects, such as an array, in strictly sequential fashion, from start to finish.

```java
for(type itr-var : collection) 
	statement-or-block
```
`itr-var` specifies the name of an iteration variable that will receive the elements from a collection, one at a time, from beginning to end. The collection being cycled through is specified by collection.

With each iteration of the loop, the next element in the collection is retrieved and stored in `itr-var`. The loop repeats until all elements in the collection have been obtained. Syntax is streamlined and also prevents boundary errors.

```java
int[] nums = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
int sum = 0;

// Traditional loop
for(int i=0; i < 10; i++) 
	sum += nums[i];

// for each type loop
for(int x: nums) 
	sum += x;
```


It is possible to terminate the loop early by using a break statement. 
```java
// Sum only the first 5 elements.

for(int x : nums) 
{
	System.out.println("Value is: " + x);
	sum += x;
	if(x == 5) break; 
	// stop the loop when 5 is obtained
}
```


## Strings

In other programming languages, a string is an array of characters. In Java, strings are objects. Creating a string literal, creates a String object. Also String from another String.
```java
String str = new String("Hello");

String str2 = new String(str);
```

Another easy way to create a String is :
```java
String str = "Java strings are powerful.";
```

```java
// Introduce String.
class StringDemo 
{
	public static void main(String[] args) 
	{
		// declare strings in various ways
		String str1 = new String("Java strings are objects.");
		String str2 = "They are constructed various ways.";
		String str3 = new String(str2);
		
		System.out.println(str1);
		System.out.println(str2);
		System.out.println(str3);
	}
}
```

```
Java strings are objects.
They are constructed various ways.
They are constructed various ways.
```


___

### Operating on Strings

The String class contains several methods that operate on strings.

`boolean equals(str)`  Returns true if the invoking string contains the same character sequence as str.

`int length( )`  Obtains the length of a string.

`char charAt(index)`  Obtains the character at the index specified by index.

`int compareTo(str)`  Returns less than zero if the invoking string is less than str, greater than zero if the invoking string is greater than str, and zero if the strings are equal.

`int indexOf(str)`  Searches the invoking string for the substring specified by str. Returns the index of the first match or –1 on failure.

`int lastIndexOf(str)`  Searches the invoking string for the substring specified by str. Returns the index of the last match or –1 on failure.

____

```java
// Some String operations.
class StrOps 
{
	public static void main(String[] args) 
	{
		String str1 = "When it comes to Web programming, Java is #1.";
		String str2 = new String(str1);
		String str3 = "Java strings are powerful.";

		int result, idx;
		char ch;

		System.out.println("Length of str1: " + str1.length());

		// display str1, one char at a time.
		for(int i=0; i < str1.length(); i++)
			System.out.print(str1.charAt(i));
		
		System.out.println();

		if(str1.equals(str2))
			System.out.println("str1 equals str2");
		else
			System.out.println("str1 does not equal str2");

		if(str1.equals(str3))
			System.out.println("str1 equals str3");
		else
			System.out.println("str1 does not equal str3");

		result = str1.compareTo(str3);

		if(result == 0)
			System.out.println("str1 and str3 are equal");
		else if(result < 0)
			System.out.println("str1 is less than str3");
		else
			System.out.println("str1 is greater than str3");


		// assign a new string to str2
		str2 = "One Two Three One";
		idx = str2.indexOf("One");
		System.out.println("Index of first occurrence of One: " + idx);
		idx = str2.lastIndexOf("One");
		System.out.println("Index of last occurrence of One: " + idx);
	}
}
```

```
Length of str1: 45
When it comes to Web programming, Java is #1.
str1 equals str2
str1 does not equal str3
str1 is greater than str3
Index of first occurrence of One: 0
Index of last occurrence of One: 14
```


____

Two strings can be be concatenated using the + operator. 
```java
String str1 = "One";
String str2 = "Two";
String str3 = "Three";
String str4 = str1 + str2 + str3;
```
initializes `str4` with the string `OneTwoThree`.


>[!important]
>The `equals( )` method compares the character sequences of two String objects for equality. Applying the == to two String references simply determines whether the two references refer to the same object.


## Arrays of strings

```java
// Demonstrate String arrays.
class StringArrays 
{
	public static void main(String[] args) 
	{
		String[] strs = { "This", "is", "a", "test." };
		
		System.out.println("Original array: ");
		for(String s : strs)
			System.out.print(s + " ");
		System.out.println("\n");

		// change a string
		strs[1] = "was";
		strs[3] = "test, too!";
		
		System.out.println("Modified array: ");
		for(String s : strs)
			System.out.print(s + " ");
	}
}
```

```
Original array:
This is a test.

Modified array:
This was a test, too!
```

___

### Strings are Immutable

The contents of a String object are immutable. That is, once created, the character sequence that makes up the string cannot be altered. String reference variables may, of course, change the object to which they refer. It is just that the contents of a specific String object cannot be changed after it is created.

This restriction allows Java to implement strings more efficiently.

>[!note]
>When you need a string that is a variation on one that already exists, simply create a new string that contains the desired changes. Unused String objects are automatically garbage collected.


The `substring( )` method returns a new string that contains a specified portion of the invoking string. Because a new String object is manufactured that contains the substring, the original string is unaltered, and the rule of immutability remains intact. 

`String substring(int startIndex, int endIndex)`

```java
class SubStr
{
	public static void main(String[] args)
	{
		String origStr = "Java makes the web move.";
		
		// Construct a substring
		String substr = origStr.substring(5, 18);
		
		System.out.println("Original : " + origStr);
		System.out.println("SubString : " + substr);
	}
}
```


## String to Control switch

With a modern version of Java, you can use a String to control a switch. This results in more readable, streamlined code in many situations.

```java
class StringSwitch 
{
	public static void main(String[] args) 
	{
		String command = "cancel";
		switch(command) 
		{
			case "connect":
				System.out.println("Connecting");
				break;
			case "cancel":
				System.out.println("Canceling");
				break;
			case "disconnect":
				System.out.println("Disconnecting");
				break;
			default:
				System.out.println("Command Error!");
				break;
		}
	}
}
```

Being able to use strings in a switch statement can be very convenient and can improve the readability of some code. 

___
