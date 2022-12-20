const navLink = document.querySelector('#navLink');
const sideBar = document.querySelector('#sideBar');

function openBar() {
  navLink.classList.toggle('d-none');
  sideBar.classList.toggle('d-none');
}
