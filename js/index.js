// Плавная прокрутка по клику
const anchors = document.querySelectorAll('.btn-scroll');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('data-scroll');    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

$('.view').magnificPopup({  
  type: 'image',
  gallery: {
    enabled: true
  }  
});

$('.grid__item').magnificPopup({  
  type: 'image',
  gallery: {
    enabled: true
  }  
});