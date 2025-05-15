
# 'switch' Expressions

Java has significantly enhanced the `switch` construct, turning it into a more powerful and expressive feature. A **switch expression** is one of the most important additions which enables `switch` to produce a **value**.


## Key Enhancements to `switch`

The modern Java `switch` supports:

- The switch expression
    
- The `yield` statement
    
- Arrow syntax (`->`) for `case` labels
    
- Lists of `case` constants
    
___

A Traditional use of switch case
```java
// obtain the shipping method associated with a product ID.

class TraditionalSwitch 
{
	enum ShipMethod { STANDARD, TRUCK, AIR, OVERNIGHT }

	public static void main(String[] args) 
	{
		ShipMethod shipBy;
		int productID = 5099;

// case stacking is used.
		switch(productID) 
		{
			case 1774:
			case 8708:
			case 6709:
				shipBy = ShipMethod.TRUCK;
				break;
			case 4657:
			case 2195:
			case 3621:
			case 1887:
				shipBy = ShipMethod.AIR;
				break;
			case 2907:
			case 5099:
				shipBy = ShipMethod.OVERNIGHT;
				break;
			default:
				shipBy = ShipMethod.STANDARD;
		}
		System.out.println("Shipping method for product number " 
			+ productID + " is " + shipBy);
	}
}
```

Shipping method for product number 5099 is `OVERNIGHT`

---

A **switch expression** returns a value, making it usable in places like:

- Assignments
    
- Method arguments
    
- Return values

```java
int result = switch (value) {
	case 1 -> 100;
	case 2 -> 200;
	default -> 0;
};
```

This is in contrast to traditional `switch` statements, which do **not** produce values directly.


## The `yield` Statement

`yield` is used to specify the result of a `case` in a switch expression when more than a single expression is involved:

```java
int result = switch (value) {
	case 1 -> {
		System.out.println("Processing case 1");
		yield 100;
	}
	case 2 -> {
		System.out.println("Processing case 2");
		yield 200;
	}
	default -> 0;
};
```

> [!note]
> `yield` immediately exits the switch expression with the given value, much like `break`, but with the ability to return data.

yield is a context-sensitive keyword. This means that outside its use in a switch expression, yield is simply an identifier with no special meaning.



## Arrow Syntax in `case`

Arrow syntax (`->`) replaces the colon in `case` labels. It brings several benefits:

1. No fall-through to next case, terminates at end of an arrow case (no need for `break`)

2. Cleaner syntax for returning values for switch expressions.

3. Supports expressions, blocks, or throws (cannot be a statement )


```java
// Simple expression
case 'A' -> 1;

// Block with yield
case 'B' -> {
	System.out.println("Block executed");
	yield 2;
}

// Throwing an exception
case 'C' -> throw new IllegalArgumentException("Invalid input");
```


## List of 'case' Constants

You can now list multiple constants in a single `case` using commas. This eliminates the need for "case stacking" and improves code readability.

```java
case 1774, 8708, 6709:
	shipBy = shipMethod.TRUCK;
	break;
```

```java
case 1774, 8708, 6709 -> ShipMethod.TRUCK;
```

```java
class SwitchExprDemo
{
	enum ShipMethod {STANDARD, TRUCK, AIR, OVERNIGHT }
	
	public static void main(String[] args)
	{
		int productID = 5099;
		
		ShipMethod shipBy = switch(productID)
		{
			// no break or yirld is needed
			case 1774, 8708, 6709 -> ShipMethod.TRUCK;
			case 4657, 2195, 1887, 3621 -> ShipMethod.AIR;
			case 2907, 5099 -> ShipMethod.OVERNIGHT;
			default -> ShipMethod.STANDARD;
		};  // semicolon needed
		System.out.println("Shipping method for product number " +
			productID + " is " + shipBy);
	}
}
```

___

### Switch Expression Must Return a Value

Each path in a switch expression (including `default`) **must** produce a result unless it throws an exception.

Incorrect:
```java
int result = switch (value) {
	case 1 -> 100;
	case 2 -> {};  // ❌ Error: no value returned
	default -> 0;
};
```

Correct:
```java
int result = switch (value) {
	case 1 -> 100;
	case 2 -> {
		yield 200;
	}
	default -> 0;
};
```

---

> [!important]
>  When switch is used in an assignment, it must be terminated by a semicolon.


```java
class SwitchExprDemo
{
	enum ShipMethod {STANDARD, TRUCK, AIR, OVERNIGHT }
	
	public static void main(String[] args)
	{
		int productID = 5099;
		
		ShipMethod shipBy = switch(productID)
		{
			case 1774, 8708, 6709:
				yield ShipMethod.TRUCK;
			case 4657, 2195, 1887, 3621:
				yield ShipMethod.AIR;
			case 2907, 5099:
				yield ShipMethod.OVERNIGHT;
			default:
				yield ShipMethod.STANDARD;
		};  // semicolon needed
		System.out.println("Shipping method for product number " +
			productID + " is " + shipBy);
	}
}
```

>[!note]
>switch expression ensures each case yields a value. This yield causes immediate termination of the switch, so no fall through from case to case will occur.

There is an important restriction that applies to a switch expression: the case statements must handle all of the values that might occur. For this reason, most switch expressions will have a default statement. 

The exception to this rule is when an enumeration is used, and each value of the enumeration is matched by a case.

____

### A Closer Look at the Arrow case


The target of the -> can also be a block of code when more than one expression is needed. 

>[!important]
>Since the target of the arrow case is a block, `yield` must be used to return a value.

```java
class SwitchExprDemo
{
	enum ShipMethod {STANDARD, TRUCK, AIR, OVERNIGHT }
	
	public static void main(String[] args)
	{
		int productID = 5099;
		boolean extraCharge;
		
		ShipMethod shipBy = switch(productID)
		{
			case 1774, 8708, 6709 ->
			{
				extraCharge = true;
				yield ShipMethod.TRUCK;
			} 
			case 4657, 2195, 1887, 3621 ->
			{
				extraCharge = false;
				yield ShipMethod.AIR;
			}
			case 2907, 5099 -> 
			{
				extraCharge = true;
				yield ShipMethod.OVERNIGHT;
			}
			default -> 
			{
				extraCharge = false;
				yield ShipMethod.STANDARD;
			}
		};  // semicolon needed
		System.out.println("Shipping method for product number " +
			productID + " is " + shipBy);
	}
}
```

Even though block targets are used, each path through the switch expression must still provide a value.

___

Using `->` in traditional switch statement where no value is produced but no fall through can occur also.

```java
class StatementSwitchWithArrows 
{
	public static void main(String[] args) 
	{
		// Production line counters.
		int line1count = 0;
		int line2count = 0;
		int line3count = 0;
		
		int productionLine;
		
		for(int i=1; i<10; i++)
		{
			productionLine = (i%3) +1;
			
			switch(productionLine) 
			{
				case 1 -> 
				{ 
					line1count++;
					System.out.println("Line 1 produced a unit.");
				}
				case 2 -> 
				{ 
					line2count++;
					System.out.println("Line 2 produced a unit.");
				}
				case 3 -> 
				{ 
					line1count++;
					System.out.println("Line 3 produced a unit.");
				}
			}
		}
		System.out.println("Total counts for Lines 1, 2, and 3: " + 
			line1count + ", " + line2count + ", " 
				+ line3count);
	}
}
```

If this switch were an expression, then default would be needed because a switch expression is required to be exhaustive.

Because each case increases the value of a different variable, it would not be possible to transform this switch into an expression.

> [!Note]
you cannot mix arrow cases with traditional, colon cases in the same switch. You must choose one or the other.


___

#### Getting time zone using `switch`

```java
class CityTZDemo 
{
	// Use an enumeration to describe the time zones.
	enum TZ { Eastern, Central, Mountain, Pacific, Other }
	
	public static void main(String[] args) 
	{
		// An array of various cities in North America.
		String[] cities = 
		{
			"New York", "Boston", "Miami", "Chicago",
			"St. Louis", "Des Moines", "Denver",
			"Albuquerque", "Seattle", "San Francisco",
			"Los Angeles", "Portland"
		};
		
		// Display the time zone for each city in the array.
		for(String city: cities) 
		{
			TZ zone = switch(city) 
			{
				case "New York", "Boston", "Miami" -> TZ.Eastern;
				case "Chicago", "St. Louis", "Des Moines" -> TZ.Central;
				case "Albuquerque", "Denver" -> TZ.Mountain;
				case "Seattle", "San Francisco", "Los Angeles", "Portland" -> TZ.Pacific;
				default -> TZ.Other;
			};
			
			if(zone == TZ.Other)
				System.out.println(city + " is outside the Continental US");
			else
				System.out.println(city + " is in the " + zone + " time zone");
		}
	}
}
```

```
New York is in the Eastern time zone
Boston is in the Eastern time zone
Miami is in the Eastern time zone
Chicago is in the Central time zone
St. Louis is in the Central time zone
Des Moines is in the Central time zone
Denver is in the Mountain time zone
Albuquerque is in the Mountain time zone
Seattle is in the Pacific time zone
San Francisco is in the Pacific time zone
Los Angeles is in the Pacific time zone
Portland is in the Pacific time zone
```

____
