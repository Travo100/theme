<div class="mt-block sorted-portfolio">
  <p class="block-title">Portfolio</p>
  <ul class="sorted-nav">
    <li><a data-sort="design">Design</a></li>
    <li><a data-sort="development">Development</a></li>
    <li><a data-sort="ecommerce">Ecommerce</a></li>
    <li><a data-sort="video">Video</a></li>
  </ul>
  <div class="container">
    <div class="sorted-area">
      <?php
    $taxonomies = array(
      'design',
      'development',
      'ecommerce',
      'video'
    );
    foreach($taxonomies as $taxonomy) {
      for($i = 0; $i < rand(2, 4); $i++) {
    ?>
      <div class="portfolio-piece" data-taxonomy="<?php echo $taxonomy; ?>">
      <div class="thumbnail" style="background-image: url(http://placekitten.com/<?php echo rand(390, 410); ?>/<?php echo rand(295, 305); ?>)"></div>
        <p class="title">Design Piece</p>
        <p class="excerpt">Aenean vulputate eleifend tellus. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Etiam vitae tortor.</p>
      </div>
    <?php } } ?>
    </div>
  </div>
</div>
