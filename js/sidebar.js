export function sidebar() {
  const openBar = document.querySelectorAll('#openBar');
  const navLink = document.querySelector('#navLink');
  const navLinkLi = navLink.querySelectorAll(':scope > li');

  openBar.forEach((i) => i.addEventListener('click', openAndCloseBar));

  function openAndCloseBar() {
    navLink.classList.toggle('d-none');
    sideBar.classList.toggle('d-none');
  }

  navLinkLi.forEach((i) => {
    i.addEventListener('click', () => {
      openAndCloseBar();
    });
  });
}