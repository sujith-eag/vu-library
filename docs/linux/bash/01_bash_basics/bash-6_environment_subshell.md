---
title: "Bash - 06 - Environment and Subshell"
description: ""
summary: ""
date: 2024-10-22T09:34:55+05:30
lastmod: 2024-10-22T09:34:55+05:30
draft: false
weight: 975
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



Computer's don't have the ability to translating the commands into action, it requires a ***Command Interpreter***, which is handled by the outer part of the Operating system called ***Shell*** .    
It is actually the interface between the user and the kernel.

___

### Shell

A shell session consists of an environment that includes all the variables, functions, and other entities defined during the session. 

When a session ends (using `exit`), or when a new session is started within a session (e.g., using `bash`), the entities defined in that session are no longer available. 

However, it is possible to create a new session inside the current one, which is referred to as a **subshell** or a **nested shell**.

A **subshell** allows you to create a new environment for performing tasks without affecting the parent shell. This is useful for executing commands or running scripts without modifying the original session.

A item defined in a shell can be made to persist in the subshell by using `export`.
exporting variables from the parent shell to the subshell, ensuring that they are available within the subshell. However, changes made to variables within the subshell will not affect the parent shell.

```bash {frame="none"}
export VAR=value   # Exports the variable to the subshell
```

- `export -f`: Exports a function to the subshell.
- `export -p`: Displays all exported variables.
- `export -n`: Removes the export property from a variable.

---

### **Configuration Files for Shell Sessions**

There are four important configuration files in Linux, two for users and two for system administrators:

The two `profile` files execute for both interactive and non interactive sessions. Non interactive session is one where a shell is needed to run a script but there is no user interaction.

When we login to Linux and open a window, we are running an interactive shell. Then both the `profile` and `bashrc` scripts will execute.

#### For System Administrators:

**`/etc/profile`**: This file is executed for all users when they log in.     
It defines a function called `pathmunge`.     
It sets up environment variables such as `USER`, `LOGNAME`, `MAIL`, `HOSTNAME`, `PATH`, and other system-wide variables. It is primarily used for system-wide settings.     
All defined variables are exported. A `umask` instruction is executed.

**`/etc/bashrc`**: This file is executed for interactive non-login shells. It sets additional environment variables, defines system-wide aliases, and modifies the `PATH` variable. It is a good place to define system-wide functions and aliases.

#### For Users:

**`~/.bash_profile`**: This file is executed for login shells. It typically contains an `if` statement that checks if the user’s `.bashrc` exists, and if so, runs it. It can also be used for user-specific environment variables.

**`~/.bashrc`**: This file is executed for non-login interactive shells. It is where users can define their own functions, aliases, and environment variables. It also sources `/etc/bashrc` to include system-wide settings.

---

### **How Shell Configuration Files Work**

When a user logs in:

1. **`/etc/profile`** is executed first. This file typically contains functions like `pathmunge` to construct the `PATH` variable and defines environment variables like `USER`, `LOGNAME`, `MAIL`, and others. It also executes `umask` to set file creation permissions.
2. **`/etc/bashrc`** is executed next, setting additional environment variables and modifying the `PATH`. It is where system-wide aliases and functions should be defined.

Then, **`~/.bash_profile`** executes:

- It checks if the `.bashrc` file exists in the user’s home directory, and if so, sources it to run the user-specific configuration.

**`~/.bashrc`**:

- It checks if `/etc/bashrc` exists and sources it, even though it may have already been executed by `/etc/profile`. This file concludes by adding local `bin` directories (`$HOME/.local/bin` and `$HOME/bin`) to the `PATH` variable.
- You can add custom aliases and functions in this file.

---

### **Logout and Session Cleanup**

- **`~/.bash_logout`**: This file is invoked when a Bash session is closed. Users can define commands to run before the session ends, such as cleaning up temporary files or logging out of remote sessions.

Changes made to these configuration files do not take effect until a new session is started. To apply changes immediately within the current session, the **`source`** command can be used to reload a script:

```bash {frame="none"}
source ~/.bashrc
```


---

### Internal and External Commands

Shell built-in commands (also called **internal commands**) are commands that are executed directly by the shell, without calling an external program. These are part of the shell itself and are typically used for basic shell control, environment configuration, and scripting.

```bash {frame="none"}
type <command>
```

```bash {frame="none"}
type cd
# cd is a shell builtin

type echo
# echo is a shell builtin
```

`echo` is not an external command, Shell won't look for it in the PATH variable to locate it when it is called. Rather it will execute it from its own set of built in commands that are not stored as separate files.

Certain commands are built into the shell because it is difficult or impossible to implement them as separate external commands.    
The child process inherits the current working directory from its parent as one of the environmental parameters. It is important for the `cd` command to not spawn any children to achieve a change of directory. If it did so through a separate process then after `cd` had completed its run, control would revert to the parent and the original directory would be restored. Then it would be impossible to change directory.  

##### Shell Environment and Control

- `cd` – Change the current directory
- `pwd` – Print working directory
- `echo` – Print text to the terminal
- `export` – Set environment variables
- `unset` – Unset environment variables or functions
- `set` – Set shell options or positional parameters
- `shift` – Shift positional parameters
- `alias` / `unalias` – Create or remove command aliases
- `type` – Show how a command would be interpreted (e.g. builtin, alias, external)

##### Shell Logic and Flow

- `if`, `then`, `else`, `elif`, `fi` – Conditional statements
- `for`, `while`, `until`, `do`, `done` – Loops
- `case`, `esac` – Switch-case construct
- `break`, `continue` – Control loop flow
- `return` – Return from a function
- `exit` – Exit the shell

##### Job Control

- `jobs` – List background jobs
- `fg` – Bring a job to the foreground
- `bg` – Resume a job in the background
- `kill` – Send signal to a job (though there's also an external `/bin/kill`)
- `wait` – Wait for a process to finish

##### Input and Redirection
- `read` – Read input into a variable
- `exec` – Replace the shell with a command or change file descriptors

##### Miscellaneous

- `help` – Display help for builtins
- `history` – Show command history
- `source` or `.` – Run a script in the current shell
- `true` / `false` – Return a success or failure status

___
### **Compiler vs Interpreter**

- **Compiler**: A compiler translates the entire source code of a program into machine code (binary code) that can be executed by the computer. It produces an independent executable file.

- **Interpreter**: An interpreter directly executes instructions written in a programming language, without converting them into machine code beforehand. It processes the code line by line.

Some languages, like Java, use an intermediate **bytecode**, which is platform-independent. The bytecode is then interpreted by the Java Virtual Machine (JVM), making the code portable across different systems.

---
