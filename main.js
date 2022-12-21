const navLink = document.querySelector('#navLink');
const sideBar = document.querySelector('#sideBar');
const navLinkLi = navLink.querySelectorAll(':scope > li');

function openBar() {
  navLink.classList.toggle('d-none');
  sideBar.classList.toggle('d-none');
}

navLinkLi.forEach(i => {
  i.addEventListener('click', function() {
    openBar()
  })
});