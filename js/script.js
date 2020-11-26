import ScrollSuave from './modules/scroll-suave.js';
import ScrollAnima from './modules/scroll-anima.js';
// import Modal from './modules/modal.js';

const scrollSuave = new ScrollSuave('.menu a[href^="#"]');
scrollSuave.init();
const scrollAnima = new ScrollAnima('.js-scroll');
scrollAnima.init();
