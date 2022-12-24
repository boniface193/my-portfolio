function sidebar() {
  const openBar = document.querySelectorAll('#openBar');
  const sideBar = document.querySelector('#sideBar');
  const navLink = document.querySelector('#navLink');
  const navLinkLi = navLink.querySelectorAll(':scope > li');

  function openAndCloseBar() {
    sideBar.classList.toggle('d-none');
    navLink.classList.toggle('d-none');
  }

  openBar.forEach((i) => i.addEventListener('click', openAndCloseBar));
  navLinkLi.forEach((i) => i.addEventListener('click', openAndCloseBar));
}

export default sidebar;
