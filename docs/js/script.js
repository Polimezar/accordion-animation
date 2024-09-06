
const accordionBlock = document.querySelector('[data-accordion]');
const accordionItems = accordionBlock.querySelectorAll('.accordion__item');
const accordionBtn = accordionBlock.querySelectorAll('.accordion__btn');

function toggleAccordion() {
  const thisItem = this.parentNode;
  
  accordionItems.forEach(item => {
    if (thisItem == item) {
      thisItem.classList.toggle('show');
      return;
    }
  
    item.classList.remove('show');
  });
}

accordionBtn.forEach(btn => btn.addEventListener('click', toggleAccordion));
