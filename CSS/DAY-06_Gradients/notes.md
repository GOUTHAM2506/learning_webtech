# Gradients in CSS:

-> A gradient in CSS is a smooth transition between two or more colors.
-> Instead of using a single background color, gradients allow you to create attractive color effects for background.
-> Gradients are mostly used in: Backgrounds

# Syntax: background: gradient-type(...);

OR

# Syntax: background-image: gradient-type(...);

# Types of Gradients in CSS:

1. Linear Gradient => Colors move in a straight line
2. Radial Gradient => Colors spread from the center in circular/elliptical form
3. Conic Gradient => Colors rotate around a center point
4. Repeating Gradient => Repeats the gradsient pattern

5. Linear Gradient:
   -> A linear gradient creates a transition of colors in a straight line.
   -> Syntax: background: linear-gradient(direction, color1, color2, ...);

-> Directions in Linear Gradient:
Direction Meaning 1. to right Left → Right 2. to left Right → Left 3. to top Bottom → Top 4. to bottom Top → Bottom 5. to top right Bottom Left → Top Right

2. Radial Gradient:
   -> A radial gradient creates color spreading from the center of circle.
   -> Syntax: background: radial-gradient(shape, color1, color2);
   -> By default shape is circle.

3. Conic Gradient:
   -> A conic gradient rotates colors around a center point.
   -> It is used to create the: Pie Chart, Color Wheel
   -> Syntax: background: conic-gradient(color1, color2, color3);

-> Example 1: Basic Conic Gradient:
div{
background: conic-gradient(red, yellow, green, blue);
}

-> Example 2: Starting Angle:
div{
background: conic-gradient(from 90deg, red, blue);
}

4. Repeating Gradients:
   -> Repeating gradients repeat the color pattern again and again.
   There are:
   1.Repeating Linear Gradient => repeating-linear-gradient()
   2.Repeating Radial Gradient => repeating-radial-gradient()
   3.Repeating Conic Gradient => repeating-conic-gradient()
