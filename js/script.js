 $(document).ready(function (){




  //create a LatLng object containing the coordinate for the center of the map
  var latlng = new google.maps.LatLng(49.97294, 22.96858);

  // prepare the map properties
  var options = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    navigationControl: true,
    mapTypeControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true
  };

  // initialize the map object
  var map = new google.maps.Map(document.getElementById('google_map'), options);

  // add Marker
  var marker1 = new google.maps.Marker({
    position: latlng, map: map
  });

  // add listener for a click on the pin
  google.maps.event.addListener(marker1, 'click', function() {
    infowindow.open(map, marker1);
  });

  // add information window
  var infowindow = new google.maps.InfoWindow({
    content:  '<div class="info"><strong>This is my company</strong><br><br>My company address is here<br> </div>'
  });  



    $('section.scrollsections .title').hide(); // Hide all titles

    $('section.scrollsections')
      .scrollSections({
        alwaysStartWithFirstSection : true, // force to load the page on the first section (prevent broswer caching)
        
        before: function($currentSection, $nextSection){

          _initFuturSection($nextSection);
        },
        
        after: function($currentSection, $previousSection){

          _initNewSection($currentSection, $previousSection);
        }
      });

    function _initNewSection($section, $prevSection){

      // Do some stuff each time this new section ends animating
      
      // Only if there is a previous section (its null on first scroll)
      if($prevSection){
        $('.title', $prevSection).hide(); // Hide old section title
      }
      $('.title', $section).fadeIn(); // Fade in current section title
      
      // Do some stuffs only on first init
      if( !$section.data('isInit') ){
        // Create slider for example
        // $('.selector', $section).slider();

        // Singleton
        $section.data('isInit', true);
      }
    }

    function _initFuturSection($section){

      // Do some stuff each time before this section appears
      $('.title', $section).hide();
    }
});
