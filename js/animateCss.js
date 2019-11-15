( function( $ ) {
   // Plugin animateCSS, requires animate.css (https://daneden.github.io/animate.css/)
   $.fn.animateCSS = function( options ) {
 
      var defaults = {
         animation: '',
			duration: '1s',
         before: function() {},
         after: function() {}
      }
 
 		var params = $.extend( true, defaults, options ),
 	    	 animation = params.animation,
 			 duration = params.duration,
 			 before = params.before,
 			 after = params.after;
 
      return this.each( function() {
         if( animation == '' ) {
            before();
            after();
            return;
         }
         var animationName = 'animated ' + animation;
         var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
         before();
         $( this )
			.css({ animationDuration: duration })
         .addClass( animationName )
         .one( animationEnd, function( e ) {
            e.stopPropagation();
            $( this ).removeClass( animationName );
            after();
         });
      });
   }
})( jQuery )