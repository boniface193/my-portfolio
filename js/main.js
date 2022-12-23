import { projectInfo } from "./objects.js"
import { getSingleProject } from "./projects.js"
import { sidebar } from "./sidebar.js"

sidebar()

const portfolioProjects = document.querySelector('#Portfolio')

projectInfo.forEach((i, index) => {
  portfolioProjects.firstElementChild.innerHTML +=
    `<article class="d-flex card">
        <img src="${i.image}" alt="${index + 1} project image">

        <aside class="mt-12">
            <div class="weight--700 card-sub-title">
                ${i.title}
            </div>
            <ul class="list-style-type-none d-flex weight--600--500 canopy">
                <li class="canopy-bold">${i.project.projectTitle}</li>
                <li class="dot"></li>
                <li class="canopy-not-bold">${i.project.stack}</li>
                <li class="dot"></li>
                <li>${i.project.yearCompleted}</li>
            </ul>
            <p class="card-title weight--400">${i.description.short}</p>
            <ul class="list-style-type-none d-flex lang padding-every-where weight--500">
            ${i.language.map(l => `<li>${l}</li>`).join("")}
            </ul>
            ${i.buttons.seeProject ? `<button type="button" class="btn weight--500">See Project</button>` : ``}
        </aside>
    </article>`
});

getSingleProject()