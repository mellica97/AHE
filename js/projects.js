const projects = [
  {
    title: "Engineering Curricula Study",
    id: "engineering_curricula_study",
    abstract: `Despite being the most challenging path of study, engineering 
      occupations are among the highest-paying and most prestigious 
      in the US labor market and only require a bachelor's degree for an
      entry level position. Although there are many engineering 
      programs throughout the US, a few stand out among the rest. We 
      have chosen top 20 peer comparison groups based on the U.S. 
      News & World Report 2022 Best Undergraduate Engineering 
      Programs rankings. In this study we are collecting the degree plan
      from public websites, using Julia programming language analyzing
      curricula and degree plans across the 20 top tier schools of United
      States in five different highest paid engineering disciplines to 
      achieve the structural equity in higher education. The goal is to 
      set a new standard for curriculum review and reform that will 
      dramatically affect time to degree and on time graduation success, especially for students with limited incomes or otherwise
      challenged after the pandemic.  `,
    link: "projects.html#engineering_curricula_study",
    video: "",
    image: "img/engineering-study.png",
  },
  {
    title: "Cap Project",
    id: "cap",
    abstract: `This project focuses on exploring and validating the use of the open-source Curricular Analytics Toolbox as an effective means to achieve 
    equitable student success and close achievement gaps for Pell recipients at public and private research universities.32 research universities who have 
    30 percent or higher Pell recipient undergraduate students are participating in this project. The main purpose of this project is to validate the 
    relationship between curricular structure (eg. overall complexity, course bottlenecks, unnecessary prerequisites) and time to degree and reduce 
    achievement gaps for the undergraduate students and Pell recipients. The outcomes of this project will be used to guide institutional change that will 
    benefit undergraduate students for greater academic success. This project is currently funded by UERU/Ascendium Education Group.</br> Curricular 
    Analytics toolbox Website : <a href="https://curricularanalytics.org">https://curricularanalytics.org </a></br>UERU website: <a href="https://ueru.org/">https://ueru.org</a> `,
    link: "projects.html#cap",
    video: "",
    image: "img/cap.png",
  },
  {
    title: "Curricular Analytics Infrastructure",
    id: "curricular_analytics_infrastructure",
    abstract: `The goal of this project is to design a new data warehouse for curricular analytics applications, which collects data from our current database and can store curricula, degree plans, and degree requirements.We seek to design a new system that is easy to query, maintainable, and scalable.</br> scope of the project:</br> 
    1. Provide a comprehensive documentation of the current blackbriar database design </br>
    2. Provide a writeup of the existing blackbriar use cases (blackbriar-admin, blackbriar-podium, the transfer site, CA_API)</br>
    3. Collect, organize, clean, and consolidate existing blackbriar documentation</br>
    4. Provide a high-level design of a new blackbriar database that would satisfy the use cases of existing applications</br>
    5. Provide high-level design of a new blackbriar api </br>

    tracking project : <a href="https://myua.atlassian.net/jira/software/projects/VIP/boards/5">myua.atlassian.net/jira/software/projects/VIP</a>

  
    `,
    link: "projects.html#curricular_analytics_infrastructure",
    video: "",
    image: "img/infrastructure.png",
  },
  {
    title: "Transfer Student Portal",
    id: "transfer_student_portal",
    abstract: `Transfer Student Portal is a single page application that makes it easy for students to transfer to other schools. Students can use this website to pick their starting school, completed courses, as well as their destination school and program In order to receive a transfer report which is a degree plan to completion </br>
      Tracking project: <a href="https://myua.atlassian.net/jira/software/projects/TA/boards/4">myua.atlassian.net/jira/software/projects/TA</a>`,
    link: "projects.html#transfer_student_portal",
    video: "",
    image: "img/transfer-portal.png",
  },
  {
    title: "Cohort Analytics",
    id: "cohort_analytics",
    abstract: `Tracking project : <a href="https://myua.atlassian.net/jira/software/projects/CA/boards/1">myua.atlassian.net/jira/software/projects/CA</a>`,
    link: "projects.html#cohort_analytics",
    video: "",
    image: "",
  },
  {
    title: "CatCoin",
    id: "catcoin",
    abstract: `CatCoin is a campus-based cryptocurrency used for the purposes of teaching students about various aspects of Distributed Ledger Technology 
    and incentivizing student outcomes aligned with institutional values, as a part of University of Arizona’s strategic plan as preparing students to 
    thrive and make positive societal contributes as a part of the ongoing Fourth Industrial Revolution.</br> Tracking project : 
    <a href="https://myua.atlassian.net/jira/software/projects/CAT/boards/3">myua.atlassian.net/jira/software/projects/CAT</a>`,
    link: "projects.html#catcoin",
    video: "",
    image: "",
  },
  {
    title: "Learning Outcomes Optimization",
    id: "learning_outcome_optimization",
    abstract: "",
    link: "projects.html#learning_outcome_optimization",
    video: "",
    image: "",
  },
];
let projectListHTML = "";
let projectsHTML = "";
for ({ title, link } of projects) {
  projectListHTML += `<li role="presentation"><a href="${link}">${title}</a></li>`;
}
document.getElementById("projects").innerHTML = projectListHTML;

if (publications.length === 0) {
  document.getElementById(
    "project-content"
  ).innerHTML = `<h4>No projects yet. </h4>`;
} else {
  let projectsHTML = "";

  for ({ title, abstract, image, id } of projects) {
    projectsHTML += `
    <h1 id=${id}>${title}</h1>
    <p class="lead">
      ${abstract}
    </p>
    <img
      class="img-responsive pull-left"
      src=${image}
      style="margin: 0.5rem 2rem 0.5rem 0"
    />
    <hr></hr>`;
  }
  document.getElementById("project-content").innerHTML = projectsHTML;
}
