<?php 

if(is_archive() || is_search()):
  
//Masthead Title Feature
get_template_part('template_parts/feature', 'archive_masthead');

?>

<div id="layout-archive" class="layout-archive">
  <!-- Does not extend -->
      
    <?php 
    
    //Begin Loop Content
    if(have_posts()): 
    
    ?>

    <div class="archive-loop_content"> 

      <?php 
      
      while(have_posts()): the_post();
      
        //Medium Post in Loop
        get_template_part('template_parts/loop_content', 'listed_medium');
        
      endwhile;
  
      //Page Navigation in Loop
      get_template_part('template_parts/loop_content', 'pagination');
      
      ?>
      
    </div>
    
    <?php else: ?>

    <div class="archive-notice">    
    
      <?php get_template_part('template_parts/feature', '404_notice'); ?>
    
    </div>
          
    <?php
      
    //End Loop Content
    endif;
    
    ?>

</div>

<?php endif;?>