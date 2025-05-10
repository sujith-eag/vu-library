#### 'break' to Exit a loop

```java
// Using break to exit a loop.

class BreakDemo 
{
	public static void main(String[] args) 
	{
		int num;
		num = 100;
			// loop while i-squared is less than num
		for(int i=0; i < num; i++) 
		{
			if(i*i >= num) 
				break; // terminate loop if i*i >= 100
			
			System.out.print(i + " ");
		}
		System.out.println("Loop complete.");
	}
}
```

```
0 1 2 3 4 5 6 7 8 9 Loop complete.
```

____

Breaking on input
```java
class Break1
{
	public static void main(String[] args)
		throws java.io.IOException
	{
		char ch;
		for( ; ; )
		{
			ch = (char) System.in.read();
			if(ch == 'q') 
				break;
		}
		System.out.println("You pressed q!");
	}
}
```


Using break in Nested loops
```java
class Break2
{
	public static void main(String[] args)
	{
		for(int i=0; i<3; i++)
		{
			System.out.println("Outer loop count: " + i);
			System.out.print("    Inner loop count: ");
		
			int t = 0;
			while(t<100)
			{
				if(t==10) break;
				
				System.out.print(t + " ");
				t++;
			}
			System.out.println();
		}
		System.out.println("Loops complete.");
	}
}
```

```
Outer loop count: 0
	Inner loop count: 0 1 2 3 4 5 6 7 8 9
Outer loop count: 1
	Inner loop count: 0 1 2 3 4 5 6 7 8 9
Outer loop count: 2
	Inner loop count: 0 1 2 3 4 5 6 7 8 9
Loops complete.
```

____

#### use 'break' as a form of 'goto'

Java does not have a goto statement, because it provides an unstructured way to alter the flow of program execution. In addition to its uses with the switch statement and loops, the break statement can be employed by itself to provide a “civilized” form of the goto statement.

____

The general form of the labeled break statement is shown here: `break label;`

Typically, label is the name of a label that identifies a block of code. When this form of break
executes, control is transferred out of the named block of code. The labeled block of code must enclose the break statement, but it does not need to be the immediately enclosing block. This means that you can use a labeled break statement to exit from a set of nested blocks.

These blocks need not be part of a loop or a switch. They can be any block. Further, you can specify precisely where execution will resume, because this form of break works with a label.

To name a block, put a label at the start of it. The block being labeled can be a stand-alone block, or a statement that has a block as its target. A label is any valid Java identifier followed by a colon. Once you have labeled a block, you can then use this label as the target of a break statement. Doing so causes execution to resume at the end of the labeled block. 

```java
// Using break with a label

class Break3
{
	public static void main(String[] args)
	{
		int i;
		for(i=1; i<4; i++)
		{
			one:{
				two:{
					three:{
						System.out.println("\ni is " + i);
						if(i==1) break one;
						if(i==2) break two;
						if(i==3) break three;
						
						// this is never reached
						System.out.println("This never print");
					}
					System.out.println("After block three");		
				}
				System.out.println("After block two");
			}
			System.out.println("After block one");
		}
		System.out.println("After for loop");
	}
}
```

```
i is 1
After block one

i is 2
After block two
After block one

i is 3
After block three
After block two
After block one
After for loop
```

____

```java
// Another example of using break with a label.
class Break5 {
	public static void main(String[] args) {
	done:
		for(int i=0; i<10; i++) {
			for(int j=0; j<10; j++) {
				for(int k=0; k<10; k++) {
					System.out.println(k + " ");
					if(k == 5) break done; // jump to done
					}
					System.out.println("After k loop"); // won't execute
				}
				System.out.println("After j loop"); // won't execute
			}
			System.out.println("After i loop");
	}
}
```

```
0
1
2
3
4
5
After i loop
```

___

```java
// label before for statement

stop1: for(x=0; x < 5; x++) {
	for(y = 0; y < 5; y++) {
		if(y == 2) 
			break stop1;
		System.out.println("x and y: " + x + " " + y);
	}
}
```
when the break executes, it transfers control to the end of the entire for block, skipping the rest of the outer loop’s iterations.

```java
// now, put label immediately before {

for(x=0; x < 5; x++)
stop2: {
		for(y = 0; y < 5; y++) 
		{
			if(y == 2) break stop2;
			System.out.println("x and y: " + x + " " + y);
		}
	}
```
when break stop2 executes, control is transferred to the end of the outer for’s block, causing the next iteration to occur.

_____

#### continue

The continue statement forces the next iteration of the loop to take place, skipping any code between itself and the conditional expression that controls the loop. Thus, continue is essentially the complement of break.

```java
class ContDemo 
{
	public static void main(String[] args)
	{
		int i;
		
		for(i=0; i<=100; i++)
		{
			if( (i%2) != 0)
				continue;
			System.out.println(i);
		} // Printing even numbers
	}
}
```

___

As with the break statement, continue may specify a label to describe which enclosing
loop to continue. Here is an example program that uses continue with a label:
```java
// Use continue with a label.
class ContToLabel {
	public static void main(String[] args) {
	
	outerloop:
		for(int i=1; i < 10; i++) {
			System.out.print("\nOuter loop pass " + i + ", Inner loop: ");

			for(int j = 1; j < 10; j++) {
				if(j == 5) continue outerloop; // continue outer loop
				System.out.print(j);
			}
		}
	}
}
```
when the continue executes, control passes to the outer loop, skipping the remainder of the inner loop.
```
Outer loop pass 1, Inner loop: 1234
Outer loop pass 2, Inner loop: 1234
Outer loop pass 3, Inner loop: 1234
Outer loop pass 4, Inner loop: 1234
Outer loop pass 5, Inner loop: 1234
Outer loop pass 6, Inner loop: 1234
Outer loop pass 7, Inner loop: 1234
Outer loop pass 8, Inner loop: 1234
Outer loop pass 9, Inner loop: 1234
```

___

#### Nested Loops

Find the factors of the numbers from 2 to 100:

```java
class FindFac
{
	public static void main(String[] args)
	{
		for(int i=2; i<=100; i++)
		{
			System.out.print("Factors of " + ": ");
			for(int j=2; j<i; j++)
				if( (i%j)==0)
					System.out.print(j + " ");
				System.out.println();
		}
	}
}
```

```
Factors of 2:
Factors of 3:
Factors of 4: 2
Factors of 5:
Factors of 6: 2 3
Factors of 7:
Factors of 8: 2 4
Factors of 9: 3
Factors of 10: 2 5
Factors of 11:
Factors of 12: 2 3 4 6
....
```

___
