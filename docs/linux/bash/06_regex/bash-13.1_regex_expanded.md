---
title: "Bash - 13.1 - regex Expanded"
description: ""
summary: ""
date: 2025-01-01T15:24:12+05:30
lastmod: 2025-01-01T15:24:12+05:30
draft: false
weight: 983
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



### **Controlling Repeated Characters Through `*`, `+`, `?`**

These are used to express a variable number of times that `preceding character` in regex can appear in the string.

`*`: The preceding character can appear **0 or more times**.     
    `1*0*` matches `11111000000`, `111111110`, `10`, `0`, or even an **empty string**.

   
`+` : The preceding character can appear **1 or more times**.      
    `1+0+` matches `111110000`, `1111110`, `10`       
    but **not** `0`, `1111`, or an **empty string**.


`?` : The preceding character can appear **0 or 1 time**.      
    `1?0?` matches `1`, `0`, `10`, or an **empty string**.

___

`a*b*c*` : Matches `aaaaabbbc`, `abc`, `ab`, `bbbbb`, or even **empty string**. (will match `abacab`).    
`a+b+c+` : Matches `aaaaabbbc`, `abc`, `abbbbbc`, but **not** an empty string or `1111`.    
`a?b?c?` : Matches `abc`, `ab`, or **empty string**.       
None will match with `abaaabc`as the letters are not in correct sequence.     


**Literal Characters:** A regex can contain literal characters without the metacharacters modifying them.       
`jpe?g` : Matches `jpeg` or `jpg` (with `e` being optional and `j,p, g` a must).      
`hello!?` : Matches `hello` or `hello!` (with `!` being optional).


___

### **Using `.` (Dot)**

**`.`** matches any single character except a newline.   

`b.t` will match any string that has `b` followed by **any one character**, followed by `t`.
- It will match: `bat`, `bbt`, `b0t`, `b#t`, `b t`
- It will **not** match: `bt` (missing the middle character)
- `batt` (too many characters)


**`...`** (three dots) will match any three characters, including three blank spaces.



**Combining with Other Metacharacters** like `*`, `+`, and `?` can modify `.` to allow for more flexible matches:

**`.*`**: Matches any sequence of characters (including zero characters). `b.?t` means `b` followed by zero or one character of any kind followed by a `t`.       
    `b.*t` will match: `bat`, `bbt`, `b0t`, `b#t`, `b t`, `bt`, `batt`, `b t`

**`.+`**: Matches any sequence of **one or more characters**.       
    `b.+t` will match: `bat`, `bbbbbbt`, `b t`, `b?!!#&*t`, `bait`, `b00t`      
     It will **not** match:  `bt` (since there must be at least one character between `b` and `t`)

**`.?`**: Matches zero or one character of any kind.     
	`b.?t` will match: `bt`, `bat`, `b?t`, `b#t`, etc.     


---


### Controlling Where a Pattern Matches

A regular expression need not match the full string, it can match **any substring** within a string, which is a contiguous sequence of characters found within the larger string.
- `a*b*c*` will match `abacab` because it looks for **zero or more occurrences** of `a`, `b`, and `c` in any order.
- `b.t` will match `batt` as it matches `b`, any character (represented by `.`), and `t`. It will also match strings like `bbbbbatttt` because it matches the substring "bat".
- `b?.t` and `b?.t+` will also match substrings within `bbbbbatttt`.

regex patterns like `a*`, `char*`, or `a*b*` can be too broad, matching anything and everything, becoming useless.       
To control where the regex matches, we can use anchors to enforce specific positions in the string.      

*  **`^`** : Asserts the beginning of a string.
*  **`$`** : Asserts the end of a string.
*  **`^ and $`** : Asserts the start and end of the string, ensuring the entire string must match the pattern.

---

**`^b?.t`**:
- Will **not** match `bbbbbbatttt` because the pattern starts at the beginning of the string, where it expects an optional `b` (`b?`), followed by any character (`.`), and then `t`. However, the sequence does not match at the start.
- `b?` matches the first `b`, the `.` marks the second `b` but the `t+` does not match as the next character is not `t`.


**`^b?.t+`**:
- This will **not** match `bbbbbbatttt` either because it starts with an optional `b`, followed by any character, and then `t+` (one or more `t`s). The next character after the first `b` does not meet the pattern.
- Matches a string that starts with 0 or 1 `b` because `b?` insists that there should be no more than one `b`. The next should be any one character followed by `t`.


**`b?.t+$`**:
- This will **match** `bbbbbatttt` because it scans the string from left to right, allowing for zero or more `b`s, followed by one character, and ending with one or more `t`s at the end of the string.


**`^b?.t+$`**:
- This will **match** strings that start with zero or one `b`, followed by any character, and ending with one or more `t`s.
	`batttt`, `bbttttt`, `attttt`.


**`^0a*1+`**:
- This will match strings that start with a `0`, followed by zero or more `a`'s, and at least one `1`.
	`0a1`, `0aaaa111`, `101111`, `01`.
- There can be any character after `1`. `0a1a` `011100`


**`^0a*1+$`**:
- This variation **fixes** the ending part to ensure it ends with one or more `1`s, with no characters following the `1`. It will match:  `0a1`,  `0aaaa111`,  `10111`.

**`^$`**:    
- This matches the **empty string**. It asserts that there is nothing between the start and end of the string.


---

### Matching From a List of Options

When we want to match a **set of characters** without caring about their specific order to indicate "any of these", we can use **character classes**.      
These are defined with **square brackets** (`[]`), which specify that the next character in the string must match **any single character** from the list of options inside the brackets.     

***Types of Lists:*** as given by the notation inside the bracket.

**1. Enumerated List** : `[abcd]` Matches **any one of** the characters `a`, `b`, `c`, or `d`, in any order. There should be no separators.       
`[abc][abc][abc]` or `[a-c][a-c][a-c]`: This matches any **three consecutive characters** where each character is one of `a`, `b`, or `c`, in any combination.     
`abc`, `acb`, `bca`, `aaa`, `bbb`, `bcc`, `zyxaaa`, `@aaa@`, `aaaaa`, `1cba2`.      
`[abcxyz]` `[abcdABCD]` `[abc1234]`


**2. Range** :  `[a-f]` Matches **any one of** the characters from `a` to `f`, inclusive. This is equivalent to writing `[a, b, c, d, e, f]`.       
**Range Combinations**:       
- `[a-cx-z]` : Matches any character from the sets `a` to `c` **or** `x` to `z`.
- `[a-d1-4]` : Matches any character from the sets `a` to `d` **or** `1` to `4`.
- `[a-dA-D]` : Matches any character from the sets `a` to `d` **or** `A` to `D`.


**3. Character Class** : A POSIX **character class** is a predefined group that matches a set of characters based on a certain property.      
* `[:alpha:]` matches **any alphabetic character** (equivalent to `[a-zA-Z]`).
* `[:punct:]` matches any punctuation character such as `.`, `,`, `!`, etc. (there's no direct range for all punctuation marks).


___

