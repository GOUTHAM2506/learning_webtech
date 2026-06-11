# What is Flexbox?

- The Flexbox means flexible box layout.
- Flexbox is 1D layout.
- The flexbox is a CSS layout model used to:
  1. Align Items
  2. Provide Spacing
  3. Create Responsive Layouts
  4. Arrange elements in rows or columns easily

- It solves many problems of older layouts like:
  1. inline-block
  2. positioning

# Main Concepts in Flexbox:

    1. Flex Container: Parent Element
       Syntax: display: flex;

    2. Flex Items: Children inside the flex container.

# Flex Axis:

- There are two axis for flexbox:
  1. Main Axis: Direction in which items move.
  2. Cross Axis: Opposite direction

# Flex Parent Properties:

    1. display:flex;

- Converts normal container into flex container. 2. justify-content: start | center | end | space-around | space-evenly | space-between

- Controls alignment on Main Axis. 3. align-items: stretch (default) | start | center | end
  -> Controls alignment on Cross Axis. 4. flex-direction: row (default) | column | row-reverse | column-reverse
  -> Provide direction for items.
  Very Very Important:
  flex-direction: row:
  justify-content -> Main Axis (Horizontal)
  align-items -> Cross Axis (vertical)

          flex-direction: column;
          justify-content -> Main Axis (Vertical)
          align-items -> Cross Axis (Horizontal)

  5.  flex-wrap: nowrap (default) | wrap | wrap-reverse
      -> Controls whether items move to next line.
      -> Controls wrapping of items.

  6.  flex-flow: flex-direction flex-wrap;
      -> Shortcut property for : direction and wrap.

  7.  align-content: start | center | end | space-around | space-evenly | space-between
      -> Controls spacing between multiple rows.
      -> Works only when:
      flex-wrap: wrap
      Multiple rows exist

  8.  gap: row-gap column-gap;
      -> Adds spacing between flex items.

# Flex Child Properties:

    1. order: It is used to change the item order.
    2. flex-grow: Defines how much item grows.
    3. flex-shrink: Defines shrinking behavior.
    4. flex-basis: Defines initial size before growing/shrinking.
    5. flex: flex-grow flex-shrink flex-basis
    6. align-self: Applies alignment to individual item.

# Important Interview Questions:

Q.1. Difference Between justify-content and align-items?
Q.2. Difference Between align-items and align-content?
Q.3. What is the Default Value of flex-direction?
Q.4. What is the Difference Between flex-grow, flex-shrink, and flex-basis?
Q.5. What is flex: 1?
