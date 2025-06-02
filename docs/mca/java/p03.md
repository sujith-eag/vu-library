
# Program 3:

Explore the String class and command-line arguments by developing a program that manipulates strings and processes arguments. Additionally, demonstrate the use of varargs and the Scanner class for input.

```java
import java.util.Scanner;

class Box {
    double width, height, depth;

    Box(double w, double h, double d) {
        width = w;
        height = h;
        depth = d;
    }

    public String toString() {
        return "The dimensions are " + width + " by " + height + " by " + depth + ".";
    }
}

public class ToStringDemo {

    // Method using varargs
    static void printWords(String... words) {
        System.out.println("Words passed using varargs:");
        for (String word : words) {
            System.out.println(word);
        }
    }

    public static void main(String[] args) {
        // Box and toString
        Box b = new Box(10, 12, 14);
        String s = "The box b is " + b;
        System.out.println("Printing b: " + b); // Converted to string using toString
        System.out.println("Printing s: " + s);

        // String manipulation
        String s2 = "Face the failure until the failure fails to face you";
        int start = 4;
        int end = 37;
        char[] buf = new char[end - start];
        s2.getChars(start, end, buf, 0);

        System.out.println("Extracted substring using getChars:");
        System.out.println(buf);

        // Command-line arguments
        System.out.println("The number of command-line arguments: " + args.length);
        for (int i = 0; i < args.length; i++) {
            System.out.println("Argument " + (i + 1) + ": " + args[i]);
        }

        // Varargs method
        printWords("Java", "String", "Scanner", "Varargs");

        // Scanner input
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = sc.nextLine();
        System.out.println("You entered: " + input);
        sc.close();
    }
}

```

### ➤ Case 1: No Command-line Arguments

```text
Printing b: The dimensions are 10.0 by 12.0 by 14.0.
Printing s: The box b is The dimensions are 10.0 by 12.0 by 14.0.
Extracted substring using getChars:
the failure until the failure fa
The number of command-line arguments: 0
Words passed using varargs:
Java
String
Scanner
Varargs
Enter a sentence: change is constant
You entered: change is constant
```

### ➤ Case 2: With Command-line Arguments

```text
F:\MSRIT\JAVA\Lab>java ToStringDemo Hello world
Printing b: The dimensions are 10.0 by 12.0 by 14.0.
Printing s: The box b is The dimensions are 10.0 by 12.0 by 14.0.
Extracted substring using getChars:
the failure until the failure fa
The number of command-line arguments: 2
Argument 1: Hello
Argument 2: world
Words passed using varargs:
Java
String
Scanner
Varargs
Enter a sentence: this is java lab
You entered: this is java lab
```

