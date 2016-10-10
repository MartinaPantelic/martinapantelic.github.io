/**
 * Author: Heather Corey
 * jQuery Simple Parallax Plugin
 *
 */
 
(function($) {
 
    $.fn.parallax = function(options) {
 
        var windowHeight = $(window).height();
 
        // Establish default settings
        var settings = $.extend({
            speed        : 0.15
        }, options);
 
        // Iterate over each object in collection
        return this.each( function() {
 
        	// Save a reference to the element
        	var $this = $(this);
 
        	// Set up Scroll Handler
        	$(document).scroll(function(){
 
    		        var scrollTop = $(window).scrollTop();
            	        var offset = $this.offset().top;
            	        var height = $this.outerHeight();
 
    		// Check if above or below viewport
			if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
				return;
			}
 
			var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
 
                 // Apply the Y Background Position to Set the Parallax Effect
    			$this.css('background-position', 'center ' + yBgPosition + 'px');
                
        	});
        });
    }
}(jQuery));

$('.bg-1,.bg-3,.bg-5').parallax({
	speed :	0.15
});

$('.bg-2,.bg-4').parallax({
	speed :	0.25
});

//slider 1

$(function() {
        $('.slider').flexslider({
        animation: "slide",
        prevText: "",          
        nextText: ""            
    });
        
        })

//slider 2
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    prevText: "",          
    nextText: "", 
    animationLoop: false,
    itemWidth: 210,
    itemMargin: 4
  });
});


//map
var map;
function initialize() {
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(45.816011, 20.608888)
};
map = new google.maps.Map(document.getElementById('map-canvas'),
  mapOptions);
var marker = new google.maps.Marker({
    map: map,
    icon: "",
    title: "Mi marcador",
    position: map.getCenter()
});
var marker2 = new google.maps.Marker({
    map: map,
    icon: "https://cdn3.iconfinder.com/data/icons/mapicons/icons/smokingarea.png",
    title: "Otro marker",
    position: new google.maps.LatLng(20.727167, -100.3846889)
});
var marker3 = new google.maps.Marker({
    map: map,
    icon: "https://cdn3.iconfinder.com/data/icons/mapicons/icons/days-sex.png",
    title: "Otro marker mas",
    position: new google.maps.LatLng(20.725167, -100.4946789)
});

var infowindow = new google.maps.InfoWindow();
infowindow.setContent('<b>Hubert 1924</b><br>');

infowindow.open(map, marker);

google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
});

}

google.maps.event.addDomListener(window, 'load', initialize);


// vertical-scroll

  $(document).ready(function() {
  $('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors:['firstPage', 'secondPage'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['firstSlide', 'secondSlide'],
    showActiveTooltip: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    resize : false,
    sectionsColor : ['#ccc', '#fff'],
    paddingTop: '3em',
    paddingBottom: '10px',
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    //events
    onLeave: function(index, nextIndex, direction){},
    afterLoad: function(anchorLink, index){},
    afterRender: function(){},
    afterResize: function(){},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
  });
});

