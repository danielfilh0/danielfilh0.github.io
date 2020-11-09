function initTabNavigation() {
  const tabMenu = document.querySelectorAll('.js-tabmenu img');
  const tabContent = document.querySelectorAll('.js-tabcontent .descricao-single');
  const tabButton = document.querySelectorAll('.js-tabbutton');

  if(tabMenu.length && tabContent.length && tabButton.length) {
    tabContent[0].classList.add('ativo');
    tabButton[0].classList.add('ativo');
    function activeTabContent(index) {
      tabContent.forEach((descricaoSingle) => {
        descricaoSingle.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }
    function activeTabButton(index) {
      tabButton.forEach((button) => {
        button.classList.remove('ativo');
      });
      tabButton[index].classList.add('ativo');
      tabButton[index++].classList.add('ativo');
    }
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTabContent(index);
        activeTabButton(index);
      })
    });
  }
}
function initScrollSlow() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
function initScrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible) {
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo');
        }
      });
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
initTabNavigation();
initScrollSlow();
initScrollAnimation();




