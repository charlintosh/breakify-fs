# Breakify - The Elemental Identifier

In the vibrant city of Albuquerque, there lived a man known as Heisenberg, although his true identity was that of a mild-mannered individual named Walter White. Walter had an unconventional request for the esteemed software development company, Gray Matter Technologies, aimed at adding a touch of intrigue to their software.

Walter White's request was unlike any other. He sought a custom software solution to manage the profiles of his wide circle of friends and colleagues, but with a fun twist he referred to as the "Elemental Identifier."

Here's how he requested it:

`"I demand a web application. It's simple - I enter my first name and last name. Then, it should be able to detect any elements from that darn periodic table that match within those names. No mistakes, no errors, just pure precision."` said...

## A&C

You are tasked with developing a custom text formatting tool for a web application. This tool will dynamically apply formatting to text based on certain conditions. Your objective is to create a solution that offers flexibility and efficiency in handling these requirements:

- If one or two characters in the first name or last name match an element from the periodic table (defined in a predefined array under `server/config/elements.js`), a special format will be applied. The special format involves displaying the name in white, but the characters that matched will have a green background (`#0f5135`) that looks like a square.
- If there are two possible matches within the input string, one consisting of two characters and another consisting of only one character, the two-character match should be chosen as the preferred match. This means that the formatting or special treatment associated with this match should take precedence over the one-character match.
- The search for matches will only be applied once, from left to right, on each name. Only the first match in each string (whether it's in the first name or last name) will be considered, regardless of whether it's a match of one or two characters.

## Considerations
- If no match is found in the string, no special formatting will be applied.
- If either of the fields (first name or last name) is empty, no formatting will be applied.
- Both formatted first name and last name results should be appended to the `<div className="brekified"/>` element on `App.js`.
- There's no other rules, do it on your way as you usually do in real world!
- Feel free to use either Express or any Node.js Framework you like for create your server.

## Expected result
![Breakify Expectations](https://res.cloudinary.com/charlintosh/image/upload/v1694753198/breakify.png)
