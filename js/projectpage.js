const urlParams = new URLSearchParams(window.location.search);
projectData = projects[urlParams.get("id")];
let projectDataHTML = "";
if (projectData) {
  projectDataHTML = `
  <h1 id=${projectData.id}>${projectData.title}</h1>
  <p class="lead">
    ${projectData.abstract}
  </p>
  <img
    class="img-responsive pull-left"
    src=${projectData.image}
    style="margin: 0.5rem 2rem 0.5rem 0"
  />
`;
}
document.getElementById("project-data").innerHTML = projectDataHTML;
