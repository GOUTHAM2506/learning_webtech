# Text Properties in CSS:

- CSS Text Properties are used to control the appearance, alignment, spacing, and decoration of text.
- Following are some important text properties:

1. text-align: Used to align text horizontally.
   syntax: text-align: left(default) | start | center | right | end | justify;

2. text-align-last: Used to align the last line of text.
   syntax: text-align-last: center;

3. word-spacing: Used to increase or decrease space between words.
   syntax: word-spacing: 20px;

4. letter-spacing: Used to increase or decrease space between letters.
   syntax: letter-spacing: 5px;

5. text-decoration: Used to add decoration to text.
   syntax: text-decoration: line-type style color width;
   example: text-decoration: underline wavy red 5px;

6. Remove Underline From Anchor Tag:
   syntax: a {
   text-decoration: none;
   }

7. text-transform: Used to change letter case.
   syntax: text-transform: uppercase | lowercase | capitalize;

8. text-shadow: Used to add shadow to text.
   syntax: text-shadow: x-axis y-axis blur color;
   example: text-shadow: 2px 2px 5px red;

9. line-height: Used to control spacing between lines.
   syntax: line-height: 40px;

# Font Properties in CSS:

- CSS Font Properties are used to change the style, size, thickness, and appearance of text.
- Font is the style provided for the text.

1. font-size: Used to change the size of the text.
   syntax: font-size: 40px;

2. font-weight: Used to make text bold or thin.
   syntax: font-weight: bold | 100 to 900;

3. font-family: Used to change the font style of text.
   syntax: font-family: font-name;

# How to add Google Fonts:

- Google Fonts provides free stylish fonts.
- There are 2 ways to add google fonts:

# Method-1: Using <link> Tag

Step-1: Go to Google Fonts and select a font. Example: Poppins
Step-2: Copy the <link> tag and paste inside <head>.
Step-3: Use the font-family in CSS.
Example: font-family: "Poppins", sans-serif;

# Method-2: Using @import Statement

Step-1: Go to Google Fonts and select a font. Example: Poppins
Step-2: Copy import code from Google Fonts.
For Example: @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap');

Step-3: Use font-family.
Example: font-family: "Poppins", sans-serif;
