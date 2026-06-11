# What are CSS Selectors?

-> The CSS selectors are used to target(select) the HTML elements.
-> We apply CSS styles using selectors.

# Types of CSS Selectors:

-> There are 5 main types:

1. Simple Selectors
2. Combinators Selectors
3. Attribute Selectors
4. Pseudo-Class Selectors
5. Pseudo-Element Selectors

---

1. Simple Selectors:
   -> Simple selectors are divided into main 4 types:
   1. Id Selector (#) → Selects a unique element using its id.
   2. Class Selector (.) → Selects multiple elements with same class.
   3. Tagname or Element name Selector (tagName) -> → Selects elements by tag name (like p, h1).
   4. Universal Selector (\*) → Selects all elements on the page.

# Priority Order for Simple Selectors: Id > Class > Tagname > Universal

2.  Combinators Selectors:
    -> The combination of more than one selector is called combinators selectors.
    -> There are 5 types of combinators selectors are as follows:
    1. Descendant Selector (space) → Selects elements inside another element (any level).
    2. Child Selector (>) → Selects direct child elements only.
    3. Adjacent Sibling Selector (+) → Selects the immediate next element.
    4. General Sibling Selector (~) → Selects all next sibling elements.
    5. Grouping Selector (,) → Used to apply the same CSS style to multiple elements at once.

3.  Attribute Selector:
    -> Attribute Selector [ ] → Selects elements based on their attribute or attribute value.
    -> Types:
    1. [attribute] → Selects elements that have the attribute
    2. [attribute="value"] → Selects elements with exact value
    3. [attribute~="value"] → Value contains a word
    4. [attribute|="value"] → Value is exact or starts with value-
    5. [attribute^="value"] → Value starts with given value
    6. [attribute$="value"] → Value ends with given value
    7. [attribute*="value"] → Value contains given value

4.  Pseudo-Class Selectors:
    -> Pseudo-Class Selector (:) → Selects elements based on their state (like hover, focus, click).
    -> Types:
    1. Dynamic
       1.1 :hover → when mouse is over element
       1.2 :active → when element is clicked
       1.3 :focus → when input is selected
       1.4 :visited → visited link
       1.5 :link → unvisited link

    2. Structural
       2.1 :first-child → first child element
       2.2 :last-child → last child element
       2.3 :nth-child(n) → specific position
       2.4 :first-of-type → first of that type
       2.5 :last-of-type → last of that type

    3. UI state
       3.1 :enabled → enabled element
       3.2 :disabled → disabled element
       3.3 :checked → selected checkbox/radio

5.  Pseudo-Element Selectors:
    -> Pseudo-Element Selector (::) → Selects and styles a specific part of an element.
    Types:
    1. ::first-line → first line of text
    2. ::first-letter → first letter
    3. ::before → content before element
    4. ::after → content after element
    5. ::marker → list item marker
    6. ::selection → selected text
    7. ::placeholder → placeholder text inside input/textarea
