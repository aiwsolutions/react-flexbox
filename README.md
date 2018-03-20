[![CircleCI](https://circleci.com/gh/aiwsolutions/react-flexbox/tree/master.svg?style=svg&circle-token=89de5fc38eb55a41b3b7f395969c3993c0ddcfbf)](https://circleci.com/gh/aiwsolutions/react-flexbox/tree/master)

# react-flexbox
React flexbox layout with intuitive style settings.
There is no fancy compares to other libraries, it is just another way of declaring flexbox layout in react.

# Usage
```
npm install -save aiws-react-flexbox
```
```
import {Flex, Box} from 'aiws-react-flexbox';

...
    <Flex
        justify="center"
        align="center"
        p={1}
    >
        <Box
            pl={1}
            pr={1}
            auto
        />
            Left
        </Box>
        <Box
            ml={1}
        >
            Right
        </Box>
    </Flex>
...

```

# API
## Flex
Property | Corresponding CSS | Value | Meaning
-------- | ----------------- | ---- | -------
column | flex-direction: column/row | true or false | layout content in column or row
reverse | flex-direction: row-reverse/column-reverse |  true or false | layout content in reverse order
wrap | flex-wrap |no-wrap or wrap or wrap-reverse | render items in one line or multiple lines or multiple lines with reversed order
justify | justify-content | flex-start or flex-end or center or space-between or space-around | Specify how the items are aligned in the main axis
align | align-items | flex-start or flex-end or center or space-between or space-around | Specify how the items are aligned in the secondary axis
fullWidth | width: 100% | true or false | take the width of the parent
inline | display: inline-flex | |
col | width: (col * 100 / 12)% | 1..12 |
auto | flex: 1 1 auto | true or false | take all available space of the parent

## Box
Property | Corresponding CSS | Value | Meaning
-------- | ----------------- | ---- | -------
order | order | number | controls the order in which they appear in the flex container
auto | flex: 1 1 auto | true or false | take all available space of the parent
grow | flex-grow:  | number |
shrink | flex-shrink: | number |
basis | flex-basis: | string or number |
align | align-self: | auto or flex-start or flex-end or center or baseline or stretch

## Margin & Padding (same for both)
Property | Corresponding CSS | Example
-------- | ----------------- | -------
m={x} | margin: (x * 8)px    | m={1} means margin: 8px
p={x} | padding: (x * 8)px   | p={1} means padding: 8px
ml, mr, mt, mb | margin-left, margin-right, margin-top, margin-bottom | ml={1}  means margin-left: 8px
pl, pr, pt, pb | padding-left, padding-right, padding-top, padding-bottom | pt={1} means padding-top: 8px

## Overriden
Property | Example
-------- | -------
style | style={margin: 4}  means final style will have margin with 4px regardless other settings

# Run example locally
```
npm install
npm run serve
```
then navigate to http://localhost:8080
