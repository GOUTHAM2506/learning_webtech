# What is Media Queries?

-> Media Queries are used in CSS to make websites responsive.

# Why Media Queries are Used?

1. Without media queries:
   -Website may look good on desktop
   -But break on mobile/tablet

2. With media queries:
   -Layout adjusts automatically
   -Text becomes readable
   -Images resize properly
   -Navigation becomes mobile-friendly

# Structure of Media Query: (Syntax)

@media media-type and (condition) {

}

# Media Types:

1. screen -> Used for mobiles, laptops, tablets, desktops.
2. print -> Used while printing webpage.
3. all - > Default for all devices.

# Condition:

1. min-width: Applies styles when width is greater than given value.
2. max-width: Applies styles when width is smaller than given value.

# orientation:

-> Checks portrait or landscape mode.
-> It helps us apply different CSS when the screen rotates.

Portarit:
@media (orientation: portrait) {

}

Landscape:
@media (orientation: landscape) {

}

# Common Responsive Breakpoints in CSS:

-> These are the most commonly used approximate breakpoints in real-world frontend development.

| Device Type         | Approx Width |
| ------------------- | ------------ |
| Mobile Small        | `320px`      |
| Mobile Medium       | `480px`      |
| Mobile Large        | `576px`      |
| Tablet              | `768px`      |
| Laptop Small        | `992px`      |
| Laptop/Desktop      | `1024px`     |
| Desktop Large       | `1200px`     |
| Extra Large Screens | `1400px+`    |

# Most Common Industry Breakpoints:

/_ Mobile _/
@media (max-width: 576px) {

}

/_ Tablet _/
@media (min-width: 577px) and (max-width: 768px) {

}

/_ Laptop _/
@media (min-width: 769px) and (max-width: 1024px) {

}

/_ Desktop _/
@media (min-width: 1025px) {

}
