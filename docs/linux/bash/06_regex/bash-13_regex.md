---
title: "Bash - 13 - Regular Expressions"
description: ""
summary: ""
date: 2024-12-29T16:50:36+05:30
lastmod: 2024-12-29T16:50:36+05:30
draft: false
weight: 982
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---



A **regular expression (regex)** is a string that defines a search pattern.     
It consists of a combination of **literal characters** and **meta-characters**.     
The meta-characters modify the literal characters to introduce flexibility and variability in pattern matching.

regex can **match more than just a literal string**. It can match a wide range of text patterns, allowing for flexible search, validation, and manipulation of strings.     
Regular expressions are commonly used to search for strings that follow a **pattern of interest**.

`"aeiou"` will match **exactly** the string `"aeiou"`. It does not allow for any variation.      
`"[aeiou]{5}"` will match any string that consists of **five consecutive vowels** (in lowercase). characters must appear consecutively. It will match strings like `"aeiou"`, `"aaaee"`, but not `"abcde"`.


***Wildcards and Regex:***      
While wildcards, such as `*` or `?`, can be used to express basic patterns, regex provides a more powerful and flexible mechanism for creating complex search patterns like,
- Matching sequences of characters.
- Requiring specific numbers of characters.
- Allowing optional characters.


___

### Metacharacters in Regex

The **regex** used in Linux was adopted from **POSIX** (Portable Operating System Interface for Unix), a series of standards that OS developers followed to ensure Unix and Unix-like systems shared features.

The original metacharacters described by POSIX form the **Basic Regular Expression** (BRE) set. Later, POSIX introduced the **Extended Regular Expression** (ERE) set, which uses the same metacharacters but with some differences, such as not requiring the backslash (`\`) for certain characters.

In regex, **brackets** (`[]`) are used to define a set of possible characters that can be matched. These brackets allow for more flexible and complex pattern matching.
- `[aeiou]` : Matches **any lowercase vowel**. It will match `a`, `e`, `i`, `o`, or `u`.
- `[a-e]`: Matches any of the characters from **a to e**. This includes `a`, `b`, `c`, `d`, and `e`.
- `[[:lower:]]` : This is an example of a **POSIX character class** within brackets. It matches any **lowercase letter** (equivalent to `[a-z]`).


---

### **POSIX Metacharacters in Regular Expressions:**

- **`^`**: Anchors the match to the **beginning** of the string.    
    `^cat` matches "cat" only if it appears at the start of the string.

- **`$`**: Anchors the match to the **end** of the string.    
    `cat$` matches "cat" only if it appears at the end of the string.

- **`*`**: Matches **0 or more** occurrences of the preceding element.    
    `a*` matches "a", "aa", "aaa", or even an empty string.

- **`+`**: Matches **1 or more** occurrences of the preceding element.    
    `a+` matches "a", "aa", "aaa", but **not** an empty string.

- **`?`**: Matches **0 or 1** occurrence of the preceding element.    
    `a?` matches "" (empty string) or "a".

- **`.`**: Matches any **single character** (except newline).      
    `a.b` matches "aab", "acb", "a1b", but **not** "ab" (missing character between "a" and "b").

- **`[]`**: Character class; matches any **one of the characters inside the brackets**.    
    `[aeiou]` matches any vowel (e.g., "a", "e", "i", etc.).

- **`|`**: **Alternation**; matches either the pattern on the left or right.    
    `cat|dog` matches either "cat" or "dog".

- **`()**`: **Grouping**; groups part of a regular expression.     
    `(abc)+` matches "abc" repeated one or more times, e.g., "abc", "abcabc", etc.

- **`\`**: **Escape character**; used to escape special characters.    
    `\.` matches a literal dot ".", and `\$` matches a literal dollar sign "$".

- **`{m}`**: Matches **exactly m occurrences** of the preceding element.    
    `a{3}` matches exactly "aaa".

- **`{m,n}`**: Matches between **m and n occurrences** of the preceding element.     
    `a{3,5}` matches "aaa", "aaaa", or "aaaaa".

- **`?`** (as non-greedy): Makes the preceding character **optional** or **non-greedy**.    
    `a+?` matches the smallest possible match, i.e., it will match "a" rather than "aaa".


     
____
     

- **`\b`**: **Word boundary**.
    `\bcat\b` matches "cat" only if it appears as a whole word, not as part of a larger word like "catalog".

- **`\B`**: **Non-word boundary**.
    `\Bcat\B` matches "cat" if it is **not** at the start or end of a word (e.g., "scatalog").

- **`\d`**: Matches any **digit** (equivalent to `[0-9]`).
    `\d+` matches one or more digits, such as "123" or "42".

- **`\D`**: Matches any **non-digit** character.
    `\D+` matches one or more non-digit characters, such as "abc" or "!@#".

- **`\w`**: Matches any **word character** (letters, digits, and underscore, equivalent to `[a-zA-Z0-9_]`).
    `\w+` matches a sequence of word characters, such as "abc123" or "_username".

- **`\W`**: Matches any **non-word character**.
    `\W+` matches a sequence of non-word characters, such as `!!`, `@#$`, etc.

- **`\s`**: Matches any **whitespace character** (space, tab, newline).
    `\s+` matches one or more whitespace characters, such as spaces or tabs.

- **`\S`**: Matches any **non-whitespace** character.
    `\S+` matches a sequence of non-whitespace characters, such as "abc123" or "_hello".

		
---
			
### **POSIX Character Classes:**

- **`[:alnum:]`**: Matches any **alphanumeric** character (letters in any case and digits, equivalent to `[a-zA-Z0-9]`).     
	`[[:alnum:]]` matches "a", "1", "X", "b2", etc.    
	
- **`[:alpha:]`**: Matches any **alphabetic** character (letters, equivalent to `[a-zA-Z]`).    
    `[[:alpha:]]` matches "a", "b", "Z", "X", but **not** digits or symbols.

- **`[:blank:]`**: Matches a **space or tab** character (`[ \t]`).    
    `[[:blank:]]` matches spaces and tabs.

- **`[:cntrl:]`**: Matches any **control character** (ASCII 0–31).     
    `[[:cntrl:]]` matches control characters like `^C`, `^D`, etc.

- **`[:digit:]`**: Matches any **digit** (equivalent to `[0-9]`).     
    `[[:digit:]]` matches "0", "5", "9", etc.

- **`[:graph:]`**: Matches any **printable character excluding space** (e.g., `a`, `A`, `1`, etc.).     
    `[[:graph:]]` matches "a", "A", "!", "1", but **not** space.

- **`[:lower:]`**: Matches any **lowercase letter** (equivalent to `[a-z]`).     
    `[[:lower:]]` matches "a", "b", "z", etc.

- **`[:print:]`**: Matches any **printable character**, including space (equivalent to `[[:graph:] ]`).     
    `[[:print:]]` matches "a", "1", " ", but **not** control characters.

- **`[:punct:]`**: Matches any **punctuation** character (e.g., `.`, `!`, `?`, `;`, etc.).     
    `[[:punct:]]` matches ".", "!", "?", ";", etc.

- **`[:space:]`**: Matches any **whitespace** character (space, tab, newline, carriage return, etc.).     
	`[[:space:]]` matches " ", "\t", "\n", etc.

- **`[:upper:]`**: Matches any **uppercase letter** (equivalent to `[A-Z]`).     
	`[[:upper:]]` matches "A", "B", "Z", etc.

- **`[:xdigit:]`**: Matches any **hexadecimal digit** (equivalent to `[0-9a-fA-F]`).     
    `[[:xdigit:]]` matches "1", "a", "F", "9", etc.

---

`^[[:alpha:]]+$` : This will match strings that consist only of alphabetic characters (both lowercase and uppercase).

`[[:digit:]]{3,5}` : This will match 3 to 5 consecutive digits.



___
