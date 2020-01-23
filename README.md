# Alcedo

[![Build Status](https://travis-ci.org/ryangittings/alcedo.svg?branch=master)](https://travis-ci.org/ryangittings/alcedo)

This is the pure Sass framework for speed and flexibility.

`npm install alcedo` or `yarn add alcedo`

Get started
===========

- Import alcedo into your project - place this in your `style.scss` in your assets.
  ```
  @import "settings/breakpoints";
  @import "settings/colors";
  @import "settings/globals";

  @import "mixins";
  @import "style";
  ```
    
- Create a settings folder (copy from the package) and save as `settings` and place in the same location as your `style.scss` file.
  
### Basic Docs

- Get started by tweaking the settings
- Alcedo has a 12 column grid with column classes for small, medium and large and extra-large, with the breakpoints of these controllable seperate to your media queries (though using the mqs by default).

### Getting Started With Gulp
- Run `npm update --save-dev` to update package.json dependencies to the latest and download the latest node modules.
- Run `gulp` to confirm everything is working

### Contribute

If you want to contribute - feel free. All pull requests considered. However, the aim of alcedo is to be lightweight, so feature requests will always bare this in mind.

Grid
====

The alcedo grid is flexbox based, with browser support extended through Gulp. The grid is a tool and is as lightweight as possible. You should strongly consider when/how you are using it.

### Mark-up

To use the grid as mapped out in settings, you can do the following:

```
<div class="row">
  <div class="column column-sm-8 column-md-6 column-lg-4">
  </div>
  <div class="column column-sm-8 column-md-6 column-lg-4">
  </div>
  <div class="column column-sm-8 column-md-6 column-lg-4">
  </div>  
</div>
```

### Breakpoints

To use breakpoints in SASS, you could do the following:

`@include breakpoint(medium)`, this would target any screens larger than your `$mdbreak` breakpoint.

Or, if you wanted to target screens smaller than breakpoint, you could do:

`@include breakpoint(medium, max)`

### Constrain width

By default, alcedo is full width. Use the container class to constrain width.

```
<div class="container">
  <!-- grid -->
</div>
```

If you want to save mark-up, you can add it to the `row` element.

### Alignment

Use the row modifier classes to change alignment.

Horizontal:  
`.row--justified` - columns are evenly distributed across the row, first item is on the start, last at the end of the row  
`.row--spaced` - columns are evenly distributed across the row, with equal space around them  
`.row--end` - columns are pushed towards the end of the row  
`.row--center` - columns are aligned to the center of the row  

Vertical:  
`.row--middle` - columns are vertically aligned middle  
`.row--bottom` - columns are vertically aligned bottom  
`.row--top` - columns are vertically aligned top  

### Offset

You can use column offsets to offset a column by a column amount. For example:

```
  <div class="column-md-4 column-md-offset-1 column">
```

This will offset the column on medium devices by one column, increasing spacing between columns.

### Flex Column

```
  <div class="column-md-4 column column--flex">
```

This will turn the column into a flex displayed column to allow for equal height divs within the columns.

Flexible Embeds
===============

alcedo comes with an `.embed` class. Add this to a `<div>` containing a video iframe or other object, and it will behave responsively. You may need to tweak to padding of `.embed` depending on aspect ratio.