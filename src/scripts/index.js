/* eslint-disable new-cap */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import swRegister from './utils/sw-resgister';
import App from './views/app';

const app = new App({
  button: document.querySelector('.menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
