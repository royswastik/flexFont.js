# flexFont.js
- Javascript library for responsive font sizes based on their parent element width.
- Check live demo [here](https://jsfiddle.net/royswastik/asakpm29/1/embedded/result/)
## Usage
Add
```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/flexFont/latest/flexFont.min.js"></script>
<script>
  jQuery("#content").flexFont();
</script>
```
Or

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script type="text/javascript" src="path/to/flexFont.min.js"></script>
<script>
  jQuery("#content").flexFont();
</script>
```

1. call flexFont

    $('.selector').flexFont(options);
    
*[options] object with the following optional properties:*

- **maxFontSize** (value in px): Maximum font-size that the element can have. After this font size, the text will not be changed.
- **minFontSize** (value in px): Minimum font-size that the element can have. The font size will not be changed to smaller value than this.
- **maxWidth** (value in px): Font size will not be changed after this width of containing element. 
- **minWidth** (value in px): Font size will not be changed after this width of containing element. 
- **sizeRatio** (integer value): Ratio of containing element's width to font-size.
- **ifparentClass** ([className,parentLevel] as [String,integer]): Only change font-size if the element's parent has the mentioned 'className'. The second item 'parentLevel' in the array defines the level in hierarchy of DOM tree. For example parentLevel as 1 is for direct parent, 2 is for parent of the parent and so on. 
- **ifclass** (className as String): Only change font-size if the containing element has the specified 'className'
- **textEllipsis** ("atAny" | "atMinWidth" | "atMinFontSize" | false): Add ellipsis to the text when minimum width is reached, minimum font-size is reached or at any value.
- **overflowHidden** (true | false): Sets over-flow to hidden. Can be used when text goes out of the parent's borders if height is fixed.
    
    
## Default options
```json
{
  maxFontSize   : 100,
  minFontSize   : 1,
  maxWidth   : 9999,
  minWidth   : 1,
  sizeRatio : 20,
  ifparentClass: [null,1],
  ifclass: null,
  textEllipsis : false,
  overflowHidden: false
}
```


## Developed by... ##

This library is developed by Swastik Roy (https://www.linkedin.com/in/swastikroy).

flexFont.JS is licensed under the MIT License. See the LICENSE.txt file for copy permission.
