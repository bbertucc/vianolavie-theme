jQuery(document).ready(function($) {
  
  //jSticky Items
  if($('.feature-archive_masthead').length){
    $( '.header, .feature-archive_masthead' ).wrapAll( "<div class='stickyarea'></div>" );
    $('.header').stick_in_parent();
  }
  if($('.feature-masthead_posts').length){
    $( '.header, .feature-masthead_posts' ).wrapAll( "<div class='stickyarea'></div>" );
    $('.header').stick_in_parent();
  }
  if($('.layout-single').length){
    $('.feature-recent_posts').stick_in_parent();
  }
  
    
  //Initialize mobilenav
  $('.mobile_toggle-action').toggleMobileNav();

  //Initialize Masthead Slider
//   Argument is feature-masthead_posts
  $('.feature-masthead_posts').mastheadSlider();
  //Initialize AutoResize
  //autosize($('textarea'));

  //Initialize Search Expand  
  $('.site_search-form').expandSearch();

  //Initialize ShareThis Options
  //initializeShareThis();

});
