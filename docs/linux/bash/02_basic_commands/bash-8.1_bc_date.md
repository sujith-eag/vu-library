---
title: "Bash - 08.1 - bc and date"
description: ""
summary: ""
date: 2025-01-01T15:23:35+05:30
lastmod: 2025-01-01T15:23:35+05:30
draft: false
weight: 977
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---




The `date` command in Unix-like operating systems is used to display or set the system date and time. 
```bash {frame="none"}
date [OPTION]... [+FORMAT]

date [-u|--utc|--universal] [MMDDhhmm[[CC]YY][]]
```

**OPTION** : Various options to customize how the date is displayed.
**FORMAT** : The format in which you want to display the date. (it has to follow `+`)


### date Format Specifiers

* `$ date +%a` : Abbreviated weekday name (e.g., `Sun`, `Mon`)
* `$ date +%A` : Full weekday name (e.g., `Sunday`, `Monday`)
* `$ date +%b` : Abbreviated month name (e.g., `Jan`, `Feb`)
* `$ date +%B` : Full month name (e.g., `January`, `February`)
* `$ date +%m` : Month as a number (01 to 12)
* `$ date +%d`: Day of the month (01 to 31)
* `$ date +%H`: Hour in 24-hour format (00 to 23)
* `$ date +%I`: Hour in 12-hour format (01 to 12)
* `$ date +%r`: 12-hour clock time (hh:mm:ss AM/PM)
* `$ date +%R`: 24-hour format time without seconds (hh:mm)
* `$ date +%T`: Time in 24-hour format with seconds (hh:mm:ss).
* `$ date +%Y` : Year with century (e.g., `2024`)
* `$ date +%j` : Day of the year (001 to 366)
* `$ date +%s` : Seconds since the Unix epoch (January 1, 1970)


#### Customizing Date Output
Combine multiple format specifiers to display a custom formatted date.

Combining two Formats
```bash {frame="none"}
$ date +%a:%A

Sun:Sunday
```

```bash {frame="none"}
$ date "+%a, %b %d, %Y - %r"

Sun, Dec 31, 2024 - 02:00:00 PM
```


**Making a Date String**: The `-d` or `--date` option allows to specify a date string, which `date` will interpret and display.

```bash {frame="none"}
$ date --date='@2147483647'
Wed Feb 16 06:46:07 UTC 2038
```
This will display the date corresponding to the Unix timestamp `2147483647`.


**UTC/Universal Time**: The `-u`, `--utc`, or `--universal` option allows you to display the date and time in UTC.
```bash {frame="none"}
$ date -u
Tue Dec 31 23:59:59 UTC 2024
```




___

### bc (Basic Calculator)

`bc` is an arbitrary precision calculator language. It's used for performing arithmetic operations, and it supports a variety of functions and operations, including basic math, variable assignments, and more.

**Interactive Mode** or **Command-Line Usage**     
Simply typing `bc` will start an interactive mode, where we can input mathematical expressions and get results.      
We can also use `bc` for calculations directly from the command line.

```bash {frame="none"}
$ echo "3 + 4" | bc
7
```

#### Some Key Operators in `bc`:
- **Arithmetic**: `+`, `-`, `*`, `/`, `^` (exponentiation)
- **Comparison**: `==`, `!=`, `<`, `>`, `<=`, `>=`
- **Logical**: `&&`, `||`
- **Bitwise**: `&`, `|`, `^`, `~`, `<<`, `>>`

#### Options

`-l` (Standard Math Library) : loads the standard math library, which enables functions like `sine`, `cosine`, `sqrt`, `exp`, etc.

```bash {frame="none"}
$ echo "scale=2; sqrt(2)" | bc -l
1.41
```

`scale` :  The `scale` variable determines the number of decimal places in the output.

```bash {frame="none"}
$ echo "scale=3; 22/7" | bc
3.142
```

`-q` (Quiet Mode): Suppresses the welcome message that is normally displayed.

```bash {frame="none"}
$ bc -q
```

`-s` (Single Precision Mode) : Forces `bc` to use single precision for floating-point calculations (often leading to fewer decimal places).

```bash {frame="none"}
$ echo "scale=3; 1/3" | bc -s
0.333
```


**Math Functions Available with `-l`** :
- Trigonometric: `s()`, `c()`, `a()`, etc. (for sine, cosine, arctangent, etc.)
- Logarithmic: `l()`, `e()`, etc.
- Exponential: `exp()`, etc.

#### Example Commands:

- **Addition and Division**:
```bash {frame="none"}
$ echo "5 + 3" | bc
8
$ echo "10 / 4" | bc
2
```

- **Using `scale` for Decimal Precision**:
```bash {frame="none"}
$ echo "scale=4; 7/3" | bc
2.3333
```

- **Using Functions with `-l`**:
```bash {frame="none"}
$ echo "scale=5; sqrt(100)" | bc -l
10.00000
```

- **Assigning Variables**:
```bash {frame="none"}
$ echo "a=5; b=3; a*b" | bc
15
```


____
