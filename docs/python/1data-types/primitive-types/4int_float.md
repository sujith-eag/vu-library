---
title: "01 PDT - 04 int & float"
description: ""
summary: ""
date: 2024-12-17T22:34:15+05:30
lastmod: 2024-12-17T22:34:15+05:30
draft: false
weight: 13
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


## Int

```python CS50
x = 1  
y = 2
z = x + y
print(z)
```

Making it interactive with `input()`
```python
x = input ("whats x? ")
y = input ("whats y? ")
z = x + y
print (z)
```
Any input from keyboard is treated as a string.
For input 2 and 2, output will be 22 as + is concatenating both numbers because they are treated as strings.

`int` isn't just a data type but also a function which can convert 2 from `str` type to `int` type.
`int()` can be used to correct by converting them to integers.
```python
x = int(input ("whats x? "))
y = int(input ("whats y? "))
print(x+y)
```
Argument moves from inner function, becomes input to outer function

```python
print ( int( input("whats x? ")) + int(input("whats y? ")))
```
One line but very complicated and clever for its own good.


## Float    

`4.1` is a float
float - is any number with a decimal point
- when two numbers are divided, even if the result is a whole number, program always gives a float `(2.0)`.
- any operation b/w `float` and `int` will be a `float`.
- large numbers can be made more readable by using `_` , `(1_00_00_000)` python will only print the digits.

[Round](docs.python.org/3/library/function.html#round) number to a nearest digit
```python CS50
round(number[, ndigits])     # [] code in square brackets means optional
```
round means just one number, but if more is needed then it can be specified.

Rounding to a nearest number
```python
x = float (input ("whats x? "))
y = float (input("whats y? "))
z = round ( x + y )
print (z)

print ( f" {z:,} " )
# creating a f-string argument and then applying {z:,} makes the number have comma

# there isnt an upper bound on how large an int can be but float can get cut off into finite digits
z = round(x / y, 2)
# 2 in the argument of z allows rounding to nearest 2 decimals

z = x/y
print ( f"{z:.2f}" )
# by converting it into an f-strinf, format string i can round the result decimal to 2
```



