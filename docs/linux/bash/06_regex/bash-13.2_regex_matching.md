---
title: "Bash - 13.2 - regex Matching"
description: ""
summary: ""
date: 2025-01-01T15:24:34+05:30
lastmod: 2025-01-01T15:24:34+05:30
draft: false
weight: 984
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---


### Combining [] with  *  +  ?

`[abc]+`     
: Matches one or more occurrences of `a`, `b`, or `c`. The sequence must contain at least one character from the set.
Matches: `a`, `ab`, `bbac`, `c`

`[abc]*`      
: Matches zero or more occurrences of `a`, `b`, or `c`, including an empty string.
Matches: `a`, `ab`, `bbb`, `acb`  will always match something without the `^$`.

`^[abc]*$`     
: Matches strings consisting solely of `a`, `b`, or `c`, including empty strings.
Matches: `a`, `ab`, `abc`, `aaa`.   Does not match: `abc123`

`^[a-zA-Z]+$` or `^[[:alpha:]]+$`      
: Matches strings containing only alphabetic characters.

`^[0-9]+$` or `^[[:digit:]]+$`     
: Matches strings that consist of only numeric digits.

`^[[:punct:]]+$`      
: Matches strings containing only punctuation marks.

`^[A-Za-z]+[[:punct:]]+$` or `^[[:alpha:]]+[[:punct:]]+$`     
: Matches strings of letters followed by one or more punctuation marks.  `Hello!`, `word?`
Does not match: `Hello`, `word123`, `!word`

`^[[:alpha:][:punct:]]+$`    
: Matches strings of letters and punctuation marks (one or more). Order is not needed.

`^[A-Z][a-z]+ [A-Z]? [A-Z][a-z]+$`     
: Matches a name with a capitalized first name, optional middle initial, and capitalized last name. Matches: `John Doe`, `John A Doe`.  Does not match: `john doe`, `JohnDoe`

If there is no middle name then the regex will be searching for two spaces, So for optional middle initial without extra spaces:     
`^[A-Z][a-z]+( [A-Z]? [A-Z][a-z]+)?$`.


___
### Matching characters that Must Not appear

To not contain a specific character. Like without any blank space in it. "must not include" using `[^ ]`.

The `^`, when used inside of brackets means "match if the next character in the string is not matching anything in the bracket".       
The blank space indicates the only character we do not want to match against is a space.
Adding `^$` to match entire string and to specify that it can contain multiple characters as long as it is not a space using `+` we will have `^[^ ]+$`

___

### Matching Metacharacters Literally

When you need to use punctuation or special characters in a regular expression as literals (not as metacharacters), you can escape them using a backslash (`\`).

`\$[0-9]+\.[0-9][0-9]`       
A regex for a dollar and a cent amount. An alternative is to place the punctuation marks in the `[]`      
`[$][0-9]+[.][0-9][0-9]`

To find a addition `number + number = number` here `=` is not a meta character.       
`[0-9]+ \+ [0-9]+ = [0-9]+`  or  `[0-9]+ [+] [0-9]+ = [0-9]+`

To match any other mathematical expression we can go with the `[]` and `-` is in beginning or end or it can be escaped `\-`        
`[0-9]+ [-+\*] [0-9]+ = [0-9]+`

`$` is a metacharacter used to express the end of a expression, so if `$` appears anywhere other than the end, it is taken literally as dollar sign so does not require backslash.       
Similarly `^` appearing anywhere other than the beginning is taken literally.      
`-` also should appear in the middle of the `[]`       
`$[0-9]+ [+] [0-9]+ \. [0-9][0-9]`

___

### More precisely controlling repetition

With `* +` we can indicate that a pattern of characters can be repeated but cannot control the number of repetition.      
with `?` we have slight control in that the number occurrences is limited to either 0 or 1.     

To control the number of repetitions we use `{}` within which we can specify one or two numbers which will represent the maximum or the minimum number of occurrences.    

The three formats are :
* `{m}` to match exactly `m` occurrences of preceding character.
* `{m.n}` to indicate that the preceding characters must match between `m` and `n` where `m<n`
* `{n,}` to indicate at least `n` occurrences.

`[0-9]{5}` matches exactly five digits.   `[0-9]{3}-[0-9]{4}` to represent a phone number like `123-4567`         
`[0-9]{3,4}` matches between 3 and 4 digits.      
`[0-9]{3,}` matches 3 or more digits.     

To get IPv4 address with four octet numbers between 0 and 255.     
wrong method would be `[0-255].[0-255].[0-255].[0-255]` because there is no range defined between 0 and 255, it is just 0 to 9.       
so `[0-255]` is interpreted as 0 to 2 and 5 and 5 (0, 1, 2, 5, 5).      
The `.` is also a metacharacter to match any single character.      

`[0-9]{0-3}\.[0-9]{0-3}\.[0-9]{0-3}\.[0-9]{0-3}`      
Still the three numbers can be more than 255 and go upto 999 which is not right.

`^[^0-9]*[0-9]{5}[^0-9]*$`      
means "match any string that consists of zero or more non-digits followed by zero or more non-digits".


A correct pattern for an IPv4 address should handle the numbers between 0 and 255:
**Correct**:        
`^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$`


___

### Selecting Between Sequences

**`|`** : The OR operator, used to match either of two patterns.      
`(cat|dog)` matches either `cat` or `dog`.

**Using `()`**:       
- **`(...)+`**: Matches one or more occurrences of the group inside parentheses.
- **`(...)?`**: Matches 0 or 1 occurrence of the group inside parentheses.

`^[A-Z][a-z]+ ([A-Z]\. )?[A-Z][a-z]+$` : Matches a name like `John Doe` or `John A. Doe`, where the middle initial is optional.


___


### Sample Problems for Regular Expressions

#### 1. **Regular Expressions for Numbers**

**Match a number** :       
`[0-9]+`  -  Matches a string that contains at least one number.

**Match a string that consists only numbers** :       
`^[0-9]+$`  -  Matching the entire string.

**Match a 5-digit zip code** :       
`[0-9]{5}`  -  Matches: 12345,   Does not match: 1234, 123456

**Match a string that consists of a number which may include a single decimal point** :     
`^[0-9]+\.?[0-9]*$`  -  Matches: 0.123,   Does not match: 123.4

**Match a string that contains No digits** :      
`^[^0-9]+$`  -  Matches every single character is a non digit.

**Match a phone number in the format `XXX-XXX-XXXX`** :       
`[0-9]{3}-[0-9]{3}-[0-9]{4}`  -  Matches: `123-456-7890`,  Does not match: `1234567890`, `123-45-6789`

**Match a number with optional decimal point which must be followed by at least one digit** :       
`^[0-9]+(\.[0-9]+)?$`  -  Matches: `123`, `123.45`

**Match a number with optional decimal point and 2 digits after it** :      
`^\d+(\.\d{2})?$`  -  Matches: `123`, `123.45`,  Does not match: `123.456`, `abc`

**Match a credit card number (16 digits)** :       
`^\d{4}-\d{4}-\d{4}-\d{4}$`  -  Matches: `1234-5678-9876-5432`,  Does not match: `1234-5678-9876-543`, `1234567898765432`


---

#### 2. **Regular Expressions for Words**

**Match a string that consists of any sequence of upper lower** :       
`^[A-Za-z]+$`  -  Matches: `Hello`, `world`, `hello`  Does not match: `world123`

**Match a word that starts with a capital letter** :       
`^[A-Z][a-z]+$`  -  Matches: `Hello`, `World`,  Does not match: `hello`, `world123`

**Match a word that contains only letters and is 5-10 characters long** :      
`^[a-zA-Z]{5,10}$`  -  Matches: `hello`, `WorldWide`,  Does not match: `hello123`, `hi`

**Match a word that starts with a vowel**:      
`^[aeiouAEIOU][a-zA-Z]*$`  -  Matches: `apple`, `Orange`,  Does not match: `banana`, `grape`

**Match a name with first letter uppercase and remaining lowercase** :      
`^[A-Z][a-z]+$`  -  Matches: `John`, `Alice`,  Does not match: `john`, `JOHN`

**Match words containing some consonants, single vowel and some consonants** :      
`^[b-df-hj-np-tv-z]+[aeiou][b-df-hj-np-tv-z]+$`  -  taking all as lower case

**Match several (at least two) words with blank space between them** :       
`^([A-Za-z]+ )+[A-Za-z]+$`  -  words separated by blank space.

**Match several (at least two) words where a punctuation mark may follow any word** :      
`^([A-Za-z]+[[:punct:]]? )+[A-Za-z]+[[:punct:]]?$` 

**Same as above but allows for words with hyphens and apostrophes `' -`** :      
`^([A-Za-z'-]+[[:punct:]]? )+[A-Za-z'-]+[[:punct:]]?$`  -  Matches: `play-by-play`, `y'all's` (Care needed when placing hyphen in braces)


---

#### 3. **Possible Regular Expressions for Spam Terms**

**Match common spam keywords like "free" or "win"** :      
`\b(free|win)\b`  -  Matches: `free`, `win`,   Does not match: `winner`, `freedom`

**Match email addresses containing "offer"** :       
`offer[0-9]*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}`  -  Matches: `offer123@mail.com`,  Does not match: `info@mail.com`

**Match phrases like "limited time offer" or "guaranteed"** :       
`\b(limited time offer|guaranteed)\b`  -  Matches: `limited time offer`, `guaranteed`,  Does not match: `limited`, `guarantee`

**Match common spam email subject lines containing "urgent"**:      
`\burgent\b.*\b(action|reply)\b`  -  Matches: `URGENT action required`, `urgent reply needed`.   Does not match: `urgent request`, `action taken`

`[Aa]ct n[oO]w!?`  - `Act now!`  `act nOw`

`[Cc]lick h[e3]`  - `Click here`  `click h3r3`

`[Ll][oO][t4][t4][e3]ry`  -  `lo44ry` `Lott3ry`

`[Oo]rder [nN]ow!?`  - `Order Now` `order now!`

`[Yy]ou (may already be|are) a winner!?`  -  `You are a winner!` `you may already be a winner`
