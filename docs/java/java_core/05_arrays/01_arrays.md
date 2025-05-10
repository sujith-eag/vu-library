
#### Arrays


An array is a collection of variables of the same type, referred to by a common name.

arrays in Java can be used just like arrays in other programming languages,
they have one special attribute: they are implemented as objects.

To declare a one-dimensional array, you can use this general form:
`type[ ] array-name = new type[size];`

type declares the element type of the array. (The element type is also commonly referred
to as the base type.) The element type determines the data type of each element contained in the
array. The number of elements that the array will hold is determined by size. Since arrays are
implemented as objects, the creation of an array is a two-step process. First, you declare an array
reference variable. Second, you allocate memory for the array, assigning a reference to that memory
to the array variable. Thus, arrays in Java are dynamically allocated using the new operator.

```java
int[] sample = new int[10];

int[] sample;
sample = new int[10];
```

An individual element within an array is accessed by use of an index. An index describes
the position of an element within an array. In Java, all arrays have zero as the index of their
first element.

```java
class ArrayDemo
{
	public static void main(String[] args)
	{
		int[] sample = new int[10];
		
		int i;
		for(i=0; i<10; i++)
			sample[i] = i;
		
		for(i=0; i<10; i++)
			System.out.println("This is [" + i + "] :" + sample[i] );
	}
}
```

To find Min and max in an array
```java
class MinMax 
{
	public static void main(String[] args)
	{
		int[] nums = new int[10];
		int min, max;
		
		nums[0] = 99;
		nums[1] = -10;
		nums[2] = 100123;
		nums[3] = 18;
		nums[4] = -978;
		nums[5] = 5623;
		nums[6] = 463;
		nums[7] = -9;
		nums[8] = 287;
		nums[9] = 49;
		
		min = max = nums[0]  // assuming
		
		for(int i=1; i<10; i++)
		{
			if( nums[i] < min )
				min = nums[i];
			if( nums[i] > max)
				max = nums[i];
		}
		System.out.println("min and max: " + min + " " + max);
	}
}
```

```
min and max: -978 100123
```


Arrays can be initialized when they are created. The general form for initializing a one-
dimensional array is shown here:
`type[ ] array-name = { val1, val2, ... , valN };`
Java automatically allocates an array large enough to hold the initializers that you specify. There is no need to explicitly use the new operator.
```java
int[] nums = { 99, -10, 100123, 18, -978, 5623, 463, -9, 287, 49 };
```


Array boundaries are strictly enforced in Java; it is a run-time error to overrun or underrun the end of an array.

causing `ArrayIndexOutOfBoundsException`

#### Bubble sort

Logic for Moving each element through comparison and moving smallest element to front

```java
for(a=1; a<size; a++) // loop to traverse
	for(b=size-1; b>= a; b--)
	{
		if(nums[b-1] > nums[b])
		{
			temp = nums[b-1];
			nums[b-1] = nums[b];
			nums[b] = temp;
		}
	}
```

```java
// Bubble sort

class BubbleSort
{
	public static void main(String[] args)
	{
		int[] nums = {99, -10, 100123, 18, -978, 5623, 463, -9, 287, 49 };
		int a, b, temp;
		int size = 10;
		
		System.out.print("Original array: ");
		for(int i=0; i<size; i++)
			System.out.print(" " + nums[i] + " ");
		System.out.println();
		
		for(a=1; a<size; a++)
		{
			for(b=size-1; b>=a; b--)
			{
				if(nums[b-1] > nums[b])
				{
					temp = nums[b-1];
					nums[b-1] = nums[b];
					nums[b] = temp;
				}
			}
		// To print each Iteration
		System.out.print("Sort Iteration " + a + " is : ");
		for(int i=0; i<size; i++)
			System.out.print(" " + nums[i] + " ");
		System.out.println();
		}
	// Final array
	System.out.print("\nSorted Array is : ");
	for(int i=0; i<size; i++)
		System.out.print(" " + nums[i] + " ");
	System.out.println();
	}
}
```


```
$ javac BubbleSort.java 

$ java BubbleSort 
Original array:  99  -10  100123  18  -978  5623  463  -9  287  49 
Sort Iteration 1 is :  -978  99  -10  100123  18  -9  5623  463  49  287 
Sort Iteration 2 is :  -978  -10  99  -9  100123  18  49  5623  463  287 
Sort Iteration 3 is :  -978  -10  -9  99  18  100123  49  287  5623  463 
Sort Iteration 4 is :  -978  -10  -9  18  99  49  100123  287  463  5623 
Sort Iteration 5 is :  -978  -10  -9  18  49  99  287  100123  463  5623 
Sort Iteration 6 is :  -978  -10  -9  18  49  99  287  463  100123  5623 
Sort Iteration 7 is :  -978  -10  -9  18  49  99  287  463  5623  100123 
Sort Iteration 8 is :  -978  -10  -9  18  49  99  287  463  5623  100123 
Sort Iteration 9 is :  -978  -10  -9  18  49  99  287  463  5623  100123 

Sorted Array is :  -978  -10  -9  18  49  99  287  463  5623  100123 
```

___

#### Multidimensional Arrays

In Java, a multidimensional array is an array of arrays.

A two-dimensional array is, in essence, a list of one-dimensional arrays. To declare a two-dimensional integer array
table of size 10, 20 you would write
`int[][] table = new int[10][20];`

```java
// Demonstrate a two-dimensional array.

class TwoD 
{
	public static void main(String[] args) 
	{
		int t, i;
		int[][] table = new int[3][4];
		
		for(t=0; t < 3; ++t) 
		{
			for(i=0; i < 4; ++i) 
			{
				table[t][i] = (t*4)+i+1;
				System.out.print(table[t][i] + " ");
			}
			System.out.println();
		}
	}
}
```

Assigns values from 1 to 12 to all indexes.

___

#### Irregular Arrays

Since multidimensional arrays are implemented as arrays of arrays, the length of each array is under your control.

When you allocate memory for a multidimensional array, you need to specify only the memory
for the first (leftmost) dimension. You can allocate the remaining dimensions separately.

```java
int[][] table = new int[3][];

table[0] = new int[4];
table[1] = new int[2];
table[2] = new int[6];
```

if you
need a very large two-dimensional array that is sparsely populated (that is, one in which not all
of the elements will be used), an irregular array might be a perfect solution.


___

#### Initializing multi dimensional arrays

general form of a multidimensional array declaration:
`type[ ] [ ]...[ ] name = new type[size1][size2]...[sizeN];`

For example, the following declaration creates a 4 × 10 × 3 three-dimensional integer array.
`int[][][] multidim = new int[4][10][3];`


A multidimensional array can be initialized by enclosing each dimension’s initializer list within its own set of curly braces.

```
type-specifier[ ] [ ] array_name = {
	{ val, val, val, ..., val },
	{ val, val, val, ..., val },
	.
	.
	.
	{ val, val, val, ..., val }
};
```

Each inner block designates a row. commas separate the initializer blocks and that a semicolon
follows the closing }.

___

```java
// Initialize a two-dimensional array.
class Squares 
{
	public static void main(String[] args) 
	{
		int[][] sqrs = {
			{ 1, 1 },
			{ 2, 4 },
			{ 3, 9 },
			{ 4, 16 },
			{ 5, 25 },
			{ 6, 36 },
			{ 7, 49 },
			{ 8, 64 },
			{ 9, 81 },
			{ 10, 100 }
		};
		
		int i, j;
		for(i=0; i < 10; i++) 
		{
			for(j=0; j < 2; j++)
				System.out.print(sqrs[i][j] + " ");
			System.out.println();
		}
	}
}
```

#### Alternate Array Declaration

the square brackets follow the name of the array variable, not the type specifier.

The following two declarations are equivalent:
```java
int counter[] = new int[3];
int[] counter = new int[3];


char table[][] = new char[3][4];
char[][] table = new char[3][4];
```


This alternative declaration form offers convenience when converting code from C/C++
to Java. In C/C++, arrays are declared in a fashion similar to Java’s alternative form.

____

#### Assigning Array Reference

when you assign one array reference variable to another, you are simply
changing what object that variable refers to. You are not causing a copy of the array to be
made, nor are you causing the contents of one array to be copied to the other.

___

#### Using length Member

Java, arrays are implemented as objects. One benefit of this approach is that each
array has associated with it a length instance variable that contains the number of elements
that the array can hold. (In other words, length contains the size of the array.)



a two-dimensional array is an array of arrays. Thus, when the expression `table.length` is used, it obtains the number of arrays stored in table, which is 3 in this case. 

To obtain the length of any individual array in table, you will use an expression such as this, `table[0].length`


```java
class LengthDemo
{
	public static void main(String[] args)
	{
		int[] list = new int[10];
		int[] nums = {1,2,3,4};
		int[][] table = {
			{1,2,3},
			{4,5},
			{6,7,8,9}
		};
		
		System.out.println("length of list is " + list.length);
		System.out.println("length of nums is " + nums.length);
	System.out.println("length of table is " + table.length);
	System.out.println("length of table[0] is " + table[0].length);
	System.out.println("length of table[1] is " + table[1].length);
	System.out.println("length of table[2] is " + table[2].length);
	System.out.println();
	
	// Using length to initialize for loop
	for(int i=0; i<list.length; i++)
		list[i] = i*i;
	
	System.out.print("Here is list: ");
	for(int i=0; i<list.length; i++)
		System.out.print(list[i] + " ");
	System.out.println();
	}
}
```

```
length of list is 10
length of nums is 3
length of table is 3
length of table[0] is 3
length of table[1] is 2
length of table[2] is 4

Here is list: 0 1 4 9 16 25 36 49 64 81
```

___

Copying array using length

```java
class ACopy 
{
	public static void main(String[] args) 
	{
		int i;
		int[] nums1 = new int[10];
		int[] nums2 = new int[10];
		
		// Initializing first array
		for(i=0; i < nums1.length; i++)
			nums1[i] = i;
			
		// copy nums1 to nums2
		if(nums2.length >= nums1.length)
			for(i = 0; i < nums1.length; i++)
				nums2[i] = nums1[i];
				
		// printig copied array
		for(i=0; i < nums2.length; i++)
			System.out.print(nums2[i] + " ");
	}
}
```

___

#### Implementing Queue using arrays

```java
class Queue 
{
	char[] q; // this array holds the queue
	int head, tail; // the put and get indices
	
	Queue(int size) 
	{
		q = new char[size]; // allocate memory for queue
		head = tail = 0;
	}
	
	// put a character into the queue
	void put(char ch) 
	{
		if(tail==q.length) 
		{
			System.out.println(" – Queue is full.");
			return;
		}
		q[tail++] = ch;
	}
	
	// get a character from the queue
	char get() 
	{
		if(getloc == putloc) 
		{
			System.out.println(" – Queue is empty.");
			return (char) 0;
		}
		return q[head--];
	}
}
```
Demonstrating operations using the Queue class
```java
class QDemo 
{
	public static void main(String[] args) 
	{
		Queue bigQ = new Queue(100);
		Queue smallQ = new Queue(4);
		char ch;
		int i;
		
		System.out.println("Using bigQ to store the alphabet.");
		// put some numbers into bigQ
		for(i=0; i < 26; i++)
			bigQ.put((char) ('A' + i));
			
		// retrieve and display elements from bigQ
		System.out.print("Contents of bigQ: ");
		for(i=0; i < 26; i++) 
		{
			ch = bigQ.get();
			if(ch != (char) 0) System.out.print(ch);
		}
		System.out.println("\n");
		
		
		
		System.out.println("Using smallQ to generate errors.");
		for(i=0; i < 5; i++) 
		{
			System.out.print("Attempting to store " + (char) ('Z' - i));
			
			smallQ.put((char) ('Z' - i));
			System.out.println();
		}
		System.out.println();
	
		// more errors on smallQ
		System.out.print("Contents of smallQ: ");
		for(i=0; i < 5; i++) 
		{
			ch = smallQ.get();
			if(ch != (char) 0) 
				System.out.print(ch);
		}
	}
}
```

```
Using bigQ to store the alphabet.
Contents of bigQ: ABCDEFGHIJKLMNOPQRSTUVWXYZ

Using smallQ to generate errors.

Attempting to store Z
Attempting to store Y
Attempting to store X
Attempting to store W
Attempting to store V – Queue is full.

Contents of smallQ: ZYXW – Queue is empty.
```

____
