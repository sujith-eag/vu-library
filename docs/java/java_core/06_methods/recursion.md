
# Recursion

A method can call itself. This process is called recursion, and a method that calls itself is said to be recursive.

Recursive versions of many routines may execute a bit more slowly than their iterative equivalents because of the added overhead of the additional method calls. 

Too many recursive calls to a method could cause a stack overrun. Because storage for parameters and local variables is on the stack and each new call creates a new copy of these variables, it is possible that the stack could be exhausted.

```java
class Factorial
{
	int factR(int n)
	{ // Recursive version
		int result;
		if(n==1) 
			return 1;
			
		result = factR(n-1) * n;
		return result;
	}

	int factI(int n)
	{ // Iterative version
		int t, result;
		result = 1;
		for( t=1; t<= n; t++)
			result *= t;
			
		return result;
	}
}

class Recursion
{
	public static void main(String[] args) 
	{
		Factorial f = new Factorial();
		
		System.out.println("Factorials using recursive method.");
		
		System.out.println("Factorial of 3 is " 
			+ f.factR(3));
		System.out.println("Factorial of 4 is " 
			+ f.factR(4));
		System.out.println("Factorial of 5 is " 
			+ f.factR(5));
		System.out.println();
		
		System.out.println("Factorials using iterative method.");
		System.out.println("Factorial of 3 is " 
			+ f.factI(3));
		System.out.println("Factorial of 4 is " 
			+ f.factI(4));
		System.out.println("Factorial of 5 is " 
			+ f.factI(5));
	}
}
```

```
Factorials using recursive method.
Factorial of 3 is 6
Factorial of 4 is 24
Factorial of 5 is 120

Factorials using iterative method.
Factorial of 3 is 6
Factorial of 4 is 24
Factorial of 5 is 120
```

___
