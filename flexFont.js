/*
* flexFont.js v1.0
* Copyright 2015 Swastik Roy, 
*
* flexFont.js by Swastik Roy
* is licensed under the MIT License. Read a copy of the
* license in the LICENSE.txt file

*/


(function($) {

 $.fn.flexText = function(settings) {

	var parameters = $.extend({
	         maxFontSize   : 100,
	         minFontSize   : 1,
	         maxWidth   : 9999,
	         minWidth   : 1,
	         sizeRatio : 20,
            ifparentClass: [null,1],
            ifclass: null
	      }, settings);

	textChange = function(elem) {
            parent_width = $(elem).width();
            width = parent_width > parameters.maximum ? parameters.maximum : (parent_width < parameters.minimum ? parameters.minimum : parent_width);
            fontSize0 = width / parameters.sizeRatio;
            fontSize = fontSize0 > parameters.maxFontSize ? parameters.maxFontSize : (fontSize0 < parameters.minFontSize ? parameters.minFontSize : fontSize0);
         	$(elem).css('font-size', fontSize + 'px');
      };


      
      return this.each(function() {
      var this2 = this;
         $(window).resize(function(){

            var condition = true;
            console.log(parameters.ifparentClass);
            condition = (parameters.ifclass != null) ? ($(this2).hasClass(parameters.ifClass) ? true : false) : condition;
            if(parameters.ifparentClass[0] != null){
               var $target_elem = $(this2);
               for(var x=0;x<parameters.ifparentClass[1];x++){
                  $target_elem = $target_elem.parent();
               }
               if($target_elem.hasClass(parameters.ifparentClass[0]))condition = condition && true;
               else condition = false;
            }
            if(condition)
            textChange(this2);
         });
         textChange(this);
      });
      
 };


}(jQuery));
