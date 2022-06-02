jQuery(document).ready(function($) {
    'use-strict';

	function SubMenu() {
		$(".navbar ul li:has(ul)").addClass("has-children");
		$(".navbar ul li:has(ul)").find("ul").before('<span></span>');
		$(".navbar ul li.has-children span").on('click', function(){
			if(!$(this).parent().hasClass("open")){
				/*we need to know which 'level' we're on */
				var currentLevel = $(this).closest('ul');
				$("li ul", currentLevel).slideUp();
				$("li span", currentLevel).parent().removeClass("open");
				/* open our new menu and add the open class*/
				$(this).next("ul").slideDown();
				$(this).parent().addClass("open");
			}
			else{
				$(this).parent().removeClass("open");
				$(this).next("ul").slideUp();
			}	
		});	

		$(".close-nav").on('click', function(){
			$(".navbar .navbar-collapse").removeClass("show");
			$('.navbar-toggler').attr("aria-expanded","false")
		});
    }
    SubMenu();

	
	




});