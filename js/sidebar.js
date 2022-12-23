function sidebar() {
  const openBar = document.querySelectorAll('#openBar');
  const navLink = document.querySelector('#navLink');
  const navLinkLi = navLink.querySelectorAll(':scope > li');

  function openAndCloseBar() {
    navLink.classList.toggle('d-none');
    openBar.classList.toggle('d-none');
  }

  openBar.forEach((i) => i.addEventListener('click', openAndCloseBar));

  navLinkLi.forEach((i) => {
    i.addEventListener('click', () => {
      openAndCloseBar();
    });
  });
}

export default sidebar;
