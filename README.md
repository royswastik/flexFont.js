# flexFont.js
Javascript library for responsive font sizes based on their parent element width.

## Usage


1. call flexText

    $('.selector').flexText(options);
    
*[options] object with the following optional properties:*

- **maxFontSize** (value in px): Maximum font-size that the element can have. After this font size, the text will not be changed.
- **minFontSize** (value in px): Minimum font-size that the element can have. The font size will not be changed to smaller value than this.
- **maxWidth** (value in px): Font size will not be changed after this width of containing element. 
- **minWidth** (value in px): Font size will not be changed after this width of containing element. 
- **sizeRatio** (integer value): Ratio of containing element's width to font-size.
- **ifparentClass** ([className,parentLevel] as [String,integer]): Only change font-size if the element's parent has the mentioned 'className'. The second item 'parentLevel' in the array defines the level in hierarchy of DOM tree. For example parentLevel as 1 is for direct parent, 2 is for parent of the parent and so on. 
- **ifclass** (className as String): Only change font-size if the containing element has the specified 'className'
    
    
## Default options
```json
{
  maxFontSize   : 100,
  minFontSize   : 1,
  maxWidth   : 9999,
  minWidth   : 1,
  sizeRatio : 20,
  ifparentClass: [null,1],
  ifclass: null
}
```


## Developed by... ##

This library is developed by Swastik Roy (https://www.linkedin.com/in/swastikroy).

flexFont.JS is licensed under the MIT License. See the LICENSE.txt file for copy permission.
