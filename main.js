const burgerIcon = document.getElementById('icon-menu');

burgerIcon.addEventListener('click', (e) => {
  console.log('click', e);

  if (document.body.classList.contains('menu-open')) {
    document.body.classList.remove('menu-open');
  } else {
    document.body.classList.add('menu-open');
  }
});
