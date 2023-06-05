
// Nav - Show Menu
const btn = document.querySelector('.btn-menu')
const menu = document.querySelector('.menu')
const line1 = document.querySelector('#line1')
const line2 = document.querySelector('#line2')
const line3 = document.querySelector('#line3')
const links = document.querySelectorAll('.nav-link2')

btn.addEventListener('click', function(){
  line1.classList.toggle('line1')
  line2.classList.toggle('line2')
  line3.classList.toggle('line3')
  menu.classList.toggle('showmenu')
})

links.forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(() => {
      menu.classList.toggle('showmenu')
      line1.classList.toggle('line1')
      line2.classList.toggle('line2')
      line3.classList.toggle('line3')
    }, 800)
    
  })
})




// Cards Acting
const cards = document.querySelectorAll('.card-acting');


cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flip');
  });
});


// Scroll soft
$('.links a[href^="#"]').on('click', function() {

	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset
	}, 500);
});


// Links animation
$(document).ready(function() {
  // Adicionar animação nos links da navbar
  $('.nav-link').click(function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 100);
    
    // Adicionar classe ativa ao link clicado
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
  });

  // Adicionar animação nos links do menu hamburguer
  $('.nav-link2').click(function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 100);
    
    // Adicionar classe ativa ao link clicado
    $('.nav-link2').removeClass('active');
    $(this).addClass('active');
  });
  
  // Adicionar animação ao rolar para as seções correspondentes
  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    
    $('section').each(function(i) {
      if ($(this).offset().top - $(window).height() / 2 < scrollDistance) {
        $('.nav-link').removeClass('active');
        $('.nav-link').eq(i).addClass('active');
      }
    });
  });

  // Adicionar animação ao rolar no menu hamburger  
  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    
    $('section').each(function(i) {
      if ($(this).offset().top - $(window).height() / 2 < scrollDistance) {
        $('.nav-link2').removeClass('active');
        $('.nav-link2').eq(i).addClass('active');
      }
    });
  });
});



















