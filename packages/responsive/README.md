# React Stuff - Responsive

[Demo](https://43qsk.csb.app/)

## Responsive Provider

This is the root component. It's responsible of:

- listening to resize event
- providing breakpoints/current breakpoint values to all its descendants

```
import { ResponsiveProvider } from '@react-stuff/responsive';
```

## Responsive Container

- applies the `width` value based on the current breakpoint
- applies the `gutter` value to its children
- will include `ResponsiveProvider` if `breakpoints` are directly passed to its props

## Responsive Unit

This is meant to be used within `ResponsiveContainer` with a `gutter`:

- applies `sizes` as a relative width based on its parent
- applies `offsets` as a relative margin based on its parent
