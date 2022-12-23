export function getSingleProject() {
  const portfolioProjects = document.querySelector('#Portfolio')
  const getAllPortfolioProjects = Array.from(portfolioProjects.firstElementChild.getElementsByTagName('button'))
  const main = document.querySelector('main');

  getAllPortfolioProjects.forEach(i => {
    if (i.innerHTML == 'See Project') {
      i.addEventListener('click', function () {
        const createPopupCard = document.createElement('div')
        createPopupCard.setAttribute('class', 'popup-card')
        main.prepend(createPopupCard)

        const createDivContainer = `
      <div class="popup-top z-index-1">
        <article class="card height">
          <div class="mt-24-card">
              <div class="d-flex justify-content-end">
                  <i class="fa-solid fa-xmark" id="closeProject" ></i>
              </div>

              <div>
                  <div class="weight--700 card-sub-title">
                      Tonic
                  </div>
                  <ul class="list-style-type-none d-flex weight--600--500 canopy">
                      <li class="canopy-bold">Canopy</li>
                      <li class="dot"></li>
                      <li class="canopy-not-bold">back end Dev</li>
                      <li class="dot"></li>
                      <li>2015</li>
                  </ul>
              </div>

              <img src="./assets/images/Snapshoot-5.svg" alt="project image" />
              <div class="my-59 grid-container">
                  <div class="col-8">
                      <p class="card-title weight--400">Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit.
                          Modi, reprehenderit? Repudiandae optio asperiores nisi aliquid, aperiam libero
                          deleniti
                          voluptate officiis deserunt dolorem praesentium iure aspernatur inventore nam,
                          maiores
                          sapiente culpa vel beatae consectetur at, odio dolorum? Saepe delectus officiis quam
                          repellat quibusdam laboriosam, labore esse. Repudiandae, distinctio deleniti animi
                          hic
                          nam et soluta beatae ab, voluptas voluptatem, quis delectus commodi? Facilis
                          voluptate
                          ut quia, praesentium id reprehenderit cum corporis facere saepe exercitationem
                          adipisci,
                          nobis nemo a tempore recusandae autem perspiciatis amet. Culpa impedit eum
                          quibusdam,
                          repellendus aliquam natus aspernatur cupiditate? Vel dolorem deserunt doloremque
                          autem
                          voluptas asperiores ratione ullam saepe?</p>
                  </div>
                  <div class="col-4">
                      <ul class="list-style-type-none grid-lang weight--500">
                          <li>html</li>
                          <li>css</li>
                          <li>javaScript</li>
                          <li>github</li>
                          <li>ruby</li>
                          <li>bootstrap</li>
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
        `
        const skipFirstChild = main.childNodes
        skipFirstChild[2].innerHTML += createDivContainer

        document.querySelector('#closeProject').addEventListener('click', function () {
          createPopupCard.remove()
          const getLastChild = Array.from(skipFirstChild)
          getLastChild[1].lastElementChild.remove()
          location.reload()
        })
      })
    }
  })


}