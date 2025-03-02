document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('discount-banner');
    const closeButton = document.getElementById('close-banner');

    // Show the banner after a 3-second delay
    setTimeout(() => {
        banner.style.display = 'flex';
        banner.style.animation = 'slideIn 0.5s ease-out';
    }, 3000);

    closeButton.addEventListener('click', function() {
        banner.style.animation = 'slideOut 0.5s ease-in';
        setTimeout(() => {
            banner.style.display = 'none';
        }, 500);
    });
});
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     freeMode: true,
//     pagination: {
//     //   el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
var swiper = new Swiper(".mySwiper", {});

document.querySelectorAll('.swiper-wrapper img').forEach(image =>{

    image.onclick = () =>{
    
    document.querySelector('.image_container').style.display = 'block';
    
    document.querySelector('.image_container img').src = image.getAttribute("src");
    
    }
    
    });
    
    document.querySelector('.image_container span').onclick = () =>{
    
    document.querySelector('.image_container').style.display = 'none'
    
    }
    