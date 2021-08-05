import '../styles.css';
import dishes from '../menu.json';
import itemsDish from '../templates/menu-items.hbs';

const galleryRef = document.querySelector('.js-menu');
const markUp = itemsDish(dishes);
galleryRef.insertAdjacentHTML('beforeend', markUp);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const PAGE_THEME = 'body-theme';

const refs = {
  bodyEl: document.querySelector('body'),
  checkboxEl: document.querySelector('#theme-switch-toggle'),
};

//устанавливает тему по умолчанию
installThemeDefault();
//возобновляет текущую тему после перезагрузки
installThemeReload();

//Обработчик клика по переключателю темы
refs.checkboxEl.addEventListener('change', onChangeTheme);


function installThemeDefault() {
  const valTheme = localStorage.getItem(PAGE_THEME);
  if (!valTheme) {
    refs.bodyEl.classList.add(Theme.DARK);
  }
}
function installThemeReload() {
  const valueTheme = localStorage.getItem(PAGE_THEME);
  if (valueTheme === Theme.LIGHT) {
    refs.bodyEl.classList.add(Theme.LIGHT);
  } else {
    refs.bodyEl.classList.add(Theme.DARK);
    refs.checkboxEl.checked = true;
  }
}

//Колбек клика по переключателю темы
function onChangeTheme(evt) {
  //меняем темы при событии
  let theme = '';
  if (refs.bodyEl.classList.contains(Theme.LIGHT)) {
    refs.bodyEl.classList.replace(Theme.LIGHT, Theme.DARK);
    theme = Theme.DARK;
    localStorage.setItem(PAGE_THEME, theme);
  } else {
    refs.bodyEl.classList.replace(Theme.DARK, Theme.LIGHT);
    theme = Theme.LIGHT;
    localStorage.setItem(PAGE_THEME, theme);
  }
}