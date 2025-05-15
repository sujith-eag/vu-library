
# 'for' & 'while' loops


## 'for' loop

```java
for(initialization; condition; iteration)
{
	statement sequence
}
```

```java
// Show square roots of 1 to 99 and the rounding error.

class SqrRoot 
{
	public static void main(String[] args) 
	{
		double num, sroot, rerr;
		for(num = 1.0; num < 100.0; num++) 
		{
			sroot = Math.sqrt(num);
			System.out.println("Square root of " 
				+ num + " is " + sroot);
			
			// compute rounding error
			rerr = num - (sroot * sroot);
			
			System.out.println("Rounding error is " 
				+ rerr);
			System.out.println();
		}
	}
}
```

>[!note]
>Rounding error is computed by squaring the square root of each number. This result is then subtracted from the original number, thus yielding the rounding error.

___

```java
// A negatively running for loop.

class DecrFor 
{
	public static void main(String[] args) 
	{
		int x;
		for(x = 100; x > -100; x -= 5)
			System.out.println(x);
	}
}
```

___

Multiple loop control variables can be used and initialized with comma separation.
```java
// Use commas in a for statement.

class Comma 
{
	public static void main(String[] args) 
	{
		int i, j;
		for(i=0, j=10; i < j; i++, j--)
			System.out.println("i and j: " 
				+ i + " " + j);
	}
}
```

```
The output from the program is shown here:
i and j: 0 10
i and j: 1 9
i and j: 2 8
i and j: 3 7
i and j: 4 6
```

____

### 'for' loop variations

The condition controlling the loop can be any valid Boolean expression. It does not need to involve the loop control variable. 

```java
// Loops until an S is typed.

class ForTest 
{
	public static void main(String[] args)
		throws java.io.IOException 
	{
		int i;
		System.out.println("Press S to stop.");
		
		for(i = 0; (char) System.in.read() != 'S'; i++)
			System.out.println("Pass #" + i);
	}
}
```

___

### Missing Pieces

In Java, it is possible for any or all of the initialization, condition, or iteration portions of the `for` loop to be blank.

```java
// Parts of the for can be empty.
class Empty 
{
	public static void main(String[] args) 
	{
		int i;
		for(i = 0; i < 10; ) 
		{
			System.out.println("Pass #" + i);
			i++; // increment loop control var
		}
	}
}
```

The loop control variable `i` is incremented inside the body of the loop.
```
Pass #0
Pass #1
Pass #2
Pass #3
Pass #4
Pass #5
.....
```

___

Moving initialization out of `for` loop
```java
class Empty2
{
	public static void main(String[] args)
	{
		int i;
		i = 0;
		for( ; i<10; )
		{
			System.out.println("Pass #" + i);
			i++;
		}
	}
}
```

>[!note]
>Placing the initialization outside of the loop is generally done only when the initial value is derived through a complex process that does not lend itself to containment inside the for statement.

___

### The Infinite Loop

```java
// intentionally made infinite loop

for( ; ; ) 
{
	//...
}
```

Most “infinite loops” are really just loops with special termination requirements. and breaking out using break.

___

### Loop with No body

In Java, the body associated with a for loop (or any other loop) can be empty. This is because a null statement is syntactically valid.

```java
class Empty3
{
	public static void main(String[] args)
	{
		int i;
		int sum = 0;
		// sum numbers through 5
		for(i = 1; i<=5; sum += i++)  
			; // No body
		
		System.out.println("Sum is " + sum );
	}
}
// Sum is 15
```

`sum += i++` Same as `sum = sum + i;  i++;`
Add to sum the value of 'sum plus `i`', then increment `i`. 

>[!tip]
>If the loop control variable is temporary and not needed outside the loop then it can be declared in the for only

Enhanced for loops provide a way to cycle through the contents of a collection of objects like arrays.


## 'while' Loop

`while(condition) statement;`

Where statement may be a single statement or a block of statements, and condition defines the condition that controls the loop. The condition may be any valid Boolean expression. The loop repeats while the condition is true. When the condition becomes false, program control passes to the line immediately following the loop.

>[!tip]
>An alphabet is also a character which can be incremented


```java
// Demonstrate while loop.

class WhileDemo 
{
	public static void main(String[] args) 
	{
		char ch;
			// print the alphabet using while loop
		ch = 'a';
		while(ch <= 'z') 
		{
			System.out.print(ch);
			ch++;
		}
	}
}
```

___

```java
// Compute integer powers of 2.

class Power 
{
	public static void main(String[] args) 
	{
		int e;
		int result;
		for(int i=0; i < 10; i++) 
		{
			result = 1;
			e = i;
			while(e > 0) 
			{
				result *= 2;
				e--;
			}
			System.out.println("2 to the " 
				+ i + " power is " + result);
		}
	}
}
```



## 'do-while' loop

The last of Java’s loops is the do-while. The do-while loop checks its condition at the bottom of the loop. This means that a do-while loop will always execute at least once.
```java
do 
{
	statements;
} while(condition);
```


```java
// Demonstrate the do-while loop.

class DWDemo 
{
	public static void main(String[] args)
		throws java.io.IOException 
		{
			char ch;
			do 
			{
				System.out.print("Press a key followed by ENTER: ");
				ch = (char) System.in.read(); 
				// get a char
			} while(ch != 'q');
		}
}
```

___

#### Guessing Game

```java
class Guess 
{
	public static void main(String[] args)
		throws java.io.IOException
	{
		char ch, ignore, answer = 'K';
		
		do
		{
			System.out.println("I'm thinking of a letter.");
			System.out.print("Can you guess it: ");
			
			ch = (char) System.in.read();
			
			do 
			{  // used to clear the buffer
				ignore = (char) System.in.read();
			} while( ignore != '\n');
			
			if(ch == answer)
				System.out.println("** Right **");
			else 
			{
				System.out.print("..Sorry, you're ");
				if(ch < answer)
					System.out.println("too low");
				else
					System.out.println("too high");
				
				System.out.println("Try again! \n");
			}
		} while(answer != ch);
	}
}
```

```
I'm thinking of a letter.
Can you guess it: A
...Sorry, you're too low
Try again!

I'm thinking of a letter.
Can you guess it: Z
...Sorry, you're too high
Try again!

I'm thinking of a letter.
Can you guess it: K
** Right **
```

There are two do-while loops in the program. The first loops until the user guesses the letter.

```java
// discard any other characters in the input buffer
do 
{
	ignore = (char) System.in.read();
} while(ignore != '\n');
```

Console input is line buffered, carriage return and newline sequence to be generated, also, typing more than one key before pressing ENTER, they too would still be in the input buffer. This loop discards those characters by continuing to read input until the end of the line is reached. 

If they were not discarded, then those characters would also be sent to the program as guesses, which is not what is wanted.

After you have learned more about Java, some other, higher-level ways of handling console input are described.

____
