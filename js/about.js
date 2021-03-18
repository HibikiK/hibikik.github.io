'use strict'

jQuery(document).ready(function () {
  let offset = 100;
  let duration = 500;
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.pagetop').fadeIn(duration);
    } else {
      jQuery('.pagetop').fadeOut(duration);
    }
  });

  jQuery('.pagetop').click(function (event) {
    event.preventDefault();
    jQuery('html, body').animate({ scrollTop: 0 }, duration);
    return false;
  })
});


const menuItems = document.querySelectorAll('.menu li a');
const contents = document.querySelectorAll('.content');

menuItems.forEach(clickedItem => {
  clickedItem.addEventListener('click', e => {
    e.preventDefault();

    menuItems.forEach(item => {
      item.classList.remove('active');
    });
    clickedItem.classList.add('active');

    contents.forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(clickedItem.dataset.id).classList.add('active');
  });
});
