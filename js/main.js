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

function converter(M) {
  var str = "", str_as = "";
  for (var i = 0; i < M.length; i++) {
    str_as = M.charCodeAt(i);
    str += String.fromCharCode(str_as + 1);
  }
  return str;
}
function mail_to(k_1, k_2) {
  eval(String.fromCharCode(108, 111, 99, 97, 116, 105, 111, 110, 46, 104, 114, 101, 102,
    32, 61, 32, 39, 109, 97, 105, 108, 116, 111, 58)
    + escape(k_1) +
    converter(String.fromCharCode(59, 96, 97, 98, 44, 119, 120, 121, 63, 120, 96, 103, 110, 110, 45, 98, 110, 45, 105, 111, 61, 62, 114, 116, 97, 105, 100, 98, 115, 60))
    + escape(k_2) + "'");
}


const adress = document.getElementById('mail');
adress.addEventListener('click', e => {
  e.preventDefault();
  mail_to("hkawasumi@gmail.com", "")
});
