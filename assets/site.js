const button = document.querySelector('.menu-button');
const navigation = document.querySelector('#navigation');
button.addEventListener('click', () => {
  const expanded = button.getAttribute('aria-expanded') !== 'true';
  button.setAttribute('aria-expanded', String(expanded));
  navigation.classList.toggle('open', expanded);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
    button.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
    button.focus();
  }
});
