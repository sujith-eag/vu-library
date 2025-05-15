# if else Conditionals


### Input Characters from the Keyboard

To read a character from the keyboard in Java, you can use the `System.in.read()` method. This method waits for the user to press a key, and then returns the input as an integer. To store the result in a `char` variable, you need to cast the returned integer to `char`.

>[!important]
>By default, **console input is line-buffered**. A **buffer** is a temporary memory area that stores input characters until they are read by your program.

```java
class KbIn {
	public static void main(String[] args)
		throws java.io.IOException {
		
		char ch;
		System.out.print("Press a key followed by Enter: ");
		
		ch = (char) System.in.read(); // Read one character and cast it to char
		System.out.println("Your key is: " + ch);
	}
}
```


```
Press a key followed by Enter: t
Your key is: t
```

---

The `main` method is declared like this:

```java
public static void main(String[] args)
	throws java.io.IOException {
```

This is necessary because `System.in.read()` can throw an **IOException** if an input error occurs. Instead of using a `try-catch` block, this example uses `throws` to pass the exception up the call stack.

---

#### Note on Line Buffering

`System.in` is **line-buffered**, which means:

- Input is not sent to the program until the user presses **ENTER**.
    
- When ENTER is pressed, a **carriage return (`\r`)** and **line feed (`\n`)** are also stored in the input buffer.
    
- These extra characters remain in the buffer unless explicitly read.
    

>[!note]
> In some applications, you may need to **read and discard** these characters to prevent unexpected behavior in subsequent input operations.


## 'if' Statement

```java
if(condition)
{
	statement sequence
}
else
{
	statement sequence
}
```

```java
// Guess the letter game.

class Guess 
{
	public static void main(String[] args)
		throws java.io.IOException 
	{
		char ch, answer = 'K';
		System.out.println("I'm thinking of a letter between A and Z.");
		System.out.print("Can you guess it: ");
		
		ch = (char) System.in.read(); // read a char from the keyboard
		if(ch == answer) 
			System.out.println("** Right **");
		else 
			System.out.println("...Sorry, you're wrong.");
	}
}
```

## If else if ladder

```java
if(condition)
	statement;
else if(condition)
	statement;
else if(condition)
	statement;
.
.
else
	statement;
```

The conditional expressions are evaluated from the top downward. As soon as a true condition is found, the statement associated with it is executed, and the rest of the ladder is bypassed. If none of the conditions are true, the final else statement will be executed.

___
