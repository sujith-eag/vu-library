
# Program 6: 

Demonstrate exception handling fundamentals in Java, Including catching multiple exceptions and using built-in exceptions.

```java
public class MultipleExceptionDemo {
    public static void main(String[] args) {
        int a = 10;
        int b = 0;
        int result;
        int[] nums = {1, 2, 3};

        try {
            // Causes ArithmeticException
            result = a / b;
            System.out.println("Result: " + result);

            // Causes ArrayIndexOutOfBoundsException
            nums[5] = 10;

            // Causes NullPointerException
            String str = null;
            System.out.println(str.length());

        } catch (ArithmeticException e) {
            System.out.println("Caught ArithmeticException: " + e);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Caught ArrayIndexOutOfBoundsException: " + e);
        } catch (NullPointerException e) {
            System.out.println("Caught NullPointerException: " + e);
        }

        System.out.println("After try-catch blocks.");
    }
}
```


## Some Updation

```java
public class MultipleExceptionDemo {
    public static void main(String[] args) {
        int a = 10;
        int b = 0;
        int[] nums = {1, 2, 3};

        // Handle ArithmeticException
        try {
            int result = a / b;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Caught ArithmeticException: " + e);
        }

        // Handle ArrayIndexOutOfBoundsException
        try {
            nums[5] = 10;
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Caught ArrayIndexOutOfBoundsException: " + e);
        }

        // Handle NullPointerException
        try {
            String str = null;
            System.out.println(str.length());
        } catch (NullPointerException e) {
            System.out.println("Caught NullPointerException: " + e);
        }

        System.out.println("After all try-catch blocks.");
    }
}

```