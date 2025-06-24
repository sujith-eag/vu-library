
# Program 7:

Create a Java program to illustrates multithreaded programming with synchronized blocks, creating and running multiple threads using `isAlive()`, and `join()`:

```java
// This program uses a synchronized block.
class Callme {
    void call(String msg) {
        System.out.print("[" + msg);
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            System.out.println("Interrupted");
        }
        System.out.println("]");
    }
}

class Caller implements Runnable {
    String msg;
    Callme target;
    Thread t;

    public Caller(Callme targ, String s) {
        target = targ;
        msg = s;
        t = new Thread(this);
        t.start();
    }

    // Synchronize calls to call()
    public void run() {
        synchronized (target) { // synchronized block
            target.call(msg);
        }
    }
}

public class Synch1 {
    public static void main(String[] args) {
        Callme target = new Callme();
        Caller ob1 = new Caller(target, "Hello");
        Caller ob2 = new Caller(target, "Synchronized");
        Caller ob3 = new Caller(target, "World");

        System.out.println("ob1 is alive: " + ob1.t.isAlive());
        System.out.println("ob2 is alive: " + ob2.t.isAlive());
        System.out.println("ob3 is alive: " + ob3.t.isAlive());

        // Wait for threads to end
        try {
            ob1.t.join();
            ob2.t.join();
            ob3.t.join();
        } catch (InterruptedException e) {
            System.out.println("Interrupted");
        }

        System.out.println("ob1 is alive after join: " + ob1.t.isAlive());
        System.out.println("ob2 is alive after join: " + ob2.t.isAlive());
        System.out.println("ob3 is alive after join: " + ob3.t.isAlive());
    }
}
```

- **Multithreading:** Each `Caller` runs in its own thread.
    
- **Synchronization:** Ensures only one thread accesses `call()` at a time using a synchronized block.
    
- **Thread lifecycle monitoring:** Uses `isAlive()` and `join()` to manage and observe threads.

