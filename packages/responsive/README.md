# React Stuff - Responsive ![npm (scoped)](https://img.shields.io/npm/v/@react-stuff/responsive) ![Netlify](https://img.shields.io/netlify/84a47c5b-65a8-4a7e-a549-02a849bc1bf5)

https://react-stuff.netlify.app/

## Responsive Provider

This is the root component. It's responsible of:

- listening to resize events
- providing breakpoints/current breakpoint values to all its descendants

```
import { ResponsiveProvider } from '@react-stuff/responsive';
```

## Responsive Container

- applies a `width` value based on the current breakpoint
- will include `ResponsiveProvider` if `breakpoints` or `isRelativeToParent` are directly passed as props

```
import { ResponsiveContainer } from '@react-stuff/responsive';
```

## Responsive Grid

- applies the `gutter` value to its children
- will include `ResponsiveContainer` (and `ResponsiveProvider`) if `breakpoints`, `margins`, `widths`, `isRelativeToParent` or `isCentered` are directly passed as props

```
import { ResponsiveGrid } from '@react-stuff/responsive';
```

## Responsive Unit

Generally used within a `block`/`flex` container.

- applies `sizes` as a relative width based on its parent
- applies `offsets` as a relative margin based on its parent

```
import { ResponsiveUnit } from '@react-stuff/responsive';
```
