import projectInfo from './objects.js';

function getSingleProject() {
  const portfolioProjects = document.querySelector('#Portfolio');
  const getAllPortfolioProjects = Array.from(
    portfolioProjects.firstElementChild.getElementsByTagName('button'),
  );
  const main = document.querySelector('main');

  getAllPortfolioProjects.forEach((element, index) => {
    if (element.innerHTML === 'See Project') {
      element.addEventListener('click', () => {
        const createPopupCard = document.createElement('div');
        createPopupCard.setAttribute('class', 'popup-card');
        main.prepend(createPopupCard);

        const singleProject = projectInfo[index];

        const createDivContainer = `
      <div class="popup-top z-index-1">
        <article class="card height">
          <div class="mt-24-card">
              <div class="d-flex justify-content-end cursor-pointer">
                  <i class="fa-solid fa-xmark" id="closeProject" ></i>
              </div>

              <div>
                  <div class="weight--700 card-sub-title">
                      ${singleProject.title}
                  </div>
                  <ul class="list-style-type-none d-flex weight--600--500 canopy">
                      <li class="canopy-bold">
${singleProject.project.projectTitle}
</li>
                      <li class="dot"></li>
                      <li class="canopy-not-bold">
${singleProject.project.stack}</li>
                      <li class="dot"></li>
                      <li>${singleProject.project.yearCompleted}</li>
                  </ul>
              </div>

              <img src="${singleProject.image}" alt="project image" />
              <div class="my-59 grid-container">
                  <div class="col-8">
                      <p class="card-title weight--400">
${singleProject.description.long}</p>
                  </div>
                  <div class="col-4">
                      <ul class="list-style-type-none grid-lang weight--500">
                         ${singleProject.language
    .map((l) => `<li>${l}</li>`)
    .join('')} 
</ul>
                      <div class="hr-2 mb-24"></div>
                      <div class="spa-btn">
                          <button type="button"
                              class="btn d-flex justify-content-between align-items-center mr-10">
                              <span> See live</span>
                              <img src="./assets/images/Export.svg" alt="view live icon" width="24px"
                                  height="24px" class="m-0">
                          </button>
                          <button type="button"
                              class="btn d-flex justify-content-between align-items-center"><span
                                  >See Source</span>
                              <i class="fa-brands fa-github"></i></button>
                      </div>

                  </div>
              </div>
            </div>
          </article>
        </div>
        `;
        const skipFirstChild = main.childNodes;
        skipFirstChild[2].innerHTML += createDivContainer;

        document
          .querySelector('#closeProject')
          .addEventListener('click', () => {
            createPopupCard.remove();
            const getLastChild = Array.from(skipFirstChild);
            getLastChild[1].lastElementChild.remove();
            window.reload();
          });
      });
    }
  });
}

export default getSingleProject;
