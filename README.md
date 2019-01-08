# Alcedo

This is the pure Sass framework for speed and flexibility.

`npm install alcedo` or `yarn add alcedo`

Get started
===========

- Import alcedo into your project - place this in your `style.scss` in your assets.
  ```
  @import "settings";
  @import "../../node_modules/alcedo/scss/style";

  @include alcedo-grid;
  @include alcedo-align;
  @include alcedo-colour;
  @include alcedo-touch;

  @include alcedo-type;
  @include alcedo-links;
  @include alcedo-inputs;
  @include alcedo-button;
  @include alcedo-image;
  @include alcedo-embed;

  @include alcedo-forms;
  @include alcedo-table;
  ```
    
- Create a settings file (copy from the package) and save as `_settings.scss` and place in the same location as your `style.scss` file.

- Import the mixins into the settings file, place this at the top.
  ```
  @import "../../node_modules/alcedo/scss/mixins";
  ```
  
  
### Basic Docs

- Get started by tweaking the settings in settings.scss
- You can remove or add the mixins in the style.scss file to only include what you need.
- alcedo has a 12 column grid with column classes for mobile, tablet and desktop, with the breakpoints of these controllable seperate to your media queries (though using the mqs by default).

### Getting Started With Gulp
- Run `npm update --save-dev` to update package.json dependencies to the latest and download the latest node modules.
- Run `gulp` to confirm everything is working

### Contribute

If you want to contribute - feel free. All pull requests considered. However, the aim of alcedo is to be light weight and skinny, so feature requests will always bare this in mind.


Grid
====

The alcedo grid is flexbox based, with browser support extended through Gulp. The grid is a tool and is as lightweight as possible. You should strongly consider when/how you are using it.

### Mark-up

```
<div class="row">
  <div class="column column-m-12 column-t-6 column-d-4">
  </div>
  <div class="column column-m-12 column-t-6 column-d-4">
  </div>
  <div class="column column-m-12 column-t-6 column-d-4">
  </div>  
</div>
```

Although the class names suggest "m" mobile, "t" tablet and "d" desktop, you should approach the use of the grid in a device agnostic manner.

### CSS Grid

alcedo comes with a helper for creating CSS Grids. You should include the mixin within a container class, for example:

```
.page {
    @include alcedo-css-grid($column-min, $column-max, $row-min, $row-max, $grid-gap);
}
```

You shouldn't try to use one container to handle all your grids, or try to recreate a 12 column grid using CSS grid. Instead, use the mixin to help you create containers on parent elements such as whole pages. The alcedo CSS Grid auto-fills.

*Variables*
The mixin affects the following variables so you can define grid containers on the fly.

```
$column-min: 200px;
$column-max: 12fr;
$row-min: 150px;
$row-max: auto;
$grid-gap: 1rem;
```

To control the placement of elements within the grid, use the `grid-column` and `grid-row` properties. For example:

```
.header {
  grid-column: span 3;
}
```

This declaration tells the header to _span_ three columns. Equally:

```
.article {
  grid-row: span 4;
}
```

..Tells the article to _span_ four rows.

There are no pre-defined columns with CSS Grid as instead the layout of the columns is primarily defined by the parent.

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
  <div class="column-t-4 column-t-offset-1 column">
```

This will offset the column on tablet devices by one column, increasing spacing between columns.

### Flex Column

```
  <div class="column-t-4 column column--flex">
```

This will turn the column into a flex displayed column to allow for equal height divs within the columns.

Buttons
=======

alcedo comes with a basic button component. You can adjust settings, including whether or not the button has a radius, in `settings.scss`.

### Markup

```
<button class="button">
  Button text
</button>
```

Strictly speaking, buttons should be buttons and links should be links. However, you can add the `.button` class to a link too. 

### Hollow 

Make a button hollow by adding the `.button--hollow` class.

Flexible Embeds
===============

alcedo comes with an `.embed` class. Add this to a `<div>` containing a video iframe or other object, and it will behave responsively. You may need to tweak to padding of `.embed` depending on aspect ratio.

### Inputs

alcedo comes with some basic input styling.

  
Icon from flaticon.com.
