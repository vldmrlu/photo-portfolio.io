const portfolioBlock = document.querySelector('.portfolio');
if (portfolioBlock) {
  AOS.init();
}

document.querySelectorAll('.portfolio-img')
  .forEach( (img) => 
    img.addEventListener('load' , () => 
      AOS.refresh()
      )
  );