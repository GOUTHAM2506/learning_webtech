# What is CSS?

-> CSS stands for Cascading Style Sheets
-> It is used to style HTML elements
-> It controls how a webpage looks (design, colors, layout)

Example:
HTML = Structure
CSS = Styling

# Why do we use CSS?

-> Makes webpages beautiful and user-friendly.
-> Controls:
Text color
Fonts
Spacing
Layout
Backgrounds

# CSS Syntax:

-> Selector {propertyName: propertyValue;}
A CSS rule has:
Selector → which element
propertyName → what to change
propertyValue → how to change

# History of CSS:

1994 → Idea by Håkon Wium Lie
CSS1 → Basic styling
CSS2 → Layout & positioning
CSS3 → Animations, Flexbox, Grid (current)
CSS4 → Future (in progress)

# Types of CSS:

-> We can proivde CSS in 3 ways: 1. Inline CSS 2. Internal CSS 3. External CSS

1. Inline CSS:
   -> The CSS which is written inside the HTML tag with the help of style attribute.
   -> It is used for single element.
   -> Example: <h1 style="color: red;">Hello</h1>

2. Internal CSS:
   -> The CSS which is written inside the <style> tag.
   -> It is used for single webpage.
   -> Example:
   <head>
   <style>
   h1 {
   color: blue;
   }
   </style>
   </head>

3. External CSS:
   -> The CSS written in a separate .css file.
   -> It is used for multiple webpages.
   -> To connect external CSS to HTML document we have to use of <link> tag.
   -> Example: <link rel="stylesheet" href="style.css">
   style.css = external css file
   h1 {
   color: green;
   }

# Priority of CSS:

-> Priority order: 1. Inline CSS (Highest) 2. Internal CSS (Whichever is nearest to HTML element) 3. External CSS (Whichever is nearest to HTML element)

-> We can change the Priority order by using special keyword called as:
!important → highest priority
