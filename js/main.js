import projectInfo from './objects.js';
import getSingleProject from './projects.js';
import sidebar from './sidebar.js';

sidebar();

const portfolioProjects = document.querySelector('#Portfolio');
const formValidate = document.querySelector('#validateForm');

projectInfo.forEach((element, index) => {
  portfolioProjects.firstElementChild.innerHTML += `<article class="d-flex card">
        <img src="${element.image}" alt="${index + 1} project image">

        <aside class="mt-12">
            <div class="weight--700 card-sub-title">
                ${element.title}
            </div>
            <ul class="list-style-type-none d-flex weight--600--500 canopy">
                <li class="canopy-bold">${element.project.projectTitle}</li>
                <li class="dot"></li>
                <li class="canopy-not-bold">${element.project.stack}</li>
                <li class="dot"></li>
                <li>${element.project.yearCompleted}</li>
            </ul>
            <p class="card-title weight--400">${element.description.short}</p>
            <ul class="list-style-type-none d-flex lang padding-every-where weight--500">
            ${element.language.map((l) => `<li>${l}</li>`).join('')}
            </ul>
            ${element.buttons.seeProject
      ? '<button type="button" class="btn weight--500">See Project</button>'
      : ''
    }
      </aside>
    </article>`;
});

getSingleProject();

const allInput = Array.from(formValidate.querySelectorAll('input'));
const msgArea = formValidate.querySelector('textarea')

formValidate.addEventListener('submit', (params) => {
  const isLowerCase = allInput[1];

  if (isLowerCase.value !== isLowerCase.value.toLowerCase()) {
    const errorMsg = document.querySelector('.error');
    errorMsg.innerText = 'Please make sure your email address is in lower case';
    errorMsg.classList.toggle('d-none');
    params.preventDefault();
    return false;
  }

  const payLoads = {
    fullname: allInput[0].value,
    email: isLowerCase.value,
    message: msgArea.value
  }

  localStorage.setItem("payLoads", JSON.stringify(payLoads))

  return true;
});
