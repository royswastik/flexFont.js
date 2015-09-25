/*
* flexText.js v1.0
* Copyright 2015 Swastik Roy, 
*
* flexText.js by Swastik Roy
* is licensed under the MIT License. Read a copy of the
* license in the LICENSE.txt file

*/


(function($) {

 $.fn.flexFont = function(settings) {

   var parameters = $.extend({
            maxFontSize   : 100,
            minFontSize   : 1,
            maxWidth   : 9999,
            minWidth   : 1,
            sizeRatio : 20,
            ifparentClass: [null,1],
            ifclass: null,
            textEllipsis : false,  /* Values: atMinWidth, atMinFontSize, atAny */ 
            overflowHidden: false
         }, settings);

   textChange = function(elem) {
         if(!($(elem).attr("data-flexfont")))$(elem).attr("data-flexfont",$(elem).text());
         $(elem).text($(elem).attr("data-flexfont"));
            parent_width = $(elem).width();
            width = parent_width > parameters.maxWidth ? parameters.maxWidth : parent_width < parameters.minWidth ? parameters.minWidth : parent_width;
            fontSize0 = width / parameters.sizeRatio;
            fontSize = fontSize0 > parameters.maxFontSize ? parameters.maxFontSize : (fontSize0 < parameters.minFontSize ? parameters.minFontSize : fontSize0);
            $(elem).css('font-size', fontSize + 'px');

           
            if(parameters.textEllipsis == "atMinWidth"){
               if(parent_width<parameters.minWidth){
                  var c = countVisibleCharacters(elem);
                  $(elem).text(shorten($(elem).attr("data-flexfont"),c+3));
               }            
            }
            else if(parameters.textEllipsis == "atMinFontSize"){
               if(fontSize0<parameters.minFontSize){
                  var c = countVisibleCharacters(elem);
                  $(elem).text(shorten($(elem).attr("data-flexfont"),c+3));
               }
            }
            else if(parameters.textEllipsis == "atAny"){
                  var c = countVisibleCharacters(elem);
                  $(elem).text(shorten($(elem).attr("data-flexfont"),c+3));
            }

             if(parameters.overflowHidden)$(elem).css('overflow',"hidden");
             
            
         
      };


         function countVisibleCharacters(element) {
          var text = element.firstChild.nodeValue;
          var r = 0;
          
          element.removeChild(element.firstChild);
          
          for(var i = 0; i < text.length; i++) {
              var newNode = document.createElement('span');
              newNode.appendChild(document.createTextNode(text.charAt(i)));
              element.appendChild(newNode);
              
              if(newNode.offsetLeft < element.offsetWidth) {
                  r++;
              }
          }
          
          return r;
      }

      function shorten(text, maxLength) {
             var ret = text;
             if (ret.length > maxLength) {
                 ret = ret.substr(0,maxLength-3) + "...";
             }
             return ret;
         }
      



      
      return this.each(function() {
      var this2 = this;
         $(window).resize(function(){

            var condition = true;
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
