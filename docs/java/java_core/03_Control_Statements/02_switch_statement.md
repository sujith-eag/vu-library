
# 'switch' Statement

The second of Java’s selection statements is the `switch`. The switch provides for a multiway branch. Thus, it enables a program to select among several alternatives. 

>[!note]
>Although a series of nested if statements can perform multiway tests, for many situations the switch is a more efficient approach.

The traditional switch works like this: 
* the value of an expression is successively tested against a list of constants. 
* When a match is found, the statement sequence associated with that match is executed.

* Duplicate case values are not allowed. 

* The type of each value must be compatible with the type of expression. 

* The default statement sequence is executed if no case constant matches the expression. 

* Execution will continue into the next case if no break statement is present.

* The default is optional,

* You can have empty cases.

```java
switch(expression) 
{
	case constant1:
		statement sequence
		break;
	case constant2:
		statement sequence
		break;
	case constant3:
		statement sequence
		break;
.
.
	default:
		statement sequence
}
```


> [!info]
> Today, expression can also be of type String.
> 
> For versions of Java prior to JDK 7, the expression controlling the switch must resolve to type byte, short, int, char, or an enumeration. 


```java
// Demonstrate the switch.
class SwitchDemo 
{
	public static void main(String[] args) 
	{
		int i;
		for(i=0; i<10; i++)
			switch(i) 
			{
				case 0:
					System.out.println("i is zero");
					break;
				case 1:
					System.out.println("i is one");
					break;
				case 2:
					System.out.println("i is two");
					break;
				case 3:
					System.out.println("i is three");
					break;
				case 4:
					System.out.println("i is four");
					break;
				default:
					System.out.println("i is five or more");
				}
	}
}
```

>[!To note]
>`switch(i)` is given as a single line of code below the `for` loop but switch has its own block. 


## Switch Expressions


### Introducing the Arrow in a case Statement

Easier way to supply a value is through the use of a new form of the case that substitutes `->` for the `:` colon in
a case. 

```java
case 'X': // ...

case 'X' -> // ...
```
arrow case and the traditional colon case.

Although both forms will match the character X, the precise action of each style of case statement differs in three very important ways.

* ***First**, one arrow case does not fall through to the next case. Thus, there is no need to use break. Execution simply terminates at the end of an arrow case.

* **Second**, the arrow case provides a “shorthand” way to supply a value when used in a switch expression. For this reason, the arrow case is often used in switch expressions. 

* **Third**, the target of an arrow case must be either an expression, a block, or throw an exception. It cannot be a statement sequence, as is allowed with a traditional case.

```java
case constant -> expression;

case constant -> { block-of-statements }

case constant -> throw …
```

>[!important]
>When the target of an arrow case is an expression, the value of that expression becomes the value of the switch when that case is matched. As such, it provides a very efficient alternative to the yield statement in many situations.

`case 1774, 8708, 6709 -> ShipMethod.TRUCK;`

value of the expression (which is `ShipMethod.TRUCK`) automatically becomes the value produced by the switch when this case is matched. In other words, the expression becomes the value yielded by the switch.

____

